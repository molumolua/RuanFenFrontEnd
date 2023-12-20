import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';

const _sfc_main = {
  props: ["teamMember"]
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid-item" }, _attrs))}><div class="ht-team-member"><div class="team-image"><img class="img-fluid"${ssrRenderAttr("src", $props.teamMember.image)} alt="team member"><div class="social-networks"><div class="inner"><a target="_blank"${ssrRenderAttr("href", $props.teamMember.fbUrl)} class="hint--bounce hint--top hint--theme-two" aria-label="Facebook"><i class="fab fa-facebook"></i></a><a target="_blank"${ssrRenderAttr("href", $props.teamMember.twitterUrl)} class="hint--bounce hint--top hint--theme-two" aria-label="Twitter"><i class="fab fa-twitter"></i></a><a target="_blank"${ssrRenderAttr("href", $props.teamMember.instagramUrl)} class="hint--bounce hint--top hint--theme-two" aria-label="Instagram"><i class="fab fa-instagram"></i></a></div></div></div><div class="team-info"><h5 class="name">${ssrInterpolate($props.teamMember.name)}</h5><div class="position">${ssrInterpolate($props.teamMember.designation)}</div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TeamMember.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
const sectionTitle = "Our <span>experience </span> experts";
const sectionSubTitle = "Mitech specializes in technological and IT-related services such as product engineering, warranty management, building cloud, infrastructure, network, etc.";
const leadershipHeading = "We pride ourselves on having a team <br> of <span>highly-skilled</span> experts";
const teamMembers = [
  {
    id: 1,
    image: "/images/team/team-member-01-370x250.jpg",
    name: "Dollie Horton",
    designation: "Marketing",
    fbUrl: "https://www.facebook.com",
    twitterUrl: "https://twitter.com",
    instagramUrl: "https://www.instagram.com"
  },
  {
    id: 2,
    image: "/images/team/team-member-07-370x250.jpg",
    name: "Stephen Mearsley",
    designation: "President & CEO",
    fbUrl: "https://www.facebook.com",
    twitterUrl: "https://twitter.com",
    instagramUrl: "https://www.instagram.com"
  },
  {
    id: 3,
    image: "/images/team/team-member-04-370x250.jpg",
    name: "Maggie Strickland",
    designation: "Financial Services",
    fbUrl: "https://www.facebook.com",
    twitterUrl: "https://twitter.com",
    instagramUrl: "https://www.instagram.com"
  },
  {
    id: 4,
    image: "/images/team/team-member-02-370x250.jpg",
    name: "Monica Blews",
    designation: "Project manager",
    fbUrl: "https://www.facebook.com",
    twitterUrl: "https://twitter.com",
    instagramUrl: "https://www.instagram.com"
  },
  {
    id: 5,
    image: "/images/team/team-member-07-370x455.jpg",
    name: "Dollie Horton",
    designation: "Marketing",
    fbUrl: "https://www.facebook.com",
    twitterUrl: "https://twitter.com",
    instagramUrl: "https://www.instagram.com"
  },
  {
    id: 6,
    image: "/images/team/team-member-01-370x455.jpg",
    name: "Stephen Mearsley",
    designation: "President & CEO",
    fbUrl: "https://www.facebook.com",
    twitterUrl: "https://twitter.com",
    instagramUrl: "https://www.instagram.com"
  },
  {
    id: 7,
    image: "/images/team/team-member-06-370x455.jpg",
    name: "Maggie Strickland",
    designation: "Financial Services",
    fbUrl: "https://www.facebook.com",
    twitterUrl: "https://twitter.com",
    instagramUrl: "https://www.instagram.com"
  },
  {
    id: 8,
    image: "/images/team/team-member-04-370x452.jpg",
    name: "Monica Blews",
    designation: "Project manager",
    fbUrl: "https://www.facebook.com",
    twitterUrl: "https://twitter.com",
    instagramUrl: "https://www.instagram.com"
  },
  {
    id: 9,
    image: "/images/team/team-member-05-370x452.jpg",
    name: "Monica Blews",
    designation: "Project manager",
    fbUrl: "https://www.facebook.com",
    twitterUrl: "https://twitter.com",
    instagramUrl: "https://www.instagram.com"
  },
  {
    id: 10,
    image: "/images/team/team-member-03-370x452.jpg",
    name: "Monica Blews",
    designation: "Project manager",
    fbUrl: "https://www.facebook.com",
    twitterUrl: "https://twitter.com",
    instagramUrl: "https://www.instagram.com"
  },
  {
    id: 11,
    image: "/images/team/team-member-02-370x452.jpg",
    name: "Monica Blews",
    designation: "Project manager",
    fbUrl: "https://www.facebook.com",
    twitterUrl: "https://twitter.com",
    instagramUrl: "https://www.instagram.com"
  }
];
const teamMemberWidget = [
  {
    widgetTitle: "DEVELOPER",
    teamMemberList: [
      {
        title: "Gene Moreno"
      },
      {
        title: "Carrie Greer"
      },
      {
        title: "Brent Newman"
      },
      {
        title: "Craig Stevenson"
      }
    ]
  },
  {
    widgetTitle: "ENGINEER",
    teamMemberList: [
      {
        title: "Albert Webster"
      },
      {
        title: "Harry Castillo"
      },
      {
        title: "Walter Reid"
      },
      {
        title: "Gordon Baldwin"
      }
    ]
  },
  {
    widgetTitle: "STAFF",
    teamMemberList: [
      {
        title: "Gene Moreno"
      },
      {
        title: "Carrie Greer"
      },
      {
        title: "Brent Newman"
      },
      {
        title: "Craig Stevenson"
      }
    ]
  },
  {
    widgetTitle: "DESIGN/MARKETING",
    teamMemberList: [
      {
        title: "Charlotte Shaw"
      },
      {
        title: "Kate Wong"
      },
      {
        title: "Frederick Huff"
      },
      {
        title: "Ora Johnson"
      }
    ]
  }
];
const data = {
  sectionTitle,
  sectionSubTitle,
  leadershipHeading,
  teamMembers,
  teamMemberWidget
};

export { __nuxt_component_0 as _, data as d };
//# sourceMappingURL=team-803a5018.mjs.map
