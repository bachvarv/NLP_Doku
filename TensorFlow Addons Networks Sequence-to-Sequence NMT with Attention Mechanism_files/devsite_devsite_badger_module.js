(function(_ds){var window=this;var XK=function(a){var b=a.Ma;a=a.mb;return(0,_ds.Q)('<div class="devsite-badger-award-inner"><devsite-badge-awarded badge-name="'+_ds.U(b.title)+'" badge-icon-url="'+_ds.U(_ds.V(b.imageUrl))+'" badge-url="'+_ds.U(_ds.V(b.url))+'"'+(null!=b.currentTierCount?' badge-count="'+_ds.U(b.currentTierCount)+'"':"")+(null!=b.complete?' badge-complete="'+_ds.U(b.complete)+'"':"")+(null!=b.isNewTier?' is-new-tier="'+_ds.U(b.isNewTier)+'"':"")+(b.path?' badge-path="'+_ds.U(b.path)+'"':"")+(b.shareTitle?' badge-share-title="'+
_ds.U(b.shareTitle)+'"':"")+(b.shareDescription?' badge-share-description="'+_ds.U(b.shareDescription)+'"':"")+(b.nextPlaylistUrl?' next-playlist-url="'+_ds.U(_ds.V(b.nextPlaylistUrl))+'"':"")+(b.redeemAnotherBtn?" redeem-another":"")+(b.hideButtons?" hide-buttons":"")+(b.redeemCode?' redeem-code="'+_ds.U(b.redeemCode)+'"':"")+(a?' return-uri="'+_ds.U(_ds.V(a))+'"':"")+" dismiss></devsite-badge-awarded></div>")},YK=function(){return(0,_ds.Q)('<div class="devsite-badger-award"></div>')};var ZK=/\/redeem.*|\/u[\/]?.*|\/settings[\/]?.*?/,cL=function(a){a.eventHandler.listen(document.body,"devsite-before-page-change",()=>void $K(a));a.eventHandler.listen(document.body,"devsite-award-granted",b=>{(b=b.X)&&b.detail&&aL(a,b.detail.award)});a.eventHandler.listen(document.body,["devsite-page-loaded","devsite-page-changed"],()=>{a.Dd();bL(a)})},$K=async function(a){if(a.g){var b=a.g.querySelectorAll(".devsite-badger-award-inner"),c=b[0];if(c){const d=c.querySelector("devsite-badge-awarded");
if(null==d?0:d.h)null==d||d.h();const e=null==d?void 0:d.getAttribute("badge-path");a.Va=a.Va.filter(f=>f.path!==e);c.removeAttribute("show");await _ds.kj(200);_ds.Rh(c);1===b.length&&(_ds.Rh(a.g),a.g=null)}}},aL=async function(a,b){if(b&&b.complete&&!a.Va.find(f=>f.path===b.path)&&"error"!==document.body.getAttribute("type")&&!ZK.exec(document.location.pathname)){a.Va.push(b);if(!a.g){var c=document.querySelector(".static-badge-awarded-container");c?(a.g=c,a.o=!0):(a.g=_ds.O(YK),document.body.appendChild(a.g))}try{await window.customElements.whenDefined("devsite-badge-awarded")}catch(f){}var d;
c=null==(d=_ds.fj())?void 0:d.href;var e=_ds.O(XK,{Ma:b,mb:c});e&&(a.eventHandler.listen(e,"devsite-badge-awarded-dismissed",()=>{$K(a)}),d=e.querySelector("devsite-badge-awarded"))&&(a.g.appendChild(e),_ds.zk(a.eventHandler,d,"running",()=>{null==e||e.setAttribute("show","");var f;const g=null==(f=a.g)?void 0:f.querySelectorAll("devsite-badge-awarded");if(g&&!a.o)for(f=0;f<g.length;f++){let h;null==(h=g[f])||h.dispatchEvent(new CustomEvent("devsite-badge-awarded-stack-num-changed",{bubbles:!0,detail:{uo:g.length-
1-f}}))}}))}},bL=function(a){if(_ds.im(a.h)){var b=_ds.zE();if(b){b=b.filter(c=>3>c.displayCount);0<b.length?a.h.set("temp_badges",JSON.stringify(b)):a.h.remove("temp_badges");for(const c of b){b=new URL(c.awardedBy,document.location.origin);const d=_ds.H();(!c.awardedBy||b.origin===d.origin&&b.pathname===d.pathname)&&c.complete&&aL(a,c)}}}},dL=class extends _ds.HE{constructor(){super(["devsite-badge-awarded"]);this.eventHandler=new _ds.I(this);this.h=new _ds.jm;this.g=null;this.Va=[];this.o=!1}connectedCallback(){cL(this)}disconnectedCallback(){_ds.J(this.eventHandler);
$K(this)}async Dd(){await _ds.x();await window.customElements.whenDefined("devsite-user");var a=document.querySelector("devsite-user#devsite-user");if(a){var b=!1;try{b=await a.isSignedIn()}catch(c){}if(b&&await (new _ds.lB).rc()){a=new _ds.hB;try{await a.ma()}catch(c){}}}}};try{window.customElements.define("devsite-badger",dL)}catch(a){console.warn("Unrecognized DevSite custom element - DevsiteBadger",a)};})(_ds_www);