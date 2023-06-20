"use strict";(self.webpackChunkfacit=self.webpackChunkfacit||[]).push([[2607],{37003:function(e,l,n){n(72791);var r=n(81694),s=n.n(r),i=n(50022),a=n(80184),t=function(e){var l=e.children,n=e.className,r=e.color;return(0,a.jsx)(i.ZP,{color:r,isLight:!0,shadow:"md",borderWidth:0,icon:"Info",className:s()("flex-nowrap","w-100","mb-0",n),children:l})};t.defaultProps={className:void 0,color:"warning"},l.Z=t},57e3:function(e,l,n){n(72791);var r=n(66867),s=n(50022),i=n(73549),a=n(80184),t=(0,r.QM)({prism:{padding:"0 !important",margin:"0 !important",background:"transparent !important",borderRadius:"0 !important","& > code":{color:"#2e3f96 !important",fontSize:"0.875rem !important"}}}),o=function(e){var l=e.children,n=e.isPrism,r=t();return(0,a.jsx)(s.ZP,{color:"info",isLight:!0,shadow:"md",borderWidth:0,icon:"CustomReact",className:"flex-nowrap w-100",children:n?(0,a.jsx)(i.Z,{code:l,language:"jsx",className:r.prism}):(0,a.jsx)("code",{children:l})})};o.defaultProps={isPrism:!1},l.Z=o},31024:function(e,l,n){var r=n(1413),s=n(45987),i=(n(72791),n(11592)),a=n(80184),t=["to"];l.Z=function(e){var l=e.to,n=(0,s.Z)(e,t);return(0,a.jsx)(i.Z,(0,r.Z)((0,r.Z)({color:"storybook",icon:"CustomStorybook",tag:"a",target:"_blank",isLight:!0,href:"".concat("https://facit-story.omtanke.studio/?path=").concat(l)},n),{},{children:"Storybook"}))}},45328:function(e,l,n){var r=n(1413),s=n(45987),i=(n(72791),n(80184)),a=["to","children"];l.Z=function(e){var l=e.to,n=e.children,t=(0,s.Z)(e,a);return(0,i.jsx)("a",(0,r.Z)((0,r.Z)({href:"".concat("https://facit-story.omtanke.studio/?path=").concat(l),target:"_blank",rel:"noreferrer"},t),{},{children:n}))}},5081:function(e,l,n){n.d(l,{g:function(){return d}});var r=n(72791),s=n(81694),i=n.n(s),a=n(11087),t=n(16843),o=n(63542),c=n(80184),d=function(e){var l=e.children,n=e.ariaLabel,s=e.className,o=e.tag,d=e.to,h=e.isActive,m=e.divider;return(0,c.jsxs)(t.Z,{tag:o,className:i()("breadcrumb-item",{active:h},s),"aria-current":h?"page":null,"aria-label":n||l,children:[m&&"string"!==typeof m&&(0,r.cloneElement)(m,{className:i()("breadcrumb-icon",m.props.className)}),h?l:(0,c.jsx)(a.OL,{to:d,"aria-label":n,children:l})]})};d.defaultProps={className:void 0,ariaLabel:void 0,tag:"li",isActive:!1,divider:void 0};var h=function(e){var l=e.children,n=e.list,s=e.tag,i=e.listTag,a=e.itemTag,o=e.ariaLabel,h=e.autoActive,m=e.isToHome,x=e.divider,u="string"!==x&&x;return(0,c.jsx)(t.Z,{tag:s,"aria-label":o,style:x?{"--bs-breadcrumb-divider":"string"===typeof x?"'".concat(x,"'"):"none"}:null,children:(0,c.jsxs)(t.Z,{tag:i,className:"breadcrumb",children:[m&&(0,c.jsx)(d,{to:"/",ariaLabel:"Home",children:m}),n?n.map((function(e,l){return(0,c.jsx)(d,{tag:e.tag||a,to:e.to,isActive:h&&n.length===l+1,divider:u,children:e.title},e.title)})):r.Children.map(l,(function(e,n){return(0,r.cloneElement)(e,{tag:e.props.tag||a,isActive:h&&l.length===n+1,divider:e.props.divider||u})}))]})})};h.defaultProps={children:void 0,tag:"nav",listTag:"ol",itemTag:"li",ariaLabel:"breadcrumb",list:void 0,autoActive:!0,isToHome:(0,c.jsx)(o.Z,{icon:"HolidayVillage"}),divider:(0,c.jsx)(o.Z,{icon:"ChevronRight"})},l.Z=h},52607:function(e,l,n){n.r(l);var r=n(29439),s=n(72791),i=n(26438),a=n(15224),t=n(5081),o=n(47930),c=n(38493),d=n(96517),h=n(67827),m=n(2926),x=n(19841),u=n(57e3),p=n(37003),j=n(12578),g=n(11592),f=n(79490),b=n(54452),v=n(29944),Z=n(45328),y=n(31024),N=n(7134),T=n(80184);l.default=function(){var e=(0,s.useState)(!1),l=(0,r.Z)(e,2),n=l[0],C=l[1],S=(0,i.TA)({initialValues:{formPrefix:"",formName:"",formMiddleName:"",formSurName:"",formEmailAddress:"",formPhone:"",formFile:"",exampleEvent:""},onSubmit:function(e){}}),P=(0,i.TA)({initialValues:{exampleEvent:"",exampleEventTextarea:""},onSubmit:function(e){}});(0,s.useEffect)((function(){return(0,b.Z)("Trigger onChange","This input trigger onChange"),function(){}}),[P.values.exampleEvent]),(0,s.useEffect)((function(){return(0,b.Z)("Trigger onChange","This input trigger onChange"),function(){}}),[P.values.exampleEventTextarea]);return(0,T.jsxs)(c.Z,{title:N.XZ.forms.subMenu.formControl.text,children:[(0,T.jsxs)(a.ZP,{children:[(0,T.jsx)(a.Vv,{children:(0,T.jsx)(t.Z,{list:[{title:"Forms",to:"/forms"},{title:"Form Controls",to:"/forms/form-controls"}]})}),(0,T.jsx)(a.$o,{children:(0,T.jsxs)(v.ZP,{children:[(0,T.jsx)(v.Z_,{children:(0,T.jsx)(g.Z,{color:"storybook",icon:"CustomStorybook",isLight:!0,children:"Storybook"})}),(0,T.jsxs)(v.h_,{isAlignmentEnd:!0,children:[(0,T.jsx)(v.hP,{children:(0,T.jsx)(Z.Z,{to:"/story/forms-input--default",children:"Input"})}),(0,T.jsx)(v.hP,{children:(0,T.jsx)(Z.Z,{to:"/story/forms-textarea--default",children:"Textarea"})})]})]})})]}),(0,T.jsx)(o.Z,{children:(0,T.jsxs)("div",{className:"row",children:[(0,T.jsx)("div",{className:"col-12",children:(0,T.jsxs)(d.ZP,{children:[(0,T.jsx)(d.Ol,{children:(0,T.jsx)(d.oL,{icon:"DriveFileRename",children:(0,T.jsx)(d.ll,{tag:"h2",children:"Form controls"})})}),(0,T.jsx)(d.eW,{children:(0,T.jsxs)("h3",{className:"text-muted",children:["Give textual form controls like ",(0,T.jsx)("code",{children:"<Input>"}),"s and ",(0,T.jsx)("code",{children:"<Textarea>"}),"s an upgrade with custom styles, sizing, focus states, and more."]})}),(0,T.jsx)(d.Ol,{children:(0,T.jsxs)(d.oL,{icon:"Assignment",children:[(0,T.jsx)(d.ll,{children:"General Usage"}),(0,T.jsx)(d.md,{children:"Input and Textarea"})]})}),(0,T.jsx)(d.eW,{children:(0,T.jsxs)("div",{className:"row",children:[(0,T.jsx)("div",{className:"col-lg-6",children:(0,T.jsx)(d.TY,{className:"h-100",children:"\n<Input\n\ttype={ String } // 'text' || 'email' || 'password' || 'file' || 'color' || 'date' || 'datetime-local' || 'hidden' || 'month' || 'number' || 'range' || 'search' || 'tel' || 'time' || 'url' || 'week'\n\tid={ String }\n\tname={ String }\n\tclassName={ String }\n\tplaceholder={ String }\n\tautoComplete={ String }\n\tariaDescribedby={ String }\n\tariaLabelledby={ String }\n\tariaLabel={ String }\n\tlist={ Array } // ['...','...', ...]\n\ttitle={ String }\n\tsize={ String } // null || 'sm' || 'lg'\n\tdisabled={ Boolean }\n\treadOnly={ Boolean || String } // false || true || 'plaintext'\n\tmultiple={ Boolean }\n\tvalue={ String || Object}\n\tonBlur={ Function }\n\tonChange={ Function }\n\tonFocus={ Function }\n\tonInput={ Function }\n\tonInvalid={ Function }\n\tonSelect={ Function }\n \t{...props}/>"})}),(0,T.jsx)("div",{className:"col-lg-6",children:(0,T.jsx)(d.TY,{className:"h-100",children:"\n<Textarea\n\tid={ String }\n\tname={ String }\n\tclassName={ String }\n\tplaceholder={ String }\n\tautoComplete={ String }\n\tariaDescribedby={ String }\n\tariaLabelledby={ String }\n\tariaLabel={ String }\n\ttitle={ String }\n\tsize={ String } // null || 'sm' || 'lg'\n\tdisabled={ Boolean }\n\treadOnly={ Boolean || String } // false || true || 'plaintext'\n\tvalue={ String || Object}\n\tonBlur={ Function }\n\tonChange={ Function }\n\tonFocus={ Function }\n\tonInput={ Function }\n\tonInvalid={ Function }\n\tonSelect={ Function }\n \t{...props}/>"})})]})})]})}),(0,T.jsx)("div",{className:"col-lg-6",children:(0,T.jsxs)(d.ZP,{stretch:!0,children:[(0,T.jsxs)(d.Ol,{children:[(0,T.jsxs)(d.oL,{icon:"Brush",children:[(0,T.jsx)(d.ll,{children:"type"}),(0,T.jsx)(d.md,{children:"Input"})]}),(0,T.jsx)(d.T$,{children:(0,T.jsx)(y.Z,{to:"/story/forms-input--default"})})]}),(0,T.jsx)(d.Ol,{children:(0,T.jsx)(u.Z,{children:"type: PropTypes.oneOf([ 'text', 'email', 'password', 'file', 'color', 'date', 'datetime-local', 'hidden', 'month', 'number', 'range', 'search', 'tel', 'time', 'url', 'week', ]),"})}),(0,T.jsx)(d.eW,{children:(0,T.jsx)("form",{className:"row g-4",children:["text","email","password","file","color","date","datetime-local","hidden","month","number","range","search","tel","time","url","week"].map((function(e){return(0,T.jsx)("div",{className:"col-12",children:(0,T.jsx)(h.Z,{id:"exampleTypes--".concat(e),label:e,formText:(0,T.jsxs)(T.Fragment,{children:["The type of this input is ",(0,T.jsx)("b",{children:e})]}),isColForLabel:!0,labelClassName:"col-sm-2 text-capitalize",childWrapperClassName:"col-sm-10",children:(0,T.jsx)(m.Z,{type:e,autoComplete:["password","email"].includes(e)?"password"===e?"current-password":"email"===e&&"username":void 0,placeholder:"Supports ".concat(e," type placeholder"),"aria-label":".form-control-lg example"})})},e)}))})})]})}),(0,T.jsx)("div",{className:"col-lg-6",children:(0,T.jsxs)(d.ZP,{stretch:!0,children:[(0,T.jsxs)(d.Ol,{children:[(0,T.jsxs)(d.oL,{icon:"Info",iconColor:"info",children:[(0,T.jsx)(d.ll,{children:"placeholder"}),(0,T.jsx)(d.md,{children:"Input and Textarea"})]}),(0,T.jsx)(d.T$,{children:(0,T.jsx)(y.Z,{to:"/story/forms-input--with-placeholder"})})]}),(0,T.jsx)(d.Ol,{children:(0,T.jsx)(u.Z,{children:"placeholder: PropTypes.string,"})}),(0,T.jsx)(d.eW,{children:(0,T.jsxs)("form",{className:"row g-4",children:[["text","email","password","number","search","tel","url"].map((function(e){return(0,T.jsx)("div",{className:"col-12",children:(0,T.jsx)(h.Z,{id:"exampleTypesPlaceholder--".concat(e),label:e,formText:(0,T.jsxs)(T.Fragment,{children:["The type of this input is ",(0,T.jsx)("b",{children:e})]}),isColForLabel:!0,labelClassName:"col-sm-2 text-capitalize",childWrapperClassName:"col-sm-10",children:(0,T.jsx)(m.Z,{type:e,autoComplete:["password","email"].includes(e)?"password"===e?"current-password":"email"===e&&"username":void 0,placeholder:"Supports ".concat(e," type placeholder"),"aria-label":".form-control-lg example"})})},e)})),(0,T.jsx)("div",{className:"col-12",children:(0,T.jsx)(h.Z,{id:"exampleTypesPlaceholder--textarea",label:"textarea",formText:(0,T.jsxs)(T.Fragment,{children:["The type of this input is ",(0,T.jsx)("b",{children:"textarea"})]}),isColForLabel:!0,labelClassName:"col-sm-2 text-capitalize",childWrapperClassName:"col-sm-10",children:(0,T.jsx)(x.Z,{placeholder:"Supports textarea type placeholder","aria-label":".form-control-lg example"})})})]})})]})}),(0,T.jsx)("div",{className:"col-lg-6",children:(0,T.jsxs)(d.ZP,{stretch:!0,children:[(0,T.jsxs)(d.Ol,{children:[(0,T.jsxs)(d.oL,{icon:"AutoFixHigh",iconColor:"warning",children:[(0,T.jsx)(d.ll,{children:"autoComplete"}),(0,T.jsx)(d.md,{children:"Input and Textarea"})]}),(0,T.jsx)(d.T$,{children:(0,T.jsx)(y.Z,{to:"/story/forms-input--auto-complete"})})]}),(0,T.jsx)(d.Ol,{children:(0,T.jsx)(u.Z,{children:"autoComplete: PropTypes.string,"})}),(0,T.jsx)(d.eW,{children:(0,T.jsxs)("form",{className:"row g-4",children:[(0,T.jsx)(h.Z,{className:"col-12",id:"exampleAC--name",label:"Name",children:(0,T.jsx)(m.Z,{placeholder:"Full Name",autoComplete:"cc-name"})}),(0,T.jsx)(h.Z,{className:"col-6",id:"exampleAC--cc-number",label:"Credit Card Number",children:(0,T.jsx)(m.Z,{type:"number",autoComplete:"cc-number",placeholder:"Digit Numbers",required:!0})}),(0,T.jsx)(h.Z,{className:"col-3",id:"exampleAC--cvc-number",label:"Name",children:(0,T.jsx)(m.Z,{type:"number",autoComplete:"cc-csc",placeholder:"CVC Number",required:!0})}),(0,T.jsx)(h.Z,{className:"col-3",id:"exampleAC--expiry",label:"Expiry",children:(0,T.jsx)(m.Z,{type:"text",autoComplete:"cc-exp",placeholder:"MM/YYYY",required:!0})})]})}),(0,T.jsx)(d.iR,{children:(0,T.jsxs)(p.Z,{children:["Credit card form is shown as an example. For detailed usage, you can"," ",(0,T.jsx)("a",{href:"https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill",target:"_blank",rel:"noreferrer",children:"visit"}),"."]})})]})}),(0,T.jsx)("div",{className:"col-lg-6",children:(0,T.jsxs)(d.ZP,{stretch:!0,children:[(0,T.jsxs)(d.Ol,{children:[(0,T.jsxs)(d.oL,{icon:"Straighten",children:[(0,T.jsx)(d.ll,{children:"size"}),(0,T.jsx)(d.md,{children:"Input and Textarea"})]}),(0,T.jsx)(d.T$,{children:(0,T.jsx)(y.Z,{to:"/story/forms-input--default&args=size:sm"})})]}),(0,T.jsx)(d.Ol,{children:(0,T.jsx)(u.Z,{children:"size: PropTypes.oneOf(['lg', 'sm']),"})}),(0,T.jsxs)(d.eW,{children:[(0,T.jsxs)("div",{className:"row mb-4",children:[(0,T.jsx)(h.Z,{className:"col",id:"exampleSizeInputLg",label:"Large input",children:(0,T.jsx)(m.Z,{size:"lg",placeholder:"Placeholder","aria-label":".form-control-lg example"})}),(0,T.jsx)(h.Z,{className:"col",id:"exampleSizeInput",label:"Default input",children:(0,T.jsx)(m.Z,{placeholder:"Placeholder","aria-label":"default size example"})}),(0,T.jsx)(h.Z,{className:"col",id:"exampleSizeInputSm",label:"Small input",children:(0,T.jsx)(m.Z,{size:"sm",placeholder:"Placeholder","aria-label":".form-control-sm example"})})]}),(0,T.jsxs)("div",{className:"row",children:[(0,T.jsx)(h.Z,{className:"col",id:"exampleSizeTextareaLg",label:"Large textarea",children:(0,T.jsx)(x.Z,{size:"lg",placeholder:"Placeholder"})}),(0,T.jsx)(h.Z,{className:"col",id:"exampleSizeTextarea",label:"Default textarea",children:(0,T.jsx)(x.Z,{placeholder:"Placeholder"})}),(0,T.jsx)(h.Z,{className:"col",id:"exampleSizeTextareaLg",label:"Small textarea",children:(0,T.jsx)(x.Z,{size:"sm",placeholder:"Placeholder"})})]})]}),(0,T.jsx)(d.iR,{children:(0,T.jsxs)(p.Z,{children:["Set heights using size props like ",(0,T.jsx)("code",{children:"lg"})," and"," ",(0,T.jsx)("code",{children:"sm"}),"."]})})]})}),(0,T.jsx)("div",{className:"col-lg-6",children:(0,T.jsxs)(d.ZP,{stretch:!0,children:[(0,T.jsxs)(d.Ol,{children:[(0,T.jsxs)(d.oL,{icon:"GppBad",iconColor:"danger",children:[(0,T.jsx)(d.ll,{children:"disabled"}),(0,T.jsx)(d.md,{children:"Input and Textarea"})]}),(0,T.jsx)(d.T$,{children:(0,T.jsx)(y.Z,{to:"/story/forms-input--default&args=disabled:true"})})]}),(0,T.jsx)(d.Ol,{children:(0,T.jsx)(u.Z,{children:"disabled: PropTypes.bool,"})}),(0,T.jsxs)(d.eW,{children:[(0,T.jsxs)("div",{className:"row g-4 mb-4",children:[(0,T.jsx)(h.Z,{className:"col",id:"exampleDisableInput",label:"Disabled input",children:(0,T.jsx)(m.Z,{placeholder:"disabled input","aria-label":"Disabled input example",disabled:!0})}),(0,T.jsx)(h.Z,{className:"col",id:"exampleDisableReadOnlyInput",label:"Disabled and readOnly input",children:(0,T.jsx)(m.Z,{placeholder:"disabled readOnly input","aria-label":"Disabled input example",disabled:!0,readOnly:!0})})]}),(0,T.jsxs)("div",{className:"row g-4",children:[(0,T.jsx)(h.Z,{className:"col",id:"exampleDisableTextarea",label:"Disabled textarea",children:(0,T.jsx)(x.Z,{placeholder:"disabled textarea","aria-label":"Disabled textarea example",disabled:!0})}),(0,T.jsx)(h.Z,{className:"col",id:"exampleDisableReadOnlyTextarea",label:"Disabled and readOnly textarea",children:(0,T.jsx)(x.Z,{placeholder:"disabled readOnly textarea","aria-label":"Disabled textarea example",disabled:!0,readOnly:!0})})]})]}),(0,T.jsx)(d.iR,{children:(0,T.jsxs)(p.Z,{children:[(0,T.jsxs)("p",{children:["Add the ",(0,T.jsx)("code",{children:"disabled"})," boolean attribute on an input to give it a grayed out appearance and remove pointer events."]}),(0,T.jsxs)("p",{children:["A ",(0,T.jsx)("code",{children:"disabled"})," element isn't editable and isn't sent on submit."]})]})})]})}),(0,T.jsx)("div",{className:"col-lg-6",children:(0,T.jsxs)(d.ZP,{stretch:!0,children:[(0,T.jsxs)(d.Ol,{children:[(0,T.jsxs)(d.oL,{icon:"Visibility",iconColor:"info",children:[(0,T.jsx)(d.ll,{children:"readOnly"}),(0,T.jsx)(d.md,{children:"Input and Textarea"})]}),(0,T.jsx)(d.T$,{children:(0,T.jsx)(y.Z,{to:"/story/forms-input--default&args=readOnly:true"})})]}),(0,T.jsx)(d.Ol,{children:(0,T.jsx)(u.Z,{children:"readOnly: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(['plaintext'])]),"})}),(0,T.jsxs)(d.eW,{children:[(0,T.jsxs)(d.ZP,{className:"rad",children:[(0,T.jsx)(d.Ol,{children:(0,T.jsxs)(d.oL,{children:[(0,T.jsxs)(d.ll,{children:["readOnly ",(0,T.jsx)("small",{children:"true"})]}),(0,T.jsx)(d.md,{children:"Input and Textarea"})]})}),(0,T.jsx)(d.eW,{children:(0,T.jsx)(h.Z,{id:"exampleReadOnlyInput",label:"Read only input",children:(0,T.jsx)(m.Z,{placeholder:"Readonly input here...","aria-label":"readonly input example",readOnly:!0})})}),(0,T.jsx)(d.iR,{children:(0,T.jsxs)(p.Z,{children:["Add the ",(0,T.jsx)("code",{children:"readOnly"})," boolean attribute on an input to prevent modification of the input\u2019s value. Read-only inputs appear lighter (just like disabled inputs), but retain the standard cursor."]})})]}),(0,T.jsxs)(d.ZP,{children:[(0,T.jsx)(d.Ol,{children:(0,T.jsxs)(d.oL,{children:[(0,T.jsxs)(d.ll,{children:["readOnly ",(0,T.jsx)("small",{children:"\"plaintext'"})]}),(0,T.jsx)(d.md,{children:"Input and Textarea"})]})}),(0,T.jsx)(d.eW,{children:(0,T.jsx)(h.Z,{id:"staticEmail",label:"Email",formText:"This email address is an input value",children:(0,T.jsx)(m.Z,{readOnly:"plaintext",value:"email@example.com",autoComplete:"username"})})}),(0,T.jsx)(d.iR,{children:(0,T.jsxs)(p.Z,{children:["If you want to have"," ",(0,T.jsx)("code",{children:"<Input readOnly/>"})," components in your form styled as plain text, use the"," ",(0,T.jsx)("code",{children:'readOnly="plaintext"'})," props to remove the default form field styling and preserve the correct margin and padding."]})})]})]})]})}),(0,T.jsx)("div",{className:"col-lg-6",children:(0,T.jsxs)(d.ZP,{stretch:!0,tag:"form",onSubmit:S.handleSubmit,children:[(0,T.jsx)(d.Ol,{children:(0,T.jsxs)(d.oL,{icon:"EditAttributes",iconColor:"info",children:[(0,T.jsx)(d.ll,{children:"value"}),(0,T.jsx)(d.md,{children:"Input and Textarea"})]})}),(0,T.jsx)(d.eW,{children:(0,T.jsxs)("div",{className:"row g-4",children:[(0,T.jsx)(h.Z,{className:"col-md-2",id:"formPrefix",label:"Prefix",children:(0,T.jsx)(m.Z,{placeholder:"Dr.",autoComplete:"honorific-prefix",onChange:S.handleChange,value:S.values.formPrefix})}),(0,T.jsx)(h.Z,{className:"col-md-3",id:"formName",label:"Name",children:(0,T.jsx)(m.Z,{placeholder:"Timothy",autoComplete:"given-name",onChange:S.handleChange,value:S.values.formName})}),(0,T.jsx)(h.Z,{className:"col-md-3",id:"formMiddleName",label:"Middle Name",children:(0,T.jsx)(m.Z,{placeholder:"John",autoComplete:"additional-name",onChange:S.handleChange,value:S.values.formMiddleName})}),(0,T.jsx)(h.Z,{className:"col-md-4",id:"formSurName",label:"Sur Name",children:(0,T.jsx)(m.Z,{placeholder:"Doe",autoComplete:"family-name",onChange:S.handleChange,value:S.values.formSurName})}),(0,T.jsx)(h.Z,{className:"col-lg-6",id:"formEmailAddress",label:"Email Address",children:(0,T.jsx)(m.Z,{type:"email",placeholder:"john@domain.com",autoComplete:"email",onChange:S.handleChange,value:S.values.formEmailAddress})}),(0,T.jsx)(h.Z,{className:"col-lg-6",id:"formPhone",label:"Phone",children:(0,T.jsx)(m.Z,{type:"tel",placeholder:"+1 (999) 999-9999",autoComplete:"tel",mask:"+1 (999) 999-9999",onChange:S.handleChange,value:S.values.formPhone})}),(0,T.jsx)(h.Z,{className:"col-12",id:"formFile",label:"Profile picture",children:(0,T.jsx)(m.Z,{type:"file",onChange:S.handleChange,value:S.values.formFile})})]})}),(0,T.jsxs)(d.iR,{children:[(0,T.jsx)(d.gn,{children:(0,T.jsx)(g.Z,{type:"reset",color:"info",isOutline:!0,onClick:S.resetForm,children:"Reset"})}),(0,T.jsx)(d.M3,{children:(0,T.jsx)(g.Z,{type:"submit",color:"info",onClick:function(){return C(!0)},children:"Submit"})})]})]})}),(0,T.jsx)("div",{className:"col-lg-6",children:(0,T.jsxs)(d.ZP,{children:[(0,T.jsxs)(d.Ol,{children:[(0,T.jsxs)(d.oL,{icon:"Assignment",children:[(0,T.jsx)(d.ll,{children:"list"}),(0,T.jsx)(d.md,{children:"Input"})]}),(0,T.jsx)(d.T$,{children:(0,T.jsx)(y.Z,{to:"/story/forms-input--with-list"})})]}),(0,T.jsx)(d.Ol,{children:(0,T.jsx)(u.Z,{children:"list: PropTypes.arrayOf(PropTypes.string),"})}),(0,T.jsxs)(d.eW,{children:[(0,T.jsx)(j.Z,{htmlFor:"exampleDataList",children:"Datalist example"}),(0,T.jsx)(m.Z,{list:["San Francisco","New York","Seattle","Los Angeles","Chicago"],id:"exampleDataList",placeholder:"Type to search..."})]}),(0,T.jsx)(d.iR,{children:(0,T.jsxs)(p.Z,{children:[(0,T.jsxs)("p",{children:["Datalists allow you to create a group of"," ",(0,T.jsx)("code",{children:"<option>"}),"s that can be accessed (and autocompleted) from within an ",(0,T.jsx)("code",{children:"<input>"}),". These are similar to ",(0,T.jsx)("code",{children:"<select>"})," elements, but come with more menu styling limitations and differences. While most browsers and operating systems include some support for ",(0,T.jsx)("code",{children:"<datalist>"})," elements, their styling is inconsistent at best."]}),(0,T.jsxs)("p",{children:["Learn more about"," ",(0,T.jsx)("a",{href:"https://caniuse.com/datalist",target:"_blank",rel:"noreferrer",children:"support for datalist elements."})]})]})})]})}),(0,T.jsx)("div",{className:"col-lg-6",children:(0,T.jsxs)(d.ZP,{tag:"form",onSubmit:P.handleSubmit,children:[(0,T.jsx)(d.Ol,{children:(0,T.jsxs)(d.oL,{icon:"Bolt",iconColor:"warning",children:[(0,T.jsx)(d.ll,{children:"onBlur, onChange, onFocus, onInput, onInvalid, onSelect,"}),(0,T.jsx)(d.md,{children:"Input and Textarea"})]})}),(0,T.jsx)(d.Ol,{children:(0,T.jsxs)(u.Z,{children:[(0,T.jsx)("div",{children:"onBlur: PropTypes.func,"}),(0,T.jsx)("div",{children:"onChange: PropTypes.func,"}),(0,T.jsx)("div",{children:"onFocus: PropTypes.func,"}),(0,T.jsx)("div",{children:"onInput: PropTypes.func,"}),(0,T.jsx)("div",{children:"onInvalid: PropTypes.func,"}),(0,T.jsx)("div",{children:"onSelect: PropTypes.func,"})]})}),(0,T.jsx)(d.eW,{children:(0,T.jsxs)("div",{className:"row g-4",children:[(0,T.jsx)(h.Z,{id:"exampleEvent",className:"col-12",label:"Events",children:(0,T.jsx)(m.Z,{required:!0,placeholder:"Type to search...",value:S.values.exampleEvent,onBlur:function(){return(0,b.Z)("Trigger onBlur","This input trigger onBlur")},onChange:P.handleChange,onFocus:function(){return(0,b.Z)("Trigger onFocus","This input trigger onFocus")},onInput:function(){return(0,b.Z)("Trigger onInput","This input trigger onInput")},onInvalid:function(){return(0,b.Z)("Trigger onInvalid","This input trigger onInvalid")},onSelect:function(){return(0,b.Z)("Trigger onFocus","This input trigger onSelect")}})}),(0,T.jsx)(h.Z,{id:"exampleEventTextarea",className:"col-12",label:"Events",children:(0,T.jsx)(x.Z,{required:!0,placeholder:"Type to search...",onBlur:function(){return(0,b.Z)("Trigger onBlur","This input trigger onBlur")},onChange:P.handleChange,onFocus:function(){return(0,b.Z)("Trigger onFocus","This input trigger onFocus")},onInput:function(){return(0,b.Z)("Trigger onInput","This input trigger onInput")},onInvalid:function(){return(0,b.Z)("Trigger onInvalid","This input trigger onInvalid")},onSelect:function(){return(0,b.Z)("Trigger onFocus","This input trigger onSelect")}})})]})}),(0,T.jsx)(d.iR,{children:(0,T.jsx)(d.M3,{children:(0,T.jsx)(g.Z,{type:"submit",color:"info",children:"Submit"})})}),(0,T.jsx)(d.iR,{children:(0,T.jsx)(p.Z,{children:(0,T.jsxs)("ul",{children:[(0,T.jsxs)("li",{children:[(0,T.jsx)("b",{children:"onBlur"})," Fires the moment that the element loses focus"]}),(0,T.jsxs)("li",{children:[(0,T.jsx)("b",{children:"onChange"})," Fires the moment when the value of the element is changed"]}),(0,T.jsxs)("li",{children:[(0,T.jsx)("b",{children:"onFocus"})," Fires the moment when the element gets focus"]}),(0,T.jsxs)("li",{children:[(0,T.jsx)("b",{children:"onInput"})," Script to be run when an element gets user input"]}),(0,T.jsxs)("li",{children:[(0,T.jsx)("b",{children:"onInvalid"})," Script to be run when an element is invalid"]}),(0,T.jsxs)("li",{children:[(0,T.jsx)("b",{children:"onSelect"})," Fires after some text has been selected in an element"]})]})})})]})}),(0,T.jsxs)(f.ZP,{isOpen:n,setIsOpen:C,titleId:"exampleModalLabel",children:[(0,T.jsx)(f.xB,{children:(0,T.jsx)(f.r6,{id:"exampleModalLabel",children:"Form Values"})}),(0,T.jsx)(f.fe,{children:(0,T.jsxs)("div",{className:"row g-4",children:[(0,T.jsx)("div",{className:"col-3",children:(0,T.jsx)("b",{children:"Name:"})}),(0,T.jsxs)("div",{className:"col-9",children:[S.values.formPrefix&&"".concat(S.values.formPrefix," "),S.values.formName&&"".concat(S.values.formName," "),S.values.formMiddleName&&"".concat(S.values.formMiddleName," "),S.values.formSurName]}),(0,T.jsx)("div",{className:"col-3",children:(0,T.jsx)("b",{children:"Mail:"})}),(0,T.jsx)("div",{className:"col-9",children:S.values.formEmailAddress}),(0,T.jsx)("div",{className:"col-3",children:(0,T.jsx)("b",{children:"Phone:"})}),(0,T.jsx)("div",{className:"col-9",children:S.values.formPhone})]})}),(0,T.jsx)(f.mz,{children:(0,T.jsx)(g.Z,{color:"info",isOutline:!0,className:"border-0",onClick:function(){return C(!1)},children:"Close"})})]})]})})]})}}}]);
//# sourceMappingURL=2607.9c983990.chunk.js.map