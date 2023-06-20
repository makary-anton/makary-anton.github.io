"use strict";(self.webpackChunkfacit=self.webpackChunkfacit||[]).push([[8749],{54461:function(e,i,a){var t=a(1413),s=a(4942),n=a(45987),l=(a(72791),a(81694)),u=a.n(l),r=a(56424),o=a(80184),c=["children","className","color","shadow","rounded","isLight"],d=function(e){var i,a=e.children,l=e.className,d=e.color,m=e.shadow,p=e.rounded,g=e.isLight,v=(0,n.Z)(e,c),b=(0,r.Z)().darkModeStatus;return(0,o.jsx)("span",(0,t.Z)((0,t.Z)({className:u()("badge",(i={},(0,s.Z)(i,"bg-".concat(d),!g),(0,s.Z)(i,"bg-l".concat(b?"o25":"10","-").concat(d),g),(0,s.Z)(i,"text-".concat(d),g),(0,s.Z)(i,"shadow".concat("default"!==m?"-".concat(m):""),!!m),(0,s.Z)(i,"rounded".concat("default"!==p?"-".concat(p):""),p),(0,s.Z)(i,"rounded-0","bottom"===p||"top"===p||"end"===p||"start"===p||0===p),i),l)},v),{},{children:a}))};d.defaultProps={className:void 0,color:"primary",rounded:null,shadow:null,isLight:!1},i.Z=d},46314:function(e,i,a){a.d(i,{E:function(){return r}});var t=a(1413),s=a(45987),n=(a(72791),a(80184)),l=["children","value","disabled","ariaLabelledby"],u=function(e){var i=e.children,a=e.value,u=e.disabled,r=e.ariaLabelledby,o=(0,s.Z)(e,l);return(0,n.jsx)("option",(0,t.Z)((0,t.Z)({value:a,disabled:u,"aria-labelledby":r||i},o),{},{children:i}))};u.defaultProps={disabled:!1,ariaLabelledby:null,value:void 0};var r=function(e){var i=e.list;return null===i||void 0===i?void 0:i.map((function(e){return(0,n.jsx)(u,(0,t.Z)((0,t.Z)({value:e.value},e),{},{children:e.text||e.label}),e.value)}))};i.Z=u},87020:function(e,i,a){var t=a(1413),s=a(4942),n=a(45987),l=a(72791),u=a(81694),r=a.n(u),o=a(46314),c=a(81827),d=a(80184),m=["id","name","className","children","required","placeholder","ariaDescribedby","ariaLabelledby","ariaLabel","list","multiple","title","size","disabled","value","defaultValue","isValid","isTouched","invalidFeedback","validFeedback","isValidMessage","isTooltipFeedback","onBlur","onChange","onFocus","onInput","onInvalid","onSelect"],p=(0,l.forwardRef)((function(e,i){var a,l=e.id,u=e.name,p=e.className,g=e.children,v=e.required,b=e.placeholder,f=e.ariaDescribedby,h=e.ariaLabelledby,N=e.ariaLabel,x=e.list,q=e.multiple,Z=e.title,y=e.size,S=e.disabled,C=e.value,M=e.defaultValue,I=e.isValid,j=e.isTouched,T=e.invalidFeedback,P=e.validFeedback,w=e.isValidMessage,E=e.isTooltipFeedback,A=e.onBlur,k=e.onChange,D=e.onFocus,F=e.onInput,R=e.onInvalid,L=e.onSelect,O=(0,n.Z)(e,m);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("select",(0,t.Z)((0,t.Z)({ref:i,id:l,className:r()("form-select",(a={},(0,s.Z)(a,"form-select-".concat(y),y),(0,s.Z)(a,"text-muted",""===C&&b),(0,s.Z)(a,"is-invalid",!I&&j&&T),(0,s.Z)(a,"is-valid",!I&&j&&!T),a),p),name:u,"aria-label":N,"aria-describedby":f,"aria-labelledby":h,multiple:q,disabled:S,title:Z,value:C,defaultValue:M,required:v,onBlur:A,onChange:k,onFocus:D,onInput:F,onInvalid:R,onSelect:L},O),{},{children:[b&&(0,d.jsx)(o.Z,{value:"",hidden:!0,children:b}),g||x&&(0,d.jsx)(o.E,{list:x})]})),w&&(0,d.jsx)(c.Z,{isTouched:j,invalidFeedback:T,validFeedback:P,isTooltip:E})]})}));p.displayName="Select",p.defaultProps={id:void 0,className:void 0,name:void 0,children:null,placeholder:void 0,multiple:!1,size:void 0,disabled:!1,required:!1,ariaDescribedby:void 0,ariaLabelledby:void 0,title:void 0,value:void 0,defaultValue:void 0,list:void 0,isTouched:!1,isValid:!1,invalidFeedback:void 0,validFeedback:void 0,isValidMessage:!0,isTooltipFeedback:!1,onBlur:void 0,onChange:void 0,onFocus:void 0,onInput:void 0,onInvalid:void 0,onSelect:void 0},i.Z=p},45368:function(e,i,a){var t=a(6539),s=a(72791);i.Z=function(e){var i=(0,t.rN)(),a=i.currentStep,n=i.setCurrentStep;(0,s.useEffect)((function(){a===e-1&&n(e)}),[a])}},18749:function(e,i,a){a.r(i);var t=a(1413),s=a(29439),n=a(72791),l=a(81694),u=a.n(l),r=a(26438),o=a(57689),c=a(47930),d=a(38493),m=a(2926),p=a(11592),g=a(87020),v=a(96517),b=a(54461),f=a(40908),h=a(7134),N=a(56424),x=a(45368),q=a(80184),Z=function(e){var i=e.id,a=e.image,t=e.title,s=e.description,l=e.tags,r=e.color;(0,x.Z)(15);var c=(0,N.Z)().darkModeStatus,d=(0,o.s0)(),m=(0,n.useCallback)((function(){return d("../".concat(h.j5.knowledge.subMenu.itemID.path,"/").concat(i))}),[d,i]);return(0,q.jsx)(v.ZP,{className:"cursor-pointer shadow-3d-primary shadow-3d-hover",onClick:m,"data-tour":t,children:(0,q.jsxs)(v.eW,{children:[(0,q.jsx)("div",{className:u()("ratio ratio-1x1","rounded-2","bg-l".concat(c?"o25":"10","-").concat(r),"mb-3"),children:(0,q.jsx)("img",{src:a,alt:"",width:"100%",height:"auto",className:"object-fit-contain p-3"})}),(0,q.jsx)(v.ll,{tag:"div",className:"h5",children:t}),(0,q.jsx)("p",{className:"text-muted truncate-line-2",children:s}),(0,q.jsx)("div",{className:"row g-2",children:!!l&&l.map((function(e){return(0,q.jsx)("div",{className:"col-auto",children:(0,q.jsx)(b.Z,{isLight:!0,color:e.color,className:"px-3 py-2",children:e.text})},e.text)}))})]})})};i.default=function(){var e=(0,N.Z)().darkModeStatus,i=(0,n.useState)(f.Z),a=(0,s.Z)(i,2),l=a[0],o=a[1],v=function(e,i){var a;return function(){for(var t=arguments.length,s=new Array(t),n=0;n<t;n++)s[n]=arguments[n];clearTimeout(a),a=setTimeout((function(){clearTimeout(a),e.apply(void 0,s)}),i)}},b=function(e){var i=function(e,i){var a=f.Z;return i&&(a=f.Z.filter((function(e){return e.categories.find((function(e){return e.value===i}))}))),a.filter((function(i){return i.title.toLowerCase().includes(e)||i.description.toLowerCase().includes(e)||i.content.toLowerCase().includes(e)||i.categories.find((function(i){return i.text.toLowerCase().includes(e)}))||i.tags.find((function(i){return i.text.toLowerCase().includes(e)}))}))}(e.search.toString().toLowerCase(),e.category);e.search||e.category?o(i):o(f.Z)},x=(0,r.TA)({initialValues:{search:"",category:""},onSubmit:b,onReset:function(){return o(f.Z)}});return(0,q.jsx)(d.Z,{title:h.j5.knowledge.subMenu.grid.text,children:(0,q.jsxs)(c.Z,{children:[(0,q.jsxs)("div",{className:"row",children:[(0,q.jsx)("div",{className:"col-12 text-center my-5",children:(0,q.jsx)("span",{className:"display-5 fw-bold",children:"Hello, May I help you?"})}),(0,q.jsx)("div",{className:"col-xxl-6 mx-auto text-center my-5","data-tour":"knowledge-filter",children:(0,q.jsxs)("form",{className:u()("row","pb-4 px-3 mx-0 g-4","rounded-3",["bg-l".concat(e?"o25":"10","-primary")]),onSubmit:x.handleSubmit,children:[(0,q.jsx)("div",{className:"col-md-5",children:(0,q.jsx)(g.Z,{id:"category",size:"lg",ariaLabel:"Category",placeholder:"All Category",list:Object.keys(f.a).map((function(e){return f.a[e]})),className:u()("rounded-1",{"bg-white":!e}),onChange:function(e){x.handleChange(e),e.target.value&&v((function(){return b((0,t.Z)((0,t.Z)({},x.values),{},{category:e.target.value}))}),1e3)()},value:x.values.category})}),(0,q.jsx)("div",{className:"col-md-5",children:(0,q.jsx)(m.Z,{id:"search",size:"lg",placeholder:"Type your question...",className:u()("rounded-1",{"bg-white":!e}),onChange:function(e){x.handleChange(e),e.target.value.length>2&&v((function(){return b((0,t.Z)((0,t.Z)({},x.values),{},{search:e.target.value}))}),1e3)(),0===e.target.value.length&&x.resetForm()},value:x.values.search})}),(0,q.jsx)("div",{className:"col-md-2",children:(0,q.jsx)(p.Z,{size:"lg",icon:"Close",color:"primary",className:"w-100",rounded:1,onClick:x.resetForm,type:"reset",isDisable:!(x.values.search||x.values.category),"aria-label":"Clear"})})]})})]}),(0,q.jsx)("div",{className:"row mb-5",children:l.map((function(e){return(0,q.jsx)("div",{className:"col-xl-3 col-lg-4 col-md-6",children:(0,q.jsx)(Z,(0,t.Z)({},e))},e.id)}))})]})})}},40908:function(e,i,a){a.d(i,{a:function(){return d}});var t=a(90884),s=a(36963),n=a(13861),l=a(87823),u=a(63726),r=a(69531),o=a(41741),c={NPM:{text:"NPM",color:o.Z.SUCCESS.name},YARN:{text:"Yarn",color:o.Z.DANGER.name},BOOTSTRAP:{text:"Bootstrap",color:o.Z.PRIMARY.name},DEPENDENCIES:{text:"Dependencies",color:o.Z.INFO.name}},d={DOCUMENTATION:{value:"documentation",text:"Documentation"},SETTINGS:{value:"settings",text:"Settings"},COLORS:{value:"colors",text:"Colors"}},m=[{id:1,title:"Utility API",description:"The utility API is a Sass-based tool to generate utility classes.",image:t,tags:[c.NPM,c.YARN,c.BOOTSTRAP],color:o.Z.WARNING.name,categories:[d.DOCUMENTATION,d.SETTINGS],content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer facilisis faucibus interdum. Donec dapibus fringilla elementum. Pellentesque et quam quis mauris suscipit laoreet. Integer a eleifend magna. Quisque iaculis massa sit amet molestie eleifend. Nunc id finibus massa, vel eleifend turpis. Maecenas interdum neque non neque porta venenatis. Duis nec viverra nisi. Aenean enim nulla, egestas at congue et, vehicula eget sem. Donec molestie bibendum fermentum. Sed tempor, augue sit amet scelerisque vehicula, lacus nunc eleifend tellus, at lobortis felis erat eu dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas libero mi, lacinia a purus sagittis, aliquam fringilla magna. Mauris commodo mollis iaculis. Cras metus mauris, tincidunt ac dapibus in, facilisis vel ipsum."},{id:2,title:"Background",description:"Convey meaning through background-color and add decoration with gradients.",image:s,tags:[c.NPM,c.YARN,c.DEPENDENCIES],color:o.Z.PRIMARY.name,categories:[d.DOCUMENTATION],content:"Aliquam sodales tempor ullamcorper. Quisque non nibh consequat, dapibus magna et, commodo erat. Proin fringilla nibh mollis, vestibulum dui a, laoreet purus. Aliquam vehicula libero est, ut ornare quam eleifend at. Cras accumsan interdum nulla ut accumsan. Duis ornare, est vel rutrum bibendum, magna odio vehicula sem, non hendrerit dui eros ac erat. Sed et justo ac elit pellentesque ornare sit amet quis magna. Curabitur sagittis, leo pulvinar imperdiet consectetur, libero nisi rhoncus magna, non facilisis tortor mi et felis. Ut aliquet diam at eros faucibus, quis gravida nisl volutpat. Quisque eu nibh orci. Praesent posuere orci ligula, a lacinia mauris venenatis non."},{id:3,title:"Borders",description:"Use border utilities to quickly style the border and border-radius of an element. Great for images, buttons, or any other element.",image:n,tags:[c.NPM,c.YARN],color:o.Z.DANGER.name,categories:[d.DOCUMENTATION,d.SETTINGS],content:"Pellentesque vehicula dolor a nisi tincidunt, vitae ornare enim tempus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc viverra neque vel diam hendrerit volutpat. Pellentesque placerat justo a sollicitudin molestie. Etiam bibendum lacus nec tortor viverra, a consectetur neque elementum. Donec at sodales purus. Fusce in urna ac elit pulvinar efficitur in non eros. Praesent eleifend, dolor nec sollicitudin eleifend, est massa egestas metus, vitae aliquet magna erat sed turpis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris rutrum a augue et suscipit. In id augue ullamcorper libero tincidunt luctus."},{id:4,title:"Colors",description:"Convey meaning through color with a handful of color utility classes. Includes support for styling links with hover states, too.",image:l,tags:[c.NPM,c.YARN,c.DEPENDENCIES],color:o.Z.SUCCESS.name,categories:[d.DOCUMENTATION,d.SETTINGS],content:"Nam vitae blandit elit. Pellentesque efficitur venenatis finibus. Integer at ante rutrum, bibendum ipsum id, viverra mauris. Maecenas rhoncus ligula at lectus ullamcorper, sit amet suscipit massa tristique. Ut mattis feugiat ex, at finibus est ullamcorper in. Maecenas volutpat, odio id aliquam pulvinar, lectus velit malesuada sem, quis rutrum magna lectus quis lacus. Morbi egestas mollis nisl, quis ultrices enim iaculis vitae. Sed maximus blandit mollis. Vestibulum suscipit nibh sit amet vehicula rhoncus. Etiam gravida eu leo ac placerat. Integer vitae nunc ipsum. Phasellus maximus ullamcorper eros, nec blandit ex dignissim non. Donec vulputate molestie risus, vel hendrerit est aliquam vel."},{id:5,title:"Display property",description:"Quickly and responsively toggle the display value of components and more with our display utilities.",image:u,tags:[c.NPM,c.YARN],color:o.Z.INFO.name,categories:[d.SETTINGS],content:"Duis posuere risus in enim sagittis, et condimentum ligula eleifend. Phasellus elementum lectus nulla. Curabitur quis vulputate ex. Nunc quis mi nibh. Vivamus sed dictum sem. Suspendisse laoreet nisl sed diam scelerisque, at gravida dui fringilla. Maecenas vel pulvinar mi. Suspendisse suscipit rhoncus dignissim. Phasellus iaculis mattis lacus, id fermentum tortor consectetur nec. Morbi bibendum neque velit, in tincidunt magna molestie vitae. Sed ultrices orci non metus pellentesque consequat. Fusce ut eleifend neque. Nunc bibendum dapibus tortor. Mauris tincidunt auctor eros sed vehicula. Maecenas a lacinia nibh. Nulla in egestas enim."},{id:6,title:"Flex",description:"Quickly manage the layout, alignment, and sizing of grid columns, navigation, components, and more with a full suite of responsive flexbox utilities. For more complex implementations, custom CSS may be necessary.",image:r,tags:[c.NPM,c.YARN],color:o.Z.WARNING.name,categories:[d.SETTINGS],content:"Maecenas id mollis turpis, non tincidunt tellus. Maecenas facilisis leo at mi accumsan tempor. Integer auctor tellus ut mi euismod, id tempus ex tempus. Curabitur feugiat arcu sem, et ultricies ligula feugiat at. Nullam nec condimentum elit, quis varius nisl. Sed venenatis at justo quis ornare. Ut sed suscipit ipsum. Aenean tempus neque eu ligula cursus convallis. Morbi ornare justo a ipsum blandit, quis varius massa euismod. Nam in orci enim. Vestibulum facilisis egestas lacus commodo vestibulum. Maecenas laoreet tincidunt dui, vel aliquam neque vestibulum vel. Pellentesque condimentum ullamcorper eros. Pellentesque bibendum convallis sem sit amet porta."},{id:7,title:"Float",description:"Toggle floats on any element, across any breakpoint, using our responsive float utilities.",image:l,tags:[c.NPM,c.YARN],color:o.Z.DARK.name,categories:[d.SETTINGS],content:"Donec in augue nisl. Maecenas quis lacus ut erat venenatis vehicula nec id tortor. Cras magna diam, porttitor eu tortor et, egestas consectetur elit. Donec non elementum ex, sit amet efficitur elit. Nullam dictum ante vitae ante ullamcorper, eu vehicula quam pellentesque. Suspendisse consequat lectus eget convallis ornare. Phasellus faucibus arcu libero, sed interdum metus consequat sit amet. Nam quis elementum urna, egestas malesuada dolor. Morbi suscipit nulla non ante finibus luctus. Mauris ullamcorper, sem sed faucibus dictum, nisl tortor aliquam eros, et aliquet libero libero in nulla. Aliquam feugiat nisi nisi, quis luctus mi fringilla vel. Suspendisse vitae condimentum felis. Morbi eleifend nibh sem, id rutrum tortor gravida quis."},{id:8,title:"Interactions",description:"Utility classes that change how users interact with contents of a website.",image:s,tags:[c.NPM,c.YARN],color:o.Z.INFO.name,categories:[d.COLORS],content:"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi rhoncus, turpis mollis tincidunt feugiat, augue enim dapibus ipsum, et placerat neque nibh sit amet justo. Praesent venenatis ex eu massa aliquam congue eu sed diam. Vestibulum suscipit lacus et justo ornare, at rutrum erat malesuada. Fusce ut rutrum dui. Donec posuere fringilla urna, ut efficitur mi feugiat et. In ut elit at turpis dapibus pretium quis vel turpis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam rhoncus vel erat a finibus. Nulla facilisi. Suspendisse ornare rhoncus sollicitudin. Curabitur mollis, erat id tincidunt efficitur, arcu sem elementum enim, ac lacinia tortor purus vel ante. Nullam non feugiat magna."}];i.Z=m},90884:function(e,i,a){e.exports=a.p+"static/media/scene1.edf253f443b39934cbcb.png"},36963:function(e,i,a){e.exports=a.p+"static/media/scene2.0ff0cc865eb628e11d66.png"},13861:function(e,i,a){e.exports=a.p+"static/media/scene3.23c0ef43b9ee21352c88.png"},87823:function(e,i,a){e.exports=a.p+"static/media/scene4.0c3c1d8796140eb6c0be.png"},63726:function(e,i,a){e.exports=a.p+"static/media/scene5.bcd5be38d648d60b37eb.png"},69531:function(e,i,a){e.exports=a.p+"static/media/scene6.b04d8412413bf6c552ff.png"}}]);
//# sourceMappingURL=8749.260feef2.chunk.js.map