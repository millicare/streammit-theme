(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-520b2fd3"],{"442b":function(t,s,e){"use strict";e.r(s);var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("Detail",{attrs:{sId:t.$route.params.sId}}),e("Sesson",{attrs:{sId:t.$route.params.sId}})],1)},a=[],l=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",[i("section",{staticClass:"banner-wrapper overlay-wrapper iq-main-slider",style:"background-image:url(https://onyxstreaming.com/"+t.show.file+")"},[i("div",{staticClass:"banner-caption"},[i("div",{staticClass:"position-relative mb-4"},[i("router-link",{staticClass:"d-flex align-items-center",attrs:{to:{name:"landing-page.category-detail",params:{eId:t.lstEId}}}},[i("div",{staticClass:"play-button"},[i("i",{staticClass:"fa fa-play"})]),i("h4",{staticClass:"w-name text-white font-weight-700"},[t._v("Watch latest Episode")])])],1),i("ul",{staticClass:"list-inline p-0 m-0 share-icons music-play-lists"},[i("li",[i("span",{on:{click:t.showComment}},[i("i",{staticClass:"ri-add-line"})])]),i("li",[i("span",{on:{click:t.iLikeit}},[i("i",{staticClass:"ri-heart-fill"})])]),i("li",{staticClass:"share"},[t._m(0),i("div",{staticClass:"share-box"},[i("div",{staticClass:"d-flex align-items-center"},[i("ShareNetwork",{attrs:{network:"facebook",url:"https://news.vuejs.org/issues/180",title:"",description:"",quote:"",hashtags:""}},[i("i",{staticClass:"ri-facebook-fill"})]),i("ShareNetwork",{attrs:{network:"twitter",url:"https://news.vuejs.org/issues/180",title:"",description:"",quote:"",hashtags:""}},[i("i",{staticClass:"ri-twitter-fill"})]),i("ShareNetwork",{attrs:{network:"linkedin",url:"https://news.vuejs.org/issues/180",title:"",description:"",quote:"",hashtags:""}},[i("i",{staticClass:"ri-linkedin-fill"})])],1)])])])])]),i("section",{staticClass:"movie-detail container-fluid"},[i("b-row",[i("b-col",{attrs:{lg:"12"}},[i("div",{staticClass:"trending-info g-border"},[i("h1",{staticClass:"trending-text big-title text-uppercase mt-0"},[t._v(t._s(t.show.title))]),i("ul",{staticClass:"p-0 list-inline d-flex align-items-center movie-content"},[i("li",{staticClass:"text-white"},[t._v(t._s(t.show.category))])]),i("div",{staticClass:"d-flex align-items-center text-white text-detail"},[i("span",{staticClass:"badge badge-secondary p-3"},[t._v("18+")]),i("span",{staticClass:"ml-3"},[t._v(t._s(t.show.seasons)+" Seasons")])]),i("div",{staticClass:"d-flex align-items-center series mb-4"},[i("a",{attrs:{href:"javascript:void();"}},[i("img",{staticClass:"img-fluid",attrs:{src:e("f1fa"),alt:""}})]),i("span",{staticClass:"text-gold ml-3"},[t._v("#2 in Series Today")])]),i("p",{staticClass:"trending-dec w-100 mb-0"},[t._v(t._s(t.show.description))])])])],1)],1)])},n=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("span",[e("i",{staticClass:"ri-share-fill"})])}],o=(e("7db0"),e("5530")),r=e("2f62"),c={name:"Detail",props:["sId"],components:{},mounted:function(){},data:function(){return{lstEId:""}},computed:Object(o["a"])(Object(o["a"])({},Object(r["b"])({showList:"Show/showState",user:"Auth/userState",authStatus:"Auth/authStatusState"})),{},{show:function(){var t,s=function(t){return t.id==this},e=this.showList.find(s,this.sId);return(t=e.episodes.length)>1&&(this.lstEId=e.episodes[t-1].id),e}}),methods:{showComment:function(t){if(t.preventDefault(),this.user&&this.authStatus.loggedIn){var s=this.show.id,e="show";this.$store.dispatch("Comment/fetchComments",{content_type:e,content_id:s}).then((function(){$("#commentModal").modal("show"),$("#commentModal #content-type").val(e),$("#commentModal #content-id").val(s),$("#commentModal #description").val("")}))}},iLikeit:function(t){t.preventDefault(),this.user&&this.authStatus.loggedIn&&this.$store.dispatch("LikeLog/postLike",{id:this.show.id,type:"show",user:this.user.id}).then((function(){console.log("posted show like successfully")}))}}},d=c,p=e("2877"),u=Object(p["a"])(d,l,n,!1,null,null,null),m=u.exports,C=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("section",{staticClass:"container-fluid seasons"},[e("div",{staticClass:"iq-custom-select d-inline-block sea-epi s-margin"},[e("V-select",{attrs:{options:t.sessonOption},model:{value:t.selected,callback:function(s){t.selected=s},expression:"selected"}},[e("option",{attrs:{disabled:"",value:"0"}},[t._v("Select one")])])],1),t._m(0),e("div",{staticClass:"tab-content"},[e("div",{staticClass:"tab-pane fade active show",attrs:{id:"episodes",role:"tabpanel"}},[e("div",{staticClass:"block-space"},[e("b-row",t._l(t.episodeList,(function(s,i){return e("b-col",{key:i,staticClass:"col-1-5 iq-mb-30",attrs:{md:"6"}},[s.season==t.selected?e("div",{staticClass:"epi-box"},[e("div",{staticClass:"epi-img position-relative"},[e("img",{staticClass:"img-fluid img-zoom",attrs:{src:"https://onyxstreaming.com/"+s.file,alt:""}}),e("div",{staticClass:"episode-number"},[t._v(t._s(s.episode))]),e("div",{staticClass:"episode-play-info"},[e("div",{staticClass:"episode-play"},[e("router-link",{attrs:{to:{name:"landing-page.category-detail",params:{eId:s.id}}}},[e("i",{staticClass:"ri-play-fill"})])],1)])]),e("div",{staticClass:"epi-desc p-3"},[e("div",{staticClass:"d-flex align-items-center justify-content-between"},[e("span",{staticClass:"text-white"},[t._v(t._s(s.date))]),e("span",{staticClass:"text-primary"},[t._v(t._s(s.duration))])]),e("router-link",{attrs:{to:{name:"landing-page.category-detail"}}},[e("h6",{staticClass:"epi-name text-white mb-0"},[t._v(t._s(s.name))])])],1)]):t._e()])})),1)],1)]),e("div",{staticClass:"tab-pane fade",attrs:{id:"popularclips",role:"tabpanel"}},[e("div",{staticClass:"block-space"},[e("b-row",t._l(t.episodeList,(function(s,i){return e("b-col",{key:i,staticClass:"col-1-5 iq-mb-30",attrs:{md:"6"}},[s.season==t.selected?e("div",{staticClass:"epi-box"},[e("div",{staticClass:"epi-img position-relative"},[e("img",{staticClass:"img-fluid img-zoom",attrs:{src:"https://onyxstreaming.com/"+s.file,alt:""}}),e("div",{staticClass:"episode-number"},[t._v(t._s(s.episode))]),e("div",{staticClass:"episode-play-info"},[e("div",{staticClass:"episode-play"},[e("router-link",{attrs:{to:{name:"landing-page.category-detail",params:{eId:s.id}}}},[e("i",{staticClass:"ri-play-fill"})])],1)])]),e("div",{staticClass:"epi-desc p-3"},[e("div",{staticClass:"d-flex align-items-center justify-content-between"},[e("span",{staticClass:"text-white"},[t._v(t._s(s.date))]),e("span",{staticClass:"text-primary"},[t._v(t._s(s.duration))])]),e("router-link",{attrs:{to:{name:"landing-page.category-detail"}}},[e("h6",{staticClass:"epi-name text-white mb-0"},[t._v(t._s(s.name))])])],1)]):t._e()])})),1)],1)])])])},h=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ul",{staticClass:"trending-pills d-flex nav nav-pills align-items-center text-center s-margin",attrs:{role:"tablist"}},[e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link active show",attrs:{"data-toggle":"pill",href:"#episodes",role:"tab","aria-selected":"true"}},[t._v("Episodes")])]),e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{"data-toggle":"pill",href:"#popularclips",role:"tab","aria-selected":"false"}},[t._v("Popular Clips")])])])}],v={name:"Sesson",props:["sId"],components:{},mounted:function(){},data:function(){return{selected:1,sessonOption:[{id:1,value:"season1",text:"Season 1"},{id:2,value:"season2",text:"Season 2"},{id:3,value:"season3",text:"Season 3"},{id:4,value:"season4",text:"Season 4"},{id:5,value:"season5",text:"Season 5"}]}},computed:Object(o["a"])(Object(o["a"])({},Object(r["b"])({showList:"Show/showState"})),{},{episodeList:function(){var t=function(t){return t.id==this},s=this.showList.find(t,this.sId);return s.episodes}})},g=v,f=Object(p["a"])(g,C,h,!1,null,null,null),w=f.exports,b={name:"SinglePage",components:{Detail:m,Sesson:w},mounted:function(){}},A=b,k=Object(p["a"])(A,i,a,!1,null,null,null);s["default"]=k.exports},f1fa:function(t,s){t.exports="data:image/png;base64,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"}}]);
//# sourceMappingURL=chunk-520b2fd3.05e5366a.js.map