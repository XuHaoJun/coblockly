(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[443],{2703:function(n,e,o){"use strict";var r=o(414);function t(){}function u(){}u.resetWarningCache=t,n.exports=function(){function n(n,e,o,t,u,c){if(c!==r){var i=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function e(){return n}n.isRequired=n;var o={array:n,bigint:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:e,element:n,elementType:n,instanceOf:e,node:n,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:u,resetWarningCache:t};return o.PropTypes=o,o}},5697:function(n,e,o){n.exports=o(2703)()},414:function(n){"use strict";n.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},3443:function(n,e,o){"use strict";o.r(e),o.d(e,{BlocklyWorkspace:function(){return m},Workspace:function(){return t.Workspace},WorkspaceSvg:function(){return t.WorkspaceSvg},useBlocklyWorkspace:function(){return i}});var r=o(7294),t=o(4948),u=o.n(t),c=function(){return(c=Object.assign||function(n){for(var e,o=1,r=arguments.length;o<r;o++)for(var t in e=arguments[o])Object.prototype.hasOwnProperty.call(e,t)&&(n[t]=e[t]);return n}).apply(this,arguments)},i=function(n){var e=n.ref,o=n.initialXml,t=n.toolboxConfiguration,i=n.workspaceConfiguration,a=n.onWorkspaceChange,s=n.onImportXmlError,f=n.onInject,l=n.onDispose,p=r.useState(null),m=p[0],g=p[1],h=r.useState(o),k=h[0],C=h[1],v=r.useState(!1),y=v[0],E=v[1],b=r.useState(!1),T=b[0],d=b[1],X=r.useRef(i);r.useEffect(function(){X.current=i},[i]);var x=r.useRef(t);r.useEffect(function(){x.current=t,t&&m&&m.updateToolbox(t)},[t,m]);var W=r.useRef(f),I=r.useRef(l);r.useEffect(function(){W.current=f},[f]),r.useEffect(function(){I.current=l},[l]);var j=r.useCallback(function(n){a&&a(n)},[a]);return r.useEffect(function(){if(e.current){var n=u().inject(e.current,c(c({},X.current),{toolbox:x.current}));g(n),E(!1),d(!1),W.current&&W.current(n);var o=I.current;return function(){n.dispose(),o&&o(n)}}},[e]),r.useEffect(function(){m&&!T&&j(m)},[j,T,m]),r.useEffect(function(){if(null!=m){var n=function(){j(m)};return m.addChangeListener(n),function(){m.removeChangeListener(n)}}},[m,j]),r.useEffect(function(){if(null!=m){var n,e,o,r=(n=function(){var n=u().Xml.domToText(u().Xml.workspaceToDom(m));n!==k&&C(n)},e=null,o=null,[function(){for(var r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];o=function(){e=null,n.apply(void 0,r)},clearTimeout(e),e=setTimeout(o,200)},function(){null!==e&&(clearTimeout(e),o())}]),t=r[0],c=r[1];return m.addChangeListener(t),function(){m.removeChangeListener(t),c()}}},[m,k]),r.useEffect(function(){k&&m&&!y&&(!function(n,e,o){try{return u().Xml.domToWorkspace(u().Xml.textToDom(n),e),!0}catch(n){return o&&o(n),!1}}(k,m,s)&&C(null),E(!0))},[k,m,y,s]),{workspace:m,xml:k}},a=o(5893),s=o(5697),f=o.n(s),l={initialXml:f().string,toolboxConfiguration:f().object,workspaceConfiguration:f().object,className:f().string,onWorkspaceChange:f().func,onImportXmlError:f().func,onXmlChange:f().func,onInject:f().func,onDispose:f().func};function p(n){var e=n.initialXml,o=n.toolboxConfiguration,t=n.workspaceConfiguration,u=n.className,c=n.onWorkspaceChange,s=n.onXmlChange,f=n.onImportXmlError,l=n.onInject,p=n.onDispose,m=r.useRef(null),g=i({ref:m,initialXml:e,toolboxConfiguration:o,workspaceConfiguration:t,onWorkspaceChange:c,onImportXmlError:f,onInject:l,onDispose:p}).xml,h=r.useRef(s);return r.useEffect(function(){h.current=s},[s]),r.useEffect(function(){h.current&&g&&h.current(g)},[g]),(0,a.jsx)("div",{className:u,ref:m},void 0)}p.propTypes=l,p.defaultProps={initialXml:null,toolboxConfiguration:null,workspaceConfiguration:null,className:null,onWorkspaceChange:null,onImportXmlError:null,onXmlChange:null,onInject:null,onDispose:null};var m=p}}]);