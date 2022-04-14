// jAjaxWrapper v1.0.3 by songhlc@yonyou.com
!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).jAjaxWrapper=r()}(this,(function(){"use strict";function e(e,r){return e(r={exports:{}},r.exports),r.exports}var r=e((function(e){function r(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=r=function(e){return typeof e}:e.exports=r=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(t)}e.exports=r})),t=/^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,n=Math.ceil,i=Math.floor,o="[BigNumber Error] ",u=o+"Number primitive has more than 15 significant digits: ",f=1e14,s=14,c=9007199254740991,l=[1,10,100,1e3,1e4,1e5,1e6,1e7,1e8,1e9,1e10,1e11,1e12,1e13],a=1e7,h=1e9;function p(e){var r=0|e;return e>0||e===r?r:r-1}function g(e){for(var r,t,n=1,i=e.length,o=e[0]+"";n<i;){for(r=e[n++]+"",t=s-r.length;t--;r="0"+r);o+=r}for(i=o.length;48===o.charCodeAt(--i););return o.slice(0,i+1||1)}function d(e,r){var t,n,i=e.c,o=r.c,u=e.s,f=r.s,s=e.e,c=r.e;if(!u||!f)return null;if(t=i&&!i[0],n=o&&!o[0],t||n)return t?n?0:-f:u;if(u!=f)return u;if(t=u<0,n=s==c,!i||!o)return n?0:!i^t?1:-1;if(!n)return s>c^t?1:-1;for(f=(s=i.length)<(c=o.length)?s:c,u=0;u<f;u++)if(i[u]!=o[u])return i[u]>o[u]^t?1:-1;return s==c?0:s>c^t?1:-1}function y(e,r,t,n){if(e<r||e>t||e!==i(e))throw Error(o+(n||"Argument")+("number"==typeof e?e<r||e>t?" out of range: ":" not an integer: ":" not a primitive number: ")+String(e))}function w(e){var r=e.c.length-1;return p(e.e/s)==r&&e.c[r]%2!=0}function m(e,r){return(e.length>1?e.charAt(0)+"."+e.slice(1):e)+(r<0?"e":"e+")+r}function b(e,r,t){var n,i;if(r<0){for(i=t+".";++r;i+=t);e=i+e}else if(++r>(n=e.length)){for(i=t,r-=n;--r;i+=t);e+=i}else r<n&&(e=e.slice(0,r)+"."+e.slice(r));return e}var v,A=function e(r){var v,A,O,N,E,S,x,B,j,I,_=z.prototype={constructor:z,toString:null,valueOf:null},P=new z(1),T=20,R=4,C=-7,D=21,F=-1e7,U=1e7,L=!1,M=1,k=0,G={prefix:"",groupSize:3,secondaryGroupSize:0,groupSeparator:",",decimalSeparator:".",fractionGroupSize:0,fractionGroupSeparator:" ",suffix:""},q="0123456789abcdefghijklmnopqrstuvwxyz",$=!0;function z(e,r){var n,o,f,l,a,h,p,g,d=this;if(!(d instanceof z))return new z(e,r);if(null==r){if(e&&!0===e._isBigNumber)return d.s=e.s,void(!e.c||e.e>U?d.c=d.e=null:e.e<F?d.c=[d.e=0]:(d.e=e.e,d.c=e.c.slice()));if((h="number"==typeof e)&&0*e==0){if(d.s=1/e<0?(e=-e,-1):1,e===~~e){for(l=0,a=e;a>=10;a/=10,l++);return void(l>U?d.c=d.e=null:(d.e=l,d.c=[e]))}g=String(e)}else{if(!t.test(g=String(e)))return O(d,g,h);d.s=45==g.charCodeAt(0)?(g=g.slice(1),-1):1}(l=g.indexOf("."))>-1&&(g=g.replace(".","")),(a=g.search(/e/i))>0?(l<0&&(l=a),l+=+g.slice(a+1),g=g.substring(0,a)):l<0&&(l=g.length)}else{if(y(r,2,q.length,"Base"),10==r&&$)return W(d=new z(e),T+d.e+1,R);if(g=String(e),h="number"==typeof e){if(0*e!=0)return O(d,g,h,r);if(d.s=1/e<0?(g=g.slice(1),-1):1,z.DEBUG&&g.replace(/^0\.0*|\./,"").length>15)throw Error(u+e)}else d.s=45===g.charCodeAt(0)?(g=g.slice(1),-1):1;for(n=q.slice(0,r),l=a=0,p=g.length;a<p;a++)if(n.indexOf(o=g.charAt(a))<0){if("."==o){if(a>l){l=p;continue}}else if(!f&&(g==g.toUpperCase()&&(g=g.toLowerCase())||g==g.toLowerCase()&&(g=g.toUpperCase()))){f=!0,a=-1,l=0;continue}return O(d,String(e),h,r)}h=!1,(l=(g=A(g,r,10,d.s)).indexOf("."))>-1?g=g.replace(".",""):l=g.length}for(a=0;48===g.charCodeAt(a);a++);for(p=g.length;48===g.charCodeAt(--p););if(g=g.slice(a,++p)){if(p-=a,h&&z.DEBUG&&p>15&&(e>c||e!==i(e)))throw Error(u+d.s*e);if((l=l-a-1)>U)d.c=d.e=null;else if(l<F)d.c=[d.e=0];else{if(d.e=l,d.c=[],a=(l+1)%s,l<0&&(a+=s),a<p){for(a&&d.c.push(+g.slice(0,a)),p-=s;a<p;)d.c.push(+g.slice(a,a+=s));a=s-(g=g.slice(a)).length}else a-=p;for(;a--;g+="0");d.c.push(+g)}}else d.c=[d.e=0]}function H(e,r,t,n){var i,o,u,f,s;if(null==t?t=R:y(t,0,8),!e.c)return e.toString();if(i=e.c[0],u=e.e,null==r)s=g(e.c),s=1==n||2==n&&(u<=C||u>=D)?m(s,u):b(s,u,"0");else if(o=(e=W(new z(e),r,t)).e,f=(s=g(e.c)).length,1==n||2==n&&(r<=o||o<=C)){for(;f<r;s+="0",f++);s=m(s,o)}else if(r-=u,s=b(s,o,"0"),o+1>f){if(--r>0)for(s+=".";r--;s+="0");}else if((r+=o-f)>0)for(o+1==f&&(s+=".");r--;s+="0");return e.s<0&&i?"-"+s:s}function J(e,r){for(var t,n=1,i=new z(e[0]);n<e.length;n++){if(!(t=new z(e[n])).s){i=t;break}r.call(i,t)&&(i=t)}return i}function V(e,r,t){for(var n=1,i=r.length;!r[--i];r.pop());for(i=r[0];i>=10;i/=10,n++);return(t=n+t*s-1)>U?e.c=e.e=null:t<F?e.c=[e.e=0]:(e.e=t,e.c=r),e}function W(e,r,t,o){var u,c,a,h,p,g,d,y=e.c,w=l;if(y){e:{for(u=1,h=y[0];h>=10;h/=10,u++);if((c=r-u)<0)c+=s,a=r,d=(p=y[g=0])/w[u-a-1]%10|0;else if((g=n((c+1)/s))>=y.length){if(!o)break e;for(;y.length<=g;y.push(0));p=d=0,u=1,a=(c%=s)-s+1}else{for(p=h=y[g],u=1;h>=10;h/=10,u++);d=(a=(c%=s)-s+u)<0?0:p/w[u-a-1]%10|0}if(o=o||r<0||null!=y[g+1]||(a<0?p:p%w[u-a-1]),o=t<4?(d||o)&&(0==t||t==(e.s<0?3:2)):d>5||5==d&&(4==t||o||6==t&&(c>0?a>0?p/w[u-a]:0:y[g-1])%10&1||t==(e.s<0?8:7)),r<1||!y[0])return y.length=0,o?(r-=e.e+1,y[0]=w[(s-r%s)%s],e.e=-r||0):y[0]=e.e=0,e;if(0==c?(y.length=g,h=1,g--):(y.length=g+1,h=w[s-c],y[g]=a>0?i(p/w[u-a]%w[a])*h:0),o)for(;;){if(0==g){for(c=1,a=y[0];a>=10;a/=10,c++);for(a=y[0]+=h,h=1;a>=10;a/=10,h++);c!=h&&(e.e++,y[0]==f&&(y[0]=1));break}if(y[g]+=h,y[g]!=f)break;y[g--]=0,h=1}for(c=y.length;0===y[--c];y.pop());}e.e>U?e.c=e.e=null:e.e<F&&(e.c=[e.e=0])}return e}function X(e){var r,t=e.e;return null===t?e.toString():(r=g(e.c),r=t<=C||t>=D?m(r,t):b(r,t,"0"),e.s<0?"-"+r:r)}return z.clone=e,z.ROUND_UP=0,z.ROUND_DOWN=1,z.ROUND_CEIL=2,z.ROUND_FLOOR=3,z.ROUND_HALF_UP=4,z.ROUND_HALF_DOWN=5,z.ROUND_HALF_EVEN=6,z.ROUND_HALF_CEIL=7,z.ROUND_HALF_FLOOR=8,z.EUCLID=9,z.config=z.set=function(e){var r,t;if(null!=e){if("object"!=typeof e)throw Error(o+"Object expected: "+e);if(e.hasOwnProperty(r="DECIMAL_PLACES")&&(y(t=e[r],0,h,r),T=t),e.hasOwnProperty(r="ROUNDING_MODE")&&(y(t=e[r],0,8,r),R=t),e.hasOwnProperty(r="EXPONENTIAL_AT")&&((t=e[r])&&t.pop?(y(t[0],-h,0,r),y(t[1],0,h,r),C=t[0],D=t[1]):(y(t,-h,h,r),C=-(D=t<0?-t:t))),e.hasOwnProperty(r="RANGE"))if((t=e[r])&&t.pop)y(t[0],-h,-1,r),y(t[1],1,h,r),F=t[0],U=t[1];else{if(y(t,-h,h,r),!t)throw Error(o+r+" cannot be zero: "+t);F=-(U=t<0?-t:t)}if(e.hasOwnProperty(r="CRYPTO")){if((t=e[r])!==!!t)throw Error(o+r+" not true or false: "+t);if(t){if("undefined"==typeof crypto||!crypto||!crypto.getRandomValues&&!crypto.randomBytes)throw L=!t,Error(o+"crypto unavailable");L=t}else L=t}if(e.hasOwnProperty(r="MODULO_MODE")&&(y(t=e[r],0,9,r),M=t),e.hasOwnProperty(r="POW_PRECISION")&&(y(t=e[r],0,h,r),k=t),e.hasOwnProperty(r="FORMAT")){if("object"!=typeof(t=e[r]))throw Error(o+r+" not an object: "+t);G=t}if(e.hasOwnProperty(r="ALPHABET")){if("string"!=typeof(t=e[r])||/^.?$|[+\-.\s]|(.).*\1/.test(t))throw Error(o+r+" invalid: "+t);$="0123456789"==t.slice(0,10),q=t}}return{DECIMAL_PLACES:T,ROUNDING_MODE:R,EXPONENTIAL_AT:[C,D],RANGE:[F,U],CRYPTO:L,MODULO_MODE:M,POW_PRECISION:k,FORMAT:G,ALPHABET:q}},z.isBigNumber=function(e){if(!e||!0!==e._isBigNumber)return!1;if(!z.DEBUG)return!0;var r,t,n=e.c,u=e.e,c=e.s;e:if("[object Array]"=={}.toString.call(n)){if((1===c||-1===c)&&u>=-h&&u<=h&&u===i(u)){if(0===n[0]){if(0===u&&1===n.length)return!0;break e}if((r=(u+1)%s)<1&&(r+=s),String(n[0]).length==r){for(r=0;r<n.length;r++)if((t=n[r])<0||t>=f||t!==i(t))break e;if(0!==t)return!0}}}else if(null===n&&null===u&&(null===c||1===c||-1===c))return!0;throw Error(o+"Invalid BigNumber: "+e)},z.maximum=z.max=function(){return J(arguments,_.lt)},z.minimum=z.min=function(){return J(arguments,_.gt)},z.random=(N=9007199254740992,E=Math.random()*N&2097151?function(){return i(Math.random()*N)}:function(){return 8388608*(1073741824*Math.random()|0)+(8388608*Math.random()|0)},function(e){var r,t,u,f,c,a=0,p=[],g=new z(P);if(null==e?e=T:y(e,0,h),f=n(e/s),L)if(crypto.getRandomValues){for(r=crypto.getRandomValues(new Uint32Array(f*=2));a<f;)(c=131072*r[a]+(r[a+1]>>>11))>=9e15?(t=crypto.getRandomValues(new Uint32Array(2)),r[a]=t[0],r[a+1]=t[1]):(p.push(c%1e14),a+=2);a=f/2}else{if(!crypto.randomBytes)throw L=!1,Error(o+"crypto unavailable");for(r=crypto.randomBytes(f*=7);a<f;)(c=281474976710656*(31&r[a])+1099511627776*r[a+1]+4294967296*r[a+2]+16777216*r[a+3]+(r[a+4]<<16)+(r[a+5]<<8)+r[a+6])>=9e15?crypto.randomBytes(7).copy(r,a):(p.push(c%1e14),a+=7);a=f/7}if(!L)for(;a<f;)(c=E())<9e15&&(p[a++]=c%1e14);for(f=p[--a],e%=s,f&&e&&(c=l[s-e],p[a]=i(f/c)*c);0===p[a];p.pop(),a--);if(a<0)p=[u=0];else{for(u=-1;0===p[0];p.splice(0,1),u-=s);for(a=1,c=p[0];c>=10;c/=10,a++);a<s&&(u-=s-a)}return g.e=u,g.c=p,g}),z.sum=function(){for(var e=1,r=arguments,t=new z(r[0]);e<r.length;)t=t.plus(r[e++]);return t},A=function(){var e="0123456789";function r(e,r,t,n){for(var i,o,u=[0],f=0,s=e.length;f<s;){for(o=u.length;o--;u[o]*=r);for(u[0]+=n.indexOf(e.charAt(f++)),i=0;i<u.length;i++)u[i]>t-1&&(null==u[i+1]&&(u[i+1]=0),u[i+1]+=u[i]/t|0,u[i]%=t)}return u.reverse()}return function(t,n,i,o,u){var f,s,c,l,a,h,p,d,y=t.indexOf("."),w=T,m=R;for(y>=0&&(l=k,k=0,t=t.replace(".",""),h=(d=new z(n)).pow(t.length-y),k=l,d.c=r(b(g(h.c),h.e,"0"),10,i,e),d.e=d.c.length),c=l=(p=r(t,n,i,u?(f=q,e):(f=e,q))).length;0==p[--l];p.pop());if(!p[0])return f.charAt(0);if(y<0?--c:(h.c=p,h.e=c,h.s=o,p=(h=v(h,d,w,m,i)).c,a=h.r,c=h.e),y=p[s=c+w+1],l=i/2,a=a||s<0||null!=p[s+1],a=m<4?(null!=y||a)&&(0==m||m==(h.s<0?3:2)):y>l||y==l&&(4==m||a||6==m&&1&p[s-1]||m==(h.s<0?8:7)),s<1||!p[0])t=a?b(f.charAt(1),-w,f.charAt(0)):f.charAt(0);else{if(p.length=s,a)for(--i;++p[--s]>i;)p[s]=0,s||(++c,p=[1].concat(p));for(l=p.length;!p[--l];);for(y=0,t="";y<=l;t+=f.charAt(p[y++]));t=b(t,c,f.charAt(0))}return t}}(),v=function(){function e(e,r,t){var n,i,o,u,f=0,s=e.length,c=r%a,l=r/a|0;for(e=e.slice();s--;)f=((i=c*(o=e[s]%a)+(n=l*o+(u=e[s]/a|0)*c)%a*a+f)/t|0)+(n/a|0)+l*u,e[s]=i%t;return f&&(e=[f].concat(e)),e}function r(e,r,t,n){var i,o;if(t!=n)o=t>n?1:-1;else for(i=o=0;i<t;i++)if(e[i]!=r[i]){o=e[i]>r[i]?1:-1;break}return o}function t(e,r,t,n){for(var i=0;t--;)e[t]-=i,i=e[t]<r[t]?1:0,e[t]=i*n+e[t]-r[t];for(;!e[0]&&e.length>1;e.splice(0,1));}return function(n,o,u,c,l){var a,h,g,d,y,w,m,b,v,A,O,N,E,S,x,B,j,I=n.s==o.s?1:-1,_=n.c,P=o.c;if(!(_&&_[0]&&P&&P[0]))return new z(n.s&&o.s&&(_?!P||_[0]!=P[0]:P)?_&&0==_[0]||!P?0*I:I/0:NaN);for(v=(b=new z(I)).c=[],I=u+(h=n.e-o.e)+1,l||(l=f,h=p(n.e/s)-p(o.e/s),I=I/s|0),g=0;P[g]==(_[g]||0);g++);if(P[g]>(_[g]||0)&&h--,I<0)v.push(1),d=!0;else{for(S=_.length,B=P.length,g=0,I+=2,(y=i(l/(P[0]+1)))>1&&(P=e(P,y,l),_=e(_,y,l),B=P.length,S=_.length),E=B,O=(A=_.slice(0,B)).length;O<B;A[O++]=0);j=P.slice(),j=[0].concat(j),x=P[0],P[1]>=l/2&&x++;do{if(y=0,(a=r(P,A,B,O))<0){if(N=A[0],B!=O&&(N=N*l+(A[1]||0)),(y=i(N/x))>1)for(y>=l&&(y=l-1),m=(w=e(P,y,l)).length,O=A.length;1==r(w,A,m,O);)y--,t(w,B<m?j:P,m,l),m=w.length,a=1;else 0==y&&(a=y=1),m=(w=P.slice()).length;if(m<O&&(w=[0].concat(w)),t(A,w,O,l),O=A.length,-1==a)for(;r(P,A,B,O)<1;)y++,t(A,B<O?j:P,O,l),O=A.length}else 0===a&&(y++,A=[0]);v[g++]=y,A[0]?A[O++]=_[E]||0:(A=[_[E]],O=1)}while((E++<S||null!=A[0])&&I--);d=null!=A[0],v[0]||v.splice(0,1)}if(l==f){for(g=1,I=v[0];I>=10;I/=10,g++);W(b,u+(b.e=g+h*s-1)+1,c,d)}else b.e=h,b.r=+d;return b}}(),S=/^(-?)0([xbo])(?=\w[\w.]*$)/i,x=/^([^.]+)\.$/,B=/^\.([^.]+)$/,j=/^-?(Infinity|NaN)$/,I=/^\s*\+(?=[\w.])|^\s+|\s+$/g,O=function(e,r,t,n){var i,u=t?r:r.replace(I,"");if(j.test(u))e.s=isNaN(u)?null:u<0?-1:1;else{if(!t&&(u=u.replace(S,(function(e,r,t){return i="x"==(t=t.toLowerCase())?16:"b"==t?2:8,n&&n!=i?e:r})),n&&(i=n,u=u.replace(x,"$1").replace(B,"0.$1")),r!=u))return new z(u,i);if(z.DEBUG)throw Error(o+"Not a"+(n?" base "+n:"")+" number: "+r);e.s=null}e.c=e.e=null},_.absoluteValue=_.abs=function(){var e=new z(this);return e.s<0&&(e.s=1),e},_.comparedTo=function(e,r){return d(this,new z(e,r))},_.decimalPlaces=_.dp=function(e,r){var t,n,i,o=this;if(null!=e)return y(e,0,h),null==r?r=R:y(r,0,8),W(new z(o),e+o.e+1,r);if(!(t=o.c))return null;if(n=((i=t.length-1)-p(this.e/s))*s,i=t[i])for(;i%10==0;i/=10,n--);return n<0&&(n=0),n},_.dividedBy=_.div=function(e,r){return v(this,new z(e,r),T,R)},_.dividedToIntegerBy=_.idiv=function(e,r){return v(this,new z(e,r),0,1)},_.exponentiatedBy=_.pow=function(e,r){var t,u,f,c,l,a,h,p,g=this;if((e=new z(e)).c&&!e.isInteger())throw Error(o+"Exponent not an integer: "+X(e));if(null!=r&&(r=new z(r)),l=e.e>14,!g.c||!g.c[0]||1==g.c[0]&&!g.e&&1==g.c.length||!e.c||!e.c[0])return p=new z(Math.pow(+X(g),l?2-w(e):+X(e))),r?p.mod(r):p;if(a=e.s<0,r){if(r.c?!r.c[0]:!r.s)return new z(NaN);(u=!a&&g.isInteger()&&r.isInteger())&&(g=g.mod(r))}else{if(e.e>9&&(g.e>0||g.e<-1||(0==g.e?g.c[0]>1||l&&g.c[1]>=24e7:g.c[0]<8e13||l&&g.c[0]<=9999975e7)))return c=g.s<0&&w(e)?-0:0,g.e>-1&&(c=1/c),new z(a?1/c:c);k&&(c=n(k/s+2))}for(l?(t=new z(.5),a&&(e.s=1),h=w(e)):h=(f=Math.abs(+X(e)))%2,p=new z(P);;){if(h){if(!(p=p.times(g)).c)break;c?p.c.length>c&&(p.c.length=c):u&&(p=p.mod(r))}if(f){if(0===(f=i(f/2)))break;h=f%2}else if(W(e=e.times(t),e.e+1,1),e.e>14)h=w(e);else{if(0===(f=+X(e)))break;h=f%2}g=g.times(g),c?g.c&&g.c.length>c&&(g.c.length=c):u&&(g=g.mod(r))}return u?p:(a&&(p=P.div(p)),r?p.mod(r):c?W(p,k,R,undefined):p)},_.integerValue=function(e){var r=new z(this);return null==e?e=R:y(e,0,8),W(r,r.e+1,e)},_.isEqualTo=_.eq=function(e,r){return 0===d(this,new z(e,r))},_.isFinite=function(){return!!this.c},_.isGreaterThan=_.gt=function(e,r){return d(this,new z(e,r))>0},_.isGreaterThanOrEqualTo=_.gte=function(e,r){return 1===(r=d(this,new z(e,r)))||0===r},_.isInteger=function(){return!!this.c&&p(this.e/s)>this.c.length-2},_.isLessThan=_.lt=function(e,r){return d(this,new z(e,r))<0},_.isLessThanOrEqualTo=_.lte=function(e,r){return-1===(r=d(this,new z(e,r)))||0===r},_.isNaN=function(){return!this.s},_.isNegative=function(){return this.s<0},_.isPositive=function(){return this.s>0},_.isZero=function(){return!!this.c&&0==this.c[0]},_.minus=function(e,r){var t,n,i,o,u=this,c=u.s;if(r=(e=new z(e,r)).s,!c||!r)return new z(NaN);if(c!=r)return e.s=-r,u.plus(e);var l=u.e/s,a=e.e/s,h=u.c,g=e.c;if(!l||!a){if(!h||!g)return h?(e.s=-r,e):new z(g?u:NaN);if(!h[0]||!g[0])return g[0]?(e.s=-r,e):new z(h[0]?u:3==R?-0:0)}if(l=p(l),a=p(a),h=h.slice(),c=l-a){for((o=c<0)?(c=-c,i=h):(a=l,i=g),i.reverse(),r=c;r--;i.push(0));i.reverse()}else for(n=(o=(c=h.length)<(r=g.length))?c:r,c=r=0;r<n;r++)if(h[r]!=g[r]){o=h[r]<g[r];break}if(o&&(i=h,h=g,g=i,e.s=-e.s),(r=(n=g.length)-(t=h.length))>0)for(;r--;h[t++]=0);for(r=f-1;n>c;){if(h[--n]<g[n]){for(t=n;t&&!h[--t];h[t]=r);--h[t],h[n]+=f}h[n]-=g[n]}for(;0==h[0];h.splice(0,1),--a);return h[0]?V(e,h,a):(e.s=3==R?-1:1,e.c=[e.e=0],e)},_.modulo=_.mod=function(e,r){var t,n,i=this;return e=new z(e,r),!i.c||!e.s||e.c&&!e.c[0]?new z(NaN):!e.c||i.c&&!i.c[0]?new z(i):(9==M?(n=e.s,e.s=1,t=v(i,e,0,3),e.s=n,t.s*=n):t=v(i,e,0,M),(e=i.minus(t.times(e))).c[0]||1!=M||(e.s=i.s),e)},_.multipliedBy=_.times=function(e,r){var t,n,i,o,u,c,l,h,g,d,y,w,m,b,v,A=this,O=A.c,N=(e=new z(e,r)).c;if(!(O&&N&&O[0]&&N[0]))return!A.s||!e.s||O&&!O[0]&&!N||N&&!N[0]&&!O?e.c=e.e=e.s=null:(e.s*=A.s,O&&N?(e.c=[0],e.e=0):e.c=e.e=null),e;for(n=p(A.e/s)+p(e.e/s),e.s*=A.s,(l=O.length)<(d=N.length)&&(m=O,O=N,N=m,i=l,l=d,d=i),i=l+d,m=[];i--;m.push(0));for(b=f,v=a,i=d;--i>=0;){for(t=0,y=N[i]%v,w=N[i]/v|0,o=i+(u=l);o>i;)t=((h=y*(h=O[--u]%v)+(c=w*h+(g=O[u]/v|0)*y)%v*v+m[o]+t)/b|0)+(c/v|0)+w*g,m[o--]=h%b;m[o]=t}return t?++n:m.splice(0,1),V(e,m,n)},_.negated=function(){var e=new z(this);return e.s=-e.s||null,e},_.plus=function(e,r){var t,n=this,i=n.s;if(r=(e=new z(e,r)).s,!i||!r)return new z(NaN);if(i!=r)return e.s=-r,n.minus(e);var o=n.e/s,u=e.e/s,c=n.c,l=e.c;if(!o||!u){if(!c||!l)return new z(i/0);if(!c[0]||!l[0])return l[0]?e:new z(c[0]?n:0*i)}if(o=p(o),u=p(u),c=c.slice(),i=o-u){for(i>0?(u=o,t=l):(i=-i,t=c),t.reverse();i--;t.push(0));t.reverse()}for((i=c.length)-(r=l.length)<0&&(t=l,l=c,c=t,r=i),i=0;r;)i=(c[--r]=c[r]+l[r]+i)/f|0,c[r]=f===c[r]?0:c[r]%f;return i&&(c=[i].concat(c),++u),V(e,c,u)},_.precision=_.sd=function(e,r){var t,n,i,o=this;if(null!=e&&e!==!!e)return y(e,1,h),null==r?r=R:y(r,0,8),W(new z(o),e,r);if(!(t=o.c))return null;if(n=(i=t.length-1)*s+1,i=t[i]){for(;i%10==0;i/=10,n--);for(i=t[0];i>=10;i/=10,n++);}return e&&o.e+1>n&&(n=o.e+1),n},_.shiftedBy=function(e){return y(e,-9007199254740991,c),this.times("1e"+e)},_.squareRoot=_.sqrt=function(){var e,r,t,n,i,o=this,u=o.c,f=o.s,s=o.e,c=T+4,l=new z("0.5");if(1!==f||!u||!u[0])return new z(!f||f<0&&(!u||u[0])?NaN:u?o:1/0);if(0==(f=Math.sqrt(+X(o)))||f==1/0?(((r=g(u)).length+s)%2==0&&(r+="0"),f=Math.sqrt(+r),s=p((s+1)/2)-(s<0||s%2),t=new z(r=f==1/0?"5e"+s:(r=f.toExponential()).slice(0,r.indexOf("e")+1)+s)):t=new z(f+""),t.c[0])for((f=(s=t.e)+c)<3&&(f=0);;)if(i=t,t=l.times(i.plus(v(o,i,c,1))),g(i.c).slice(0,f)===(r=g(t.c)).slice(0,f)){if(t.e<s&&--f,"9999"!=(r=r.slice(f-3,f+1))&&(n||"4999"!=r)){+r&&(+r.slice(1)||"5"!=r.charAt(0))||(W(t,t.e+T+2,1),e=!t.times(t).eq(o));break}if(!n&&(W(i,i.e+T+2,0),i.times(i).eq(o))){t=i;break}c+=4,f+=4,n=1}return W(t,t.e+T+1,R,e)},_.toExponential=function(e,r){return null!=e&&(y(e,0,h),e++),H(this,e,r,1)},_.toFixed=function(e,r){return null!=e&&(y(e,0,h),e=e+this.e+1),H(this,e,r)},_.toFormat=function(e,r,t){var n,i=this;if(null==t)null!=e&&r&&"object"==typeof r?(t=r,r=null):e&&"object"==typeof e?(t=e,e=r=null):t=G;else if("object"!=typeof t)throw Error(o+"Argument not an object: "+t);if(n=i.toFixed(e,r),i.c){var u,f=n.split("."),s=+t.groupSize,c=+t.secondaryGroupSize,l=t.groupSeparator||"",a=f[0],h=f[1],p=i.s<0,g=p?a.slice(1):a,d=g.length;if(c&&(u=s,s=c,c=u,d-=u),s>0&&d>0){for(u=d%s||s,a=g.substr(0,u);u<d;u+=s)a+=l+g.substr(u,s);c>0&&(a+=l+g.slice(u)),p&&(a="-"+a)}n=h?a+(t.decimalSeparator||"")+((c=+t.fractionGroupSize)?h.replace(new RegExp("\\d{"+c+"}\\B","g"),"$&"+(t.fractionGroupSeparator||"")):h):a}return(t.prefix||"")+n+(t.suffix||"")},_.toFraction=function(e){var r,t,n,i,u,f,c,a,h,p,d,y,w=this,m=w.c;if(null!=e&&(!(c=new z(e)).isInteger()&&(c.c||1!==c.s)||c.lt(P)))throw Error(o+"Argument "+(c.isInteger()?"out of range: ":"not an integer: ")+X(c));if(!m)return new z(w);for(r=new z(P),h=t=new z(P),n=a=new z(P),y=g(m),u=r.e=y.length-w.e-1,r.c[0]=l[(f=u%s)<0?s+f:f],e=!e||c.comparedTo(r)>0?u>0?r:h:c,f=U,U=1/0,c=new z(y),a.c[0]=0;p=v(c,r,0,1),1!=(i=t.plus(p.times(n))).comparedTo(e);)t=n,n=i,h=a.plus(p.times(i=h)),a=i,r=c.minus(p.times(i=r)),c=i;return i=v(e.minus(t),n,0,1),a=a.plus(i.times(h)),t=t.plus(i.times(n)),a.s=h.s=w.s,d=v(h,n,u*=2,R).minus(w).abs().comparedTo(v(a,t,u,R).minus(w).abs())<1?[h,n]:[a,t],U=f,d},_.toNumber=function(){return+X(this)},_.toPrecision=function(e,r){return null!=e&&y(e,1,h),H(this,e,r,2)},_.toString=function(e){var r,t=this,n=t.s,i=t.e;return null===i?n?(r="Infinity",n<0&&(r="-"+r)):r="NaN":(null==e?r=i<=C||i>=D?m(g(t.c),i):b(g(t.c),i,"0"):10===e&&$?r=b(g((t=W(new z(t),T+i+1,R)).c),t.e,"0"):(y(e,2,q.length,"Base"),r=A(b(g(t.c),i,"0"),10,e,n,!0)),n<0&&t.c[0]&&(r="-"+r)),r},_.valueOf=_.toJSON=function(){return X(this)},_._isBigNumber=!0,_[Symbol.toStringTag]="BigNumber",_[Symbol.for("nodejs.util.inspect.custom")]=_.valueOf,null!=r&&z.set(r),z}(),O=(v=Object.freeze({__proto__:null,BigNumber:A,default:A}))&&v.default||v,N=e((function(e){var r=e.exports;!function(){var e,t,n,i=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,o={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};function u(e){return i.lastIndex=0,i.test(e)?'"'+e.replace(i,(function(e){var r=o[e];return"string"==typeof r?r:"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)}))+'"':'"'+e+'"'}function f(r,i){var o,s,c,l,a,h=e,p=i[r],g=null!=p&&(p instanceof O||O.isBigNumber(p));switch(p&&"object"==typeof p&&"function"==typeof p.toJSON&&(p=p.toJSON(r)),"function"==typeof n&&(p=n.call(i,r,p)),typeof p){case"string":return g?p:u(p);case"number":return isFinite(p)?String(p):"null";case"boolean":case"null":case"bigint":return String(p);case"object":if(!p)return"null";if(e+=t,a=[],"[object Array]"===Object.prototype.toString.apply(p)){for(l=p.length,o=0;o<l;o+=1)a[o]=f(o,p)||"null";return c=0===a.length?"[]":e?"[\n"+e+a.join(",\n"+e)+"\n"+h+"]":"["+a.join(",")+"]",e=h,c}if(n&&"object"==typeof n)for(l=n.length,o=0;o<l;o+=1)"string"==typeof n[o]&&(c=f(s=n[o],p))&&a.push(u(s)+(e?": ":":")+c);else Object.keys(p).forEach((function(r){var t=f(r,p);t&&a.push(u(r)+(e?": ":":")+t)}));return c=0===a.length?"{}":e?"{\n"+e+a.join(",\n"+e)+"\n"+h+"}":"{"+a.join(",")+"}",e=h,c}}"function"!=typeof r.stringify&&(r.stringify=function(r,i,o){var u;if(e="",t="","number"==typeof o)for(u=0;u<o;u+=1)t+=" ";else"string"==typeof o&&(t=o);if(n=i,i&&"function"!=typeof i&&("object"!=typeof i||"number"!=typeof i.length))throw new Error("JSON.stringify");return f("",{"":r})})}()})),E=null;const S=/(?:_|\\u005[Ff])(?:_|\\u005[Ff])(?:p|\\u0070)(?:r|\\u0072)(?:o|\\u006[Ff])(?:t|\\u0074)(?:o|\\u006[Ff])(?:_|\\u005[Ff])(?:_|\\u005[Ff])/,x=/(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)/;var B=function(e){var r={strict:!1,storeAsString:!1,alwaysParseAsBig:!1,useNativeBigInt:!1,protoAction:"error",constructorAction:"error"};if(null!=e){if(!0===e.strict&&(r.strict=!0),!0===e.storeAsString&&(r.storeAsString=!0),r.alwaysParseAsBig=!0===e.alwaysParseAsBig&&e.alwaysParseAsBig,r.useNativeBigInt=!0===e.useNativeBigInt&&e.useNativeBigInt,void 0!==e.constructorAction){if("error"!==e.constructorAction&&"ignore"!==e.constructorAction&&"preserve"!==e.constructorAction)throw new Error(`Incorrect value for constructorAction option, must be "error", "ignore" or undefined but passed ${e.constructorAction}`);r.constructorAction=e.constructorAction}if(void 0!==e.protoAction){if("error"!==e.protoAction&&"ignore"!==e.protoAction&&"preserve"!==e.protoAction)throw new Error(`Incorrect value for protoAction option, must be "error", "ignore" or undefined but passed ${e.protoAction}`);r.protoAction=e.protoAction}}var t,n,i,o,u={'"':'"',"\\":"\\","/":"/",b:"\b",f:"\f",n:"\n",r:"\r",t:"\t"},f=function(e){throw{name:"SyntaxError",message:e,at:t,text:i}},s=function(e){return e&&e!==n&&f("Expected '"+e+"' instead of '"+n+"'"),n=i.charAt(t),t+=1,n},c=function(){var e,t="";for("-"===n&&(t="-",s("-"));n>="0"&&n<="9";)t+=n,s();if("."===n)for(t+=".";s()&&n>="0"&&n<="9";)t+=n;if("e"===n||"E"===n)for(t+=n,s(),"-"!==n&&"+"!==n||(t+=n,s());n>="0"&&n<="9";)t+=n,s();if(e=+t,isFinite(e))return null==E&&(E=O),t.length>15?r.storeAsString?t:r.useNativeBigInt?BigInt(t):new E(t):r.alwaysParseAsBig?r.useNativeBigInt?BigInt(e):new E(e):e;f("Bad number")},l=function(){var e,r,o,c="";if('"'===n)for(var l=t;s();){if('"'===n)return t-1>l&&(c+=i.substring(l,t-1)),s(),c;if("\\"===n){if(t-1>l&&(c+=i.substring(l,t-1)),s(),"u"===n){for(o=0,r=0;r<4&&(e=parseInt(s(),16),isFinite(e));r+=1)o=16*o+e;c+=String.fromCharCode(o)}else{if("string"!=typeof u[n])break;c+=u[n]}l=t}}f("Bad string")},a=function(){for(;n&&n<=" ";)s()};return o=function(){switch(a(),n){case"{":return function(){var e,t=Object.create(null);if("{"===n){if(s("{"),a(),"}"===n)return s("}"),t;for(;n;){if(e=l(),a(),s(":"),!0===r.strict&&Object.hasOwnProperty.call(t,e)&&f('Duplicate key "'+e+'"'),!0===S.test(e)?"error"===r.protoAction?f("Object contains forbidden prototype property"):"ignore"===r.protoAction?o():t[e]=o():!0===x.test(e)?"error"===r.constructorAction?f("Object contains forbidden constructor property"):"ignore"===r.constructorAction?o():t[e]=o():t[e]=o(),a(),"}"===n)return s("}"),t;s(","),a()}}f("Bad object")}();case"[":return function(){var e=[];if("["===n){if(s("["),a(),"]"===n)return s("]"),e;for(;n;){if(e.push(o()),a(),"]"===n)return s("]"),e;s(","),a()}}f("Bad array")}();case'"':return l();case"-":return c();default:return n>="0"&&n<="9"?c():function(){switch(n){case"t":return s("t"),s("r"),s("u"),s("e"),!0;case"f":return s("f"),s("a"),s("l"),s("s"),s("e"),!1;case"n":return s("n"),s("u"),s("l"),s("l"),null}f("Unexpected '"+n+"'")}()}},function(e,r){var u;return i=e+"",t=0,n=" ",u=o(),a(),n&&f("Syntax error"),"function"==typeof r?function e(t,n){var i,o=t[n];return o&&"object"==typeof o&&Object.keys(o).forEach((function(r){void 0!==(i=e(o,r))?o[r]=i:delete o[r]})),r.call(t,n,o)}({"":u},""):u}},j=N.stringify,I=function(e){return{parse:B(e),stringify:j}},_=B(),P=j;I.parse=_,I.stringify=P;return function(e,t,n){n&&(t.defaults.transformResponse=function(e){try{return JSON.parse(JSON.stringify(I.parse(e)))}catch(r){return e}});var i=e.ajax;e.ajax=function(e){if(!1===e.async)return i(e);var n={};if(n.method=e.type,n.url=e.url,"get"===e.type?n.params=e.data:n.data=e.data,n.headers={},e.contentType?n.headers["Content-Type"]=e.contentType:n.headers["Content-Type"]="application/x-www-form-urlencoded; charset=UTF-8",e.beforeSend){var o={setRequestHeader:function(e,r){n.headers[e]=r}};e.beforeSend(o)}if(n.headers["Content-Type"].indexOf("x-www-form-urlencoded")>=0&&(n.data=function(e){var t={};"string"==typeof e&&0===e.indexOf("{")?t=JSON.parse(e):"object"===r(e)&&(t=e);var n="";return Object.keys(t).forEach((function(e,r){n+=r>0?"&"+e+"="+t[e]:e+"="+t[e]})),n}(e.data)),!e.success)return new Promise((function(e,r){t(n).then((function(r){e(r)})).catch((function(e){r(e)}))}));t(n).then((function(r){e.success(r.data,"success",r)})).catch((function(r){e.error&&e.error(r)}))}}}));
//# sourceMappingURL=jAjaxWrapper.js.map
