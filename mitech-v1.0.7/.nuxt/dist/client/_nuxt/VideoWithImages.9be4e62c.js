import{_ as p}from"./entry.0cdb93ce.js";import{a as n,b as h}from"./Footer.c5032859.js";import{H as u}from"./HeaderTop.fc351d8a.js";import{aJ as l,$ as d,a0 as c,a1 as s,n as t,af as f,aa as b,aO as r}from"./_plugin-vue_export-helper.2c3522c3.js";const w={components:{HeaderTop:u,Navigation:n},data(){return{isSticky:!1}},methods:{mobileToggleClass(e,i){const a=document.querySelector("#offcanvas-menu");e==="addClass"?a.classList.add(i):a.classList.remove(i)},toggleClass(e,i){const a=document.querySelector("#search-overlay");e==="addClass"?a.classList.add(i):a.classList.remove(i)}},mounted(){window.addEventListener("scroll",()=>{window.scrollY>=200?this.isSticky=!0:this.isSticky=!1})}},k={class:"header-area"},y=r('<div class="header-top-bar-info bg-gray d-none d-lg-block"><div class="container"><div class="row"><div class="col-md-12"><div class="top-bar-wrap"><div class="top-bar-left"><div class="top-bar-text"><a href="#" class="font-medium display-inline">Now Hiring:</a> Are you a driven and motivated 1st Line IT Support Engineer?</div></div><div class="top-bar-right"><ul class="top-bar-info"><li class="info-item"><a href="tel:01228899900" class="info-link"><i class="info-icon fa fa-phone"></i><span class="info-text"><strong>0122 8899900</strong></span></a></li><li class="info-item"><i class="info-icon fa fa-map-marker-alt"></i><span class="info-text">58 Howard Street #2 San Francisco</span></li></ul></div></div></div></div></div></div>',1),x={class:"container"},C={class:"row"},$={class:"col-lg-12"},L={class:"header position-relative"},S={class:"header__logo"},T=s("img",{src:h,class:"img-fluid",alt:"logo"},null,-1),A={class:"header-right"},j={class:"header__navigation menu-style-three d-none d-xl-block"},I={class:"navigation-menu"},R={class:"header-search-form-two"},U=s("a",{href:"javascript:void(0)"},[s("i",{class:"fa fa-search"})],-1),B=[U],D=s("i",null,null,-1),H=[D];function N(e,i,a,G,_,o){const v=p,m=n;return d(),c("div",k,[y,s("div",{class:b(["header-bottom-wrap bg-white header-sticky",{"is-sticky":_.isSticky}])},[s("div",x,[s("div",C,[s("div",$,[s("div",L,[s("div",S,[t(v,{to:"/"},{default:f(()=>[T]),_:1})]),s("div",A,[s("div",j,[s("nav",I,[t(m)])]),s("div",R,[s("div",{class:"search-icon",id:"search-overlay-trigger",onClick:i[0]||(i[0]=g=>o.toggleClass("addClass","active"))},B)]),s("div",{class:"mobile-navigation-icon d-block d-xl-none",id:"mobile-menu-trigger",onClick:i[1]||(i[1]=g=>o.mobileToggleClass("addClass","active"))},H)])])])])])],2)])}const Z=l(w,[["render",N]]),E=""+globalThis.__publicAssetsURL("images/banners/home-processing-video-intro-slider-slide-01-image-02.jpg"),O=""+globalThis.__publicAssetsURL("images/banners/home-processing-video-intro-slider-slide-01-image-03.jpg"),V=""+globalThis.__publicAssetsURL("images/banners/home-processing-video-intro-slider-slide-01-image-01.jpg"),q=""+globalThis.__publicAssetsURL("images/banners/home-processing-video-intro-slider-slide-01-image-04.jpg"),P=""+globalThis.__publicAssetsURL("images/banners/home-processing-video-intro-slider-slide-01-image-05.jpg"),Y={},z={class:"rv-video-section"},F=r('<div class="ht-banner-01"><img class="img-fluid border-radus-5 animation_images one wow fadeInDown" src="'+E+'" alt="image"></div><div class="ht-banner-02"><img class="img-fluid border-radus-5 animation_images two wow fadeInDown" src="'+O+'" alt="image"></div><div class="main-video-box video-popup"><a href="https://www.youtube.com/watch?v=eS9Qm4AOOBY" target="_blank" class="video-link mt-30"><div class="single-popup-wrap"><img class="img-fluid border-radus-5" src="'+V+'" alt=""><div class="ht-popup-video video-button"><div class="video-mark"><div class="wave-pulse wave-pulse-1"></div><div class="wave-pulse wave-pulse-2"></div></div><div class="video-button__two"><div class="video-play"><span class="video-play-icon"></span></div></div></div></div></a></div><div class="ht-banner-03"><img class="img-fluid border-radus-5 animation_images three wow fadeInDown" src="'+q+'" alt="image"></div><div class="ht-banner-04"><img class="img-fluid border-radus-5 animation_images four wow fadeInDown" src="'+P+'" alt="image"></div>',5),J=[F];function Q(e,i){return d(),c("div",z,J)}const ss=l(Y,[["render",Q]]);export{ss as _,Z as a};
