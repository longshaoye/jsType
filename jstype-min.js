function m(a,b){return(a[b]<<8|a[b+1])<<16>>16}function r(a,b){return a[b]<<8|a[b+1]}function s(a,b){return a[b]<<24|a[b+1]<<16|a[b+2]<<8|a[b+3]}function t(a,b){var c=a[b+2]<<16|a[b+3]<<8|a[b+4],c=16777216*c+(a[b+5]<<16|a[b+6]<<8|a[b+7]);return new Date(1E3*(c-2080198800))}function u(a){this.version=s(a,0);this.N=r(a,4);this.Q=r(a,6);this.C=r(a,8);this.P=r(a,10)}function v(a,b){this.T=String.fromCharCode(a[b],a[b+1],a[b+2],a[b+3]);this.V=s(a,b+4);this.g=s(a,b+8);this.ha=s(a,b+12)}
function aa(a,b){var c=b.head.g;this.version=s(a,c);this.$=s(a,c+4);this.W=s(a,c+8);this.da=s(a,c+12);this.Y=r(a,c+16);this.U=r(a,c+18);this.X=t(a,c+20);this.ea=t(a,c+28);this.ja=m(a,c+36);this.la=m(a,c+38);this.ia=m(a,c+40);this.ka=m(a,c+42);this.ca=r(a,c+44);this.ba=r(a,c+46);this.Z=r(a,c+48);this.K=r(a,c+50);this.aa=r(a,c+52)}function ba(a,b){var c=b.maxp.g;this.version=s(a,c);this.M=r(a,c+4)}
function ca(a,b,c,d){b=b.loca.g;if(0==d){d=b;b=[];for(var e=0;e<=c;++e)b.push(r(a,d)<<1),d+=2}else for(d=b,b=[],e=0;e<=c;++e)b.push(s(a,d)),d+=4;this.w=a=b}function da(){this.m=w(null);this.d=w(null)}
function w(a){return[a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,
a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a]}function ea(a,b){var c=r(a,b+2),d=r(a,b+6),e=d>>1,f=c-16-(d<<2)>>1;this.D=r(a,b);this.length=c;this.language=r(a,b+4);this.R=e;this.Q=r(a,b+8);this.C=r(a,b+10);this.P=r(a,b+12);this.B=y(a,b+14,e);b+=14+d;this.fa=r(a,b);this.S=y(a,b+2,e);for(var c=b+=2+d,h=[],g=0;g<e;++g)h.push(m(a,c)),c+=2;this.I=h;for(var c=b+=d,h=b+d,g=[],k=0;k<e;++k){var l=r(a,c);g.push(0==l?0:c+l-h>>1);c+=2}this.J=g;this.G=y(a,b+d,f)}
function y(a,b,c){for(var d=[],e=0;e<c;++e)d.push(r(a,b)),b+=2;return d}function z(a,b,c,d){var e=b>>8;a.m[e]||(a.m[e]=w(0));a.m[e][b&255]=d;b=c>>8;a.d[b]||(a.d[b]=w(0));a.d[b][c&255]=d}function A(a,b,c){this.a=a;this.L=b+7>>3;this.n=b;this.v=c}A.prototype.fill=function(a,b,c){b=b+0.5|0;c=c+0.5|0;0>b&&(b=0);c>this.n&&(c=this.n);var d=c-b;if(!(0>c||this.n<=b||0>=d||0>a||this.v<=a)){a=a*this.L+(b>>3);b=8-(b&7);for(c=(1<<b)-1;d>=b;)this.a[a]|=c,++a,d-=b,b=8,c=255;0<d&&(c^=(1<<b-d)-1,this.a[a]|=c)}};
function B(a){this.b=a;this.i=this.a=0}var C="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");B.prototype.write=function(a){this.a=this.a<<8|a;this.i+=8;24==this.i&&(this.b+=C[this.a>>18&63],this.b+=C[this.a>>12&63],this.b+=C[this.a>>6&63],this.b+=C[this.a&63],this.a=this.i=0)};
B.prototype.close=function(){8==this.i?(this.a<<=16,this.b+=C[this.a>>18&63],this.b+=C[this.a>>12&63],this.b+="=="):16==this.i&&(this.a<<=8,this.b+=C[this.a>>18&63],this.b+=C[this.a>>12&63],this.b+=C[this.a>>6&63],this.b+="=");return this.b};function D(a,b,c){this.O=a&1;this.x=b;this.y=c}function E(a,b){this.e=b;this.x=F(a[0].x,a[1].x,a[2].x,b);this.y=F(a[0].y,a[1].y,a[2].y,b)}function F(a,b,c,d){var e=1-d;return e*e*a+2*e*d*b+d*d*c}
function G(a,b){this.e=b;this.x=H(a[0].x,a[1].x,a[2].x,a[3].x,b);this.y=H(a[0].y,a[1].y,a[2].y,a[3].y,b)}function H(a,b,c,d,e){var f=1-e,h=f*f,g=e*e;return h*f*a+3*h*e*b+3*f*g*c+g*e*d}function I(a,b){this.e=b;this.x=J(a[0].x,a[1].x,a[2].x,a[3].x,a[4].x,b);this.y=J(a[0].y,a[1].y,a[2].y,a[3].y,a[4].y,b)}function J(a,b,c,d,e,f){var h=1-f,g=h*h,k=f*f;f*=h;return g*g*a+4*g*f*b+6*g*k*c+4*f*k*d+k*k*e}
function K(a,b,c){this.scale=a;this.h=a*b|0;this.l=a*c|0;this.c=[];for(a=this.h;a<=this.l;++a)this.c.push([]);this.q=!1}function fa(a,b){return a-b}function L(a,b,c,d,e){if(c!=e){if(c>e){var f=c;c=e;e=f;f=b;b=d;d=f}d=(d-b)/(e-c);c|=0;e|=0;for(f=c;f<e;++f)a.c[f-a.h].push(b+d*(f-c))}}function M(a,b,c,d){if((c.x|0)!=(d.x|0)){if((c.y|0)!=(d.y|0)){var e=new E(b,0.5*(c.e+d.e));M(a,b,c,e);M(a,b,e,d)}}else L(a,c.x,c.y,d.x,d.y)}
function N(a,b,c,d){if((c.x|0)!=(d.x|0)){if((c.y|0)!=(d.y|0)){var e=new G(b,0.5*(c.e+d.e));N(a,b,c,e);N(a,b,e,d)}}else L(a,c.x,c.y,d.x,d.y)}function O(a,b,c,d){if((c.x|0)!=(d.x|0)){if((c.y|0)!=(d.y|0)){var e=new I(b,0.5*(c.e+d.e));O(a,b,c,e);O(a,b,e,d)}}else L(a,c.x,c.y,d.x,d.y)}
K.prototype.f=function(a){this.q=!0;var b=a.length;if(2==b)L(this,a[0].x,a[0].y,a[1].x,a[1].y);else if(3==b){var b=new E(a,0),c=new E(a,0.5),d=new E(a,1);M(this,a,b,c);M(this,a,c,d)}else if(4==b){var b=new G(a,0),c=new G(a,0.25),d=new G(a,0.75),e=new G(a,1);N(this,a,b,c);N(this,a,c,d);N(this,a,d,e)}else if(5==b){var b=new I(a,0),c=new I(a,0.25),d=new I(a,0.5),e=new I(a,0.75),f=new I(a,1);O(this,a,b,c);O(this,a,c,d);O(this,a,d,e);O(this,a,e,f)}};
function P(a){this.code=a;this.l=this.o=this.h=this.A=0;this.p=[];this.s=0;this.c=null}
function Q(a,b,c,d,e,f){var h=m(b,c);if(0>h){a:{var h=c,g=h+10;do{var k=32;c=r(b,g);var l=r(b,g+2),p=0,q=0;c&1?(p=r(b,g+4),q=r(b,g+6),g+=8):(p=b[g+4],q=b[g+5],g+=6);var n=f.d[l>>8],l=n?n[l&255]:0;if(!l||!Q(a,b,l,p+d,q+e,f)){a=!1;break a}}while(c&k);a.A=m(b,h+2);a.h=m(b,h+4);a.o=m(b,h+6);a.l=m(b,h+8);a=!0}return a}a.A=m(b,c+2);a.h=m(b,c+4);a.o=m(b,c+6);a.l=m(b,c+8);c+=10;f=[];for(g=p=0;g<h;++g)p=r(b,c),f.push(p),c+=2;c+=2+r(b,c);k=[];for(g=l=q=0;g<=p;++g)0>--q&&(l=b[c],++c,l&8&&(q=b[c],++c)),k.push(l);
q=[];for(g=l=0;g<=p;++g)n=k[g]&18,18==n?(l+=b[c],++c):2==n?(l-=b[c],++c):0==n&&(l+=m(b,c),c+=2),q.push(l);l=[];for(g=n=0;g<=p;++g){var x=k[g]&36;36==x?(n+=b[c],++c):4==x?(n-=b[c],++c):0==x&&(n+=m(b,c),c+=2);l.push(n)}for(g=b=0;g<h;++g){for(c=[];b<=f[g];)c.push(new D(k[b],d+q[b],e+l[b])),++b;a.p.push(c)}return!0}
P.prototype.f=function(a,b,c,d,e){if(!this.c||this.c.scale!=a){for(var f=new K(a,this.h,this.l),h=this.p.length,g=0;g<h;++g){for(var k=this.p[g],l=k.length,p=new D(0,k[0].x*a,k[0].y*a),q=[p],n=1;n<l;++n){var x=new D(0,k[n].x*a,k[n].y*a);q.push(x);k[n].O&&(f.f(q),q=[x])}0<q.length&&(q.push(p),f.f(q))}this.c=f}f=this.c;h=f.c.length;if(f.q){for(g=0;g<h;++g)0<f.c[g].length&&f.c[g].sort(fa);f.q=!1}d+=f.h;for(g=0;g<h;++g,++d)for(k=f.c[g],l=k.length,p=0;p<l;p+=2)b.fill(d,c+k[p],c+k[p+1]);this.s=e;return this.o*
a};P.prototype.t=function(){return this.o};function ga(a,b){return a.s-b.s}function R(a,b,c){this.a=a;this.ga=b;this.r=0;this.k=null;this.d={};this.H=c||1024;this.j=[];this.u=0}
function S(a){if(a.k)return!0;a.k=new da;a.d={};a.j=[];a.u=0;var b=new u(a.a);if(65536!=b.version)return!1;for(var c={},d=12,e=0;e<b.N;++e){var f=new v(a.a,d);c[f.T]=f;d+=16}b=new aa(a.a,c);a.r=1/b.U;b=new ca(a.a,c,(new ba(a.a,c)).M,b.K);a:{var h=a.k,d=a.a,e=c.cmap;a=r(d,e.g+2);for(var f=e.g+4,g=0;g<a;++g){if(196609==s(d,f)){a=h;h=c;c=b;b=new ea(d,e.g+s(d,f+4));if(4!=b.D)a=!1;else{d=h.glyf.g;for(e=0;e<b.R;++e){var f=b.S[e],h=b.B[e],k=b.I[e];if(0==k)for(k=b.J[e],g=f;g<=h;++g){var l=b.G[k+g-f];z(a,
g,l,d+c.w[l])}else for(g=f;g<=h;++g)l=g+k,z(a,g,l,d+c.w[l])}a=!0}break a}f+=8}a=!1}return a}function T(a,b){var c=a.d[b];if(!c){var d;d=(c=a.k.m[b>>8])?c[b&255]:0;if(!d)return null;c=new P(b);if(!Q(c,a.a,d,0,0,a.k))return null;d=a.j.length;if(d>=a.H){d>>=1;a.j.sort(ga);a.j.splice(0,d);a.d={};for(var e=0;e<d;++e)a.d[a.j[e].code]=a.j[e]}a.d[b]=c}return c}
R.prototype.t=function(a,b){if(!S(this))return 0;for(var c=0,d=a.length,e=0;e<d;++e){var f=T(this,a.charCodeAt(e));if(!f)return 0;f=f.t();if(!f)return 0;c+=f}return c*b*this.r};
R.prototype.f=function(a,b,c,d,e){if(!S(this))return 0;c=new A(c,d,e);d=0;b*=this.r;e=a.length;for(var f=0;f<e;++f){var h=T(this,a.charCodeAt(f));if(!h)return 0;h=h.f(b,c,d,0,++this.u);if(!h)return 0;d+=h}a="";for(e=b=0;e<c.v;++e){for(f=0;f<c.n;++f)a+=0==(c.a[b>>3]>>7-(b&7)&1)?"0":"1",++b;b=b+7&-8;a+=" "+e+"\n"}window.console.log(a);return d};
R.prototype.F=function(a,b,c,d,e){var f=e||[16777215,0],h=2>=f.length?1:4>=f.length?2:16>=f.length?4:24;1==h?c=c+31&-32:4==h&&(c=c+1>>1<<3,d<<=2);e=new Uint8Array((c>>3)*d);if(this.f(a,b,e,c,d)){if(1==h){b=c;a=[66,77,0,0,0,0,0,0,0,0,62,0,0,0,40,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,255,255,255,0,0,0,0,0];c=(b+7>>3)*d;h=a.length+c;a[2]=h&255;a[3]=h>>8&255;a[4]=h>>16&255;a[5]=h>>24&255;a[18]=b&255;a[19]=b>>8&255;a[22]=d&255;a[23]=d>>8&255;a[34]=c&255;a[35]=c>>
8&255;a[36]=c>>16&255;a[37]=c>>24&255;b=54;for(d=0;2>d;++d)a[b]=f[d]>>16&255,a[b+1]=f[d]>>8&255,a[b+2]=f[d]&255,b+=4;f=new B("data:image/bmp;base64,");for(d=0;d<a.length;++d)f.write(a[d]);for(d=0;d<e.length;++d)f.write(e[d]);return f.close()}if(4==h){a=c;b=[66,77,0,0,0,0,0,0,0,0,118,0,0,0,40,0,0,0,0,0,0,0,0,0,0,0,1,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,255,255,255,0,238,238,238,0,221,221,221,0,204,204,204,0,187,187,187,0,170,170,170,0,153,153,153,0,136,136,136,0,119,119,119,0,102,
102,102,0,85,85,85,0,68,68,68,0,51,51,51,0,34,34,34,0,17,17,17,0,0,0,0,0];c=a>>2;var h=d>>2,g=(c>>1)*h,k=b.length+g;b[2]=k&255;b[3]=k>>8&255;b[4]=k>>16&255;b[5]=k>>24&255;b[18]=c&255;b[19]=c>>8&255;b[22]=h&255;b[23]=h>>8&255;b[34]=g&255;b[35]=g>>8&255;b[36]=g>>16&255;b[37]=g>>24&255;h=54;for(c=0;16>c;++c)b[h]=f[c]>>16&255,b[h+1]=f[c]>>8&255,b[h+2]=f[c]&255,h+=4;f=new B("data:image/bmp;base64,");for(c=0;c<b.length;++c)f.write(b[c]);for(c=b=0;c<d;c+=4)for(h=0;h<a;h+=4,b+=4){var g=b+a,k=g+a,l=k+a,p=
8-(b&7)-4,q=[0,1,1,2,1,2,2,3,1,2,2,3,2,3,3,4],n=q[e[b>>3]>>p&15],n=n+q[e[g>>3]>>p&15],n=n+q[e[k>>3]>>p&15],n=n+q[e[l>>3]>>p&15];f.write([0,1,2,3,4,5,6,7,8,8,9,10,11,12,13,14,15][n])}return f.close()}}return""};for(var U={draw:R.prototype.f,getBitmap:R.prototype.F,measure:R.prototype.t},V=["org","jstype","FontReader"],W=self,X=V.length-1,Y=0;Y<X;++Y)var Z=V[Y],W=W[Z]?W[Z]:W[Z]={};W[V[X]]=R;for(var $ in U)R.prototype[$]=U[$];
