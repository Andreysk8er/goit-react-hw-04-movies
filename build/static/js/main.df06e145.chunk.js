(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[0],{15:function(e,t,a){e.exports={wrapper:"DetailsPage_wrapper__1wWgv",imgWrap:"DetailsPage_imgWrap__20l2c",detailsWrap:"DetailsPage_detailsWrap__12s6O",ulWrapper:"DetailsPage_ulWrapper__8nkTm",liWrap:"DetailsPage_liWrap__oUwVz"}},16:function(e,t,a){e.exports={linkMenu:"NavHead_linkMenu__CgXEc",mainNavigation:"NavHead_mainNavigation__wLKK0",menu:"NavHead_menu__iHDJI",ulMenu:"NavHead_ulMenu__2vQ8S",liMenu:"NavHead_liMenu__1tE72"}},19:function(e,t,a){e.exports={linkMenu:"MovieDetailsPage_linkMenu__1pZyA",mainNavigation:"MovieDetailsPage_mainNavigation__2w0T0",menu:"MovieDetailsPage_menu__1_QL5",ulMenu:"MovieDetailsPage_ulMenu__2D8HH",liMenu:"MovieDetailsPage_liMenu__12NhI"}},28:function(e,t,a){e.exports=a(40)},39:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(14),i=a.n(c),o=a(9),l=a(13),u=a(4),s=a(5),m=a(7),h=a(6),p=a(8),v={HOME:"/",MOVIES:"/movies",MOVIESID:"/movies/:movieId",CAST:"/movies/:movieId/cast",REVIEWS:"/movies/:movieId/reviews"},f={fetchShowDetails:function(e){return fetch("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=831582b809025e0d8161e68d01f9ecca")).then((function(e){return e.json()}))},fetchShowWithQuery:function(e){return fetch("https://api.themoviedb.org/3/search/movie?include_adult=false&page=1&language=en-US&api_key=831582b809025e0d8161e68d01f9ecca&query=".concat(e)).then((function(e){return e.json().then((function(e){return e.results}))}))},fetchShowPopularityMovie:function(){return fetch("https://api.themoviedb.org/3/discover/movie/?api_key=831582b809025e0d8161e68d01f9ecca&sort_by=popularity.desc").then((function(e){return e.json().then((function(e){return e.results}))}))},fetchShowCreditsActor:function(e){return fetch("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=831582b809025e0d8161e68d01f9ecca")).then((function(e){return e.json().then((function(e){return e.cast}))}))},fetchShowReview:function(e){return fetch("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=831582b809025e0d8161e68d01f9ecca&language=en-US&page=1")).then((function(e){return e.json().then((function(e){return e.results}))}))}},E=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={listPopularly:[]},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;f.fetchShowPopularityMovie().then((function(t){e.setState({listPopularly:t})}))}},{key:"render",value:function(){var e=this,t=this.state.listPopularly;return r.a.createElement("div",null,r.a.createElement("h2",null,"Show movie"),r.a.createElement("ul",null,t.map((function(t){return r.a.createElement("li",{key:t.id},r.a.createElement(o.b,{to:{pathname:"".concat(v.MOVIES,"/").concat(t.id),state:{from:e.props.location}}},t.title))}))))}}]),t}(n.Component),d={PHOTO:"https://image.tmdb.org/t/p/w300"},b=a(15),y=a.n(b),O=[y.a.wrapper],_=[y.a.imgWrap],g=[y.a.detailsWrap],w=[y.a.liWrap],S=[y.a.ulWrapper],M=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.movie,t=this.props.match;return r.a.createElement("div",{className:O},r.a.createElement("div",{className:_},r.a.createElement("img",{src:"".concat(d.PHOTO).concat(e.poster_path),alt:e.title})),r.a.createElement("div",{key:t.params.movieId,className:g},r.a.createElement("h3",null,e.title),r.a.createElement("p",null,"User Score: ",e.vote_average),r.a.createElement("h3",null,"Overview"),r.a.createElement("p",null,e.overview),r.a.createElement("h4",null,"Genres"),r.a.createElement("ul",{key:t.params.movieId,className:S},e.genres.map((function(e){return r.a.createElement("li",{key:t.params.movieId,className:w},e.name)})))))}}]),t}(n.Component),j=a(19),k=a.n(j),D=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={cast:null},a.fetchCast=function(){var e=a.props.match.params.movieId;f.fetchShowCreditsActor(e).then((function(e){a.setState({cast:e})}))},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.fetchCast()}},{key:"render",value:function(){var e=this.state.cast;return r.a.createElement(r.a.Fragment,null,e&&r.a.createElement("ul",null,e.map((function(e){return r.a.createElement("li",{key:e.credit_id},e.profile_path&&r.a.createElement("div",null,r.a.createElement("img",{src:"".concat(d.PHOTO).concat(e.profile_path),alt:e.name})),r.a.createElement("p",null,e.name),r.a.createElement("p",null,"Character: ",e.character))}))))}}]),t}(n.Component),N=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={reviews:[]},a.fetchDetails=function(){var e=a.props.match.params.movieId;f.fetchShowReview(e).then((function(e){a.setState({reviews:e})}))},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.fetchDetails()}},{key:"render",value:function(){var e=this.state.reviews;return r.a.createElement("div",null,0===e.length?r.a.createElement("div",null,"Don't have any reviews."):r.a.createElement("div",null,r.a.createElement("ul",null,e.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("h4",null,e.author),r.a.createElement("span",null,e.content))})))))}}]),t}(n.Component),I=[k.a.mainNavigation],P=[k.a.ulMenu],C=[k.a.liMenu],W=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={movie:null},a.fetchDetails=function(){var e=a.props.match.params.movieId;f.fetchShowDetails(e).then((function(e){a.setState({movie:e})}))},a.onBack=function(){var e=a.props.location.state;e&&e.from?a.props.history.push(e.from):a.props.history.push(v.MOVIES)},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.fetchDetails()}},{key:"render",value:function(){var e=this.state.movie,t=this.props.match;return r.a.createElement("div",null,r.a.createElement("h2",null,"movie Details"),r.a.createElement("button",{type:"button",onClick:this.onBack},r.a.createElement("span",null,"Go to back")),e&&r.a.createElement(M,{movie:e,match:t}),r.a.createElement("nav",{className:I},r.a.createElement("h4",null,"Additional information"),r.a.createElement("ul",{className:P},r.a.createElement("li",{className:C},r.a.createElement(o.b,{to:"".concat(t.url,"/cast")},"Cast")),r.a.createElement("li",{className:C},r.a.createElement(o.b,{to:"".concat(t.url,"/reviews")},"Raviews")))),r.a.createElement(l.d,null,r.a.createElement(l.b,{path:v.CAST,component:D}),r.a.createElement(l.b,{path:v.REVIEWS,component:N})))}}]),t}(n.Component),H=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).static={listPopularly:[]},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",null,r.a.createElement(o.a,null,r.a.createElement(l.b,{exact:!0,path:v.HOME,component:E}),r.a.createElement(l.b,{path:v.MOVIESID,component:W}))))}}]),t}(n.Component),A=a(16),T=a.n(A),V=[T.a.mainNavigation],U=[T.a.menu],R=[T.a.liMenu],x=[T.a.linkMenu],Q=function(){return r.a.createElement("header",null,r.a.createElement("nav",{className:V},r.a.createElement("ul",{className:U},r.a.createElement("li",{className:R},r.a.createElement(o.b,{to:v.HOME,className:x},"Home")),r.a.createElement("li",{className:R},r.a.createElement(o.b,{to:v.MOVIES,className:x},"Movies")))))},L=a(27),q=a(18),B=(a(38),function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={value:""},a.onChange=function(e){a.setState({value:e.target.value})},a.onSubmit=function(e){e.preventDefault(),a.props.onSearch(a.state.value),a.setState({value:""})},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("input",{type:"text",value:this.state.value,onChange:this.onChange}),r.a.createElement("button",{type:"submit"},"Search"))}}]),t}(n.Component)),J=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={Movie:[]},a._isMounted=!1,a.setSearchQuery=function(e){""!==e?a.props.history.push(Object(L.a)({},a.props.location,{search:"query=".concat(e)})):q.c.warn("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435",{position:q.c.POSITION.BOTTOM_LEFT})},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=new URLSearchParams(this.props.location.search).get("query");t&&f.fetchShowWithQuery(t).then((function(t){e.setState({Movie:t})}))}},{key:"componentDidUpdate",value:function(e,t){var a=this,n=new URLSearchParams(e.location.search).get("query"),r=new URLSearchParams(this.props.location.search).get("query");n!==r&&f.fetchShowWithQuery(r).then((function(e){a.setState({Movie:e})}))}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"render",value:function(){var e=this,t=this.props.match,a=this.state.Movie;return r.a.createElement("div",null,r.a.createElement("h2",null,"Show movie"),r.a.createElement(B,{onSearch:this.setSearchQuery}),r.a.createElement(q.a,{autoClose:2500,transition:q.b}),r.a.createElement("ul",null,a.map((function(a){return r.a.createElement("li",{key:a.id},r.a.createElement(o.b,{to:{pathname:"".concat(t.url,"/").concat(a.id),state:{from:e.props.location}}},a.title))}))))}}]),t}(n.Component),F=function(){return r.a.createElement(o.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(Q,null),r.a.createElement(l.d,null,r.a.createElement(l.b,{exact:!0,path:v.HOME,component:H}),r.a.createElement(l.b,{path:v.MOVIESID,component:W}),r.a.createElement(l.b,{path:v.MOVIES,component:J}),r.a.createElement(l.a,{to:"/"}))))};a(39);i.a.render(r.a.createElement(F,null),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.df06e145.chunk.js.map