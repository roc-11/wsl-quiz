"use strict";exports.id=164,exports.ids=[164],exports.modules={7164:(n,e,t)=>{t.r(e),t.d(e,{AppInsightsCore:()=>cn,BaseCore:()=>fn,BaseTelemetryPlugin:()=>H.i,CoreUtils:()=>un.Tr,DiagnosticLogger:()=>D.AQ,ESPromise:()=>gn,ESPromiseScheduler:()=>Pn,EventHelper:()=>En.zB,EventLatency:()=>E,EventPersistence:()=>L,EventPropertyType:()=>A,EventsDiscardedReason:()=>bn.h,FullVersionString:()=>un.vs,InternalAppInsightsCore:()=>on,InternalBaseCore:()=>en,LoggingSeverity:()=>T,MinChannelPriorty:()=>In,NotificationManager:()=>rn,PerfEvent:()=>w.zn,PerfManager:()=>w.Jk,ProcessTelemetryContext:()=>R.Vi,TraceLevel:()=>O,Undefined:()=>On.jA,Utils:()=>un.cQ,ValueKind:()=>b,ValueSanitizer:()=>Tn,Version:()=>un.Gf,_ExtendedInternalMessageId:()=>_,_InternalLogMessage:()=>D.lQ,_InternalMessageId:()=>I,__getRegisteredEvents:()=>An.um,_logInternalMessage:()=>D.L4,_throwInternal:()=>D.kP,_warnToConsole:()=>D.jV,addEventHandler:()=>An.Ib,addEventListeners:()=>An.yw,addPageHideEventListener:()=>An.TJ,addPageShowEventListener:()=>An.nD,addPageUnloadEventListener:()=>An.c9,areCookiesSupported:()=>W.p7,arrForEach:()=>a.tO,arrIndexOf:()=>a.UA,arrMap:()=>a.Mr,arrReduce:()=>a.Xz,attachEvent:()=>An.pZ,cookieAvailable:()=>W.p7,createCookieMgr:()=>W.Nz,createEnumStyle:()=>o.By,createGuid:()=>un.cm,createProcessTelemetryContext:()=>R.CD,createTraceParent:()=>_n.SU,createUniqueNamespace:()=>Z.J,createUnloadHandlerContainer:()=>K.Y,dateNow:()=>a.m6,deleteCookie:()=>un.kT,detachEvent:()=>An.pD,disableCookies:()=>un.oF,disallowsSameSiteNone:()=>W.UY,doPerf:()=>w.Lm,dumpObj:()=>F.eU,eventOff:()=>An.QY,eventOn:()=>An.XO,extend:()=>un.l7,findW3cTraceParent:()=>_n.lq,formatTraceParent:()=>_n.aR,generateW3CId:()=>En.DO,getCommonSchemaMetaData:()=>un.Vv,getConsole:()=>F.dr,getCookie:()=>un.ej,getCookieValue:()=>un.Do,getCrypto:()=>F.MX,getDocument:()=>F.Me,getExceptionName:()=>a.jj,getFieldValueType:()=>un.Sy,getGlobal:()=>N.Rd,getGlobalInst:()=>F.a8,getHistory:()=>F.s1,getIEVersion:()=>F.sA,getISOString:()=>a.Y6,getJSON:()=>F.xA,getLocation:()=>F.k$,getMsCrypto:()=>F.gz,getNavigator:()=>F.jW,getPerformance:()=>F.r,getSetValue:()=>a.qK,getTenantId:()=>un.jM,getTime:()=>un.hK,getWindow:()=>F.Jj,hasDocument:()=>F.Nv,hasHistory:()=>F.fE,hasJSON:()=>F.nS,hasNavigator:()=>F.d6,hasOwnProperty:()=>a.nr,hasWindow:()=>F.Ym,isArray:()=>a.kJ,isArrayValid:()=>un.JT,isBeaconsSupported:()=>F.MF,isBoolean:()=>a.jn,isChromium:()=>un.mJ,isDate:()=>a.J_,isDocumentObjectAvailable:()=>un.x9,isError:()=>a.VZ,isFetchSupported:()=>F.JO,isFunction:()=>a.mf,isIE:()=>F.w1,isLatency:()=>un.r7,isNotTruthy:()=>a.F,isNullOrUndefined:()=>a.le,isNumber:()=>a.hj,isObject:()=>a.Kn,isReactNative:()=>F.b$,isSampledFlag:()=>_n.Pn,isString:()=>a.HD,isTruthy:()=>a.fQ,isTypeof:()=>a.Ym,isUint8ArrayAvailable:()=>un.IZ,isUndefined:()=>a.o8,isValidSpanId:()=>_n.Lc,isValidTraceId:()=>_n.jN,isValidTraceParent:()=>_n.J6,isValueAssigned:()=>un.Sn,isValueKind:()=>un.oS,isWindowObjectAvailable:()=>un.dH,isXhrSupported:()=>F.Z3,mergeEvtNamespace:()=>An.jU,newGuid:()=>En.GW,newId:()=>Ln.pZ,normalizeJsName:()=>a.Gf,objCreate:()=>N.pu,objDefineAccessors:()=>a.l_,objForEachKey:()=>a.rW,objFreeze:()=>a.FL,objKeys:()=>a.FY,objSeal:()=>a.Xi,openXhr:()=>un.ot,optimizeObject:()=>a.Ax,parseTraceParent:()=>_n.j_,perfNow:()=>En.Jj,proxyAssign:()=>a.cf,proxyFunctionAs:()=>a.Oi,proxyFunctions:()=>a.Vb,random32:()=>Ln._l,randomValue:()=>Ln.az,removeEventHandler:()=>An.C1,removeEventListeners:()=>An.nJ,removePageHideEventListener:()=>An.C9,removePageShowEventListener:()=>An.Yl,removePageUnloadEventListener:()=>An.JA,safeGetCookieMgr:()=>W.JP,safeGetLogger:()=>D.vH,sanitizeProperty:()=>un.yj,setCookie:()=>un.d8,setEnableEnvMocks:()=>F.dI,setProcessTelemetryTimings:()=>un.if,setValue:()=>a.sO,strContains:()=>a._Q,strEndsWith:()=>a.Id,strFunction:()=>On.cb,strObject:()=>On.fK,strPrototype:()=>On.hB,strStartsWith:()=>a.xe,strTrim:()=>a.nd,strUndefined:()=>On.jA,throwError:()=>a._y,toISOString:()=>a.Y6,useXDomainRequest:()=>F.cp});var i,r=t(7421),o=t(951),a=t(4869),u="Failed",l=u+"MonitorAjax",c="Track",s="Start",f="Stop",d="Event",v="AuthContext",g="Exception",m="Local",p="Session",h="Storage",y="Browser",S="Cannot",C="Buffer",P="InstrumentationKey",T=(0,o.By)({CRITICAL:1,WARNING:2}),I=(0,o.By)(((i={})[y+"DoesNotSupport"+m+h]=0,i[y+S+"Read"+m+h]=1,i[y+S+"Read"+p+h]=2,i[y+S+"Write"+m+h]=3,i[y+S+"Write"+p+h]=4,i[y+u+"RemovalFrom"+m+h]=5,i[y+u+"RemovalFrom"+p+h]=6,i[S+"SendEmptyTelemetry"]=7,i.ClientPerformanceMathError=8,i["ErrorParsingAI"+p+"Cookie"]=9,i.ErrorPVCalc=10,i[g+"WhileLoggingError"]=11,i[u+"AddingTelemetryTo"+C]=12,i[l+"Abort"]=13,i[l+"Dur"]=14,i[l+"Open"]=15,i[l+"RSC"]=16,i[l+"Send"]=17,i[l+"GetCorrelationHeader"]=18,i[u+"ToAddHandlerForOnBeforeUnload"]=19,i[u+"ToSendQueuedTelemetry"]=20,i[u+"ToReportDataLoss"]=21,i["Flush"+u]=22,i.MessageLimitPerPVExceeded=23,i.MissingRequiredFieldSpecification=24,i.NavigationTimingNotSupported=25,i.OnError=26,i[p+"RenewalDateIsZero"]=27,i.SenderNotInitialized=28,i[s+c+d+u]=29,i[f+c+d+u]=30,i[s+c+u]=31,i[f+c+u]=32,i.TelemetrySampledAndNotSent=33,i[c+d+u]=34,i[c+g+u]=35,i[c+"Metric"+u]=36,i[c+"PV"+u]=37,i[c+"PV"+u+"Calc"]=38,i[c+"Trace"+u]=39,i["Transmission"+u]=40,i[u+"ToSet"+h+C]=41,i[u+"ToRestore"+h+C]=42,i.InvalidBackendResponse=43,i[u+"ToFixDepricatedValues"]=44,i.InvalidDurationValue=45,i.TelemetryEnvelopeInvalid=46,i.CreateEnvelopeError=47,i[S+"SerializeObject"]=48,i[S+"SerializeObjectNonSerializable"]=49,i.CircularReferenceDetected=50,i["Clear"+v+u]=51,i[g+"Truncated"]=52,i.IllegalCharsInName=53,i.ItemNotInArray=54,i.MaxAjaxPerPVExceeded=55,i.MessageTruncated=56,i.NameTooLong=57,i.SampleRateOutOfRange=58,i["Set"+v+u]=59,i["Set"+v+u+"AccountName"]=60,i.StringValueTooLong=61,i.StartCalledMoreThanOnce=62,i.StopCalledWithoutStart=63,i["TelemetryInitializer"+u]=64,i.TrackArgumentsNotSpecified=65,i.UrlTooLong=66,i[p+h+C+"Full"]=67,i[S+"AccessCookie"]=68,i.IdTooLong=69,i.InvalidEvent=70,i[l+"SetRequestHeader"]=71,i["Send"+y+"InfoOnUserInit"]=72,i["Plugin"+g]=73,i["Notification"+g]=74,i.SnippetScriptLoadFailure=99,i["Invalid"+P]=100,i[S+"ParseAiBlobValue"]=101,i.InvalidContentBlob=102,i[c+"PageAction"+d+u]=103,i[u+"AddingCustomDefinedRequestContext"]=104,i["InMemory"+h+C+"Full"]=105,i[P+"Deprecation"]=106,i)),b=(0,o.By)({NotSet:0,Pii_DistinguishedName:1,Pii_GenericData:2,Pii_IPV4Address:3,Pii_IPv6Address:4,Pii_MailSubject:5,Pii_PhoneNumber:6,Pii_QueryString:7,Pii_SipAddress:8,Pii_SmtpAddress:9,Pii_Identity:10,Pii_Uri:11,Pii_Fqdn:12,Pii_IPV4AddressLegacy:13,CustomerContent_GenericContent:32}),E=(0,o.By)({Normal:1,CostDeferred:2,RealTime:3,Immediate:4}),A=(0,o.By)({Unspecified:0,String:1,Int32:2,UInt32:3,Int64:4,UInt64:5,Double:6,Bool:7,Guid:8,DateTime:9}),L=(0,o.By)({Normal:1,Critical:2}),O=(0,o.By)({NONE:0,ERROR:1,WARNING:2,INFORMATION:3}),_=(0,a.FL)((0,r.uc)((0,r.uc)({},I),(0,o.By)({AuthHandShakeError:501,AuthRedirectFail:502,BrowserCannotReadLocalStorage:503,BrowserCannotWriteLocalStorage:504,BrowserDoesNotSupportLocalStorage:505,CannotParseBiBlobValue:506,CannotParseDataAttribute:507,CVPluginNotAvailable:508,DroppedEvent:509,ErrorParsingAISessionCookie:510,ErrorProvidedChannels:511,FailedToGetCookies:512,FailedToInitializeCorrelationVector:513,FailedToInitializeSDK:514,InvalidContentBlob:515,InvalidCorrelationValue:516,SessionRenewalDateIsZero:517,SendPostOnCompleteFailure:518,PostResponseHandler:519,SDKNotInitialized:520}))),k=t(9141),D=t(9339),w=t(1782),F=t(9251),V=t(8145),N=t(175),M=t(6335),R=t(1030),j=t(9031),z=500,x="Channel has invalid priority - ";function U(n,e,t){e&&(0,a.kJ)(e)&&e[V.R5]>0&&(e=e.sort((function(n,e){return n[M.yi]-e[M.yi]})),(0,a.tO)(e,(function(n){n[M.yi]<z&&(0,a._y)(x+n[V.pZ])})),n[V.MW]({queue:(0,a.FL)(e),chain:(0,R.jV)(e,t[V.TC],t)}))}var W=t(8140),Z=t(7624),B=t(8341),H=t(7951),q=function(n){function e(){var t,i,r=n.call(this)||this;function o(){t=0,i=[]}return r.identifier="TelemetryInitializerPlugin",r.priority=199,o(),(0,k.Z)(e,r,(function(n,e){n.addTelemetryInitializer=function(n){var e={id:t++,fn:n};return i[V.MW](e),{remove:function(){(0,a.tO)(i,(function(n,t){if(n.id===e.id)return i[V.cb](t,1),-1}))}}},n[M.hL]=function(e,t){for(var r=!1,o=i[V.R5],u=0;u<o;++u){var l=i[u];if(l)try{if(!1===l.fn[V.ZV](null,[e])){r=!0;break}}catch(n){(0,D.kP)(t[V.mc](),1,64,"One of telemetry initializers failed, telemetry item will not be sent: "+(0,a.jj)(n),{exception:(0,F.eU)(n)},!0)}}r||n[V.uL](e,t)},n[V.F3]=function(){o()}})),r}return(0,r.ne)(e,n),e.__ieDyn=1,e}(H.i),K=t(8593),J="Plugins must provide initialize method",G="_notificationManager",Q="SDK is still unloading...",Y="SDK is not initialized",$={loggingLevelConsole:1};function X(n,e){return new w.Jk(e)}function nn(n,e){var t=!1;return(0,a.tO)(e,(function(e){if(e===n)return t=!0,-1})),t}var en=function(){function n(){var e,t,i,o,u,l,c,s,f,d,v,g,m,p,h,y,S,C,P,T,I=0;(0,k.Z)(n,this,(function(n){function b(){t=!1,e=(0,a.mm)(!0,{},$),n[V.TC]=e,n[V.eZ]=new D.AQ(e),n[V.iC]=[],h=new q,i=[],o=null,u=null,l=null,c=null,s=null,d=null,f=[],v=null,g=null,m=null,p=!1,y=null,S=(0,Z.J)("AIBaseCore",!0),C=(0,K.Y)(),T=null}function E(){return(0,R.CD)(O(),e,n)}function A(t){var i=function(n,e,t){var i,r=[],o={};return(0,a.tO)(t,(function(t){((0,a.le)(t)||(0,a.le)(t[V.VL]))&&(0,a._y)(J);var i=t[M.yi],u=t[V.pZ];t&&i&&((0,a.le)(o[i])?o[i]=u:(0,D.jV)(n,"Two extensions have same priority #"+i+" - "+o[i]+", "+u)),(!i||i<e)&&r[V.MW](t)})),(i={all:t})[M.oV]=r,i}(n[V.eZ],z,f);d=i[M.oV],s=null;var r=i.all;if(m=(0,a.FL)(function(n,e,t){var i=[];if(n&&(0,a.tO)(n,(function(n){return U(i,n,t)})),e){var r=[];(0,a.tO)(e,(function(n){n[M.yi]>z&&r[V.MW](n)})),U(i,r,t)}return i}(g,r,n)),v){var o=(0,a.UA)(r,v);-1!==o&&r[V.cb](o,1),-1!==(o=(0,a.UA)(d,v))&&d[V.cb](o,1),v._setQueue(m)}else v=function(n,e){function t(){return(0,R.CD)(null,e[V.TC],e,null)}function i(n,e,t,i){var r=n?n[V.R5]+1:1;function o(){0==--r&&(i&&i(),i=null)}r>0&&(0,a.tO)(n,(function(n){if(n&&n.queue[V.R5]>0){var i=n.chain,a=e[V.zV](i);a[V.Fc](o),t(a)}else r--})),o()}var r=!1,o={identifier:"ChannelControllerPlugin",priority:z,initialize:function(e,t,i,o){r=!0,(0,a.tO)(n,(function(n){n&&n.queue[V.R5]>0&&(0,j.bP)((0,R.CD)(n.chain,e,t),i)}))},isInitialized:function(){return r},processTelemetry:function(e,r){i(n,r||t(),(function(n){n[V.uL](e)}),(function(){r[V.uL](e)}))},update:function(e,t){var r=t||{reason:0};return i(n,e,(function(n){n[V.uL](r)}),(function(){e[V.uL](r)})),!0},pause:function(){i(n,t(),(function(n){n.iterate((function(n){n.pause&&n.pause()}))}),null)},resume:function(){i(n,t(),(function(n){n.iterate((function(n){n.resume&&n.resume()}))}),null)},teardown:function(e,t){var o=t||{reason:0,isAsync:!1};return i(n,e,(function(n){n[V.uL](o)}),(function(){e[V.uL](o),r=!1})),!0},getChannel:function(e){var t=null;return n&&n[V.R5]>0&&(0,a.tO)(n,(function(n){if(n&&n.queue[V.R5]>0&&((0,a.tO)(n.queue,(function(n){if(n[V.pZ]===e)return t=n,-1})),t))return-1})),t},flush:function(e,r,o,a){var u=1,l=!1,c=null;function s(){u--,l&&0===u&&(c&&(clearTimeout(c),c=null),r&&r(l),r=null)}return a=a||5e3,i(n,t(),(function(n){n.iterate((function(n){if(n[V.kL]){u++;var t=!1;n[V.kL](e,(function(){t=!0,s()}),o)||t||(e&&null==c?c=setTimeout((function(){c=null,s()}),a):s())}}))}),(function(){l=!0,s()})),!0},_setQueue:function(e){n=e}};return o}(m,n);r[V.MW](v),d[V.MW](v),n[V.iC]=(0,j.AA)(r),v[V.VL](e,n,r),(0,j.bP)(E(),r),n[V.iC]=(0,a.FL)((0,j.AA)(d||[])).slice(),t&&function(e){var t=(0,R.xy)(O(),n);n._updateHook&&!0===n._updateHook(t,e)||t[V.uL](e)}(t)}function L(e){var t,i=null,r=null;return(0,a.tO)(n[V.iC],(function(n){if(n[V.pZ]===e&&n!==v&&n!==h)return r=n,-1})),!r&&v&&(r=v.getChannel(e)),r&&((t={plugin:r})[V.$h]=function(n){(0,j.OY)(r)[M.mE]=!n},t.isEnabled=function(){var n=(0,j.OY)(r);return!n[V.fi]&&!n[M.mE]},t.remove=function(n,e){var t;void 0===n&&(n=!0);var i=[r],o=((t={reason:1})[V.d]=n,t);_(i,o,(function(n){n&&A({reason:32,removed:i}),e&&e(n)}))},i=t),i}function O(){if(!s){var t=(d||[]).slice();-1===(0,a.UA)(t,h)&&t[V.MW](h),s=(0,R.jV)((0,j.AA)(t),e,n)}return s}function _(t,i,r){if(t&&t[V.R5]>0){var o=(0,R.jV)(t,e,n),u=(0,R.Bt)(o,n);u[V.Fc]((function(){var n=!1,e=[];(0,a.tO)(f,(function(i,r){nn(i,t)?n=!0:e[V.MW](i)})),f=e;var i=[];g&&((0,a.tO)(g,(function(e,r){var o=[];(0,a.tO)(e,(function(e){nn(e,t)?n=!0:o[V.MW](e)})),i[V.MW](o)})),g=i),r&&r(n)})),u[V.uL](i)}else r(!1)}function k(){var t=n[V.eZ]?n[V.eZ].queue:[];t&&((0,a.tO)(t,(function(t){var i,r=((i={})[V.I]=y||"InternalMessageId: "+t[V.Gc],i.iKey=(0,a.v4)(e[V.p$]),i.time=(0,a.Y6)(new Date),i.baseType=D.lQ.dataType,i.baseData={message:t[V.gU]},i);n.track(r)})),t[V.R5]=0)}function F(n,e,t,i){return v?v[V.kL](n,e,t||6,i):(e&&e(!1),!0)}function x(e){var t=n[V.eZ];t?(0,D.kP)(t,2,73,e):(0,a._y)(e)}b(),n[V.yl]=function(){return t},n[V.VL]=function(i,u,c,s){var d,v;p&&(0,a._y)(Q),n[V.yl]()&&(0,a._y)("Core should not be initialized more than once"),e=i||{},n[V.TC]=e,(0,a.le)(i[V.p$])&&(0,a._y)("Please provide instrumentation key"),o=s,n[G]=s,!0===(v=(0,a.v4)(e.disableDbgExt))&&P&&(o[V.n7](P),P=null),o&&!P&&!0!==v&&(P=(0,B.p)(e),o[V.g](P)),!(d=(0,a.v4)(e.enablePerfMgr))&&l&&(l=null),d&&(0,a.qK)(e,M.DN,X),(0,a.qK)(e,M.Zh,{}).NotificationManager=o,c&&(n[V.eZ]=c);var h=(0,a.qK)(e,M.js,[]);(f=[])[V.MW].apply(f,(0,r.$h)((0,r.$h)([],u,!1),h,!1)),g=(0,a.qK)(e,M.Z,[]),A(null),m&&0!==m[V.R5]||(0,a._y)("No "+M.Z+" available"),t=!0,n.releaseQueue()},n.getTransmissionControls=function(){var n=[];return m&&(0,a.tO)(m,(function(e){n[V.MW](e.queue)})),(0,a.FL)(n)},n.track=function(t){t.iKey=t.iKey||e[V.p$],t[V.Z_]=t[V.Z_]||(0,a.Y6)(new Date),t.ver=t.ver||"4.0",!p&&n[V.yl]()?E()[V.uL](t):i[V.MW](t)},n[V.SD]=E,n[V.tb]=function(){return o||(o=function(){var n;return(0,N.pu)(((n={})[V.g]=function(n){},n[V.n7]=function(n){},n[M.uC]=function(n){},n[M.$F]=function(n,e){},n[M.f_]=function(n,e){},n))}(),n[G]=o),o},n[V.g]=function(n){o&&o[V.g](n)},n[V.n7]=function(n){o&&o[V.n7](n)},n.getCookieMgr=function(){return c||(c=(0,W.Nz)(e,n[V.eZ])),c},n.setCookieMgr=function(n){c=n},n[M.kl]=function(){if(!u&&!l&&(0,a.v4)(e.enablePerfMgr)){var t=(0,a.v4)(e[M.DN]);(0,a.mf)(t)&&(l=t(n,n[V.tb]()))}return u||l||(0,w.j5)()},n.setPerfMgr=function(n){u=n},n.eventCnt=function(){return i[V.R5]},n.releaseQueue=function(){if(t&&i[V.R5]>0){var n=i;i=[],(0,a.tO)(n,(function(n){E()[V.uL](n)}))}},n.pollInternalLogs=function(n){y=n||null;var t=(0,a.v4)(e.diagnosticLogInterval);return t&&t>0||(t=1e4),I&&clearInterval(I),I=setInterval((function(){k()}),t)},n[V.LS]=function(){I&&(clearInterval(I),I=0,k())},(0,a.Vb)(n,(function(){return h}),["addTelemetryInitializer"]),n.unload=function(e,i,r){var o;void 0===e&&(e=!0),t||(0,a._y)(Y),p&&(0,a._y)(Q);var u=((o={reason:50})[V.d]=e,o.flushComplete=!1,o),l=(0,R.Bt)(O(),n);function c(e){u.flushComplete=e,p=!0,C.run(l,u),n[V.LS](),l[V.uL](u)}l[V.Fc]((function(){b(),i&&i(u)}),n),F(e,c,6,r)||c(!1)},n[V.TO]=L,n.addPlugin=function(n,e,t,i){if(!n)return i&&i(!1),void x(J);var r=L(n[V.pZ]);if(r&&!e)return i&&i(!1),void x("Plugin ["+n[V.pZ]+"] is already loaded!");var o={reason:16};function a(e){f[V.MW](n),o.added=[n],A(o),i&&i(!0)}if(r){var u=[r.plugin];_(u,{reason:2,isAsync:!!t},(function(n){n?(o.removed=u,o.reason|=32,a()):i&&i(!1)}))}else a()},n.evtNamespace=function(){return S},n[V.kL]=F,n.getTraceCtx=function(n){return T||(T=(0,j.Yn)()),T},n.setTraceCtx=function(n){T=n||null},(0,a.Oi)(n,"addUnloadCb",(function(){return C}),"add")}))}return n.__ieDyn=1,n}();function tn(n,e,t,i){(0,a.tO)(n,(function(n){if(n&&n[e])if(t)setTimeout((function(){return i(n)}),0);else try{i(n)}catch(n){}}))}var rn=function(){function n(e){this.listeners=[];var t=!!(e||{}).perfEvtsSendAll;(0,k.Z)(n,this,(function(n){n[V.g]=function(e){n.listeners[V.MW](e)},n[V.n7]=function(e){for(var t=(0,a.UA)(n[V.dE],e);t>-1;)n.listeners[V.cb](t,1),t=(0,a.UA)(n[V.dE],e)},n[M.uC]=function(e){tn(n[V.dE],M.uC,!0,(function(n){n[M.uC](e)}))},n[M.$F]=function(e,t){tn(n[V.dE],M.$F,!0,(function(n){n[M.$F](e,t)}))},n[M.f_]=function(e,t){tn(n[V.dE],M.f_,t,(function(n){n[M.f_](e,t)}))},n[M.C$]=function(e){e&&(!t&&e[V.PL]()||tn(n[V.dE],M.C$,!1,(function(n){e[V.d]?setTimeout((function(){return n[M.C$](e)}),0):n[M.C$](e)})))}}))}return n.__ieDyn=1,n}(),on=function(n){function e(){var t=n.call(this)||this;return(0,k.Z)(e,t,(function(n,e){function t(e){var t=n[V.tb]();t&&t[M.$F]([e],2)}n[V.VL]=function(n,t,i,r){e[V.VL](n,t,i||new D.AQ(n),r||new rn(n))},n.track=function(i){(0,w.Lm)(n[M.kl](),(function(){return"AppInsightsCore:track"}),(function(){null===i&&(t(i),(0,a._y)("Invalid telemetry item")),function(n){(0,a.le)(n[V.I])&&(t(n),(0,a._y)("telemetry name required"))}(i),e.track(i)}),(function(){return{item:i}}),!i.sync)}})),t}return(0,r.ne)(e,n),e.__ieDyn=1,e}(en),an=t(1539),un=t(5705),ln=function(n){function e(){var t=n.call(this)||this;return t.pluginVersionStringArr=[],(0,k.Z)(e,t,(function(n,e){n.logger&&n.logger.queue||(n.logger=new D.AQ({loggingLevelConsole:1})),n.initialize=function(t,i,r,o){(0,w.Lm)(n,(function(){return"AppInsightsCore.initialize"}),(function(){var u=n.pluginVersionStringArr;if(t){t.endpointUrl||(t.endpointUrl=an.YT);var l=t.propertyStorageOverride;!l||l.getProperty&&l.setProperty||(0,a._y)("Invalid property storage override passed."),t.channels&&(0,a.tO)(t.channels,(function(n){n&&(0,a.tO)(n,(function(n){if(n.identifier&&n.version){var e=n.identifier+"="+n.version;u.push(e)}}))}))}n.getWParam=function(){return"undefined"!=typeof document||t.enableWParam?0:-1},i&&(0,a.tO)(i,(function(n){if(n&&n.identifier&&n.version){var e=n.identifier+"="+n.version;u.push(e)}})),n.pluginVersionString=u.join(";"),n.pluginVersionStringArr=u;try{e.initialize(t,i,r,o),n.pollInternalLogs("InternalLog")}catch(e){var c=n.logger,s=(0,F.eU)(e);-1!==s.indexOf("channels")&&(s+="\n - Channels must be provided through config.channels only!"),(0,D.kP)(c,1,514,"SDK Initialization Failed - no telemetry will be sent: "+s)}}),(function(){return{config:t,extensions:i,logger:r,notificationManager:o}}))},n.track=function(t){(0,w.Lm)(n,(function(){return"AppInsightsCore.track"}),(function(){var i=t;if(i){i.timings=i.timings||{},i.timings.trackStart=(0,un.hK)(),(0,un.r7)(i.latency)||(i.latency=1);var r=i.ext=i.ext||{};r.sdk=r.sdk||{},r.sdk.ver=un.vs;var o=i.baseData=i.baseData||{};o[an.o6]=o[an.o6]||{};var a=o[an.o6];a[an.p8]=a[an.p8]||n.pluginVersionString||an.qS}e.track(i)}),(function(){return{item:t}}),!t.sync)}})),t}return(0,r.ne)(e,n),e.__ieDyn=1,e}(on);const cn=ln;var sn=function(n){function e(){var t=n.call(this)||this;return(0,k.Z)(e,t,(function(n,e){n.initialize=function(t,i,r,o){t&&!t.endpointUrl&&(t.endpointUrl=an.YT),n.getWParam=function(){return un.x9||t.enableWParam?0:-1};try{e.initialize(t,i,r,o)}catch(e){(0,D.kP)(n.logger,1,514,"Initialization Failed: "+(0,F.eU)(e)+"\n - Note: Channels must be provided through config.channels only")}},n.track=function(n){var t=n;if(t){var i=t.ext=t.ext||{};i.sdk=i.sdk||{},i.sdk.ver=un.vs}e.track(t)}})),t}return(0,r.ne)(e,n),e.__ieDyn=1,e}(en);const fn=sn;var dn=a.mf;function vn(n,e,t){return function(i){n[e]=i,t()}}const gn=function(){function n(e){var t=0,i=null,r=[];function o(){if(r.length>0){var n=r.slice();r=[],setTimeout((function(){for(var e=0,t=n.length;e<t;++e)try{n[e]()}catch(n){}}),0)}}function a(n){0===t&&(i=n,t=1,o())}function u(n){0===t&&(i=n,t=2,o())}(0,k.Z)(n,this,(function(e){e.then=function(e,a){return new n((function(u,l){!function(e,a,u,l){r.push((function(){var r;try{(r=1===t?dn(e)?e(i):i:dn(a)?a(i):i)instanceof n?r.then(u,l):2!==t||dn(a)?u(r):l(r)}catch(n){return void l(n)}})),0!==t&&o()}(e,a,u,l)}))},e.catch=function(n){return e.then(null,n)}})),function(){if(!dn(e))throw new TypeError("ESPromise: resolvedFunc argument is not a Function");try{e(a,u)}catch(n){u(n)}}()}return n.resolve=function(e){return e instanceof n?e:e&&dn(e.then)?new n((function(n,t){try{e.then(n,t)}catch(n){t(n)}})):new n((function(n){n(e)}))},n.reject=function(e){return new n((function(n,t){t(e)}))},n.all=function(e){if(e&&e.length)return new n((function(n,t){try{for(var i=[],r=0,o=0;o<e.length;o++){var a=e[o];a&&dn(a.then)?(r++,a.then(vn(i,o,(function(){0==--r&&n(i)})),t)):i[o]=a}0===r&&setTimeout((function(){n(i)}),0)}catch(n){t(n)}}))},n.race=function(e){return new n((function(n,t){if(e&&e.length)try{for(var i=function(i){var r=e[i];r&&dn(r.then)?r.then(n,t):setTimeout((function(){n(r)}),0)},r=0;r<e.length;r++)i(r)}catch(n){t(n)}}))},n}();var mn=6e5,pn=0,hn=[],yn=[],Sn=[];function Cn(){return(new Date).getTime()}const Pn=function(){function n(e,t){var i=0,r=(e||"<unnamed>")+"."+pn;function o(n){var e=(0,N.Rd)();e&&e.QUnit&&console&&console.log("ESPromiseScheduler["+r+"] "+n)}function a(n){(0,D.jV)(t,"ESPromiseScheduler["+r+"] "+n)}pn++,(0,k.Z)(n,this,(function(n){var e=null,t=0;function u(n,e){for(var t=0;t<n.length;t++)if(n[t].id===e)return n.splice(t,1)[0];return null}n.scheduleEvent=function(n,l,c){var s=r+"."+t;t++,l&&(s+="-("+l+")");var f=s+"{"+i+"}";i++;var d,v,g,m={evt:null,tm:Cn(),id:f,isRunning:!1,isAborted:!1};return m.evt=e?(d=m,v=e,g=new gn((function(n,e){var t=Cn()-v.tm,i=v.id;o("["+s+"] is waiting for ["+i+":"+t+" ms] to complete before starting -- ["+yn.length+"] waiting and ["+hn.length+"] running"),d.abort=function(n){d.abort=null,u(yn,s),d.isAborted=!0,e(new Error(n))},v.evt.then((function(t){u(yn,s),P(d).then(n,e)}),(function(t){u(yn,s),P(d).then(n,e)}))})),yn.push(d),g):P(m),(e=m).evt._schId=f,m.evt;function p(n){for(var e=Cn(),t=e-mn,i=n.length,r=0;r<i;){var o=n[r];if(o&&o.tm<t){var u=null;o.abort?(u="Aborting ["+o.id+"] due to Excessive runtime ("+(e-o.tm)+" ms)",o.abort(u)):u="Removing ["+o.id+"] due to Excessive runtime ("+(e-o.tm)+" ms)",a(u),n.splice(r,1),i--}else r++}}function h(n,t){var i=!1,r=u(hn,n);if(r||(r=u(Sn,n),i=!0),r){r.to&&(clearTimeout(r.to),r.to=null);var l=Cn()-r.tm;t?i?a("Timed out event ["+n+"] finally complete -- "+l+" ms"):o("Promise ["+n+"] Complete -- "+l+" ms"):(Sn.push(r),a("Event ["+n+"] Timed out and removed -- "+l+" ms"))}else o("Failed to remove ["+n+"] from running queue");e&&e.id===n&&(e=null),p(hn),p(yn),p(Sn)}function y(n,e){return function(t){return h(n,!0),e&&e(t),t}}function S(n,e,t,i){e.then((function(e){return e instanceof gn?(o("Event ["+n+"] returned a promise -- waiting"),S(n,e,t,i),e):y(n,t)(e)}),y(n,i))}function C(n,e){var t=n.id;return new gn((function(i,r){o("Event ["+t+"] Starting -- waited for "+(n.wTm||"--")+" ms"),n.isRunning=!0,n.abort=function(e){n.abort=null,n.isAborted=!0,h(t,!1),r(new Error(e))};var a=e(t);a instanceof gn?(c&&(n.to=setTimeout((function(){h(t,!1),r(new Error("Timed out after ["+c+"] ms"))}),c)),S(t,a,(function(e){o("Event ["+t+"] Resolving after "+(Cn()-n.tm)+" ms"),i(e)}),r)):(o("Promise ["+t+"] Auto completed as the start action did not return a promise"),i())}))}function P(e){var t=Cn();return e.wTm=t-e.tm,e.tm=t,e.isAborted?gn.reject(new Error("["+s+"] was aborted")):(hn.push(e),C(e,n))}}}))}return n.incomplete=function(){return hn},n.waitingToStart=function(){return yn},n}();var Tn=function(){function n(n){var e=this,t={},i=[],r=[];function o(n,e){var o,u=t[n];if(u&&(o=u[e]),!o&&null!==o){if((0,a.HD)(n)&&(0,a.HD)(e))if(r.length>0){for(var l=0;l<r.length;l++)if(r[l].handleField(n,e)){o={canHandle:!0,fieldHandler:r[l]};break}}else 0===i.length&&(o={canHandle:!0});if(!o&&null!==o)for(o=null,l=0;l<i.length;l++)if(i[l].handleField(n,e)){o={canHandle:!0,handler:i[l],fieldHandler:null};break}u||(u=t[n]={}),u[e]=o}return o}function u(n,e,t,i,r,o){if(n.handler)return n.handler.property(e,t,r,o);if(!(0,a.le)(r.kind)){if(4096==(4096&i)||!(0,un.oS)(r.kind))return null;r.value=r.value.toString()}return c(n.fieldHandler,e,t,i,r)}function l(n,e,t){return(0,un.Sn)(t)?{value:t}:null}function c(n,t,i,r,o){if(o&&n){var u=n.getSanitizer(t,i,r,o.kind,o.propertyType);if(u)if(4===r){var s={},f=o.value;(0,a.rW)(f,(function(e,r){var o=t+"."+i;if((0,un.Sn)(r)){var a=l(0,0,r);(a=c(n,o,e,(0,un.Sy)(r),a))&&(s[e]=a.value)}})),o.value=s}else{var d={path:t,name:i,type:r,prop:o,sanitizer:e};o=u.call(e,d)}}return o}n&&r.push(n),e.addSanitizer=function(n){n&&(i.push(n),t={})},e.addFieldSanitizer=function(n){n&&(r.push(n),t={})},e.handleField=function(n,e){var t=o(n,e);return!!t&&t.canHandle},e.value=function(n,e,t,i){var r=o(n,e);if(r&&r.canHandle){if(!r||!r.canHandle)return null;if(r.handler)return r.handler.value(n,e,t,i);if(!(0,a.HD)(e)||(0,a.le)(t)||t===an.qS)return null;var c=null,s=(0,un.Sy)(t);if(8192==(8192&s)){var f=-8193&s;if(c=t,!(0,un.Sn)(c.value)||1!==f&&2!==f&&3!==f&&4096!=(4096&f))return null}else 1===s||2===s||3===s||4096==(4096&s)?c=l(0,0,t):4===s&&(c=l(0,0,i?JSON.stringify(t):t));if(c)return u(r,n,e,s,c,i)}return null},e.property=function(n,e,t,i){var r=o(n,e);if(!r||!r.canHandle)return null;if(!(0,a.HD)(e)||(0,a.le)(t)||!(0,un.Sn)(t.value))return null;var l=(0,un.Sy)(t.value);return 0===l?null:u(r,n,e,l,t,i)}}return n.getFieldType=un.Sy,n}(),In=100,bn=t(8452),En=t(8956),An=t(7954),Ln=t(9406),On=t(1550),_n=t(6207)}};
//# sourceMappingURL=164.js.map