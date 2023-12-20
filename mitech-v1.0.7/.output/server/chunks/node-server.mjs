globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import 'node-fetch-native/polyfill';
import { Server as Server$1 } from 'node:http';
import { Server } from 'node:https';
import destr from 'destr';
import { eventHandler, setHeaders, sendRedirect, defineEventHandler, handleCacheHeaders, createEvent, getRequestHeader, getRequestHeaders, setResponseHeader, createError, createApp, createRouter as createRouter$1, lazyEventHandler, toNodeListener } from 'h3';
import { createFetch as createFetch$1, Headers } from 'ofetch';
import { createCall, createFetch } from 'unenv/runtime/fetch/index';
import { createHooks } from 'hookable';
import { u as useRuntimeConfig } from './config.mjs';
import { hash } from 'ohash';
import { withoutBase, parseURL, withQuery, joinURL, withLeadingSlash, withoutTrailingSlash } from 'ufo';
import { createStorage } from 'unstorage';
import defu from 'defu';
import { toRouteMatcher, createRouter } from 'radix3';
import { promises } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'pathe';

const _assets = {

};

function normalizeKey(key) {
  if (!key) {
    return "";
  }
  return key.replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "");
}

const assets$1 = {
  getKeys() {
    return Promise.resolve(Object.keys(_assets))
  },
  hasItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(id in _assets)
  },
  getItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].import() : null)
  },
  getMeta (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].meta : {})
  }
};

const storage = createStorage({});

const useStorage = () => storage;

storage.mount('/assets', assets$1);

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler() {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      return sendRedirect(
        event,
        routeRules.redirect.to,
        routeRules.redirect.statusCode
      );
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    const path = new URL(event.node.req.url, "http://localhost").pathname;
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(path, useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro";
  const name = opts.name || fn.name || "_";
  const integrity = hash([opts.integrity, fn, opts]);
  const validate = opts.validate || (() => true);
  async function get(key, resolver, shouldInvalidateCache) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    const entry = await useStorage().getItem(cacheKey) || {};
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || !validate(entry);
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      entry.value = await pending[key];
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry)) {
          useStorage().setItem(cacheKey, entry).catch((error) => console.error("[nitro] [cache]", error));
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (opts.swr && entry.value) {
      _resolvePromise.catch(console.error);
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = opts.shouldInvalidateCache?.(...args);
    const entry = await get(key, () => fn(...args), shouldInvalidateCache);
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length > 0 ? hash(args, {}) : "";
}
function escapeKey(key) {
  return key.replace(/[^\dA-Za-z]/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const key = await opts.getKey?.(event);
      if (key) {
        return escapeKey(key);
      }
      const url = event.node.req.originalUrl || event.node.req.url;
      const friendlyName = escapeKey(decodeURI(parseURL(url).pathname)).slice(
        0,
        16
      );
      const urlHash = hash(url);
      return `${friendlyName}.${urlHash}`;
    },
    validate: (entry) => {
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: [opts.integrity, handler]
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const reqProxy = cloneWithProxy(incomingEvent.node.req, { headers: {} });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            for (const header in headers2) {
              this.setHeader(header, headers2[header]);
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.context = incomingEvent.context;
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = headers.Etag || headers.etag || `W/"${hash(body)}"`;
      headers["last-modified"] = headers["Last-Modified"] || headers["last-modified"] || new Date().toUTCString();
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(event);
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      event.node.res.setHeader(name, response.headers[name]);
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

const plugins = [
  
];

function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || event.node.req.url?.endsWith(".json") || event.node.req.url?.includes("/api/");
}
function normalizeError(error) {
  const cwd = process.cwd();
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Not Found" : "");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}

const errorHandler = (async function errorhandler(error, event) {
  const { stack, statusCode, statusMessage, message } = normalizeError(error);
  const errorObject = {
    url: event.node.req.url,
    statusCode,
    statusMessage,
    message,
    stack: "",
    data: error.data
  };
  event.node.res.statusCode = errorObject.statusCode !== 200 && errorObject.statusCode || 500;
  if (errorObject.statusMessage) {
    event.node.res.statusMessage = errorObject.statusMessage;
  }
  if (error.unhandled || error.fatal) {
    const tags = [
      "[nuxt]",
      "[request error]",
      error.unhandled && "[unhandled]",
      error.fatal && "[fatal]",
      Number(errorObject.statusCode) !== 200 && `[${errorObject.statusCode}]`
    ].filter(Boolean).join(" ");
    console.error(tags, errorObject.message + "\n" + stack.map((l) => "  " + l.text).join("  \n"));
  }
  if (isJsonRequest(event)) {
    event.node.res.setHeader("Content-Type", "application/json");
    event.node.res.end(JSON.stringify(errorObject));
    return;
  }
  const isErrorPage = event.node.req.url?.startsWith("/__nuxt_error");
  const res = !isErrorPage ? await useNitroApp().localFetch(withQuery(joinURL(useRuntimeConfig().app.baseURL, "/__nuxt_error"), errorObject), {
    headers: getRequestHeaders(event),
    redirect: "manual"
  }).catch(() => null) : null;
  if (!res) {
    const { template } = await import('./error-500.mjs');
    event.node.res.setHeader("Content-Type", "text/html;charset=UTF-8");
    event.node.res.end(template(errorObject));
    return;
  }
  for (const [header, value] of res.headers.entries()) {
    setResponseHeader(event, header, value);
  }
  if (res.status && res.status !== 200) {
    event.node.res.statusCode = res.status;
  }
  if (res.statusText) {
    event.node.res.statusMessage = res.statusText;
  }
  event.node.res.end(await res.text());
});

const assets = {
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"25e-/ag/n6luBkhVyx4dYZNju1lYFjA\"",
    "mtime": "2023-02-18T09:36:10.000Z",
    "size": 606,
    "path": "../public/favicon.ico"
  },
  "/images/favicon.png": {
    "type": "image/png",
    "etag": "\"25e-/ag/n6luBkhVyx4dYZNju1lYFjA\"",
    "mtime": "2020-04-16T12:17:04.000Z",
    "size": 606,
    "path": "../public/images/favicon.png"
  },
  "/images/loading.gif": {
    "type": "image/gif",
    "etag": "\"1052-Fadq8nOUgtjec1SrxtjcT8qNFF4\"",
    "mtime": "2020-04-16T12:17:04.000Z",
    "size": 4178,
    "path": "../public/images/loading.gif"
  },
  "/_nuxt/about.434d9149.js": {
    "type": "application/javascript",
    "etag": "\"ba4-LfWofIT7m0k7t/nBFB5+3f2CJZM\"",
    "mtime": "2023-12-19T03:06:50.981Z",
    "size": 2980,
    "path": "../public/_nuxt/about.434d9149.js"
  },
  "/_nuxt/About.4d88a1bd.js": {
    "type": "application/javascript",
    "etag": "\"1879-ypOm7guIPmsRL74fwRJDE64ClAw\"",
    "mtime": "2023-12-19T03:06:51.003Z",
    "size": 6265,
    "path": "../public/_nuxt/About.4d88a1bd.js"
  },
  "/_nuxt/accordion.c99c9b13.js": {
    "type": "application/javascript",
    "etag": "\"dd1-o12RiK+sVUlD+5jb2UjiDJBK660\"",
    "mtime": "2023-12-19T03:06:50.999Z",
    "size": 3537,
    "path": "../public/_nuxt/accordion.c99c9b13.js"
  },
  "/_nuxt/AccordionTwo.67a87142.js": {
    "type": "application/javascript",
    "etag": "\"a64-GF+QJzgPFX/NxvlZzuo+stFgA7A\"",
    "mtime": "2023-12-19T03:06:51.000Z",
    "size": 2660,
    "path": "../public/_nuxt/AccordionTwo.67a87142.js"
  },
  "/_nuxt/Appointment.8b68edbf.js": {
    "type": "application/javascript",
    "etag": "\"4ebb-WRqwBHVAZiOdFRvlryMAWsQjZ7s\"",
    "mtime": "2023-12-19T03:06:51.005Z",
    "size": 20155,
    "path": "../public/_nuxt/Appointment.8b68edbf.js"
  },
  "/_nuxt/AppointmentForm.bc1d1ceb.js": {
    "type": "application/javascript",
    "etag": "\"4f6-iyJ8O1Z8TJGgIfYmeP4KQ/8FnV0\"",
    "mtime": "2023-12-19T03:06:50.973Z",
    "size": 1270,
    "path": "../public/_nuxt/AppointmentForm.bc1d1ceb.js"
  },
  "/_nuxt/autoplay.2fa369d8.js": {
    "type": "application/javascript",
    "etag": "\"bcc-Ns2UE1Cs3BaXBER4TUK/OU8GZgA\"",
    "mtime": "2023-12-19T03:06:50.982Z",
    "size": 3020,
    "path": "../public/_nuxt/autoplay.2fa369d8.js"
  },
  "/_nuxt/axios.a94ada41.js": {
    "type": "application/javascript",
    "etag": "\"7359-kMvgSgbsapXKxwtRDjbBp5V6jOE\"",
    "mtime": "2023-12-19T03:06:51.006Z",
    "size": 29529,
    "path": "../public/_nuxt/axios.a94ada41.js"
  },
  "/_nuxt/blog-details.f1c45cd4.js": {
    "type": "application/javascript",
    "etag": "\"23b3-K897PrkK2LZOGcqkjDhNF0Q8ypc\"",
    "mtime": "2023-12-19T03:06:51.004Z",
    "size": 9139,
    "path": "../public/_nuxt/blog-details.f1c45cd4.js"
  },
  "/_nuxt/blog.93ec568a.js": {
    "type": "application/javascript",
    "etag": "\"eb3-iS/jZm06pcmOFBlTWKxjzsNo540\"",
    "mtime": "2023-12-19T03:06:50.995Z",
    "size": 3763,
    "path": "../public/_nuxt/blog.93ec568a.js"
  },
  "/_nuxt/BlogStyleOne.90645fcc.js": {
    "type": "application/javascript",
    "etag": "\"7b9-y4M1i/PaERVwRdulVUMidOPeDts\"",
    "mtime": "2023-12-19T03:06:50.992Z",
    "size": 1977,
    "path": "../public/_nuxt/BlogStyleOne.90645fcc.js"
  },
  "/_nuxt/box-icon.df2a78ce.js": {
    "type": "application/javascript",
    "etag": "\"3f1-7RqiVY18l2LafaIquArsQxFcsfo\"",
    "mtime": "2023-12-19T03:06:51.003Z",
    "size": 1009,
    "path": "../public/_nuxt/box-icon.df2a78ce.js"
  },
  "/_nuxt/box-image.d11164f5.js": {
    "type": "application/javascript",
    "etag": "\"911-fqvJ44EQmwLMVH/uoklV8uXVMzY\"",
    "mtime": "2023-12-19T03:06:50.990Z",
    "size": 2321,
    "path": "../public/_nuxt/box-image.d11164f5.js"
  },
  "/_nuxt/box-large-image.5a489adc.js": {
    "type": "application/javascript",
    "etag": "\"e02-+rYpoww3Er8xzPoEGpqpZG01O88\"",
    "mtime": "2023-12-19T03:06:50.998Z",
    "size": 3586,
    "path": "../public/_nuxt/box-large-image.5a489adc.js"
  },
  "/_nuxt/BrandLogoCarousel.b9ed8787.js": {
    "type": "application/javascript",
    "etag": "\"8d9-fhcMD0FbNGFf9Esd8I4ZKk93veQ\"",
    "mtime": "2023-12-19T03:06:50.992Z",
    "size": 2265,
    "path": "../public/_nuxt/BrandLogoCarousel.b9ed8787.js"
  },
  "/_nuxt/Breadcrumbs.f36a8084.js": {
    "type": "application/javascript",
    "etag": "\"31f-/GCyr/noy/VYdjXRgjqJxn8ZlnA\"",
    "mtime": "2023-12-19T03:06:51.003Z",
    "size": 799,
    "path": "../public/_nuxt/Breadcrumbs.f36a8084.js"
  },
  "/_nuxt/call-to-action.abe8af55.js": {
    "type": "application/javascript",
    "etag": "\"2de-Q8bFDF/QALNJyymH04HQo4AMQZU\"",
    "mtime": "2023-12-19T03:06:51.003Z",
    "size": 734,
    "path": "../public/_nuxt/call-to-action.abe8af55.js"
  },
  "/_nuxt/caseStidies.34905284.js": {
    "type": "application/javascript",
    "etag": "\"96e-jlRX+WFvyULg0jw8M/uYRUIsB1M\"",
    "mtime": "2023-12-19T03:06:50.996Z",
    "size": 2414,
    "path": "../public/_nuxt/caseStidies.34905284.js"
  },
  "/_nuxt/CaseStudiesItem.ddeab3a6.js": {
    "type": "application/javascript",
    "etag": "\"371-arQB0JNlEyp4Zu4Z11jl84BvSpo\"",
    "mtime": "2023-12-19T03:06:50.996Z",
    "size": 881,
    "path": "../public/_nuxt/CaseStudiesItem.ddeab3a6.js"
  },
  "/_nuxt/CaseStudiesSection.530713a9.js": {
    "type": "application/javascript",
    "etag": "\"8ce-yqpDkssq2EhFDk0GYDm8QPS92O4\"",
    "mtime": "2023-12-19T03:06:50.984Z",
    "size": 2254,
    "path": "../public/_nuxt/CaseStudiesSection.530713a9.js"
  },
  "/_nuxt/Contact.6f9ec0b2.js": {
    "type": "application/javascript",
    "etag": "\"927-NPXLzir8JaWPWFH+WX83rugR7JI\"",
    "mtime": "2023-12-19T03:06:50.997Z",
    "size": 2343,
    "path": "../public/_nuxt/Contact.6f9ec0b2.js"
  },
  "/_nuxt/ContactUsFour.ac02b4bf.js": {
    "type": "application/javascript",
    "etag": "\"57d-12+zZH1HQeuvJBL8oR1EfKH38og\"",
    "mtime": "2023-12-19T03:06:50.990Z",
    "size": 1405,
    "path": "../public/_nuxt/ContactUsFour.ac02b4bf.js"
  },
  "/_nuxt/ContactUsThree.e7baaedf.js": {
    "type": "application/javascript",
    "etag": "\"68d-NUsje+Qkt5DeExI6bKdE5KT3llA\"",
    "mtime": "2023-12-19T03:06:50.988Z",
    "size": 1677,
    "path": "../public/_nuxt/ContactUsThree.e7baaedf.js"
  },
  "/_nuxt/counters.abb2d63d.js": {
    "type": "application/javascript",
    "etag": "\"377-q5qggG5WSTYsNHbyiQrAniaYUDQ\"",
    "mtime": "2023-12-19T03:06:50.981Z",
    "size": 887,
    "path": "../public/_nuxt/counters.abb2d63d.js"
  },
  "/_nuxt/cta.4c436c57.js": {
    "type": "application/javascript",
    "etag": "\"199-T0onpQfCQDyZ2KvczMPX9rlIa6o\"",
    "mtime": "2023-12-19T03:06:50.989Z",
    "size": 409,
    "path": "../public/_nuxt/cta.4c436c57.js"
  },
  "/_nuxt/CtaContact.14372605.js": {
    "type": "application/javascript",
    "etag": "\"522-qvzcfRGRoDPsUll5hDXvRUJWA7c\"",
    "mtime": "2023-12-19T03:06:50.989Z",
    "size": 1314,
    "path": "../public/_nuxt/CtaContact.14372605.js"
  },
  "/_nuxt/CtaContactTwo.a2ea08b3.js": {
    "type": "application/javascript",
    "etag": "\"51f-3Z0AGswvDm2EVIMIGIlrS5hGT+w\"",
    "mtime": "2023-12-19T03:06:50.980Z",
    "size": 1311,
    "path": "../public/_nuxt/CtaContactTwo.a2ea08b3.js"
  },
  "/_nuxt/CtaOne.345af6c1.js": {
    "type": "application/javascript",
    "etag": "\"4ab-3CdgkbAZJkiRCr/hre4eqOhSlYU\"",
    "mtime": "2023-12-19T03:06:50.975Z",
    "size": 1195,
    "path": "../public/_nuxt/CtaOne.345af6c1.js"
  },
  "/_nuxt/CtaThree.7c71cfbb.js": {
    "type": "application/javascript",
    "etag": "\"4a9-WMmGfOBtgIuYeUVvp7jLcYBfOgg\"",
    "mtime": "2023-12-19T03:06:50.980Z",
    "size": 1193,
    "path": "../public/_nuxt/CtaThree.7c71cfbb.js"
  },
  "/_nuxt/Cybersecurity.0dc99c08.js": {
    "type": "application/javascript",
    "etag": "\"31ad-Y01kVRvYJqFhPtuNqeE56nlracs\"",
    "mtime": "2023-12-19T03:06:50.996Z",
    "size": 12717,
    "path": "../public/_nuxt/Cybersecurity.0dc99c08.js"
  },
  "/_nuxt/default.7104144f.js": {
    "type": "application/javascript",
    "etag": "\"d0-hezVqhoMWjvFZaHzJ74oEntU0oQ\"",
    "mtime": "2023-12-19T03:06:50.995Z",
    "size": 208,
    "path": "../public/_nuxt/default.7104144f.js"
  },
  "/_nuxt/entry.18d9afce.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"6f0d6-PTHpaneVv+vAS8bu53XhVc7icNs\"",
    "mtime": "2023-12-19T03:06:50.973Z",
    "size": 454870,
    "path": "../public/_nuxt/entry.18d9afce.css"
  },
  "/_nuxt/entry.c878ff13.js": {
    "type": "application/javascript",
    "etag": "\"2b7a6-gkrpT1Rd1f71DplTDGdnQNmrBDY\"",
    "mtime": "2023-12-19T03:06:51.008Z",
    "size": 178086,
    "path": "../public/_nuxt/entry.c878ff13.js"
  },
  "/_nuxt/error-component.12842598.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"195-aQY8cN54VER5G+edrR1FKf5M9TE\"",
    "mtime": "2023-12-19T03:06:50.972Z",
    "size": 405,
    "path": "../public/_nuxt/error-component.12842598.css"
  },
  "/_nuxt/error-component.b9f87b9c.js": {
    "type": "application/javascript",
    "etag": "\"4b3-/vIpQtNDzh/XKVgEcoxk8X3eFpA\"",
    "mtime": "2023-12-19T03:06:50.997Z",
    "size": 1203,
    "path": "../public/_nuxt/error-component.b9f87b9c.js"
  },
  "/_nuxt/fa-brands-400.8ea87917.woff2": {
    "type": "font/woff2",
    "etag": "\"12bc0-BhPH67pV7kfvMCwPd2YyRpL4mac\"",
    "mtime": "2023-12-19T03:06:50.972Z",
    "size": 76736,
    "path": "../public/_nuxt/fa-brands-400.8ea87917.woff2"
  },
  "/_nuxt/fa-brands-400.9b3a8965.svg": {
    "type": "image/svg+xml",
    "etag": "\"b781c-t/0wNeg8I8cgyfWVevMdfiiPtOs\"",
    "mtime": "2023-12-19T03:06:50.973Z",
    "size": 751644,
    "path": "../public/_nuxt/fa-brands-400.9b3a8965.svg"
  },
  "/_nuxt/fa-brands-400.cda59d6e.ttf": {
    "type": "font/ttf",
    "etag": "\"20b64-irkHCD/sqqKp7JOyf4hK10VzcFw\"",
    "mtime": "2023-12-19T03:06:50.972Z",
    "size": 133988,
    "path": "../public/_nuxt/fa-brands-400.cda59d6e.ttf"
  },
  "/_nuxt/fa-brands-400.e4299464.eot": {
    "type": "application/vnd.ms-fontobject",
    "etag": "\"20c96-0f/WNAzb9yiQzLZ/MgFer8XfUac\"",
    "mtime": "2023-12-19T03:06:50.970Z",
    "size": 134294,
    "path": "../public/_nuxt/fa-brands-400.e4299464.eot"
  },
  "/_nuxt/fa-brands-400.f9217f66.woff": {
    "type": "font/woff",
    "etag": "\"15f84-Hh8Cv6ieF5/i3RODJzuIEqqHNBg\"",
    "mtime": "2023-12-19T03:06:50.972Z",
    "size": 89988,
    "path": "../public/_nuxt/fa-brands-400.f9217f66.woff"
  },
  "/_nuxt/fa-regular-400.62f1f2b9.svg": {
    "type": "image/svg+xml",
    "etag": "\"2386b-Ip3sokZfqe/IwD0OvrmgHBVZgi4\"",
    "mtime": "2023-12-19T03:06:50.973Z",
    "size": 145515,
    "path": "../public/_nuxt/fa-regular-400.62f1f2b9.svg"
  },
  "/_nuxt/fa-regular-400.79d08806.eot": {
    "type": "application/vnd.ms-fontobject",
    "etag": "\"84f2-Zw+wHkkwrkb+jW0rderSiPVOjmE\"",
    "mtime": "2023-12-19T03:06:50.965Z",
    "size": 34034,
    "path": "../public/_nuxt/fa-regular-400.79d08806.eot"
  },
  "/_nuxt/fa-regular-400.cb9e9e69.woff": {
    "type": "font/woff",
    "etag": "\"3f94-OtT05LH7Pt7j1Lol5s3+0vC4ilQ\"",
    "mtime": "2023-12-19T03:06:50.972Z",
    "size": 16276,
    "path": "../public/_nuxt/fa-regular-400.cb9e9e69.woff"
  },
  "/_nuxt/fa-regular-400.e42a8844.woff2": {
    "type": "font/woff2",
    "etag": "\"33a8-E1F1Ka/6OeJYXFkayubcM2tqqRc\"",
    "mtime": "2023-12-19T03:06:50.972Z",
    "size": 13224,
    "path": "../public/_nuxt/fa-regular-400.e42a8844.woff2"
  },
  "/_nuxt/fa-regular-400.e8711bbb.ttf": {
    "type": "font/ttf",
    "etag": "\"83c8-w0rNaBjfbba+QaLjMYhnZdYB8us\"",
    "mtime": "2023-12-19T03:06:50.972Z",
    "size": 33736,
    "path": "../public/_nuxt/fa-regular-400.e8711bbb.ttf"
  },
  "/_nuxt/fa-solid-900.25630646.svg": {
    "type": "image/svg+xml",
    "etag": "\"e1979-Aju0gbZd2M3rjEJMqQDzhmKSv7A\"",
    "mtime": "2023-12-19T03:06:50.974Z",
    "size": 924025,
    "path": "../public/_nuxt/fa-solid-900.25630646.svg"
  },
  "/_nuxt/fa-solid-900.373c04fd.eot": {
    "type": "application/vnd.ms-fontobject",
    "etag": "\"31916-6oRcWb7kpcbbd0uNgGD1ZBt4muk\"",
    "mtime": "2023-12-19T03:06:50.972Z",
    "size": 203030,
    "path": "../public/_nuxt/fa-solid-900.373c04fd.eot"
  },
  "/_nuxt/fa-solid-900.3f6d3488.woff": {
    "type": "font/woff",
    "etag": "\"18d10-oirNdpfzbn1MwxqFPHDndurFS7E\"",
    "mtime": "2023-12-19T03:06:50.972Z",
    "size": 101648,
    "path": "../public/_nuxt/fa-solid-900.3f6d3488.woff"
  },
  "/_nuxt/fa-solid-900.9834b82a.woff2": {
    "type": "font/woff2",
    "etag": "\"131bc-DMssgUp+TKEsR3iCFjOAnLA2Hqo\"",
    "mtime": "2023-12-19T03:06:50.972Z",
    "size": 78268,
    "path": "../public/_nuxt/fa-solid-900.9834b82a.woff2"
  },
  "/_nuxt/fa-solid-900.af639750.ttf": {
    "type": "font/ttf",
    "etag": "\"317f8-64kU9rF5e0XuCIPmCJ2SaV2flEE\"",
    "mtime": "2023-12-19T03:06:50.972Z",
    "size": 202744,
    "path": "../public/_nuxt/fa-solid-900.af639750.ttf"
  },
  "/_nuxt/FeatureGallery.a16cef40.js": {
    "type": "application/javascript",
    "etag": "\"3f5-oPnVO+kSbxCzoEsRT7AMHZi7iPw\"",
    "mtime": "2023-12-19T03:06:50.980Z",
    "size": 1013,
    "path": "../public/_nuxt/FeatureGallery.a16cef40.js"
  },
  "/_nuxt/FeatureGalleryFour.022c4ee0.js": {
    "type": "application/javascript",
    "etag": "\"9fa-YNcNz78PmI8pPt/udQDqcnP0BbE\"",
    "mtime": "2023-12-19T03:06:50.988Z",
    "size": 2554,
    "path": "../public/_nuxt/FeatureGalleryFour.022c4ee0.js"
  },
  "/_nuxt/FeatureItem.0bf8eac3.js": {
    "type": "application/javascript",
    "etag": "\"3a2-fcRcQVt21lXNgfr4fvBZ4U0fimc\"",
    "mtime": "2023-12-19T03:06:50.990Z",
    "size": 930,
    "path": "../public/_nuxt/FeatureItem.0bf8eac3.js"
  },
  "/_nuxt/FeatureItemStyleThree.cba7e221.js": {
    "type": "application/javascript",
    "etag": "\"3d3-JZ3ny8zJ/CZAODo27ylfbBpONS4\"",
    "mtime": "2023-12-19T03:06:50.980Z",
    "size": 979,
    "path": "../public/_nuxt/FeatureItemStyleThree.cba7e221.js"
  },
  "/_nuxt/FeatureItemTwo.36a45661.js": {
    "type": "application/javascript",
    "etag": "\"28d-pSVDLmOntkbPaPP913yQVSrbpVI\"",
    "mtime": "2023-12-19T03:06:50.988Z",
    "size": 653,
    "path": "../public/_nuxt/FeatureItemTwo.36a45661.js"
  },
  "/_nuxt/FourSteps.8b4be698.js": {
    "type": "application/javascript",
    "etag": "\"6f4-4lVW66HzkPWJ/sGy8aRx4B9m7bY\"",
    "mtime": "2023-12-19T03:06:51.003Z",
    "size": 1780,
    "path": "../public/_nuxt/FourSteps.8b4be698.js"
  },
  "/_nuxt/FunFact.40aba4a0.js": {
    "type": "application/javascript",
    "etag": "\"2db-BLEegrSUdviNObyfSRmg5iss1/4\"",
    "mtime": "2023-12-19T03:06:51.003Z",
    "size": 731,
    "path": "../public/_nuxt/FunFact.40aba4a0.js"
  },
  "/_nuxt/funfact.d9186b79.js": {
    "type": "application/javascript",
    "etag": "\"2c8-lGEyIfJxo11o3s69qBRV7omCCvw\"",
    "mtime": "2023-12-19T03:06:50.983Z",
    "size": 712,
    "path": "../public/_nuxt/funfact.d9186b79.js"
  },
  "/_nuxt/FunFactThree.81eb1c21.js": {
    "type": "application/javascript",
    "etag": "\"42f-4ijN8ZcAZ7iu1+QF0MdrIVM0CvE\"",
    "mtime": "2023-12-19T03:06:50.980Z",
    "size": 1071,
    "path": "../public/_nuxt/FunFactThree.81eb1c21.js"
  },
  "/_nuxt/FunFactTwo.bf4f189e.js": {
    "type": "application/javascript",
    "etag": "\"2c3-c1X0PUn/2T2MpBcyBSZ/YyDt6IM\"",
    "mtime": "2023-12-19T03:06:50.982Z",
    "size": 707,
    "path": "../public/_nuxt/FunFactTwo.bf4f189e.js"
  },
  "/_nuxt/gradation.5f94a344.js": {
    "type": "application/javascript",
    "etag": "\"311-FzR4l1veZYoTLNVvPc9yC24EPyI\"",
    "mtime": "2023-12-19T03:06:51.003Z",
    "size": 785,
    "path": "../public/_nuxt/gradation.5f94a344.js"
  },
  "/_nuxt/green-curve-arrow.e83e43ef.js": {
    "type": "application/javascript",
    "etag": "\"5e-rNgSqq6V9HD+JgjzcEVcAnrsAx4\"",
    "mtime": "2023-12-19T03:06:50.980Z",
    "size": 94,
    "path": "../public/_nuxt/green-curve-arrow.e83e43ef.js"
  },
  "/_nuxt/Header.396e0656.js": {
    "type": "application/javascript",
    "etag": "\"588-OVr9IcBwhx1Nr/h8bjarC3wPtWQ\"",
    "mtime": "2023-12-19T03:06:50.990Z",
    "size": 1416,
    "path": "../public/_nuxt/Header.396e0656.js"
  },
  "/_nuxt/HeaderTop.7fd17c0f.js": {
    "type": "application/javascript",
    "etag": "\"233-E5ZPHbtU25EHGfvd+gf8fYKS7is\"",
    "mtime": "2023-12-19T03:06:51.002Z",
    "size": 563,
    "path": "../public/_nuxt/HeaderTop.7fd17c0f.js"
  },
  "/_nuxt/hero.9184a2c8.js": {
    "type": "application/javascript",
    "etag": "\"501-G/h8FIGT+0MuZn+kXxCvlquGroI\"",
    "mtime": "2023-12-19T03:06:50.989Z",
    "size": 1281,
    "path": "../public/_nuxt/hero.9184a2c8.js"
  },
  "/_nuxt/index.3999c5c7.js": {
    "type": "application/javascript",
    "etag": "\"5e6-RVyGQ0c2vtzcfzd1B5n6pFWVz4I\"",
    "mtime": "2023-12-19T03:06:50.998Z",
    "size": 1510,
    "path": "../public/_nuxt/index.3999c5c7.js"
  },
  "/_nuxt/index.bcd58f1b.js": {
    "type": "application/javascript",
    "etag": "\"1610-eGl8/ghtrg+rBV5a6LvHJZyUB80\"",
    "mtime": "2023-12-19T03:06:51.006Z",
    "size": 5648,
    "path": "../public/_nuxt/index.bcd58f1b.js"
  },
  "/_nuxt/index.e3dfce64.js": {
    "type": "application/javascript",
    "etag": "\"23f3-QAYZtoQcCexijw9juGkonJiLWPY\"",
    "mtime": "2023-12-19T03:06:50.995Z",
    "size": 9203,
    "path": "../public/_nuxt/index.e3dfce64.js"
  },
  "/_nuxt/IT-Services.3ad86594.js": {
    "type": "application/javascript",
    "etag": "\"32e-eA//aKmv3mBdkDFArq3mQPjmaI8\"",
    "mtime": "2023-12-19T03:06:50.995Z",
    "size": 814,
    "path": "../public/_nuxt/IT-Services.3ad86594.js"
  },
  "/_nuxt/IT-Solutions.36ec2425.js": {
    "type": "application/javascript",
    "etag": "\"713-PGdQxb5QfBc2h2zWrTgU64Diaps\"",
    "mtime": "2023-12-19T03:06:50.995Z",
    "size": 1811,
    "path": "../public/_nuxt/IT-Solutions.36ec2425.js"
  },
  "/_nuxt/Leadership.b5eaa13e.js": {
    "type": "application/javascript",
    "etag": "\"5cd-Dqg2Btai6axW+1F5XDo44fGSMCM\"",
    "mtime": "2023-12-19T03:06:50.999Z",
    "size": 1485,
    "path": "../public/_nuxt/Leadership.b5eaa13e.js"
  },
  "/_nuxt/MainP.eb803d39.js": {
    "type": "application/javascript",
    "etag": "\"761-BLeYR0z8u1kiVyIDIRxQ1R6zEEc\"",
    "mtime": "2023-12-19T03:06:50.988Z",
    "size": 1889,
    "path": "../public/_nuxt/MainP.eb803d39.js"
  },
  "/_nuxt/mitech-home-infotechno-box-large-image-03-540x320.7d856d83.js": {
    "type": "application/javascript",
    "etag": "\"7b-dV0tx/bSrY8Dsql+E1higBVP0T8\"",
    "mtime": "2023-12-19T03:06:50.996Z",
    "size": 123,
    "path": "../public/_nuxt/mitech-home-infotechno-box-large-image-03-540x320.7d856d83.js"
  },
  "/_nuxt/mitech-slider-cybersecurity-global-image.bc5ac33e.js": {
    "type": "application/javascript",
    "etag": "\"74-t6OUFgs0eXEntiJsRraBy/uZcQc\"",
    "mtime": "2023-12-19T03:06:50.980Z",
    "size": 116,
    "path": "../public/_nuxt/mitech-slider-cybersecurity-global-image.bc5ac33e.js"
  },
  "/_nuxt/Modern-It-Company.945af877.js": {
    "type": "application/javascript",
    "etag": "\"467c-hEd7qa5QCHIxli8+WuVZJZC85lw\"",
    "mtime": "2023-12-19T03:06:51.003Z",
    "size": 18044,
    "path": "../public/_nuxt/Modern-It-Company.945af877.js"
  },
  "/_nuxt/OffCanvasMobileMenu.a13af66b.js": {
    "type": "application/javascript",
    "etag": "\"366f-gqBC55a7vAy0sk5DQz6EpR3EOIs\"",
    "mtime": "2023-12-19T03:06:51.006Z",
    "size": 13935,
    "path": "../public/_nuxt/OffCanvasMobileMenu.a13af66b.js"
  },
  "/_nuxt/OffCanvasMobileMenu.abc3eaad.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"ce6-TzzUHHgcmv76l3oj1lw1IPABvpQ\"",
    "mtime": "2023-12-19T03:06:50.973Z",
    "size": 3302,
    "path": "../public/_nuxt/OffCanvasMobileMenu.abc3eaad.css"
  },
  "/_nuxt/pagination.128e48f7.js": {
    "type": "application/javascript",
    "etag": "\"1e17-UyVDI6BdZsdJ4ljYA/lEkxr8VI0\"",
    "mtime": "2023-12-19T03:06:51.005Z",
    "size": 7703,
    "path": "../public/_nuxt/pagination.128e48f7.js"
  },
  "/_nuxt/PricingOne.177df6d5.js": {
    "type": "application/javascript",
    "etag": "\"ffe-sCTzcfuyDpWfAyXaw+ehtx5MUv4\"",
    "mtime": "2023-12-19T03:06:50.989Z",
    "size": 4094,
    "path": "../public/_nuxt/PricingOne.177df6d5.js"
  },
  "/_nuxt/Processing.bba8b9c9.js": {
    "type": "application/javascript",
    "etag": "\"2d33-+sL7uOI5QwGqPKfe/4jwfgGwJNw\"",
    "mtime": "2023-12-19T03:06:50.983Z",
    "size": 11571,
    "path": "../public/_nuxt/Processing.bba8b9c9.js"
  },
  "/_nuxt/reply-comm.eb1f1a9f.js": {
    "type": "application/javascript",
    "etag": "\"128-kva3OiNZEy5Dt5Ach8Y1MJsVd2k\"",
    "mtime": "2023-12-19T03:06:50.996Z",
    "size": 296,
    "path": "../public/_nuxt/reply-comm.eb1f1a9f.js"
  },
  "/_nuxt/Resolutions.dff27525.js": {
    "type": "application/javascript",
    "etag": "\"18a9-tKoZ+9kxYpGn8R0gnvgW09AEZaM\"",
    "mtime": "2023-12-19T03:06:50.988Z",
    "size": 6313,
    "path": "../public/_nuxt/Resolutions.dff27525.js"
  },
  "/_nuxt/SearchOverlay.1c875090.js": {
    "type": "application/javascript",
    "etag": "\"3a4-SzmDaEdWHECDL8KEK0QxMuEjVwc\"",
    "mtime": "2023-12-19T03:06:50.989Z",
    "size": 932,
    "path": "../public/_nuxt/SearchOverlay.1c875090.js"
  },
  "/_nuxt/SectionTitle.fd3a26e2.js": {
    "type": "application/javascript",
    "etag": "\"18d-yGpgJNhLzcmRnq5FZKdLxwy1pgo\"",
    "mtime": "2023-12-19T03:06:50.989Z",
    "size": 397,
    "path": "../public/_nuxt/SectionTitle.fd3a26e2.js"
  },
  "/_nuxt/Service.69c267ef.js": {
    "type": "application/javascript",
    "etag": "\"255a-uMYWB4/H+llk3pPKdXh5BQ3sqpQ\"",
    "mtime": "2023-12-19T03:06:50.991Z",
    "size": 9562,
    "path": "../public/_nuxt/Service.69c267ef.js"
  },
  "/_nuxt/service.c21aac85.js": {
    "type": "application/javascript",
    "etag": "\"2b12-QO+81Gc7zn2eVu+fyMGrV5isxtg\"",
    "mtime": "2023-12-19T03:06:50.980Z",
    "size": 11026,
    "path": "../public/_nuxt/service.c21aac85.js"
  },
  "/_nuxt/ServiceIT.a5da35cf.js": {
    "type": "application/javascript",
    "etag": "\"4c6-weGUxruNS7OdRrDwXEAdG7T8nDs\"",
    "mtime": "2023-12-19T03:06:51.003Z",
    "size": 1222,
    "path": "../public/_nuxt/ServiceIT.a5da35cf.js"
  },
  "/_nuxt/ServiceItem.c952b986.js": {
    "type": "application/javascript",
    "etag": "\"352-1WiDsUsnJYxuzJKnlmrGn2FW6L4\"",
    "mtime": "2023-12-19T03:06:50.981Z",
    "size": 850,
    "path": "../public/_nuxt/ServiceItem.c952b986.js"
  },
  "/_nuxt/ServiceStyleThree.5b498565.js": {
    "type": "application/javascript",
    "etag": "\"70a-wf1qYP4hlCDuanHoZ0gtYbgq1aI\"",
    "mtime": "2023-12-19T03:06:50.999Z",
    "size": 1802,
    "path": "../public/_nuxt/ServiceStyleThree.5b498565.js"
  },
  "/_nuxt/ServiceStyleTwo.983964ed.js": {
    "type": "application/javascript",
    "etag": "\"7f1-35QS+9v67RXqtkQFDl4QX5SdvlM\"",
    "mtime": "2023-12-19T03:06:50.982Z",
    "size": 2033,
    "path": "../public/_nuxt/ServiceStyleTwo.983964ed.js"
  },
  "/_nuxt/swiper-slide.aa8e75a4.js": {
    "type": "application/javascript",
    "etag": "\"1425f-+MD9/A9q1jb75MFUS7zeetYtJWc\"",
    "mtime": "2023-12-19T03:06:51.007Z",
    "size": 82527,
    "path": "../public/_nuxt/swiper-slide.aa8e75a4.js"
  },
  "/_nuxt/team.12e289f1.js": {
    "type": "application/javascript",
    "etag": "\"117c-88g5hull6U8d2awGrvxnUxNZFuc\"",
    "mtime": "2023-12-19T03:06:50.988Z",
    "size": 4476,
    "path": "../public/_nuxt/team.12e289f1.js"
  },
  "/_nuxt/TeamOne.2d62d12e.js": {
    "type": "application/javascript",
    "etag": "\"535-ifPPtimM/x6kQynAvZZJhQ8R2Jg\"",
    "mtime": "2023-12-19T03:06:50.992Z",
    "size": 1333,
    "path": "../public/_nuxt/TeamOne.2d62d12e.js"
  },
  "/_nuxt/teams.e15887bd.js": {
    "type": "application/javascript",
    "etag": "\"35e-NLTb+sT/buhF2q5ti26A8JRJnLM\"",
    "mtime": "2023-12-19T03:06:51.005Z",
    "size": 862,
    "path": "../public/_nuxt/teams.e15887bd.js"
  },
  "/_nuxt/TeamTwo.c581a3b2.js": {
    "type": "application/javascript",
    "etag": "\"451-Mu8rGBJGj8uQ4diEJA47L6UuHdk\"",
    "mtime": "2023-12-19T03:06:50.981Z",
    "size": 1105,
    "path": "../public/_nuxt/TeamTwo.c581a3b2.js"
  },
  "/_nuxt/Test.6567fb7a.js": {
    "type": "application/javascript",
    "etag": "\"42d-Xo6I6SAIDdPxEgoJLaiNb2uLAcU\"",
    "mtime": "2023-12-19T03:06:50.995Z",
    "size": 1069,
    "path": "../public/_nuxt/Test.6567fb7a.js"
  },
  "/_nuxt/Test.7fe14095.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"3f-tKrOoUyxKub3PTyuHaKRjYsZMR0\"",
    "mtime": "2023-12-19T03:06:50.973Z",
    "size": 63,
    "path": "../public/_nuxt/Test.7fe14095.css"
  },
  "/_nuxt/testimonial.08dcc02c.js": {
    "type": "application/javascript",
    "etag": "\"5aa-H7A+T0LZVw3lwpg3PJe3sXq/0hk\"",
    "mtime": "2023-12-19T03:06:50.980Z",
    "size": 1450,
    "path": "../public/_nuxt/testimonial.08dcc02c.js"
  },
  "/_nuxt/TestimonialTwo.8a45cdce.js": {
    "type": "application/javascript",
    "etag": "\"95a-cV0/kPvh2HkGdXovbQNq5ZcUjcA\"",
    "mtime": "2023-12-19T03:06:50.995Z",
    "size": 2394,
    "path": "../public/_nuxt/TestimonialTwo.8a45cdce.js"
  },
  "/_nuxt/VideoWithImages.1c185736.js": {
    "type": "application/javascript",
    "etag": "\"1096-lSECJLrnUuLUSPTtQWAlFkik8wM\"",
    "mtime": "2023-12-19T03:06:50.980Z",
    "size": 4246,
    "path": "../public/_nuxt/VideoWithImages.1c185736.js"
  },
  "/_nuxt/_id_.49af1caf.js": {
    "type": "application/javascript",
    "etag": "\"1ae7-EkBenV8bFkWpcwAkukmvrWmJkrA\"",
    "mtime": "2023-12-19T03:06:51.006Z",
    "size": 6887,
    "path": "../public/_nuxt/_id_.49af1caf.js"
  },
  "/_nuxt/_plugin-vue_export-helper.8709e3f0.js": {
    "type": "application/javascript",
    "etag": "\"ed18-JnQVSnqTI9v4IeEmOuNaUdt95DY\"",
    "mtime": "2023-12-19T03:06:51.007Z",
    "size": 60696,
    "path": "../public/_nuxt/_plugin-vue_export-helper.8709e3f0.js"
  },
  "/_nuxt/_slug_.05819992.js": {
    "type": "application/javascript",
    "etag": "\"1428-reqpG9uGJUD/c/7VC6CuePog8l0\"",
    "mtime": "2023-12-19T03:06:51.004Z",
    "size": 5160,
    "path": "../public/_nuxt/_slug_.05819992.js"
  },
  "/_nuxt/_slug_.4a18de98.js": {
    "type": "application/javascript",
    "etag": "\"2475-7NWzYxaKkrolvHWQaELg1YjPgiA\"",
    "mtime": "2023-12-19T03:06:51.006Z",
    "size": 9333,
    "path": "../public/_nuxt/_slug_.4a18de98.js"
  },
  "/images/award/mitech-company-award-01-161x110.jpg": {
    "type": "image/jpeg",
    "etag": "\"556-d6CpCKJHhxTjMtZHHlYNYnpn9jA\"",
    "mtime": "2020-05-22T10:12:56.000Z",
    "size": 1366,
    "path": "../public/images/award/mitech-company-award-01-161x110.jpg"
  },
  "/images/award/mitech-company-award-02-161x116.jpg": {
    "type": "image/jpeg",
    "etag": "\"560-vm1MrvAPDzEcI153TdWq07ixcqM\"",
    "mtime": "2020-05-22T10:12:56.000Z",
    "size": 1376,
    "path": "../public/images/award/mitech-company-award-02-161x116.jpg"
  },
  "/images/award/mitech-company-award-03-161x112.jpg": {
    "type": "image/jpeg",
    "etag": "\"55e-zCHhY1X33nX6pr9XSsDtd1UEZE4\"",
    "mtime": "2020-05-22T10:12:56.000Z",
    "size": 1374,
    "path": "../public/images/award/mitech-company-award-03-161x112.jpg"
  },
  "/images/award/mitech-company-award-04-161x109.jpg": {
    "type": "image/jpeg",
    "etag": "\"562-kZrW1TG6bzZT9yPGE/F+mAJlyGk\"",
    "mtime": "2020-05-22T10:12:56.000Z",
    "size": 1378,
    "path": "../public/images/award/mitech-company-award-04-161x109.jpg"
  },
  "/images/banners/home-cybersecurity-contact-bg-image.png": {
    "type": "image/png",
    "etag": "\"14fc-/AZLVHgMKAnPn8PkqTyvHo2atZs\"",
    "mtime": "2020-05-22T10:12:56.000Z",
    "size": 5372,
    "path": "../public/images/banners/home-cybersecurity-contact-bg-image.png"
  },
  "/images/banners/home-processing-video-intro-slider-slide-01-image-01.jpg": {
    "type": "image/jpeg",
    "etag": "\"47d2-exddq3RJyjP4Hzt8Qa6LH+bTglE\"",
    "mtime": "2020-05-22T10:12:56.000Z",
    "size": 18386,
    "path": "../public/images/banners/home-processing-video-intro-slider-slide-01-image-01.jpg"
  },
  "/images/banners/home-processing-video-intro-slider-slide-01-image-02.jpg": {
    "type": "image/jpeg",
    "etag": "\"90d-brDWBFvkcUW64CKJLnOwwD4BP8Y\"",
    "mtime": "2020-05-22T10:12:56.000Z",
    "size": 2317,
    "path": "../public/images/banners/home-processing-video-intro-slider-slide-01-image-02.jpg"
  },
  "/images/banners/home-processing-video-intro-slider-slide-01-image-03.jpg": {
    "type": "image/jpeg",
    "etag": "\"5d1-wZ/vKSghAONO4ih84mRbFfDvnLo\"",
    "mtime": "2020-05-22T10:12:56.000Z",
    "size": 1489,
    "path": "../public/images/banners/home-processing-video-intro-slider-slide-01-image-03.jpg"
  },
  "/images/banners/home-processing-video-intro-slider-slide-01-image-04.jpg": {
    "type": "image/jpeg",
    "etag": "\"5d1-wZ/vKSghAONO4ih84mRbFfDvnLo\"",
    "mtime": "2020-05-22T10:12:56.000Z",
    "size": 1489,
    "path": "../public/images/banners/home-processing-video-intro-slider-slide-01-image-04.jpg"
  },
  "/images/banners/home-processing-video-intro-slider-slide-01-image-05.jpg": {
    "type": "image/jpeg",
    "etag": "\"684-5hq8cKi2buFQ4W6peThMo0xykg8\"",
    "mtime": "2020-05-22T10:12:56.000Z",
    "size": 1668,
    "path": "../public/images/banners/home-processing-video-intro-slider-slide-01-image-05.jpg"
  },
  "/images/banners/managed-it-services-book-cover.png": {
    "type": "image/png",
    "etag": "\"e03-0byNX06CF/WM18qZICWhZR+TWig\"",
    "mtime": "2020-05-22T10:12:56.000Z",
    "size": 3587,
    "path": "../public/images/banners/managed-it-services-book-cover.png"
  },
  "/images/bg/bg-gird-pattern-repeat-alt.webp": {
    "type": "image/webp",
    "etag": "\"b0-jyFIpjERc3ckqUnDP8wcUr76Klg\"",
    "mtime": "2023-10-23T09:18:46.000Z",
    "size": 176,
    "path": "../public/images/bg/bg-gird-pattern-repeat-alt.webp"
  },
  "/images/bg/business-solution-hero-bg.jpg": {
    "type": "image/jpeg",
    "etag": "\"6eec-WL7WZWHVO2n2WmVzBS2xQXUtSgU\"",
    "mtime": "2020-05-22T10:12:56.000Z",
    "size": 28396,
    "path": "../public/images/bg/business-solution-hero-bg.jpg"
  },
  "/images/bg/contact-us-01-hero-bg.jpg": {
    "type": "image/jpeg",
    "etag": "\"6eec-WL7WZWHVO2n2WmVzBS2xQXUtSgU\"",
    "mtime": "2020-05-22T10:12:56.000Z",
    "size": 28396,
    "path": "../public/images/bg/contact-us-01-hero-bg.jpg"
  },
  "/images/bg/faqs-video-poster.jpg": {
    "type": "image/jpeg",
    "etag": "\"14d2-xtGzBgaAw3nncz6J9GvCHzAoqXs\"",
    "mtime": "2020-05-22T10:12:56.000Z",
    "size": 5330,
    "path": "../public/images/bg/faqs-video-poster.jpg"
  },
  "/images/bg/home-appointment-contact-bg-image.png": {
    "type": "image/png",
    "etag": "\"9ec0-FmxArUvb8kW4Ut6xRbYvMQr9Rq0\"",
    "mtime": "2020-04-16T12:17:10.000Z",
    "size": 40640,
    "path": "../public/images/bg/home-appointment-contact-bg-image.png"
  },
  "/images/bg/home-infotechno-contact-bg.jpg": {
    "type": "image/jpeg",
    "etag": "\"5289-XP6K/4JJ3329O7qE01Ym4Wr1qZU\"",
    "mtime": "2020-04-16T12:17:10.000Z",
    "size": 21129,
    "path": "../public/images/bg/home-infotechno-contact-bg.jpg"
  },
  "/images/bg/home-infotechno-video-intro-bg.jpg": {
    "type": "image/jpeg",
    "etag": "\"73ce-6IhnVLMfDcqmUPdPIcvEjRrAXUU\"",
    "mtime": "2020-05-22T10:12:56.000Z",
    "size": 29646,
    "path": "../public/images/bg/home-infotechno-video-intro-bg.jpg"
  },
  "/images/bg/home-processing-video-intro-slider-slide-01-image-01-570x350.jpg": {
    "type": "image/jpeg",
    "etag": "\"16bb-4D0yZUHDp5iXqJie9z04VJwPt3k\"",
    "mtime": "2020-05-22T10:12:56.000Z",
    "size": 5819,
    "path": "../public/images/bg/home-processing-video-intro-slider-slide-01-image-01-570x350.jpg"
  },
  "/images/bg/home-processing-video-intro-slider-slide-01-image-01-570x420.jpg": {
    "type": "image/jpeg",
    "etag": "\"1a82-i25izXDHe33vu2txpAuouzy8JJ4\"",
    "mtime": "2020-05-22T10:12:56.000Z",
    "size": 6786,
    "path": "../public/images/bg/home-processing-video-intro-slider-slide-01-image-01-570x420.jpg"
  },
  "/images/bg/home-reputable-success-section-story-bg.webp": {
    "type": "image/webp",
    "etag": "\"83f6-gj1eQTWqI0YsBpEA50rNZlA9QGQ\"",
    "mtime": "2023-10-23T09:18:46.000Z",
    "size": 33782,
    "path": "../public/images/bg/home-reputable-success-section-story-bg.webp"
  },
  "/images/bg/home-resolutions-hero-bg-image.jpg": {
    "type": "image/jpeg",
    "etag": "\"968b-ZLl9eWDRPyIcsBZ6Zs0QdalK5QI\"",
    "mtime": "2020-05-22T10:12:56.000Z",
    "size": 38539,
    "path": "../public/images/bg/home-resolutions-hero-bg-image.jpg"
  },
  "/images/bg/managed-it-services-hero-bg.jpg": {
    "type": "image/jpeg",
    "etag": "\"6eec-WL7WZWHVO2n2WmVzBS2xQXUtSgU\"",
    "mtime": "2020-05-22T10:12:56.000Z",
    "size": 28396,
    "path": "../public/images/bg/managed-it-services-hero-bg.jpg"
  },
  "/images/bg/mitech-home-infotechno-box-large-image-03-540x320.jpg": {
    "type": "image/jpeg",
    "etag": "\"14d2-xtGzBgaAw3nncz6J9GvCHzAoqXs\"",
    "mtime": "2020-05-22T10:12:56.000Z",
    "size": 5330,
    "path": "../public/images/bg/mitech-home-infotechno-box-large-image-03-540x320.jpg"
  },
  "/images/bg/mitech-home-services-contact-bg.png": {
    "type": "image/png",
    "etag": "\"f5a5-4yQmOHJrE/VDQ3WFPGdC+jmI/00\"",
    "mtime": "2020-04-16T12:17:10.000Z",
    "size": 62885,
    "path": "../public/images/bg/mitech-home-services-contact-bg.png"
  },
  "/images/bg/mitech-processing-contact-bg.png": {
    "type": "image/png",
    "etag": "\"10e6b-PP24D/zsmikSNIwPnIiZa/YJHuw\"",
    "mtime": "2020-04-16T12:17:08.000Z",
    "size": 69227,
    "path": "../public/images/bg/mitech-processing-contact-bg.png"
  },
  "/images/bg/mitech-slider-cybersecurity-global-image.png": {
    "type": "image/png",
    "etag": "\"11fd2-/TpAF/HVZY810+rWfxhdpI66uhs\"",
    "mtime": "2020-04-16T12:17:08.000Z",
    "size": 73682,
    "path": "../public/images/bg/mitech-slider-cybersecurity-global-image.png"
  },
  "/images/bg/page-404-bg.jpg": {
    "type": "image/jpeg",
    "etag": "\"9281-o3Wx2G1zi3CLZL5KLbNM9fyoCcw\"",
    "mtime": "2019-09-04T06:27:18.000Z",
    "size": 37505,
    "path": "../public/images/bg/page-404-bg.jpg"
  },
  "/images/bg/single-case-study-bg-01.jpg": {
    "type": "image/jpeg",
    "etag": "\"6eec-WL7WZWHVO2n2WmVzBS2xQXUtSgU\"",
    "mtime": "2020-05-22T10:12:56.000Z",
    "size": 28396,
    "path": "../public/images/bg/single-case-study-bg-01.jpg"
  },
  "/images/bg/title-bar-01-bg.jpg": {
    "type": "image/jpeg",
    "etag": "\"5d83-edqGVtgnVGJa7sEvlBzofd3iv0A\"",
    "mtime": "2020-04-16T12:17:06.000Z",
    "size": 23939,
    "path": "../public/images/bg/title-bar-01-bg.jpg"
  },
  "/images/blog/blog-01-370x230.jpg": {
    "type": "image/jpeg",
    "etag": "\"cf3-KAIveVXqe8CoqrpnAtub90nyi1I\"",
    "mtime": "2020-05-22T10:12:56.000Z",
    "size": 3315,
    "path": "../public/images/blog/blog-01-370x230.jpg"
  },
  "/images/blog/blog-01-370x370.jpg": {
    "type": "image/jpeg",
    "etag": "\"1063-pviikBYu9qiSpPtPkTSyCp80vZA\"",
    "mtime": "2020-05-22T10:12:56.000Z",
    "size": 4195,
    "path": "../public/images/blog/blog-01-370x370.jpg"
  },
  "/images/blog/blog-01-480x312.jpg": {
    "type": "image/jpeg",
    "etag": "\"1306-MAlgh29sBcVkRyOeG8yNb5KbKxg\"",
    "mtime": "2020-05-22T10:12:56.000Z",
    "size": 4870,
    "path": "../public/images/blog/blog-01-480x312.jpg"
  },
  "/images/blog/blog-01-540x330.jpg": {
    "type": "image/jpeg",
    "etag": "\"15f0-wAwLZJWIdz7VQUsT89ZbD/Wd174\"",
    "mtime": "2020-05-22T10:12:56.000Z",
    "size": 5616,
    "path": "../public/images/blog/blog-01-540x330.jpg"
  },
  "/images/blog/blog-02-1018x678.jpg": {
    "type": "image/jpeg",
    "etag": "\"41db-kzbvgh+zhZwRmkz5Kp3q7J9oWos\"",
    "mtime": "2020-05-22T10:12:56.000Z",
    "size": 16859,
    "path": "../public/images/blog/blog-02-1018x678.jpg"
  },
  "/images/blog/blog-02-1170x600.jpg": {
    "type": "image/jpeg",
    "etag": "\"449f-r60/D4low4lTKQ69D9hASUHpfl8\"",
    "mtime": "2020-05-22T10:12:56.000Z",
    "size": 17567,
    "path": "../public/images/blog/blog-02-1170x600.jpg"
  },
  "/images/blog/blog-02-370x230.jpg": {
    "type": "image/jpeg",
    "etag": "\"cf3-KAIveVXqe8CoqrpnAtub90nyi1I\"",
    "mtime": "2020-05-22T10:12:56.000Z",
    "size": 3315,
    "path": "../public/images/blog/blog-02-370x230.jpg"
  },
  "/images/blog/blog-02-370x246.jpg": {
    "type": "image/jpeg",
    "etag": "\"d4d-2jwVhGm5LP+ZPITaPyroR6lzaUo\"",
    "mtime": "2020-05-22T10:12:56.000Z",
    "size": 3405,
    "path": "../public/images/blog/blog-02-370x246.jpg"
  },
  "/images/blog/blog-02-500x338.jpg": {
    "type": "image/jpeg",
    "etag": "\"14ea-yyqgSJGNywoMB3bBbRAf+vWFyjc\"",
    "mtime": "2020-05-22T10:12:56.000Z",
    "size": 5354,
    "path": "../public/images/blog/blog-02-500x338.jpg"
  },
  "/images/blog/blog-02-540x330.jpg": {
    "type": "image/jpeg",
    "etag": "\"15f0-wAwLZJWIdz7VQUsT89ZbD/Wd174\"",
    "mtime": "2020-05-22T10:12:56.000Z",
    "size": 5616,
    "path": "../public/images/blog/blog-02-540x330.jpg"
  },
  "/images/blog/blog-02-770x400.jpg": {
    "type": "image/jpeg",
    "etag": "\"217c-hDf4qjprReZlMfrZ0a04iWd91QY\"",
    "mtime": "2020-05-22T10:12:56.000Z",
    "size": 8572,
    "path": "../public/images/blog/blog-02-770x400.jpg"
  },
  "/images/blog/blog-02-770x420.jpg": {
    "type": "image/jpeg",
    "etag": "\"24f8-2McnB7YSTIYJn+EzmpLz10vwqtI\"",
    "mtime": "2020-05-22T10:12:56.000Z",
    "size": 9464,
    "path": "../public/images/blog/blog-02-770x420.jpg"
  },
  "/images/blog/blog-02-900x678.jpg": {
    "type": "image/jpeg",
    "etag": "\"38c7-hygYiyNq5aYDat5mG5OpZ4BcI1A\"",
    "mtime": "2020-05-22T10:12:56.000Z",
    "size": 14535,
    "path": "../public/images/blog/blog-02-900x678.jpg"
  },
  "/images/blog/blog-03-1017x678.jpg": {
    "type": "image/jpeg",
    "etag": "\"40f0-o9+kK4rHyHWnEymeRxesZ8bry+k\"",
    "mtime": "2020-05-22T10:12:56.000Z",
    "size": 16624,
    "path": "../public/images/blog/blog-03-1017x678.jpg"
  },
  "/images/blog/blog-03-1170x600.jpg": {
    "type": "image/jpeg",
    "etag": "\"449f-r60/D4low4lTKQ69D9hASUHpfl8\"",
    "mtime": "2020-05-22T10:12:56.000Z",
    "size": 17567,
    "path": "../public/images/blog/blog-03-1170x600.jpg"
  },
  "/images/blog/blog-03-370x120.jpg": {
    "type": "image/jpeg",
    "etag": "\"a35-hJVENJmM8c3bWQeb4XcDw6Bqj/w\"",
    "mtime": "2020-05-22T10:12:56.000Z",
    "size": 2613,
    "path": "../public/images/blog/blog-03-370x120.jpg"
  },
  "/images/blog/blog-03-370x230.jpg": {
    "type": "image/jpeg",
    "etag": "\"cf3-KAIveVXqe8CoqrpnAtub90nyi1I\"",
    "mtime": "2020-05-22T10:12:56.000Z",
    "size": 3315,
    "path": "../public/images/blog/blog-03-370x230.jpg"
  },
  "/images/blog/blog-03-500x338.jpg": {
    "type": "image/jpeg",
    "etag": "\"14ea-yyqgSJGNywoMB3bBbRAf+vWFyjc\"",
    "mtime": "2020-05-22T10:12:56.000Z",
    "size": 5354,
    "path": "../public/images/blog/blog-03-500x338.jpg"
  },
  "/images/blog/blog-03-540x330.jpg": {
    "type": "image/jpeg",
    "etag": "\"15f0-wAwLZJWIdz7VQUsT89ZbD/Wd174\"",
    "mtime": "2020-05-22T10:12:56.000Z",
    "size": 5616,
    "path": "../public/images/blog/blog-03-540x330.jpg"
  },
  "/images/blog/blog-03-900x678.jpg": {
    "type": "image/jpeg",
    "etag": "\"38c7-hygYiyNq5aYDat5mG5OpZ4BcI1A\"",
    "mtime": "2020-05-22T10:12:56.000Z",
    "size": 14535,
    "path": "../public/images/blog/blog-03-900x678.jpg"
  },
  "/images/blog/blog-04-1034x678.jpg": {
    "type": "image/jpeg",
    "etag": "\"448f-4RuLxnzQvmHzKRtHeAzvyT8dbqc\"",
    "mtime": "2020-05-22T10:12:56.000Z",
    "size": 17551,
    "path": "../public/images/blog/blog-04-1034x678.jpg"
  },
  "/images/blog/blog-04-1170x600.jpg": {
    "type": "image/jpeg",
    "etag": "\"449f-r60/D4low4lTKQ69D9hASUHpfl8\"",
    "mtime": "2020-05-22T10:12:56.000Z",
    "size": 17567,
    "path": "../public/images/blog/blog-04-1170x600.jpg"
  },
  "/images/blog/blog-04-500x338.jpg": {
    "type": "image/jpeg",
    "etag": "\"14ea-yyqgSJGNywoMB3bBbRAf+vWFyjc\"",
    "mtime": "2020-05-22T10:12:56.000Z",
    "size": 5354,
    "path": "../public/images/blog/blog-04-500x338.jpg"
  },
  "/images/blog/blog-04-900x678.jpg": {
    "type": "image/jpeg",
    "etag": "\"38c7-hygYiyNq5aYDat5mG5OpZ4BcI1A\"",
    "mtime": "2020-05-22T10:12:58.000Z",
    "size": 14535,
    "path": "../public/images/blog/blog-04-900x678.jpg"
  },
  "/images/blog/blog-05-1170x570.jpg": {
    "type": "image/jpeg",
    "etag": "\"4119-Ca0ZITwm/jgMC/i+DvCkoEHCDtk\"",
    "mtime": "2020-05-22T10:12:58.000Z",
    "size": 16665,
    "path": "../public/images/blog/blog-05-1170x570.jpg"
  },
  "/images/blog/blog-05-1170x600.jpg": {
    "type": "image/jpeg",
    "etag": "\"449f-r60/D4low4lTKQ69D9hASUHpfl8\"",
    "mtime": "2020-05-22T10:12:58.000Z",
    "size": 17567,
    "path": "../public/images/blog/blog-05-1170x600.jpg"
  },
  "/images/blog/blog-05-1206x678.jpg": {
    "type": "image/jpeg",
    "etag": "\"4f28-J9M9izHPcjDG2M/y++efvboDRrQ\"",
    "mtime": "2020-05-22T10:12:58.000Z",
    "size": 20264,
    "path": "../public/images/blog/blog-05-1206x678.jpg"
  },
  "/images/blog/blog-05-370x120.jpg": {
    "type": "image/jpeg",
    "etag": "\"a35-hJVENJmM8c3bWQeb4XcDw6Bqj/w\"",
    "mtime": "2020-05-22T10:12:58.000Z",
    "size": 2613,
    "path": "../public/images/blog/blog-05-370x120.jpg"
  },
  "/images/blog/blog-05-370x208.jpg": {
    "type": "image/jpeg",
    "etag": "\"c45-GShRPkZrDbX50+3z6PFAdUTqjKE\"",
    "mtime": "2020-05-22T10:12:58.000Z",
    "size": 3141,
    "path": "../public/images/blog/blog-05-370x208.jpg"
  },
  "/images/blog/blog-05-370x230.jpg": {
    "type": "image/jpeg",
    "etag": "\"cf3-KAIveVXqe8CoqrpnAtub90nyi1I\"",
    "mtime": "2020-05-22T10:12:58.000Z",
    "size": 3315,
    "path": "../public/images/blog/blog-05-370x230.jpg"
  },
  "/images/blog/blog-05-500x338.jpg": {
    "type": "image/jpeg",
    "etag": "\"14ea-yyqgSJGNywoMB3bBbRAf+vWFyjc\"",
    "mtime": "2020-05-22T10:12:58.000Z",
    "size": 5354,
    "path": "../public/images/blog/blog-05-500x338.jpg"
  },
  "/images/blog/blog-05-540x330.jpg": {
    "type": "image/jpeg",
    "etag": "\"15f0-wAwLZJWIdz7VQUsT89ZbD/Wd174\"",
    "mtime": "2020-05-22T10:12:58.000Z",
    "size": 5616,
    "path": "../public/images/blog/blog-05-540x330.jpg"
  },
  "/images/blog/blog-05-770x420.jpg": {
    "type": "image/jpeg",
    "etag": "\"24f8-2McnB7YSTIYJn+EzmpLz10vwqtI\"",
    "mtime": "2020-05-22T10:12:58.000Z",
    "size": 9464,
    "path": "../public/images/blog/blog-05-770x420.jpg"
  },
  "/images/blog/blog-05-900x678.jpg": {
    "type": "image/jpeg",
    "etag": "\"38c7-hygYiyNq5aYDat5mG5OpZ4BcI1A\"",
    "mtime": "2020-05-22T10:12:58.000Z",
    "size": 14535,
    "path": "../public/images/blog/blog-05-900x678.jpg"
  },
  "/images/blog/blog-07-370x230.jpg": {
    "type": "image/jpeg",
    "etag": "\"cf3-KAIveVXqe8CoqrpnAtub90nyi1I\"",
    "mtime": "2020-05-22T10:12:58.000Z",
    "size": 3315,
    "path": "../public/images/blog/blog-07-370x230.jpg"
  },
  "/images/blog/blog-07-480x312.jpg": {
    "type": "image/jpeg",
    "etag": "\"1306-MAlgh29sBcVkRyOeG8yNb5KbKxg\"",
    "mtime": "2020-05-22T10:12:58.000Z",
    "size": 4870,
    "path": "../public/images/blog/blog-07-480x312.jpg"
  },
  "/images/blog/blog-07-540x330.jpg": {
    "type": "image/jpeg",
    "etag": "\"15f0-wAwLZJWIdz7VQUsT89ZbD/Wd174\"",
    "mtime": "2020-05-22T10:12:58.000Z",
    "size": 5616,
    "path": "../public/images/blog/blog-07-540x330.jpg"
  },
  "/images/blog/blog-07-770x400.jpg": {
    "type": "image/jpeg",
    "etag": "\"217c-hDf4qjprReZlMfrZ0a04iWd91QY\"",
    "mtime": "2020-05-22T10:12:58.000Z",
    "size": 8572,
    "path": "../public/images/blog/blog-07-770x400.jpg"
  },
  "/images/blog/blog-07-770x420.jpg": {
    "type": "image/jpeg",
    "etag": "\"24f8-2McnB7YSTIYJn+EzmpLz10vwqtI\"",
    "mtime": "2020-05-22T10:12:58.000Z",
    "size": 9464,
    "path": "../public/images/blog/blog-07-770x420.jpg"
  },
  "/images/blog/blog-08-370x230.jpg": {
    "type": "image/jpeg",
    "etag": "\"cf3-KAIveVXqe8CoqrpnAtub90nyi1I\"",
    "mtime": "2020-05-22T10:12:58.000Z",
    "size": 3315,
    "path": "../public/images/blog/blog-08-370x230.jpg"
  },
  "/images/blog/blog-08-370x247.jpg": {
    "type": "image/jpeg",
    "etag": "\"d32-0i9rUFTku3vswtlfHhH4RRl7p7A\"",
    "mtime": "2020-05-22T10:12:58.000Z",
    "size": 3378,
    "path": "../public/images/blog/blog-08-370x247.jpg"
  },
  "/images/blog/blog-08-480x312.jpg": {
    "type": "image/jpeg",
    "etag": "\"1306-MAlgh29sBcVkRyOeG8yNb5KbKxg\"",
    "mtime": "2020-05-22T10:12:58.000Z",
    "size": 4870,
    "path": "../public/images/blog/blog-08-480x312.jpg"
  },
  "/images/blog/blog-08-540x330.jpg": {
    "type": "image/jpeg",
    "etag": "\"15f0-wAwLZJWIdz7VQUsT89ZbD/Wd174\"",
    "mtime": "2020-05-22T10:12:58.000Z",
    "size": 5616,
    "path": "../public/images/blog/blog-08-540x330.jpg"
  },
  "/images/blog/blog-08-770x420.jpg": {
    "type": "image/jpeg",
    "etag": "\"24f8-2McnB7YSTIYJn+EzmpLz10vwqtI\"",
    "mtime": "2020-05-22T10:12:58.000Z",
    "size": 9464,
    "path": "../public/images/blog/blog-08-770x420.jpg"
  },
  "/images/blog/blog-sidebar-ads.jpg": {
    "type": "image/jpeg",
    "etag": "\"3c0b-LsESa/5SZqOQVqqP2kwFUmIhEqY\"",
    "mtime": "2020-05-22T10:12:58.000Z",
    "size": 15371,
    "path": "../public/images/blog/blog-sidebar-ads.jpg"
  },
  "/images/box-image/blog-01-330x330.jpg": {
    "type": "image/jpeg",
    "etag": "\"d92-TczwfI5cd8YT8ssJ8O4EHa7DBoM\"",
    "mtime": "2020-05-22T10:12:58.000Z",
    "size": 3474,
    "path": "../public/images/box-image/blog-01-330x330.jpg"
  },
  "/images/box-image/blog-01-480x298.jpg": {
    "type": "image/jpeg",
    "etag": "\"130c-OAc40yS8Pn2bt4julILjeG9JsdI\"",
    "mtime": "2020-05-22T10:12:58.000Z",
    "size": 4876,
    "path": "../public/images/box-image/blog-01-480x298.jpg"
  },
  "/images/box-image/box-image-04-330x330.jpg": {
    "type": "image/jpeg",
    "etag": "\"d92-TczwfI5cd8YT8ssJ8O4EHa7DBoM\"",
    "mtime": "2020-05-22T10:12:58.000Z",
    "size": 3474,
    "path": "../public/images/box-image/box-image-04-330x330.jpg"
  },
  "/images/box-image/box-image-05-330x330.jpg": {
    "type": "image/jpeg",
    "etag": "\"d92-TczwfI5cd8YT8ssJ8O4EHa7DBoM\"",
    "mtime": "2020-05-22T10:12:58.000Z",
    "size": 3474,
    "path": "../public/images/box-image/box-image-05-330x330.jpg"
  },
  "/images/box-image/box-image-06-330x330.jpg": {
    "type": "image/jpeg",
    "etag": "\"d92-TczwfI5cd8YT8ssJ8O4EHa7DBoM\"",
    "mtime": "2020-05-22T10:12:58.000Z",
    "size": 3474,
    "path": "../public/images/box-image/box-image-06-330x330.jpg"
  },
  "/images/box-image/home-processing-software-image-01.jpg": {
    "type": "image/jpeg",
    "etag": "\"c1b-iipYUbnsvB1RwfulM70gwdKMM9U\"",
    "mtime": "2020-05-22T10:12:58.000Z",
    "size": 3099,
    "path": "../public/images/box-image/home-processing-software-image-01.jpg"
  },
  "/images/box-image/home-processing-software-image-02.jpg": {
    "type": "image/jpeg",
    "etag": "\"16a0-fXCoHB+d/BB43u+DugJQCsDteeo\"",
    "mtime": "2020-05-22T10:12:58.000Z",
    "size": 5792,
    "path": "../public/images/box-image/home-processing-software-image-02.jpg"
  },
  "/images/box-image/home-processing-software-image-03.jpg": {
    "type": "image/jpeg",
    "etag": "\"c1b-iipYUbnsvB1RwfulM70gwdKMM9U\"",
    "mtime": "2020-05-22T10:12:58.000Z",
    "size": 3099,
    "path": "../public/images/box-image/home-processing-software-image-03.jpg"
  },
  "/images/box-image/home-processing-software-image-04.jpg": {
    "type": "image/jpeg",
    "etag": "\"f19-YdQPKyENox4mbSKt+G+8xSLHR+M\"",
    "mtime": "2020-05-22T10:12:58.000Z",
    "size": 3865,
    "path": "../public/images/box-image/home-processing-software-image-04.jpg"
  },
  "/images/box-image/mitech-home-infotechno-box-large-image-02-330x330.jpg": {
    "type": "image/jpeg",
    "etag": "\"d92-TczwfI5cd8YT8ssJ8O4EHa7DBoM\"",
    "mtime": "2020-05-22T10:12:58.000Z",
    "size": 3474,
    "path": "../public/images/box-image/mitech-home-infotechno-box-large-image-02-330x330.jpg"
  },
  "/images/box-image/mitech-home-infotechno-box-large-image-02-480x298.jpg": {
    "type": "image/jpeg",
    "etag": "\"130c-OAc40yS8Pn2bt4julILjeG9JsdI\"",
    "mtime": "2020-05-22T10:12:58.000Z",
    "size": 4876,
    "path": "../public/images/box-image/mitech-home-infotechno-box-large-image-02-480x298.jpg"
  },
  "/images/box-image/mitech-home-infotechno-box-large-image-03-330x330.jpg": {
    "type": "image/jpeg",
    "etag": "\"d92-TczwfI5cd8YT8ssJ8O4EHa7DBoM\"",
    "mtime": "2020-05-22T10:12:58.000Z",
    "size": 3474,
    "path": "../public/images/box-image/mitech-home-infotechno-box-large-image-03-330x330.jpg"
  },
  "/images/box-image/mitech-home-infotechno-box-large-image-03-480x298.jpg": {
    "type": "image/jpeg",
    "etag": "\"130c-OAc40yS8Pn2bt4julILjeG9JsdI\"",
    "mtime": "2020-05-22T10:12:58.000Z",
    "size": 4876,
    "path": "../public/images/box-image/mitech-home-infotechno-box-large-image-03-480x298.jpg"
  },
  "/images/box-image/mitech-home-infotechno-box-large-image_02-330x330.jpg": {
    "type": "image/jpeg",
    "etag": "\"f19-YdQPKyENox4mbSKt+G+8xSLHR+M\"",
    "mtime": "2020-05-22T10:12:58.000Z",
    "size": 3865,
    "path": "../public/images/box-image/mitech-home-infotechno-box-large-image_02-330x330.jpg"
  },
  "/images/box-image/mitech-home-infotechno-box-large-image_04-330x330.jpg": {
    "type": "image/jpeg",
    "etag": "\"f19-YdQPKyENox4mbSKt+G+8xSLHR+M\"",
    "mtime": "2020-05-22T10:12:58.000Z",
    "size": 3865,
    "path": "../public/images/box-image/mitech-home-infotechno-box-large-image_04-330x330.jpg"
  },
  "/images/brand/client-logo-01-hover.png": {
    "type": "image/png",
    "etag": "\"1fb-ks+iEf3s2Xcnw61GSyTuqaF1Jig\"",
    "mtime": "2020-05-22T10:12:58.000Z",
    "size": 507,
    "path": "../public/images/brand/client-logo-01-hover.png"
  },
  "/images/brand/client-logo-01.png": {
    "type": "image/png",
    "etag": "\"1fb-ks+iEf3s2Xcnw61GSyTuqaF1Jig\"",
    "mtime": "2020-05-22T10:12:58.000Z",
    "size": 507,
    "path": "../public/images/brand/client-logo-01.png"
  },
  "/images/brand/client-logo-02-hover.png": {
    "type": "image/png",
    "etag": "\"1fb-ks+iEf3s2Xcnw61GSyTuqaF1Jig\"",
    "mtime": "2020-05-22T10:12:58.000Z",
    "size": 507,
    "path": "../public/images/brand/client-logo-02-hover.png"
  },
  "/images/brand/client-logo-02.png": {
    "type": "image/png",
    "etag": "\"1fb-ks+iEf3s2Xcnw61GSyTuqaF1Jig\"",
    "mtime": "2020-05-22T10:12:58.000Z",
    "size": 507,
    "path": "../public/images/brand/client-logo-02.png"
  },
  "/images/brand/client-logo-03-hover.png": {
    "type": "image/png",
    "etag": "\"20d-nXDCy/xuJNoBl05QYfwg1KsD3aM\"",
    "mtime": "2020-05-22T10:12:58.000Z",
    "size": 525,
    "path": "../public/images/brand/client-logo-03-hover.png"
  },
  "/images/brand/client-logo-03.png": {
    "type": "image/png",
    "etag": "\"20d-nXDCy/xuJNoBl05QYfwg1KsD3aM\"",
    "mtime": "2020-05-22T10:12:58.000Z",
    "size": 525,
    "path": "../public/images/brand/client-logo-03.png"
  },
  "/images/brand/client-logo-04-hover.png": {
    "type": "image/png",
    "etag": "\"29e-Zrq9oVXgQoKrWdMuVbdCn0t17BY\"",
    "mtime": "2020-05-22T10:12:58.000Z",
    "size": 670,
    "path": "../public/images/brand/client-logo-04-hover.png"
  },
  "/images/brand/client-logo-04.png": {
    "type": "image/png",
    "etag": "\"29e-Zrq9oVXgQoKrWdMuVbdCn0t17BY\"",
    "mtime": "2020-05-22T10:12:58.000Z",
    "size": 670,
    "path": "../public/images/brand/client-logo-04.png"
  },
  "/images/brand/client-logo-05-hover.png": {
    "type": "image/png",
    "etag": "\"134-plmVqd8ZiO9E03XwVcs3i5Apeq4\"",
    "mtime": "2020-05-22T10:12:58.000Z",
    "size": 308,
    "path": "../public/images/brand/client-logo-05-hover.png"
  },
  "/images/brand/client-logo-05.png": {
    "type": "image/png",
    "etag": "\"134-plmVqd8ZiO9E03XwVcs3i5Apeq4\"",
    "mtime": "2020-05-22T10:12:58.000Z",
    "size": 308,
    "path": "../public/images/brand/client-logo-05.png"
  },
  "/images/brand/client-logo-06-hover.png": {
    "type": "image/png",
    "etag": "\"21b-QYmsDIF6QOT3rJ6XOAHI/OJobz4\"",
    "mtime": "2020-05-22T10:12:58.000Z",
    "size": 539,
    "path": "../public/images/brand/client-logo-06-hover.png"
  },
  "/images/brand/client-logo-06.png": {
    "type": "image/png",
    "etag": "\"21b-QYmsDIF6QOT3rJ6XOAHI/OJobz4\"",
    "mtime": "2020-05-22T10:12:58.000Z",
    "size": 539,
    "path": "../public/images/brand/client-logo-06.png"
  },
  "/images/brand/client-logo-07-hover.png": {
    "type": "image/png",
    "etag": "\"25c-HJklbfTAhmXBnR34QUo9Ak9hz98\"",
    "mtime": "2020-05-22T10:12:58.000Z",
    "size": 604,
    "path": "../public/images/brand/client-logo-07-hover.png"
  },
  "/images/brand/client-logo-07.png": {
    "type": "image/png",
    "etag": "\"25c-HJklbfTAhmXBnR34QUo9Ak9hz98\"",
    "mtime": "2020-05-22T10:12:58.000Z",
    "size": 604,
    "path": "../public/images/brand/client-logo-07.png"
  },
  "/images/brand/client-logo-08-hover.png": {
    "type": "image/png",
    "etag": "\"13c-kSMP9Q79ze1LLUzNRgTB315Fww8\"",
    "mtime": "2020-05-22T10:12:58.000Z",
    "size": 316,
    "path": "../public/images/brand/client-logo-08-hover.png"
  },
  "/images/brand/client-logo-08.png": {
    "type": "image/png",
    "etag": "\"13c-kSMP9Q79ze1LLUzNRgTB315Fww8\"",
    "mtime": "2020-05-22T10:12:58.000Z",
    "size": 316,
    "path": "../public/images/brand/client-logo-08.png"
  },
  "/images/brand/client-logo-09-hover.png": {
    "type": "image/png",
    "etag": "\"28b-asMYOZ9MQLLWHYGV1aJBT2vEtMY\"",
    "mtime": "2020-05-22T10:12:58.000Z",
    "size": 651,
    "path": "../public/images/brand/client-logo-09-hover.png"
  },
  "/images/brand/client-logo-09.png": {
    "type": "image/png",
    "etag": "\"28b-asMYOZ9MQLLWHYGV1aJBT2vEtMY\"",
    "mtime": "2020-05-22T10:12:58.000Z",
    "size": 651,
    "path": "../public/images/brand/client-logo-09.png"
  },
  "/images/brand/client-logo-10-hover.png": {
    "type": "image/png",
    "etag": "\"2bf-fx9QR9f+ooQAakrIbGxvOe/v4gY\"",
    "mtime": "2020-05-22T10:12:58.000Z",
    "size": 703,
    "path": "../public/images/brand/client-logo-10-hover.png"
  },
  "/images/brand/client-logo-10.png": {
    "type": "image/png",
    "etag": "\"27a-LoTGrFBWdSb3cGx149vC+6d1kQE\"",
    "mtime": "2020-05-22T10:12:58.000Z",
    "size": 634,
    "path": "../public/images/brand/client-logo-10.png"
  },
  "/images/brand/client-logo-11-hover.png": {
    "type": "image/png",
    "etag": "\"28e-EnRZ7BQCzexcpHrlA1KnKT3fPLU\"",
    "mtime": "2020-05-22T10:12:58.000Z",
    "size": 654,
    "path": "../public/images/brand/client-logo-11-hover.png"
  },
  "/images/brand/client-logo-11.png": {
    "type": "image/png",
    "etag": "\"28e-EnRZ7BQCzexcpHrlA1KnKT3fPLU\"",
    "mtime": "2020-05-22T10:12:58.000Z",
    "size": 654,
    "path": "../public/images/brand/client-logo-11.png"
  },
  "/images/brand/client-logo-12-hover.png": {
    "type": "image/png",
    "etag": "\"1be-Q3Fazj89rxBrK7o56i3/i17aYsY\"",
    "mtime": "2020-05-22T10:12:58.000Z",
    "size": 446,
    "path": "../public/images/brand/client-logo-12-hover.png"
  },
  "/images/brand/client-logo-12.png": {
    "type": "image/png",
    "etag": "\"1be-Q3Fazj89rxBrK7o56i3/i17aYsY\"",
    "mtime": "2020-05-22T10:12:58.000Z",
    "size": 446,
    "path": "../public/images/brand/client-logo-12.png"
  },
  "/images/features/case-study-image-01.png": {
    "type": "image/png",
    "etag": "\"1905-BEgj+6chfbu7zbKcEzx1YxPx2WQ\"",
    "mtime": "2020-05-22T10:12:58.000Z",
    "size": 6405,
    "path": "../public/images/features/case-study-image-01.png"
  },
  "/images/features/case-study-image-02.png": {
    "type": "image/png",
    "etag": "\"1905-BEgj+6chfbu7zbKcEzx1YxPx2WQ\"",
    "mtime": "2020-05-22T10:12:58.000Z",
    "size": 6405,
    "path": "../public/images/features/case-study-image-02.png"
  },
  "/images/flags/de.png": {
    "type": "image/png",
    "etag": "\"ac-bjGVp7VQrREWeVmk2uJLVcLZuIY\"",
    "mtime": "2020-04-16T12:17:32.000Z",
    "size": 172,
    "path": "../public/images/flags/de.png"
  },
  "/images/flags/en.png": {
    "type": "image/png",
    "etag": "\"307-YIb8Ta8qMdtZp9CIUx1tmmCRvA4\"",
    "mtime": "2020-04-16T12:17:32.000Z",
    "size": 775,
    "path": "../public/images/flags/en.png"
  },
  "/images/flags/fr.png": {
    "type": "image/png",
    "etag": "\"c3-i6ZckGOtmS/OATu/YWSyZ6AOlOs\"",
    "mtime": "2020-04-16T12:17:32.000Z",
    "size": 195,
    "path": "../public/images/flags/fr.png"
  },
  "/images/gallery/blog-06-960x960.jpg": {
    "type": "image/jpeg",
    "etag": "\"4de7-8mvEUJUObwi7vaQAHGfM+uQ4Fi4\"",
    "mtime": "2020-05-22T10:12:58.000Z",
    "size": 19943,
    "path": "../public/images/gallery/blog-06-960x960.jpg"
  },
  "/images/gallery/blog-07-960x960.jpg": {
    "type": "image/jpeg",
    "etag": "\"4de7-8mvEUJUObwi7vaQAHGfM+uQ4Fi4\"",
    "mtime": "2020-05-22T10:12:58.000Z",
    "size": 19943,
    "path": "../public/images/gallery/blog-07-960x960.jpg"
  },
  "/images/gallery/blog-08-960x960.jpg": {
    "type": "image/jpeg",
    "etag": "\"4de7-8mvEUJUObwi7vaQAHGfM+uQ4Fi4\"",
    "mtime": "2020-05-22T10:12:58.000Z",
    "size": 19943,
    "path": "../public/images/gallery/blog-08-960x960.jpg"
  },
  "/images/gallery/careers-gallery-image-01-960x960.jpg": {
    "type": "image/jpeg",
    "etag": "\"4de7-8mvEUJUObwi7vaQAHGfM+uQ4Fi4\"",
    "mtime": "2020-05-22T10:12:58.000Z",
    "size": 19943,
    "path": "../public/images/gallery/careers-gallery-image-01-960x960.jpg"
  },
  "/images/hero/appointment-hero-bg.jpg": {
    "type": "image/jpeg",
    "etag": "\"7954-xFEhEcorgdsDPzva+k98krUYH5E\"",
    "mtime": "2020-05-22T10:12:58.000Z",
    "size": 31060,
    "path": "../public/images/hero/appointment-hero-bg.jpg"
  },
  "/images/hero/home-reputable-success.png": {
    "type": "image/png",
    "etag": "\"220d7-ae6rQGt2+P1+M/gGtObovdPxP4c\"",
    "mtime": "2023-10-23T09:18:46.000Z",
    "size": 139479,
    "path": "../public/images/hero/home-reputable-success.png"
  },
  "/images/hero/home-resolutions-hero-bg-image.jpg": {
    "type": "image/jpeg",
    "etag": "\"968b-ZLl9eWDRPyIcsBZ6Zs0QdalK5QI\"",
    "mtime": "2020-05-22T10:12:58.000Z",
    "size": 38539,
    "path": "../public/images/hero/home-resolutions-hero-bg-image.jpg"
  },
  "/images/hero/home-services-hero-bg.jpg": {
    "type": "image/jpeg",
    "etag": "\"865a-JiAKThEREqquoRcoVLbB/mM+Vxk\"",
    "mtime": "2020-05-22T10:12:58.000Z",
    "size": 34394,
    "path": "../public/images/hero/home-services-hero-bg.jpg"
  },
  "/images/hero/infotechno-01.png": {
    "type": "image/png",
    "etag": "\"1c4c-0u0SdCYeu53ADFLbU4o/cOSGI6M\"",
    "mtime": "2020-04-16T12:17:36.000Z",
    "size": 7244,
    "path": "../public/images/hero/infotechno-01.png"
  },
  "/images/hero/infotechno-02.png": {
    "type": "image/png",
    "etag": "\"1d0a-mwY6ixtEdiA/lcOzbU/ILQkFNTU\"",
    "mtime": "2020-05-22T10:12:58.000Z",
    "size": 7434,
    "path": "../public/images/hero/infotechno-02.png"
  },
  "/images/hero/mitech-landing-main-slider-bg.jpg": {
    "type": "image/jpeg",
    "etag": "\"306a-mIE8DrpXXNCkyGLLwiKWo9nRv6I\"",
    "mtime": "2020-04-16T12:17:34.000Z",
    "size": 12394,
    "path": "../public/images/hero/mitech-landing-main-slider-bg.jpg"
  },
  "/images/hero/mitech-landing-main-slider-slide-01-image-01.png": {
    "type": "image/png",
    "etag": "\"b36-FhY/zgEc1zXqOI5GwAoAnU3wdBM\"",
    "mtime": "2020-05-22T10:12:58.000Z",
    "size": 2870,
    "path": "../public/images/hero/mitech-landing-main-slider-slide-01-image-01.png"
  },
  "/images/hero/mitech-landing-main-slider-slide-01-image-02.png": {
    "type": "image/png",
    "etag": "\"4b7-+jeKZPqBZDF/DiasFIIRqIitet0\"",
    "mtime": "2020-05-22T10:12:58.000Z",
    "size": 1207,
    "path": "../public/images/hero/mitech-landing-main-slider-slide-01-image-02.png"
  },
  "/images/hero/mitech-landing-main-slider-slide-01-image-03.png": {
    "type": "image/png",
    "etag": "\"ed9-wx2QuejBmiHYftCHN5UwTam3/EA\"",
    "mtime": "2020-05-22T10:12:58.000Z",
    "size": 3801,
    "path": "../public/images/hero/mitech-landing-main-slider-slide-01-image-03.png"
  },
  "/images/hero/mitech-landing-main-slider-slide-01-image-04.png": {
    "type": "image/png",
    "etag": "\"20b0-pchPeCARll+GNdx/N1xT5+WelbE\"",
    "mtime": "2020-05-22T10:12:58.000Z",
    "size": 8368,
    "path": "../public/images/hero/mitech-landing-main-slider-slide-01-image-04.png"
  },
  "/images/hero/mitech-landing-main-slider-slide-01-image-05.png": {
    "type": "image/png",
    "etag": "\"841-JwNWNIje+syCCM1abGrOL6eugR0\"",
    "mtime": "2020-05-22T10:12:58.000Z",
    "size": 2113,
    "path": "../public/images/hero/mitech-landing-main-slider-slide-01-image-05.png"
  },
  "/images/hero/mitech-slider-cybersecurity-global-image.png": {
    "type": "image/png",
    "etag": "\"11fd2-/TpAF/HVZY810+rWfxhdpI66uhs\"",
    "mtime": "2020-04-16T12:17:34.000Z",
    "size": 73682,
    "path": "../public/images/hero/mitech-slider-cybersecurity-global-image.png"
  },
  "/images/hero/processing-hero-bg.jpg": {
    "type": "image/jpeg",
    "etag": "\"7300-tIyXiKGm1vnAsu+q3glWxtLP9uU\"",
    "mtime": "2020-04-16T12:17:32.000Z",
    "size": 29440,
    "path": "../public/images/hero/processing-hero-bg.jpg"
  },
  "/images/hero/slider-cybersecurity-slide-01-image-01.png": {
    "type": "image/png",
    "etag": "\"142b-L2QAAX/Hmmx+POZzKq9XXCjY6tU\"",
    "mtime": "2020-05-22T10:12:58.000Z",
    "size": 5163,
    "path": "../public/images/hero/slider-cybersecurity-slide-01-image-01.png"
  },
  "/images/hero/slider-processing-slide-01-image-01.png": {
    "type": "image/png",
    "etag": "\"1976-PEl8A8Izu0i2af/LZehFmYm5q08\"",
    "mtime": "2020-05-22T10:12:58.000Z",
    "size": 6518,
    "path": "../public/images/hero/slider-processing-slide-01-image-01.png"
  },
  "/images/icons/apple-store.jpg": {
    "type": "image/jpeg",
    "etag": "\"796-IzuMtNGz1Qy4dQoAlT1lDb2SvUw\"",
    "mtime": "2020-04-16T12:17:44.000Z",
    "size": 1942,
    "path": "../public/images/icons/apple-store.jpg"
  },
  "/images/icons/black-apple-store.jpg": {
    "type": "image/jpeg",
    "etag": "\"8ee-FkAXYRecu8CP38eIWw4d+Vuxee8\"",
    "mtime": "2020-04-16T12:17:44.000Z",
    "size": 2286,
    "path": "../public/images/icons/black-apple-store.jpg"
  },
  "/images/icons/black-google-play.jpg": {
    "type": "image/jpeg",
    "etag": "\"7b7-H8DV4RJj4jmhs45QVIP1eiahhrI\"",
    "mtime": "2020-04-16T12:17:44.000Z",
    "size": 1975,
    "path": "../public/images/icons/black-google-play.jpg"
  },
  "/images/icons/google-play.jpg": {
    "type": "image/jpeg",
    "etag": "\"5a0-DAhPNUX9yCQl7zG93mFSVGkXacs\"",
    "mtime": "2020-04-16T12:17:44.000Z",
    "size": 1440,
    "path": "../public/images/icons/google-play.jpg"
  },
  "/images/icons/green-curve-arrow.png": {
    "type": "image/png",
    "etag": "\"8df-vM4zA751KjqOHGJVwnRMwzrAotQ\"",
    "mtime": "2023-10-23T09:18:46.000Z",
    "size": 2271,
    "path": "../public/images/icons/green-curve-arrow.png"
  },
  "/images/icons/hero-selector-icon.png": {
    "type": "image/png",
    "etag": "\"e0-ETBlNLq0WX9T7U41F8dOh1ctMpI\"",
    "mtime": "2020-04-16T12:17:44.000Z",
    "size": 224,
    "path": "../public/images/icons/hero-selector-icon.png"
  },
  "/images/icons/home-reputable-success-client-logo-01.webp": {
    "type": "image/webp",
    "etag": "\"360-AnhSJn2rNL08Jz2RcFWy+PTMV4k\"",
    "mtime": "2023-10-23T09:18:46.000Z",
    "size": 864,
    "path": "../public/images/icons/home-reputable-success-client-logo-01.webp"
  },
  "/images/icons/home-reputable-success-client-logo-02.webp": {
    "type": "image/webp",
    "etag": "\"3fc-mtAAPs0bXOKr15Bj8RsPNumROl8\"",
    "mtime": "2023-10-23T09:18:46.000Z",
    "size": 1020,
    "path": "../public/images/icons/home-reputable-success-client-logo-02.webp"
  },
  "/images/icons/home-reputable-success-client-logo-03.webp": {
    "type": "image/webp",
    "etag": "\"35a-TJrnNShsP64dRLH6xNK0qIgP1P0\"",
    "mtime": "2023-10-23T09:18:46.000Z",
    "size": 858,
    "path": "../public/images/icons/home-reputable-success-client-logo-03.webp"
  },
  "/images/icons/home-reputable-success-client-logo-04.webp": {
    "type": "image/webp",
    "etag": "\"3e4-SU1OqBlQKbqDb22YCYjiiX/7mCo\"",
    "mtime": "2023-10-23T09:18:46.000Z",
    "size": 996,
    "path": "../public/images/icons/home-reputable-success-client-logo-04.webp"
  },
  "/images/icons/home-reputable-success-client-logo-06.webp": {
    "type": "image/webp",
    "etag": "\"2fa-lltUuF7SV+ayQlBoQTDkTJmosTU\"",
    "mtime": "2023-10-23T09:18:46.000Z",
    "size": 762,
    "path": "../public/images/icons/home-reputable-success-client-logo-06.webp"
  },
  "/images/icons/light-close.png": {
    "type": "image/png",
    "etag": "\"bb-x1nWUhrmWxp/5EGzssp66FSq+QM\"",
    "mtime": "2020-04-16T12:17:44.000Z",
    "size": 187,
    "path": "../public/images/icons/light-close.png"
  },
  "/images/icons/map-marker-02.png": {
    "type": "image/png",
    "etag": "\"1e9-EIdTzQz1Z1Zd4DBumcz0D4Lh5u0\"",
    "mtime": "2020-04-16T12:17:44.000Z",
    "size": 489,
    "path": "../public/images/icons/map-marker-02.png"
  },
  "/images/icons/map-marker.png": {
    "type": "image/png",
    "etag": "\"1e9-EIdTzQz1Z1Zd4DBumcz0D4Lh5u0\"",
    "mtime": "2020-04-16T12:17:44.000Z",
    "size": 489,
    "path": "../public/images/icons/map-marker.png"
  },
  "/images/icons/mitech-aqua-logo-83x108.png": {
    "type": "image/png",
    "etag": "\"be2-ZvrWDDLwo0E+E1xCGYhKf6cwviI\"",
    "mtime": "2020-04-16T12:17:42.000Z",
    "size": 3042,
    "path": "../public/images/icons/mitech-aqua-logo-83x108.png"
  },
  "/images/icons/mitech-box-image-style-01-image-01-100x108.png": {
    "type": "image/png",
    "etag": "\"828-P9CyYMvXVsuJXeXtNRBwFoOWS8g\"",
    "mtime": "2020-04-16T12:17:42.000Z",
    "size": 2088,
    "path": "../public/images/icons/mitech-box-image-style-01-image-01-100x108.png"
  },
  "/images/icons/mitech-box-image-style-01-image-02-100x108.png": {
    "type": "image/png",
    "etag": "\"a47-q2a6xNAPkkw1ln80o8YepUkiiKk\"",
    "mtime": "2020-04-16T12:17:42.000Z",
    "size": 2631,
    "path": "../public/images/icons/mitech-box-image-style-01-image-02-100x108.png"
  },
  "/images/icons/mitech-box-image-style-01-image-03-100x108.png": {
    "type": "image/png",
    "etag": "\"952-VoNBUF2jyX2hJAciAaOr48hmNPk\"",
    "mtime": "2020-04-16T12:17:42.000Z",
    "size": 2386,
    "path": "../public/images/icons/mitech-box-image-style-01-image-03-100x108.png"
  },
  "/images/icons/mitech-box-image-style-01-image-04-100x108.png": {
    "type": "image/png",
    "etag": "\"9d0-FGoBbN9j3aN5NkTOz2OVRK0fs8Y\"",
    "mtime": "2020-04-16T12:17:42.000Z",
    "size": 2512,
    "path": "../public/images/icons/mitech-box-image-style-01-image-04-100x108.png"
  },
  "/images/icons/mitech-box-image-style-01-image-05-100x108.png": {
    "type": "image/png",
    "etag": "\"a1f-hoZ82R4gzGI8GGJBA0CcbTt8CUQ\"",
    "mtime": "2020-04-16T12:17:42.000Z",
    "size": 2591,
    "path": "../public/images/icons/mitech-box-image-style-01-image-05-100x108.png"
  },
  "/images/icons/mitech-box-image-style-01-image-06-100x108.png": {
    "type": "image/png",
    "etag": "\"986-43MjeqPZjEMxSChJNFx/K2XUN5M\"",
    "mtime": "2020-04-16T12:17:42.000Z",
    "size": 2438,
    "path": "../public/images/icons/mitech-box-image-style-01-image-06-100x108.png"
  },
  "/images/icons/mitech-box-image-style-05-image-01-60x60.png": {
    "type": "image/png",
    "etag": "\"45c-Zj1XQCpQyTpOBXuPhkxsvlaixQo\"",
    "mtime": "2020-04-16T12:17:42.000Z",
    "size": 1116,
    "path": "../public/images/icons/mitech-box-image-style-05-image-01-60x60.png"
  },
  "/images/icons/mitech-box-image-style-05-image-02-60x60.png": {
    "type": "image/png",
    "etag": "\"3fc-nTwHTCee6gnnCAeUv7EOLsK3/gA\"",
    "mtime": "2020-04-16T12:17:42.000Z",
    "size": 1020,
    "path": "../public/images/icons/mitech-box-image-style-05-image-02-60x60.png"
  },
  "/images/icons/mitech-box-image-style-05-image-03-60x60.png": {
    "type": "image/png",
    "etag": "\"5ba-UD9UkeIwfsriKabJiAB3iXOTY9w\"",
    "mtime": "2020-04-16T12:17:42.000Z",
    "size": 1466,
    "path": "../public/images/icons/mitech-box-image-style-05-image-03-60x60.png"
  },
  "/images/icons/mitech-box-image-style-05-image-04-60x60.png": {
    "type": "image/png",
    "etag": "\"413-yMQIokTTmX140dwwy3L/xFMCaVk\"",
    "mtime": "2020-04-16T12:17:42.000Z",
    "size": 1043,
    "path": "../public/images/icons/mitech-box-image-style-05-image-04-60x60.png"
  },
  "/images/icons/mitech-box-image-style-05-image-05-60x60.png": {
    "type": "image/png",
    "etag": "\"367-mu5IX84cUzRrAlwTGNQBLW/6Xt8\"",
    "mtime": "2020-04-16T12:17:42.000Z",
    "size": 871,
    "path": "../public/images/icons/mitech-box-image-style-05-image-05-60x60.png"
  },
  "/images/icons/mitech-box-image-style-05-image-06-60x60.png": {
    "type": "image/png",
    "etag": "\"2b1-By3ETAhZE7t1YkUf26vp9iqUk+E\"",
    "mtime": "2020-04-16T12:17:40.000Z",
    "size": 689,
    "path": "../public/images/icons/mitech-box-image-style-05-image-06-60x60.png"
  },
  "/images/icons/mitech-box-image-style-06-image-01-120x120.png": {
    "type": "image/png",
    "etag": "\"e6a-fJepVuv+2wnv/AEEftiTMhd9R9I\"",
    "mtime": "2020-04-16T12:17:40.000Z",
    "size": 3690,
    "path": "../public/images/icons/mitech-box-image-style-06-image-01-120x120.png"
  },
  "/images/icons/mitech-box-image-style-06-image-02-120x120.png": {
    "type": "image/png",
    "etag": "\"e33-Ro4DaB6yUBFqgmCKkWfEO7sZeug\"",
    "mtime": "2020-04-16T12:17:40.000Z",
    "size": 3635,
    "path": "../public/images/icons/mitech-box-image-style-06-image-02-120x120.png"
  },
  "/images/icons/mitech-box-image-style-06-image-03-120x120.png": {
    "type": "image/png",
    "etag": "\"6f5-/IAVXklVGVOmz1JHjuAsdpPTxa0\"",
    "mtime": "2020-04-16T12:17:40.000Z",
    "size": 1781,
    "path": "../public/images/icons/mitech-box-image-style-06-image-03-120x120.png"
  },
  "/images/icons/mitech-home-resolutions-box-image-01-100x98.png": {
    "type": "image/png",
    "etag": "\"82c-ZWJcDylXXr2kyJklBMaBuH8XT8g\"",
    "mtime": "2020-04-16T12:17:40.000Z",
    "size": 2092,
    "path": "../public/images/icons/mitech-home-resolutions-box-image-01-100x98.png"
  },
  "/images/icons/mitech-home-resolutions-box-image-01-hover-100x98.png": {
    "type": "image/png",
    "etag": "\"6b7-FGIA6kVteN0w+F5A/80z+bQ6Cl4\"",
    "mtime": "2020-04-16T12:17:40.000Z",
    "size": 1719,
    "path": "../public/images/icons/mitech-home-resolutions-box-image-01-hover-100x98.png"
  },
  "/images/icons/mitech-home-resolutions-box-image-02-100x98.png": {
    "type": "image/png",
    "etag": "\"994-xbRGydiZc4b0sTbiq4PRWXueYNE\"",
    "mtime": "2020-04-16T12:17:40.000Z",
    "size": 2452,
    "path": "../public/images/icons/mitech-home-resolutions-box-image-02-100x98.png"
  },
  "/images/icons/mitech-home-resolutions-box-image-02-hover-100x98.png": {
    "type": "image/png",
    "etag": "\"87c-rKb3iWgYGTSLfutNky8R+eSKXgw\"",
    "mtime": "2020-04-16T12:17:40.000Z",
    "size": 2172,
    "path": "../public/images/icons/mitech-home-resolutions-box-image-02-hover-100x98.png"
  },
  "/images/icons/mitech-home-resolutions-box-image-03-100x98.png": {
    "type": "image/png",
    "etag": "\"982-dIqPexvaajXw1b3FuMZHqVjQePg\"",
    "mtime": "2020-04-16T12:17:40.000Z",
    "size": 2434,
    "path": "../public/images/icons/mitech-home-resolutions-box-image-03-100x98.png"
  },
  "/images/icons/mitech-home-resolutions-box-image-03-hover-100x98.png": {
    "type": "image/png",
    "etag": "\"819-jsc1d6fzv1wO9lax8CrfE9vhqeI\"",
    "mtime": "2020-04-16T12:17:40.000Z",
    "size": 2073,
    "path": "../public/images/icons/mitech-home-resolutions-box-image-03-hover-100x98.png"
  },
  "/images/icons/mitech-landing-theme-feature-01-68x68.jpg": {
    "type": "image/jpeg",
    "etag": "\"4d1-Tnl1y8/6CdHq0Ei1X2gDdI0NaY0\"",
    "mtime": "2020-04-16T12:17:38.000Z",
    "size": 1233,
    "path": "../public/images/icons/mitech-landing-theme-feature-01-68x68.jpg"
  },
  "/images/icons/mitech-landing-theme-feature-02-68x68.png": {
    "type": "image/png",
    "etag": "\"824-dl30DoguS6fT08AdsTghTFo4Cq0\"",
    "mtime": "2020-04-16T12:17:38.000Z",
    "size": 2084,
    "path": "../public/images/icons/mitech-landing-theme-feature-02-68x68.png"
  },
  "/images/icons/mitech-landing-theme-feature-03-68x68.png": {
    "type": "image/png",
    "etag": "\"907-LPSWNp+3M4SSlvYdyRbKA4AKwd8\"",
    "mtime": "2020-04-16T12:17:38.000Z",
    "size": 2311,
    "path": "../public/images/icons/mitech-landing-theme-feature-03-68x68.png"
  },
  "/images/icons/mitech-landing-theme-feature-04-68x68.png": {
    "type": "image/png",
    "etag": "\"32b-c/OLaj3ThO5p/Xnh8uYKZzlhBKw\"",
    "mtime": "2020-04-16T12:17:38.000Z",
    "size": 811,
    "path": "../public/images/icons/mitech-landing-theme-feature-04-68x68.png"
  },
  "/images/icons/mitech-landing-theme-feature-05-68x68.png": {
    "type": "image/png",
    "etag": "\"4c9-btYt2SoQ3vvTv/5kxo6ZmaXtAsM\"",
    "mtime": "2020-04-16T12:17:38.000Z",
    "size": 1225,
    "path": "../public/images/icons/mitech-landing-theme-feature-05-68x68.png"
  },
  "/images/icons/mitech-landing-theme-feature-06-68x68.png": {
    "type": "image/png",
    "etag": "\"371-zsnK/MHBvYZpjni7KhhACFAiwoQ\"",
    "mtime": "2020-04-16T12:17:38.000Z",
    "size": 881,
    "path": "../public/images/icons/mitech-landing-theme-feature-06-68x68.png"
  },
  "/images/icons/mitech-pricing-box-icon-01-90x90.png": {
    "type": "image/png",
    "etag": "\"b10-AxpT0dXAJnO5+KpPlRcZKaR6zfU\"",
    "mtime": "2020-04-16T12:17:38.000Z",
    "size": 2832,
    "path": "../public/images/icons/mitech-pricing-box-icon-01-90x90.png"
  },
  "/images/icons/mitech-pricing-box-icon-02-88x88.png": {
    "type": "image/png",
    "etag": "\"be1-xUWICGuKzxHxUfy1xFmYp4I15zo\"",
    "mtime": "2020-04-16T12:17:38.000Z",
    "size": 3041,
    "path": "../public/images/icons/mitech-pricing-box-icon-02-88x88.png"
  },
  "/images/icons/mitech-pricing-box-icon-03-90x90.png": {
    "type": "image/png",
    "etag": "\"8ea-hW+YROnBtVp+fvv3BtmhGbxEpnY\"",
    "mtime": "2020-04-16T12:17:38.000Z",
    "size": 2282,
    "path": "../public/images/icons/mitech-pricing-box-icon-03-90x90.png"
  },
  "/images/icons/mitech-processing-service-image-01-80x83.png": {
    "type": "image/png",
    "etag": "\"45d-8qwnpYchTDLvQP/c+tS1LWpWkUM\"",
    "mtime": "2020-04-16T12:17:38.000Z",
    "size": 1117,
    "path": "../public/images/icons/mitech-processing-service-image-01-80x83.png"
  },
  "/images/icons/mitech-processing-service-image-02-80x83.png": {
    "type": "image/png",
    "etag": "\"6dc-RtAGTVx6dVrkoAZTqsEj1b60iE4\"",
    "mtime": "2020-04-16T12:17:36.000Z",
    "size": 1756,
    "path": "../public/images/icons/mitech-processing-service-image-02-80x83.png"
  },
  "/images/icons/mitech-processing-service-image-03-80x83.png": {
    "type": "image/png",
    "etag": "\"5e8-+HTdwnonpxWmbGdPj2W8r1TRcus\"",
    "mtime": "2020-04-16T12:17:36.000Z",
    "size": 1512,
    "path": "../public/images/icons/mitech-processing-service-image-03-80x83.png"
  },
  "/images/icons/mitech-processing-service-image-04-80x83.png": {
    "type": "image/png",
    "etag": "\"968-uIH2FOzyObGs96QvGKklUTf7gs0\"",
    "mtime": "2020-04-16T12:17:36.000Z",
    "size": 2408,
    "path": "../public/images/icons/mitech-processing-service-image-04-80x83.png"
  },
  "/images/icons/mitech-processing-service-image-05-80x83.png": {
    "type": "image/png",
    "etag": "\"636-0UPrz662Ak46rp4kmB9M2zG81ho\"",
    "mtime": "2020-04-16T12:17:36.000Z",
    "size": 1590,
    "path": "../public/images/icons/mitech-processing-service-image-05-80x83.png"
  },
  "/images/icons/mitech-processing-service-image-06-80x83.png": {
    "type": "image/png",
    "etag": "\"5b8-/9TZREpVx3IMnp2HXY8qLB4F+GU\"",
    "mtime": "2020-04-16T12:17:36.000Z",
    "size": 1464,
    "path": "../public/images/icons/mitech-processing-service-image-06-80x83.png"
  },
  "/images/icons/quote.png": {
    "type": "image/png",
    "etag": "\"551-fzjnEAfaOPLBGuUIVl8aqrxlSds\"",
    "mtime": "2020-04-16T12:17:36.000Z",
    "size": 1361,
    "path": "../public/images/icons/quote.png"
  },
  "/images/icons/selector-icon.png": {
    "type": "image/png",
    "etag": "\"86-iHkKoMz2YAu+UR5HZLGpQ0bwrY0\"",
    "mtime": "2020-04-16T12:17:36.000Z",
    "size": 134,
    "path": "../public/images/icons/selector-icon.png"
  },
  "/images/other/landing-plugin-image-cf7.jpg": {
    "type": "image/jpeg",
    "etag": "\"941-khRZD4i6v9KyW18UuKPSfIRpN0A\"",
    "mtime": "2020-04-16T12:17:48.000Z",
    "size": 2369,
    "path": "../public/images/other/landing-plugin-image-cf7.jpg"
  },
  "/images/other/landing-plugin-image-google-analytic.jpg": {
    "type": "image/jpeg",
    "etag": "\"a1d-80nlrVUCqUzPbBnf7hRiEcdWXo0\"",
    "mtime": "2020-04-16T12:17:48.000Z",
    "size": 2589,
    "path": "../public/images/other/landing-plugin-image-google-analytic.jpg"
  },
  "/images/other/landing-plugin-image-mailchimp.jpg": {
    "type": "image/jpeg",
    "etag": "\"ee9-XMOeuixuhWiuULdTnnJfnDDbkQ4\"",
    "mtime": "2020-04-16T12:17:48.000Z",
    "size": 3817,
    "path": "../public/images/other/landing-plugin-image-mailchimp.jpg"
  },
  "/images/other/landing-plugin-image-revslider.jpg": {
    "type": "image/jpeg",
    "etag": "\"9e1-KRFcggzqYFRszxhPwY5E02mAPIc\"",
    "mtime": "2020-04-16T12:17:48.000Z",
    "size": 2529,
    "path": "../public/images/other/landing-plugin-image-revslider.jpg"
  },
  "/images/other/landing-plugin-image-sass.jpg": {
    "type": "image/jpeg",
    "etag": "\"1072-SGxriBrmOZ1fwKPXPNyjk/d+fjg\"",
    "mtime": "2020-04-16T12:17:48.000Z",
    "size": 4210,
    "path": "../public/images/other/landing-plugin-image-sass.jpg"
  },
  "/images/other/mitech-slider-client-logos-logo-01.png": {
    "type": "image/png",
    "etag": "\"1172-0LFE9gPJlMVFLdQ6H2lwgQAtNto\"",
    "mtime": "2020-04-16T12:17:48.000Z",
    "size": 4466,
    "path": "../public/images/other/mitech-slider-client-logos-logo-01.png"
  },
  "/images/other/mitech-slider-client-logos-logo-02.png": {
    "type": "image/png",
    "etag": "\"1258-1xdhhuGIp7xqqacdT/QHNYCfPVk\"",
    "mtime": "2020-04-16T12:17:48.000Z",
    "size": 4696,
    "path": "../public/images/other/mitech-slider-client-logos-logo-02.png"
  },
  "/images/other/mitech-slider-client-logos-logo-03.png": {
    "type": "image/png",
    "etag": "\"142b-eV0R2IMyMKRL81+MlHU9gizM7h8\"",
    "mtime": "2020-04-16T12:17:46.000Z",
    "size": 5163,
    "path": "../public/images/other/mitech-slider-client-logos-logo-03.png"
  },
  "/images/other/mitech-slider-client-logos-logo-04.png": {
    "type": "image/png",
    "etag": "\"109a-iSnMBMw++5K1E1PtgyMNra6W6Xs\"",
    "mtime": "2020-04-16T12:17:46.000Z",
    "size": 4250,
    "path": "../public/images/other/mitech-slider-client-logos-logo-04.png"
  },
  "/images/other/mitech-slider-client-logos-logo-05.png": {
    "type": "image/png",
    "etag": "\"14a0-ifndQCALbpFf1O4cJt7YXJndEYA\"",
    "mtime": "2020-04-16T12:17:46.000Z",
    "size": 5280,
    "path": "../public/images/other/mitech-slider-client-logos-logo-05.png"
  },
  "/images/other/mitech-slider-client-logos-logo-06.png": {
    "type": "image/png",
    "etag": "\"1110-jtVuFoDX8UTIl9nW2OY6z+rKoIg\"",
    "mtime": "2020-04-16T12:17:46.000Z",
    "size": 4368,
    "path": "../public/images/other/mitech-slider-client-logos-logo-06.png"
  },
  "/images/other/mitech-slider-client-logos-logo-07.png": {
    "type": "image/png",
    "etag": "\"1132-+3sbaxNYPY8t3PwNw0FRYVtp2sg\"",
    "mtime": "2020-04-16T12:17:48.000Z",
    "size": 4402,
    "path": "../public/images/other/mitech-slider-client-logos-logo-07.png"
  },
  "/images/other/page-404-image.png": {
    "type": "image/png",
    "etag": "\"c157-/udShd2sB/Jr/EONdptfYRD4bzM\"",
    "mtime": "2019-09-04T06:27:28.000Z",
    "size": 49495,
    "path": "../public/images/other/page-404-image.png"
  },
  "/images/logo/dark-logo-160x48.png": {
    "type": "image/png",
    "etag": "\"700-9BqCeaY8YI/GVHtmJeXY41vg0gE\"",
    "mtime": "2020-04-16T12:17:46.000Z",
    "size": 1792,
    "path": "../public/images/logo/dark-logo-160x48.png"
  },
  "/images/logo/dark-logo.png": {
    "type": "image/png",
    "etag": "\"dda-W1HvCXTnhV7q2hfYdqoe+SYgroo\"",
    "mtime": "2020-04-16T12:17:46.000Z",
    "size": 3546,
    "path": "../public/images/logo/dark-logo.png"
  },
  "/images/logo/light-logo.png": {
    "type": "image/png",
    "etag": "\"dd6-B+O/MuvoHOmlBWFXLo1KDrW0fM4\"",
    "mtime": "2020-04-16T12:17:44.000Z",
    "size": 3542,
    "path": "../public/images/logo/light-logo.png"
  },
  "/images/logo/logo-dark.png": {
    "type": "image/png",
    "etag": "\"1ece8-4jCqzt5lfcpn6dsFmGZ7vRBPQWQ\"",
    "mtime": "2023-12-18T14:10:49.539Z",
    "size": 126184,
    "path": "../public/images/logo/logo-dark.png"
  },
  "/images/patterns/home-reputable-success-about-shape.webp": {
    "type": "image/webp",
    "etag": "\"19dc-O6veFScxVfJnwexXv7DmD3PNwwM\"",
    "mtime": "2023-10-23T09:18:46.000Z",
    "size": 6620,
    "path": "../public/images/patterns/home-reputable-success-about-shape.webp"
  },
  "/images/patterns/mitech-call-to-action-image-global.png": {
    "type": "image/png",
    "etag": "\"119ea-3EGe/dlUxbSegKqsWk2AAa8jf58\"",
    "mtime": "2020-04-16T12:17:50.000Z",
    "size": 72170,
    "path": "../public/images/patterns/mitech-call-to-action-image-global.png"
  },
  "/images/patterns/mitech-home-appointment-call-to-action-bg-image.png": {
    "type": "image/png",
    "etag": "\"6565-mzQ4+C+3fx09DrDEMR7t3xNUc0U\"",
    "mtime": "2020-04-16T12:17:48.000Z",
    "size": 25957,
    "path": "../public/images/patterns/mitech-home-appointment-call-to-action-bg-image.png"
  },
  "/images/patterns/mitech-home-infotechno-case-study-section-bg.png": {
    "type": "image/png",
    "etag": "\"6ee7-Ujc02uUJhRIqCuqe6blkzb4Udzk\"",
    "mtime": "2020-04-16T12:17:48.000Z",
    "size": 28391,
    "path": "../public/images/patterns/mitech-home-infotechno-case-study-section-bg.png"
  },
  "/images/patterns/mitech-home-infotechno-section-company-bg.png": {
    "type": "image/png",
    "etag": "\"1cd0-lJ55BKPyEvF1kfpMI72yqziN9TY\"",
    "mtime": "2020-04-16T12:17:48.000Z",
    "size": 7376,
    "path": "../public/images/patterns/mitech-home-infotechno-section-company-bg.png"
  },
  "/images/preview/mitech-landing-blog-preview.jpg": {
    "type": "image/jpeg",
    "etag": "\"995a-u7Ye6RijwUmrD9oUOiJnUm+VxFE\"",
    "mtime": "2023-02-18T09:36:10.000Z",
    "size": 39258,
    "path": "../public/images/preview/mitech-landing-blog-preview.jpg"
  },
  "/images/preview/mitech-landing-case-study-preview.jpg": {
    "type": "image/jpeg",
    "etag": "\"7ac9-uA5tS3XRYJLN3yvwoDsJ+rhMZjc\"",
    "mtime": "2023-02-18T09:36:10.000Z",
    "size": 31433,
    "path": "../public/images/preview/mitech-landing-case-study-preview.jpg"
  },
  "/images/preview/mitech-landing-extended-plugins-preview.png": {
    "type": "image/png",
    "etag": "\"1845c-e1XRPFTyKeu61ETOMC30FRg6SjM\"",
    "mtime": "2023-02-18T09:36:10.000Z",
    "size": 99420,
    "path": "../public/images/preview/mitech-landing-extended-plugins-preview.png"
  },
  "/images/preview/mitech-landing-footer-bg-01.jpg": {
    "type": "image/jpeg",
    "etag": "\"ce15-0D1y6BKXP0f/Fb3ZvSmtQVaVgfo\"",
    "mtime": "2023-02-18T09:36:10.000Z",
    "size": 52757,
    "path": "../public/images/preview/mitech-landing-footer-bg-01.jpg"
  },
  "/images/preview/mitech-landing-header-preview-bg.png": {
    "type": "image/png",
    "etag": "\"98e4-BJssRTSmy1n6MP4+aQ+63skDR1Y\"",
    "mtime": "2023-02-18T09:36:10.000Z",
    "size": 39140,
    "path": "../public/images/preview/mitech-landing-header-preview-bg.png"
  },
  "/images/preview/mitech-landing-header-preview-image.png": {
    "type": "image/png",
    "etag": "\"7c65-vORRXFBpYEGgwdYGiUguN5JPUeA\"",
    "mtime": "2023-02-18T09:36:10.000Z",
    "size": 31845,
    "path": "../public/images/preview/mitech-landing-header-preview-image.png"
  },
  "/images/preview/mitech-landing-home-appointment-preview-480x338.jpg": {
    "type": "image/jpeg",
    "etag": "\"52a6-F3KSKKjtHrO5KXbXBa2diXdpbZM\"",
    "mtime": "2023-02-18T09:36:10.000Z",
    "size": 21158,
    "path": "../public/images/preview/mitech-landing-home-appointment-preview-480x338.jpg"
  },
  "/images/preview/mitech-landing-home-cybersecurity-preview-480x338.jpg": {
    "type": "image/jpeg",
    "etag": "\"30d0-kvOlWCm9hKZasvTYQlVw7HPGFrc\"",
    "mtime": "2023-02-18T09:36:10.000Z",
    "size": 12496,
    "path": "../public/images/preview/mitech-landing-home-cybersecurity-preview-480x338.jpg"
  },
  "/images/preview/mitech-landing-home-infotechno-preview-480x338.jpg": {
    "type": "image/jpeg",
    "etag": "\"3366-j+AjFMjLwYdFa2/AnEpilx+2/7I\"",
    "mtime": "2023-02-18T09:36:10.000Z",
    "size": 13158,
    "path": "../public/images/preview/mitech-landing-home-infotechno-preview-480x338.jpg"
  },
  "/images/preview/mitech-landing-home-processing-preview-480x338.jpg": {
    "type": "image/jpeg",
    "etag": "\"47cf-e99VYnQduUtt6QUdeFUzb9sSE9c\"",
    "mtime": "2023-02-18T09:36:10.000Z",
    "size": 18383,
    "path": "../public/images/preview/mitech-landing-home-processing-preview-480x338.jpg"
  },
  "/images/preview/mitech-landing-home-resolutions-preview-480x338.jpg": {
    "type": "image/jpeg",
    "etag": "\"5377-lqdbk8fvqShOt9mzI4HAbv1D02Y\"",
    "mtime": "2023-02-18T09:36:10.000Z",
    "size": 21367,
    "path": "../public/images/preview/mitech-landing-home-resolutions-preview-480x338.jpg"
  },
  "/images/preview/mitech-landing-home-services-preview-480x338.jpg": {
    "type": "image/jpeg",
    "etag": "\"4425-5C0fkpcfcoSvPSfQlk8ab8AbnQk\"",
    "mtime": "2023-02-18T09:36:10.000Z",
    "size": 17445,
    "path": "../public/images/preview/mitech-landing-home-services-preview-480x338.jpg"
  },
  "/images/preview/mitech-landing-plugin-font-awesome-86x86.png": {
    "type": "image/png",
    "etag": "\"44e-YE/FcIbwt6BN839pTjZKAwYcqOo\"",
    "mtime": "2023-02-18T09:36:10.000Z",
    "size": 1102,
    "path": "../public/images/preview/mitech-landing-plugin-font-awesome-86x86.png"
  },
  "/images/preview/mitech-landing-plugin-slider-86x86.png": {
    "type": "image/png",
    "etag": "\"785-/KQefgrSysX68/CDQdKYXY4gITs\"",
    "mtime": "2023-02-18T09:36:10.000Z",
    "size": 1925,
    "path": "../public/images/preview/mitech-landing-plugin-slider-86x86.png"
  },
  "/images/pricing/aeroland-branding-pricing-image-01.png": {
    "type": "image/png",
    "etag": "\"89a-O4Qy5omHlLuFOdL2qr4GmLRDGKU\"",
    "mtime": "2020-04-16T12:17:56.000Z",
    "size": 2202,
    "path": "../public/images/pricing/aeroland-branding-pricing-image-01.png"
  },
  "/images/pricing/aeroland-branding-pricing-image-02.png": {
    "type": "image/png",
    "etag": "\"8a3-tRXb0a+PgqBiqwqESUfJio1U518\"",
    "mtime": "2020-04-16T12:17:54.000Z",
    "size": 2211,
    "path": "../public/images/pricing/aeroland-branding-pricing-image-02.png"
  },
  "/images/pricing/aeroland-branding-pricing-image-03.png": {
    "type": "image/png",
    "etag": "\"8ac-KfC9FtAZYfI6EletXfhx2/4/Nuo\"",
    "mtime": "2020-04-16T12:17:54.000Z",
    "size": 2220,
    "path": "../public/images/pricing/aeroland-branding-pricing-image-03.png"
  },
  "/images/pricing/aeroland-branding-pricing-image-04.png": {
    "type": "image/png",
    "etag": "\"8ef-4ceqGP7phhVTzoLoH8WM3VG0MPc\"",
    "mtime": "2020-04-16T12:17:54.000Z",
    "size": 2287,
    "path": "../public/images/pricing/aeroland-branding-pricing-image-04.png"
  },
  "/images/pricing/aeroland-pricing-05-image-01.png": {
    "type": "image/png",
    "etag": "\"14ca-t25w8CV/yfFcm6vc8Lz4NP+IjN0\"",
    "mtime": "2020-04-16T12:17:54.000Z",
    "size": 5322,
    "path": "../public/images/pricing/aeroland-pricing-05-image-01.png"
  },
  "/images/pricing/aeroland-pricing-05-image-02.png": {
    "type": "image/png",
    "etag": "\"1387-Ds7VlSnYZ5FnrQJPvvSytIn+Eeo\"",
    "mtime": "2020-04-16T12:17:54.000Z",
    "size": 4999,
    "path": "../public/images/pricing/aeroland-pricing-05-image-02.png"
  },
  "/images/pricing/aeroland-pricing-image-05.png": {
    "type": "image/png",
    "etag": "\"1cd1-IL2U/RiaBO15ioS+ueYNxNwfD5U\"",
    "mtime": "2020-04-16T12:17:54.000Z",
    "size": 7377,
    "path": "../public/images/pricing/aeroland-pricing-image-05.png"
  },
  "/images/pricing/aeroland-pricing-image-06.png": {
    "type": "image/png",
    "etag": "\"16f1-vL5i+kEDRADsqDoJndX211JSwC4\"",
    "mtime": "2020-04-16T12:17:54.000Z",
    "size": 5873,
    "path": "../public/images/pricing/aeroland-pricing-image-06.png"
  },
  "/images/pricing/aeroland-pricing-image-07.png": {
    "type": "image/png",
    "etag": "\"1903-ELn+PyR54S2P//ytApGkzJVTUCI\"",
    "mtime": "2020-04-16T12:17:54.000Z",
    "size": 6403,
    "path": "../public/images/pricing/aeroland-pricing-image-07.png"
  },
  "/images/projects/case-study-01-480x298.jpg": {
    "type": "image/jpeg",
    "etag": "\"130c-OAc40yS8Pn2bt4julILjeG9JsdI\"",
    "mtime": "2020-05-22T10:12:58.000Z",
    "size": 4876,
    "path": "../public/images/projects/case-study-01-480x298.jpg"
  },
  "/images/projects/case-study-02-120x80.jpg": {
    "type": "image/jpeg",
    "etag": "\"3d6-UwN6CUuHCCz8RboiH+9hGBGJMok\"",
    "mtime": "2020-05-22T10:12:58.000Z",
    "size": 982,
    "path": "../public/images/projects/case-study-02-120x80.jpg"
  },
  "/images/projects/case-study-02-480x298.jpg": {
    "type": "image/jpeg",
    "etag": "\"130c-OAc40yS8Pn2bt4julILjeG9JsdI\"",
    "mtime": "2020-05-22T10:12:58.000Z",
    "size": 4876,
    "path": "../public/images/projects/case-study-02-480x298.jpg"
  },
  "/images/projects/case-study-03-120x80.jpg": {
    "type": "image/jpeg",
    "etag": "\"3d6-UwN6CUuHCCz8RboiH+9hGBGJMok\"",
    "mtime": "2020-05-22T10:12:58.000Z",
    "size": 982,
    "path": "../public/images/projects/case-study-03-120x80.jpg"
  },
  "/images/projects/case-study-03-480x298.jpg": {
    "type": "image/jpeg",
    "etag": "\"130c-OAc40yS8Pn2bt4julILjeG9JsdI\"",
    "mtime": "2020-05-22T10:12:58.000Z",
    "size": 4876,
    "path": "../public/images/projects/case-study-03-480x298.jpg"
  },
  "/images/projects/case-study-04-480x298.jpg": {
    "type": "image/jpeg",
    "etag": "\"130c-OAc40yS8Pn2bt4julILjeG9JsdI\"",
    "mtime": "2020-05-22T10:12:58.000Z",
    "size": 4876,
    "path": "../public/images/projects/case-study-04-480x298.jpg"
  },
  "/images/projects/case-study-05-480x298.jpg": {
    "type": "image/jpeg",
    "etag": "\"130c-OAc40yS8Pn2bt4julILjeG9JsdI\"",
    "mtime": "2020-05-22T10:12:58.000Z",
    "size": 4876,
    "path": "../public/images/projects/case-study-05-480x298.jpg"
  },
  "/images/projects/case-study-06-480x298.jpg": {
    "type": "image/jpeg",
    "etag": "\"130c-OAc40yS8Pn2bt4julILjeG9JsdI\"",
    "mtime": "2020-05-22T10:12:58.000Z",
    "size": 4876,
    "path": "../public/images/projects/case-study-06-480x298.jpg"
  },
  "/images/projects/success-client-01.jpg": {
    "type": "image/jpeg",
    "etag": "\"a56d-iWHdxEvSP0fvzPFRYE2IEm/33ZQ\"",
    "mtime": "2023-10-23T09:18:46.000Z",
    "size": 42349,
    "path": "../public/images/projects/success-client-01.jpg"
  },
  "/images/projects/success-client-02.jpg": {
    "type": "image/jpeg",
    "etag": "\"62ab-pNx8gNgb8b3qBx2Kt4kVupC+CGY\"",
    "mtime": "2023-10-23T09:18:46.000Z",
    "size": 25259,
    "path": "../public/images/projects/success-client-02.jpg"
  },
  "/images/projects/success-client-03.jpg": {
    "type": "image/jpeg",
    "etag": "\"5e02-j0wvLEm5uc5d9ceta6fVFIZA8Tw\"",
    "mtime": "2023-10-23T09:18:46.000Z",
    "size": 24066,
    "path": "../public/images/projects/success-client-03.jpg"
  },
  "/images/svg/basic_accelerator.png": {
    "type": "image/png",
    "etag": "\"850-tKu1XabJ75XCRIlENNuOmdGiIio\"",
    "mtime": "2020-05-02T04:14:38.000Z",
    "size": 2128,
    "path": "../public/images/svg/basic_accelerator.png"
  },
  "/images/svg/basic_accelerator.svg": {
    "type": "image/svg+xml",
    "etag": "\"2b5-qTBQQqwXzC4/TRdFaAvuSob3SA0\"",
    "mtime": "2020-04-16T12:17:58.000Z",
    "size": 693,
    "path": "../public/images/svg/basic_accelerator.svg"
  },
  "/images/svg/linea-basic-alarm.png": {
    "type": "image/png",
    "etag": "\"a25-g7jqrLdi4uW2/FCepT529U0P0cE\"",
    "mtime": "2020-05-02T04:14:22.000Z",
    "size": 2597,
    "path": "../public/images/svg/linea-basic-alarm.png"
  },
  "/images/svg/linea-basic-alarm.svg": {
    "type": "image/svg+xml",
    "etag": "\"1bb-ZXtGDi7ipG0Un9qd1YpzEhpy0z8\"",
    "mtime": "2020-04-16T12:17:58.000Z",
    "size": 443,
    "path": "../public/images/svg/linea-basic-alarm.svg"
  },
  "/images/svg/linea-basic-case.png": {
    "type": "image/png",
    "etag": "\"5cf-CWcv83GdNvWThN61M6c0knooboI\"",
    "mtime": "2020-05-02T04:14:08.000Z",
    "size": 1487,
    "path": "../public/images/svg/linea-basic-case.png"
  },
  "/images/svg/linea-basic-case.svg": {
    "type": "image/svg+xml",
    "etag": "\"187-N7/aHLUKuW/sM01DaxCreVVUV9A\"",
    "mtime": "2020-04-16T12:17:58.000Z",
    "size": 391,
    "path": "../public/images/svg/linea-basic-case.svg"
  },
  "/images/svg/linea-basic-gear.png": {
    "type": "image/png",
    "etag": "\"963-dyKXtvhuUQhRMKSolP5bxKlqKz8\"",
    "mtime": "2020-05-02T04:13:46.000Z",
    "size": 2403,
    "path": "../public/images/svg/linea-basic-gear.png"
  },
  "/images/svg/linea-basic-gear.svg": {
    "type": "image/svg+xml",
    "etag": "\"19b-0Ttt5g/ptXs2cA7uLF68VT/QmZY\"",
    "mtime": "2020-04-16T12:17:58.000Z",
    "size": 411,
    "path": "../public/images/svg/linea-basic-gear.svg"
  },
  "/images/svg/linea-basic-geolocalize-05.png": {
    "type": "image/png",
    "etag": "\"839-g0p5cLf485GxMTQB1s4px4nBJ5Q\"",
    "mtime": "2020-05-02T04:13:28.000Z",
    "size": 2105,
    "path": "../public/images/svg/linea-basic-geolocalize-05.png"
  },
  "/images/svg/linea-basic-geolocalize-05.svg": {
    "type": "image/svg+xml",
    "etag": "\"202-YcxmN8T5pMzItzffZ3kESWFC2Po\"",
    "mtime": "2020-04-16T12:17:58.000Z",
    "size": 514,
    "path": "../public/images/svg/linea-basic-geolocalize-05.svg"
  },
  "/images/svg/linea-basic-heart.png": {
    "type": "image/png",
    "etag": "\"838-h8RXuge8FIFRZ1huBL2doquUI5E\"",
    "mtime": "2020-05-02T04:13:06.000Z",
    "size": 2104,
    "path": "../public/images/svg/linea-basic-heart.png"
  },
  "/images/svg/linea-basic-heart.svg": {
    "type": "image/svg+xml",
    "etag": "\"175-/LhKpa6/f6+iFpLJak8eSUAW5LQ\"",
    "mtime": "2020-04-16T12:17:58.000Z",
    "size": 373,
    "path": "../public/images/svg/linea-basic-heart.svg"
  },
  "/images/svg/linea-basic-pencil-ruler.png": {
    "type": "image/png",
    "etag": "\"8a9-2dMfDS8tjzkXyRMy4vJhTv9a2Mg\"",
    "mtime": "2020-05-02T04:12:50.000Z",
    "size": 2217,
    "path": "../public/images/svg/linea-basic-pencil-ruler.png"
  },
  "/images/svg/linea-basic-pencil-ruler.svg": {
    "type": "image/svg+xml",
    "etag": "\"1ac-VboOu3uOgkiHKExqBWBQf+FP1+o\"",
    "mtime": "2020-04-16T12:17:58.000Z",
    "size": 428,
    "path": "../public/images/svg/linea-basic-pencil-ruler.svg"
  },
  "/images/svg/linea-basic-spread-text-bookmark.png": {
    "type": "image/png",
    "etag": "\"9a7-XuNOts563khtfHAZ+jhw9a3wjlc\"",
    "mtime": "2020-05-02T04:12:32.000Z",
    "size": 2471,
    "path": "../public/images/svg/linea-basic-spread-text-bookmark.png"
  },
  "/images/svg/linea-basic-spread-text-bookmark.svg": {
    "type": "image/svg+xml",
    "etag": "\"1c1-AN0WjRRnSchSdz9ynUt7+jfXjOE\"",
    "mtime": "2020-04-16T12:17:56.000Z",
    "size": 449,
    "path": "../public/images/svg/linea-basic-spread-text-bookmark.svg"
  },
  "/images/svg/linea-ecommerce-money.png": {
    "type": "image/png",
    "etag": "\"a22-FMBK9G0xCrAUInj7GNtlhI9YpPc\"",
    "mtime": "2020-05-02T04:12:12.000Z",
    "size": 2594,
    "path": "../public/images/svg/linea-ecommerce-money.png"
  },
  "/images/svg/linea-ecommerce-money.svg": {
    "type": "image/svg+xml",
    "etag": "\"22d-c1tZ61Ul+0xJ96mRQlakOUJwi44\"",
    "mtime": "2020-04-16T12:17:56.000Z",
    "size": 557,
    "path": "../public/images/svg/linea-ecommerce-money.svg"
  },
  "/images/svg/linea-music-headphones.png": {
    "type": "image/png",
    "etag": "\"753-bpzv5kaSuZ+zk0RaEUU+pq9GlTw\"",
    "mtime": "2020-05-02T04:11:52.000Z",
    "size": 1875,
    "path": "../public/images/svg/linea-music-headphones.png"
  },
  "/images/svg/linea-music-headphones.svg": {
    "type": "image/svg+xml",
    "etag": "\"18c-UuWyZwrpX8j3v7TiL/dZN3zSb2c\"",
    "mtime": "2020-04-16T12:17:56.000Z",
    "size": 396,
    "path": "../public/images/svg/linea-music-headphones.svg"
  },
  "/images/team/admin-02.jpeg": {
    "type": "image/jpeg",
    "etag": "\"38a-rYgBeb46ASQVod7iYzu0Ut/fxqg\"",
    "mtime": "2020-05-22T10:12:58.000Z",
    "size": 906,
    "path": "../public/images/team/admin-02.jpeg"
  },
  "/images/team/admin.jpeg": {
    "type": "image/jpeg",
    "etag": "\"38a-rYgBeb46ASQVod7iYzu0Ut/fxqg\"",
    "mtime": "2020-05-22T10:12:58.000Z",
    "size": 906,
    "path": "../public/images/team/admin.jpeg"
  },
  "/images/team/avatar-06-90x90.jpeg": {
    "type": "image/jpeg",
    "etag": "\"3c0-Bj9hI4vEtFKVZFI5O2uhuilcEZk\"",
    "mtime": "2020-05-22T10:12:58.000Z",
    "size": 960,
    "path": "../public/images/team/avatar-06-90x90.jpeg"
  },
  "/images/team/coment.jpeg": {
    "type": "image/jpeg",
    "etag": "\"350-zwkueEyDG1Vxnb121tnpL6RQv6E\"",
    "mtime": "2020-05-22T10:12:58.000Z",
    "size": 848,
    "path": "../public/images/team/coment.jpeg"
  },
  "/images/team/comment-2.jpeg": {
    "type": "image/jpeg",
    "etag": "\"350-zwkueEyDG1Vxnb121tnpL6RQv6E\"",
    "mtime": "2020-05-22T10:12:58.000Z",
    "size": 848,
    "path": "../public/images/team/comment-2.jpeg"
  },
  "/images/team/comment-3.jpeg": {
    "type": "image/jpeg",
    "etag": "\"350-zwkueEyDG1Vxnb121tnpL6RQv6E\"",
    "mtime": "2020-05-22T10:12:58.000Z",
    "size": 848,
    "path": "../public/images/team/comment-3.jpeg"
  },
  "/images/team/reply-comm.jpg": {
    "type": "image/jpeg",
    "etag": "\"312-qDShJ74ZN6xZAfVL7IG9XrKYhEY\"",
    "mtime": "2020-04-16T12:18:00.000Z",
    "size": 786,
    "path": "../public/images/team/reply-comm.jpg"
  },
  "/images/team/team-member-01-370x250.jpg": {
    "type": "image/jpeg",
    "etag": "\"d43-BcRiqSYMCUvltbbuTFmtl3xTrXE\"",
    "mtime": "2020-05-22T10:12:58.000Z",
    "size": 3395,
    "path": "../public/images/team/team-member-01-370x250.jpg"
  },
  "/images/team/team-member-01-370x455.jpg": {
    "type": "image/jpeg",
    "etag": "\"13f7-LUo0J94K0PGfrb1CozGxcwvmeP8\"",
    "mtime": "2020-05-22T10:12:58.000Z",
    "size": 5111,
    "path": "../public/images/team/team-member-01-370x455.jpg"
  },
  "/images/team/team-member-02-370x250.jpg": {
    "type": "image/jpeg",
    "etag": "\"d43-BcRiqSYMCUvltbbuTFmtl3xTrXE\"",
    "mtime": "2020-05-22T10:12:58.000Z",
    "size": 3395,
    "path": "../public/images/team/team-member-02-370x250.jpg"
  },
  "/images/team/team-member-02-370x452.jpg": {
    "type": "image/jpeg",
    "etag": "\"1273-INzAzS2/v7niuUA7f5VGuwst/c4\"",
    "mtime": "2020-05-22T10:12:58.000Z",
    "size": 4723,
    "path": "../public/images/team/team-member-02-370x452.jpg"
  },
  "/images/team/team-member-03-370x452.jpg": {
    "type": "image/jpeg",
    "etag": "\"1273-INzAzS2/v7niuUA7f5VGuwst/c4\"",
    "mtime": "2020-05-22T10:12:58.000Z",
    "size": 4723,
    "path": "../public/images/team/team-member-03-370x452.jpg"
  },
  "/images/team/team-member-04-370x250.jpg": {
    "type": "image/jpeg",
    "etag": "\"d43-BcRiqSYMCUvltbbuTFmtl3xTrXE\"",
    "mtime": "2020-05-22T10:12:58.000Z",
    "size": 3395,
    "path": "../public/images/team/team-member-04-370x250.jpg"
  },
  "/images/team/team-member-04-370x452.jpg": {
    "type": "image/jpeg",
    "etag": "\"1273-INzAzS2/v7niuUA7f5VGuwst/c4\"",
    "mtime": "2020-05-22T10:12:58.000Z",
    "size": 4723,
    "path": "../public/images/team/team-member-04-370x452.jpg"
  },
  "/images/team/team-member-05-370x452.jpg": {
    "type": "image/jpeg",
    "etag": "\"1273-INzAzS2/v7niuUA7f5VGuwst/c4\"",
    "mtime": "2020-05-22T10:12:58.000Z",
    "size": 4723,
    "path": "../public/images/team/team-member-05-370x452.jpg"
  },
  "/images/team/team-member-06-370x455.jpg": {
    "type": "image/jpeg",
    "etag": "\"13f7-LUo0J94K0PGfrb1CozGxcwvmeP8\"",
    "mtime": "2020-05-22T10:12:58.000Z",
    "size": 5111,
    "path": "../public/images/team/team-member-06-370x455.jpg"
  },
  "/images/team/team-member-07-370x250.jpg": {
    "type": "image/jpeg",
    "etag": "\"d43-BcRiqSYMCUvltbbuTFmtl3xTrXE\"",
    "mtime": "2020-05-22T10:12:58.000Z",
    "size": 3395,
    "path": "../public/images/team/team-member-07-370x250.jpg"
  },
  "/images/team/team-member-07-370x455.jpg": {
    "type": "image/jpeg",
    "etag": "\"13f7-LUo0J94K0PGfrb1CozGxcwvmeP8\"",
    "mtime": "2020-05-22T10:12:58.000Z",
    "size": 5111,
    "path": "../public/images/team/team-member-07-370x455.jpg"
  },
  "/images/testimonial/home-reputable-success-about-image.jpg": {
    "type": "image/jpeg",
    "etag": "\"c460-/wcNZUca7HJPLx4tIO4B1hBo1Uc\"",
    "mtime": "2023-10-23T09:18:46.000Z",
    "size": 50272,
    "path": "../public/images/testimonial/home-reputable-success-about-image.jpg"
  },
  "/images/testimonial/mitech-testimonial-avata-01-90x90.jpg": {
    "type": "image/jpeg",
    "etag": "\"36f-tYe66ly5gIhIK51+FkbVmYL/sEk\"",
    "mtime": "2020-05-22T10:12:58.000Z",
    "size": 879,
    "path": "../public/images/testimonial/mitech-testimonial-avata-01-90x90.jpg"
  },
  "/images/testimonial/mitech-testimonial-avata-02-90x90.jpg": {
    "type": "image/jpeg",
    "etag": "\"36f-tYe66ly5gIhIK51+FkbVmYL/sEk\"",
    "mtime": "2020-05-22T10:12:58.000Z",
    "size": 879,
    "path": "../public/images/testimonial/mitech-testimonial-avata-02-90x90.jpg"
  },
  "/images/testimonial/mitech-testimonial-avata-03-90x90.jpg": {
    "type": "image/jpeg",
    "etag": "\"36f-tYe66ly5gIhIK51+FkbVmYL/sEk\"",
    "mtime": "2020-05-22T10:12:58.000Z",
    "size": 879,
    "path": "../public/images/testimonial/mitech-testimonial-avata-03-90x90.jpg"
  },
  "/images/testimonial/mitech-testimonial-avata-04-90x90.jpg": {
    "type": "image/jpeg",
    "etag": "\"36f-tYe66ly5gIhIK51+FkbVmYL/sEk\"",
    "mtime": "2020-05-22T10:12:58.000Z",
    "size": 879,
    "path": "../public/images/testimonial/mitech-testimonial-avata-04-90x90.jpg"
  },
  "/images/testimonial/testimonial-01-70x70.jpg": {
    "type": "image/jpeg",
    "etag": "\"30d-sSohOVPt/Oq5cx+E4YFw6cp8QTM\"",
    "mtime": "2020-05-22T10:12:58.000Z",
    "size": 781,
    "path": "../public/images/testimonial/testimonial-01-70x70.jpg"
  },
  "/images/testimonial/testimonial-02-70x70.jpg": {
    "type": "image/jpeg",
    "etag": "\"30d-sSohOVPt/Oq5cx+E4YFw6cp8QTM\"",
    "mtime": "2020-05-22T10:12:58.000Z",
    "size": 781,
    "path": "../public/images/testimonial/testimonial-02-70x70.jpg"
  },
  "/images/testimonial/testimonial-03-70x70.jpg": {
    "type": "image/jpeg",
    "etag": "\"30d-sSohOVPt/Oq5cx+E4YFw6cp8QTM\"",
    "mtime": "2020-05-22T10:12:58.000Z",
    "size": 781,
    "path": "../public/images/testimonial/testimonial-03-70x70.jpg"
  },
  "/images/testimonial/testimonial-04-70x70.jpg": {
    "type": "image/jpeg",
    "etag": "\"30d-sSohOVPt/Oq5cx+E4YFw6cp8QTM\"",
    "mtime": "2020-05-22T10:12:58.000Z",
    "size": 781,
    "path": "../public/images/testimonial/testimonial-04-70x70.jpg"
  },
  "/images/timeline/blog-07-500x350.jpg": {
    "type": "image/jpeg",
    "etag": "\"1547-/rKH+Q8o/VKFm6svpM+ZqosiMSo\"",
    "mtime": "2020-05-22T10:12:58.000Z",
    "size": 5447,
    "path": "../public/images/timeline/blog-07-500x350.jpg"
  },
  "/images/timeline/timeline-image-01.jpg": {
    "type": "image/jpeg",
    "etag": "\"1547-/rKH+Q8o/VKFm6svpM+ZqosiMSo\"",
    "mtime": "2020-05-22T10:12:58.000Z",
    "size": 5447,
    "path": "../public/images/timeline/timeline-image-01.jpg"
  },
  "/images/timeline/timeline-image-02.jpg": {
    "type": "image/jpeg",
    "etag": "\"1547-/rKH+Q8o/VKFm6svpM+ZqosiMSo\"",
    "mtime": "2020-05-22T10:12:58.000Z",
    "size": 5447,
    "path": "../public/images/timeline/timeline-image-02.jpg"
  }
};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve(serverDir, assets[id].path))
}

const publicAssetBases = [];

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base of publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = { gzip: ".gz", br: ".br" };
const _f4b49z = eventHandler((event) => {
  if (event.node.req.method && !METHODS.has(event.node.req.method)) {
    return;
  }
  let id = decodeURIComponent(
    withLeadingSlash(
      withoutTrailingSlash(parseURL(event.node.req.url).pathname)
    )
  );
  let asset;
  const encodingHeader = String(
    event.node.req.headers["accept-encoding"] || ""
  );
  const encodings = [
    ...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(),
    ""
  ];
  if (encodings.length > 1) {
    event.node.res.setHeader("Vary", "Accept-Encoding");
  }
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = event.node.req.headers["if-none-match"] === asset.etag;
  if (ifNotMatch) {
    event.node.res.statusCode = 304;
    event.node.res.end();
    return;
  }
  const ifModifiedSinceH = event.node.req.headers["if-modified-since"];
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= new Date(asset.mtime)) {
    event.node.res.statusCode = 304;
    event.node.res.end();
    return;
  }
  if (asset.type && !event.node.res.getHeader("Content-Type")) {
    event.node.res.setHeader("Content-Type", asset.type);
  }
  if (asset.etag && !event.node.res.getHeader("ETag")) {
    event.node.res.setHeader("ETag", asset.etag);
  }
  if (asset.mtime && !event.node.res.getHeader("Last-Modified")) {
    event.node.res.setHeader("Last-Modified", asset.mtime);
  }
  if (asset.encoding && !event.node.res.getHeader("Content-Encoding")) {
    event.node.res.setHeader("Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !event.node.res.getHeader("Content-Length")) {
    event.node.res.setHeader("Content-Length", asset.size);
  }
  return readAsset(id);
});

const _lazy_DaTrGL = () => import('./renderer.mjs');

const handlers = [
  { route: '', handler: _f4b49z, lazy: false, middleware: true, method: undefined },
  { route: '/__nuxt_error', handler: _lazy_DaTrGL, lazy: true, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_DaTrGL, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const h3App = createApp({
    debug: destr(false),
    onError: errorHandler
  });
  const router = createRouter$1();
  h3App.use(createRouteRulesHandler());
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router);
  const localCall = createCall(toNodeListener(h3App));
  const localFetch = createFetch(localCall, globalThis.fetch);
  const $fetch = createFetch$1({
    fetch: localFetch,
    Headers,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch
  };
  for (const plugin of plugins) {
    plugin(app);
  }
  return app;
}
const nitroApp = createNitroApp();
const useNitroApp = () => nitroApp;

const cert = process.env.NITRO_SSL_CERT;
const key = process.env.NITRO_SSL_KEY;
const server = cert && key ? new Server({ key, cert }, toNodeListener(nitroApp.h3App)) : new Server$1(toNodeListener(nitroApp.h3App));
const port = destr(process.env.NITRO_PORT || process.env.PORT) || 3e3;
const host = process.env.NITRO_HOST || process.env.HOST;
const s = server.listen(port, host, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  const protocol = cert && key ? "https" : "http";
  const i = s.address();
  const baseURL = (useRuntimeConfig().app.baseURL || "").replace(/\/$/, "");
  const url = `${protocol}://${i.family === "IPv6" ? `[${i.address}]` : i.address}:${i.port}${baseURL}`;
  console.log(`Listening ${url}`);
});
{
  process.on(
    "unhandledRejection",
    (err) => console.error("[nitro] [dev] [unhandledRejection] " + err)
  );
  process.on(
    "uncaughtException",
    (err) => console.error("[nitro] [dev] [uncaughtException] " + err)
  );
}
const nodeServer = {};

export { getRouteRules as g, nodeServer as n, useNitroApp as u };
//# sourceMappingURL=node-server.mjs.map
