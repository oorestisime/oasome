(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{220:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var n=a(1),r=a.n(n),i=a(0),o=a.n(i),l=a(218),s=a.n(l);a.d(t,"a",function(){return s.a}),a.d(t,"c",function(){return l.push}),a(230);var c=r.a.createContext({}),u=function(e){return r.a.createElement(c.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},230:function(e,t,a){var n;e.exports=(n=a(243))&&n.default||n},235:function(e,t,a){"use strict";a.d(t,"a",function(){return i}),a.d(t,"b",function(){return o}),a.d(t,"c",function(){return l}),a(62);var n=a(262),r=a.n(n),i=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},o=function(e){return r.a.uniqBy(r.a.flatten(e.map(function(e){return e.frontmatter.coordinates.map(function(e){return e})})),function(e){return e.coordinates[0]+" "+e.coordinates[1]})},l=function(e){return Object.assign({},Object.assign({padding:2*e.spacing.unit},e.typography.body1,{"& img":{maxWidth:"100%"},"& p":Object.assign({marginLeft:2*e.spacing.unit},e.typography.body1),"& h1":Object.assign({},e.typography.display1),"& h2":Object.assign({},e.typography.headline),"& h3":Object.assign({},e.typography.subheading),"& h4,h5,h6":Object.assign({},e.typography.caption),"& h1,h2,h3,h4,h5,h6":{fontFamily:"'Indie Flower', cursive"}}))}},237:function(e,t,a){"use strict";var n=a(32),r=a.n(n),i=a(1),o=a.n(i),l=a(0),s=a.n(l),c=a(214),u=a(269),m=a.n(u),p=a(241);t.a=function(e){var t=function(t){function a(e){var a;return(a=t.call(this,e)||this).muiPageContext=null,a.muiPageContext=e.muiPageContext||Object(p.a)(),a}r()(a,t);var n=a.prototype;return n.componentDidMount=function(){var e=document.querySelector("#server-side-jss");e&&e.parentNode&&e.parentNode.removeChild(e)},n.render=function(){return o.a.createElement(c.MuiThemeProvider,{theme:this.muiPageContext.theme,sheetsManager:this.muiPageContext.sheetsManager},o.a.createElement(m.a,null),o.a.createElement(e,this.props))},a}(o.a.Component);return t.propTypes={muiPageContext:s.a.object},t}},239:function(e,t,a){"use strict";var n=a(1),r=a.n(n),i=a(0),o=a.n(i),l=a(214),s=a(227),c=a.n(s),u=a(229),m=a.n(u);function p(e){var t=e.classes,a=e.children,n=e.shade;return r.a.createElement("div",{className:t.root,style:{backgroundColor:m.a[n]}},r.a.createElement("div",{className:t.fullWidth},r.a.createElement(c.a,{container:!0,spacing:24,className:t.spacer},a)))}p.propTypes={classes:o.a.shape().isRequired,children:o.a.node.isRequired,shade:o.a.string},p.defaultProps={shade:"50"},t.a=Object(l.withStyles)(function(e){return{root:{display:"flex",flexFlow:"column",alignItems:"center",minHeight:"100%",height:"100%",padding:e.spacing.unit},fullWidth:{width:"100%",display:"flex",flexFlow:"column",maxWidth:1200,flex:1},spacer:{marginBottom:2*e.spacing.unit,marginTop:e.spacing.unit}}})(p)},240:function(e,t,a){"use strict";var n=a(32),r=a.n(n),i=(a(62),a(1)),o=a.n(i),l=a(0),s=a.n(l),c=a(220),u=a(255),m=a.n(u),p=a(214),d=a(274),h=a.n(d),f=a(217),g=a.n(f),E=a(227),b=a.n(E),y=a(276),v=a.n(y),x=a(257),w=a.n(x),N=a(277),C=a.n(N),O=a(236),R=a.n(O),k=a(278),T=a.n(k),I=a(238),S=a.n(I),j=a(280),q=a.n(j),L=a(279),_=a.n(L),A=a(281),D=a.n(A),M=a(282),P=a.n(M),W=a(284),B=a.n(W),U=a(271),G=a.n(U),H=a(272),F=a.n(H),z=a(229),J=a.n(z),Q=a(231),X=a.n(Q),K=a(246),V=a.n(K),Y=a(273),Z=a.n(Y),$=a(283),ee=a.n($),te=a(247),ae=a(244),ne=Object(p.withStyles)(function(e){return{nested:{paddingLeft:4*e.spacing.unit}}})(function(e){return o.a.createElement(c.b,{query:"1726632599",render:function(t){return t.allMarkdownRemark.distinct.map(function(t){return o.a.createElement(c.a,{key:t,to:"/destination/"+t,style:{textDecoration:"none"}},o.a.createElement(R.a,{button:!0,className:e.nested},o.a.createElement(S.a,{inset:!0,primary:(a=t,a.charAt(0).toUpperCase()+a.slice(1))})));var a})},data:ae})}),re=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={open:!1,expandDestinations:!1},a}r()(t,e);var a=t.prototype;return a.toggleDrawer=function(e){this.setState({open:e})},a.toggleList=function(e){var t,a=this.state[e];this.setState(((t={})[e]=!a,t))},a.render=function(){var e=this,t=this.props,a=t.classes,n=t.title,r=t.children,i=t.width,l=this.state,s=l.open,u=l.expandDestinations;return o.a.createElement("div",{className:a.wrapper},o.a.createElement(m.a,{titleTemplate:"OAsome - %s",defaultTitle:"OAsome Blog"},o.a.createElement("meta",{name:"description",content:"OAsome is a travel blog of couple. We detail out unique experiences and adventures around the world."}),o.a.createElement("html",{lang:"en"}),o.a.createElement("meta",{charSet:"utf-8"}),o.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),o.a.createElement("meta",{httpEquiv:"X-UA-Compatible",content:"IE=edge,chrome=1"}),o.a.createElement("meta",{name:"HandheldFriendly",content:"True"})),o.a.createElement(G.a,{className:a.appBar},o.a.createElement(F.a,{className:a.appBarToolbar,disableGutters:!s},o.a.createElement(V.a,{color:"inherit","aria-label":"Open drawer",onClick:function(){return e.toggleDrawer(!0)},className:g()(a.menuButton,s&&a.hide)},o.a.createElement(Z.a,null)),o.a.createElement(X.a,{style:{padding:"0.5rem",flexGrow:1,fontWeight:400},variant:"headline",color:"inherit",noWrap:!0},n),Object(d.isWidthUp)("sm",i)&&o.a.createElement("div",null,o.a.createElement(V.a,{color:"inherit"},o.a.createElement(te.d,null)),o.a.createElement(V.a,{color:"inherit"},o.a.createElement(te.f,null)),o.a.createElement(V.a,{color:"inherit"},o.a.createElement(te.b,null)),o.a.createElement(V.a,{color:"inherit"},o.a.createElement(te.a,null))))),o.a.createElement(v.a,{anchor:"left",open:s,onOpen:function(){return e.toggleDrawer(!0)},onClose:function(){return e.toggleDrawer(!1)}},o.a.createElement("div",{className:a.toolbarIe11},o.a.createElement("div",{className:a.toolbar},o.a.createElement(X.a,{variant:"title",color:"inherit"},"OAsome"))),o.a.createElement(C.a,null),o.a.createElement(w.a,{component:"nav"},o.a.createElement("div",null,o.a.createElement(c.a,{to:"/",style:{textDecoration:"none"}},o.a.createElement(R.a,{button:!0},o.a.createElement(T.a,null,o.a.createElement(_.a,null)),o.a.createElement(S.a,{primary:"Home"}))),o.a.createElement(c.a,{to:"/archive/",style:{textDecoration:"none"}},o.a.createElement(R.a,{button:!0},o.a.createElement(T.a,null,o.a.createElement(q.a,null)),o.a.createElement(S.a,{primary:"Archive"}))),o.a.createElement(c.a,{to:"/photos/",style:{textDecoration:"none"}},o.a.createElement(R.a,{button:!0},o.a.createElement(T.a,null,o.a.createElement(D.a,null)),o.a.createElement(S.a,{primary:"Photos"}))),o.a.createElement(R.a,{button:!0,onClick:function(){return e.toggleList("expandDestinations")}},o.a.createElement(T.a,null,o.a.createElement(P.a,null)),o.a.createElement(S.a,{primary:"Destinations"})),o.a.createElement(ee.a,{in:u,timeout:"auto",unmountOnExit:!0},o.a.createElement(w.a,{component:"div",disablePadding:!0},o.a.createElement(ne,null))),o.a.createElement(c.a,{to:"/about/",style:{textDecoration:"none"}},o.a.createElement(R.a,{button:!0},o.a.createElement(T.a,null,o.a.createElement(B.a,null)),o.a.createElement(S.a,{primary:"About us"})))))),o.a.createElement("div",{className:a.appBarSpacer},r),o.a.createElement("footer",{className:a.footer},o.a.createElement(b.a,{container:!0},o.a.createElement(b.a,{item:!0,xs:12,className:a.footerIcons},o.a.createElement("ul",{className:a.list},o.a.createElement(te.d,{color:"disabled",className:a.icon}),o.a.createElement(te.f,{color:"disabled",className:a.icon}),o.a.createElement(te.c,{color:"disabled",className:a.icon}),o.a.createElement(te.a,{color:"disabled",className:a.icon}),o.a.createElement(te.b,{color:"disabled",className:a.icon}),o.a.createElement(te.e,{color:"disabled",className:a.icon}))),o.a.createElement(X.a,{className:a.footerLink},"Both the texts and the photos are released under the ",o.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"https://creativecommons.org/licenses/by-nc-sa/4.0/",className:a.footerLink},"Creative Commons License"),". ",o.a.createElement("br",null),"Code of this blog is released under the ",o.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"https://www.gnu.org/licenses/agpl-3.0.en.html",className:a.footerLink},"GNU Affero General Public License 3.0"),", and is available on ",o.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"https://github.com/oorestisime/oasome",className:a.footerLink},"Github")))))},t}(o.a.Component);re.propTypes={classes:s.a.shape().isRequired,children:s.a.node,title:s.a.string,width:s.a.string.isRequired},re.defaultProps={children:null,title:"OAsome blog"},t.a=h()()(Object(p.withStyles)(function(e){return{toolbar:Object.assign({},e.mixins.toolbar,{paddingLeft:6*e.spacing.unit,display:"flex",flexGrow:1,flexDirection:"column",alignItems:"flex-start",justifyContent:"center"}),toolbarIe11:{display:"flex"},wrapper:{height:"100%"},appBar:{flex:"none",flexWrap:"wrap",zIndex:100,flexDirection:"row"},appBarToolbar:{justifyContent:"space-between",display:"flex",flex:1},appBarSpacer:{paddingTop:6*e.spacing.unit},menuButton:{marginLeft:12,marginRight:20},footer:{paddingLeft:12*e.spacing.unit,paddingBottom:2*e.spacing.unit,paddingTop:2*e.spacing.unit,backgroundColor:"#444444"},list:{margin:0,paddingLeft:0,listStyle:"none",display:"inline"},icon:{marginRight:e.spacing.unit/2,color:"#999999","&:hover":{color:J.a[900]}},footerLink:{color:"#999999"},footerIcons:{paddingBottom:4*e.spacing.unit}}})(re))},241:function(e,t,a){"use strict";(function(e,n){a.d(t,"a",function(){return s}),a(108),a(63),a(263);var r=a(248),i=a(214),o=(a(265),a(266),Object(i.createMuiTheme)({typography:{fontWeightRegular:300,fontWeightMedium:400,fontFamily:"'Lato', 'Helvetica', 'Arial'",fontSize:18,display1:{fontWeight:400},title:{fontWeight:300}},MuiWithWidth:{initialWidth:"md"},palette:{primary:{main:"#EEEEEE"}}}));function l(){return{theme:o,sheetsManager:new Map,sheetsRegistry:new r.SheetsRegistry,generateClassName:Object(i.createGenerateClassName)()}}function s(){return e.browser?(n.__INIT_MATERIAL_UI__||(n.__INIT_MATERIAL_UI__=l()),n.__INIT_MATERIAL_UI__):l()}}).call(this,a(254),a(233))},243:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),i=a(0),o=a.n(i),l=a(44),s=a(4),c=function(e){var t=e.location,a=s.a.getResourcesForPathname(t.pathname);return r.a.createElement(l.a,{location:t,pageResources:a})};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=c},244:function(e){e.exports={data:{allMarkdownRemark:{distinct:["Greece","Usa"],edges:[{node:{id:"e1771e8d-a5c9-52ef-b006-e9d17ddd66da",frontmatter:{date:"September 03, 2018",path:"/enjoying-7-nighs-sw-usa",title:"Enjoying 7 nights in the southwestern Usa, the land of canyons.",country:"Usa"}}},{node:{id:"fd1508d2-fe57-5715-9fc1-86c9db62aa7c",frontmatter:{date:"August 07, 2018",path:"/about",title:"About us",country:null}}},{node:{id:"0bd2e2e0-c745-54c5-b7f1-b4091fed6ca8",frontmatter:{date:"August 07, 2018",path:"/america",title:"Amerika we are coming",country:"Usa"}}},{node:{id:"dd409b7c-8bd5-5f84-aae5-6567d8660513",frontmatter:{date:"August 07, 2018",path:"/my-first-post",title:"My first blog post",country:"Greece"}}},{node:{id:"ec4cd7a9-2a10-528c-b989-854d0561933a",frontmatter:{date:"August 06, 2018",path:"/america-2",title:"Amerika we are coming 2",country:"Usa"}}},{node:{id:"30b93f4c-cf46-5050-acdf-69f558e755f9",frontmatter:{date:"August 05, 2018",path:"/paros-naxos",title:"Eperasame omorfa kai tuti ti fora",country:"Greece"}}}]}}}},260:function(e){e.exports={data:{site:{siteMetadata:{siteUrl:"https://oasome.blog"}}}}},261:function(e,t,a){"use strict";var n=a(32),r=a.n(n),i=(a(62),a(1)),o=a.n(i),l=a(0),s=a.n(l),c=a(292),u=a.n(c),m=a(220),p=a(293),d=a.n(p),h=a(214),f=a(251),g=a.n(f),E=a(294),b=a.n(E),y=a(295),v=a.n(y),x=a(316),w=a.n(x),N=a(296),C=a.n(N),O=a(317),R=a.n(O),k=a(246),T=a.n(k),I=a(314),S=a.n(I),j=a(312),q=a.n(j),L=a(311),_=a.n(L),A=a(313),D=a.n(A),M=a(315),P=a.n(M),W=a(318),B=a.n(W),U=a(242),G=a(309),H=a.n(G),F=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.createChip=function(e,t){return o.a.createElement(m.a,{key:t,to:"/tag/"+t+"/"},o.a.createElement(g.a,{className:e.chip,label:t,clickable:!0}))},t.prototype.render=function(){var e=this.props.classes;return o.a.createElement("div",{className:e.chipRow},this.props.tags.map(function(a){return t.createChip(e,a)}))},t}(i.Component);F.propTypes={classes:s.a.shape().isRequired,tags:s.a.arrayOf(s.a.string).isRequired};var z=Object(h.withStyles)(function(e){var t=H.a[50];return{chip:{margin:e.spacing.unit/3,cursor:"pointer","&:hover, &:focus":{backgroundColor:Object(U.emphasize)(t,.08)},"&:active":{boxShadow:e.shadows[1],backgroundColor:Object(U.emphasize)(t,.12)}},stripLink:{textDecoration:"none"},chipRow:{display:"flex",flexWrap:"wrap"}}},{withTheme:!0})(F),J=a(260),Q=a(229),X=a.n(Q),K=a(310),V=a.n(K),Y=a(247),Z=a(3382),$=a(3383),ee=function(e,t){return""+e.siteMetadata.siteUrl+t},te=function(e){return o.a.createElement(m.b,{query:"4031252418",render:function(t){var a=e.classes,n=e.path,r=e.title;return o.a.createElement("div",null,o.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"https://www.instagram.com/__arte__mis__/",style:{textDecoration:"none"}},o.a.createElement(V.a,null,o.a.createElement(Y.d,{className:a.iconHover,color:"disabled"}))),o.a.createElement(V.a,null,o.a.createElement(Z.a,{url:ee(t.site,n),title:r},o.a.createElement(Y.f,{className:a.iconHover,color:"disabled"}))),o.a.createElement(V.a,null,o.a.createElement($.a,{url:ee(t.site,n),subject:r},o.a.createElement(Y.a,{className:a.iconHover,color:"disabled"}))),o.a.createElement(V.a,null,o.a.createElement(Y.b,null)))},data:J})};te.propTypes={classes:s.a.shape().isRequired,title:s.a.string.isRequired,path:s.a.string.isRequired};var ae=Object(h.withStyles)(function(){return{iconHover:{"&:hover":{color:X.a[800]}}}})(te),ne=a(235),re=function(e){function t(t){var a;return a=e.call(this,t)||this,"photo"===t.type&&t.photos?a.state={shareOpen:!1,anchorEl:null,lightbox:!1,photos:t.photos.map(function(e){return Object.assign({srcSet:e.childImageSharp.fluid.srcSet})})}:a.state={shareOpen:!1,anchorEl:null,lightbox:!1},a}r()(t,e),t.createChip=function(e,t){return o.a.createElement(g.a,{className:e.chip,label:t})};var a=t.prototype;return a.handleClick=function(e){this.setState({anchorEl:e.currentTarget,shareOpen:!0})},a.handleClose=function(){this.setState({anchorEl:null,shareOpen:!1})},a.gotoPrevLightboxImage=function(){var e=this.state.photo;this.setState({photo:e-1})},a.gotoNextLightboxImage=function(){var e=this.state.photo;this.setState({photo:e+1})},a.openLightbox=function(e,t){t.preventDefault(),this.setState({lightbox:!0,photo:e})},a.closeLightbox=function(){this.setState({lightbox:!1})},a.render=function(){var e=this,t=this.props,a=t.classes,n=t.title,r=t.date,i=t.cover,l=t.tags,s=t.content,c=t.expand,p=t.path,h=t.photos,f=t.type,g=t.timeToRead,E=t.country,y=this.state,x=y.shareOpen,N=y.anchorEl;return o.a.createElement("div",null,o.a.createElement(b.a,{className:a.spacer},o.a.createElement(v.a,{title:n,classes:{title:a.header},titleTypographyProps:{variant:c?"subheading":"display1"},subheader:o.a.createElement("div",null,o.a.createElement(_.a,{className:a.headerIcon}),""+r,o.a.createElement(q.a,{className:a.headerIcon}),""+Object(ne.a)(E),o.a.createElement(D.a,{className:a.headerIcon}),g+" min read"),action:o.a.createElement("div",null,o.a.createElement(T.a,{"aria-label":"Share","aria-owns":x?"share-menu":null,"aria-haspopup":"true",onClick:function(t){return e.handleClick(t)}},o.a.createElement(S.a,{title:n,path:p})),o.a.createElement(P.a,{id:"share-menu",anchorEl:N,open:x,onClose:function(){return e.handleClose()}},o.a.createElement(ae,{title:n,path:p})))}),o.a.createElement(w.a,{title:n},o.a.createElement(u.a,{fluid:i.childImageSharp.fluid})),o.a.createElement(C.a,null,s,"photo"===f&&h&&o.a.createElement("div",null,h.map(function(t,n){return o.a.createElement("a",{key:t.childImageSharp.fluid.src,href:t.childImageSharp.fluid.src,onClick:function(t){return e.openLightbox(n,t)}},o.a.createElement(u.a,{className:a.spacer,fluid:t.childImageSharp.fluid}))}))),o.a.createElement(R.a,{className:a.actions,disableActionSpacing:!0},o.a.createElement(z,{tags:l}),c&&o.a.createElement(T.a,{className:a.expand,onClick:function(){return Object(m.c)(p)},"aria-label":"Read"},o.a.createElement(B.a,null)))),"photo"===f&&h&&o.a.createElement(d.a,{backdropClosesModal:!0,images:this.state.photos,currentImage:this.state.photo,isOpen:this.state.lightbox,onClickPrev:function(){return e.gotoPrevLightboxImage()},onClickNext:function(){return e.gotoNextLightboxImage()},onClose:function(){return e.closeLightbox()}}))},t}(i.Component);re.propTypes={classes:s.a.shape().isRequired,title:s.a.string.isRequired,tags:s.a.arrayOf(s.a.string).isRequired,date:s.a.string.isRequired,path:s.a.string,content:s.a.node.isRequired,expand:s.a.bool.isRequired,type:s.a.string.isRequired,cover:s.a.shape(),photos:s.a.arrayOf(s.a.object),country:s.a.string.isRequired,timeToRead:s.a.oneOfType([s.a.string,s.a.number]).isRequired},re.defaultProps={photos:[],cover:{},path:null},t.a=Object(h.withStyles)(function(e){return{expand:{transform:"rotate(0deg)",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest}),marginLeft:"auto"},header:Object.assign({},e.typography.title),actions:{display:"flex"},spacer:{margin:e.spacing.unit},headerIcon:{paddingLeft:e.spacing.unit,marginRight:e.spacing.unit,display:"inline-flex",alignSelf:"center",height:"1.25em",width:"1.25em",position:"relative",top:"0.3em"}}},{withTheme:!0})(re)},321:function(e,t,a){"use strict";var n=a(1),r=a.n(n),i=a(0),o=a.n(i),l=a(231),s=a.n(l),c=a(214),u=a(227),m=a.n(u),p=a(261);function d(e){var t=e.classes,a=e.posts;if(a.length>0)return a.map(function(e){return r.a.createElement(m.a,{item:!0,xs:12,sm:6,key:e.node.id,className:t.spacer},r.a.createElement(p.a,{title:e.node.frontmatter.title,date:e.node.frontmatter.date,cover:e.node.frontmatter.cover,tags:e.node.frontmatter.tags,country:e.node.frontmatter.country,timeToRead:e.node.timeToRead,content:r.a.createElement(s.a,{component:"p"},e.node.excerpt),path:e.node.frontmatter.path,expand:!0,type:"list"}))})}d.propTypes={classes:o.a.shape().isRequired,posts:o.a.arrayOf(o.a.shape()).isRequired},t.a=Object(c.withStyles)(function(e){return{media:{height:0,paddingTop:"56.25%"},chip:{margin:e.spacing.unit},title:{textDecoration:"none"},spacer:{paddingTop:2*e.spacing.unit,paddingBottom:2*e.spacing.unit}}})(d)}}]);
//# sourceMappingURL=4-ab49509449da02881791.js.map