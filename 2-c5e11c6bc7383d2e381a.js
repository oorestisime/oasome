(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{225:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var n=a(1),r=a.n(n),o=a(0),i=a.n(o),l=a(223),c=a.n(l);a.d(t,"a",function(){return c.a}),a.d(t,"c",function(){return l.push}),a(236);var s=r.a.createContext({}),u=function(e){return r.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},236:function(e,t,a){var n;e.exports=(n=a(245))&&n.default||n},237:function(e,t,a){"use strict";var n=a(32),r=a.n(n),o=a(1),i=a.n(o),l=a(0),c=a.n(l),s=a(218),u=a(272),m=a.n(u),p=a(243);t.a=function(e){var t=function(t){function a(e){var a;return(a=t.call(this,e)||this).muiPageContext=null,a.muiPageContext=e.muiPageContext||Object(p.a)(),a}r()(a,t);var n=a.prototype;return n.componentDidMount=function(){var e=document.querySelector("#server-side-jss");e&&e.parentNode&&e.parentNode.removeChild(e)},n.render=function(){return i.a.createElement(s.MuiThemeProvider,{theme:this.muiPageContext.theme,sheetsManager:this.muiPageContext.sheetsManager},i.a.createElement(m.a,null),i.a.createElement(e,this.props))},a}(i.a.Component);return t.propTypes={muiPageContext:c.a.object},t}},238:function(e,t,a){"use strict";var n=a(32),r=a.n(n),o=(a(62),a(1)),i=a.n(o),l=a(0),c=a.n(l),s=a(225),u=a(263),m=a.n(u),p=a(218),d=a(220),h=a.n(d),f=a(234),g=a.n(f),E=a(277),b=a.n(E),y=a(264),v=a.n(y),x=a(279),w=a.n(x),C=a(239),N=a.n(C),R=a(280),k=a.n(R),I=a(241),O=a.n(I),T=a(282),S=a.n(T),q=a(281),A=a.n(q),L=a(283),_=a.n(L),j=a(284),D=a.n(j),M=a(286),P=a.n(M),B=a(287),U=a.n(B),H=a(274),W=a.n(H),G=a(275),F=a.n(G),z=a(244),J=a.n(z),Q=a(231),X=a.n(Q),Y=a(251),K=a.n(Y),V=a(276),Z=a.n(V),$=a(285),ee=a.n($),te=a(252),ae=a(246),ne=Object(p.withStyles)(function(e){return{nested:{paddingLeft:4*e.spacing.unit}}})(function(e){return i.a.createElement(s.b,{query:"1726632599",render:function(t){return t.allMarkdownRemark.distinct.map(function(t){return i.a.createElement(s.a,{key:t,to:"/destination/"+t,style:{textDecoration:"none"}},i.a.createElement(N.a,{button:!0,className:e.nested},i.a.createElement(O.a,{inset:!0,primary:(a=t,a.charAt(0).toUpperCase()+a.slice(1))})));var a})},data:ae})}),re=a(247),oe=a.n(re),ie=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={open:!1,expandDestinations:!1},a}r()(t,e);var a=t.prototype;return a.toggleDrawer=function(e){this.setState({open:e})},a.toggleList=function(e){var t,a=this.state[e];this.setState(((t={})[e]=!a,t))},a.render=function(){var e=this,t=this.props,a=t.classes,n=t.title,r=t.children,o=this.state,l=o.open,c=o.expandDestinations;return i.a.createElement("div",{className:a.wrapper},i.a.createElement(m.a,{titleTemplate:"OAsome - %s",defaultTitle:"OAsome Blog"},i.a.createElement("meta",{name:"description",content:"OAsome is a travel blog of couple. We detail out unique experiences and adventures around the world."}),i.a.createElement("html",{lang:"en"}),i.a.createElement("meta",{charSet:"utf-8"}),i.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),i.a.createElement("meta",{httpEquiv:"X-UA-Compatible",content:"IE=edge,chrome=1"}),i.a.createElement("meta",{name:"HandheldFriendly",content:"True"}),i.a.createElement("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Montserrat:300,400,500"})),i.a.createElement(W.a,{className:a.appBar},i.a.createElement(F.a,{disableGutters:!l},i.a.createElement(K.a,{color:"inherit","aria-label":"Open drawer",onClick:function(){return e.toggleDrawer(!0)},className:h()(a.menuButton,l&&a.hide)},i.a.createElement(Z.a,null)),i.a.createElement(X.a,{style:{padding:"0.5rem"},variant:"title",color:"inherit",noWrap:!0},n))),i.a.createElement(b.a,{anchor:"left",open:l,onClose:function(){return e.toggleDrawer(!1)}},i.a.createElement("div",{className:a.toolbarIe11},i.a.createElement("div",{className:a.toolbar},i.a.createElement(X.a,{variant:"title",color:"inherit"},"OAsome"))),i.a.createElement(w.a,null),i.a.createElement(v.a,{component:"nav"},i.a.createElement("div",null,i.a.createElement(s.a,{to:"/",style:{textDecoration:"none"}},i.a.createElement(N.a,{button:!0},i.a.createElement(k.a,null,i.a.createElement(A.a,null)),i.a.createElement(O.a,{primary:"Home"}))),i.a.createElement(s.a,{to:"/archive/",style:{textDecoration:"none"}},i.a.createElement(N.a,{button:!0},i.a.createElement(k.a,null,i.a.createElement(S.a,null)),i.a.createElement(O.a,{primary:"Archive"}))),i.a.createElement(s.a,{to:"/photos/",style:{textDecoration:"none"}},i.a.createElement(N.a,{button:!0},i.a.createElement(k.a,null,i.a.createElement(_.a,null)),i.a.createElement(O.a,{primary:"Photos"}))),i.a.createElement(N.a,{button:!0,onClick:function(){return e.toggleList("expandDestinations")}},i.a.createElement(k.a,null,i.a.createElement(D.a,null)),i.a.createElement(O.a,{primary:"Destinations"})),i.a.createElement(ee.a,{in:c,timeout:"auto",unmountOnExit:!0},i.a.createElement(v.a,{component:"div",disablePadding:!0},i.a.createElement(ne,null))),i.a.createElement(s.a,{to:"/about/",style:{textDecoration:"none"}},i.a.createElement(N.a,{button:!0},i.a.createElement(k.a,null,i.a.createElement(P.a,null)),i.a.createElement(O.a,{primary:"About us"}))),i.a.createElement(s.a,{to:"/contact/",style:{textDecoration:"none"}},i.a.createElement(N.a,{button:!0},i.a.createElement(k.a,null,i.a.createElement(U.a,null)),i.a.createElement(O.a,{primary:"Reach us"})))))),i.a.createElement("div",{className:a.content},i.a.createElement("div",{className:a.root},i.a.createElement("div",{className:a.fullWidth},r)),i.a.createElement("footer",{className:a.footer},i.a.createElement(g.a,{container:!0},i.a.createElement(g.a,{item:!0,xs:12,className:a.footerIcons},i.a.createElement("ul",{className:a.list},i.a.createElement(te.c,{color:"disabled",className:a.icon}),i.a.createElement(te.e,{color:"disabled",className:a.icon}),i.a.createElement(te.b,{color:"disabled",className:a.icon}),i.a.createElement(te.a,{color:"disabled",className:a.icon}),i.a.createElement(te.d,{color:"disabled",className:a.icon}),i.a.createElement("img",{className:a.icon,height:"20",src:oe.a,alt:"Creative Common Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0)"}))),i.a.createElement(X.a,null,"Both the texts and the photos are released under the ",i.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"https://creativecommons.org/licenses/by-nc-sa/4.0/",className:a.footerLink},"Creative Commons License"),". ",i.a.createElement("br",null),"Code of this blog is released under the ",i.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"https://www.gnu.org/licenses/agpl-3.0.en.html",className:a.footerLink},"GNU Affero General Public License 3.0"),", and is available on ",i.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"https://github.com/oorestisime/oasome",className:a.footerLink},"Github"))))))},t}(i.a.Component);ie.propTypes={classes:c.a.shape().isRequired,children:c.a.node,title:c.a.string},ie.defaultProps={children:null,title:"OAsome blog"},t.a=Object(p.withStyles)(function(e){return{toolbar:Object.assign({},e.mixins.toolbar,{paddingLeft:6*e.spacing.unit,display:"flex",flexGrow:1,flexDirection:"column",alignItems:"flex-start",justifyContent:"center"}),toolbarIe11:{display:"flex"},root:{display:"flex",flexFlow:"column",alignItems:"center",minHeight:"100%",backgroundColor:J.a[50]},content:{height:"100%",padding:6*e.spacing.unit,paddingBottom:0},wrapper:{height:"100%"},fullWidth:{width:"100%",display:"flex",flexFlow:"column",maxWidth:1200,flex:1},appBar:{flex:"none",flexWrap:"wrap",zIndex:100,flexDirection:"row"},titleToolbar:{justifyContent:"space-between",display:"flex",flex:1},menuButton:{marginLeft:12,marginRight:20},footer:{paddingLeft:3*e.spacing.unit,paddingBottom:2*e.spacing.unit,paddingTop:2*e.spacing.unit},list:{margin:0,paddingLeft:0,listStyle:"none",display:"inline"},icon:{marginRight:e.spacing.unit/2,"&:hover":{color:J.a[900]}},footerLink:{color:"black"},footerIcons:{paddingBottom:2*e.spacing.unit}}})(ie)},243:function(e,t,a){"use strict";(function(e,n){a.d(t,"a",function(){return c}),a(111),a(65),a(268);var r=a(255),o=a(218),i=Object(o.createMuiTheme)({typography:{fontFamily:"'Montserrat', 'Helvetica', 'Arial'"},palette:{primary:{main:"#EEEEEE"}}});function l(){return{theme:i,sheetsManager:new Map,sheetsRegistry:new r.SheetsRegistry,generateClassName:Object(o.createGenerateClassName)()}}function c(){return e.browser?(n.__INIT_MATERIAL_UI__||(n.__INIT_MATERIAL_UI__=l()),n.__INIT_MATERIAL_UI__):l()}}).call(this,a(259),a(235))},245:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(0),i=a.n(o),l=a(45),c=a(4),s=function(e){var t=e.location,a=c.a.getResourcesForPathname(t.pathname);return r.a.createElement(l.a,{location:t,pageResources:a})};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=s},246:function(e){e.exports={data:{allMarkdownRemark:{distinct:["greece","usa"],edges:[{node:{id:"0bd2e2e0-c745-54c5-b7f1-b4091fed6ca8",frontmatter:{date:"August 07, 2018",path:"/america",title:"Amerika we are coming",country:"usa"}}},{node:{id:"dd409b7c-8bd5-5f84-aae5-6567d8660513",frontmatter:{date:"August 07, 2018",path:"/my-first-post",title:"My first blog post",country:"greece"}}},{node:{id:"ec4cd7a9-2a10-528c-b989-854d0561933a",frontmatter:{date:"August 06, 2018",path:"/america-2",title:"Amerika we are coming 2",country:"usa"}}},{node:{id:"30b93f4c-cf46-5050-acdf-69f558e755f9",frontmatter:{date:"August 05, 2018",path:"/paros-naxos",title:"Eperasame omorfa kai tuti ti fora",country:"greece"}}}]}}}},247:function(e,t,a){e.exports=a.p+"static/license-b293fe584c2340b5d3bec8faff5bfb2a.svg"},248:function(e,t,a){"use strict";a.d(t,"a",function(){return o}),a.d(t,"b",function(){return i});var n=a(293),r=a.n(n),o=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},i=function(e){return r.a.uniqBy(r.a.flatten(e.map(function(e){return e.frontmatter.coordinates.map(function(e){return e})})),"name")}},289:function(e){e.exports={data:{site:{siteMetadata:{siteUrl:"https://oasome.blog"}}}}},292:function(e,t,a){"use strict";a(62);var n=a(32),r=a.n(n),o=a(1),i=a.n(o),l=a(0),c=a.n(l),s=a(304),u=a.n(s),m=a(305),p=a.n(m),d=a(218),h=a(266),f=a.n(h),g=a(330),E=a.n(g),b=a(331),y=a.n(b),v=a(337),x=a.n(v),w=a(338),C=a.n(w),N=a(339),R=a.n(N),k=a(251),I=a.n(k),O=a(335),T=a.n(O),S=a(333),q=a.n(S),A=a(332),L=a.n(A),_=a(334),j=a.n(_),D=a(336),M=a.n(D),P=a(341),B=a.n(P),U=a(225),H=a(240),W=a(328),G=a.n(W),F=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.createChip=function(e,t){return i.a.createElement(U.a,{key:t,to:"/tag/"+t+"/"},i.a.createElement(f.a,{className:e.chip,label:t,clickable:!0}))},t.prototype.render=function(){var e=this.props.classes;return i.a.createElement("div",{className:e.chipRow},this.props.tags.map(function(a){return t.createChip(e,a)}))},t}(o.Component);F.propTypes={classes:c.a.shape().isRequired,tags:c.a.arrayOf(c.a.string).isRequired};var z=Object(d.withStyles)(function(e){var t=G.a[50];return{chip:{margin:e.spacing.unit/3,cursor:"pointer","&:hover, &:focus":{backgroundColor:Object(H.emphasize)(t,.08)},"&:active":{boxShadow:e.shadows[1],backgroundColor:Object(H.emphasize)(t,.12)}},stripLink:{textDecoration:"none"},chipRow:{display:"flex",flexWrap:"wrap"}}},{withTheme:!0})(F),J=a(289),Q=a(244),X=a.n(Q),Y=a(329),K=a.n(Y),V=a(252),Z=a(3375),$=a(3376),ee=function(e,t){return""+e.siteMetadata.siteUrl+t},te=function(e){return i.a.createElement(U.b,{query:"4031252418",render:function(t){var a=e.classes,n=e.path,r=e.title;return i.a.createElement("div",null,i.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"https://www.instagram.com/__arte__mis__/",style:{textDecoration:"none"}},i.a.createElement(K.a,null,i.a.createElement(V.c,{className:a.iconHover,color:"disabled"}))),i.a.createElement(K.a,null,i.a.createElement(Z.a,{url:ee(t.site,n),title:r},i.a.createElement(V.e,{className:a.iconHover,color:"disabled"}))),i.a.createElement(K.a,null,i.a.createElement($.a,{url:ee(t.site,n),subject:r},i.a.createElement(V.a,{className:a.iconHover,color:"disabled"}))))},data:J})};te.propTypes={classes:c.a.shape().isRequired,title:c.a.string.isRequired,path:c.a.string.isRequired};var ae=Object(d.withStyles)(function(){return{iconHover:{"&:hover":{color:X.a[800]}}}})(te),ne=a(248),re=function(e){function t(t){var a;return a=e.call(this,t)||this,"photo"===t.type&&t.photos?a.state={shareOpen:!1,anchorEl:null,lightbox:!1,photos:t.photos.map(function(e){return Object.assign({srcSet:e.childImageSharp.fluid.srcSet})})}:a.state={shareOpen:!1,anchorEl:null,lightbox:!1},a}r()(t,e),t.createChip=function(e,t){return i.a.createElement(f.a,{className:e.chip,label:t})};var a=t.prototype;return a.handleClick=function(e){this.setState({anchorEl:e.currentTarget,shareOpen:!0})},a.handleClose=function(){this.setState({anchorEl:null,shareOpen:!1})},a.gotoPrevLightboxImage=function(){var e=this.state.photo;this.setState({photo:e-1})},a.gotoNextLightboxImage=function(){var e=this.state.photo;this.setState({photo:e+1})},a.openLightbox=function(e,t){t.preventDefault(),this.setState({lightbox:!0,photo:e})},a.closeLightbox=function(){this.setState({lightbox:!1})},a.render=function(){var e=this,t=this.props,a=t.classes,n=t.title,r=t.date,o=t.cover,l=t.tags,c=t.content,s=t.expand,m=t.path,d=t.photos,h=t.type,f=t.timeToRead,g=t.country,b=this.state,v=b.shareOpen,w=b.anchorEl;return i.a.createElement("div",null,i.a.createElement(E.a,{className:a.spacer},i.a.createElement(y.a,{title:n,titleTypographyProps:{variant:s?"subheading":"display1"},subheader:i.a.createElement("div",null,i.a.createElement(L.a,{className:a.headerIcon}),""+r,i.a.createElement(q.a,{className:a.headerIcon}),""+Object(ne.a)(g),i.a.createElement(j.a,{className:a.headerIcon}),f+" min read"),action:i.a.createElement("div",null,i.a.createElement(I.a,{"aria-label":"Share","aria-owns":v?"share-menu":null,"aria-haspopup":"true",onClick:function(t){return e.handleClick(t)}},i.a.createElement(T.a,{title:n,path:m})),i.a.createElement(M.a,{id:"share-menu",anchorEl:w,open:v,onClose:function(){return e.handleClose()}},i.a.createElement(ae,{title:n,path:m})))}),i.a.createElement(x.a,{title:n},i.a.createElement(u.a,{fluid:o.childImageSharp.fluid})),i.a.createElement(C.a,null,c,"photo"===h&&d&&i.a.createElement("div",null,d.map(function(t,n){return i.a.createElement("a",{key:n,href:t.childImageSharp.fluid.src,onClick:function(t){return e.openLightbox(n,t)}},i.a.createElement(u.a,{className:a.spacer,fluid:t.childImageSharp.fluid}))}))),i.a.createElement(R.a,{className:a.actions,disableActionSpacing:!0},i.a.createElement(z,{tags:l}),s&&i.a.createElement(I.a,{className:a.expand,href:m,"aria-label":"Read"},i.a.createElement(B.a,null)))),"photo"===h&&d&&i.a.createElement(p.a,{backdropClosesModal:!0,images:this.state.photos,currentImage:this.state.photo,isOpen:this.state.lightbox,onClickPrev:function(){return e.gotoPrevLightboxImage()},onClickNext:function(){return e.gotoNextLightboxImage()},onClose:function(){return e.closeLightbox()}}))},t}(o.Component);re.propTypes={classes:c.a.shape().isRequired,title:c.a.string.isRequired,tags:c.a.arrayOf(c.a.string).isRequired,date:c.a.string.isRequired,path:c.a.string,content:c.a.node.isRequired,expand:c.a.bool.isRequired,type:c.a.string.isRequired,cover:c.a.shape(),photos:c.a.arrayOf(c.a.object),country:c.a.string.isRequired,timeToRead:c.a.oneOfType([c.a.string,c.a.number]).isRequired},re.defaultProps={photos:[],cover:{},path:null},t.a=Object(d.withStyles)(function(e){return{expand:{transform:"rotate(0deg)",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest}),marginLeft:"auto"},actions:{display:"flex"},spacer:{margin:e.spacing.unit},headerIcon:{paddingLeft:e.spacing.unit,marginRight:e.spacing.unit,display:"inline-flex",alignSelf:"center",height:"1.25em",width:"1.25em",position:"relative",top:"0.3em"}}},{withTheme:!0})(re)},344:function(e,t,a){"use strict";var n=a(1),r=a.n(n),o=a(0),i=a.n(o),l=a(231),c=a.n(l),s=a(218),u=a(234),m=a.n(u),p=a(292);function d(e){var t=e.classes,a=e.posts;if(a.length>0)return a.map(function(e){return r.a.createElement(m.a,{item:!0,xs:12,sm:6,key:e.node.id,className:t.spacer},r.a.createElement(p.a,{title:e.node.frontmatter.title,date:e.node.frontmatter.date,cover:e.node.frontmatter.cover,tags:e.node.frontmatter.tags,country:e.node.frontmatter.country,timeToRead:e.node.timeToRead,content:r.a.createElement(c.a,{component:"p"},e.node.excerpt),path:e.node.frontmatter.path,expand:!0,type:"list"}))})}d.propTypes={classes:i.a.shape().isRequired,posts:i.a.arrayOf(i.a.shape()).isRequired},t.a=Object(s.withStyles)(function(e){return{media:{height:0,paddingTop:"56.25%"},chip:{margin:e.spacing.unit},title:{textDecoration:"none"},spacer:{paddingTop:2*e.spacing.unit,paddingBottom:2*e.spacing.unit}}})(d)}}]);
//# sourceMappingURL=2-c5e11c6bc7383d2e381a.js.map