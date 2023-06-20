"use strict";(self.webpackChunkfacit=self.webpackChunkfacit||[]).push([[8978],{57e3:function(o,s,i){i(72791);var e=i(66867),l=i(50022),n=i(73549),c=i(80184),r=(0,e.QM)({prism:{padding:"0 !important",margin:"0 !important",background:"transparent !important",borderRadius:"0 !important","& > code":{color:"#2e3f96 !important",fontSize:"0.875rem !important"}}}),a=function(o){var s=o.children,i=o.isPrism,e=r();return(0,c.jsx)(l.ZP,{color:"info",isLight:!0,shadow:"md",borderWidth:0,icon:"CustomReact",className:"flex-nowrap w-100",children:i?(0,c.jsx)(n.Z,{code:s,language:"jsx",className:e.prism}):(0,c.jsx)("code",{children:s})})};a.defaultProps={isPrism:!1},s.Z=a},31024:function(o,s,i){var e=i(1413),l=i(45987),n=(i(72791),i(11592)),c=i(80184),r=["to"];s.Z=function(o){var s=o.to,i=(0,l.Z)(o,r);return(0,c.jsx)(n.Z,(0,e.Z)((0,e.Z)({color:"storybook",icon:"CustomStorybook",tag:"a",target:"_blank",isLight:!0,href:"".concat("https://facit-story.omtanke.studio/?path=").concat(s)},i),{},{children:"Storybook"}))}},45328:function(o,s,i){var e=i(1413),l=i(45987),n=(i(72791),i(80184)),c=["to","children"];s.Z=function(o){var s=o.to,i=o.children,r=(0,l.Z)(o,c);return(0,n.jsx)("a",(0,e.Z)((0,e.Z)({href:"".concat("https://facit-story.omtanke.studio/?path=").concat(s),target:"_blank",rel:"noreferrer"},r),{},{children:i}))}},5081:function(o,s,i){i.d(s,{g:function(){return t}});var e=i(72791),l=i(81694),n=i.n(l),c=i(11087),r=i(16843),a=i(63542),d=i(80184),t=function(o){var s=o.children,i=o.ariaLabel,l=o.className,a=o.tag,t=o.to,h=o.isActive,x=o.divider;return(0,d.jsxs)(r.Z,{tag:a,className:n()("breadcrumb-item",{active:h},l),"aria-current":h?"page":null,"aria-label":i||s,children:[x&&"string"!==typeof x&&(0,e.cloneElement)(x,{className:n()("breadcrumb-icon",x.props.className)}),h?s:(0,d.jsx)(c.OL,{to:t,"aria-label":i,children:s})]})};t.defaultProps={className:void 0,ariaLabel:void 0,tag:"li",isActive:!1,divider:void 0};var h=function(o){var s=o.children,i=o.list,l=o.tag,n=o.listTag,c=o.itemTag,a=o.ariaLabel,h=o.autoActive,x=o.isToHome,j=o.divider,u="string"!==j&&j;return(0,d.jsx)(r.Z,{tag:l,"aria-label":a,style:j?{"--bs-breadcrumb-divider":"string"===typeof j?"'".concat(j,"'"):"none"}:null,children:(0,d.jsxs)(r.Z,{tag:n,className:"breadcrumb",children:[x&&(0,d.jsx)(t,{to:"/",ariaLabel:"Home",children:x}),i?i.map((function(o,s){return(0,d.jsx)(t,{tag:o.tag||c,to:o.to,isActive:h&&i.length===s+1,divider:u,children:o.title},o.title)})):e.Children.map(s,(function(o,i){return(0,e.cloneElement)(o,{tag:o.props.tag||c,isActive:h&&s.length===i+1,divider:o.props.divider||u})}))]})})};h.defaultProps={children:void 0,tag:"nav",listTag:"ol",itemTag:"li",ariaLabel:"breadcrumb",list:void 0,autoActive:!0,isToHome:(0,d.jsx)(a.Z,{icon:"HolidayVillage"}),divider:(0,d.jsx)(a.Z,{icon:"ChevronRight"})},s.Z=h},38978:function(o,s,i){i.r(s);i(72791);var e=i(11087),l=i(38493),n=i(15224),c=i(96517),r=i(11592),a=i(47930),d=i(5081),t=i(57e3),h=i(31024),x=i(29944),j=i(45328),u=i(7134),m=i(80184);s.default=function(){return(0,m.jsxs)(l.Z,{title:u.XZ.components.subMenu.button.text,children:[(0,m.jsxs)(n.ZP,{children:[(0,m.jsx)(n.Vv,{children:(0,m.jsx)(d.Z,{list:[{title:u.XZ.components.text,to:"/".concat(u.XZ.components.path)},{title:u.XZ.components.subMenu.button.text,to:"/".concat(u.XZ.components.subMenu.button.path)}]})}),(0,m.jsx)(n.$o,{children:(0,m.jsx)(h.Z,{to:"/docs/components-button--default"})})]}),(0,m.jsx)(a.Z,{children:(0,m.jsxs)("div",{className:"row",children:[(0,m.jsx)("div",{className:"col-12",children:(0,m.jsxs)(c.ZP,{children:[(0,m.jsx)(c.Ol,{children:(0,m.jsx)(c.oL,{icon:"Assignment",children:(0,m.jsx)(c.ll,{children:"General Usage"})})}),(0,m.jsx)(c.eW,{children:(0,m.jsx)(c.TY,{children:"\n<Button\n\tclassName={ String }\n\tcolor={ String } // 'primary' || 'secondary' || 'success' || 'info' || 'warning' || 'danger' || 'light' || 'dark' || 'link'\n\tisOutline={ Boolean }\n\tisLink={ Boolean }\n\tisLight={ Boolean }\n\tisActive={ Boolean }\n\tisDisable={ Boolean }\n\tsize={ String } // 'sm' || 'lg'\n\trounded={ String || Number } // 'default' || 0 || 1 || 2 || 3 || 'bottom' || 'top' || 'circle' || 'end' || 'start' || 'pill'\n\tshadow={ String } // 'none' || 'sm' || 'default' || 'lg'\n\thoverShadow={ String } // 'none' || 'sm' || 'default' || 'lg'\n\ttag={ String } // 'button' || 'a' || 'input' || 'link'\n\ttype={ String } // 'button' || 'submit' || 'reset'\n\tto={ String }\n\thref={ String }\n\ttarget={ String } // '_blank' || '_self' || '_parent' || '_top'\n\t{...props}>\n\t...\n</Button>"})})]})}),(0,m.jsx)("div",{className:"col-lg-6",children:(0,m.jsxs)(c.ZP,{stretch:!0,children:[(0,m.jsxs)(c.Ol,{children:[(0,m.jsxs)(c.oL,{icon:"Palette",iconColor:"info",children:[(0,m.jsxs)(c.ll,{children:["color ",(0,m.jsx)("small",{children:"High Emphasis"})]}),(0,m.jsx)(c.md,{children:"Button"})]}),(0,m.jsx)(c.T$,{children:(0,m.jsx)(h.Z,{to:"/story/components-button-props-color--primary"})})]}),(0,m.jsx)(c.Ol,{children:(0,m.jsx)(t.Z,{children:"color: PropTypes.oneOf([ null, 'primary', 'secondary', 'success', 'info', 'warning', 'danger', 'light', 'dark', 'link', ]),"})}),(0,m.jsx)(c.eW,{children:(0,m.jsxs)("div",{className:"row g-3",children:[(0,m.jsx)("div",{className:"col-auto",children:(0,m.jsx)(r.Z,{children:"Default"})}),(0,m.jsx)("div",{className:"col-auto",children:(0,m.jsx)(r.Z,{color:"primary",children:"Primary"})}),(0,m.jsx)("div",{className:"col-auto",children:(0,m.jsx)(r.Z,{color:"secondary",children:"Secondary"})}),(0,m.jsx)("div",{className:"col-auto",children:(0,m.jsx)(r.Z,{color:"success",children:"Success"})}),(0,m.jsx)("div",{className:"col-auto",children:(0,m.jsx)(r.Z,{color:"info",children:"Info"})}),(0,m.jsx)("div",{className:"col-auto",children:(0,m.jsx)(r.Z,{color:"warning",children:"Warning"})}),(0,m.jsx)("div",{className:"col-auto",children:(0,m.jsx)(r.Z,{color:"danger",children:"Danger"})}),(0,m.jsx)("div",{className:"col-auto",children:(0,m.jsx)(r.Z,{color:"light",children:"Light"})}),(0,m.jsx)("div",{className:"col-auto",children:(0,m.jsx)(r.Z,{color:"dark",children:"Dark"})}),(0,m.jsx)("div",{className:"col-auto",children:(0,m.jsx)(r.Z,{color:"link",children:"Link"})})]})})]})}),(0,m.jsx)("div",{className:"col-lg-6",children:(0,m.jsxs)(c.ZP,{stretch:!0,children:[(0,m.jsxs)(c.Ol,{children:[(0,m.jsxs)(c.oL,{icon:"BorderStyle",children:[(0,m.jsxs)(c.ll,{children:["isOutline ",(0,m.jsx)("small",{children:"Medium Emphasis"})]}),(0,m.jsx)(c.md,{children:"Button"})]}),(0,m.jsx)(c.T$,{children:(0,m.jsx)(h.Z,{to:"/story/components-button-props-isoutline--primary"})})]}),(0,m.jsx)(c.Ol,{children:(0,m.jsx)(t.Z,{children:"isOutline: PropTypes.bool,"})}),(0,m.jsx)(c.eW,{children:(0,m.jsxs)("div",{className:"row g-3",children:[(0,m.jsx)("div",{className:"col-auto",children:(0,m.jsx)(r.Z,{color:"primary",isOutline:!0,children:"Primary"})}),(0,m.jsx)("div",{className:"col-auto",children:(0,m.jsx)(r.Z,{color:"secondary",isOutline:!0,children:"Secondary"})}),(0,m.jsx)("div",{className:"col-auto",children:(0,m.jsx)(r.Z,{color:"success",isOutline:!0,children:"Success"})}),(0,m.jsx)("div",{className:"col-auto",children:(0,m.jsx)(r.Z,{color:"info",isOutline:!0,children:"Info"})}),(0,m.jsx)("div",{className:"col-auto",children:(0,m.jsx)(r.Z,{color:"warning",isOutline:!0,children:"Warning"})}),(0,m.jsx)("div",{className:"col-auto",children:(0,m.jsx)(r.Z,{color:"danger",isOutline:!0,children:"Danger"})}),(0,m.jsx)("div",{className:"col-auto",children:(0,m.jsx)(r.Z,{color:"light",isOutline:!0,children:"Light"})}),(0,m.jsx)("div",{className:"col-auto",children:(0,m.jsx)(r.Z,{color:"dark",isOutline:!0,children:"Dark"})})]})})]})}),(0,m.jsx)("div",{className:"col-lg-6",children:(0,m.jsxs)(c.ZP,{stretch:!0,children:[(0,m.jsxs)(c.Ol,{children:[(0,m.jsxs)(c.oL,{icon:"InsertLink",iconColor:"info",children:[(0,m.jsxs)(c.ll,{children:["isLink ",(0,m.jsx)("small",{children:"Low Emphasis"})]}),(0,m.jsx)(c.md,{children:"Button"})]}),(0,m.jsx)(c.T$,{children:(0,m.jsx)(h.Z,{to:"/story/components-button-props-islink--primary"})})]}),(0,m.jsx)(c.Ol,{children:(0,m.jsx)(t.Z,{children:"isLink: PropTypes.bool,"})}),(0,m.jsx)(c.eW,{children:(0,m.jsxs)("div",{className:"row g-3",children:[(0,m.jsx)("div",{className:"col-auto",children:(0,m.jsx)(r.Z,{color:"primary",isLink:!0,children:"Primary"})}),(0,m.jsx)("div",{className:"col-auto",children:(0,m.jsx)(r.Z,{color:"secondary",isLink:!0,children:"Secondary"})}),(0,m.jsx)("div",{className:"col-auto",children:(0,m.jsx)(r.Z,{color:"success",isLink:!0,children:"Success"})}),(0,m.jsx)("div",{className:"col-auto",children:(0,m.jsx)(r.Z,{color:"info",isLink:!0,children:"Info"})}),(0,m.jsx)("div",{className:"col-auto",children:(0,m.jsx)(r.Z,{color:"warning",isLink:!0,children:"Warning"})}),(0,m.jsx)("div",{className:"col-auto",children:(0,m.jsx)(r.Z,{color:"danger",isLink:!0,children:"Danger"})}),(0,m.jsx)("div",{className:"col-auto",children:(0,m.jsx)(r.Z,{color:"light",isLink:!0,children:"Light"})}),(0,m.jsx)("div",{className:"col-auto",children:(0,m.jsx)(r.Z,{color:"dark",isLink:!0,children:"Dark"})})]})})]})}),(0,m.jsx)("div",{className:"col-lg-6",children:(0,m.jsxs)(c.ZP,{stretch:!0,children:[(0,m.jsxs)(c.Ol,{children:[(0,m.jsxs)(c.oL,{icon:"Lightbulb",iconColor:"warning",children:[(0,m.jsx)(c.ll,{children:"isLight"}),(0,m.jsx)(c.md,{children:"Button"})]}),(0,m.jsx)(c.T$,{children:(0,m.jsx)(h.Z,{to:"/story/components-button-props-islight--primary"})})]}),(0,m.jsx)(c.Ol,{children:(0,m.jsx)(t.Z,{children:"isLight: PropTypes.bool,"})}),(0,m.jsx)(c.eW,{children:(0,m.jsxs)("div",{className:"row g-3",children:[(0,m.jsx)("div",{className:"col-auto",children:(0,m.jsx)(r.Z,{color:"primary",isLight:!0,children:"Primary"})}),(0,m.jsx)("div",{className:"col-auto",children:(0,m.jsx)(r.Z,{color:"secondary",isLight:!0,children:"Secondary"})}),(0,m.jsx)("div",{className:"col-auto",children:(0,m.jsx)(r.Z,{color:"success",isLight:!0,children:"Success"})}),(0,m.jsx)("div",{className:"col-auto",children:(0,m.jsx)(r.Z,{color:"info",isLight:!0,children:"Info"})}),(0,m.jsx)("div",{className:"col-auto",children:(0,m.jsx)(r.Z,{color:"warning",isLight:!0,children:"Warning"})}),(0,m.jsx)("div",{className:"col-auto",children:(0,m.jsx)(r.Z,{color:"danger",isLight:!0,children:"Danger"})}),(0,m.jsx)("div",{className:"col-auto",children:(0,m.jsx)(r.Z,{color:"light",isLight:!0,children:"Light"})}),(0,m.jsx)("div",{className:"col-auto",children:(0,m.jsx)(r.Z,{color:"dark",isLight:!0,children:"Dark"})})]})})]})}),(0,m.jsx)("div",{className:"col-lg-6",children:(0,m.jsxs)(c.ZP,{stretch:!0,children:[(0,m.jsxs)(c.Ol,{children:[(0,m.jsxs)(c.oL,{icon:"RoundedCorner",iconColor:"success",children:[(0,m.jsx)(c.ll,{children:"rounded"}),(0,m.jsx)(c.md,{children:"Button"})]}),(0,m.jsx)(c.T$,{children:(0,m.jsx)(r.h,{children:(0,m.jsxs)(x.ZP,{children:[(0,m.jsx)(x.Z_,{children:(0,m.jsx)(r.Z,{color:"storybook",icon:"CustomStorybook",isLight:!0,children:"Storybook"})}),(0,m.jsx)(x.h_,{isAlignmentEnd:!0,children:[{text:"Default",path:"/docs/components-button-props-rounded--default"},{text:"Rounded 0",path:"/docs/components-button-props-rounded--zero"},{text:"Rounded 1",path:"/docs/components-button-props-rounded--one"},{text:"Rounded 2",path:"/docs/components-button-props-rounded--two"},{text:"Rounded 3",path:"/docs/components-button-props-rounded--three"},{text:"Bottom",path:"/docs/components-button-props-rounded--bottom"},{text:"Top",path:"/docs/components-button-props-rounded--top"},{text:"End",path:"/docs/components-button-props-rounded--end"},{text:"Start",path:"/docs/components-button-props-rounded--start"},{text:"Circle",path:"/docs/components-button-props-rounded--circle"},{text:"Pill",path:"/docs/components-button-props-rounded--pill"}].map((function(o){return(0,m.jsx)(x.hP,{children:(0,m.jsx)(j.Z,{to:o.path,children:o.text})},o.text)}))})]})})})]}),(0,m.jsx)(c.Ol,{children:(0,m.jsx)(t.Z,{children:"rounded: PropTypes.oneOf([ 'default', 0, 1, 2, 3, 'bottom', 'top', 'circle', 'end', 'start', 'pill', ]),"})}),(0,m.jsx)(c.eW,{children:(0,m.jsxs)("div",{className:"row g-3",children:[(0,m.jsx)("div",{className:"col-auto",children:(0,m.jsx)(r.Z,{color:"primary",isLight:!0,rounded:"default",children:"Default"})}),(0,m.jsx)("div",{className:"col-auto",children:(0,m.jsx)(r.Z,{color:"primary",isLight:!0,rounded:0,children:"Rounded 0"})}),(0,m.jsx)("div",{className:"col-auto",children:(0,m.jsx)(r.Z,{color:"primary",isLight:!0,rounded:1,children:"Rounded 1"})}),(0,m.jsx)("div",{className:"col-auto",children:(0,m.jsx)(r.Z,{color:"primary",isLight:!0,rounded:2,children:"Rounded 2"})}),(0,m.jsx)("div",{className:"col-auto",children:(0,m.jsx)(r.Z,{color:"primary",isLight:!0,rounded:3,children:"Rounded 3"})}),(0,m.jsx)("div",{className:"col-auto",children:(0,m.jsx)(r.Z,{color:"primary",isLight:!0,rounded:"bottom",children:"Bottom"})}),(0,m.jsx)("div",{className:"col-auto",children:(0,m.jsx)(r.Z,{color:"primary",isLight:!0,rounded:"top",children:"Top"})}),(0,m.jsx)("div",{className:"col-auto",children:(0,m.jsx)(r.Z,{color:"primary",isLight:!0,rounded:"circle",children:"Circle"})}),(0,m.jsx)("div",{className:"col-auto",children:(0,m.jsx)(r.Z,{color:"primary",isLight:!0,rounded:"end",children:"End"})}),(0,m.jsx)("div",{className:"col-auto",children:(0,m.jsx)(r.Z,{color:"primary",isLight:!0,rounded:"start",children:"Start"})}),(0,m.jsx)("div",{className:"col-auto",children:(0,m.jsx)(r.Z,{color:"primary",isLight:!0,rounded:"pill",children:"Pill"})})]})})]})}),(0,m.jsx)("div",{className:"col-lg-6",children:(0,m.jsxs)(c.ZP,{stretch:!0,children:[(0,m.jsxs)(c.Ol,{children:[(0,m.jsxs)(c.oL,{icon:"Straighten",children:[(0,m.jsx)(c.ll,{children:"size"}),(0,m.jsx)(c.md,{children:"Button"})]}),(0,m.jsx)(c.T$,{children:(0,m.jsx)(r.h,{children:(0,m.jsxs)(x.ZP,{children:[(0,m.jsx)(x.Z_,{children:(0,m.jsx)(r.Z,{color:"storybook",icon:"CustomStorybook",isLight:!0,children:"Storybook"})}),(0,m.jsx)(x.h_,{isAlignmentEnd:!0,children:[{text:"Default",path:"/docs/components-button-props-size--default"},{text:"Small",path:"/docs/components-button-props-size--small"},{text:"Large",path:"/docs/components-button-props-size--large"}].map((function(o){return(0,m.jsx)(x.hP,{children:(0,m.jsx)(j.Z,{to:o.path,children:o.text})},o.text)}))})]})})})]}),(0,m.jsx)(c.Ol,{children:(0,m.jsx)(t.Z,{children:"size: PropTypes.oneOf(['sm', null, 'lg']),"})}),(0,m.jsx)(c.eW,{children:(0,m.jsxs)("div",{className:"row g-4",children:[(0,m.jsx)("div",{className:"col-auto",children:(0,m.jsxs)("div",{className:"row g-3 align-items-center",children:[(0,m.jsx)("div",{className:"col-auto",children:(0,m.jsx)(r.Z,{color:"success",isLight:!0,size:"lg",children:"Large"})}),(0,m.jsx)("div",{className:"col-auto",children:(0,m.jsx)(r.Z,{color:"success",isLight:!0,children:"Default"})}),(0,m.jsx)("div",{className:"col-auto",children:(0,m.jsx)(r.Z,{color:"success",isLight:!0,size:"sm",children:"Small"})})]})}),(0,m.jsx)("div",{className:"col-auto",children:(0,m.jsxs)("div",{className:"row g-3 align-items-center",children:[(0,m.jsx)("div",{className:"col-auto",children:(0,m.jsx)(r.Z,{color:"danger",isLight:!0,size:"sm",icon:"Archive",children:"Small"})}),(0,m.jsx)("div",{className:"col-auto",children:(0,m.jsx)(r.Z,{color:"danger",isLight:!0,icon:"Archive",children:"Default"})}),(0,m.jsx)("div",{className:"col-auto",children:(0,m.jsx)(r.Z,{color:"danger",isLight:!0,size:"lg",icon:"Archive",children:"Large"})})]})}),(0,m.jsx)("div",{className:"col-auto",children:(0,m.jsxs)("div",{className:"row g-3 align-items-center",children:[(0,m.jsx)("div",{className:"col-auto",children:(0,m.jsx)(r.Z,{color:"info",size:"lg",icon:"Archive",isLight:!0})}),(0,m.jsx)("div",{className:"col-auto",children:(0,m.jsx)(r.Z,{color:"info",icon:"Archive",isLight:!0})}),(0,m.jsx)("div",{className:"col-auto",children:(0,m.jsx)(r.Z,{color:"info",size:"sm",icon:"Archive",isLight:!0})})]})})]})})]})}),(0,m.jsx)("div",{className:"col-lg-6",children:(0,m.jsxs)(c.ZP,{stretch:!0,children:[(0,m.jsxs)(c.Ol,{children:[(0,m.jsxs)(c.oL,{icon:"Bolt",iconColor:"warning",children:[(0,m.jsx)(c.ll,{children:"isActive"}),(0,m.jsx)(c.md,{children:"Button"})]}),(0,m.jsx)(c.T$,{children:(0,m.jsx)(r.h,{children:(0,m.jsxs)(x.ZP,{children:[(0,m.jsx)(x.Z_,{children:(0,m.jsx)(r.Z,{color:"storybook",icon:"CustomStorybook",isLight:!0,children:"Storybook"})}),(0,m.jsx)(x.h_,{isAlignmentEnd:!0,children:[{text:"Color Button",path:"/docs/components-button-props-isactive--color-button"},{text:"Outline Button",path:"/docs/components-button-props-isactive--outline-button"},{text:"Link Button",path:"/docs/components-button-props-isactive--link-button"},{text:"Light Button",path:"/docs/components-button-props-isactive--light-button"}].map((function(o){return(0,m.jsx)(x.hP,{children:(0,m.jsx)(j.Z,{to:o.path,children:o.text})},o.text)}))})]})})})]}),(0,m.jsx)(c.Ol,{children:(0,m.jsx)(t.Z,{children:"isActive: PropTypes.bool,"})}),(0,m.jsx)(c.eW,{children:(0,m.jsxs)("div",{className:"row g-3",children:[(0,m.jsx)("div",{className:"col-auto",children:(0,m.jsx)(r.Z,{color:"primary",isActive:!0,children:"Color Button"})}),(0,m.jsx)("div",{className:"col-auto",children:(0,m.jsx)(r.Z,{color:"primary",isOutline:!0,isActive:!0,children:"Outline Button"})}),(0,m.jsx)("div",{className:"col-auto",children:(0,m.jsx)(r.Z,{color:"primary",isLink:!0,isActive:!0,children:"Link Button"})}),(0,m.jsx)("div",{className:"col-auto",children:(0,m.jsx)(r.Z,{color:"primary",isLight:!0,isActive:!0,children:"Light Button"})})]})})]})}),(0,m.jsx)("div",{className:"col-lg-6",children:(0,m.jsxs)(c.ZP,{stretch:!0,children:[(0,m.jsxs)(c.Ol,{children:[(0,m.jsxs)(c.oL,{icon:"Report",iconColor:"danger",children:[(0,m.jsx)(c.ll,{children:"isDisable"}),(0,m.jsx)(c.md,{children:"Button"})]}),(0,m.jsx)(c.T$,{children:(0,m.jsx)(r.h,{children:(0,m.jsxs)(x.ZP,{children:[(0,m.jsx)(x.Z_,{children:(0,m.jsx)(r.Z,{color:"storybook",icon:"CustomStorybook",isLight:!0,children:"Storybook"})}),(0,m.jsx)(x.h_,{isAlignmentEnd:!0,children:[{text:"Color Button",path:"/docs/components-button-props-isdisable--color-button"},{text:"Outline Button",path:"/docs/components-button-props-isdisable--outline-button"},{text:"Link Button",path:"/docs/components-button-props-isdisable--link-button"},{text:"Light Button",path:"/docs/components-button-props-isdisable--light-button"}].map((function(o){return(0,m.jsx)(x.hP,{children:(0,m.jsx)(j.Z,{to:o.path,children:o.text})},o.text)}))})]})})})]}),(0,m.jsx)(c.Ol,{children:(0,m.jsx)(t.Z,{children:"isDisable: PropTypes.bool,"})}),(0,m.jsx)(c.eW,{children:(0,m.jsxs)("div",{className:"row g-3",children:[(0,m.jsx)("div",{className:"col-auto",children:(0,m.jsx)(r.Z,{color:"primary",isDisable:!0,children:"Color Button"})}),(0,m.jsx)("div",{className:"col-auto",children:(0,m.jsx)(r.Z,{color:"primary",isOutline:!0,isDisable:!0,children:"Outline Button"})}),(0,m.jsx)("div",{className:"col-auto",children:(0,m.jsx)(r.Z,{color:"primary",isLink:!0,isDisable:!0,children:"Link Button"})}),(0,m.jsx)("div",{className:"col-auto",children:(0,m.jsx)(r.Z,{color:"primary",isLight:!0,isDisable:!0,children:"Light Button"})})]})})]})}),(0,m.jsx)("div",{className:"col-lg-6",children:(0,m.jsxs)(c.ZP,{stretch:!0,children:[(0,m.jsxs)(c.Ol,{children:[(0,m.jsxs)(c.oL,{icon:"ContentCopy",iconColor:"dark",children:[(0,m.jsx)(c.ll,{children:"shadow"}),(0,m.jsx)(c.md,{children:"Button"})]}),(0,m.jsx)(c.T$,{children:(0,m.jsx)(r.h,{children:(0,m.jsxs)(x.ZP,{children:[(0,m.jsx)(x.Z_,{children:(0,m.jsx)(r.Z,{color:"storybook",icon:"CustomStorybook",isLight:!0,children:"Storybook"})}),(0,m.jsx)(x.h_,{isAlignmentEnd:!0,children:[{text:"None",path:"/docs/components-button-props-shadow--none"},{text:"Small",path:"/docs/components-button-props-shadow--small"},{text:"Default",path:"/docs/components-button-props-shadow--default-or-true"},{text:"Large",path:"/docs/components-button-props-shadow--large"}].map((function(o){return(0,m.jsx)(x.hP,{children:(0,m.jsx)(j.Z,{to:o.path,children:o.text})},o.text)}))})]})})})]}),(0,m.jsx)(c.Ol,{children:(0,m.jsx)(t.Z,{children:"shadow: PropTypes.oneOf([null, 'none', 'sm', 'default', 'lg']),"})}),(0,m.jsx)(c.eW,{children:(0,m.jsxs)("div",{className:"row g-3",children:[(0,m.jsx)("div",{className:"col-auto",children:(0,m.jsx)(r.Z,{color:"dark",isLight:!0,shadow:"none",children:"None"})}),(0,m.jsx)("div",{className:"col-auto",children:(0,m.jsx)(r.Z,{color:"dark",isLight:!0,shadow:"sm",children:"Small"})}),(0,m.jsx)("div",{className:"col-auto",children:(0,m.jsx)(r.Z,{color:"dark",isLight:!0,shadow:"default",children:"Default"})}),(0,m.jsx)("div",{className:"col-auto",children:(0,m.jsx)(r.Z,{color:"dark",isLight:!0,shadow:"lg",children:"Large"})})]})})]})}),(0,m.jsx)("div",{className:"col-lg-6",children:(0,m.jsxs)(c.ZP,{stretch:!0,children:[(0,m.jsxs)(c.Ol,{children:[(0,m.jsxs)(c.oL,{icon:"FilterNone",iconColor:"info",children:[(0,m.jsx)(c.ll,{children:"hoverShadow"}),(0,m.jsx)(c.md,{children:"Button"})]}),(0,m.jsx)(c.T$,{children:(0,m.jsx)(r.h,{children:(0,m.jsxs)(x.ZP,{children:[(0,m.jsx)(x.Z_,{children:(0,m.jsx)(r.Z,{color:"storybook",icon:"CustomStorybook",isLight:!0,children:"Storybook"})}),(0,m.jsx)(x.h_,{isAlignmentEnd:!0,children:[{text:"None",path:"/docs/components-button-props-hovershadow--none"},{text:"Small",path:"/docs/components-button-props-hovershadow--small"},{text:"Default",path:"/docs/components-button-props-hovershadow--default-or-true"},{text:"Large",path:"/docs/components-button-props-hovershadow--large"}].map((function(o){return(0,m.jsx)(x.hP,{children:(0,m.jsx)(j.Z,{to:o.path,children:o.text})},o.text)}))})]})})})]}),(0,m.jsx)(c.Ol,{children:(0,m.jsx)(t.Z,{children:"hoverShadow: PropTypes.oneOf([null, 'none', 'sm', 'default', 'lg']),"})}),(0,m.jsx)(c.eW,{children:(0,m.jsxs)("div",{className:"row g-3",children:[(0,m.jsx)("div",{className:"col-auto",children:(0,m.jsx)(r.Z,{color:"info",isLight:!0,shadow:"none",hoverShadow:"lg",children:"Hover large"})}),(0,m.jsx)("div",{className:"col-auto",children:(0,m.jsx)(r.Z,{color:"info",isLight:!0,shadow:"sm",hoverShadow:"lg",children:"Default sm, hover lg"})}),(0,m.jsx)("div",{className:"col-auto",children:(0,m.jsx)(r.Z,{color:"info",isLight:!0,shadow:"default",hoverShadow:"none",children:"Default, hover none"})}),(0,m.jsx)("div",{className:"col-auto",children:(0,m.jsx)(r.Z,{color:"info",isLight:!0,shadow:"lg",hoverShadow:"none",children:"Default lg, hover none"})})]})})]})}),(0,m.jsx)("div",{className:"col-lg-6",children:(0,m.jsxs)(c.ZP,{stretch:!0,children:[(0,m.jsxs)(c.Ol,{children:[(0,m.jsxs)(c.oL,{icon:"FilterNone",iconColor:"info",children:[(0,m.jsxs)(c.ll,{children:["icon ",(0,m.jsx)("small",{children:"With Icon"})]}),(0,m.jsx)(c.md,{children:"Button"})]}),(0,m.jsx)(c.T$,{children:(0,m.jsx)(h.Z,{to:"/story/components-button-props-icon-with-icon-examples--color-button"})})]}),(0,m.jsx)(c.Ol,{children:(0,m.jsxs)(t.Z,{children:[(0,m.jsx)("div",{children:"icon: PropTypes.string,"}),(0,m.jsxs)("div",{children:["// ",(0,m.jsx)(e.OL,{to:"/icons/material",children:"Material"})," or"," ",(0,m.jsx)(e.OL,{to:"/icons/bootstrap-icon",children:"Bootstrap"})," to see the icon names and previews."]})]})}),(0,m.jsxs)(c.eW,{children:[(0,m.jsxs)("div",{className:"row g-3 mb-3",children:[(0,m.jsx)("div",{className:"col-auto",children:(0,m.jsx)(r.Z,{color:"primary",icon:"Star",shadow:"none",hoverShadow:"lg",children:"Primary"})}),(0,m.jsx)("div",{className:"col-auto",children:(0,m.jsx)(r.Z,{color:"secondary",icon:"Group",shadow:"none",hoverShadow:"lg",children:"Secondary"})}),(0,m.jsx)("div",{className:"col-auto",children:(0,m.jsx)(r.Z,{color:"success",icon:"VerifiedUser",shadow:"none",hoverShadow:"lg",children:"Success"})}),(0,m.jsx)("div",{className:"col-auto",children:(0,m.jsx)(r.Z,{color:"info",icon:"Info",shadow:"none",hoverShadow:"lg",children:"Info"})}),(0,m.jsx)("div",{className:"col-auto",children:(0,m.jsx)(r.Z,{color:"warning",icon:"Warning",shadow:"none",hoverShadow:"lg",children:"Warning"})}),(0,m.jsx)("div",{className:"col-auto",children:(0,m.jsx)(r.Z,{color:"danger",icon:"Bolt",shadow:"none",hoverShadow:"lg",children:"Danger"})}),(0,m.jsx)("div",{className:"col-auto",children:(0,m.jsx)(r.Z,{color:"light",icon:"Light",shadow:"none",hoverShadow:"lg",children:"Light"})}),(0,m.jsx)("div",{className:"col-auto",children:(0,m.jsx)(r.Z,{color:"dark",icon:"NightsStay",shadow:"none",hoverShadow:"lg",children:"Dark"})})]}),(0,m.jsxs)("div",{className:"row g-3 mb-3",children:[(0,m.jsx)("div",{className:"col-auto",children:(0,m.jsx)(r.Z,{color:"primary",isOutline:!0,icon:"Star",shadow:"none",hoverShadow:"lg",children:"Primary"})}),(0,m.jsx)("div",{className:"col-auto",children:(0,m.jsx)(r.Z,{color:"secondary",isOutline:!0,icon:"Group",shadow:"none",hoverShadow:"lg",children:"Secondary"})}),(0,m.jsx)("div",{className:"col-auto",children:(0,m.jsx)(r.Z,{color:"success",isOutline:!0,icon:"VerifiedUser",shadow:"none",hoverShadow:"lg",children:"Success"})}),(0,m.jsx)("div",{className:"col-auto",children:(0,m.jsx)(r.Z,{color:"info",isOutline:!0,icon:"Info",shadow:"none",hoverShadow:"lg",children:"Info"})}),(0,m.jsx)("div",{className:"col-auto",children:(0,m.jsx)(r.Z,{color:"warning",isOutline:!0,icon:"Warning",shadow:"none",hoverShadow:"lg",children:"Warning"})}),(0,m.jsx)("div",{className:"col-auto",children:(0,m.jsx)(r.Z,{color:"danger",isOutline:!0,icon:"Bolt",shadow:"none",hoverShadow:"lg",children:"Danger"})}),(0,m.jsx)("div",{className:"col-auto",children:(0,m.jsx)(r.Z,{color:"light",isOutline:!0,icon:"Light",shadow:"none",hoverShadow:"lg",children:"Light"})}),(0,m.jsx)("div",{className:"col-auto",children:(0,m.jsx)(r.Z,{color:"dark",isOutline:!0,icon:"NightsStay",shadow:"none",hoverShadow:"lg",children:"Dark"})})]}),(0,m.jsxs)("div",{className:"row g-3 mb-3",children:[(0,m.jsx)("div",{className:"col-auto",children:(0,m.jsx)(r.Z,{color:"primary",isLink:!0,icon:"Star",shadow:"none",hoverShadow:"lg",children:"Primary"})}),(0,m.jsx)("div",{className:"col-auto",children:(0,m.jsx)(r.Z,{color:"secondary",isLink:!0,icon:"Group",shadow:"none",hoverShadow:"lg",children:"Secondary"})}),(0,m.jsx)("div",{className:"col-auto",children:(0,m.jsx)(r.Z,{color:"success",isLink:!0,icon:"VerifiedUser",shadow:"none",hoverShadow:"lg",children:"Success"})}),(0,m.jsx)("div",{className:"col-auto",children:(0,m.jsx)(r.Z,{color:"info",isLink:!0,icon:"Info",shadow:"none",hoverShadow:"lg",children:"Info"})}),(0,m.jsx)("div",{className:"col-auto",children:(0,m.jsx)(r.Z,{color:"warning",isLink:!0,icon:"Warning",shadow:"none",hoverShadow:"lg",children:"Warning"})}),(0,m.jsx)("div",{className:"col-auto",children:(0,m.jsx)(r.Z,{color:"danger",isLink:!0,icon:"Bolt",shadow:"none",hoverShadow:"lg",children:"Danger"})}),(0,m.jsx)("div",{className:"col-auto",children:(0,m.jsx)(r.Z,{color:"light",isLink:!0,icon:"Light",shadow:"none",hoverShadow:"lg",children:"Light"})}),(0,m.jsx)("div",{className:"col-auto",children:(0,m.jsx)(r.Z,{color:"dark",isLink:!0,icon:"NightsStay",shadow:"none",hoverShadow:"lg",children:"Dark"})})]}),(0,m.jsxs)("div",{className:"row g-3 mb-3",children:[(0,m.jsx)("div",{className:"col-auto",children:(0,m.jsx)(r.Z,{color:"primary",isLight:!0,icon:"Star",shadow:"none",hoverShadow:"lg",children:"Primary"})}),(0,m.jsx)("div",{className:"col-auto",children:(0,m.jsx)(r.Z,{color:"secondary",isLight:!0,icon:"Group",shadow:"none",hoverShadow:"lg",children:"Secondary"})}),(0,m.jsx)("div",{className:"col-auto",children:(0,m.jsx)(r.Z,{color:"success",isLight:!0,icon:"VerifiedUser",shadow:"none",hoverShadow:"lg",children:"Success"})}),(0,m.jsx)("div",{className:"col-auto",children:(0,m.jsx)(r.Z,{color:"info",isLight:!0,icon:"Info",shadow:"none",hoverShadow:"lg",children:"Info"})}),(0,m.jsx)("div",{className:"col-auto",children:(0,m.jsx)(r.Z,{color:"warning",isLight:!0,icon:"Warning",shadow:"none",hoverShadow:"lg",children:"Warning"})}),(0,m.jsx)("div",{className:"col-auto",children:(0,m.jsx)(r.Z,{color:"danger",isLight:!0,icon:"Bolt",shadow:"none",hoverShadow:"lg",children:"Danger"})}),(0,m.jsx)("div",{className:"col-auto",children:(0,m.jsx)(r.Z,{color:"light",isLight:!0,icon:"Light",shadow:"none",hoverShadow:"lg",children:"Light"})}),(0,m.jsx)("div",{className:"col-auto",children:(0,m.jsx)(r.Z,{color:"dark",isLight:!0,icon:"NightsStay",shadow:"none",hoverShadow:"lg",children:"Dark"})})]}),(0,m.jsxs)(c.ZP,{shadow:"none",className:"border-1 mb-0",children:[(0,m.jsx)(c.Ol,{children:(0,m.jsx)(c.oL,{children:(0,m.jsx)(c.ll,{tag:"h6",children:"Example Sizes"})})}),(0,m.jsx)(c.eW,{children:(0,m.jsxs)("div",{className:"row g-4",children:[(0,m.jsx)("div",{className:"col-12",children:(0,m.jsxs)("div",{className:"row g-3 align-items-center",children:[(0,m.jsx)("div",{className:"col-auto",children:(0,m.jsx)(r.Z,{color:"primary",size:"sm",icon:"Star",shadow:"none",hoverShadow:"lg",children:"Primary Small"})}),(0,m.jsx)("div",{className:"col-auto",children:(0,m.jsx)(r.Z,{color:"primary",size:"lg",icon:"Star",shadow:"none",hoverShadow:"lg",children:"Primary Large"})})]})}),(0,m.jsx)("div",{className:"col-12",children:(0,m.jsxs)("div",{className:"row g-3 align-items-center",children:[(0,m.jsx)("div",{className:"col-auto",children:(0,m.jsx)(r.Z,{color:"secondary",isOutline:!0,size:"sm",icon:"Star",shadow:"none",hoverShadow:"lg",children:"Secondary Small"})}),(0,m.jsx)("div",{className:"col-auto",children:(0,m.jsx)(r.Z,{color:"secondary",isOutline:!0,size:"lg",icon:"Star",shadow:"none",hoverShadow:"lg",children:"Secondary Large"})})]})}),(0,m.jsx)("div",{className:"col-12",children:(0,m.jsxs)("div",{className:"row g-3 align-items-center",children:[(0,m.jsx)("div",{className:"col-auto",children:(0,m.jsx)(r.Z,{color:"success",isLink:!0,size:"sm",icon:"Star",shadow:"none",hoverShadow:"lg",children:"Success Small"})}),(0,m.jsx)("div",{className:"col-auto",children:(0,m.jsx)(r.Z,{color:"success",isLink:!0,size:"lg",icon:"Star",shadow:"none",hoverShadow:"lg",children:"Success Large"})})]})}),(0,m.jsx)("div",{className:"col-12",children:(0,m.jsxs)("div",{className:"row g-3 align-items-center",children:[(0,m.jsx)("div",{className:"col-auto",children:(0,m.jsx)(r.Z,{color:"info",isLight:!0,size:"sm",icon:"Star",shadow:"none",hoverShadow:"lg",children:"Info Small"})}),(0,m.jsx)("div",{className:"col-auto",children:(0,m.jsx)(r.Z,{color:"info",isLight:!0,size:"lg",icon:"Star",shadow:"none",hoverShadow:"lg",children:"Info Large"})})]})})]})})]})]})]})}),(0,m.jsx)("div",{className:"col-lg-6",children:(0,m.jsxs)(c.ZP,{stretch:!0,children:[(0,m.jsxs)(c.Ol,{children:[(0,m.jsxs)(c.oL,{icon:"FilterNone",iconColor:"info",children:[(0,m.jsxs)(c.ll,{children:["icon ",(0,m.jsx)("small",{children:"Only Icon"})]}),(0,m.jsx)(c.md,{children:"Button"})]}),(0,m.jsx)(c.T$,{children:(0,m.jsx)(h.Z,{to:"/story/components-button-props-icon-only-icon-examples--color-button"})})]}),(0,m.jsx)(c.Ol,{children:(0,m.jsx)(t.Z,{children:"icon: PropTypes.string,"})}),(0,m.jsxs)(c.eW,{children:[(0,m.jsxs)("div",{className:"row g-3 mb-3",children:[(0,m.jsx)("div",{className:"col-auto",children:(0,m.jsx)(r.Z,{color:"primary",icon:"Star",shadow:"none",hoverShadow:"lg"})}),(0,m.jsx)("div",{className:"col-auto",children:(0,m.jsx)(r.Z,{color:"secondary",icon:"Group",shadow:"none",hoverShadow:"lg"})}),(0,m.jsx)("div",{className:"col-auto",children:(0,m.jsx)(r.Z,{color:"success",icon:"VerifiedUser",shadow:"none",hoverShadow:"lg"})}),(0,m.jsx)("div",{className:"col-auto",children:(0,m.jsx)(r.Z,{color:"info",icon:"Info",shadow:"none",hoverShadow:"lg"})}),(0,m.jsx)("div",{className:"col-auto",children:(0,m.jsx)(r.Z,{color:"warning",icon:"Warning",shadow:"none",hoverShadow:"lg"})}),(0,m.jsx)("div",{className:"col-auto",children:(0,m.jsx)(r.Z,{color:"danger",icon:"Bolt",shadow:"none",hoverShadow:"lg"})}),(0,m.jsx)("div",{className:"col-auto",children:(0,m.jsx)(r.Z,{color:"light",icon:"Light",shadow:"none",hoverShadow:"lg"})}),(0,m.jsx)("div",{className:"col-auto",children:(0,m.jsx)(r.Z,{color:"dark",icon:"NightsStay",shadow:"none",hoverShadow:"lg"})})]}),(0,m.jsxs)("div",{className:"row g-3 mb-3",children:[(0,m.jsx)("div",{className:"col-auto",children:(0,m.jsx)(r.Z,{color:"primary",isOutline:!0,icon:"Star",shadow:"none",hoverShadow:"lg"})}),(0,m.jsx)("div",{className:"col-auto",children:(0,m.jsx)(r.Z,{color:"secondary",isOutline:!0,icon:"Group",shadow:"none",hoverShadow:"lg"})}),(0,m.jsx)("div",{className:"col-auto",children:(0,m.jsx)(r.Z,{color:"success",isOutline:!0,icon:"VerifiedUser",shadow:"none",hoverShadow:"lg"})}),(0,m.jsx)("div",{className:"col-auto",children:(0,m.jsx)(r.Z,{color:"info",isOutline:!0,icon:"Info",shadow:"none",hoverShadow:"lg"})}),(0,m.jsx)("div",{className:"col-auto",children:(0,m.jsx)(r.Z,{color:"warning",isOutline:!0,icon:"Warning",shadow:"none",hoverShadow:"lg"})}),(0,m.jsx)("div",{className:"col-auto",children:(0,m.jsx)(r.Z,{color:"danger",isOutline:!0,icon:"Bolt",shadow:"none",hoverShadow:"lg"})}),(0,m.jsx)("div",{className:"col-auto",children:(0,m.jsx)(r.Z,{color:"light",isOutline:!0,icon:"Light",shadow:"none",hoverShadow:"lg"})}),(0,m.jsx)("div",{className:"col-auto",children:(0,m.jsx)(r.Z,{color:"dark",isOutline:!0,icon:"NightsStay",shadow:"none",hoverShadow:"lg"})})]}),(0,m.jsxs)("div",{className:"row g-3 mb-3",children:[(0,m.jsx)("div",{className:"col-auto",children:(0,m.jsx)(r.Z,{color:"primary",isLink:!0,icon:"Star",shadow:"none",hoverShadow:"lg"})}),(0,m.jsx)("div",{className:"col-auto",children:(0,m.jsx)(r.Z,{color:"secondary",isLink:!0,icon:"Group",shadow:"none",hoverShadow:"lg"})}),(0,m.jsx)("div",{className:"col-auto",children:(0,m.jsx)(r.Z,{color:"success",isLink:!0,icon:"VerifiedUser",shadow:"none",hoverShadow:"lg"})}),(0,m.jsx)("div",{className:"col-auto",children:(0,m.jsx)(r.Z,{color:"info",isLink:!0,icon:"Info",shadow:"none",hoverShadow:"lg"})}),(0,m.jsx)("div",{className:"col-auto",children:(0,m.jsx)(r.Z,{color:"warning",isLink:!0,icon:"Warning",shadow:"none",hoverShadow:"lg"})}),(0,m.jsx)("div",{className:"col-auto",children:(0,m.jsx)(r.Z,{color:"danger",isLink:!0,icon:"Bolt",shadow:"none",hoverShadow:"lg"})}),(0,m.jsx)("div",{className:"col-auto",children:(0,m.jsx)(r.Z,{color:"light",isLink:!0,icon:"Light",shadow:"none",hoverShadow:"lg"})}),(0,m.jsx)("div",{className:"col-auto",children:(0,m.jsx)(r.Z,{color:"dark",isLink:!0,icon:"NightsStay",shadow:"none",hoverShadow:"lg"})})]}),(0,m.jsxs)("div",{className:"row g-3 mb-3",children:[(0,m.jsx)("div",{className:"col-auto",children:(0,m.jsx)(r.Z,{color:"primary",isLight:!0,icon:"Star",shadow:"none",hoverShadow:"lg"})}),(0,m.jsx)("div",{className:"col-auto",children:(0,m.jsx)(r.Z,{color:"secondary",isLight:!0,icon:"Group",shadow:"none",hoverShadow:"lg"})}),(0,m.jsx)("div",{className:"col-auto",children:(0,m.jsx)(r.Z,{color:"success",isLight:!0,icon:"VerifiedUser",shadow:"none",hoverShadow:"lg"})}),(0,m.jsx)("div",{className:"col-auto",children:(0,m.jsx)(r.Z,{color:"info",isLight:!0,icon:"Info",shadow:"none",hoverShadow:"lg"})}),(0,m.jsx)("div",{className:"col-auto",children:(0,m.jsx)(r.Z,{color:"warning",isLight:!0,icon:"Warning",shadow:"none",hoverShadow:"lg"})}),(0,m.jsx)("div",{className:"col-auto",children:(0,m.jsx)(r.Z,{color:"danger",isLight:!0,icon:"Bolt",shadow:"none",hoverShadow:"lg"})}),(0,m.jsx)("div",{className:"col-auto",children:(0,m.jsx)(r.Z,{color:"light",isLight:!0,icon:"Light",shadow:"none",hoverShadow:"lg"})}),(0,m.jsx)("div",{className:"col-auto",children:(0,m.jsx)(r.Z,{color:"dark",isLight:!0,icon:"NightsStay",shadow:"none",hoverShadow:"lg"})})]}),(0,m.jsxs)(c.ZP,{shadow:"none",className:"border-1 mb-0",children:[(0,m.jsx)(c.Ol,{children:(0,m.jsx)(c.oL,{children:(0,m.jsx)(c.ll,{tag:"h6",children:"Example Sizes"})})}),(0,m.jsx)(c.eW,{children:(0,m.jsxs)("div",{className:"row g-3",children:[(0,m.jsxs)("div",{className:"col-12",children:[(0,m.jsx)(r.Z,{className:"me-3",color:"primary",size:"sm",icon:"Star",shadow:"none",hoverShadow:"lg"}),(0,m.jsx)(r.Z,{className:"me-3",color:"primary",icon:"Star",shadow:"none",hoverShadow:"lg"}),(0,m.jsx)(r.Z,{color:"primary",size:"lg",icon:"Star",shadow:"none",hoverShadow:"lg"})]}),(0,m.jsxs)("div",{className:"col-12",children:[(0,m.jsx)(r.Z,{className:"me-3",color:"secondary",isOutline:!0,size:"sm",icon:"Star",shadow:"none",hoverShadow:"lg"}),(0,m.jsx)(r.Z,{className:"me-3",color:"secondary",isOutline:!0,icon:"Star",shadow:"none",hoverShadow:"lg"}),(0,m.jsx)(r.Z,{color:"secondary",isOutline:!0,size:"lg",icon:"Star",shadow:"none",hoverShadow:"lg"})]}),(0,m.jsxs)("div",{className:"col-12",children:[(0,m.jsx)(r.Z,{className:"me-3",color:"success",isLink:!0,size:"sm",icon:"Star",shadow:"none",hoverShadow:"lg"}),(0,m.jsx)(r.Z,{className:"me-3",color:"success",isLink:!0,icon:"Star",shadow:"none",hoverShadow:"lg"}),(0,m.jsx)(r.Z,{color:"success",isLink:!0,size:"lg",icon:"Star",shadow:"none",hoverShadow:"lg"})]}),(0,m.jsxs)("div",{className:"col-12",children:[(0,m.jsx)(r.Z,{className:"me-3",color:"info",isLight:!0,size:"sm",icon:"Star",shadow:"none",hoverShadow:"lg"}),(0,m.jsx)(r.Z,{className:"me-3",color:"info",isLight:!0,icon:"Star",shadow:"none",hoverShadow:"lg"}),(0,m.jsx)(r.Z,{color:"info",isLight:!0,size:"lg",icon:"Star",shadow:"none",hoverShadow:"lg"})]})]})})]})]})]})})]})})]})}}}]);
//# sourceMappingURL=8978.8b275289.chunk.js.map