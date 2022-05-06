// jAjaxWrapper v1.0.25 by songhlc@yonyou.com
!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).jAjaxWrapper=r()}(this,(function(){"use strict";function e(e,r){return e(r={exports:{}},r.exports),r.exports}var r=e((function(e){function r(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=r=function(e){return typeof e}:e.exports=r=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(t)}e.exports=r})),t=/^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,n=Math.ceil,o=Math.floor,i="[BigNumber Error] ",u=i+"Number primitive has more than 15 significant digits: ",f=1e14,s=14,c=9007199254740991,a=[1,10,100,1e3,1e4,1e5,1e6,1e7,1e8,1e9,1e10,1e11,1e12,1e13],l=1e7,p=1e9;function h(e){var r=0|e;return e>0||e===r?r:r-1}function g(e){for(var r,t,n=1,o=e.length,i=e[0]+"";n<o;){for(r=e[n++]+"",t=s-r.length;t--;r="0"+r);i+=r}for(o=i.length;48===i.charCodeAt(--o););return i.slice(0,o+1||1)}function d(e,r){var t,n,o=e.c,i=r.c,u=e.s,f=r.s,s=e.e,c=r.e;if(!u||!f)return null;if(t=o&&!o[0],n=i&&!i[0],t||n)return t?n?0:-f:u;if(u!=f)return u;if(t=u<0,n=s==c,!o||!i)return n?0:!o^t?1:-1;if(!n)return s>c^t?1:-1;for(f=(s=o.length)<(c=i.length)?s:c,u=0;u<f;u++)if(o[u]!=i[u])return o[u]>i[u]^t?1:-1;return s==c?0:s>c^t?1:-1}function y(e,r,t,n){if(e<r||e>t||e!==o(e))throw Error(i+(n||"Argument")+("number"==typeof e?e<r||e>t?" out of range: ":" not an integer: ":" not a primitive number: ")+String(e))}function w(e){var r=e.c.length-1;return h(e.e/s)==r&&e.c[r]%2!=0}function m(e,r){return(e.length>1?e.charAt(0)+"."+e.slice(1):e)+(r<0?"e":"e+")+r}function v(e,r,t){var n,o;if(r<0){for(o=t+".";++r;o+=t);e=o+e}else if(++r>(n=e.length)){for(o=t,r-=n;--r;o+=t);e+=o}else r<n&&(e=e.slice(0,r)+"."+e.slice(r));return e}var b,O=function e(r){var b,O,A,N,E,S,x,B,T,_,j=z.prototype={constructor:z,toString:null,valueOf:null},I=new z(1),C=20,P=4,R=-7,L=21,D=-1e7,U=1e7,F=!1,k=1,M=0,G={prefix:"",groupSize:3,secondaryGroupSize:0,groupSeparator:",",decimalSeparator:".",fractionGroupSize:0,fractionGroupSeparator:" ",suffix:""},q="0123456789abcdefghijklmnopqrstuvwxyz",$=!0;function z(e,r){var n,i,f,a,l,p,h,g,d=this;if(!(d instanceof z))return new z(e,r);if(null==r){if(e&&!0===e._isBigNumber)return d.s=e.s,void(!e.c||e.e>U?d.c=d.e=null:e.e<D?d.c=[d.e=0]:(d.e=e.e,d.c=e.c.slice()));if((p="number"==typeof e)&&0*e==0){if(d.s=1/e<0?(e=-e,-1):1,e===~~e){for(a=0,l=e;l>=10;l/=10,a++);return void(a>U?d.c=d.e=null:(d.e=a,d.c=[e]))}g=String(e)}else{if(!t.test(g=String(e)))return A(d,g,p);d.s=45==g.charCodeAt(0)?(g=g.slice(1),-1):1}(a=g.indexOf("."))>-1&&(g=g.replace(".","")),(l=g.search(/e/i))>0?(a<0&&(a=l),a+=+g.slice(l+1),g=g.substring(0,l)):a<0&&(a=g.length)}else{if(y(r,2,q.length,"Base"),10==r&&$)return W(d=new z(e),C+d.e+1,P);if(g=String(e),p="number"==typeof e){if(0*e!=0)return A(d,g,p,r);if(d.s=1/e<0?(g=g.slice(1),-1):1,z.DEBUG&&g.replace(/^0\.0*|\./,"").length>15)throw Error(u+e)}else d.s=45===g.charCodeAt(0)?(g=g.slice(1),-1):1;for(n=q.slice(0,r),a=l=0,h=g.length;l<h;l++)if(n.indexOf(i=g.charAt(l))<0){if("."==i){if(l>a){a=h;continue}}else if(!f&&(g==g.toUpperCase()&&(g=g.toLowerCase())||g==g.toLowerCase()&&(g=g.toUpperCase()))){f=!0,l=-1,a=0;continue}return A(d,String(e),p,r)}p=!1,(a=(g=O(g,r,10,d.s)).indexOf("."))>-1?g=g.replace(".",""):a=g.length}for(l=0;48===g.charCodeAt(l);l++);for(h=g.length;48===g.charCodeAt(--h););if(g=g.slice(l,++h)){if(h-=l,p&&z.DEBUG&&h>15&&(e>c||e!==o(e)))throw Error(u+d.s*e);if((a=a-l-1)>U)d.c=d.e=null;else if(a<D)d.c=[d.e=0];else{if(d.e=a,d.c=[],l=(a+1)%s,a<0&&(l+=s),l<h){for(l&&d.c.push(+g.slice(0,l)),h-=s;l<h;)d.c.push(+g.slice(l,l+=s));l=s-(g=g.slice(l)).length}else l-=h;for(;l--;g+="0");d.c.push(+g)}}else d.c=[d.e=0]}function J(e,r,t,n){var o,i,u,f,s;if(null==t?t=P:y(t,0,8),!e.c)return e.toString();if(o=e.c[0],u=e.e,null==r)s=g(e.c),s=1==n||2==n&&(u<=R||u>=L)?m(s,u):v(s,u,"0");else if(i=(e=W(new z(e),r,t)).e,f=(s=g(e.c)).length,1==n||2==n&&(r<=i||i<=R)){for(;f<r;s+="0",f++);s=m(s,i)}else if(r-=u,s=v(s,i,"0"),i+1>f){if(--r>0)for(s+=".";r--;s+="0");}else if((r+=i-f)>0)for(i+1==f&&(s+=".");r--;s+="0");return e.s<0&&o?"-"+s:s}function H(e,r){for(var t,n=1,o=new z(e[0]);n<e.length;n++){if(!(t=new z(e[n])).s){o=t;break}r.call(o,t)&&(o=t)}return o}function V(e,r,t){for(var n=1,o=r.length;!r[--o];r.pop());for(o=r[0];o>=10;o/=10,n++);return(t=n+t*s-1)>U?e.c=e.e=null:t<D?e.c=[e.e=0]:(e.e=t,e.c=r),e}function W(e,r,t,i){var u,c,l,p,h,g,d,y=e.c,w=a;if(y){e:{for(u=1,p=y[0];p>=10;p/=10,u++);if((c=r-u)<0)c+=s,l=r,d=(h=y[g=0])/w[u-l-1]%10|0;else if((g=n((c+1)/s))>=y.length){if(!i)break e;for(;y.length<=g;y.push(0));h=d=0,u=1,l=(c%=s)-s+1}else{for(h=p=y[g],u=1;p>=10;p/=10,u++);d=(l=(c%=s)-s+u)<0?0:h/w[u-l-1]%10|0}if(i=i||r<0||null!=y[g+1]||(l<0?h:h%w[u-l-1]),i=t<4?(d||i)&&(0==t||t==(e.s<0?3:2)):d>5||5==d&&(4==t||i||6==t&&(c>0?l>0?h/w[u-l]:0:y[g-1])%10&1||t==(e.s<0?8:7)),r<1||!y[0])return y.length=0,i?(r-=e.e+1,y[0]=w[(s-r%s)%s],e.e=-r||0):y[0]=e.e=0,e;if(0==c?(y.length=g,p=1,g--):(y.length=g+1,p=w[s-c],y[g]=l>0?o(h/w[u-l]%w[l])*p:0),i)for(;;){if(0==g){for(c=1,l=y[0];l>=10;l/=10,c++);for(l=y[0]+=p,p=1;l>=10;l/=10,p++);c!=p&&(e.e++,y[0]==f&&(y[0]=1));break}if(y[g]+=p,y[g]!=f)break;y[g--]=0,p=1}for(c=y.length;0===y[--c];y.pop());}e.e>U?e.c=e.e=null:e.e<D&&(e.c=[e.e=0])}return e}function X(e){var r,t=e.e;return null===t?e.toString():(r=g(e.c),r=t<=R||t>=L?m(r,t):v(r,t,"0"),e.s<0?"-"+r:r)}return z.clone=e,z.ROUND_UP=0,z.ROUND_DOWN=1,z.ROUND_CEIL=2,z.ROUND_FLOOR=3,z.ROUND_HALF_UP=4,z.ROUND_HALF_DOWN=5,z.ROUND_HALF_EVEN=6,z.ROUND_HALF_CEIL=7,z.ROUND_HALF_FLOOR=8,z.EUCLID=9,z.config=z.set=function(e){var r,t;if(null!=e){if("object"!=typeof e)throw Error(i+"Object expected: "+e);if(e.hasOwnProperty(r="DECIMAL_PLACES")&&(y(t=e[r],0,p,r),C=t),e.hasOwnProperty(r="ROUNDING_MODE")&&(y(t=e[r],0,8,r),P=t),e.hasOwnProperty(r="EXPONENTIAL_AT")&&((t=e[r])&&t.pop?(y(t[0],-p,0,r),y(t[1],0,p,r),R=t[0],L=t[1]):(y(t,-p,p,r),R=-(L=t<0?-t:t))),e.hasOwnProperty(r="RANGE"))if((t=e[r])&&t.pop)y(t[0],-p,-1,r),y(t[1],1,p,r),D=t[0],U=t[1];else{if(y(t,-p,p,r),!t)throw Error(i+r+" cannot be zero: "+t);D=-(U=t<0?-t:t)}if(e.hasOwnProperty(r="CRYPTO")){if((t=e[r])!==!!t)throw Error(i+r+" not true or false: "+t);if(t){if("undefined"==typeof crypto||!crypto||!crypto.getRandomValues&&!crypto.randomBytes)throw F=!t,Error(i+"crypto unavailable");F=t}else F=t}if(e.hasOwnProperty(r="MODULO_MODE")&&(y(t=e[r],0,9,r),k=t),e.hasOwnProperty(r="POW_PRECISION")&&(y(t=e[r],0,p,r),M=t),e.hasOwnProperty(r="FORMAT")){if("object"!=typeof(t=e[r]))throw Error(i+r+" not an object: "+t);G=t}if(e.hasOwnProperty(r="ALPHABET")){if("string"!=typeof(t=e[r])||/^.?$|[+\-.\s]|(.).*\1/.test(t))throw Error(i+r+" invalid: "+t);$="0123456789"==t.slice(0,10),q=t}}return{DECIMAL_PLACES:C,ROUNDING_MODE:P,EXPONENTIAL_AT:[R,L],RANGE:[D,U],CRYPTO:F,MODULO_MODE:k,POW_PRECISION:M,FORMAT:G,ALPHABET:q}},z.isBigNumber=function(e){if(!e||!0!==e._isBigNumber)return!1;if(!z.DEBUG)return!0;var r,t,n=e.c,u=e.e,c=e.s;e:if("[object Array]"=={}.toString.call(n)){if((1===c||-1===c)&&u>=-p&&u<=p&&u===o(u)){if(0===n[0]){if(0===u&&1===n.length)return!0;break e}if((r=(u+1)%s)<1&&(r+=s),String(n[0]).length==r){for(r=0;r<n.length;r++)if((t=n[r])<0||t>=f||t!==o(t))break e;if(0!==t)return!0}}}else if(null===n&&null===u&&(null===c||1===c||-1===c))return!0;throw Error(i+"Invalid BigNumber: "+e)},z.maximum=z.max=function(){return H(arguments,j.lt)},z.minimum=z.min=function(){return H(arguments,j.gt)},z.random=(N=9007199254740992,E=Math.random()*N&2097151?function(){return o(Math.random()*N)}:function(){return 8388608*(1073741824*Math.random()|0)+(8388608*Math.random()|0)},function(e){var r,t,u,f,c,l=0,h=[],g=new z(I);if(null==e?e=C:y(e,0,p),f=n(e/s),F)if(crypto.getRandomValues){for(r=crypto.getRandomValues(new Uint32Array(f*=2));l<f;)(c=131072*r[l]+(r[l+1]>>>11))>=9e15?(t=crypto.getRandomValues(new Uint32Array(2)),r[l]=t[0],r[l+1]=t[1]):(h.push(c%1e14),l+=2);l=f/2}else{if(!crypto.randomBytes)throw F=!1,Error(i+"crypto unavailable");for(r=crypto.randomBytes(f*=7);l<f;)(c=281474976710656*(31&r[l])+1099511627776*r[l+1]+4294967296*r[l+2]+16777216*r[l+3]+(r[l+4]<<16)+(r[l+5]<<8)+r[l+6])>=9e15?crypto.randomBytes(7).copy(r,l):(h.push(c%1e14),l+=7);l=f/7}if(!F)for(;l<f;)(c=E())<9e15&&(h[l++]=c%1e14);for(f=h[--l],e%=s,f&&e&&(c=a[s-e],h[l]=o(f/c)*c);0===h[l];h.pop(),l--);if(l<0)h=[u=0];else{for(u=-1;0===h[0];h.splice(0,1),u-=s);for(l=1,c=h[0];c>=10;c/=10,l++);l<s&&(u-=s-l)}return g.e=u,g.c=h,g}),z.sum=function(){for(var e=1,r=arguments,t=new z(r[0]);e<r.length;)t=t.plus(r[e++]);return t},O=function(){var e="0123456789";function r(e,r,t,n){for(var o,i,u=[0],f=0,s=e.length;f<s;){for(i=u.length;i--;u[i]*=r);for(u[0]+=n.indexOf(e.charAt(f++)),o=0;o<u.length;o++)u[o]>t-1&&(null==u[o+1]&&(u[o+1]=0),u[o+1]+=u[o]/t|0,u[o]%=t)}return u.reverse()}return function(t,n,o,i,u){var f,s,c,a,l,p,h,d,y=t.indexOf("."),w=C,m=P;for(y>=0&&(a=M,M=0,t=t.replace(".",""),p=(d=new z(n)).pow(t.length-y),M=a,d.c=r(v(g(p.c),p.e,"0"),10,o,e),d.e=d.c.length),c=a=(h=r(t,n,o,u?(f=q,e):(f=e,q))).length;0==h[--a];h.pop());if(!h[0])return f.charAt(0);if(y<0?--c:(p.c=h,p.e=c,p.s=i,h=(p=b(p,d,w,m,o)).c,l=p.r,c=p.e),y=h[s=c+w+1],a=o/2,l=l||s<0||null!=h[s+1],l=m<4?(null!=y||l)&&(0==m||m==(p.s<0?3:2)):y>a||y==a&&(4==m||l||6==m&&1&h[s-1]||m==(p.s<0?8:7)),s<1||!h[0])t=l?v(f.charAt(1),-w,f.charAt(0)):f.charAt(0);else{if(h.length=s,l)for(--o;++h[--s]>o;)h[s]=0,s||(++c,h=[1].concat(h));for(a=h.length;!h[--a];);for(y=0,t="";y<=a;t+=f.charAt(h[y++]));t=v(t,c,f.charAt(0))}return t}}(),b=function(){function e(e,r,t){var n,o,i,u,f=0,s=e.length,c=r%l,a=r/l|0;for(e=e.slice();s--;)f=((o=c*(i=e[s]%l)+(n=a*i+(u=e[s]/l|0)*c)%l*l+f)/t|0)+(n/l|0)+a*u,e[s]=o%t;return f&&(e=[f].concat(e)),e}function r(e,r,t,n){var o,i;if(t!=n)i=t>n?1:-1;else for(o=i=0;o<t;o++)if(e[o]!=r[o]){i=e[o]>r[o]?1:-1;break}return i}function t(e,r,t,n){for(var o=0;t--;)e[t]-=o,o=e[t]<r[t]?1:0,e[t]=o*n+e[t]-r[t];for(;!e[0]&&e.length>1;e.splice(0,1));}return function(n,i,u,c,a){var l,p,g,d,y,w,m,v,b,O,A,N,E,S,x,B,T,_=n.s==i.s?1:-1,j=n.c,I=i.c;if(!(j&&j[0]&&I&&I[0]))return new z(n.s&&i.s&&(j?!I||j[0]!=I[0]:I)?j&&0==j[0]||!I?0*_:_/0:NaN);for(b=(v=new z(_)).c=[],_=u+(p=n.e-i.e)+1,a||(a=f,p=h(n.e/s)-h(i.e/s),_=_/s|0),g=0;I[g]==(j[g]||0);g++);if(I[g]>(j[g]||0)&&p--,_<0)b.push(1),d=!0;else{for(S=j.length,B=I.length,g=0,_+=2,(y=o(a/(I[0]+1)))>1&&(I=e(I,y,a),j=e(j,y,a),B=I.length,S=j.length),E=B,A=(O=j.slice(0,B)).length;A<B;O[A++]=0);T=I.slice(),T=[0].concat(T),x=I[0],I[1]>=a/2&&x++;do{if(y=0,(l=r(I,O,B,A))<0){if(N=O[0],B!=A&&(N=N*a+(O[1]||0)),(y=o(N/x))>1)for(y>=a&&(y=a-1),m=(w=e(I,y,a)).length,A=O.length;1==r(w,O,m,A);)y--,t(w,B<m?T:I,m,a),m=w.length,l=1;else 0==y&&(l=y=1),m=(w=I.slice()).length;if(m<A&&(w=[0].concat(w)),t(O,w,A,a),A=O.length,-1==l)for(;r(I,O,B,A)<1;)y++,t(O,B<A?T:I,A,a),A=O.length}else 0===l&&(y++,O=[0]);b[g++]=y,O[0]?O[A++]=j[E]||0:(O=[j[E]],A=1)}while((E++<S||null!=O[0])&&_--);d=null!=O[0],b[0]||b.splice(0,1)}if(a==f){for(g=1,_=b[0];_>=10;_/=10,g++);W(v,u+(v.e=g+p*s-1)+1,c,d)}else v.e=p,v.r=+d;return v}}(),S=/^(-?)0([xbo])(?=\w[\w.]*$)/i,x=/^([^.]+)\.$/,B=/^\.([^.]+)$/,T=/^-?(Infinity|NaN)$/,_=/^\s*\+(?=[\w.])|^\s+|\s+$/g,A=function(e,r,t,n){var o,u=t?r:r.replace(_,"");if(T.test(u))e.s=isNaN(u)?null:u<0?-1:1;else{if(!t&&(u=u.replace(S,(function(e,r,t){return o="x"==(t=t.toLowerCase())?16:"b"==t?2:8,n&&n!=o?e:r})),n&&(o=n,u=u.replace(x,"$1").replace(B,"0.$1")),r!=u))return new z(u,o);if(z.DEBUG)throw Error(i+"Not a"+(n?" base "+n:"")+" number: "+r);e.s=null}e.c=e.e=null},j.absoluteValue=j.abs=function(){var e=new z(this);return e.s<0&&(e.s=1),e},j.comparedTo=function(e,r){return d(this,new z(e,r))},j.decimalPlaces=j.dp=function(e,r){var t,n,o,i=this;if(null!=e)return y(e,0,p),null==r?r=P:y(r,0,8),W(new z(i),e+i.e+1,r);if(!(t=i.c))return null;if(n=((o=t.length-1)-h(this.e/s))*s,o=t[o])for(;o%10==0;o/=10,n--);return n<0&&(n=0),n},j.dividedBy=j.div=function(e,r){return b(this,new z(e,r),C,P)},j.dividedToIntegerBy=j.idiv=function(e,r){return b(this,new z(e,r),0,1)},j.exponentiatedBy=j.pow=function(e,r){var t,u,f,c,a,l,p,h,g=this;if((e=new z(e)).c&&!e.isInteger())throw Error(i+"Exponent not an integer: "+X(e));if(null!=r&&(r=new z(r)),a=e.e>14,!g.c||!g.c[0]||1==g.c[0]&&!g.e&&1==g.c.length||!e.c||!e.c[0])return h=new z(Math.pow(+X(g),a?2-w(e):+X(e))),r?h.mod(r):h;if(l=e.s<0,r){if(r.c?!r.c[0]:!r.s)return new z(NaN);(u=!l&&g.isInteger()&&r.isInteger())&&(g=g.mod(r))}else{if(e.e>9&&(g.e>0||g.e<-1||(0==g.e?g.c[0]>1||a&&g.c[1]>=24e7:g.c[0]<8e13||a&&g.c[0]<=9999975e7)))return c=g.s<0&&w(e)?-0:0,g.e>-1&&(c=1/c),new z(l?1/c:c);M&&(c=n(M/s+2))}for(a?(t=new z(.5),l&&(e.s=1),p=w(e)):p=(f=Math.abs(+X(e)))%2,h=new z(I);;){if(p){if(!(h=h.times(g)).c)break;c?h.c.length>c&&(h.c.length=c):u&&(h=h.mod(r))}if(f){if(0===(f=o(f/2)))break;p=f%2}else if(W(e=e.times(t),e.e+1,1),e.e>14)p=w(e);else{if(0===(f=+X(e)))break;p=f%2}g=g.times(g),c?g.c&&g.c.length>c&&(g.c.length=c):u&&(g=g.mod(r))}return u?h:(l&&(h=I.div(h)),r?h.mod(r):c?W(h,M,P,undefined):h)},j.integerValue=function(e){var r=new z(this);return null==e?e=P:y(e,0,8),W(r,r.e+1,e)},j.isEqualTo=j.eq=function(e,r){return 0===d(this,new z(e,r))},j.isFinite=function(){return!!this.c},j.isGreaterThan=j.gt=function(e,r){return d(this,new z(e,r))>0},j.isGreaterThanOrEqualTo=j.gte=function(e,r){return 1===(r=d(this,new z(e,r)))||0===r},j.isInteger=function(){return!!this.c&&h(this.e/s)>this.c.length-2},j.isLessThan=j.lt=function(e,r){return d(this,new z(e,r))<0},j.isLessThanOrEqualTo=j.lte=function(e,r){return-1===(r=d(this,new z(e,r)))||0===r},j.isNaN=function(){return!this.s},j.isNegative=function(){return this.s<0},j.isPositive=function(){return this.s>0},j.isZero=function(){return!!this.c&&0==this.c[0]},j.minus=function(e,r){var t,n,o,i,u=this,c=u.s;if(r=(e=new z(e,r)).s,!c||!r)return new z(NaN);if(c!=r)return e.s=-r,u.plus(e);var a=u.e/s,l=e.e/s,p=u.c,g=e.c;if(!a||!l){if(!p||!g)return p?(e.s=-r,e):new z(g?u:NaN);if(!p[0]||!g[0])return g[0]?(e.s=-r,e):new z(p[0]?u:3==P?-0:0)}if(a=h(a),l=h(l),p=p.slice(),c=a-l){for((i=c<0)?(c=-c,o=p):(l=a,o=g),o.reverse(),r=c;r--;o.push(0));o.reverse()}else for(n=(i=(c=p.length)<(r=g.length))?c:r,c=r=0;r<n;r++)if(p[r]!=g[r]){i=p[r]<g[r];break}if(i&&(o=p,p=g,g=o,e.s=-e.s),(r=(n=g.length)-(t=p.length))>0)for(;r--;p[t++]=0);for(r=f-1;n>c;){if(p[--n]<g[n]){for(t=n;t&&!p[--t];p[t]=r);--p[t],p[n]+=f}p[n]-=g[n]}for(;0==p[0];p.splice(0,1),--l);return p[0]?V(e,p,l):(e.s=3==P?-1:1,e.c=[e.e=0],e)},j.modulo=j.mod=function(e,r){var t,n,o=this;return e=new z(e,r),!o.c||!e.s||e.c&&!e.c[0]?new z(NaN):!e.c||o.c&&!o.c[0]?new z(o):(9==k?(n=e.s,e.s=1,t=b(o,e,0,3),e.s=n,t.s*=n):t=b(o,e,0,k),(e=o.minus(t.times(e))).c[0]||1!=k||(e.s=o.s),e)},j.multipliedBy=j.times=function(e,r){var t,n,o,i,u,c,a,p,g,d,y,w,m,v,b,O=this,A=O.c,N=(e=new z(e,r)).c;if(!(A&&N&&A[0]&&N[0]))return!O.s||!e.s||A&&!A[0]&&!N||N&&!N[0]&&!A?e.c=e.e=e.s=null:(e.s*=O.s,A&&N?(e.c=[0],e.e=0):e.c=e.e=null),e;for(n=h(O.e/s)+h(e.e/s),e.s*=O.s,(a=A.length)<(d=N.length)&&(m=A,A=N,N=m,o=a,a=d,d=o),o=a+d,m=[];o--;m.push(0));for(v=f,b=l,o=d;--o>=0;){for(t=0,y=N[o]%b,w=N[o]/b|0,i=o+(u=a);i>o;)t=((p=y*(p=A[--u]%b)+(c=w*p+(g=A[u]/b|0)*y)%b*b+m[i]+t)/v|0)+(c/b|0)+w*g,m[i--]=p%v;m[i]=t}return t?++n:m.splice(0,1),V(e,m,n)},j.negated=function(){var e=new z(this);return e.s=-e.s||null,e},j.plus=function(e,r){var t,n=this,o=n.s;if(r=(e=new z(e,r)).s,!o||!r)return new z(NaN);if(o!=r)return e.s=-r,n.minus(e);var i=n.e/s,u=e.e/s,c=n.c,a=e.c;if(!i||!u){if(!c||!a)return new z(o/0);if(!c[0]||!a[0])return a[0]?e:new z(c[0]?n:0*o)}if(i=h(i),u=h(u),c=c.slice(),o=i-u){for(o>0?(u=i,t=a):(o=-o,t=c),t.reverse();o--;t.push(0));t.reverse()}for((o=c.length)-(r=a.length)<0&&(t=a,a=c,c=t,r=o),o=0;r;)o=(c[--r]=c[r]+a[r]+o)/f|0,c[r]=f===c[r]?0:c[r]%f;return o&&(c=[o].concat(c),++u),V(e,c,u)},j.precision=j.sd=function(e,r){var t,n,o,i=this;if(null!=e&&e!==!!e)return y(e,1,p),null==r?r=P:y(r,0,8),W(new z(i),e,r);if(!(t=i.c))return null;if(n=(o=t.length-1)*s+1,o=t[o]){for(;o%10==0;o/=10,n--);for(o=t[0];o>=10;o/=10,n++);}return e&&i.e+1>n&&(n=i.e+1),n},j.shiftedBy=function(e){return y(e,-9007199254740991,c),this.times("1e"+e)},j.squareRoot=j.sqrt=function(){var e,r,t,n,o,i=this,u=i.c,f=i.s,s=i.e,c=C+4,a=new z("0.5");if(1!==f||!u||!u[0])return new z(!f||f<0&&(!u||u[0])?NaN:u?i:1/0);if(0==(f=Math.sqrt(+X(i)))||f==1/0?(((r=g(u)).length+s)%2==0&&(r+="0"),f=Math.sqrt(+r),s=h((s+1)/2)-(s<0||s%2),t=new z(r=f==1/0?"5e"+s:(r=f.toExponential()).slice(0,r.indexOf("e")+1)+s)):t=new z(f+""),t.c[0])for((f=(s=t.e)+c)<3&&(f=0);;)if(o=t,t=a.times(o.plus(b(i,o,c,1))),g(o.c).slice(0,f)===(r=g(t.c)).slice(0,f)){if(t.e<s&&--f,"9999"!=(r=r.slice(f-3,f+1))&&(n||"4999"!=r)){+r&&(+r.slice(1)||"5"!=r.charAt(0))||(W(t,t.e+C+2,1),e=!t.times(t).eq(i));break}if(!n&&(W(o,o.e+C+2,0),o.times(o).eq(i))){t=o;break}c+=4,f+=4,n=1}return W(t,t.e+C+1,P,e)},j.toExponential=function(e,r){return null!=e&&(y(e,0,p),e++),J(this,e,r,1)},j.toFixed=function(e,r){return null!=e&&(y(e,0,p),e=e+this.e+1),J(this,e,r)},j.toFormat=function(e,r,t){var n,o=this;if(null==t)null!=e&&r&&"object"==typeof r?(t=r,r=null):e&&"object"==typeof e?(t=e,e=r=null):t=G;else if("object"!=typeof t)throw Error(i+"Argument not an object: "+t);if(n=o.toFixed(e,r),o.c){var u,f=n.split("."),s=+t.groupSize,c=+t.secondaryGroupSize,a=t.groupSeparator||"",l=f[0],p=f[1],h=o.s<0,g=h?l.slice(1):l,d=g.length;if(c&&(u=s,s=c,c=u,d-=u),s>0&&d>0){for(u=d%s||s,l=g.substr(0,u);u<d;u+=s)l+=a+g.substr(u,s);c>0&&(l+=a+g.slice(u)),h&&(l="-"+l)}n=p?l+(t.decimalSeparator||"")+((c=+t.fractionGroupSize)?p.replace(new RegExp("\\d{"+c+"}\\B","g"),"$&"+(t.fractionGroupSeparator||"")):p):l}return(t.prefix||"")+n+(t.suffix||"")},j.toFraction=function(e){var r,t,n,o,u,f,c,l,p,h,d,y,w=this,m=w.c;if(null!=e&&(!(c=new z(e)).isInteger()&&(c.c||1!==c.s)||c.lt(I)))throw Error(i+"Argument "+(c.isInteger()?"out of range: ":"not an integer: ")+X(c));if(!m)return new z(w);for(r=new z(I),p=t=new z(I),n=l=new z(I),y=g(m),u=r.e=y.length-w.e-1,r.c[0]=a[(f=u%s)<0?s+f:f],e=!e||c.comparedTo(r)>0?u>0?r:p:c,f=U,U=1/0,c=new z(y),l.c[0]=0;h=b(c,r,0,1),1!=(o=t.plus(h.times(n))).comparedTo(e);)t=n,n=o,p=l.plus(h.times(o=p)),l=o,r=c.minus(h.times(o=r)),c=o;return o=b(e.minus(t),n,0,1),l=l.plus(o.times(p)),t=t.plus(o.times(n)),l.s=p.s=w.s,d=b(p,n,u*=2,P).minus(w).abs().comparedTo(b(l,t,u,P).minus(w).abs())<1?[p,n]:[l,t],U=f,d},j.toNumber=function(){return+X(this)},j.toPrecision=function(e,r){return null!=e&&y(e,1,p),J(this,e,r,2)},j.toString=function(e){var r,t=this,n=t.s,o=t.e;return null===o?n?(r="Infinity",n<0&&(r="-"+r)):r="NaN":(null==e?r=o<=R||o>=L?m(g(t.c),o):v(g(t.c),o,"0"):10===e&&$?r=v(g((t=W(new z(t),C+o+1,P)).c),t.e,"0"):(y(e,2,q.length,"Base"),r=O(v(g(t.c),o,"0"),10,e,n,!0)),n<0&&t.c[0]&&(r="-"+r)),r},j.valueOf=j.toJSON=function(){return X(this)},j._isBigNumber=!0,j[Symbol.toStringTag]="BigNumber",j[Symbol.for("nodejs.util.inspect.custom")]=j.valueOf,null!=r&&z.set(r),z}(),A=(b=Object.freeze({__proto__:null,BigNumber:O,default:O}))&&b.default||b,N=e((function(e){var r=e.exports;!function(){var e,t,n,o=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,i={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};function u(e){return o.lastIndex=0,o.test(e)?'"'+e.replace(o,(function(e){var r=i[e];return"string"==typeof r?r:"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)}))+'"':'"'+e+'"'}function f(r,o){var i,s,c,a,l,p=e,h=o[r],g=null!=h&&(h instanceof A||A.isBigNumber(h));switch(h&&"object"==typeof h&&"function"==typeof h.toJSON&&(h=h.toJSON(r)),"function"==typeof n&&(h=n.call(o,r,h)),typeof h){case"string":return g?h:u(h);case"number":return isFinite(h)?String(h):"null";case"boolean":case"null":case"bigint":return String(h);case"object":if(!h)return"null";if(e+=t,l=[],"[object Array]"===Object.prototype.toString.apply(h)){for(a=h.length,i=0;i<a;i+=1)l[i]=f(i,h)||"null";return c=0===l.length?"[]":e?"[\n"+e+l.join(",\n"+e)+"\n"+p+"]":"["+l.join(",")+"]",e=p,c}if(n&&"object"==typeof n)for(a=n.length,i=0;i<a;i+=1)"string"==typeof n[i]&&(c=f(s=n[i],h))&&l.push(u(s)+(e?": ":":")+c);else Object.keys(h).forEach((function(r){var t=f(r,h);t&&l.push(u(r)+(e?": ":":")+t)}));return c=0===l.length?"{}":e?"{\n"+e+l.join(",\n"+e)+"\n"+p+"}":"{"+l.join(",")+"}",e=p,c}}"function"!=typeof r.stringify&&(r.stringify=function(r,o,i){var u;if(e="",t="","number"==typeof i)for(u=0;u<i;u+=1)t+=" ";else"string"==typeof i&&(t=i);if(n=o,o&&"function"!=typeof o&&("object"!=typeof o||"number"!=typeof o.length))throw new Error("JSON.stringify");return f("",{"":r})})}()})),E=null;const S=/(?:_|\\u005[Ff])(?:_|\\u005[Ff])(?:p|\\u0070)(?:r|\\u0072)(?:o|\\u006[Ff])(?:t|\\u0074)(?:o|\\u006[Ff])(?:_|\\u005[Ff])(?:_|\\u005[Ff])/,x=/(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)/;var B=function(e){var r={strict:!1,storeAsString:!1,alwaysParseAsBig:!1,useNativeBigInt:!1,protoAction:"error",constructorAction:"error"};if(null!=e){if(!0===e.strict&&(r.strict=!0),!0===e.storeAsString&&(r.storeAsString=!0),r.alwaysParseAsBig=!0===e.alwaysParseAsBig&&e.alwaysParseAsBig,r.useNativeBigInt=!0===e.useNativeBigInt&&e.useNativeBigInt,void 0!==e.constructorAction){if("error"!==e.constructorAction&&"ignore"!==e.constructorAction&&"preserve"!==e.constructorAction)throw new Error(`Incorrect value for constructorAction option, must be "error", "ignore" or undefined but passed ${e.constructorAction}`);r.constructorAction=e.constructorAction}if(void 0!==e.protoAction){if("error"!==e.protoAction&&"ignore"!==e.protoAction&&"preserve"!==e.protoAction)throw new Error(`Incorrect value for protoAction option, must be "error", "ignore" or undefined but passed ${e.protoAction}`);r.protoAction=e.protoAction}}var t,n,o,i,u={'"':'"',"\\":"\\","/":"/",b:"\b",f:"\f",n:"\n",r:"\r",t:"\t"},f=function(e){throw{name:"SyntaxError",message:e,at:t,text:o}},s=function(e){return e&&e!==n&&f("Expected '"+e+"' instead of '"+n+"'"),n=o.charAt(t),t+=1,n},c=function(){var e,t="";for("-"===n&&(t="-",s("-"));n>="0"&&n<="9";)t+=n,s();if("."===n)for(t+=".";s()&&n>="0"&&n<="9";)t+=n;if("e"===n||"E"===n)for(t+=n,s(),"-"!==n&&"+"!==n||(t+=n,s());n>="0"&&n<="9";)t+=n,s();if(e=+t,isFinite(e))return null==E&&(E=A),t.length>15?r.storeAsString?t:r.useNativeBigInt?BigInt(t):new E(t):r.alwaysParseAsBig?r.useNativeBigInt?BigInt(e):new E(e):e;f("Bad number")},a=function(){var e,r,i,c="";if('"'===n)for(var a=t;s();){if('"'===n)return t-1>a&&(c+=o.substring(a,t-1)),s(),c;if("\\"===n){if(t-1>a&&(c+=o.substring(a,t-1)),s(),"u"===n){for(i=0,r=0;r<4&&(e=parseInt(s(),16),isFinite(e));r+=1)i=16*i+e;c+=String.fromCharCode(i)}else{if("string"!=typeof u[n])break;c+=u[n]}a=t}}f("Bad string")},l=function(){for(;n&&n<=" ";)s()};return i=function(){switch(l(),n){case"{":return function(){var e,t=Object.create(null);if("{"===n){if(s("{"),l(),"}"===n)return s("}"),t;for(;n;){if(e=a(),l(),s(":"),!0===r.strict&&Object.hasOwnProperty.call(t,e)&&f('Duplicate key "'+e+'"'),!0===S.test(e)?"error"===r.protoAction?f("Object contains forbidden prototype property"):"ignore"===r.protoAction?i():t[e]=i():!0===x.test(e)?"error"===r.constructorAction?f("Object contains forbidden constructor property"):"ignore"===r.constructorAction?i():t[e]=i():t[e]=i(),l(),"}"===n)return s("}"),t;s(","),l()}}f("Bad object")}();case"[":return function(){var e=[];if("["===n){if(s("["),l(),"]"===n)return s("]"),e;for(;n;){if(e.push(i()),l(),"]"===n)return s("]"),e;s(","),l()}}f("Bad array")}();case'"':return a();case"-":return c();default:return n>="0"&&n<="9"?c():function(){switch(n){case"t":return s("t"),s("r"),s("u"),s("e"),!0;case"f":return s("f"),s("a"),s("l"),s("s"),s("e"),!1;case"n":return s("n"),s("u"),s("l"),s("l"),null}f("Unexpected '"+n+"'")}()}},function(e,r){var u;return o=e+"",t=0,n=" ",u=i(),l(),n&&f("Syntax error"),"function"==typeof r?function e(t,n){var o,i=t[n];return i&&"object"==typeof i&&Object.keys(i).forEach((function(r){void 0!==(o=e(i,r))?i[r]=o:delete i[r]})),r.call(t,n,i)}({"":u},""):u}},T=N.stringify,_=function(e){return{parse:B(e),stringify:T}},j=B(),I=T;_.parse=j,_.stringify=I;var C=JSON.parse;JSON.parse=function(e){if(void 0===e)throw new Error("params should not be undefined!");return"string"==typeof e?C(JSON.stringify(_.parse(e))):e};var P=function(e){var t={};"string"==typeof e&&0===e.indexOf("{")?t=JSON.parse(e):"object"===r(e)&&(t=e);var n="";return Object.keys(t).forEach((function(e,r){var o=function(e,r){return"dataTables"!==e&&"parameters"!==e||"string"!=typeof r||0===r.indexOf("{")||(r=encodeURIComponent(r)),r}(e,t[e]);n+=r>0?"&"+e+"="+o:e+"="+o})),n},R=function(e){var r="";try{if("string"==typeof e)return e;r=JSON.stringify(e)}catch(t){r=e}return r},L=function(e,t){var n=e.ajax;e.ajax=function(e){if(e.data&&"object"===r(e.data)&&Object.keys(e.data).forEach((function(r){var t=e.data[r];t&&e.data.__proto__&&!e.data.__proto__[r]&&"function"==typeof t&&(e.data[r]=t())})),!1===e.async)return n(e);if(e.url&&e.url.indexOf("defdoc/selectdefdocbytype")>=0)return n(e);var o={};e.type||(e.type=e.method||"get"),o.method=e.type,o.url=e.url,"get"===e.type.toLowerCase()?o.params=e.data:o.data=e.data,o.headers=e.headers||{},o.headers["Content-Type"]||(e.contentType?o.headers["Content-Type"]=e.contentType:!1===e.contentType?o.headers["Content-Type"]="multipart/form-data":o.headers["Content-Type"]="application/x-www-form-urlencoded; charset=UTF-8");var i=o.headers["Content-Type"]||e.contentType;if(i&&i.indexOf("application/json")>=0&&!e.dataType&&(e.dataType="json"),e.beforeSend){var u={setRequestHeader:function(e,r){o.headers[e]=r}};e.beforeSend(u)}if(o.headers["Content-Type"].indexOf("x-www-form-urlencoded")>=0&&(o.data=P(e.data)),!e.success){var f=function(){},s=function(){},c=function(e){s=e};return t(o).then((function(r){var t=r.data;e.dataType&&"text"!=e.dataType.toLowerCase()||(t=R(r.data)),f(t)}),(function(e){s(e)})),{then:function(e){return f=e,{fail:c,catch:c,error:c}},catch:c,error:c,fail:c}}t(o).then((function(r){e.dataType&&"text"!=e.dataType.toLowerCase()?e.success(r.data,"success",r):e.success(R(r.data),"success",r)}),(function(r){e.error&&e.error(r)}))}};return L.isAxiosReady=function(e){var r,t=0;r=setInterval((function(){t++,(window.axios||t>50)&&(clearInterval(r),e())}),100)},L}));
//# sourceMappingURL=jAjaxWrapper.js.map
