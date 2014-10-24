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
f4f.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"pitching","pitching",-720286578),false,new cljs.core.Keyword(null,"afternoon","afternoon",1529569827),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"heading","heading",-1312171873),"Artists for Refugees",new cljs.core.Keyword(null,"subheading","subheading",-805629940),"Craft a pro-refugee piece",new cljs.core.Keyword(null,"description","description",-1428560544),"A chance for adults and kids alike to let their artistic side shine through. Get involved in bringing art and activism together, a pro-refugee creative workshop for young and old. Amplify your voice and the refugee rights message we're building for RRAN's involvement in the Fremantle Festival Parade."], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"heading","heading",-1312171873),"Mythbusting circle",new cljs.core.Keyword(null,"subheading","subheading",-805629940),"Breaking down false beliefs",new cljs.core.Keyword(null,"description","description",-1428560544),"There are many false perceptions about asylum seekers and refugees in the Australian community. The mythbusting circle provides an opportunity for attendees of Freo4Freedom to sit with refugee advocates and refugees in a non-judgmental environment, asking questions about refugees to learn more about the issues they face in country of origin, their refugee journey and detention in Australia."], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"heading","heading",-1312171873),"Tamil food corner",new cljs.core.Keyword(null,"subheading","subheading",-805629940),"Tamil culture, food and flavours",new cljs.core.Keyword(null,"description","description",-1428560544),"Promoting Tamil food, sharing interesting facts about Tamil culture, educate visitors on the ongoing struggle of minority Tamils in Sri Lanka and creating awareness about minority struggles around the world."], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"heading","heading",-1312171873),"Media skills workshop",new cljs.core.Keyword(null,"subheading","subheading",-805629940),"Tricks of the trade from a professional",new cljs.core.Keyword(null,"description","description",-1428560544),"What makes a good story? Questions journalists ask; catching the media wave; interview skills; rules of the game. What not to do and how to use social media to amplify your message."], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"heading","heading",-1312171873),"Australia's dark rift",new cljs.core.Keyword(null,"subheading","subheading",-805629940),"Refugee policy and practice since 1992",new cljs.core.Keyword(null,"description","description",-1428560544),"An overview of the political motivations which have driven policy toward asylum seekers since the introduction of mandatory detention in 1992. We will also discuss how policy and laws have deliberately created a rift in Australian society and human rights practices. We will conclude by proposing ways in which this rift may be repaired and provide you with the tools and imagination to become agents for social and political change."], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"heading","heading",-1312171873),"Lawn bowls",new cljs.core.Keyword(null,"description","description",-1428560544),"Soak up the Freo festival atmosphere while you compete to relax on the bowling club greens in the friendliest of friendly competitions. Don't forget to bring a hat!"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"heading","heading",-1312171873),"Bar open \u2022 Food and drink",new cljs.core.Keyword(null,"description","description",-1428560544),"Snacks, drinks and sweets to tickle your tastebuds from local vendors, and a full bar open inside the North Fremantle Bowling Club."], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"heading","heading",-1312171873),"Hazara shisha corner",new cljs.core.Keyword(null,"description","description",-1428560544),"Enjoy the flavour of authentic shisha for a gold coin donation."], null)], null),new cljs.core.Keyword(null,"evening","evening",1560377406),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),"Rev. Chris Bedding"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),"Joe Pule"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),"Paul Gioia & Bill Lawrie"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),"Yara Neto"], null)], null),new cljs.core.Keyword(null,"colours","colours",659341642),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.shuffle.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#f7941e","#000"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#7dc476","#000"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#8660a9","#fff"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#fff200","#000"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#00a54f","#fff"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#8c6239","#000"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#003662","#fff"], null)], null))),new cljs.core.Keyword(null,"pitches","pitches",-2052174929),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,(function (n){return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"heading","heading",-1312171873),("Pitch #"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)),new cljs.core.Keyword(null,"likes","likes",792554542),(0),new cljs.core.Keyword(null,"email","email",1415816706),"tflynch@gmail.com",new cljs.core.Keyword(null,"groupname","groupname",-493355733),"Test Group",new cljs.core.Keyword(null,"uuid","uuid",-2145095719),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_uuid.core.make_random.call(null))),new cljs.core.Keyword(null,"approved","approved",-803187124),true,new cljs.core.Keyword(null,"description","description",-1428560544),"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."], null);
}),cljs.core.range.call(null,(6))))], null));
f4f.init_firebase_BANG_ = (function init_firebase_BANG_(){cljs.core.println.call(null,cljs_uuid.core.make_random.call(null));
var r = pani.cljs.core.root.call(null,f4f.firebase_app_url);var app = cljs.core.deref.call(null,f4f.app_state);return pani.cljs.core.set_BANG_.call(null,r,new cljs.core.Keyword(null,"pitches","pitches",-2052174929),new cljs.core.Keyword(null,"pitches","pitches",-2052174929).cljs$core$IFn$_invoke$arity$1(app));
});
<<<<<<< HEAD
f4f.activity_view = (function activity_view(activity,owner){if(typeof f4f.t11370 !== 'undefined')
=======
f4f.activity_view = (function activity_view(activity,owner){if(typeof f4f.t12630 !== 'undefined')
>>>>>>> d879f16fd52606b0486a7a7de9f31f5cebd48c3e
{} else
{
/**
* @constructor
*/
<<<<<<< HEAD
f4f.t11370 = (function (owner,activity,activity_view,meta11371){
this.owner = owner;
this.activity = activity;
this.activity_view = activity_view;
this.meta11371 = meta11371;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
f4f.t11370.cljs$lang$type = true;
f4f.t11370.cljs$lang$ctorStr = "f4f/t11370";
f4f.t11370.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"f4f/t11370");
});
f4f.t11370.prototype.om$core$IRender$ = true;
f4f.t11370.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "col-lg-6 artist"},React.DOM.div({"className": "row artist-header", "style": {"backgroundColor": new cljs.core.Keyword(null,"colour","colour",2137094554).cljs$core$IFn$_invoke$arity$1(self__.activity).call(null,(0)), "color": new cljs.core.Keyword(null,"colour","colour",2137094554).cljs$core$IFn$_invoke$arity$1(self__.activity).call(null,(1))}},(function (){var attrs11373 = new cljs.core.Keyword(null,"heading","heading",-1312171873).cljs$core$IFn$_invoke$arity$1(self__.activity);return cljs.core.apply.call(null,React.DOM.h2,((cljs.core.map_QMARK_.call(null,attrs11373))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["item-headline","pull-right"], null)], null),attrs11373)):{"className": "item-headline pull-right"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs11373))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs11373)], null))));
})(),React.DOM.br(null),sablono.interpreter.interpret.call(null,((!((new cljs.core.Keyword(null,"subheading","subheading",-805629940).cljs$core$IFn$_invoke$arity$1(self__.activity) == null)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.item-headline.pull-right","h4.item-headline.pull-right",-1850148695),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"subheading","subheading",-805629940).cljs$core$IFn$_invoke$arity$1(self__.activity)], null)], null):null))),sablono.interpreter.interpret.call(null,((!((new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(self__.activity) == null)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.artist-text.event-text","div.artist-text.event-text",-115586790),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(self__.activity)], null)], null):null)));
});
f4f.t11370.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11372){var self__ = this;
var _11372__$1 = this;return self__.meta11371;
});
f4f.t11370.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11372,meta11371__$1){var self__ = this;
var _11372__$1 = this;return (new f4f.t11370(self__.owner,self__.activity,self__.activity_view,meta11371__$1));
});
f4f.__GT_t11370 = (function __GT_t11370(owner__$1,activity__$1,activity_view__$1,meta11371){return (new f4f.t11370(owner__$1,activity__$1,activity_view__$1,meta11371));
});
}
return (new f4f.t11370(owner,activity,activity_view,null));
=======
f4f.t12630 = (function (owner,activity,activity_view,meta12631){
this.owner = owner;
this.activity = activity;
this.activity_view = activity_view;
this.meta12631 = meta12631;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
f4f.t12630.cljs$lang$type = true;
f4f.t12630.cljs$lang$ctorStr = "f4f/t12630";
f4f.t12630.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"f4f/t12630");
});
f4f.t12630.prototype.om$core$IRender$ = true;
f4f.t12630.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "col-lg-6 artist"},React.DOM.div({"className": "row artist-header", "style": {"backgroundColor": new cljs.core.Keyword(null,"colour","colour",2137094554).cljs$core$IFn$_invoke$arity$1(self__.activity).call(null,(0)), "color": new cljs.core.Keyword(null,"colour","colour",2137094554).cljs$core$IFn$_invoke$arity$1(self__.activity).call(null,(1))}},(function (){var attrs12633 = new cljs.core.Keyword(null,"heading","heading",-1312171873).cljs$core$IFn$_invoke$arity$1(self__.activity);return cljs.core.apply.call(null,React.DOM.h2,((cljs.core.map_QMARK_.call(null,attrs12633))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["item-headline","pull-right"], null)], null),attrs12633)):{"className": "item-headline pull-right"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs12633))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs12633)], null))));
})(),React.DOM.br(null),sablono.interpreter.interpret.call(null,((!((new cljs.core.Keyword(null,"subheading","subheading",-805629940).cljs$core$IFn$_invoke$arity$1(self__.activity) == null)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.item-headline.pull-right","h4.item-headline.pull-right",-1850148695),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"subheading","subheading",-805629940).cljs$core$IFn$_invoke$arity$1(self__.activity)], null)], null):null))),sablono.interpreter.interpret.call(null,((!((new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(self__.activity) == null)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.artist-text.event-text","div.artist-text.event-text",-115586790),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(self__.activity)], null)], null):null)));
});
f4f.t12630.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12632){var self__ = this;
var _12632__$1 = this;return self__.meta12631;
});
f4f.t12630.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12632,meta12631__$1){var self__ = this;
var _12632__$1 = this;return (new f4f.t12630(self__.owner,self__.activity,self__.activity_view,meta12631__$1));
});
f4f.__GT_t12630 = (function __GT_t12630(owner__$1,activity__$1,activity_view__$1,meta12631){return (new f4f.t12630(owner__$1,activity__$1,activity_view__$1,meta12631));
});
}
return (new f4f.t12630(owner,activity,activity_view,null));
>>>>>>> d879f16fd52606b0486a7a7de9f31f5cebd48c3e
});
f4f.vote_button_id = (function vote_button_id(unique_id){return ("vote-button-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(unique_id));
});
f4f.submit_vote = (function submit_vote(unique_id){return (function (){cljs.core.println.call(null,"Voted for pitch ",unique_id);
return document.getElementById(f4f.vote_button_id.call(null,unique_id)).className = "btn btn-primary pull-right";
});
});
<<<<<<< HEAD
f4f.pitch_view = (function pitch_view(pitch,owner){if(typeof f4f.t11387 !== 'undefined')
=======
f4f.pitch_view = (function pitch_view(pitch,owner){if(typeof f4f.t12647 !== 'undefined')
>>>>>>> d879f16fd52606b0486a7a7de9f31f5cebd48c3e
{} else
{
/**
* @constructor
*/
<<<<<<< HEAD
f4f.t11387 = (function (owner,pitch,pitch_view,meta11388){
this.owner = owner;
this.pitch = pitch;
this.pitch_view = pitch_view;
this.meta11388 = meta11388;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
f4f.t11387.cljs$lang$type = true;
f4f.t11387.cljs$lang$ctorStr = "f4f/t11387";
f4f.t11387.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"f4f/t11387");
});
f4f.t11387.prototype.om$core$IRender$ = true;
f4f.t11387.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "col-lg-6"},React.DOM.div({"className": "inner"},React.DOM.h2({"style": {"display": "inline"}},(function (){var attrs11390 = new cljs.core.Keyword(null,"heading","heading",-1312171873).cljs$core$IFn$_invoke$arity$1(self__.pitch);return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs11390))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["orange-text"], null)], null),attrs11390)):{"className": "orange-text"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs11390))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs11390)], null))));
})()),(function (){var attrs11391 = (function (){var pitch_id = new cljs.core.Keyword(null,"uuid","uuid",-2145095719).cljs$core$IFn$_invoke$arity$1(self__.pitch);return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),("vote-button-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(pitch_id)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),f4f.submit_vote.call(null,pitch_id)], null);
})();return cljs.core.apply.call(null,React.DOM.button,((cljs.core.map_QMARK_.call(null,attrs11391))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["btn","btn-default","pull-right"], null)], null),attrs11391)):{"className": "btn btn-default pull-right"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs11391))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.span({"className": "glyphicon glyphicon-heart-empty"})], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs11391),React.DOM.span({"className": "glyphicon glyphicon-heart-empty"})], null))));
})(),(function (){var attrs11396 = new cljs.core.Keyword(null,"groupname","groupname",-493355733).cljs$core$IFn$_invoke$arity$1(self__.pitch);return cljs.core.apply.call(null,React.DOM.h4,((cljs.core.map_QMARK_.call(null,attrs11396))?sablono.interpreter.attributes.call(null,attrs11396):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs11396))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs11396)], null))));
})(),(function (){var attrs11397 = new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(self__.pitch);return cljs.core.apply.call(null,React.DOM.p,((cljs.core.map_QMARK_.call(null,attrs11397))?sablono.interpreter.attributes.call(null,attrs11397):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs11397))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs11397)], null))));
})()));
});
f4f.t11387.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11389){var self__ = this;
var _11389__$1 = this;return self__.meta11388;
});
f4f.t11387.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11389,meta11388__$1){var self__ = this;
var _11389__$1 = this;return (new f4f.t11387(self__.owner,self__.pitch,self__.pitch_view,meta11388__$1));
});
f4f.__GT_t11387 = (function __GT_t11387(owner__$1,pitch__$1,pitch_view__$1,meta11388){return (new f4f.t11387(owner__$1,pitch__$1,pitch_view__$1,meta11388));
});
}
return (new f4f.t11387(owner,pitch,pitch_view,null));
});
f4f.afternoon_view = (function afternoon_view(app,owner){if(typeof f4f.t11405 !== 'undefined')
=======
f4f.t12647 = (function (owner,pitch,pitch_view,meta12648){
this.owner = owner;
this.pitch = pitch;
this.pitch_view = pitch_view;
this.meta12648 = meta12648;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
f4f.t12647.cljs$lang$type = true;
f4f.t12647.cljs$lang$ctorStr = "f4f/t12647";
f4f.t12647.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"f4f/t12647");
});
f4f.t12647.prototype.om$core$IRender$ = true;
f4f.t12647.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "col-lg-6"},React.DOM.div({"className": "inner"},React.DOM.h2({"style": {"display": "inline"}},(function (){var attrs12650 = new cljs.core.Keyword(null,"heading","heading",-1312171873).cljs$core$IFn$_invoke$arity$1(self__.pitch);return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs12650))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["orange-text"], null)], null),attrs12650)):{"className": "orange-text"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs12650))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs12650)], null))));
})()),(function (){var attrs12651 = (function (){var pitch_id = new cljs.core.Keyword(null,"uuid","uuid",-2145095719).cljs$core$IFn$_invoke$arity$1(self__.pitch);return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),("vote-button-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(pitch_id)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),f4f.submit_vote.call(null,pitch_id)], null);
})();return cljs.core.apply.call(null,React.DOM.button,((cljs.core.map_QMARK_.call(null,attrs12651))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["btn","btn-default","pull-right"], null)], null),attrs12651)):{"className": "btn btn-default pull-right"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs12651))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.span({"className": "glyphicon glyphicon-heart-empty"})], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs12651),React.DOM.span({"className": "glyphicon glyphicon-heart-empty"})], null))));
})(),(function (){var attrs12656 = new cljs.core.Keyword(null,"groupname","groupname",-493355733).cljs$core$IFn$_invoke$arity$1(self__.pitch);return cljs.core.apply.call(null,React.DOM.h4,((cljs.core.map_QMARK_.call(null,attrs12656))?sablono.interpreter.attributes.call(null,attrs12656):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs12656))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs12656)], null))));
})(),(function (){var attrs12657 = new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(self__.pitch);return cljs.core.apply.call(null,React.DOM.p,((cljs.core.map_QMARK_.call(null,attrs12657))?sablono.interpreter.attributes.call(null,attrs12657):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs12657))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs12657)], null))));
})()));
});
f4f.t12647.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12649){var self__ = this;
var _12649__$1 = this;return self__.meta12648;
});
f4f.t12647.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12649,meta12648__$1){var self__ = this;
var _12649__$1 = this;return (new f4f.t12647(self__.owner,self__.pitch,self__.pitch_view,meta12648__$1));
});
f4f.__GT_t12647 = (function __GT_t12647(owner__$1,pitch__$1,pitch_view__$1,meta12648){return (new f4f.t12647(owner__$1,pitch__$1,pitch_view__$1,meta12648));
});
}
return (new f4f.t12647(owner,pitch,pitch_view,null));
});
f4f.afternoon_view = (function afternoon_view(app,owner){if(typeof f4f.t12665 !== 'undefined')
>>>>>>> d879f16fd52606b0486a7a7de9f31f5cebd48c3e
{} else
{
/**
* @constructor
*/
<<<<<<< HEAD
f4f.t11405 = (function (owner,app,afternoon_view,meta11406){
this.owner = owner;
this.app = app;
this.afternoon_view = afternoon_view;
this.meta11406 = meta11406;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
f4f.t11405.cljs$lang$type = true;
f4f.t11405.cljs$lang$ctorStr = "f4f/t11405";
f4f.t11405.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"f4f/t11405");
});
f4f.t11405.prototype.om$core$IRender$ = true;
f4f.t11405.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "row event"},React.DOM.div(null,React.DOM.h2(null,"music \u2022 food \u2022 lawn bowls \u2022 workshops",React.DOM.span({"className": "hidden-md hidden-sm hidden-xs pull-right"},"from 2PM"))),sablono.interpreter.interpret.call(null,om.core.build_all.call(null,f4f.activity_view,cljs.core.map.call(null,((function (___$1){
return (function (p1__11398_SHARP_,p2__11399_SHARP_){return cljs.core.assoc.call(null,p1__11398_SHARP_,new cljs.core.Keyword(null,"colour","colour",2137094554),p2__11399_SHARP_);
});})(___$1))
,new cljs.core.Keyword(null,"afternoon","afternoon",1529569827).cljs$core$IFn$_invoke$arity$1(self__.app),cljs.core.cycle.call(null,new cljs.core.Keyword(null,"colours","colours",659341642).cljs$core$IFn$_invoke$arity$1(self__.app))))));
});
f4f.t11405.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11407){var self__ = this;
var _11407__$1 = this;return self__.meta11406;
});
f4f.t11405.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11407,meta11406__$1){var self__ = this;
var _11407__$1 = this;return (new f4f.t11405(self__.owner,self__.app,self__.afternoon_view,meta11406__$1));
});
f4f.__GT_t11405 = (function __GT_t11405(owner__$1,app__$1,afternoon_view__$1,meta11406){return (new f4f.t11405(owner__$1,app__$1,afternoon_view__$1,meta11406));
});
}
return (new f4f.t11405(owner,app,afternoon_view,null));
});
f4f.evening_view = (function evening_view(app,owner){if(typeof f4f.t11417 !== 'undefined')
=======
f4f.t12665 = (function (owner,app,afternoon_view,meta12666){
this.owner = owner;
this.app = app;
this.afternoon_view = afternoon_view;
this.meta12666 = meta12666;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
f4f.t12665.cljs$lang$type = true;
f4f.t12665.cljs$lang$ctorStr = "f4f/t12665";
f4f.t12665.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"f4f/t12665");
});
f4f.t12665.prototype.om$core$IRender$ = true;
f4f.t12665.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "row event"},React.DOM.div(null,React.DOM.h2(null,"music \u2022 food \u2022 lawn bowls \u2022 workshops",React.DOM.span({"className": "hidden-md hidden-sm hidden-xs pull-right"},"from 2PM"))),sablono.interpreter.interpret.call(null,om.core.build_all.call(null,f4f.activity_view,cljs.core.map.call(null,((function (___$1){
return (function (p1__12658_SHARP_,p2__12659_SHARP_){return cljs.core.assoc.call(null,p1__12658_SHARP_,new cljs.core.Keyword(null,"colour","colour",2137094554),p2__12659_SHARP_);
});})(___$1))
,new cljs.core.Keyword(null,"afternoon","afternoon",1529569827).cljs$core$IFn$_invoke$arity$1(self__.app),cljs.core.cycle.call(null,new cljs.core.Keyword(null,"colours","colours",659341642).cljs$core$IFn$_invoke$arity$1(self__.app))))));
});
f4f.t12665.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12667){var self__ = this;
var _12667__$1 = this;return self__.meta12666;
});
f4f.t12665.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12667,meta12666__$1){var self__ = this;
var _12667__$1 = this;return (new f4f.t12665(self__.owner,self__.app,self__.afternoon_view,meta12666__$1));
});
f4f.__GT_t12665 = (function __GT_t12665(owner__$1,app__$1,afternoon_view__$1,meta12666){return (new f4f.t12665(owner__$1,app__$1,afternoon_view__$1,meta12666));
});
}
return (new f4f.t12665(owner,app,afternoon_view,null));
});
f4f.evening_view = (function evening_view(app,owner){if(typeof f4f.t12677 !== 'undefined')
>>>>>>> d879f16fd52606b0486a7a7de9f31f5cebd48c3e
{} else
{
/**
* @constructor
*/
<<<<<<< HEAD
f4f.t11417 = (function (owner,app,evening_view,meta11418){
this.owner = owner;
this.app = app;
this.evening_view = evening_view;
this.meta11418 = meta11418;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
f4f.t11417.cljs$lang$type = true;
f4f.t11417.cljs$lang$ctorStr = "f4f/t11417";
f4f.t11417.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"f4f/t11417");
});
f4f.t11417.prototype.om$core$IRender$ = true;
f4f.t11417.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "row event"},React.DOM.div(null,React.DOM.h2(null,"hiphop freestyle \u2022 music \u2022 comedy show",React.DOM.span({"className": "hidden-md hidden-sm hidden-xs pull-right"},"from 6:30PM"))),sablono.interpreter.interpret.call(null,om.core.build_all.call(null,f4f.activity_view,cljs.core.map.call(null,((function (___$1){
return (function (p1__11410_SHARP_,p2__11411_SHARP_){return cljs.core.assoc.call(null,p1__11410_SHARP_,new cljs.core.Keyword(null,"colour","colour",2137094554),p2__11411_SHARP_);
});})(___$1))
,new cljs.core.Keyword(null,"evening","evening",1560377406).cljs$core$IFn$_invoke$arity$1(self__.app),cljs.core.cycle.call(null,new cljs.core.Keyword(null,"colours","colours",659341642).cljs$core$IFn$_invoke$arity$1(self__.app))))));
});
f4f.t11417.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11419){var self__ = this;
var _11419__$1 = this;return self__.meta11418;
});
f4f.t11417.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11419,meta11418__$1){var self__ = this;
var _11419__$1 = this;return (new f4f.t11417(self__.owner,self__.app,self__.evening_view,meta11418__$1));
});
f4f.__GT_t11417 = (function __GT_t11417(owner__$1,app__$1,evening_view__$1,meta11418){return (new f4f.t11417(owner__$1,app__$1,evening_view__$1,meta11418));
});
}
return (new f4f.t11417(owner,app,evening_view,null));
});
f4f.pitches_view = (function pitches_view(app,owner){if(typeof f4f.t11453 !== 'undefined')
=======
f4f.t12677 = (function (owner,app,evening_view,meta12678){
this.owner = owner;
this.app = app;
this.evening_view = evening_view;
this.meta12678 = meta12678;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
f4f.t12677.cljs$lang$type = true;
f4f.t12677.cljs$lang$ctorStr = "f4f/t12677";
f4f.t12677.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"f4f/t12677");
});
f4f.t12677.prototype.om$core$IRender$ = true;
f4f.t12677.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "row event"},React.DOM.div(null,React.DOM.h2(null,"hiphop freestyle \u2022 music \u2022 comedy show",React.DOM.span({"className": "hidden-md hidden-sm hidden-xs pull-right"},"from 6:30PM"))),sablono.interpreter.interpret.call(null,om.core.build_all.call(null,f4f.activity_view,cljs.core.map.call(null,((function (___$1){
return (function (p1__12670_SHARP_,p2__12671_SHARP_){return cljs.core.assoc.call(null,p1__12670_SHARP_,new cljs.core.Keyword(null,"colour","colour",2137094554),p2__12671_SHARP_);
});})(___$1))
,new cljs.core.Keyword(null,"evening","evening",1560377406).cljs$core$IFn$_invoke$arity$1(self__.app),cljs.core.cycle.call(null,new cljs.core.Keyword(null,"colours","colours",659341642).cljs$core$IFn$_invoke$arity$1(self__.app))))));
});
f4f.t12677.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12679){var self__ = this;
var _12679__$1 = this;return self__.meta12678;
});
f4f.t12677.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12679,meta12678__$1){var self__ = this;
var _12679__$1 = this;return (new f4f.t12677(self__.owner,self__.app,self__.evening_view,meta12678__$1));
});
f4f.__GT_t12677 = (function __GT_t12677(owner__$1,app__$1,evening_view__$1,meta12678){return (new f4f.t12677(owner__$1,app__$1,evening_view__$1,meta12678));
});
}
return (new f4f.t12677(owner,app,evening_view,null));
});
f4f.pitches_view = (function pitches_view(app,owner){if(typeof f4f.t12713 !== 'undefined')
>>>>>>> d879f16fd52606b0486a7a7de9f31f5cebd48c3e
{} else
{
/**
* @constructor
*/
<<<<<<< HEAD
f4f.t11453 = (function (owner,app,pitches_view,meta11454){
this.owner = owner;
this.app = app;
this.pitches_view = pitches_view;
this.meta11454 = meta11454;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
f4f.t11453.cljs$lang$type = true;
f4f.t11453.cljs$lang$ctorStr = "f4f/t11453";
f4f.t11453.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"f4f/t11453");
});
f4f.t11453.prototype.om$core$IRender$ = true;
f4f.t11453.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.apply.call(null,om.dom.div,null,om.core.build_all.call(null,f4f.pitch_view,new cljs.core.Keyword(null,"pitches","pitches",-2052174929).cljs$core$IFn$_invoke$arity$1(self__.app)));
});
f4f.t11453.prototype.om$core$IWillMount$ = true;
f4f.t11453.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var r = pani.cljs.core.root.call(null,f4f.firebase_app_url);var c = pani.cljs.core.bind.call(null,r,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"pitches","pitches",-2052174929));var c__6787__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6787__auto__,r,c,___$1){
return (function (){var f__6788__auto__ = (function (){var switch__6772__auto__ = ((function (c__6787__auto__,r,c,___$1){
return (function (state_11469){var state_val_11470 = (state_11469[(1)]);if((state_val_11470 === (5)))
{var inst_11464 = (state_11469[(2)]);var inst_11458 = inst_11464;var state_11469__$1 = (function (){var statearr_11471 = state_11469;(statearr_11471[(7)] = inst_11458);
return statearr_11471;
})();var statearr_11472_11483 = state_11469__$1;(statearr_11472_11483[(2)] = null);
(statearr_11472_11483[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11470 === (4)))
{var inst_11467 = (state_11469[(2)]);var state_11469__$1 = state_11469;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11469__$1,inst_11467);
} else
{if((state_val_11470 === (3)))
{var inst_11458 = (state_11469[(7)]);var inst_11460 = (function (){var m = inst_11458;return ((function (m,inst_11458,state_val_11470,c__6787__auto__,r,c,___$1){
return (function (p1__11422_SHARP_){return new cljs.core.Keyword(null,"approved","approved",-803187124).cljs$core$IFn$_invoke$arity$1(p1__11422_SHARP_);
});
;})(m,inst_11458,state_val_11470,c__6787__auto__,r,c,___$1))
})();var inst_11461 = cljs.core.filter.call(null,inst_11460,inst_11458);var inst_11462 = om.core.update_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"pitches","pitches",-2052174929),inst_11461);var state_11469__$1 = (function (){var statearr_11473 = state_11469;(statearr_11473[(8)] = inst_11462);
return statearr_11473;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11469__$1,(5),c);
} else
{if((state_val_11470 === (2)))
{var inst_11457 = (state_11469[(2)]);var inst_11458 = inst_11457;var state_11469__$1 = (function (){var statearr_11474 = state_11469;(statearr_11474[(7)] = inst_11458);
return statearr_11474;
})();var statearr_11475_11484 = state_11469__$1;(statearr_11475_11484[(2)] = null);
(statearr_11475_11484[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11470 === (1)))
{var state_11469__$1 = state_11469;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11469__$1,(2),c);
=======
f4f.t12713 = (function (owner,app,pitches_view,meta12714){
this.owner = owner;
this.app = app;
this.pitches_view = pitches_view;
this.meta12714 = meta12714;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
f4f.t12713.cljs$lang$type = true;
f4f.t12713.cljs$lang$ctorStr = "f4f/t12713";
f4f.t12713.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"f4f/t12713");
});
f4f.t12713.prototype.om$core$IRender$ = true;
f4f.t12713.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.apply.call(null,om.dom.div,null,om.core.build_all.call(null,f4f.pitch_view,new cljs.core.Keyword(null,"pitches","pitches",-2052174929).cljs$core$IFn$_invoke$arity$1(self__.app)));
});
f4f.t12713.prototype.om$core$IWillMount$ = true;
f4f.t12713.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var r = pani.cljs.core.root.call(null,f4f.firebase_app_url);var c = pani.cljs.core.bind.call(null,r,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"pitches","pitches",-2052174929));var c__6787__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6787__auto__,r,c,___$1){
return (function (){var f__6788__auto__ = (function (){var switch__6772__auto__ = ((function (c__6787__auto__,r,c,___$1){
return (function (state_12729){var state_val_12730 = (state_12729[(1)]);if((state_val_12730 === (5)))
{var inst_12724 = (state_12729[(2)]);var inst_12718 = inst_12724;var state_12729__$1 = (function (){var statearr_12731 = state_12729;(statearr_12731[(7)] = inst_12718);
return statearr_12731;
})();var statearr_12732_12743 = state_12729__$1;(statearr_12732_12743[(2)] = null);
(statearr_12732_12743[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12730 === (4)))
{var inst_12727 = (state_12729[(2)]);var state_12729__$1 = state_12729;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12729__$1,inst_12727);
} else
{if((state_val_12730 === (3)))
{var inst_12718 = (state_12729[(7)]);var inst_12720 = (function (){var m = inst_12718;return ((function (m,inst_12718,state_val_12730,c__6787__auto__,r,c,___$1){
return (function (p1__12682_SHARP_){return new cljs.core.Keyword(null,"approved","approved",-803187124).cljs$core$IFn$_invoke$arity$1(p1__12682_SHARP_);
});
;})(m,inst_12718,state_val_12730,c__6787__auto__,r,c,___$1))
})();var inst_12721 = cljs.core.filter.call(null,inst_12720,inst_12718);var inst_12722 = om.core.update_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"pitches","pitches",-2052174929),inst_12721);var state_12729__$1 = (function (){var statearr_12733 = state_12729;(statearr_12733[(8)] = inst_12722);
return statearr_12733;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12729__$1,(5),c);
} else
{if((state_val_12730 === (2)))
{var inst_12717 = (state_12729[(2)]);var inst_12718 = inst_12717;var state_12729__$1 = (function (){var statearr_12734 = state_12729;(statearr_12734[(7)] = inst_12718);
return statearr_12734;
})();var statearr_12735_12744 = state_12729__$1;(statearr_12735_12744[(2)] = null);
(statearr_12735_12744[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12730 === (1)))
{var state_12729__$1 = state_12729;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12729__$1,(2),c);
>>>>>>> d879f16fd52606b0486a7a7de9f31f5cebd48c3e
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
<<<<<<< HEAD
var state_machine__6773__auto____0 = (function (){var statearr_11479 = [null,null,null,null,null,null,null,null,null];(statearr_11479[(0)] = state_machine__6773__auto__);
(statearr_11479[(1)] = (1));
return statearr_11479;
});
var state_machine__6773__auto____1 = (function (state_11469){while(true){
var ret_value__6774__auto__ = (function (){try{while(true){
var result__6775__auto__ = switch__6772__auto__.call(null,state_11469);if(cljs.core.keyword_identical_QMARK_.call(null,result__6775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
=======
var state_machine__6773__auto____0 = (function (){var statearr_12739 = [null,null,null,null,null,null,null,null,null];(statearr_12739[(0)] = state_machine__6773__auto__);
(statearr_12739[(1)] = (1));
return statearr_12739;
});
var state_machine__6773__auto____1 = (function (state_12729){while(true){
var ret_value__6774__auto__ = (function (){try{while(true){
var result__6775__auto__ = switch__6772__auto__.call(null,state_12729);if(cljs.core.keyword_identical_QMARK_.call(null,result__6775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
>>>>>>> d879f16fd52606b0486a7a7de9f31f5cebd48c3e
{{
continue;
}
} else
{return result__6775__auto__;
}
break;
}
<<<<<<< HEAD
}catch (e11480){if((e11480 instanceof Object))
{var ex__6776__auto__ = e11480;var statearr_11481_11485 = state_11469;(statearr_11481_11485[(5)] = ex__6776__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11469);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11480;
=======
}catch (e12740){if((e12740 instanceof Object))
{var ex__6776__auto__ = e12740;var statearr_12741_12745 = state_12729;(statearr_12741_12745[(5)] = ex__6776__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12729);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12740;
>>>>>>> d879f16fd52606b0486a7a7de9f31f5cebd48c3e

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6774__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
<<<<<<< HEAD
var G__11486 = state_11469;
state_11469 = G__11486;
=======
var G__12746 = state_12729;
state_12729 = G__12746;
>>>>>>> d879f16fd52606b0486a7a7de9f31f5cebd48c3e
continue;
}
} else
{return ret_value__6774__auto__;
}
break;
}
});
<<<<<<< HEAD
state_machine__6773__auto__ = function(state_11469){
=======
state_machine__6773__auto__ = function(state_12729){
>>>>>>> d879f16fd52606b0486a7a7de9f31f5cebd48c3e
switch(arguments.length){
case 0:
return state_machine__6773__auto____0.call(this);
case 1:
<<<<<<< HEAD
return state_machine__6773__auto____1.call(this,state_11469);
=======
return state_machine__6773__auto____1.call(this,state_12729);
>>>>>>> d879f16fd52606b0486a7a7de9f31f5cebd48c3e
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6773__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6773__auto____0;
state_machine__6773__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6773__auto____1;
return state_machine__6773__auto__;
})()
;})(switch__6772__auto__,c__6787__auto__,r,c,___$1))
<<<<<<< HEAD
})();var state__6789__auto__ = (function (){var statearr_11482 = f__6788__auto__.call(null);(statearr_11482[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6787__auto__);
return statearr_11482;
=======
})();var state__6789__auto__ = (function (){var statearr_12742 = f__6788__auto__.call(null);(statearr_12742[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6787__auto__);
return statearr_12742;
>>>>>>> d879f16fd52606b0486a7a7de9f31f5cebd48c3e
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6789__auto__);
});})(c__6787__auto__,r,c,___$1))
);
return c__6787__auto__;
});
<<<<<<< HEAD
f4f.t11453.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11455){var self__ = this;
var _11455__$1 = this;return self__.meta11454;
});
f4f.t11453.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11455,meta11454__$1){var self__ = this;
var _11455__$1 = this;return (new f4f.t11453(self__.owner,self__.app,self__.pitches_view,meta11454__$1));
});
f4f.__GT_t11453 = (function __GT_t11453(owner__$1,app__$1,pitches_view__$1,meta11454){return (new f4f.t11453(owner__$1,app__$1,pitches_view__$1,meta11454));
});
}
return (new f4f.t11453(owner,app,pitches_view,null));
});
f4f.event_view = (function event_view(app,owner){if(typeof f4f.t11492 !== 'undefined')
=======
f4f.t12713.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12715){var self__ = this;
var _12715__$1 = this;return self__.meta12714;
});
f4f.t12713.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12715,meta12714__$1){var self__ = this;
var _12715__$1 = this;return (new f4f.t12713(self__.owner,self__.app,self__.pitches_view,meta12714__$1));
});
f4f.__GT_t12713 = (function __GT_t12713(owner__$1,app__$1,pitches_view__$1,meta12714){return (new f4f.t12713(owner__$1,app__$1,pitches_view__$1,meta12714));
});
}
return (new f4f.t12713(owner,app,pitches_view,null));
});
f4f.event_view = (function event_view(app,owner){if(typeof f4f.t12752 !== 'undefined')
>>>>>>> d879f16fd52606b0486a7a7de9f31f5cebd48c3e
{} else
{
/**
* @constructor
*/
<<<<<<< HEAD
f4f.t11492 = (function (owner,app,event_view,meta11493){
this.owner = owner;
this.app = app;
this.event_view = event_view;
this.meta11493 = meta11493;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
f4f.t11492.cljs$lang$type = true;
f4f.t11492.cljs$lang$ctorStr = "f4f/t11492";
f4f.t11492.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"f4f/t11492");
});
f4f.t11492.prototype.om$core$IRender$ = true;
f4f.t11492.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "container"},React.DOM.div({"className": "site-wrapper-inner"},React.DOM.div({"className": "row"},React.DOM.div({"className": "event"},React.DOM.h1(null,React.DOM.span({"className": "orange-text"},"#freo4freedom")),React.DOM.p({"className": "lead"},"an event by ",React.DOM.a({"href": "https://www.facebook.com/RRANFremantle", "target": "_blank"},"Fremantle Refugee Rights Action Network"),React.DOM.br(null),"part of the ",React.DOM.a({"href": "https://www.facebook.com/fremantlefestival", "target": "_blank"},"Fremantle Festival")),React.DOM.h1({"className": "lead", "style": {"fontSize": "200%"}},"Sunday, November 2",React.DOM.br(null),"North Fremantle Bowling Club",React.DOM.br(null),"40 Stirling Highway, North Fremantle",React.DOM.br(null),React.DOM.span({"className": "orange-text"},"afternoon free \u2022 evening entry by donation")),React.DOM.div({"style": {"align": "center"}},React.DOM.dl({"className": "dl-horizontal"},React.DOM.dt(null,"2PM"),React.DOM.dd(null,"food, workshops, collaboration, lawn bowls, music"),React.DOM.dt(null,"6:30PM"),React.DOM.dd(null,"music, comedy performances and speakers"))),React.DOM.p(null,React.DOM.h4({"className": "headline"},"Join us for an afternoon of social education and collaboration, leading into an evening of insightful comedy and inspiring music as we come together to build a creative local movement for social and political change.")),React.DOM.p(null,React.DOM.h4({"className": "headline"},"The #freo4freedom event is dedicated to promoting the cause of refugee rights in Australia. We're working towards the end of mandatory detention and offshore processing of asylum seekers.")),React.DOM.div({"className": "row"},React.DOM.div({"className": "col-lg-6"},React.DOM.h2({"className": "red-text"},"#freo4freedom \u00BB afternoon"),React.DOM.h4(null,"Pro-refugee workshops, meetings and activities conducted in a positive, family friendly environment. See below for what's in store!")),React.DOM.div({"className": "col-lg-6"},React.DOM.h2({"className": "red-text"},"#freo4freedom \u00BB evening"),React.DOM.h4(null,"Performances from Fremantle and Perth musicians in support of refugee rights, along with pro-refugee speakers and stand-up comedy."))),React.DOM.div({"className": "row"},React.DOM.div({"className": "col-lg-12"},React.DOM.h4(null,React.DOM.span({"className": "orange-text"},"no crime to seek asylum"),React.DOM.span({"className": "pull-right"},"Email ",React.DOM.a({"href": "mailto:freo@rran.org"},"Freo RRAN ",React.DOM.span({"className": "glyphicon glyphicon-envelope"}))," \u2022 Join ",React.DOM.a({"href": "https://www.facebook.com/events/944366122246547/"},"#freo4freedom on Facebook ",React.DOM.img({"style": {"height": "20px", "verticalAlign": "baseline"}, "src": "/img/fblogo.png"}))))))))));
});
f4f.t11492.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11494){var self__ = this;
var _11494__$1 = this;return self__.meta11493;
});
f4f.t11492.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11494,meta11493__$1){var self__ = this;
var _11494__$1 = this;return (new f4f.t11492(self__.owner,self__.app,self__.event_view,meta11493__$1));
});
f4f.__GT_t11492 = (function __GT_t11492(owner__$1,app__$1,event_view__$1,meta11493){return (new f4f.t11492(owner__$1,app__$1,event_view__$1,meta11493));
});
}
return (new f4f.t11492(owner,app,event_view,null));
=======
f4f.t12752 = (function (owner,app,event_view,meta12753){
this.owner = owner;
this.app = app;
this.event_view = event_view;
this.meta12753 = meta12753;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
f4f.t12752.cljs$lang$type = true;
f4f.t12752.cljs$lang$ctorStr = "f4f/t12752";
f4f.t12752.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"f4f/t12752");
});
f4f.t12752.prototype.om$core$IRender$ = true;
f4f.t12752.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "container"},React.DOM.div({"className": "site-wrapper-inner"},React.DOM.div({"className": "row"},React.DOM.div({"className": "event"},React.DOM.h1(null,React.DOM.span({"className": "orange-text"},"#freo4freedom")),React.DOM.p({"className": "lead"},"an event by ",React.DOM.a({"href": "https://www.facebook.com/RRANFremantle", "target": "_blank"},"Fremantle Refugee Rights Action Network"),React.DOM.br(null),"part of the ",React.DOM.a({"href": "https://www.facebook.com/fremantlefestival", "target": "_blank"},"Fremantle Festival")),React.DOM.h1({"className": "lead", "style": {"fontSize": "200%"}},"Sunday, November 2",React.DOM.br(null),"North Fremantle Bowling Club",React.DOM.br(null),"40 Stirling Highway, North Fremantle",React.DOM.br(null),React.DOM.span({"className": "orange-text"},"afternoon free \u2022 evening entry by donation")),React.DOM.div({"style": {"align": "center"}},React.DOM.dl({"className": "dl-horizontal"},React.DOM.dt(null,"2PM"),React.DOM.dd(null,"food, workshops, collaboration, lawn bowls, music"),React.DOM.dt(null,"6:30PM"),React.DOM.dd(null,"music, comedy performances and speakers"))),React.DOM.p(null,React.DOM.h4({"className": "headline"},"Join us for an afternoon of social education and collaboration, leading into an evening of insightful comedy and inspiring music as we come together to build a creative local movement for social and political change.")),React.DOM.p(null,React.DOM.h4({"className": "headline"},"The #freo4freedom event is dedicated to promoting the cause of refugee rights in Australia. We're working towards the end of mandatory detention and offshore processing of asylum seekers.")),React.DOM.div({"className": "row"},React.DOM.div({"className": "col-lg-6"},React.DOM.h2({"className": "red-text"},"#freo4freedom \u00BB afternoon"),React.DOM.h4(null,"Pro-refugee workshops, meetings and activities conducted in a positive, family friendly environment. See below for what's in store!")),React.DOM.div({"className": "col-lg-6"},React.DOM.h2({"className": "red-text"},"#freo4freedom \u00BB evening"),React.DOM.h4(null,"Performances from Fremantle and Perth musicians in support of refugee rights, along with pro-refugee speakers and stand-up comedy."))),React.DOM.div({"className": "row"},React.DOM.div({"className": "col-lg-12"},React.DOM.h4(null,React.DOM.span({"className": "orange-text"},"no crime to seek asylum"),React.DOM.span({"className": "pull-right"},"Email ",React.DOM.a({"href": "mailto:freo@rran.org"},"Freo RRAN ",React.DOM.span({"className": "glyphicon glyphicon-envelope"}))," \u2022 Join ",React.DOM.a({"href": "https://www.facebook.com/events/944366122246547/"},"#freo4freedom on Facebook ",React.DOM.img({"style": {"height": "20px", "verticalAlign": "baseline"}, "src": "/img/fblogo.png"}))))))))));
});
f4f.t12752.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12754){var self__ = this;
var _12754__$1 = this;return self__.meta12753;
});
f4f.t12752.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12754,meta12753__$1){var self__ = this;
var _12754__$1 = this;return (new f4f.t12752(self__.owner,self__.app,self__.event_view,meta12753__$1));
});
f4f.__GT_t12752 = (function __GT_t12752(owner__$1,app__$1,event_view__$1,meta12753){return (new f4f.t12752(owner__$1,app__$1,event_view__$1,meta12753));
});
}
return (new f4f.t12752(owner,app,event_view,null));
>>>>>>> d879f16fd52606b0486a7a7de9f31f5cebd48c3e
});
f4f.get_value = (function get_value(id){return document.getElementById(id).value;
});
f4f.submit_pitch = (function submit_pitch(_,___$1,___$2,___$3){var r = pani.cljs.core.root.call(null,f4f.firebase_app_url);var p = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"heading","heading",-1312171873),f4f.get_value.call(null,"pitch-heading"),new cljs.core.Keyword(null,"description","description",-1428560544),f4f.get_value.call(null,"pitch-description"),new cljs.core.Keyword(null,"email","email",1415816706),f4f.get_value.call(null,"pitch-email"),new cljs.core.Keyword(null,"groupname","groupname",-493355733),f4f.get_value.call(null,"pitch-groupname"),new cljs.core.Keyword(null,"approved","approved",-803187124),true,new cljs.core.Keyword(null,"likes","likes",792554542),(0),new cljs.core.Keyword(null,"uuid","uuid",-2145095719),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_uuid.core.make_random.call(null)))], null);var new_pitches = cljs.core.conj.call(null,new cljs.core.Keyword(null,"pitches","pitches",-2052174929).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,f4f.app_state)),p);cljs.core.println.call(null,new_pitches);
pani.cljs.core.set_BANG_.call(null,r,new cljs.core.Keyword(null,"pitches","pitches",-2052174929),new_pitches);
return cljs.core.swap_BANG_.call(null,f4f.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"pitching","pitching",-720286578),false);
});
<<<<<<< HEAD
f4f.pitch_form = (function pitch_form(app,owner){if(typeof f4f.t11506 !== 'undefined')
=======
f4f.pitch_form = (function pitch_form(app,owner){if(typeof f4f.t12766 !== 'undefined')
>>>>>>> d879f16fd52606b0486a7a7de9f31f5cebd48c3e
{} else
{
/**
* @constructor
*/
<<<<<<< HEAD
f4f.t11506 = (function (owner,app,pitch_form,meta11507){
this.owner = owner;
this.app = app;
this.pitch_form = pitch_form;
this.meta11507 = meta11507;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
f4f.t11506.cljs$lang$type = true;
f4f.t11506.cljs$lang$ctorStr = "f4f/t11506";
f4f.t11506.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"f4f/t11506");
});
f4f.t11506.prototype.om$core$IRender$ = true;
f4f.t11506.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "site-wrapper-inner"},React.DOM.div({"className": "cover-container"},React.DOM.div({"className": "inner cover"},React.DOM.h1(null,React.DOM.span({"className": "orange-text"},"#freo4freedom")),React.DOM.form(null,React.DOM.div({"className": "form-group"},React.DOM.label({"htmlFor": "pitch-heading"},React.DOM.h3({"className": "orange-text"},"Give your idea a name!")),sablono.interpreter.input.call(null,{"className": "form-control", "id": "pitch-heading", "type": "text", "placeholder": "My plan to support refugee rights"}),React.DOM.label({"htmlFor": "pitch-groupname"},React.DOM.h3({"className": "orange-text"},"Who are you?")),sablono.interpreter.input.call(null,{"className": "form-control", "id": "pitch-groupname", "type": "text", "placeholder": "My name or my group's name"}),React.DOM.label({"htmlFor": "pitch-email"},React.DOM.h3({"className": "orange-text"},"What's your email address?")),sablono.interpreter.input.call(null,{"className": "form-control", "id": "pitch-email", "type": "text", "placeholder": "Email (required \u2014 won't be published)"}),React.DOM.label({"htmlFor": "pitch-description"},React.DOM.h3({"className": "orange-text"},"Describe your project")),sablono.interpreter.textarea.call(null,{"className": "form-control", "id": "pitch-description", "rows": (15), "type": "text", "placeholder": "Who, where, what, when and how?"})),React.DOM.button({"className": "btn btn-primary", "type": "submit", "onClick": f4f.submit_pitch},React.DOM.h3(null,"Tell us about it \u00BB"))))));
});
f4f.t11506.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11508){var self__ = this;
var _11508__$1 = this;return self__.meta11507;
});
f4f.t11506.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11508,meta11507__$1){var self__ = this;
var _11508__$1 = this;return (new f4f.t11506(self__.owner,self__.app,self__.pitch_form,meta11507__$1));
});
f4f.__GT_t11506 = (function __GT_t11506(owner__$1,app__$1,pitch_form__$1,meta11507){return (new f4f.t11506(owner__$1,app__$1,pitch_form__$1,meta11507));
});
}
return (new f4f.t11506(owner,app,pitch_form,null));
});
f4f.focus_view = (function focus_view(app,owner){if(typeof f4f.t11518 !== 'undefined')
=======
f4f.t12766 = (function (owner,app,pitch_form,meta12767){
this.owner = owner;
this.app = app;
this.pitch_form = pitch_form;
this.meta12767 = meta12767;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
f4f.t12766.cljs$lang$type = true;
f4f.t12766.cljs$lang$ctorStr = "f4f/t12766";
f4f.t12766.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"f4f/t12766");
});
f4f.t12766.prototype.om$core$IRender$ = true;
f4f.t12766.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "site-wrapper-inner"},React.DOM.div({"className": "cover-container"},React.DOM.div({"className": "inner cover"},React.DOM.h1(null,React.DOM.span({"className": "orange-text"},"#freo4freedom")),React.DOM.form(null,React.DOM.div({"className": "form-group"},React.DOM.label({"htmlFor": "pitch-heading"},React.DOM.h3({"className": "orange-text"},"Give your idea a name!")),sablono.interpreter.input.call(null,{"className": "form-control", "id": "pitch-heading", "type": "text", "placeholder": "My plan to support refugee rights"}),React.DOM.label({"htmlFor": "pitch-groupname"},React.DOM.h3({"className": "orange-text"},"Who are you?")),sablono.interpreter.input.call(null,{"className": "form-control", "id": "pitch-groupname", "type": "text", "placeholder": "My name or my group's name"}),React.DOM.label({"htmlFor": "pitch-email"},React.DOM.h3({"className": "orange-text"},"What's your email address?")),sablono.interpreter.input.call(null,{"className": "form-control", "id": "pitch-email", "type": "text", "placeholder": "Email (required \u2014 won't be published)"}),React.DOM.label({"htmlFor": "pitch-description"},React.DOM.h3({"className": "orange-text"},"Describe your project")),sablono.interpreter.textarea.call(null,{"className": "form-control", "id": "pitch-description", "rows": (15), "type": "text", "placeholder": "Who, where, what, when and how?"})),React.DOM.button({"className": "btn btn-primary", "type": "submit", "onClick": f4f.submit_pitch},React.DOM.h3(null,"Tell us about it \u00BB"))))));
});
f4f.t12766.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12768){var self__ = this;
var _12768__$1 = this;return self__.meta12767;
});
f4f.t12766.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12768,meta12767__$1){var self__ = this;
var _12768__$1 = this;return (new f4f.t12766(self__.owner,self__.app,self__.pitch_form,meta12767__$1));
});
f4f.__GT_t12766 = (function __GT_t12766(owner__$1,app__$1,pitch_form__$1,meta12767){return (new f4f.t12766(owner__$1,app__$1,pitch_form__$1,meta12767));
});
}
return (new f4f.t12766(owner,app,pitch_form,null));
});
f4f.focus_view = (function focus_view(app,owner){if(typeof f4f.t12778 !== 'undefined')
>>>>>>> d879f16fd52606b0486a7a7de9f31f5cebd48c3e
{} else
{
/**
* @constructor
*/
<<<<<<< HEAD
f4f.t11518 = (function (owner,app,focus_view,meta11519){
this.owner = owner;
this.app = app;
this.focus_view = focus_view;
this.meta11519 = meta11519;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
f4f.t11518.cljs$lang$type = true;
f4f.t11518.cljs$lang$ctorStr = "f4f/t11518";
f4f.t11518.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"f4f/t11518");
});
f4f.t11518.prototype.om$core$IRender$ = true;
f4f.t11518.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
=======
f4f.t12778 = (function (owner,app,focus_view,meta12779){
this.owner = owner;
this.app = app;
this.focus_view = focus_view;
this.meta12779 = meta12779;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
f4f.t12778.cljs$lang$type = true;
f4f.t12778.cljs$lang$ctorStr = "f4f/t12778";
f4f.t12778.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"f4f/t12778");
});
f4f.t12778.prototype.om$core$IRender$ = true;
f4f.t12778.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
>>>>>>> d879f16fd52606b0486a7a7de9f31f5cebd48c3e
var ___$1 = this;if(cljs.core.truth_(new cljs.core.Keyword(null,"pitching","pitching",-720286578).cljs$core$IFn$_invoke$arity$1(self__.app)))
{return om.core.build.call(null,f4f.pitch_form,self__.app);
} else
{return om.core.build.call(null,f4f.event_view,self__.app);
}
});
<<<<<<< HEAD
f4f.t11518.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11520){var self__ = this;
var _11520__$1 = this;return self__.meta11519;
});
f4f.t11518.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11520,meta11519__$1){var self__ = this;
var _11520__$1 = this;return (new f4f.t11518(self__.owner,self__.app,self__.focus_view,meta11519__$1));
});
f4f.__GT_t11518 = (function __GT_t11518(owner__$1,app__$1,focus_view__$1,meta11519){return (new f4f.t11518(owner__$1,app__$1,focus_view__$1,meta11519));
});
}
return (new f4f.t11518(owner,app,focus_view,null));
=======
f4f.t12778.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12780){var self__ = this;
var _12780__$1 = this;return self__.meta12779;
});
f4f.t12778.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12780,meta12779__$1){var self__ = this;
var _12780__$1 = this;return (new f4f.t12778(self__.owner,self__.app,self__.focus_view,meta12779__$1));
});
f4f.__GT_t12778 = (function __GT_t12778(owner__$1,app__$1,focus_view__$1,meta12779){return (new f4f.t12778(owner__$1,app__$1,focus_view__$1,meta12779));
});
}
return (new f4f.t12778(owner,app,focus_view,null));
>>>>>>> d879f16fd52606b0486a7a7de9f31f5cebd48c3e
});
om.core.root.call(null,f4f.focus_view,f4f.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("focus")], null));
om.core.root.call(null,f4f.afternoon_view,f4f.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("afternoon")], null));
om.core.root.call(null,f4f.evening_view,f4f.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("evening")], null));

//# sourceMappingURL=f4f.js.map