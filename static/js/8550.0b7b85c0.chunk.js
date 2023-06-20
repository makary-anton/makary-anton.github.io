"use strict";(self.webpackChunkfacit=self.webpackChunkfacit||[]).push([[8550],{31024:function(e,t,i){var s=i(1413),a=i(45987),l=(i(72791),i(11592)),n=i(80184),r=["to"];t.Z=function(e){var t=e.to,i=(0,a.Z)(e,r);return(0,n.jsx)(l.Z,(0,s.Z)((0,s.Z)({color:"storybook",icon:"CustomStorybook",tag:"a",target:"_blank",isLight:!0,href:"".concat("https://facit-story.omtanke.studio/?path=").concat(t)},i),{},{children:"Storybook"}))}},5081:function(e,t,i){i.d(t,{g:function(){return d}});var s=i(72791),a=i(81694),l=i.n(a),n=i(11087),r=i(16843),o=i(63542),c=i(80184),d=function(e){var t=e.children,i=e.ariaLabel,a=e.className,o=e.tag,d=e.to,h=e.isActive,x=e.divider;return(0,c.jsxs)(r.Z,{tag:o,className:l()("breadcrumb-item",{active:h},a),"aria-current":h?"page":null,"aria-label":i||t,children:[x&&"string"!==typeof x&&(0,s.cloneElement)(x,{className:l()("breadcrumb-icon",x.props.className)}),h?t:(0,c.jsx)(n.OL,{to:d,"aria-label":i,children:t})]})};d.defaultProps={className:void 0,ariaLabel:void 0,tag:"li",isActive:!1,divider:void 0};var h=function(e){var t=e.children,i=e.list,a=e.tag,l=e.listTag,n=e.itemTag,o=e.ariaLabel,h=e.autoActive,x=e.isToHome,p=e.divider,m="string"!==p&&p;return(0,c.jsx)(r.Z,{tag:a,"aria-label":o,style:p?{"--bs-breadcrumb-divider":"string"===typeof p?"'".concat(p,"'"):"none"}:null,children:(0,c.jsxs)(r.Z,{tag:l,className:"breadcrumb",children:[x&&(0,c.jsx)(d,{to:"/",ariaLabel:"Home",children:x}),i?i.map((function(e,t){return(0,c.jsx)(d,{tag:e.tag||n,to:e.to,isActive:h&&i.length===t+1,divider:m,children:e.title},e.title)})):s.Children.map(t,(function(e,i){return(0,s.cloneElement)(e,{tag:e.props.tag||n,isActive:h&&t.length===i+1,divider:e.props.divider||m})}))]})})};h.defaultProps={children:void 0,tag:"nav",listTag:"ol",itemTag:"li",ariaLabel:"breadcrumb",list:void 0,autoActive:!0,isToHome:(0,c.jsx)(o.Z,{icon:"HolidayVillage"}),divider:(0,c.jsx)(o.Z,{icon:"ChevronRight"})},t.Z=h},50318:function(e,t,i){var s=i(1413),a=i(45987),l=i(72791),n=i(13496),r=i(81694),o=i.n(r),c=i(80184),d=["series","options","type","width","height","className"],h=function(e){var t=e.series,i=e.options,l=e.type,r=e.width,h=e.height,x=e.className,p=(0,a.Z)(e,d);return(0,c.jsx)("div",(0,s.Z)((0,s.Z)({className:o()("apex-chart",x)},p),{},{children:(0,c.jsx)(n.Z,{options:(0,s.Z)({colors:["#6c5dd3","#ffa2c0","#46bcaa","#4d69fa","#ffcf52","#f35421"],plotOptions:{candlestick:{colors:{upward:"#46bcaa",downward:"#f35421"}},boxPlot:{colors:{upper:"#46bcaa",lower:"#f35421"}}}},i),series:t,type:l,width:r,height:h})}))};h.defaultProps={type:"line",width:"100%",height:"auto",className:void 0},t.Z=(0,l.memo)(h)},58550:function(e,t,i){i.r(t),i.d(t,{default:function(){return g}});var s=i(72791),a=i(15224),l=i(5081),n=i(47930),r=i(38493),o=i(29439),c=i(96517),d=i(50318),h=i(31024),x=i(80184),p=function(){var e=(0,s.useState)({series:[{name:"Website Blog",type:"column",data:[440,505,414,671,227,413,201,352,752,320,257,160]},{name:"Social Media",type:"line",data:[23,42,35,27,43,22,17,31,22,22,12,16]}],options:{chart:{height:350,type:"line"},stroke:{width:[0,4]},title:{text:"Traffic Sources"},dataLabels:{enabled:!0,enabledOnSeries:[1]},labels:["01 Jan 2001","02 Jan 2001","03 Jan 2001","04 Jan 2001","05 Jan 2001","06 Jan 2001","07 Jan 2001","08 Jan 2001","09 Jan 2001","10 Jan 2001","11 Jan 2001","12 Jan 2001"],xaxis:{type:"datetime"},yaxis:[{title:{text:"Website Blog"}},{opposite:!0,title:{text:"Social Media"}}]}}),t=(0,o.Z)(e,1)[0];return(0,x.jsx)("div",{className:"col-lg-6",children:(0,x.jsxs)(c.ZP,{stretch:!0,children:[(0,x.jsxs)(c.Ol,{children:[(0,x.jsxs)(c.oL,{icon:"MultilineChart",children:[(0,x.jsxs)(c.ll,{children:["type ",(0,x.jsx)("small",{children:"line, column"})]}),(0,x.jsx)(c.md,{children:"Chart"})]}),(0,x.jsx)(c.T$,{children:(0,x.jsx)(h.Z,{to:"/story/extra-chart-mixed--mixed-line-column"})})]}),(0,x.jsx)(c.eW,{children:(0,x.jsx)(d.Z,{series:t.series,options:t.options,type:"line",height:350})})]})})},m=function(){var e=(0,s.useState)({series:[{name:"Income",type:"column",data:[1.4,2,2.5,1.5,2.5,2.8,3.8,4.6]},{name:"Cashflow",type:"column",data:[1.1,3,3.1,4,4.1,4.9,6.5,8.5]},{name:"Revenue",type:"line",data:[20,29,37,36,44,45,50,58]}],options:{chart:{height:350,type:"line",stacked:!1},dataLabels:{enabled:!1},stroke:{width:[1,1,4]},title:{text:"XYZ - Stock Analysis (2009 - 2016)",align:"left",offsetX:110},xaxis:{categories:[2009,2010,2011,2012,2013,2014,2015,2016]},yaxis:[{axisTicks:{show:!0},axisBorder:{show:!0,color:"#4d69fa"},labels:{style:{colors:"#4d69fa"}},title:{text:"Income (thousand cores)",style:{color:"#4d69fa"}},tooltip:{enabled:!0}},{seriesName:"Income",opposite:!0,axisTicks:{show:!0},axisBorder:{show:!0,color:"#46bcaa"},labels:{style:{colors:"#46bcaa"}},title:{text:"Operating Cashflow (thousand cores)",style:{color:"#46bcaa"}}},{seriesName:"Revenue",opposite:!0,axisTicks:{show:!0},axisBorder:{show:!0,color:"#ffcf52"},labels:{style:{colors:"#ffcf52"}},title:{text:"Revenue (thousand cores)",style:{color:"#ffcf52"}}}],tooltip:{theme:"dark",fixed:{enabled:!0,position:"topLeft",offsetY:30,offsetX:60}},legend:{horizontalAlign:"left",offsetX:40}}}),t=(0,o.Z)(e,1)[0];return(0,x.jsx)("div",{className:"col-lg-6",children:(0,x.jsxs)(c.ZP,{stretch:!0,children:[(0,x.jsx)(c.Ol,{children:(0,x.jsxs)(c.oL,{icon:"MultilineChart",children:[(0,x.jsxs)(c.ll,{children:["type ",(0,x.jsx)("small",{children:"line"})]}),(0,x.jsx)(c.md,{children:"Chart"})]})}),(0,x.jsx)(c.eW,{children:(0,x.jsx)(d.Z,{series:t.series,options:t.options,type:"line",height:350})})]})})},u=function(){var e=(0,s.useState)({series:[{name:"TEAM A",type:"area",data:[44,55,31,47,31,43,26,41,31,47,33]},{name:"TEAM B",type:"line",data:[55,69,45,61,43,54,37,52,44,61,43]}],options:{chart:{height:350,type:"line"},stroke:{curve:"smooth"},fill:{type:"solid",opacity:[.35,1]},labels:["Dec 01","Dec 02","Dec 03","Dec 04","Dec 05","Dec 06","Dec 07","Dec 08","Dec 09 ","Dec 10","Dec 11"],markers:{size:0},yaxis:[{title:{text:"Series A"}},{opposite:!0,title:{text:"Series B"}}],tooltip:{shared:!0,intersect:!1,y:{formatter:function(e){return"undefined"!==typeof e?"".concat(e.toFixed(0)," points"):e}}}}}),t=(0,o.Z)(e,1)[0];return(0,x.jsx)("div",{className:"col-lg-6",children:(0,x.jsxs)(c.ZP,{stretch:!0,children:[(0,x.jsx)(c.Ol,{children:(0,x.jsxs)(c.oL,{icon:"MultilineChart",children:[(0,x.jsxs)(c.ll,{children:["type ",(0,x.jsx)("small",{children:"line, area"})]}),(0,x.jsx)(c.md,{children:"Chart"})]})}),(0,x.jsx)(c.eW,{children:(0,x.jsx)(d.Z,{series:t.series,options:t.options,type:"line",height:350})})]})})},y=function(){var e=(0,s.useState)({series:[{name:"TEAM A",type:"column",data:[23,11,22,27,13,22,37,21,44,22,30]},{name:"TEAM B",type:"area",data:[44,55,41,67,22,43,21,41,56,27,43]},{name:"TEAM C",type:"line",data:[30,25,36,30,45,35,64,52,59,36,39]}],options:{chart:{height:350,type:"line",stacked:!1},stroke:{width:[0,2,5],curve:"smooth"},plotOptions:{bar:{columnWidth:"50%"}},fill:{opacity:[.85,.25,1],gradient:{inverseColors:!1,shade:"light",type:"vertical",opacityFrom:.85,opacityTo:.55,stops:[0,100,100,100]}},labels:["01/01/2003","02/01/2003","03/01/2003","04/01/2003","05/01/2003","06/01/2003","07/01/2003","08/01/2003","09/01/2003","10/01/2003","11/01/2003"],markers:{size:0},xaxis:{type:"datetime"},yaxis:{title:{text:"Points"},min:0},tooltip:{shared:!0,intersect:!1,y:{formatter:function(e){return"undefined"!==typeof e?"".concat(e.toFixed(0)," points"):e}}}}}),t=(0,o.Z)(e,1)[0];return(0,x.jsx)("div",{className:"col-lg-6",children:(0,x.jsxs)(c.ZP,{stretch:!0,children:[(0,x.jsx)(c.Ol,{children:(0,x.jsxs)(c.oL,{icon:"MultilineChart",children:[(0,x.jsxs)(c.ll,{children:["type ",(0,x.jsx)("small",{children:"line, column, area"})]}),(0,x.jsx)(c.md,{children:"Chart"})]})}),(0,x.jsx)(c.eW,{children:(0,x.jsx)(d.Z,{series:t.series,options:t.options,type:"line",height:350})})]})})},f=function(){var e=(0,s.useState)({series:[{name:"Points",type:"scatter",data:[{x:1,y:2.14},{x:1.2,y:2.19},{x:1.8,y:2.43},{x:2.3,y:3.8},{x:2.6,y:4.14},{x:2.9,y:5.4},{x:3.2,y:5.8},{x:3.8,y:6.04},{x:4.55,y:6.77},{x:4.9,y:8.1},{x:5.1,y:9.4},{x:7.1,y:7.14},{x:9.18,y:8.4}]},{name:"Line",type:"line",data:[{x:1,y:2},{x:2,y:3},{x:3,y:4},{x:4,y:5},{x:5,y:6},{x:6,y:7},{x:7,y:8},{x:8,y:9},{x:9,y:10},{x:10,y:11}]}],options:{chart:{height:350,type:"line"},fill:{type:"solid"},markers:{size:[6,0]},tooltip:{theme:"dark",shared:!1,intersect:!0},legend:{show:!1},xaxis:{type:"numeric",min:0,max:12,tickAmount:12}}}),t=(0,o.Z)(e,1)[0];return(0,x.jsx)("div",{className:"col-lg-6",children:(0,x.jsxs)(c.ZP,{stretch:!0,children:[(0,x.jsx)(c.Ol,{children:(0,x.jsxs)(c.oL,{icon:"MultilineChart",children:[(0,x.jsxs)(c.ll,{children:["type ",(0,x.jsx)("small",{children:"line, scatter"})]}),(0,x.jsx)(c.md,{children:"Chart"})]})}),(0,x.jsx)(c.eW,{children:(0,x.jsx)(d.Z,{series:t.series,options:t.options,type:"line",height:350})})]})})},j=i(7134),g=function(){return(0,x.jsxs)(r.Z,{title:j.XZ.charts.subMenu.chartsMixed.text,children:[(0,x.jsxs)(a.ZP,{children:[(0,x.jsx)(a.Vv,{children:(0,x.jsx)(l.Z,{list:[{title:"Charts",to:"/charts"},{title:"Mixed",to:"/charts/mixed"}]})}),(0,x.jsx)(a.$o,{children:(0,x.jsx)(h.Z,{to:"/story/extra-chart-mixed--mixed-line-column"})})]}),(0,x.jsx)(n.Z,{children:(0,x.jsxs)("div",{className:"row",children:[(0,x.jsx)(p,{}),(0,x.jsx)(m,{}),(0,x.jsx)(u,{}),(0,x.jsx)(y,{}),(0,x.jsx)(f,{})]})})]})}}}]);
//# sourceMappingURL=8550.0b7b85c0.chunk.js.map