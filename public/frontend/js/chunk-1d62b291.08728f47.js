(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1d62b291"],{"800a":function(t,e,s){t.exports=s.p+"frontend/img/01.bb4f7428.jpg"},ab3c:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("Detail",{attrs:{eId:t.$route.params.eId}}),s("LatestEpisode",{attrs:{eId:t.$route.params.eId}})],1)},a=[],o=s("bcae"),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"video-container iq-main-slider"},[s("video",{staticClass:"video d-block",attrs:{controls:"",loop:"",constrolslist:"nodownload"}},[s("source",{attrs:{src:"https://onyxstreaming.com/"+t.episode.video_link,type:"video/mp4"}})])]),s("section",{staticClass:"movie-detail container-fluid"},[s("b-row",[s("b-col",{attrs:{lg:"12"}},[s("div",{staticClass:"trending-info season-info g-border"},[s("h4",{staticClass:"trending-text big-title text-uppercase mt-0"},[t._v(t._s(t.title))]),s("div",{staticClass:"d-flex align-items-center text-white text-detail episode-name mb-0"},[s("span",[t._v("S"+t._s(t.episode.season)+"E"+t._s(t.episode.episode))]),s("span",{staticClass:"trending-year"},[t._v(t._s(t.episode.name))])]),s("p",{staticClass:"trending-dec w-100 mb-0"},[t._v(t._s(t.episode.description))]),s("ul",{staticClass:"list-inline p-0 mt-4 share-icons music-play-lists"},[s("li",[s("span",{on:{click:t.showComment}},[s("i",{staticClass:"ri-add-line"})])]),s("li",[s("span",{on:{click:t.iLikeit}},[s("i",{staticClass:"ri-heart-fill"})])]),s("li",{staticClass:"share"},[s("span",[s("i",{staticClass:"ri-share-fill"})]),s("div",{staticClass:"share-box"},[s("div",{staticClass:"d-flex align-items-center"},[s("ShareNetwork",{attrs:{network:"facebook",url:"https://news.vuejs.org/issues/180",title:"",description:"",quote:"",hashtags:""}},[s("i",{staticClass:"ri-facebook-fill"})]),s("ShareNetwork",{attrs:{network:"twitter",url:"https://news.vuejs.org/issues/180",title:"",description:"",quote:"",hashtags:""}},[s("i",{staticClass:"ri-twitter-fill"})]),s("ShareNetwork",{attrs:{network:"linkedin",url:"https://news.vuejs.org/issues/180",title:"",description:"",quote:"",hashtags:""}},[s("i",{staticClass:"ri-linkedin-fill"})])],1)])])])])])],1)],1)])},l=[],d=(s("7db0"),s("5530")),r=s("2f62"),m={name:"Detail",props:["eId"],components:{},mounted:function(){},data:function(){return{title:""}},computed:Object(d["a"])(Object(d["a"])({},Object(r["b"])({showList:"Show/showState",user:"Auth/userState",authStatus:"Auth/authStatusState"})),{},{episode:function(){var t,e=function(t){return t.id==this};for(var s in this.showList){var i=this.showList[s];if(t=i.episodes.find(e,this.eId),t){this.title=i.title;break}}return t}}),methods:{showComment:function(t){if(t.preventDefault(),this.user&&this.authStatus.loggedIn){var e=this.episode.id,s="episode";this.$store.dispatch("Comment/fetchComments",{content_type:s,content_id:e}).then((function(){$("#commentModal").modal("show"),$("#commentModal #content-type").val(s),$("#commentModal #content-id").val(e),$("#commentModal #description").val("")}))}},iLikeit:function(t){t.preventDefault(),this.user&&this.authStatus.loggedIn&&this.$store.dispatch("LikeLog/postLike",{id:this.episode.id,type:"episode",user:this.user.id}).then((function(){console.log("posted episode like successfully")}))}}},c=m,p=s("2877"),u=Object(p["a"])(c,n,l,!1,null,null,null),h=u.exports,f=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{attrs:{id:"iq-favorites"}},[s("b-container",{attrs:{fluid:""}},[s("div",{staticClass:"block-space"},[s("b-row",[s("b-col",{staticClass:"overflow-hidden",attrs:{sm:"12"}},[s("div",{staticClass:"iq-main-header d-flex align-items-center justify-content-between"},[s("h4",{staticClass:"main-title"},[t._v("Latest Episodes")]),s("router-link",{staticClass:"text-primary",attrs:{to:{name:"landing-page.show-single",params:{sId:t.show.id}}}},[t._v("View all")])],1)])],1),s("div",{staticClass:"row"},t._l(t.show.episodes,(function(e,i){return s("b-col",{key:i,staticClass:"col-1-5 iq-mb-30",attrs:{md:"6"}},[s("div",{staticClass:"epi-box"},[s("div",{staticClass:"epi-img position-relative"},[s("img",{staticClass:"img-fluid img-zoom",attrs:{src:"https://onyxstreaming.com/"+e.file,alt:""}}),s("div",{staticClass:"episode-number"},[t._v(t._s(e.episode))]),s("div",{staticClass:"episode-play-info"},[s("div",{staticClass:"episode-play"},[s("router-link",{attrs:{to:{name:"landing-page.category-detail",params:{eId:e.id}}}},[s("i",{staticClass:"ri-play-fill"})])],1)])]),s("div",{staticClass:"epi-desc p-3"},[s("div",{staticClass:"d-flex align-items-center justify-content-between"},[s("span",{staticClass:"text-white"},[t._v(t._s(e.date))]),s("span",{staticClass:"text-primary"},[t._v(t._s(e.duration))])]),s("router-link",{attrs:{to:{name:"landing-page.category-detail"}}},[s("h6",{staticClass:"epi-name text-white mb-0"},[t._v(t._s(e.name))])])],1)])])})),1)],1)])],1)},g=[],v={name:"LatestEpisode",props:["eId"],components:{},mounted:function(){},data:function(){return{latestData:[{image:s("800a"),episode:"1",date:"11 Aug 20",time:"30m",text:"Lorem Ipsum is simply dummy text"},{image:s("800a"),episode:"2",date:"12 Aug 20",time:"35m",text:"Lorem Ipsum is simply dummy text"},{image:s("800a"),episode:"3",date:"14 Aug 20",time:"20m",text:"Lorem Ipsum is simply dummy text"},{image:s("800a"),episode:"4",date:"15 Aug 20",time:"40m",text:"Lorem Ipsum is simply dummy text"},{image:s("800a"),episode:"5",date:"16 Aug 20",time:"25m",text:"Lorem Ipsum is simply dummy text"},{image:s("800a"),episode:"6",date:"20 Aug 20",time:"35m",text:"Lorem Ipsum is simply dummy text"},{image:s("800a"),episode:"7",date:"21 Aug 20",time:"40m",text:"Lorem Ipsum is simply dummy text"},{image:s("800a"),episode:"8",date:"23 Aug 20",time:"45m",text:"Lorem Ipsum is simply dummy text"},{image:s("800a"),episode:"9",date:"24 Aug 20",time:"25m",text:"Lorem Ipsum is simply dummy text"},{image:s("800a"),episode:"10",date:"25 Aug 20",time:"30m",text:"Lorem Ipsum is simply dummy text"}]}},computed:Object(d["a"])(Object(d["a"])({},Object(r["b"])({showList:"Show/showState"})),{},{show:function(){var t=function(t){return t.id==this};for(var e in this.showList){var s=this.showList[e],i=s.episodes.find(t,this.eId);if(i)break}return s}})},w=v,b=Object(p["a"])(w,f,g,!1,null,null,null),C=b.exports,x={name:"ShowDetail",components:{Detail:h,LatestEpisode:C},mounted:function(){o["c"].index()}},y=x,k=Object(p["a"])(y,i,a,!1,null,null,null);e["default"]=k.exports}}]);
//# sourceMappingURL=chunk-1d62b291.08728f47.js.map