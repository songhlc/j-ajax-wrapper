// jAjaxWrapper v1.0.38 by songhlc@yonyou.com
!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).jAjaxWrapper=r()}(this,(function(){"use strict";function e(e,r){return e(r={exports:{}},r.exports),r.exports}var r=e((function(e){function r(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=r=function(e){return typeof e}:e.exports=r=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(t)}e.exports=r})),t=/^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,n=Math.ceil,o=Math.floor,i="[BigNumber Error] ",u=i+"Number primitive has more than 15 significant digits: ",s=1e14,f=14,c=9007199254740991,a=[1,10,100,1e3,1e4,1e5,1e6,1e7,1e8,1e9,1e10,1e11,1e12,1e13],l=1e7,p=1e9;function h(e){var r=0|e;return e>0||e===r?r:r-1}function g(e){for(var r,t,n=1,o=e.length,i=e[0]+"";n<o;){for(r=e[n++]+"",t=f-r.length;t--;r="0"+r);i+=r}for(o=i.length;48===i.charCodeAt(--o););return i.slice(0,o+1||1)}function d(e,r){var t,n,o=e.c,i=r.c,u=e.s,s=r.s,f=e.e,c=r.e;if(!u||!s)return null;if(t=o&&!o[0],n=i&&!i[0],t||n)return t?n?0:-s:u;if(u!=s)return u;if(t=u<0,n=f==c,!o||!i)return n?0:!o^t?1:-1;if(!n)return f>c^t?1:-1;for(s=(f=o.length)<(c=i.length)?f:c,u=0;u<s;u++)if(o[u]!=i[u])return o[u]>i[u]^t?1:-1;return f==c?0:f>c^t?1:-1}function y(e,r,t,n){if(e<r||e>t||e!==o(e))throw Error(i+(n||"Argument")+("number"==typeof e?e<r||e>t?" out of range: ":" not an integer: ":" not a primitive number: ")+String(e))}function w(e){var r=e.c.length-1;return h(e.e/f)==r&&e.c[r]%2!=0}function m(e,r){return(e.length>1?e.charAt(0)+"."+e.slice(1):e)+(r<0?"e":"e+")+r}function v(e,r,t){var n,o;if(r<0){for(o=t+".";++r;o+=t);e=o+e}else if(++r>(n=e.length)){for(o=t,r-=n;--r;o+=t);e+=o}else r<n&&(e=e.slice(0,r)+"."+e.slice(r));return e}var b,N=function e(r){var b,N,O,A,E,S,x,B,I,_,T=J.prototype={constructor:J,toString:null,valueOf:null},j=new J(1),C=20,P=4,R=-7,F=21,L=-1e7,D=1e7,U=!1,M=1,k=0,$={prefix:"",groupSize:3,secondaryGroupSize:0,groupSeparator:",",decimalSeparator:".",fractionGroupSize:0,fractionGroupSeparator:" ",suffix:""},G="0123456789abcdefghijklmnopqrstuvwxyz",q=!0;function J(e,r){var n,i,s,a,l,p,h,g,d=this;if(!(d instanceof J))return new J(e,r);if(null==r){if(e&&!0===e._isBigNumber)return d.s=e.s,void(!e.c||e.e>D?d.c=d.e=null:e.e<L?d.c=[d.e=0]:(d.e=e.e,d.c=e.c.slice()));if((p="number"==typeof e)&&0*e==0){if(d.s=1/e<0?(e=-e,-1):1,e===~~e){for(a=0,l=e;l>=10;l/=10,a++);return void(a>D?d.c=d.e=null:(d.e=a,d.c=[e]))}g=String(e)}else{if(!t.test(g=String(e)))return O(d,g,p);d.s=45==g.charCodeAt(0)?(g=g.slice(1),-1):1}(a=g.indexOf("."))>-1&&(g=g.replace(".","")),(l=g.search(/e/i))>0?(a<0&&(a=l),a+=+g.slice(l+1),g=g.substring(0,l)):a<0&&(a=g.length)}else{if(y(r,2,G.length,"Base"),10==r&&q)return W(d=new J(e),C+d.e+1,P);if(g=String(e),p="number"==typeof e){if(0*e!=0)return O(d,g,p,r);if(d.s=1/e<0?(g=g.slice(1),-1):1,J.DEBUG&&g.replace(/^0\.0*|\./,"").length>15)throw Error(u+e)}else d.s=45===g.charCodeAt(0)?(g=g.slice(1),-1):1;for(n=G.slice(0,r),a=l=0,h=g.length;l<h;l++)if(n.indexOf(i=g.charAt(l))<0){if("."==i){if(l>a){a=h;continue}}else if(!s&&(g==g.toUpperCase()&&(g=g.toLowerCase())||g==g.toLowerCase()&&(g=g.toUpperCase()))){s=!0,l=-1,a=0;continue}return O(d,String(e),p,r)}p=!1,(a=(g=N(g,r,10,d.s)).indexOf("."))>-1?g=g.replace(".",""):a=g.length}for(l=0;48===g.charCodeAt(l);l++);for(h=g.length;48===g.charCodeAt(--h););if(g=g.slice(l,++h)){if(h-=l,p&&J.DEBUG&&h>15&&(e>c||e!==o(e)))throw Error(u+d.s*e);if((a=a-l-1)>D)d.c=d.e=null;else if(a<L)d.c=[d.e=0];else{if(d.e=a,d.c=[],l=(a+1)%f,a<0&&(l+=f),l<h){for(l&&d.c.push(+g.slice(0,l)),h-=f;l<h;)d.c.push(+g.slice(l,l+=f));l=f-(g=g.slice(l)).length}else l-=h;for(;l--;g+="0");d.c.push(+g)}}else d.c=[d.e=0]}function z(e,r,t,n){var o,i,u,s,f;if(null==t?t=P:y(t,0,8),!e.c)return e.toString();if(o=e.c[0],u=e.e,null==r)f=g(e.c),f=1==n||2==n&&(u<=R||u>=F)?m(f,u):v(f,u,"0");else if(i=(e=W(new J(e),r,t)).e,s=(f=g(e.c)).length,1==n||2==n&&(r<=i||i<=R)){for(;s<r;f+="0",s++);f=m(f,i)}else if(r-=u,f=v(f,i,"0"),i+1>s){if(--r>0)for(f+=".";r--;f+="0");}else if((r+=i-s)>0)for(i+1==s&&(f+=".");r--;f+="0");return e.s<0&&o?"-"+f:f}function H(e,r){for(var t,n=1,o=new J(e[0]);n<e.length;n++){if(!(t=new J(e[n])).s){o=t;break}r.call(o,t)&&(o=t)}return o}function V(e,r,t){for(var n=1,o=r.length;!r[--o];r.pop());for(o=r[0];o>=10;o/=10,n++);return(t=n+t*f-1)>D?e.c=e.e=null:t<L?e.c=[e.e=0]:(e.e=t,e.c=r),e}function W(e,r,t,i){var u,c,l,p,h,g,d,y=e.c,w=a;if(y){e:{for(u=1,p=y[0];p>=10;p/=10,u++);if((c=r-u)<0)c+=f,l=r,d=(h=y[g=0])/w[u-l-1]%10|0;else if((g=n((c+1)/f))>=y.length){if(!i)break e;for(;y.length<=g;y.push(0));h=d=0,u=1,l=(c%=f)-f+1}else{for(h=p=y[g],u=1;p>=10;p/=10,u++);d=(l=(c%=f)-f+u)<0?0:h/w[u-l-1]%10|0}if(i=i||r<0||null!=y[g+1]||(l<0?h:h%w[u-l-1]),i=t<4?(d||i)&&(0==t||t==(e.s<0?3:2)):d>5||5==d&&(4==t||i||6==t&&(c>0?l>0?h/w[u-l]:0:y[g-1])%10&1||t==(e.s<0?8:7)),r<1||!y[0])return y.length=0,i?(r-=e.e+1,y[0]=w[(f-r%f)%f],e.e=-r||0):y[0]=e.e=0,e;if(0==c?(y.length=g,p=1,g--):(y.length=g+1,p=w[f-c],y[g]=l>0?o(h/w[u-l]%w[l])*p:0),i)for(;;){if(0==g){for(c=1,l=y[0];l>=10;l/=10,c++);for(l=y[0]+=p,p=1;l>=10;l/=10,p++);c!=p&&(e.e++,y[0]==s&&(y[0]=1));break}if(y[g]+=p,y[g]!=s)break;y[g--]=0,p=1}for(c=y.length;0===y[--c];y.pop());}e.e>D?e.c=e.e=null:e.e<L&&(e.c=[e.e=0])}return e}function X(e){var r,t=e.e;return null===t?e.toString():(r=g(e.c),r=t<=R||t>=F?m(r,t):v(r,t,"0"),e.s<0?"-"+r:r)}return J.clone=e,J.ROUND_UP=0,J.ROUND_DOWN=1,J.ROUND_CEIL=2,J.ROUND_FLOOR=3,J.ROUND_HALF_UP=4,J.ROUND_HALF_DOWN=5,J.ROUND_HALF_EVEN=6,J.ROUND_HALF_CEIL=7,J.ROUND_HALF_FLOOR=8,J.EUCLID=9,J.config=J.set=function(e){var r,t;if(null!=e){if("object"!=typeof e)throw Error(i+"Object expected: "+e);if(e.hasOwnProperty(r="DECIMAL_PLACES")&&(y(t=e[r],0,p,r),C=t),e.hasOwnProperty(r="ROUNDING_MODE")&&(y(t=e[r],0,8,r),P=t),e.hasOwnProperty(r="EXPONENTIAL_AT")&&((t=e[r])&&t.pop?(y(t[0],-p,0,r),y(t[1],0,p,r),R=t[0],F=t[1]):(y(t,-p,p,r),R=-(F=t<0?-t:t))),e.hasOwnProperty(r="RANGE"))if((t=e[r])&&t.pop)y(t[0],-p,-1,r),y(t[1],1,p,r),L=t[0],D=t[1];else{if(y(t,-p,p,r),!t)throw Error(i+r+" cannot be zero: "+t);L=-(D=t<0?-t:t)}if(e.hasOwnProperty(r="CRYPTO")){if((t=e[r])!==!!t)throw Error(i+r+" not true or false: "+t);if(t){if("undefined"==typeof crypto||!crypto||!crypto.getRandomValues&&!crypto.randomBytes)throw U=!t,Error(i+"crypto unavailable");U=t}else U=t}if(e.hasOwnProperty(r="MODULO_MODE")&&(y(t=e[r],0,9,r),M=t),e.hasOwnProperty(r="POW_PRECISION")&&(y(t=e[r],0,p,r),k=t),e.hasOwnProperty(r="FORMAT")){if("object"!=typeof(t=e[r]))throw Error(i+r+" not an object: "+t);$=t}if(e.hasOwnProperty(r="ALPHABET")){if("string"!=typeof(t=e[r])||/^.?$|[+\-.\s]|(.).*\1/.test(t))throw Error(i+r+" invalid: "+t);q="0123456789"==t.slice(0,10),G=t}}return{DECIMAL_PLACES:C,ROUNDING_MODE:P,EXPONENTIAL_AT:[R,F],RANGE:[L,D],CRYPTO:U,MODULO_MODE:M,POW_PRECISION:k,FORMAT:$,ALPHABET:G}},J.isBigNumber=function(e){if(!e||!0!==e._isBigNumber)return!1;if(!J.DEBUG)return!0;var r,t,n=e.c,u=e.e,c=e.s;e:if("[object Array]"=={}.toString.call(n)){if((1===c||-1===c)&&u>=-p&&u<=p&&u===o(u)){if(0===n[0]){if(0===u&&1===n.length)return!0;break e}if((r=(u+1)%f)<1&&(r+=f),String(n[0]).length==r){for(r=0;r<n.length;r++)if((t=n[r])<0||t>=s||t!==o(t))break e;if(0!==t)return!0}}}else if(null===n&&null===u&&(null===c||1===c||-1===c))return!0;throw Error(i+"Invalid BigNumber: "+e)},J.maximum=J.max=function(){return H(arguments,T.lt)},J.minimum=J.min=function(){return H(arguments,T.gt)},J.random=(A=9007199254740992,E=Math.random()*A&2097151?function(){return o(Math.random()*A)}:function(){return 8388608*(1073741824*Math.random()|0)+(8388608*Math.random()|0)},function(e){var r,t,u,s,c,l=0,h=[],g=new J(j);if(null==e?e=C:y(e,0,p),s=n(e/f),U)if(crypto.getRandomValues){for(r=crypto.getRandomValues(new Uint32Array(s*=2));l<s;)(c=131072*r[l]+(r[l+1]>>>11))>=9e15?(t=crypto.getRandomValues(new Uint32Array(2)),r[l]=t[0],r[l+1]=t[1]):(h.push(c%1e14),l+=2);l=s/2}else{if(!crypto.randomBytes)throw U=!1,Error(i+"crypto unavailable");for(r=crypto.randomBytes(s*=7);l<s;)(c=281474976710656*(31&r[l])+1099511627776*r[l+1]+4294967296*r[l+2]+16777216*r[l+3]+(r[l+4]<<16)+(r[l+5]<<8)+r[l+6])>=9e15?crypto.randomBytes(7).copy(r,l):(h.push(c%1e14),l+=7);l=s/7}if(!U)for(;l<s;)(c=E())<9e15&&(h[l++]=c%1e14);for(s=h[--l],e%=f,s&&e&&(c=a[f-e],h[l]=o(s/c)*c);0===h[l];h.pop(),l--);if(l<0)h=[u=0];else{for(u=-1;0===h[0];h.splice(0,1),u-=f);for(l=1,c=h[0];c>=10;c/=10,l++);l<f&&(u-=f-l)}return g.e=u,g.c=h,g}),J.sum=function(){for(var e=1,r=arguments,t=new J(r[0]);e<r.length;)t=t.plus(r[e++]);return t},N=function(){var e="0123456789";function r(e,r,t,n){for(var o,i,u=[0],s=0,f=e.length;s<f;){for(i=u.length;i--;u[i]*=r);for(u[0]+=n.indexOf(e.charAt(s++)),o=0;o<u.length;o++)u[o]>t-1&&(null==u[o+1]&&(u[o+1]=0),u[o+1]+=u[o]/t|0,u[o]%=t)}return u.reverse()}return function(t,n,o,i,u){var s,f,c,a,l,p,h,d,y=t.indexOf("."),w=C,m=P;for(y>=0&&(a=k,k=0,t=t.replace(".",""),p=(d=new J(n)).pow(t.length-y),k=a,d.c=r(v(g(p.c),p.e,"0"),10,o,e),d.e=d.c.length),c=a=(h=r(t,n,o,u?(s=G,e):(s=e,G))).length;0==h[--a];h.pop());if(!h[0])return s.charAt(0);if(y<0?--c:(p.c=h,p.e=c,p.s=i,h=(p=b(p,d,w,m,o)).c,l=p.r,c=p.e),y=h[f=c+w+1],a=o/2,l=l||f<0||null!=h[f+1],l=m<4?(null!=y||l)&&(0==m||m==(p.s<0?3:2)):y>a||y==a&&(4==m||l||6==m&&1&h[f-1]||m==(p.s<0?8:7)),f<1||!h[0])t=l?v(s.charAt(1),-w,s.charAt(0)):s.charAt(0);else{if(h.length=f,l)for(--o;++h[--f]>o;)h[f]=0,f||(++c,h=[1].concat(h));for(a=h.length;!h[--a];);for(y=0,t="";y<=a;t+=s.charAt(h[y++]));t=v(t,c,s.charAt(0))}return t}}(),b=function(){function e(e,r,t){var n,o,i,u,s=0,f=e.length,c=r%l,a=r/l|0;for(e=e.slice();f--;)s=((o=c*(i=e[f]%l)+(n=a*i+(u=e[f]/l|0)*c)%l*l+s)/t|0)+(n/l|0)+a*u,e[f]=o%t;return s&&(e=[s].concat(e)),e}function r(e,r,t,n){var o,i;if(t!=n)i=t>n?1:-1;else for(o=i=0;o<t;o++)if(e[o]!=r[o]){i=e[o]>r[o]?1:-1;break}return i}function t(e,r,t,n){for(var o=0;t--;)e[t]-=o,o=e[t]<r[t]?1:0,e[t]=o*n+e[t]-r[t];for(;!e[0]&&e.length>1;e.splice(0,1));}return function(n,i,u,c,a){var l,p,g,d,y,w,m,v,b,N,O,A,E,S,x,B,I,_=n.s==i.s?1:-1,T=n.c,j=i.c;if(!(T&&T[0]&&j&&j[0]))return new J(n.s&&i.s&&(T?!j||T[0]!=j[0]:j)?T&&0==T[0]||!j?0*_:_/0:NaN);for(b=(v=new J(_)).c=[],_=u+(p=n.e-i.e)+1,a||(a=s,p=h(n.e/f)-h(i.e/f),_=_/f|0),g=0;j[g]==(T[g]||0);g++);if(j[g]>(T[g]||0)&&p--,_<0)b.push(1),d=!0;else{for(S=T.length,B=j.length,g=0,_+=2,(y=o(a/(j[0]+1)))>1&&(j=e(j,y,a),T=e(T,y,a),B=j.length,S=T.length),E=B,O=(N=T.slice(0,B)).length;O<B;N[O++]=0);I=j.slice(),I=[0].concat(I),x=j[0],j[1]>=a/2&&x++;do{if(y=0,(l=r(j,N,B,O))<0){if(A=N[0],B!=O&&(A=A*a+(N[1]||0)),(y=o(A/x))>1)for(y>=a&&(y=a-1),m=(w=e(j,y,a)).length,O=N.length;1==r(w,N,m,O);)y--,t(w,B<m?I:j,m,a),m=w.length,l=1;else 0==y&&(l=y=1),m=(w=j.slice()).length;if(m<O&&(w=[0].concat(w)),t(N,w,O,a),O=N.length,-1==l)for(;r(j,N,B,O)<1;)y++,t(N,B<O?I:j,O,a),O=N.length}else 0===l&&(y++,N=[0]);b[g++]=y,N[0]?N[O++]=T[E]||0:(N=[T[E]],O=1)}while((E++<S||null!=N[0])&&_--);d=null!=N[0],b[0]||b.splice(0,1)}if(a==s){for(g=1,_=b[0];_>=10;_/=10,g++);W(v,u+(v.e=g+p*f-1)+1,c,d)}else v.e=p,v.r=+d;return v}}(),S=/^(-?)0([xbo])(?=\w[\w.]*$)/i,x=/^([^.]+)\.$/,B=/^\.([^.]+)$/,I=/^-?(Infinity|NaN)$/,_=/^\s*\+(?=[\w.])|^\s+|\s+$/g,O=function(e,r,t,n){var o,u=t?r:r.replace(_,"");if(I.test(u))e.s=isNaN(u)?null:u<0?-1:1;else{if(!t&&(u=u.replace(S,(function(e,r,t){return o="x"==(t=t.toLowerCase())?16:"b"==t?2:8,n&&n!=o?e:r})),n&&(o=n,u=u.replace(x,"$1").replace(B,"0.$1")),r!=u))return new J(u,o);if(J.DEBUG)throw Error(i+"Not a"+(n?" base "+n:"")+" number: "+r);e.s=null}e.c=e.e=null},T.absoluteValue=T.abs=function(){var e=new J(this);return e.s<0&&(e.s=1),e},T.comparedTo=function(e,r){return d(this,new J(e,r))},T.decimalPlaces=T.dp=function(e,r){var t,n,o,i=this;if(null!=e)return y(e,0,p),null==r?r=P:y(r,0,8),W(new J(i),e+i.e+1,r);if(!(t=i.c))return null;if(n=((o=t.length-1)-h(this.e/f))*f,o=t[o])for(;o%10==0;o/=10,n--);return n<0&&(n=0),n},T.dividedBy=T.div=function(e,r){return b(this,new J(e,r),C,P)},T.dividedToIntegerBy=T.idiv=function(e,r){return b(this,new J(e,r),0,1)},T.exponentiatedBy=T.pow=function(e,r){var t,u,s,c,a,l,p,h,g=this;if((e=new J(e)).c&&!e.isInteger())throw Error(i+"Exponent not an integer: "+X(e));if(null!=r&&(r=new J(r)),a=e.e>14,!g.c||!g.c[0]||1==g.c[0]&&!g.e&&1==g.c.length||!e.c||!e.c[0])return h=new J(Math.pow(+X(g),a?2-w(e):+X(e))),r?h.mod(r):h;if(l=e.s<0,r){if(r.c?!r.c[0]:!r.s)return new J(NaN);(u=!l&&g.isInteger()&&r.isInteger())&&(g=g.mod(r))}else{if(e.e>9&&(g.e>0||g.e<-1||(0==g.e?g.c[0]>1||a&&g.c[1]>=24e7:g.c[0]<8e13||a&&g.c[0]<=9999975e7)))return c=g.s<0&&w(e)?-0:0,g.e>-1&&(c=1/c),new J(l?1/c:c);k&&(c=n(k/f+2))}for(a?(t=new J(.5),l&&(e.s=1),p=w(e)):p=(s=Math.abs(+X(e)))%2,h=new J(j);;){if(p){if(!(h=h.times(g)).c)break;c?h.c.length>c&&(h.c.length=c):u&&(h=h.mod(r))}if(s){if(0===(s=o(s/2)))break;p=s%2}else if(W(e=e.times(t),e.e+1,1),e.e>14)p=w(e);else{if(0===(s=+X(e)))break;p=s%2}g=g.times(g),c?g.c&&g.c.length>c&&(g.c.length=c):u&&(g=g.mod(r))}return u?h:(l&&(h=j.div(h)),r?h.mod(r):c?W(h,k,P,undefined):h)},T.integerValue=function(e){var r=new J(this);return null==e?e=P:y(e,0,8),W(r,r.e+1,e)},T.isEqualTo=T.eq=function(e,r){return 0===d(this,new J(e,r))},T.isFinite=function(){return!!this.c},T.isGreaterThan=T.gt=function(e,r){return d(this,new J(e,r))>0},T.isGreaterThanOrEqualTo=T.gte=function(e,r){return 1===(r=d(this,new J(e,r)))||0===r},T.isInteger=function(){return!!this.c&&h(this.e/f)>this.c.length-2},T.isLessThan=T.lt=function(e,r){return d(this,new J(e,r))<0},T.isLessThanOrEqualTo=T.lte=function(e,r){return-1===(r=d(this,new J(e,r)))||0===r},T.isNaN=function(){return!this.s},T.isNegative=function(){return this.s<0},T.isPositive=function(){return this.s>0},T.isZero=function(){return!!this.c&&0==this.c[0]},T.minus=function(e,r){var t,n,o,i,u=this,c=u.s;if(r=(e=new J(e,r)).s,!c||!r)return new J(NaN);if(c!=r)return e.s=-r,u.plus(e);var a=u.e/f,l=e.e/f,p=u.c,g=e.c;if(!a||!l){if(!p||!g)return p?(e.s=-r,e):new J(g?u:NaN);if(!p[0]||!g[0])return g[0]?(e.s=-r,e):new J(p[0]?u:3==P?-0:0)}if(a=h(a),l=h(l),p=p.slice(),c=a-l){for((i=c<0)?(c=-c,o=p):(l=a,o=g),o.reverse(),r=c;r--;o.push(0));o.reverse()}else for(n=(i=(c=p.length)<(r=g.length))?c:r,c=r=0;r<n;r++)if(p[r]!=g[r]){i=p[r]<g[r];break}if(i&&(o=p,p=g,g=o,e.s=-e.s),(r=(n=g.length)-(t=p.length))>0)for(;r--;p[t++]=0);for(r=s-1;n>c;){if(p[--n]<g[n]){for(t=n;t&&!p[--t];p[t]=r);--p[t],p[n]+=s}p[n]-=g[n]}for(;0==p[0];p.splice(0,1),--l);return p[0]?V(e,p,l):(e.s=3==P?-1:1,e.c=[e.e=0],e)},T.modulo=T.mod=function(e,r){var t,n,o=this;return e=new J(e,r),!o.c||!e.s||e.c&&!e.c[0]?new J(NaN):!e.c||o.c&&!o.c[0]?new J(o):(9==M?(n=e.s,e.s=1,t=b(o,e,0,3),e.s=n,t.s*=n):t=b(o,e,0,M),(e=o.minus(t.times(e))).c[0]||1!=M||(e.s=o.s),e)},T.multipliedBy=T.times=function(e,r){var t,n,o,i,u,c,a,p,g,d,y,w,m,v,b,N=this,O=N.c,A=(e=new J(e,r)).c;if(!(O&&A&&O[0]&&A[0]))return!N.s||!e.s||O&&!O[0]&&!A||A&&!A[0]&&!O?e.c=e.e=e.s=null:(e.s*=N.s,O&&A?(e.c=[0],e.e=0):e.c=e.e=null),e;for(n=h(N.e/f)+h(e.e/f),e.s*=N.s,(a=O.length)<(d=A.length)&&(m=O,O=A,A=m,o=a,a=d,d=o),o=a+d,m=[];o--;m.push(0));for(v=s,b=l,o=d;--o>=0;){for(t=0,y=A[o]%b,w=A[o]/b|0,i=o+(u=a);i>o;)t=((p=y*(p=O[--u]%b)+(c=w*p+(g=O[u]/b|0)*y)%b*b+m[i]+t)/v|0)+(c/b|0)+w*g,m[i--]=p%v;m[i]=t}return t?++n:m.splice(0,1),V(e,m,n)},T.negated=function(){var e=new J(this);return e.s=-e.s||null,e},T.plus=function(e,r){var t,n=this,o=n.s;if(r=(e=new J(e,r)).s,!o||!r)return new J(NaN);if(o!=r)return e.s=-r,n.minus(e);var i=n.e/f,u=e.e/f,c=n.c,a=e.c;if(!i||!u){if(!c||!a)return new J(o/0);if(!c[0]||!a[0])return a[0]?e:new J(c[0]?n:0*o)}if(i=h(i),u=h(u),c=c.slice(),o=i-u){for(o>0?(u=i,t=a):(o=-o,t=c),t.reverse();o--;t.push(0));t.reverse()}for((o=c.length)-(r=a.length)<0&&(t=a,a=c,c=t,r=o),o=0;r;)o=(c[--r]=c[r]+a[r]+o)/s|0,c[r]=s===c[r]?0:c[r]%s;return o&&(c=[o].concat(c),++u),V(e,c,u)},T.precision=T.sd=function(e,r){var t,n,o,i=this;if(null!=e&&e!==!!e)return y(e,1,p),null==r?r=P:y(r,0,8),W(new J(i),e,r);if(!(t=i.c))return null;if(n=(o=t.length-1)*f+1,o=t[o]){for(;o%10==0;o/=10,n--);for(o=t[0];o>=10;o/=10,n++);}return e&&i.e+1>n&&(n=i.e+1),n},T.shiftedBy=function(e){return y(e,-9007199254740991,c),this.times("1e"+e)},T.squareRoot=T.sqrt=function(){var e,r,t,n,o,i=this,u=i.c,s=i.s,f=i.e,c=C+4,a=new J("0.5");if(1!==s||!u||!u[0])return new J(!s||s<0&&(!u||u[0])?NaN:u?i:1/0);if(0==(s=Math.sqrt(+X(i)))||s==1/0?(((r=g(u)).length+f)%2==0&&(r+="0"),s=Math.sqrt(+r),f=h((f+1)/2)-(f<0||f%2),t=new J(r=s==1/0?"5e"+f:(r=s.toExponential()).slice(0,r.indexOf("e")+1)+f)):t=new J(s+""),t.c[0])for((s=(f=t.e)+c)<3&&(s=0);;)if(o=t,t=a.times(o.plus(b(i,o,c,1))),g(o.c).slice(0,s)===(r=g(t.c)).slice(0,s)){if(t.e<f&&--s,"9999"!=(r=r.slice(s-3,s+1))&&(n||"4999"!=r)){+r&&(+r.slice(1)||"5"!=r.charAt(0))||(W(t,t.e+C+2,1),e=!t.times(t).eq(i));break}if(!n&&(W(o,o.e+C+2,0),o.times(o).eq(i))){t=o;break}c+=4,s+=4,n=1}return W(t,t.e+C+1,P,e)},T.toExponential=function(e,r){return null!=e&&(y(e,0,p),e++),z(this,e,r,1)},T.toFixed=function(e,r){return null!=e&&(y(e,0,p),e=e+this.e+1),z(this,e,r)},T.toFormat=function(e,r,t){var n,o=this;if(null==t)null!=e&&r&&"object"==typeof r?(t=r,r=null):e&&"object"==typeof e?(t=e,e=r=null):t=$;else if("object"!=typeof t)throw Error(i+"Argument not an object: "+t);if(n=o.toFixed(e,r),o.c){var u,s=n.split("."),f=+t.groupSize,c=+t.secondaryGroupSize,a=t.groupSeparator||"",l=s[0],p=s[1],h=o.s<0,g=h?l.slice(1):l,d=g.length;if(c&&(u=f,f=c,c=u,d-=u),f>0&&d>0){for(u=d%f||f,l=g.substr(0,u);u<d;u+=f)l+=a+g.substr(u,f);c>0&&(l+=a+g.slice(u)),h&&(l="-"+l)}n=p?l+(t.decimalSeparator||"")+((c=+t.fractionGroupSize)?p.replace(new RegExp("\\d{"+c+"}\\B","g"),"$&"+(t.fractionGroupSeparator||"")):p):l}return(t.prefix||"")+n+(t.suffix||"")},T.toFraction=function(e){var r,t,n,o,u,s,c,l,p,h,d,y,w=this,m=w.c;if(null!=e&&(!(c=new J(e)).isInteger()&&(c.c||1!==c.s)||c.lt(j)))throw Error(i+"Argument "+(c.isInteger()?"out of range: ":"not an integer: ")+X(c));if(!m)return new J(w);for(r=new J(j),p=t=new J(j),n=l=new J(j),y=g(m),u=r.e=y.length-w.e-1,r.c[0]=a[(s=u%f)<0?f+s:s],e=!e||c.comparedTo(r)>0?u>0?r:p:c,s=D,D=1/0,c=new J(y),l.c[0]=0;h=b(c,r,0,1),1!=(o=t.plus(h.times(n))).comparedTo(e);)t=n,n=o,p=l.plus(h.times(o=p)),l=o,r=c.minus(h.times(o=r)),c=o;return o=b(e.minus(t),n,0,1),l=l.plus(o.times(p)),t=t.plus(o.times(n)),l.s=p.s=w.s,d=b(p,n,u*=2,P).minus(w).abs().comparedTo(b(l,t,u,P).minus(w).abs())<1?[p,n]:[l,t],D=s,d},T.toNumber=function(){return+X(this)},T.toPrecision=function(e,r){return null!=e&&y(e,1,p),z(this,e,r,2)},T.toString=function(e){var r,t=this,n=t.s,o=t.e;return null===o?n?(r="Infinity",n<0&&(r="-"+r)):r="NaN":(null==e?r=o<=R||o>=F?m(g(t.c),o):v(g(t.c),o,"0"):10===e&&q?r=v(g((t=W(new J(t),C+o+1,P)).c),t.e,"0"):(y(e,2,G.length,"Base"),r=N(v(g(t.c),o,"0"),10,e,n,!0)),n<0&&t.c[0]&&(r="-"+r)),r},T.valueOf=T.toJSON=function(){return X(this)},T._isBigNumber=!0,T[Symbol.toStringTag]="BigNumber",T[Symbol.for("nodejs.util.inspect.custom")]=T.valueOf,null!=r&&J.set(r),J}(),O=(b=Object.freeze({__proto__:null,BigNumber:N,default:N}))&&b.default||b,A=e((function(e){var r=e.exports;!function(){var e,t,n,o=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,i={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};function u(e){return o.lastIndex=0,o.test(e)?'"'+e.replace(o,(function(e){var r=i[e];return"string"==typeof r?r:"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)}))+'"':'"'+e+'"'}function s(r,o){var i,f,c,a,l,p=e,h=o[r],g=null!=h&&(h instanceof O||O.isBigNumber(h));switch(h&&"object"==typeof h&&"function"==typeof h.toJSON&&(h=h.toJSON(r)),"function"==typeof n&&(h=n.call(o,r,h)),typeof h){case"string":return g?h:u(h);case"number":return isFinite(h)?String(h):"null";case"boolean":case"null":case"bigint":return String(h);case"object":if(!h)return"null";if(e+=t,l=[],"[object Array]"===Object.prototype.toString.apply(h)){for(a=h.length,i=0;i<a;i+=1)l[i]=s(i,h)||"null";return c=0===l.length?"[]":e?"[\n"+e+l.join(",\n"+e)+"\n"+p+"]":"["+l.join(",")+"]",e=p,c}if(n&&"object"==typeof n)for(a=n.length,i=0;i<a;i+=1)"string"==typeof n[i]&&(c=s(f=n[i],h))&&l.push(u(f)+(e?": ":":")+c);else Object.keys(h).forEach((function(r){var t=s(r,h);t&&l.push(u(r)+(e?": ":":")+t)}));return c=0===l.length?"{}":e?"{\n"+e+l.join(",\n"+e)+"\n"+p+"}":"{"+l.join(",")+"}",e=p,c}}"function"!=typeof r.stringify&&(r.stringify=function(r,o,i){var u;if(e="",t="","number"==typeof i)for(u=0;u<i;u+=1)t+=" ";else"string"==typeof i&&(t=i);if(n=o,o&&"function"!=typeof o&&("object"!=typeof o||"number"!=typeof o.length))throw new Error("JSON.stringify");return s("",{"":r})})}()})),E=null;const S=/(?:_|\\u005[Ff])(?:_|\\u005[Ff])(?:p|\\u0070)(?:r|\\u0072)(?:o|\\u006[Ff])(?:t|\\u0074)(?:o|\\u006[Ff])(?:_|\\u005[Ff])(?:_|\\u005[Ff])/,x=/(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)/;Number.isSafeInteger=Number.isSafeInteger||function(e){return Number.isInteger(e)&&Math.abs(e)<=Number.MAX_SAFE_INTEGER};var B=function(e){var r={strict:!1,storeAsString:!1,alwaysParseAsBig:!1,useNativeBigInt:!1,protoAction:"error",constructorAction:"error"};if(null!=e){if(!0===e.strict&&(r.strict=!0),!0===e.storeAsString&&(r.storeAsString=!0),r.alwaysParseAsBig=!0===e.alwaysParseAsBig&&e.alwaysParseAsBig,r.useNativeBigInt=!0===e.useNativeBigInt&&e.useNativeBigInt,void 0!==e.constructorAction){if("error"!==e.constructorAction&&"ignore"!==e.constructorAction&&"preserve"!==e.constructorAction)throw new Error(`Incorrect value for constructorAction option, must be "error", "ignore" or undefined but passed ${e.constructorAction}`);r.constructorAction=e.constructorAction}if(void 0!==e.protoAction){if("error"!==e.protoAction&&"ignore"!==e.protoAction&&"preserve"!==e.protoAction)throw new Error(`Incorrect value for protoAction option, must be "error", "ignore" or undefined but passed ${e.protoAction}`);r.protoAction=e.protoAction}}var t,n,o,i,u={'"':'"',"\\":"\\","/":"/",b:"\b",f:"\f",n:"\n",r:"\r",t:"\t"},s=function(e){throw{name:"SyntaxError",message:e,at:t,text:o}},f=function(e){return e&&e!==n&&s("Expected '"+e+"' instead of '"+n+"'"),n=o.charAt(t),t+=1,n},c=function(){var e,t="";for("-"===n&&(t="-",f("-"));n>="0"&&n<="9";)t+=n,f();if("."===n)for(t+=".";f()&&n>="0"&&n<="9";)t+=n;if("e"===n||"E"===n)for(t+=n,f(),"-"!==n&&"+"!==n||(t+=n,f());n>="0"&&n<="9";)t+=n,f();if(e=+t,isFinite(e))return null==E&&(E=O),Number.isSafeInteger(e)?r.alwaysParseAsBig?r.useNativeBigInt?BigInt(e):new E(e):e:r.storeAsString?/[\.eE]/.test(t)&&(e+"").length<16?e:t:/[\.eE]/.test(t)?e:r.useNativeBigInt?BigInt(t):new E(t);s("Bad number")},a=function(){var e,r,i,c="";if('"'===n)for(var a=t;f();){if('"'===n)return t-1>a&&(c+=o.substring(a,t-1)),f(),c;if("\\"===n){if(t-1>a&&(c+=o.substring(a,t-1)),f(),"u"===n){for(i=0,r=0;r<4&&(e=parseInt(f(),16),isFinite(e));r+=1)i=16*i+e;c+=String.fromCharCode(i)}else{if("string"!=typeof u[n])break;c+=u[n]}a=t}}s("Bad string")},l=function(){for(;n&&n<=" ";)f()};return i=function(){switch(l(),n){case"{":return function(){var e,t=Object.create(null);if("{"===n){if(f("{"),l(),"}"===n)return f("}"),t;for(;n;){if(e=a(),l(),f(":"),!0===r.strict&&Object.hasOwnProperty.call(t,e)&&s('Duplicate key "'+e+'"'),!0===S.test(e)?"error"===r.protoAction?s("Object contains forbidden prototype property"):"ignore"===r.protoAction?i():t[e]=i():!0===x.test(e)?"error"===r.constructorAction?s("Object contains forbidden constructor property"):"ignore"===r.constructorAction?i():t[e]=i():t[e]=i(),l(),"}"===n)return f("}"),t;f(","),l()}}s("Bad object")}();case"[":return function(){var e=[];if("["===n){if(f("["),l(),"]"===n)return f("]"),e;for(;n;){if(e.push(i()),l(),"]"===n)return f("]"),e;f(","),l()}}s("Bad array")}();case'"':return a();case"-":return c();default:return n>="0"&&n<="9"?c():function(){switch(n){case"t":return f("t"),f("r"),f("u"),f("e"),!0;case"f":return f("f"),f("a"),f("l"),f("s"),f("e"),!1;case"n":return f("n"),f("u"),f("l"),f("l"),null}s("Unexpected '"+n+"'")}()}},function(e,r){var u;return o=e+"",t=0,n=" ",u=i(),l(),n&&s("Syntax error"),"function"==typeof r?function e(t,n){var o,i=t[n];return i&&"object"==typeof i&&Object.keys(i).forEach((function(r){void 0!==(o=e(i,r))?i[r]=o:delete i[r]})),r.call(t,n,i)}({"":u},""):u}},I=A.stringify,_=function(e){return{parse:B(e),stringify:I}},T=B(),j=I;_.parse=T,_.stringify=j;var C=JSON.parse;window.originJSONparse=C;var P=_({storeAsString:!0});window.JsonBigString=P,String.prototype.toFixed=function(e){var r=this.valueOf();return isNaN(r)?r:Number(r).toFixed(e)},JSON.parse=function(e){if(void 0===e)throw new Error("params should not be undefined!");return"string"==typeof e?C(P.stringify(P.parse(e))):e};var R=function(e){var t={};"string"==typeof e&&0===e.indexOf("{")?t=JSON.parse(e):"object"===r(e)&&(t=e);var n="";return Object.keys(t).forEach((function(e,r){var o=function(e,r){return"dataTables"!==e&&"parameters"!==e||(r=encodeURIComponent(r)),r}(e,t[e]);n+=r>0?"&"+e+"="+o:e+"="+o})),n},F=function(e){var r="";try{if("string"==typeof e)return e;r=JSON.stringify(e)}catch(t){r=e}return r},L=function(e,t){var n=e.ajax;e.ajax=function(e){if(e.data&&"object"===r(e.data)&&Object.keys(e.data).forEach((function(r){var t=e.data[r];t&&e.data.__proto__&&!e.data.__proto__[r]&&"function"==typeof t&&(e.data[r]=t())})),!1===e.async)return n(e);if(e.url&&e.url.indexOf("defdoc/selectdefdocbytype")>=0)return n(e);var o={};e.type||(e.type=e.method||"get"),o.method=e.type,o.url=e.url,"get"===e.type.toLowerCase()?o.params=e.data:o.data=e.data,o.headers=e.headers||{},o.headers["Content-Type"]||(e.contentType?o.headers["Content-Type"]=e.contentType:!1===e.contentType?o.headers["Content-Type"]="multipart/form-data":o.headers["Content-Type"]="application/x-www-form-urlencoded; charset=UTF-8");var i=o.headers["Content-Type"]||e.contentType;if(i&&i.indexOf("application/json")>=0&&!e.dataType&&(e.dataType="json"),e.beforeSend){var u={setRequestHeader:function(e,r){o.headers[e]=r}};e.beforeSend(u)}if(o.headers["Content-Type"].indexOf("x-www-form-urlencoded")>=0&&(o.data=R(e.data)),!e.success){var s=[],f=function(){},c={},a=function(e){return f=e,c};return t(o).then((function(r){var t=r.data;(r.headers["content-type"]||"").indexOf("application/json")<0&&(!e.dataType||"text"==e.dataType.toLowerCase())&&(t=F(r.data)),s&&s.forEach((function(e){try{e(t)}catch(e){console.error(e)}}))}),(function(e){f(e)})),c={then:function(e){return s.push(e),c},catch:a,error:a,fail:a}}t(o).then((function(r){(r.headers["content-type"]||"").indexOf("application/json")<0&&(!e.dataType||"text"==e.dataType.toLowerCase())?e.success(F(r.data),"success",r):e.success(r.data,"success",r)}),(function(r){e.error&&e.error(r)}))}};L.isAxiosReady=function(e){var r,t=0;r=setInterval((function(){t++,(window.axios||t>50)&&(clearInterval(r),e())}),100)};var D,U,M;return D=function(){if(window.$&&window.$.isNumeric){var e=$.isNumeric;$.isNumeric=function(r){return!("string"==typeof r&&r.length>15)&&e(r)}}},M=0,U=setInterval((function(){M++,(window.$&&window.$.isNumeric||M>50)&&(clearInterval(U),D())}),200),L}));
//# sourceMappingURL=jAjaxWrapper.js.map
