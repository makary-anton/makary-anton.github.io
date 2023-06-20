"use strict";(self.webpackChunkfacit=self.webpackChunkfacit||[]).push([[477],{57e3:function(e,n,l){l(72791);var a=l(66867),r=l(50022),s=l(73549),i=l(80184),t=(0,a.QM)({prism:{padding:"0 !important",margin:"0 !important",background:"transparent !important",borderRadius:"0 !important","& > code":{color:"#2e3f96 !important",fontSize:"0.875rem !important"}}}),o=function(e){var n=e.children,l=e.isPrism,a=t();return(0,i.jsx)(r.ZP,{color:"info",isLight:!0,shadow:"md",borderWidth:0,icon:"CustomReact",className:"flex-nowrap w-100",children:l?(0,i.jsx)(s.Z,{code:n,language:"jsx",className:a.prism}):(0,i.jsx)("code",{children:n})})};o.defaultProps={isPrism:!1},n.Z=o},31024:function(e,n,l){var a=l(1413),r=l(45987),s=(l(72791),l(11592)),i=l(80184),t=["to"];n.Z=function(e){var n=e.to,l=(0,r.Z)(e,t);return(0,i.jsx)(s.Z,(0,a.Z)((0,a.Z)({color:"storybook",icon:"CustomStorybook",tag:"a",target:"_blank",isLight:!0,href:"".concat("https://facit-story.omtanke.studio/?path=").concat(n)},l),{},{children:"Storybook"}))}},5081:function(e,n,l){l.d(n,{g:function(){return d}});var a=l(72791),r=l(81694),s=l.n(r),i=l(11087),t=l(16843),o=l(63542),c=l(80184),d=function(e){var n=e.children,l=e.ariaLabel,r=e.className,o=e.tag,d=e.to,h=e.isActive,x=e.divider;return(0,c.jsxs)(t.Z,{tag:o,className:s()("breadcrumb-item",{active:h},r),"aria-current":h?"page":null,"aria-label":l||n,children:[x&&"string"!==typeof x&&(0,a.cloneElement)(x,{className:s()("breadcrumb-icon",x.props.className)}),h?n:(0,c.jsx)(i.OL,{to:d,"aria-label":l,children:n})]})};d.defaultProps={className:void 0,ariaLabel:void 0,tag:"li",isActive:!1,divider:void 0};var h=function(e){var n=e.children,l=e.list,r=e.tag,s=e.listTag,i=e.itemTag,o=e.ariaLabel,h=e.autoActive,x=e.isToHome,m=e.divider,u="string"!==m&&m;return(0,c.jsx)(t.Z,{tag:r,"aria-label":o,style:m?{"--bs-breadcrumb-divider":"string"===typeof m?"'".concat(m,"'"):"none"}:null,children:(0,c.jsxs)(t.Z,{tag:s,className:"breadcrumb",children:[x&&(0,c.jsx)(d,{to:"/",ariaLabel:"Home",children:x}),l?l.map((function(e,n){return(0,c.jsx)(d,{tag:e.tag||i,to:e.to,isActive:h&&l.length===n+1,divider:u,children:e.title},e.title)})):a.Children.map(n,(function(e,l){return(0,a.cloneElement)(e,{tag:e.props.tag||i,isActive:h&&n.length===l+1,divider:e.props.divider||u})}))]})})};h.defaultProps={children:void 0,tag:"nav",listTag:"ol",itemTag:"li",ariaLabel:"breadcrumb",list:void 0,autoActive:!0,isToHome:(0,c.jsx)(o.Z,{icon:"HolidayVillage"}),divider:(0,c.jsx)(o.Z,{icon:"ChevronRight"})},n.Z=h},10477:function(e,n,l){l.r(n);l(72791);var a=l(26438),r=l(15224),s=l(5081),i=l(47930),t=l(38493),o=l(96517),c=l(67827),d=l(2926),h=l(57e3),x=l(31024),m=l(7134),u=l(80184);n.default=function(){var e=(0,a.TA)({initialValues:{exampleRange:50,exampleDisableRange:50,exampleReadOnlyRange:50,exampleMinMaxRange:3,exampleStep:8.7},onSubmit:function(){}});return(0,u.jsxs)(t.Z,{title:m.XZ.forms.subMenu.range.text,children:[(0,u.jsxs)(r.ZP,{children:[(0,u.jsx)(r.Vv,{children:(0,u.jsx)(s.Z,{list:[{title:"Forms",to:"/forms"},{title:"Range",to:"/forms/range"}]})}),(0,u.jsx)(r.$o,{children:(0,u.jsx)(x.Z,{to:"/docs/forms-input--range"})})]}),(0,u.jsx)(i.Z,{children:(0,u.jsxs)("form",{className:"row",children:[(0,u.jsx)("div",{className:"col-12",children:(0,u.jsxs)(o.ZP,{children:[(0,u.jsx)(o.Ol,{children:(0,u.jsx)(o.oL,{icon:"HdrStrong",children:(0,u.jsx)(o.ll,{tag:"h2",children:"Range"})})}),(0,u.jsxs)(o.eW,{children:[(0,u.jsx)("h3",{className:"text-muted",children:"Use our custom range inputs for consistent cross-browser styling and built-in customization."}),(0,u.jsxs)("p",{children:["Create custom ",(0,u.jsx)("code",{children:'<input type="range">'})," controls with ",(0,u.jsx)("code",{children:".form-range"}),". The track (the background) and thumb (the value) are both styled to appear the same across browsers. As only Edge Legacy and Firefox supports \u201cfilling\u201d their track from the left or right of the thumb as a means to visually indicate progress, we do not currently support it."]})]}),(0,u.jsx)(o.Ol,{children:(0,u.jsxs)(o.oL,{icon:"Assignment",children:[(0,u.jsx)(o.ll,{children:"General Usage"}),(0,u.jsx)(o.md,{children:"Input"})]})}),(0,u.jsx)(o.eW,{children:(0,u.jsx)(o.TY,{children:"\n<Input\n\ttype='range'\n\tid={ String }\n\tname={ String }\n\tclassName={ String }\n\tplaceholder={null}\n\tautoComplete={ String }\n\tariaDescribedby={ String }\n\tariaLabelledby={ String }\n\tariaLabel={ String }\n\tlist={null}\n\ttitle={ String }\n\tsize={ String } // null || 'sm' || 'lg'\n\tdisabled={ Boolean }\n\treadOnly={ Boolean }\n\tmultiple={null}\n\tvalue={ Number }\n\tonBlur={ Function }\n\tonChange={ Function }\n\tonFocus={ Function }\n\tonInput={ Function }\n\tonInvalid={ Function }\n\tonSelect={ Function }\n \t{...props}/>"})})]})}),(0,u.jsx)("div",{className:"col-lg-6",children:(0,u.jsxs)(o.ZP,{stretch:!0,children:[(0,u.jsxs)(o.Ol,{children:[(0,u.jsxs)(o.oL,{icon:"Brush",iconColor:"info",children:[(0,u.jsxs)(o.ll,{children:["type ",(0,u.jsx)("small",{children:"range"})]}),(0,u.jsx)(o.md,{children:"Input"})]}),(0,u.jsx)(o.T$,{children:(0,u.jsx)(x.Z,{to:"/story/forms-input--range"})})]}),(0,u.jsx)(o.Ol,{children:(0,u.jsxs)(h.Z,{children:["type: PropTypes.oneOf([ 'text', 'email', 'password', 'file', 'color', 'date', 'datetime-local', 'hidden', 'month', 'number', '",(0,u.jsx)("b",{children:"range"}),"', 'search', 'tel', 'time', 'url', 'week', ]),"]})}),(0,u.jsx)(o.eW,{children:(0,u.jsx)(c.Z,{id:"exampleRange",label:"Example range",formText:"Its value ".concat(e.values.exampleRange),children:(0,u.jsx)(d.Z,{type:"range",onChange:e.handleChange,value:e.values.exampleRange})})})]})}),(0,u.jsx)("div",{className:"col-lg-6",children:(0,u.jsxs)(o.ZP,{stretch:!0,children:[(0,u.jsxs)(o.Ol,{children:[(0,u.jsxs)(o.oL,{icon:"GppBad",iconColor:"danger",children:[(0,u.jsx)(o.ll,{children:"disabled"}),(0,u.jsx)(o.md,{children:"Input"})]}),(0,u.jsx)(o.T$,{children:(0,u.jsx)(x.Z,{to:"/story/forms-input--range&args=disabled:true"})})]}),(0,u.jsx)(o.Ol,{children:(0,u.jsx)(h.Z,{children:"disabled: PropTypes.bool,"})}),(0,u.jsx)(o.eW,{children:(0,u.jsx)(c.Z,{id:"exampleDisableRange",label:"Disable range",formText:"Its value ".concat(e.values.exampleDisableRange),children:(0,u.jsx)(d.Z,{type:"range",onChange:e.handleChange,value:e.values.exampleDisableRange,disabled:!0})})})]})}),(0,u.jsx)("div",{className:"col-lg-6",children:(0,u.jsxs)(o.ZP,{stretch:!0,children:[(0,u.jsxs)(o.Ol,{children:[(0,u.jsxs)(o.oL,{icon:"Visibility",iconColor:"warning",children:[(0,u.jsx)(o.ll,{children:"readOnly"}),(0,u.jsx)(o.md,{children:"Input"})]}),(0,u.jsx)(o.T$,{children:(0,u.jsx)(x.Z,{to:"/story/forms-input--range&args=readOnly:true"})})]}),(0,u.jsx)(o.Ol,{children:(0,u.jsx)(h.Z,{children:"readOnly: PropTypes.bool,"})}),(0,u.jsx)(o.eW,{children:(0,u.jsx)(c.Z,{id:"exampleReadOnlyRange",label:"Read only range",formText:"Its value ".concat(e.values.exampleReadOnlyRange),children:(0,u.jsx)(d.Z,{type:"range",onChange:e.handleChange,value:e.values.exampleReadOnlyRange,readOnly:!0})})})]})}),(0,u.jsx)("div",{className:"col-lg-6",children:(0,u.jsxs)(o.ZP,{stretch:!0,children:[(0,u.jsxs)(o.Ol,{children:[(0,u.jsxs)(o.oL,{icon:"Settings",iconColor:"success",children:[(0,u.jsx)(o.ll,{children:"min & max"}),(0,u.jsx)(o.md,{children:"Input"})]}),(0,u.jsx)(o.T$,{children:(0,u.jsx)(x.Z,{to:"/story/forms-input--range&args=min:20;max:30"})})]}),(0,u.jsx)(o.Ol,{children:(0,u.jsxs)(h.Z,{children:[(0,u.jsx)("div",{children:"min: PropTypes.number,"}),(0,u.jsx)("div",{children:"max: PropTypes.number,"})]})}),(0,u.jsx)(o.eW,{children:(0,u.jsx)(c.Z,{id:"exampleMinMaxRange",label:"Example range",formText:"Its value ".concat(e.values.exampleMinMaxRange,". You can set minimum 0 maximum 5."),children:(0,u.jsx)(d.Z,{type:"range",min:0,max:5,onChange:e.handleChange,value:e.values.exampleMinMaxRange})})})]})}),(0,u.jsx)("div",{className:"col-lg-6",children:(0,u.jsxs)(o.ZP,{stretch:!0,children:[(0,u.jsxs)(o.Ol,{children:[(0,u.jsxs)(o.oL,{icon:"Swipe",iconColor:"secondary",children:[(0,u.jsx)(o.ll,{children:"step"}),(0,u.jsx)(o.md,{children:"Input"})]}),(0,u.jsx)(o.T$,{children:(0,u.jsx)(x.Z,{to:"/story/forms-input--range&args=step:25;"})})]}),(0,u.jsx)(o.Ol,{children:(0,u.jsx)(h.Z,{children:"step: PropTypes.number,"})}),(0,u.jsx)(o.eW,{children:(0,u.jsx)(c.Z,{id:"exampleStep",label:"Example range",formText:"Its value ".concat(e.values.exampleStep,"."),children:(0,u.jsx)(d.Z,{type:"range",min:0,max:10,step:.1,onChange:e.handleChange,value:e.values.exampleStep})})})]})})]})})]})}}}]);
//# sourceMappingURL=477.8e6a5eb5.chunk.js.map