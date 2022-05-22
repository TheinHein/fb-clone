"use strict";(self.webpackChunkmy_fb_clone=self.webpackChunkmy_fb_clone||[]).push([[200],{8200:function(e,n,t){t.r(n),t.d(n,{default:function(){return xe}});var r=t(3767),i=t(7621),a=t(9585),o=t(890),s=t(9439),d=t(1889),u=t(2791),c=t(220),l=t(184);var m=function(e){var n=e.name;return(0,l.jsxs)(r.Z,{spacing:1,bgcolor:"white",p:1,borderRadius:2,children:[(0,l.jsx)(c.Z,{src:"",width:40,height:40}),(0,l.jsx)(o.Z,{children:n})]})},p=t(4942),f=t(3366),h=t(7462),v=t(8182),x=t(8875),Z=t(767),b=t(6934),g=t(1402),y=t(1314),w=t(4999),j=t(3967),R=t(2071),S=t(5159),C=t(208);function E(e){return(0,S.Z)("MuiCollapse",e)}(0,C.Z)("MuiCollapse",["root","horizontal","vertical","entered","hidden","wrapper","wrapperInner"]);var M=["addEndListener","children","className","collapsedSize","component","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","orientation","style","timeout","TransitionComponent"],N=(0,b.ZP)("div",{name:"MuiCollapse",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[n.root,n[t.orientation],"entered"===t.state&&n.entered,"exited"===t.state&&!t.in&&"0px"===t.collapsedSize&&n.hidden]}})((function(e){var n=e.theme,t=e.ownerState;return(0,h.Z)({height:0,overflow:"hidden",transition:n.transitions.create("height")},"horizontal"===t.orientation&&{height:"auto",width:0,transition:n.transitions.create("width")},"entered"===t.state&&(0,h.Z)({height:"auto",overflow:"visible"},"horizontal"===t.orientation&&{width:"auto"}),"exited"===t.state&&!t.in&&"0px"===t.collapsedSize&&{visibility:"hidden"})})),k=(0,b.ZP)("div",{name:"MuiCollapse",slot:"Wrapper",overridesResolver:function(e,n){return n.wrapper}})((function(e){var n=e.ownerState;return(0,h.Z)({display:"flex",width:"100%"},"horizontal"===n.orientation&&{width:"auto",height:"100%"})})),I=(0,b.ZP)("div",{name:"MuiCollapse",slot:"WrapperInner",overridesResolver:function(e,n){return n.wrapperInner}})((function(e){var n=e.ownerState;return(0,h.Z)({width:"100%"},"horizontal"===n.orientation&&{width:"auto",height:"100%"})})),A=u.forwardRef((function(e,n){var t=(0,g.Z)({props:e,name:"MuiCollapse"}),r=t.addEndListener,i=t.children,a=t.className,o=t.collapsedSize,s=void 0===o?"0px":o,d=t.component,c=t.easing,m=t.in,b=t.onEnter,S=t.onEntered,C=t.onEntering,A=t.onExit,P=t.onExited,G=t.onExiting,z=t.orientation,L=void 0===z?"vertical":z,T=t.style,V=t.timeout,W=void 0===V?y.x9.standard:V,H=t.TransitionComponent,D=void 0===H?x.ZP:H,F=(0,f.Z)(t,M),q=(0,h.Z)({},t,{orientation:L,collapsedSize:s}),B=function(e){var n=e.orientation,t=e.classes,r={root:["root","".concat(n)],entered:["entered"],hidden:["hidden"],wrapper:["wrapper","".concat(n)],wrapperInner:["wrapperInner","".concat(n)]};return(0,Z.Z)(r,E,t)}(q),O=(0,j.Z)(),_=u.useRef(),U=u.useRef(null),J=u.useRef(),K="number"===typeof s?"".concat(s,"px"):s,Q="horizontal"===L,X=Q?"width":"height";u.useEffect((function(){return function(){clearTimeout(_.current)}}),[]);var Y=u.useRef(null),$=(0,R.Z)(n,Y),ee=function(e){return function(n){if(e){var t=Y.current;void 0===n?e(t):e(t,n)}}},ne=function(){return U.current?U.current[Q?"clientWidth":"clientHeight"]:0},te=ee((function(e,n){U.current&&Q&&(U.current.style.position="absolute"),e.style[X]=K,b&&b(e,n)})),re=ee((function(e,n){var t=ne();U.current&&Q&&(U.current.style.position="");var r=(0,w.C)({style:T,timeout:W,easing:c},{mode:"enter"}),i=r.duration,a=r.easing;if("auto"===W){var o=O.transitions.getAutoHeightDuration(t);e.style.transitionDuration="".concat(o,"ms"),J.current=o}else e.style.transitionDuration="string"===typeof i?i:"".concat(i,"ms");e.style[X]="".concat(t,"px"),e.style.transitionTimingFunction=a,C&&C(e,n)})),ie=ee((function(e,n){e.style[X]="auto",S&&S(e,n)})),ae=ee((function(e){e.style[X]="".concat(ne(),"px"),A&&A(e)})),oe=ee(P),se=ee((function(e){var n=ne(),t=(0,w.C)({style:T,timeout:W,easing:c},{mode:"exit"}),r=t.duration,i=t.easing;if("auto"===W){var a=O.transitions.getAutoHeightDuration(n);e.style.transitionDuration="".concat(a,"ms"),J.current=a}else e.style.transitionDuration="string"===typeof r?r:"".concat(r,"ms");e.style[X]=K,e.style.transitionTimingFunction=i,G&&G(e)}));return(0,l.jsx)(D,(0,h.Z)({in:m,onEnter:te,onEntered:ie,onEntering:re,onExit:ae,onExited:oe,onExiting:se,addEndListener:function(e){"auto"===W&&(_.current=setTimeout(e,J.current||0)),r&&r(Y.current,e)},nodeRef:Y,timeout:"auto"===W?null:W},F,{children:function(e,n){return(0,l.jsx)(N,(0,h.Z)({as:d,className:(0,v.Z)(B.root,a,{entered:B.entered,exited:!m&&"0px"===K&&B.hidden}[e]),style:(0,h.Z)((0,p.Z)({},Q?"minWidth":"minHeight",K),T),ownerState:(0,h.Z)({},q,{state:e}),ref:$},n,{children:(0,l.jsx)(k,{ownerState:(0,h.Z)({},q,{state:e}),className:B.wrapper,ref:U,children:(0,l.jsx)(I,{ownerState:(0,h.Z)({},q,{state:e}),className:B.wrapperInner,children:i})})}))}}))}));A.muiSupportAuto=!0;var P=A,G=t(6151),z=function(e){var n=e.onClick,t=e.checked;return(0,l.jsx)(G.Z,{fullWidth:!0,variant:"contained",color:"inherit",onClick:n,children:t?"See Less":"See More"})};function L(e){var n=e.children,t=e.collapsedSize,i=(0,u.useState)(!1),a=(0,s.Z)(i,2),o=a[0],d=a[1],c=(0,u.useRef)(null);return(0,l.jsxs)(r.Z,{spacing:1,children:[(0,l.jsx)(P,{in:o,collapsedSize:t,children:n}),(0,l.jsx)(z,{checked:o,onClick:function(){d((function(e){return!e})),c.current.scrollIntoView({behavior:"smooth"})}}),(0,l.jsx)("div",{ref:c})]})}var T=[{id:"menu-btn-01",name:"Friends"},{id:"menu-btn-02",name:"Feeds"},{id:"menu-btn-03",name:"Groups"},{id:"menu-btn-04",name:"Marketplace"},{id:"menu-btn-05",name:"Videos on Watch"},{id:"menu-btn-06",name:"Memories"},{id:"menu-btn-07",name:"Saved"},{id:"menu-btn-08",name:"Pages"},{id:"menu-btn-09",name:"Reels"},{id:"menu-btn-10",name:"News"},{id:"menu-btn-11",name:"Events"},{id:"menu-btn-12",name:"Gaming"},{id:"menu-btn-13",name:"Shop"},{id:"menu-btn-14",name:"Nearby friends"},{id:"menu-btn-15",name:"Avatar"},{id:"menu-btn-16",name:"Facebook Pay"},{id:"menu-btn-17",name:"Fantasy Games"},{id:"menu-btn-18",name:"Live videos"},{id:"menu-btn-19",name:"Weather"}],V=[{summary:{id:"summary-menu-01",name:"Community resources"},details:[{name:"COVID-19 Information Center",id:"details-menu-01"},{name:"Fundraisers",id:"details-menu-02"},{name:"Blood Donations",id:"details-menu-03"},{name:"Community Help",id:"details-menu-04"},{name:"Lift Black Voices",id:"details-menu-11"},{name:"Emotional health",id:"details-menu-12"},{name:"Voting Information Center",id:"details-menu-13"}]},{summary:{id:"summary-menu-02",name:"Help & Support"},details:[{name:"Help Center",id:"details-menu-21"},{name:"Support Inbox",id:"details-menu-22"},{name:"Report a problem",id:"details-menu-23"},{name:"Safety",id:"details-menu-24"},{name:"Terms & Policies",id:"details-menu-25"}]},{summary:{id:"summary-menu-03",name:"Settings & privacy"},details:[{name:"Settings",id:"details-menu-31"},{name:"Device requests",id:"details-menu-32"},{name:"Recent ad activity",id:"details-menu-33"},{name:"Find Wi-Fi",id:"details-menu-34"}]}];var W=function(){var e=(0,u.useState)(),n=(0,s.Z)(e,2),t=n[0],r=n[1],i=(0,u.useRef)(null);return(0,u.useEffect)((function(){r((function(){return 7*i.current.clientHeight-14}))}),[]),(0,l.jsx)(L,{collapsedSize:t,children:(0,l.jsx)(d.ZP,{container:!0,spacing:1,children:T.map((function(e){var n=e.name,t=e.id;return(0,l.jsx)(d.ZP,{item:!0,ref:i,xs:6,children:(0,l.jsx)(m,{name:n})},t)}))})})},H=t(3878),D=t(9199),F=t(181),q=t(5267);t(7441);var B=t(703);var O=u.createContext({}),_=t(8278);function U(e){return(0,S.Z)("MuiAccordion",e)}var J=(0,C.Z)("MuiAccordion",["root","rounded","expanded","disabled","gutters","region"]),K=["children","className","defaultExpanded","disabled","disableGutters","expanded","onChange","square","TransitionComponent","TransitionProps"],Q=(0,b.ZP)(B.Z,{name:"MuiAccordion",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[(0,p.Z)({},"& .".concat(J.region),n.region),n.root,!t.square&&n.rounded,!t.disableGutters&&n.gutters]}})((function(e){var n,t=e.theme,r={duration:t.transitions.duration.shortest};return n={position:"relative",transition:t.transitions.create(["margin"],r),overflowAnchor:"none","&:before":{position:"absolute",left:0,top:-1,right:0,height:1,content:'""',opacity:1,backgroundColor:(t.vars||t).palette.divider,transition:t.transitions.create(["opacity","background-color"],r)},"&:first-of-type":{"&:before":{display:"none"}}},(0,p.Z)(n,"&.".concat(J.expanded),{"&:before":{opacity:0},"&:first-of-type":{marginTop:0},"&:last-of-type":{marginBottom:0},"& + &":{"&:before":{display:"none"}}}),(0,p.Z)(n,"&.".concat(J.disabled),{backgroundColor:(t.vars||t).palette.action.disabledBackground}),n}),(function(e){var n=e.theme,t=e.ownerState;return(0,h.Z)({},!t.square&&{borderRadius:0,"&:first-of-type":{borderTopLeftRadius:(n.vars||n).shape.borderRadius,borderTopRightRadius:(n.vars||n).shape.borderRadius},"&:last-of-type":{borderBottomLeftRadius:(n.vars||n).shape.borderRadius,borderBottomRightRadius:(n.vars||n).shape.borderRadius,"@supports (-ms-ime-align: auto)":{borderBottomLeftRadius:0,borderBottomRightRadius:0}}},!t.disableGutters&&(0,p.Z)({},"&.".concat(J.expanded),{margin:"16px 0"}))})),X=u.forwardRef((function(e,n){var t,r=(0,g.Z)({props:e,name:"MuiAccordion"}),i=r.children,a=r.className,o=r.defaultExpanded,d=void 0!==o&&o,c=r.disabled,m=void 0!==c&&c,p=r.disableGutters,x=void 0!==p&&p,b=r.expanded,y=r.onChange,w=r.square,j=void 0!==w&&w,R=r.TransitionComponent,S=void 0===R?P:R,C=r.TransitionProps,E=(0,f.Z)(r,K),M=(0,_.Z)({controlled:b,default:d,name:"Accordion",state:"expanded"}),N=(0,s.Z)(M,2),k=N[0],I=N[1],A=u.useCallback((function(e){I(!k),y&&y(e,!k)}),[k,y,I]),G=u.Children.toArray(i),z=(t=G,(0,H.Z)(t)||(0,D.Z)(t)||(0,F.Z)(t)||(0,q.Z)()),L=z[0],T=z.slice(1),V=u.useMemo((function(){return{expanded:k,disabled:m,disableGutters:x,toggle:A}}),[k,m,x,A]),W=(0,h.Z)({},r,{square:j,disabled:m,disableGutters:x,expanded:k}),B=function(e){var n=e.classes,t={root:["root",!e.square&&"rounded",e.expanded&&"expanded",e.disabled&&"disabled",!e.disableGutters&&"gutters"],region:["region"]};return(0,Z.Z)(t,U,n)}(W);return(0,l.jsxs)(Q,(0,h.Z)({className:(0,v.Z)(B.root,a),ref:n,ownerState:W,square:j},E,{children:[(0,l.jsx)(O.Provider,{value:V,children:L}),(0,l.jsx)(S,(0,h.Z)({in:k,timeout:"auto"},C,{children:(0,l.jsx)("div",{"aria-labelledby":L.props.id,id:L.props["aria-controls"],role:"region",className:B.region,children:T})}))]}))})),Y=t(7479);function $(e){return(0,S.Z)("MuiAccordionSummary",e)}var ee=(0,C.Z)("MuiAccordionSummary",["root","expanded","focusVisible","disabled","gutters","contentGutters","content","expandIconWrapper"]),ne=["children","className","expandIcon","focusVisibleClassName","onClick"],te=(0,b.ZP)(Y.Z,{name:"MuiAccordionSummary",slot:"Root",overridesResolver:function(e,n){return n.root}})((function(e){var n,t=e.theme,r=e.ownerState,i={duration:t.transitions.duration.shortest};return(0,h.Z)((n={display:"flex",minHeight:48,padding:t.spacing(0,2),transition:t.transitions.create(["min-height","background-color"],i)},(0,p.Z)(n,"&.".concat(ee.focusVisible),{backgroundColor:(t.vars||t).palette.action.focus}),(0,p.Z)(n,"&.".concat(ee.disabled),{opacity:(t.vars||t).palette.action.disabledOpacity}),(0,p.Z)(n,"&:hover:not(.".concat(ee.disabled,")"),{cursor:"pointer"}),n),!r.disableGutters&&(0,p.Z)({},"&.".concat(ee.expanded),{minHeight:64}))})),re=(0,b.ZP)("div",{name:"MuiAccordionSummary",slot:"Content",overridesResolver:function(e,n){return n.content}})((function(e){var n=e.theme,t=e.ownerState;return(0,h.Z)({display:"flex",flexGrow:1,margin:"12px 0"},!t.disableGutters&&(0,p.Z)({transition:n.transitions.create(["margin"],{duration:n.transitions.duration.shortest})},"&.".concat(ee.expanded),{margin:"20px 0"}))})),ie=(0,b.ZP)("div",{name:"MuiAccordionSummary",slot:"ExpandIconWrapper",overridesResolver:function(e,n){return n.expandIconWrapper}})((function(e){var n=e.theme;return(0,p.Z)({display:"flex",color:(n.vars||n).palette.action.active,transform:"rotate(0deg)",transition:n.transitions.create("transform",{duration:n.transitions.duration.shortest})},"&.".concat(ee.expanded),{transform:"rotate(180deg)"})})),ae=u.forwardRef((function(e,n){var t=(0,g.Z)({props:e,name:"MuiAccordionSummary"}),r=t.children,i=t.className,a=t.expandIcon,o=t.focusVisibleClassName,s=t.onClick,d=(0,f.Z)(t,ne),c=u.useContext(O),m=c.disabled,p=void 0!==m&&m,x=c.disableGutters,b=c.expanded,y=c.toggle,w=(0,h.Z)({},t,{expanded:b,disabled:p,disableGutters:x}),j=function(e){var n=e.classes,t=e.expanded,r=e.disabled,i=e.disableGutters,a={root:["root",t&&"expanded",r&&"disabled",!i&&"gutters"],focusVisible:["focusVisible"],content:["content",t&&"expanded",!i&&"contentGutters"],expandIconWrapper:["expandIconWrapper",t&&"expanded"]};return(0,Z.Z)(a,$,n)}(w);return(0,l.jsxs)(te,(0,h.Z)({focusRipple:!1,disableRipple:!0,disabled:p,component:"div","aria-expanded":b,className:(0,v.Z)(j.root,i),focusVisibleClassName:(0,v.Z)(j.focusVisible,o),onClick:function(e){y&&y(e),s&&s(e)},ref:n,ownerState:w},d,{children:[(0,l.jsx)(re,{className:j.content,ownerState:w,children:r}),a&&(0,l.jsx)(ie,{className:j.expandIconWrapper,ownerState:w,children:a})]}))}));function oe(e){return(0,S.Z)("MuiAccordionDetails",e)}(0,C.Z)("MuiAccordionDetails",["root"]);var se=["className"],de=(0,b.ZP)("div",{name:"MuiAccordionDetails",slot:"Root",overridesResolver:function(e,n){return n.root}})((function(e){return{padding:e.theme.spacing(1,2,2)}})),ue=u.forwardRef((function(e,n){var t=(0,g.Z)({props:e,name:"MuiAccordionDetails"}),r=t.className,i=(0,f.Z)(t,se),a=t,o=function(e){var n=e.classes;return(0,Z.Z)({root:["root"]},oe,n)}(a);return(0,l.jsx)(de,(0,h.Z)({className:(0,v.Z)(o.root,r),ref:n,ownerState:a},i))})),ce=t(1131);function le(e){var n=e.summary,t=e.details,i=e.index;return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)(X,{elevation:0,sx:{bgcolor:"#F0F2F5"},TransitionProps:{unmountOnExit:!0},disableGutters:!0,children:[(0,l.jsx)(ae,{expandIcon:(0,l.jsx)(ce.Z,{}),"aria-controls":"panel1a-content",id:"panel1a-header",children:(0,l.jsx)(o.Z,{children:n.name})}),(0,l.jsx)(ue,{children:(0,l.jsx)(d.ZP,{container:!0,spacing:1,children:t.map((function(e){var n=e.id,t=e.name;return(0,l.jsx)(d.ZP,{item:!0,xs:0===i?6:12,children:0===i?(0,l.jsx)(m,{name:t}):(0,l.jsxs)(r.Z,{direction:"row",alignItems:"center",spacing:2,children:[(0,l.jsx)(c.Z,{src:"",width:40,height:40}),(0,l.jsx)(o.Z,{children:t})]})},n)}))})})]})})}var me=t(1224),pe=t(1134),fe=function(){var e=(0,me.H1)();return(0,l.jsx)(G.Z,{fullWidth:!0,variant:"contained",color:"inherit",onClick:function(){e.handleSignOut()},startIcon:(0,l.jsx)(pe.Z,{}),endIcon:"Log Out"})},he=t(6871),ve=t(6088),xe=function(){var e=(0,me.Eu)(),n=(0,he.s0)();return(0,l.jsxs)(r.Z,{p:1,children:[(0,l.jsx)(i.Z,{square:!0,elevation:0,sx:{bgcolor:"transparent"},children:(0,l.jsx)(a.Z,{onClick:function(){return n("/profile")},avatar:(0,l.jsx)(ve.Z,{photoURL:e.user.photoURL,displayName:e.user.displayName}),title:(0,l.jsx)(o.Z,{variant:"h5",children:e.user.displayName}),subheader:(0,l.jsx)(o.Z,{variant:"body2",children:"See your profile"})})}),(0,l.jsx)(W,{}),V.map((function(e,n){var t=e.summary,r=e.details;return(0,l.jsx)(le,{summary:t,details:r,index:n},t.id)})),(0,l.jsx)(fe,{})]})}},1131:function(e,n,t){var r=t(5318);n.Z=void 0;var i=r(t(5649)),a=t(184),o=(0,i.default)((0,a.jsx)("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore");n.Z=o},1134:function(e,n,t){var r=t(5318);n.Z=void 0;var i=r(t(5649)),a=t(184),o=(0,i.default)((0,a.jsx)("path",{d:"m17 8-1.41 1.41L17.17 11H9v2h8.17l-1.58 1.58L17 16l4-4-4-4zM5 5h7V3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h7v-2H5V5z"}),"LogoutOutlined");n.Z=o}}]);
//# sourceMappingURL=200.d8125ddc.chunk.js.map