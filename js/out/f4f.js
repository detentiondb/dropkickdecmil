// Compiled by ClojureScript 0.0-2371
goog.provide('f4f');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs_uuid.core');
goog.require('om.dom');
goog.require('pani.cljs.core');
goog.require('sablono.core');
goog.require('om.dom');
goog.require('cljs_uuid.core');
goog.require('pani.cljs.core');
goog.require('cljs.core.async');
goog.require('sablono.core');
goog.require('om.core');
goog.require('om.core');
cljs.core.enable_console_print_BANG_.call(null);
f4f.firebase_app_url = "https://torid-heat-2247.firebaseio.com";
f4f.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"pitching","pitching",-720286578),false,new cljs.core.Keyword(null,"afternoon","afternoon",1529569827),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"heading","heading",-1312171873),"Artists for Refugees",new cljs.core.Keyword(null,"subheading","subheading",-805629940),"Craft a pro-refugee piece",new cljs.core.Keyword(null,"description","description",-1428560544),"A chance for adults and kids alike to let their artistic side shine through. Get involved in bringing art and activism together, a pro-refugee creative workshop for young and old. Amplify your voice and the refugee rights message we're building for RRAN's involvement in the Fremantle Festival Parade."], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"heading","heading",-1312171873),"Mythbusting circle",new cljs.core.Keyword(null,"subheading","subheading",-805629940),"Breaking down false beliefs",new cljs.core.Keyword(null,"description","description",-1428560544),"There are many false perceptions about asylum seekers and refugees in the Australian community. The mythbusting circle provides an opportunity for attendees of Freo4Freedom to sit with refugee advocates and refugees in a non-judgmental environment, asking questions about refugees to learn more about the issues they face in country of origin, their refugee journey and detention in Australia."], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"heading","heading",-1312171873),"Tamil food corner",new cljs.core.Keyword(null,"subheading","subheading",-805629940),"Tamil culture, food and flavours",new cljs.core.Keyword(null,"description","description",-1428560544),"Promoting Tamil food, sharing interesting facts about Tamil culture, educate visitors on the ongoing struggle of minority Tamils in Sri Lanka and creating awareness about minority struggles around the world."], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"heading","heading",-1312171873),"Media skills workshop",new cljs.core.Keyword(null,"subheading","subheading",-805629940),"Tricks of the trade from a professional",new cljs.core.Keyword(null,"description","description",-1428560544),"What makes a good story? Questions journalists ask; catching the media wave; interview skills; rules of the game. What not to do and how to use social media to amplify your message."], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"heading","heading",-1312171873),"Australia's dark rift",new cljs.core.Keyword(null,"subheading","subheading",-805629940),"Refugee policy and practice since 1992",new cljs.core.Keyword(null,"description","description",-1428560544),"An overview of the political motivations which have driven policy toward asylum seekers since the introduction of mandatory detention in 1992. We will also discuss how policy and laws have deliberately created a rift in Australian society and human rights practices. We will conclude by proposing ways in which this rift may be repaired and provide you with the tools and imagination to become agents for social and political change."], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"heading","heading",-1312171873),"Lawn bowls",new cljs.core.Keyword(null,"description","description",-1428560544),"Soak up the Freo festival atmosphere while you compete to relax on the bowling club greens in the friendliest of friendly competitions. Don't forget to bring a hat!"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"heading","heading",-1312171873),"Bar open \u2022 Food and drink",new cljs.core.Keyword(null,"description","description",-1428560544),"Snacks, drinks and sweets to tickle your tastebuds from local vendors, and a full bar open inside the North Fremantle Bowling Club."], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"heading","heading",-1312171873),"Hazara shisha corner",new cljs.core.Keyword(null,"description","description",-1428560544),"Enjoy the flavour of authentic shisha for a gold coin donation."], null)], null),new cljs.core.Keyword(null,"evening","evening",1560377406),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),"Rev. Chris Bedding"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),"Joe Pule"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),"Shyam & Murtaza"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),"Paul Gioia & Bill Lawrie"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),"Yara Neto"], null)], null),new cljs.core.Keyword(null,"colours","colours",659341642),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.shuffle.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#f7941e","#000"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#7dc476","#000"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#8660a9","#fff"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#fff200","#000"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#00a54f","#fff"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#8c6239","#000"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#003662","#fff"], null)], null))),new cljs.core.Keyword(null,"pitches","pitches",-2052174929),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,(function (n){return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"heading","heading",-1312171873),("Pitch #"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)),new cljs.core.Keyword(null,"likes","likes",792554542),(0),new cljs.core.Keyword(null,"email","email",1415816706),"tflynch@gmail.com",new cljs.core.Keyword(null,"groupname","groupname",-493355733),"Test Group",new cljs.core.Keyword(null,"uuid","uuid",-2145095719),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_uuid.core.make_random.call(null))),new cljs.core.Keyword(null,"approved","approved",-803187124),true,new cljs.core.Keyword(null,"description","description",-1428560544),"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."], null);
}),cljs.core.range.call(null,(6))))], null));
f4f.init_firebase_BANG_ = (function init_firebase_BANG_(){cljs.core.println.call(null,cljs_uuid.core.make_random.call(null));
var r = pani.cljs.core.root.call(null,f4f.firebase_app_url);var app = cljs.core.deref.call(null,f4f.app_state);return pani.cljs.core.set_BANG_.call(null,r,new cljs.core.Keyword(null,"pitches","pitches",-2052174929),new cljs.core.Keyword(null,"pitches","pitches",-2052174929).cljs$core$IFn$_invoke$arity$1(app));
});
f4f.activity_view = (function activity_view(activity,owner){if(typeof f4f.t11845 !== 'undefined')
{} else
{
/**
* @constructor
*/
f4f.t11845 = (function (owner,activity,activity_view,meta11846){
this.owner = owner;
this.activity = activity;
this.activity_view = activity_view;
this.meta11846 = meta11846;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
f4f.t11845.cljs$lang$type = true;
f4f.t11845.cljs$lang$ctorStr = "f4f/t11845";
f4f.t11845.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"f4f/t11845");
});
f4f.t11845.prototype.om$core$IRender$ = true;
f4f.t11845.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "col-lg-6 artist"},React.DOM.div({"className": "row artist-header", "style": {"backgroundColor": new cljs.core.Keyword(null,"colour","colour",2137094554).cljs$core$IFn$_invoke$arity$1(self__.activity).call(null,(0)), "color": new cljs.core.Keyword(null,"colour","colour",2137094554).cljs$core$IFn$_invoke$arity$1(self__.activity).call(null,(1))}},(function (){var attrs11848 = new cljs.core.Keyword(null,"heading","heading",-1312171873).cljs$core$IFn$_invoke$arity$1(self__.activity);return cljs.core.apply.call(null,React.DOM.h2,((cljs.core.map_QMARK_.call(null,attrs11848))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["item-headline","pull-right"], null)], null),attrs11848)):{"className": "item-headline pull-right"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs11848))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs11848)], null))));
})(),React.DOM.br(null),sablono.interpreter.interpret.call(null,((!((new cljs.core.Keyword(null,"subheading","subheading",-805629940).cljs$core$IFn$_invoke$arity$1(self__.activity) == null)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.item-headline.pull-right","h4.item-headline.pull-right",-1850148695),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"subheading","subheading",-805629940).cljs$core$IFn$_invoke$arity$1(self__.activity)], null)], null):null))),sablono.interpreter.interpret.call(null,((!((new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(self__.activity) == null)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.artist-text.event-text","div.artist-text.event-text",-115586790),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(self__.activity)], null)], null):null)));
});
f4f.t11845.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11847){var self__ = this;
var _11847__$1 = this;return self__.meta11846;
});
f4f.t11845.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11847,meta11846__$1){var self__ = this;
var _11847__$1 = this;return (new f4f.t11845(self__.owner,self__.activity,self__.activity_view,meta11846__$1));
});
f4f.__GT_t11845 = (function __GT_t11845(owner__$1,activity__$1,activity_view__$1,meta11846){return (new f4f.t11845(owner__$1,activity__$1,activity_view__$1,meta11846));
});
}
return (new f4f.t11845(owner,activity,activity_view,null));
});
f4f.vote_button_id = (function vote_button_id(unique_id){return ("vote-button-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(unique_id));
});
f4f.submit_vote = (function submit_vote(unique_id){return (function (){cljs.core.println.call(null,"Voted for pitch ",unique_id);
return document.getElementById(f4f.vote_button_id.call(null,unique_id)).className = "btn btn-primary pull-right";
});
});
f4f.pitch_view = (function pitch_view(pitch,owner){if(typeof f4f.t11862 !== 'undefined')
{} else
{
/**
* @constructor
*/
f4f.t11862 = (function (owner,pitch,pitch_view,meta11863){
this.owner = owner;
this.pitch = pitch;
this.pitch_view = pitch_view;
this.meta11863 = meta11863;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
f4f.t11862.cljs$lang$type = true;
f4f.t11862.cljs$lang$ctorStr = "f4f/t11862";
f4f.t11862.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"f4f/t11862");
});
f4f.t11862.prototype.om$core$IRender$ = true;
f4f.t11862.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "col-lg-6"},React.DOM.div({"className": "inner"},React.DOM.h2({"style": {"display": "inline"}},(function (){var attrs11865 = new cljs.core.Keyword(null,"heading","heading",-1312171873).cljs$core$IFn$_invoke$arity$1(self__.pitch);return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs11865))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["orange-text"], null)], null),attrs11865)):{"className": "orange-text"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs11865))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs11865)], null))));
})()),(function (){var attrs11866 = (function (){var pitch_id = new cljs.core.Keyword(null,"uuid","uuid",-2145095719).cljs$core$IFn$_invoke$arity$1(self__.pitch);return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),("vote-button-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(pitch_id)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),f4f.submit_vote.call(null,pitch_id)], null);
})();return cljs.core.apply.call(null,React.DOM.button,((cljs.core.map_QMARK_.call(null,attrs11866))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["btn","btn-default","pull-right"], null)], null),attrs11866)):{"className": "btn btn-default pull-right"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs11866))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.span({"className": "glyphicon glyphicon-heart-empty"})], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs11866),React.DOM.span({"className": "glyphicon glyphicon-heart-empty"})], null))));
})(),(function (){var attrs11871 = new cljs.core.Keyword(null,"groupname","groupname",-493355733).cljs$core$IFn$_invoke$arity$1(self__.pitch);return cljs.core.apply.call(null,React.DOM.h4,((cljs.core.map_QMARK_.call(null,attrs11871))?sablono.interpreter.attributes.call(null,attrs11871):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs11871))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs11871)], null))));
})(),(function (){var attrs11872 = new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(self__.pitch);return cljs.core.apply.call(null,React.DOM.p,((cljs.core.map_QMARK_.call(null,attrs11872))?sablono.interpreter.attributes.call(null,attrs11872):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs11872))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs11872)], null))));
})()));
});
f4f.t11862.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11864){var self__ = this;
var _11864__$1 = this;return self__.meta11863;
});
f4f.t11862.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11864,meta11863__$1){var self__ = this;
var _11864__$1 = this;return (new f4f.t11862(self__.owner,self__.pitch,self__.pitch_view,meta11863__$1));
});
f4f.__GT_t11862 = (function __GT_t11862(owner__$1,pitch__$1,pitch_view__$1,meta11863){return (new f4f.t11862(owner__$1,pitch__$1,pitch_view__$1,meta11863));
});
}
return (new f4f.t11862(owner,pitch,pitch_view,null));
});
f4f.afternoon_view = (function afternoon_view(app,owner){if(typeof f4f.t11880 !== 'undefined')
{} else
{
/**
* @constructor
*/
f4f.t11880 = (function (owner,app,afternoon_view,meta11881){
this.owner = owner;
this.app = app;
this.afternoon_view = afternoon_view;
this.meta11881 = meta11881;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
f4f.t11880.cljs$lang$type = true;
f4f.t11880.cljs$lang$ctorStr = "f4f/t11880";
f4f.t11880.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"f4f/t11880");
});
f4f.t11880.prototype.om$core$IRender$ = true;
f4f.t11880.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "row event"},React.DOM.div(null,React.DOM.h2(null,"music \u2022 food \u2022 lawn bowls \u2022 workshops",React.DOM.span({"className": "hidden-md hidden-sm hidden-xs pull-right"},"from 2PM"))),sablono.interpreter.interpret.call(null,om.core.build_all.call(null,f4f.activity_view,cljs.core.map.call(null,((function (___$1){
return (function (p1__11873_SHARP_,p2__11874_SHARP_){return cljs.core.assoc.call(null,p1__11873_SHARP_,new cljs.core.Keyword(null,"colour","colour",2137094554),p2__11874_SHARP_);
});})(___$1))
,new cljs.core.Keyword(null,"afternoon","afternoon",1529569827).cljs$core$IFn$_invoke$arity$1(self__.app),cljs.core.cycle.call(null,new cljs.core.Keyword(null,"colours","colours",659341642).cljs$core$IFn$_invoke$arity$1(self__.app))))));
});
f4f.t11880.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11882){var self__ = this;
var _11882__$1 = this;return self__.meta11881;
});
f4f.t11880.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11882,meta11881__$1){var self__ = this;
var _11882__$1 = this;return (new f4f.t11880(self__.owner,self__.app,self__.afternoon_view,meta11881__$1));
});
f4f.__GT_t11880 = (function __GT_t11880(owner__$1,app__$1,afternoon_view__$1,meta11881){return (new f4f.t11880(owner__$1,app__$1,afternoon_view__$1,meta11881));
});
}
return (new f4f.t11880(owner,app,afternoon_view,null));
});
f4f.evening_view = (function evening_view(app,owner){if(typeof f4f.t11892 !== 'undefined')
{} else
{
/**
* @constructor
*/
f4f.t11892 = (function (owner,app,evening_view,meta11893){
this.owner = owner;
this.app = app;
this.evening_view = evening_view;
this.meta11893 = meta11893;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
f4f.t11892.cljs$lang$type = true;
f4f.t11892.cljs$lang$ctorStr = "f4f/t11892";
f4f.t11892.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"f4f/t11892");
});
f4f.t11892.prototype.om$core$IRender$ = true;
f4f.t11892.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "row event"},React.DOM.div(null,React.DOM.h2(null,"hiphop freestyle \u2022 music \u2022 comedy show",React.DOM.span({"className": "hidden-md hidden-sm hidden-xs pull-right"},"from 6:30PM"))),sablono.interpreter.interpret.call(null,om.core.build_all.call(null,f4f.activity_view,cljs.core.map.call(null,((function (___$1){
return (function (p1__11885_SHARP_,p2__11886_SHARP_){return cljs.core.assoc.call(null,p1__11885_SHARP_,new cljs.core.Keyword(null,"colour","colour",2137094554),p2__11886_SHARP_);
});})(___$1))
,new cljs.core.Keyword(null,"evening","evening",1560377406).cljs$core$IFn$_invoke$arity$1(self__.app),cljs.core.cycle.call(null,new cljs.core.Keyword(null,"colours","colours",659341642).cljs$core$IFn$_invoke$arity$1(self__.app))))));
});
f4f.t11892.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11894){var self__ = this;
var _11894__$1 = this;return self__.meta11893;
});
f4f.t11892.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11894,meta11893__$1){var self__ = this;
var _11894__$1 = this;return (new f4f.t11892(self__.owner,self__.app,self__.evening_view,meta11893__$1));
});
f4f.__GT_t11892 = (function __GT_t11892(owner__$1,app__$1,evening_view__$1,meta11893){return (new f4f.t11892(owner__$1,app__$1,evening_view__$1,meta11893));
});
}
return (new f4f.t11892(owner,app,evening_view,null));
});
f4f.pitches_view = (function pitches_view(app,owner){if(typeof f4f.t11928 !== 'undefined')
{} else
{
/**
* @constructor
*/
f4f.t11928 = (function (owner,app,pitches_view,meta11929){
this.owner = owner;
this.app = app;
this.pitches_view = pitches_view;
this.meta11929 = meta11929;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
f4f.t11928.cljs$lang$type = true;
f4f.t11928.cljs$lang$ctorStr = "f4f/t11928";
f4f.t11928.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"f4f/t11928");
});
f4f.t11928.prototype.om$core$IRender$ = true;
f4f.t11928.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.apply.call(null,om.dom.div,null,om.core.build_all.call(null,f4f.pitch_view,new cljs.core.Keyword(null,"pitches","pitches",-2052174929).cljs$core$IFn$_invoke$arity$1(self__.app)));
});
f4f.t11928.prototype.om$core$IWillMount$ = true;
f4f.t11928.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var r = pani.cljs.core.root.call(null,f4f.firebase_app_url);var c = pani.cljs.core.bind.call(null,r,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"pitches","pitches",-2052174929));var c__6787__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6787__auto__,r,c,___$1){
return (function (){var f__6788__auto__ = (function (){var switch__6772__auto__ = ((function (c__6787__auto__,r,c,___$1){
return (function (state_11944){var state_val_11945 = (state_11944[(1)]);if((state_val_11945 === (5)))
{var inst_11939 = (state_11944[(2)]);var inst_11933 = inst_11939;var state_11944__$1 = (function (){var statearr_11946 = state_11944;(statearr_11946[(7)] = inst_11933);
return statearr_11946;
})();var statearr_11947_11958 = state_11944__$1;(statearr_11947_11958[(2)] = null);
(statearr_11947_11958[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11945 === (4)))
{var inst_11942 = (state_11944[(2)]);var state_11944__$1 = state_11944;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11944__$1,inst_11942);
} else
{if((state_val_11945 === (3)))
{var inst_11933 = (state_11944[(7)]);var inst_11935 = (function (){var m = inst_11933;return ((function (m,inst_11933,state_val_11945,c__6787__auto__,r,c,___$1){
return (function (p1__11897_SHARP_){return new cljs.core.Keyword(null,"approved","approved",-803187124).cljs$core$IFn$_invoke$arity$1(p1__11897_SHARP_);
});
;})(m,inst_11933,state_val_11945,c__6787__auto__,r,c,___$1))
})();var inst_11936 = cljs.core.filter.call(null,inst_11935,inst_11933);var inst_11937 = om.core.update_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"pitches","pitches",-2052174929),inst_11936);var state_11944__$1 = (function (){var statearr_11948 = state_11944;(statearr_11948[(8)] = inst_11937);
return statearr_11948;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11944__$1,(5),c);
} else
{if((state_val_11945 === (2)))
{var inst_11932 = (state_11944[(2)]);var inst_11933 = inst_11932;var state_11944__$1 = (function (){var statearr_11949 = state_11944;(statearr_11949[(7)] = inst_11933);
return statearr_11949;
})();var statearr_11950_11959 = state_11944__$1;(statearr_11950_11959[(2)] = null);
(statearr_11950_11959[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11945 === (1)))
{var state_11944__$1 = state_11944;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11944__$1,(2),c);
} else
{return null;
}
}
}
}
}
});})(c__6787__auto__,r,c,___$1))
;return ((function (switch__6772__auto__,c__6787__auto__,r,c,___$1){
return (function() {
var state_machine__6773__auto__ = null;
var state_machine__6773__auto____0 = (function (){var statearr_11954 = [null,null,null,null,null,null,null,null,null];(statearr_11954[(0)] = state_machine__6773__auto__);
(statearr_11954[(1)] = (1));
return statearr_11954;
});
var state_machine__6773__auto____1 = (function (state_11944){while(true){
var ret_value__6774__auto__ = (function (){try{while(true){
var result__6775__auto__ = switch__6772__auto__.call(null,state_11944);if(cljs.core.keyword_identical_QMARK_.call(null,result__6775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6775__auto__;
}
break;
}
}catch (e11955){if((e11955 instanceof Object))
{var ex__6776__auto__ = e11955;var statearr_11956_11960 = state_11944;(statearr_11956_11960[(5)] = ex__6776__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11944);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11955;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6774__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11961 = state_11944;
state_11944 = G__11961;
continue;
}
} else
{return ret_value__6774__auto__;
}
break;
}
});
state_machine__6773__auto__ = function(state_11944){
switch(arguments.length){
case 0:
return state_machine__6773__auto____0.call(this);
case 1:
return state_machine__6773__auto____1.call(this,state_11944);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6773__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6773__auto____0;
state_machine__6773__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6773__auto____1;
return state_machine__6773__auto__;
})()
;})(switch__6772__auto__,c__6787__auto__,r,c,___$1))
})();var state__6789__auto__ = (function (){var statearr_11957 = f__6788__auto__.call(null);(statearr_11957[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6787__auto__);
return statearr_11957;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6789__auto__);
});})(c__6787__auto__,r,c,___$1))
);
return c__6787__auto__;
});
f4f.t11928.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11930){var self__ = this;
var _11930__$1 = this;return self__.meta11929;
});
f4f.t11928.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11930,meta11929__$1){var self__ = this;
var _11930__$1 = this;return (new f4f.t11928(self__.owner,self__.app,self__.pitches_view,meta11929__$1));
});
f4f.__GT_t11928 = (function __GT_t11928(owner__$1,app__$1,pitches_view__$1,meta11929){return (new f4f.t11928(owner__$1,app__$1,pitches_view__$1,meta11929));
});
}
return (new f4f.t11928(owner,app,pitches_view,null));
});
f4f.event_view = (function event_view(app,owner){if(typeof f4f.t11967 !== 'undefined')
{} else
{
/**
* @constructor
*/
f4f.t11967 = (function (owner,app,event_view,meta11968){
this.owner = owner;
this.app = app;
this.event_view = event_view;
this.meta11968 = meta11968;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
f4f.t11967.cljs$lang$type = true;
f4f.t11967.cljs$lang$ctorStr = "f4f/t11967";
f4f.t11967.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"f4f/t11967");
});
f4f.t11967.prototype.om$core$IRender$ = true;
f4f.t11967.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "container"},React.DOM.div({"className": "site-wrapper-inner"},React.DOM.div({"className": "row"},React.DOM.div({"className": "event cover"},React.DOM.h1(null,React.DOM.span({"className": "orange-text"},"#freo4freedom")),React.DOM.p({"className": "lead"},"an event by ",React.DOM.a({"href": "https://www.facebook.com/RRANFremantle", "target": "_blank"},"Fremantle Refugee Rights Action Network"),React.DOM.br(null),"part of the ",React.DOM.a({"href": "https://www.facebook.com/fremantlefestival", "target": "_blank"},"Fremantle Festival")),React.DOM.h1({"className": "lead", "style": {"fontSize": "200%"}},"Sunday, November 2",React.DOM.br(null),"North Fremantle Bowling Club",React.DOM.br(null),"40 Stirling Highway, North Fremantle",React.DOM.br(null),React.DOM.span({"className": "orange-text"},"afternoon free \u2022 evening entry by donation")),React.DOM.div({"style": {"align": "center"}},React.DOM.dl({"className": "dl-horizontal"},React.DOM.dt(null,"2PM"),React.DOM.dd(null,"food, workshops, collaboration, lawn bowls, music"),React.DOM.dt(null,"6:30PM"),React.DOM.dd(null,"music, comedy performances and speakers"))),React.DOM.p(null,React.DOM.h4({"className": "headline"},"Join us for an afternoon of social education and collaboration, leading into an evening of insightful comedy and inspiring music as we come together to build a creative local movement for social and political change.")),React.DOM.p(null,React.DOM.h4({"className": "headline"},"The #freo4freedom event is dedicated to promoting the cause of refugee rights in Australia. We're working towards the end of mandatory detention and offshore processing of asylum seekers.")),React.DOM.div({"className": "row"},React.DOM.div({"className": "col-lg-6"},React.DOM.h2({"className": "red-text"},"#freo4freedom \u00BB afternoon"),React.DOM.h4(null,"Pro-refugee workshops, meetings and activities conducted in a positive, family friendly environment. See below for what's in store!")),React.DOM.div({"className": "col-lg-6"},React.DOM.h2({"className": "red-text"},"#freo4freedom \u00BB evening"),React.DOM.h4(null,"Performances from Fremantle and Perth musicians in support of refugee rights, along with pro-refugee speakers and stand-up comedy."))),React.DOM.div({"className": "row"},React.DOM.div({"className": "col-lg-12"},React.DOM.h4(null,React.DOM.span({"className": "orange-text"},"no crime to seek asylum"),React.DOM.span({"className": "pull-right"},"Email ",React.DOM.a({"href": "mailto:freo@rran.org"},"Freo RRAN ",React.DOM.span({"className": "glyphicon glyphicon-envelope"}))," \u2022 Join ",React.DOM.a({"href": "https://www.facebook.com/events/944366122246547/"},"#freo4freedom on Facebook ",React.DOM.img({"style": {"height": "20px", "verticalAlign": "baseline"}, "src": "/img/fblogo.png"}))))))))));
});
f4f.t11967.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11969){var self__ = this;
var _11969__$1 = this;return self__.meta11968;
});
f4f.t11967.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11969,meta11968__$1){var self__ = this;
var _11969__$1 = this;return (new f4f.t11967(self__.owner,self__.app,self__.event_view,meta11968__$1));
});
f4f.__GT_t11967 = (function __GT_t11967(owner__$1,app__$1,event_view__$1,meta11968){return (new f4f.t11967(owner__$1,app__$1,event_view__$1,meta11968));
});
}
return (new f4f.t11967(owner,app,event_view,null));
});
f4f.get_value = (function get_value(id){return document.getElementById(id).value;
});
f4f.submit_pitch = (function submit_pitch(_,___$1,___$2,___$3){var r = pani.cljs.core.root.call(null,f4f.firebase_app_url);var p = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"heading","heading",-1312171873),f4f.get_value.call(null,"pitch-heading"),new cljs.core.Keyword(null,"description","description",-1428560544),f4f.get_value.call(null,"pitch-description"),new cljs.core.Keyword(null,"email","email",1415816706),f4f.get_value.call(null,"pitch-email"),new cljs.core.Keyword(null,"groupname","groupname",-493355733),f4f.get_value.call(null,"pitch-groupname"),new cljs.core.Keyword(null,"approved","approved",-803187124),true,new cljs.core.Keyword(null,"likes","likes",792554542),(0),new cljs.core.Keyword(null,"uuid","uuid",-2145095719),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_uuid.core.make_random.call(null)))], null);var new_pitches = cljs.core.conj.call(null,new cljs.core.Keyword(null,"pitches","pitches",-2052174929).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,f4f.app_state)),p);cljs.core.println.call(null,new_pitches);
pani.cljs.core.set_BANG_.call(null,r,new cljs.core.Keyword(null,"pitches","pitches",-2052174929),new_pitches);
return cljs.core.swap_BANG_.call(null,f4f.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"pitching","pitching",-720286578),false);
});
f4f.pitch_form = (function pitch_form(app,owner){if(typeof f4f.t11981 !== 'undefined')
{} else
{
/**
* @constructor
*/
f4f.t11981 = (function (owner,app,pitch_form,meta11982){
this.owner = owner;
this.app = app;
this.pitch_form = pitch_form;
this.meta11982 = meta11982;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
f4f.t11981.cljs$lang$type = true;
f4f.t11981.cljs$lang$ctorStr = "f4f/t11981";
f4f.t11981.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"f4f/t11981");
});
f4f.t11981.prototype.om$core$IRender$ = true;
f4f.t11981.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "site-wrapper-inner"},React.DOM.div({"className": "cover-container"},React.DOM.div({"className": "inner cover"},React.DOM.h1(null,React.DOM.span({"className": "orange-text"},"#freo4freedom")),React.DOM.form(null,React.DOM.div({"className": "form-group"},React.DOM.label({"htmlFor": "pitch-heading"},React.DOM.h3({"className": "orange-text"},"Give your idea a name!")),sablono.interpreter.input.call(null,{"className": "form-control", "id": "pitch-heading", "type": "text", "placeholder": "My plan to support refugee rights"}),React.DOM.label({"htmlFor": "pitch-groupname"},React.DOM.h3({"className": "orange-text"},"Who are you?")),sablono.interpreter.input.call(null,{"className": "form-control", "id": "pitch-groupname", "type": "text", "placeholder": "My name or my group's name"}),React.DOM.label({"htmlFor": "pitch-email"},React.DOM.h3({"className": "orange-text"},"What's your email address?")),sablono.interpreter.input.call(null,{"className": "form-control", "id": "pitch-email", "type": "text", "placeholder": "Email (required \u2014 won't be published)"}),React.DOM.label({"htmlFor": "pitch-description"},React.DOM.h3({"className": "orange-text"},"Describe your project")),sablono.interpreter.textarea.call(null,{"className": "form-control", "id": "pitch-description", "rows": (15), "type": "text", "placeholder": "Who, where, what, when and how?"})),React.DOM.button({"className": "btn btn-primary", "type": "submit", "onClick": f4f.submit_pitch},React.DOM.h3(null,"Tell us about it \u00BB"))))));
});
f4f.t11981.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11983){var self__ = this;
var _11983__$1 = this;return self__.meta11982;
});
f4f.t11981.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11983,meta11982__$1){var self__ = this;
var _11983__$1 = this;return (new f4f.t11981(self__.owner,self__.app,self__.pitch_form,meta11982__$1));
});
f4f.__GT_t11981 = (function __GT_t11981(owner__$1,app__$1,pitch_form__$1,meta11982){return (new f4f.t11981(owner__$1,app__$1,pitch_form__$1,meta11982));
});
}
return (new f4f.t11981(owner,app,pitch_form,null));
});
f4f.focus_view = (function focus_view(app,owner){if(typeof f4f.t11993 !== 'undefined')
{} else
{
/**
* @constructor
*/
f4f.t11993 = (function (owner,app,focus_view,meta11994){
this.owner = owner;
this.app = app;
this.focus_view = focus_view;
this.meta11994 = meta11994;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
f4f.t11993.cljs$lang$type = true;
f4f.t11993.cljs$lang$ctorStr = "f4f/t11993";
f4f.t11993.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"f4f/t11993");
});
f4f.t11993.prototype.om$core$IRender$ = true;
f4f.t11993.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(new cljs.core.Keyword(null,"pitching","pitching",-720286578).cljs$core$IFn$_invoke$arity$1(self__.app)))
{return om.core.build.call(null,f4f.pitch_form,self__.app);
} else
{return om.core.build.call(null,f4f.event_view,self__.app);
}
});
f4f.t11993.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11995){var self__ = this;
var _11995__$1 = this;return self__.meta11994;
});
f4f.t11993.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11995,meta11994__$1){var self__ = this;
var _11995__$1 = this;return (new f4f.t11993(self__.owner,self__.app,self__.focus_view,meta11994__$1));
});
f4f.__GT_t11993 = (function __GT_t11993(owner__$1,app__$1,focus_view__$1,meta11994){return (new f4f.t11993(owner__$1,app__$1,focus_view__$1,meta11994));
});
}
return (new f4f.t11993(owner,app,focus_view,null));
});
om.core.root.call(null,f4f.focus_view,f4f.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("focus")], null));
om.core.root.call(null,f4f.afternoon_view,f4f.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("afternoon")], null));
om.core.root.call(null,f4f.evening_view,f4f.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("evening")], null));

//# sourceMappingURL=f4f.js.map