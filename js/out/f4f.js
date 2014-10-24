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
f4f.activity_view = (function activity_view(activity,owner){if(typeof f4f.t10735 !== 'undefined')
{} else
{
/**
* @constructor
*/
f4f.t10735 = (function (owner,activity,activity_view,meta10736){
this.owner = owner;
this.activity = activity;
this.activity_view = activity_view;
this.meta10736 = meta10736;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
f4f.t10735.cljs$lang$type = true;
f4f.t10735.cljs$lang$ctorStr = "f4f/t10735";
f4f.t10735.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"f4f/t10735");
});
f4f.t10735.prototype.om$core$IRender$ = true;
f4f.t10735.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "col-lg-6 artist"},React.DOM.div({"className": "row artist-header", "style": {"backgroundColor": new cljs.core.Keyword(null,"colour","colour",2137094554).cljs$core$IFn$_invoke$arity$1(self__.activity).call(null,(0)), "color": new cljs.core.Keyword(null,"colour","colour",2137094554).cljs$core$IFn$_invoke$arity$1(self__.activity).call(null,(1))}},(function (){var attrs10738 = new cljs.core.Keyword(null,"heading","heading",-1312171873).cljs$core$IFn$_invoke$arity$1(self__.activity);return cljs.core.apply.call(null,React.DOM.h2,((cljs.core.map_QMARK_.call(null,attrs10738))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["item-headline","pull-right"], null)], null),attrs10738)):{"className": "item-headline pull-right"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs10738))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs10738)], null))));
})(),React.DOM.br(null),sablono.interpreter.interpret.call(null,((!((new cljs.core.Keyword(null,"subheading","subheading",-805629940).cljs$core$IFn$_invoke$arity$1(self__.activity) == null)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.item-headline.pull-right","h4.item-headline.pull-right",-1850148695),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"subheading","subheading",-805629940).cljs$core$IFn$_invoke$arity$1(self__.activity)], null)], null):null))),sablono.interpreter.interpret.call(null,((!((new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(self__.activity) == null)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.artist-text.event-text","div.artist-text.event-text",-115586790),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(self__.activity)], null)], null):null)));
});
f4f.t10735.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10737){var self__ = this;
var _10737__$1 = this;return self__.meta10736;
});
f4f.t10735.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10737,meta10736__$1){var self__ = this;
var _10737__$1 = this;return (new f4f.t10735(self__.owner,self__.activity,self__.activity_view,meta10736__$1));
});
f4f.__GT_t10735 = (function __GT_t10735(owner__$1,activity__$1,activity_view__$1,meta10736){return (new f4f.t10735(owner__$1,activity__$1,activity_view__$1,meta10736));
});
}
return (new f4f.t10735(owner,activity,activity_view,null));
});
f4f.vote_button_id = (function vote_button_id(unique_id){return ("vote-button-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(unique_id));
});
f4f.submit_vote = (function submit_vote(unique_id){return (function (){cljs.core.println.call(null,"Voted for pitch ",unique_id);
return document.getElementById(f4f.vote_button_id.call(null,unique_id)).className = "btn btn-primary pull-right";
});
});
f4f.pitch_view = (function pitch_view(pitch,owner){if(typeof f4f.t10752 !== 'undefined')
{} else
{
/**
* @constructor
*/
f4f.t10752 = (function (owner,pitch,pitch_view,meta10753){
this.owner = owner;
this.pitch = pitch;
this.pitch_view = pitch_view;
this.meta10753 = meta10753;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
f4f.t10752.cljs$lang$type = true;
f4f.t10752.cljs$lang$ctorStr = "f4f/t10752";
f4f.t10752.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"f4f/t10752");
});
f4f.t10752.prototype.om$core$IRender$ = true;
f4f.t10752.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "col-lg-6"},React.DOM.div({"className": "inner"},React.DOM.h2({"style": {"display": "inline"}},(function (){var attrs10755 = new cljs.core.Keyword(null,"heading","heading",-1312171873).cljs$core$IFn$_invoke$arity$1(self__.pitch);return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs10755))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["orange-text"], null)], null),attrs10755)):{"className": "orange-text"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs10755))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs10755)], null))));
})()),(function (){var attrs10756 = (function (){var pitch_id = new cljs.core.Keyword(null,"uuid","uuid",-2145095719).cljs$core$IFn$_invoke$arity$1(self__.pitch);return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),("vote-button-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(pitch_id)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),f4f.submit_vote.call(null,pitch_id)], null);
})();return cljs.core.apply.call(null,React.DOM.button,((cljs.core.map_QMARK_.call(null,attrs10756))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["btn","btn-default","pull-right"], null)], null),attrs10756)):{"className": "btn btn-default pull-right"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs10756))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.span({"className": "glyphicon glyphicon-heart-empty"})], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs10756),React.DOM.span({"className": "glyphicon glyphicon-heart-empty"})], null))));
})(),(function (){var attrs10761 = new cljs.core.Keyword(null,"groupname","groupname",-493355733).cljs$core$IFn$_invoke$arity$1(self__.pitch);return cljs.core.apply.call(null,React.DOM.h4,((cljs.core.map_QMARK_.call(null,attrs10761))?sablono.interpreter.attributes.call(null,attrs10761):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs10761))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs10761)], null))));
})(),(function (){var attrs10762 = new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(self__.pitch);return cljs.core.apply.call(null,React.DOM.p,((cljs.core.map_QMARK_.call(null,attrs10762))?sablono.interpreter.attributes.call(null,attrs10762):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs10762))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs10762)], null))));
})()));
});
f4f.t10752.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10754){var self__ = this;
var _10754__$1 = this;return self__.meta10753;
});
f4f.t10752.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10754,meta10753__$1){var self__ = this;
var _10754__$1 = this;return (new f4f.t10752(self__.owner,self__.pitch,self__.pitch_view,meta10753__$1));
});
f4f.__GT_t10752 = (function __GT_t10752(owner__$1,pitch__$1,pitch_view__$1,meta10753){return (new f4f.t10752(owner__$1,pitch__$1,pitch_view__$1,meta10753));
});
}
return (new f4f.t10752(owner,pitch,pitch_view,null));
});
f4f.afternoon_view = (function afternoon_view(app,owner){if(typeof f4f.t10770 !== 'undefined')
{} else
{
/**
* @constructor
*/
f4f.t10770 = (function (owner,app,afternoon_view,meta10771){
this.owner = owner;
this.app = app;
this.afternoon_view = afternoon_view;
this.meta10771 = meta10771;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
f4f.t10770.cljs$lang$type = true;
f4f.t10770.cljs$lang$ctorStr = "f4f/t10770";
f4f.t10770.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"f4f/t10770");
});
f4f.t10770.prototype.om$core$IRender$ = true;
f4f.t10770.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "row event"},React.DOM.div(null,React.DOM.h2(null,"music \u2022 food \u2022 lawn bowls \u2022 workshops",React.DOM.span({"className": "hidden-md hidden-sm hidden-xs pull-right"},"from 2PM"))),sablono.interpreter.interpret.call(null,om.core.build_all.call(null,f4f.activity_view,cljs.core.map.call(null,((function (___$1){
return (function (p1__10763_SHARP_,p2__10764_SHARP_){return cljs.core.assoc.call(null,p1__10763_SHARP_,new cljs.core.Keyword(null,"colour","colour",2137094554),p2__10764_SHARP_);
});})(___$1))
,new cljs.core.Keyword(null,"afternoon","afternoon",1529569827).cljs$core$IFn$_invoke$arity$1(self__.app),cljs.core.cycle.call(null,new cljs.core.Keyword(null,"colours","colours",659341642).cljs$core$IFn$_invoke$arity$1(self__.app))))));
});
f4f.t10770.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10772){var self__ = this;
var _10772__$1 = this;return self__.meta10771;
});
f4f.t10770.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10772,meta10771__$1){var self__ = this;
var _10772__$1 = this;return (new f4f.t10770(self__.owner,self__.app,self__.afternoon_view,meta10771__$1));
});
f4f.__GT_t10770 = (function __GT_t10770(owner__$1,app__$1,afternoon_view__$1,meta10771){return (new f4f.t10770(owner__$1,app__$1,afternoon_view__$1,meta10771));
});
}
return (new f4f.t10770(owner,app,afternoon_view,null));
});
f4f.evening_view = (function evening_view(app,owner){if(typeof f4f.t10782 !== 'undefined')
{} else
{
/**
* @constructor
*/
f4f.t10782 = (function (owner,app,evening_view,meta10783){
this.owner = owner;
this.app = app;
this.evening_view = evening_view;
this.meta10783 = meta10783;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
f4f.t10782.cljs$lang$type = true;
f4f.t10782.cljs$lang$ctorStr = "f4f/t10782";
f4f.t10782.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"f4f/t10782");
});
f4f.t10782.prototype.om$core$IRender$ = true;
f4f.t10782.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "row event"},React.DOM.div(null,React.DOM.h2(null,"hiphop freestyle \u2022 music \u2022 comedy show",React.DOM.span({"className": "hidden-md hidden-sm hidden-xs pull-right"},"from 6:30PM"))),sablono.interpreter.interpret.call(null,om.core.build_all.call(null,f4f.activity_view,cljs.core.map.call(null,((function (___$1){
return (function (p1__10775_SHARP_,p2__10776_SHARP_){return cljs.core.assoc.call(null,p1__10775_SHARP_,new cljs.core.Keyword(null,"colour","colour",2137094554),p2__10776_SHARP_);
});})(___$1))
,new cljs.core.Keyword(null,"evening","evening",1560377406).cljs$core$IFn$_invoke$arity$1(self__.app),cljs.core.cycle.call(null,new cljs.core.Keyword(null,"colours","colours",659341642).cljs$core$IFn$_invoke$arity$1(self__.app))))));
});
f4f.t10782.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10784){var self__ = this;
var _10784__$1 = this;return self__.meta10783;
});
f4f.t10782.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10784,meta10783__$1){var self__ = this;
var _10784__$1 = this;return (new f4f.t10782(self__.owner,self__.app,self__.evening_view,meta10783__$1));
});
f4f.__GT_t10782 = (function __GT_t10782(owner__$1,app__$1,evening_view__$1,meta10783){return (new f4f.t10782(owner__$1,app__$1,evening_view__$1,meta10783));
});
}
return (new f4f.t10782(owner,app,evening_view,null));
});
f4f.pitches_view = (function pitches_view(app,owner){if(typeof f4f.t10818 !== 'undefined')
{} else
{
/**
* @constructor
*/
f4f.t10818 = (function (owner,app,pitches_view,meta10819){
this.owner = owner;
this.app = app;
this.pitches_view = pitches_view;
this.meta10819 = meta10819;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
f4f.t10818.cljs$lang$type = true;
f4f.t10818.cljs$lang$ctorStr = "f4f/t10818";
f4f.t10818.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"f4f/t10818");
});
f4f.t10818.prototype.om$core$IRender$ = true;
f4f.t10818.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.apply.call(null,om.dom.div,null,om.core.build_all.call(null,f4f.pitch_view,new cljs.core.Keyword(null,"pitches","pitches",-2052174929).cljs$core$IFn$_invoke$arity$1(self__.app)));
});
f4f.t10818.prototype.om$core$IWillMount$ = true;
f4f.t10818.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var r = pani.cljs.core.root.call(null,f4f.firebase_app_url);var c = pani.cljs.core.bind.call(null,r,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"pitches","pitches",-2052174929));var c__7086__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__7086__auto__,r,c,___$1){
return (function (){var f__7087__auto__ = (function (){var switch__7071__auto__ = ((function (c__7086__auto__,r,c,___$1){
return (function (state_10834){var state_val_10835 = (state_10834[(1)]);if((state_val_10835 === (5)))
{var inst_10829 = (state_10834[(2)]);var inst_10823 = inst_10829;var state_10834__$1 = (function (){var statearr_10836 = state_10834;(statearr_10836[(7)] = inst_10823);
return statearr_10836;
})();var statearr_10837_10848 = state_10834__$1;(statearr_10837_10848[(2)] = null);
(statearr_10837_10848[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10835 === (4)))
{var inst_10832 = (state_10834[(2)]);var state_10834__$1 = state_10834;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10834__$1,inst_10832);
} else
{if((state_val_10835 === (3)))
{var inst_10823 = (state_10834[(7)]);var inst_10825 = (function (){var m = inst_10823;return ((function (m,inst_10823,state_val_10835,c__7086__auto__,r,c,___$1){
return (function (p1__10787_SHARP_){return new cljs.core.Keyword(null,"approved","approved",-803187124).cljs$core$IFn$_invoke$arity$1(p1__10787_SHARP_);
});
;})(m,inst_10823,state_val_10835,c__7086__auto__,r,c,___$1))
})();var inst_10826 = cljs.core.filter.call(null,inst_10825,inst_10823);var inst_10827 = om.core.update_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"pitches","pitches",-2052174929),inst_10826);var state_10834__$1 = (function (){var statearr_10838 = state_10834;(statearr_10838[(8)] = inst_10827);
return statearr_10838;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10834__$1,(5),c);
} else
{if((state_val_10835 === (2)))
{var inst_10822 = (state_10834[(2)]);var inst_10823 = inst_10822;var state_10834__$1 = (function (){var statearr_10839 = state_10834;(statearr_10839[(7)] = inst_10823);
return statearr_10839;
})();var statearr_10840_10849 = state_10834__$1;(statearr_10840_10849[(2)] = null);
(statearr_10840_10849[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10835 === (1)))
{var state_10834__$1 = state_10834;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10834__$1,(2),c);
} else
{return null;
}
}
}
}
}
});})(c__7086__auto__,r,c,___$1))
;return ((function (switch__7071__auto__,c__7086__auto__,r,c,___$1){
return (function() {
var state_machine__7072__auto__ = null;
var state_machine__7072__auto____0 = (function (){var statearr_10844 = [null,null,null,null,null,null,null,null,null];(statearr_10844[(0)] = state_machine__7072__auto__);
(statearr_10844[(1)] = (1));
return statearr_10844;
});
var state_machine__7072__auto____1 = (function (state_10834){while(true){
var ret_value__7073__auto__ = (function (){try{while(true){
var result__7074__auto__ = switch__7071__auto__.call(null,state_10834);if(cljs.core.keyword_identical_QMARK_.call(null,result__7074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__7074__auto__;
}
break;
}
}catch (e10845){if((e10845 instanceof Object))
{var ex__7075__auto__ = e10845;var statearr_10846_10850 = state_10834;(statearr_10846_10850[(5)] = ex__7075__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10834);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e10845;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10851 = state_10834;
state_10834 = G__10851;
continue;
}
} else
{return ret_value__7073__auto__;
}
break;
}
});
state_machine__7072__auto__ = function(state_10834){
switch(arguments.length){
case 0:
return state_machine__7072__auto____0.call(this);
case 1:
return state_machine__7072__auto____1.call(this,state_10834);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7072__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7072__auto____0;
state_machine__7072__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7072__auto____1;
return state_machine__7072__auto__;
})()
;})(switch__7071__auto__,c__7086__auto__,r,c,___$1))
})();var state__7088__auto__ = (function (){var statearr_10847 = f__7087__auto__.call(null);(statearr_10847[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7086__auto__);
return statearr_10847;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7088__auto__);
});})(c__7086__auto__,r,c,___$1))
);
return c__7086__auto__;
});
f4f.t10818.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10820){var self__ = this;
var _10820__$1 = this;return self__.meta10819;
});
f4f.t10818.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10820,meta10819__$1){var self__ = this;
var _10820__$1 = this;return (new f4f.t10818(self__.owner,self__.app,self__.pitches_view,meta10819__$1));
});
f4f.__GT_t10818 = (function __GT_t10818(owner__$1,app__$1,pitches_view__$1,meta10819){return (new f4f.t10818(owner__$1,app__$1,pitches_view__$1,meta10819));
});
}
return (new f4f.t10818(owner,app,pitches_view,null));
});
f4f.event_view = (function event_view(app,owner){if(typeof f4f.t10857 !== 'undefined')
{} else
{
/**
* @constructor
*/
f4f.t10857 = (function (owner,app,event_view,meta10858){
this.owner = owner;
this.app = app;
this.event_view = event_view;
this.meta10858 = meta10858;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
f4f.t10857.cljs$lang$type = true;
f4f.t10857.cljs$lang$ctorStr = "f4f/t10857";
f4f.t10857.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"f4f/t10857");
});
f4f.t10857.prototype.om$core$IRender$ = true;
f4f.t10857.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "container"},React.DOM.div({"className": "site-wrapper-inner"},React.DOM.div({"className": "row"},React.DOM.div({"className": "event"},React.DOM.h1(null,React.DOM.span({"className": "orange-text"},"#freo4freedom")),React.DOM.p({"className": "lead"},"an event by ",React.DOM.a({"href": "https://www.facebook.com/RRANFremantle", "target": "_blank"},"Fremantle Refugee Rights Action Network"),React.DOM.br(null),"part of the ",React.DOM.a({"href": "https://www.facebook.com/fremantlefestival", "target": "_blank"},"Fremantle Festival")),React.DOM.h1({"className": "lead", "style": {"fontSize": "200%"}},"Sunday, November 2",React.DOM.br(null),"North Fremantle Bowling Club",React.DOM.br(null),"40 Stirling Highway, North Fremantle",React.DOM.br(null),React.DOM.span({"className": "orange-text"},"afternoon free \u2022 evening entry by donation")),React.DOM.div({"style": {"align": "center"}},React.DOM.dl({"className": "dl-horizontal"},React.DOM.dt(null,"2PM"),React.DOM.dd(null,"food, workshops, collaboration, lawn bowls, music"),React.DOM.dt(null,"6:30PM"),React.DOM.dd(null,"music, comedy performances and speakers"))),React.DOM.p(null,React.DOM.h4({"className": "headline"},"Join us for an afternoon of social education and collaboration, leading into an evening of insightful comedy and inspiring music as we come together to build a creative local movement for social and political change.")),React.DOM.p(null,React.DOM.h4({"className": "headline"},"The #freo4freedom event is dedicated to promoting the cause of refugee rights in Australia. We're working towards the end of mandatory detention and offshore processing of asylum seekers.")),React.DOM.div({"className": "row"},React.DOM.div({"className": "col-lg-6"},React.DOM.h2({"className": "red-text"},"#freo4freedom \u00BB afternoon"),React.DOM.h4(null,"Pro-refugee workshops, meetings and activities conducted in a positive, family friendly environment. See below for what's in store!")),React.DOM.div({"className": "col-lg-6"},React.DOM.h2({"className": "red-text"},"#freo4freedom \u00BB evening"),React.DOM.h4(null,"Performances from Fremantle and Perth musicians in support of refugee rights, along with pro-refugee speakers and stand-up comedy."))),React.DOM.div({"className": "row"},React.DOM.div({"className": "col-lg-12"},React.DOM.h4(null,React.DOM.span({"className": "orange-text"},"no crime to seek asylum"),React.DOM.span({"className": "pull-right"},"Email ",React.DOM.a({"href": "mailto:freo@rran.org"},"Freo RRAN ",React.DOM.span({"className": "glyphicon glyphicon-envelope"}))," \u2022 Join ",React.DOM.a({"href": "https://www.facebook.com/events/944366122246547/"},"#freo4freedom on Facebook ",React.DOM.img({"style": {"height": "20px", "verticalAlign": "baseline"}, "src": "/img/fblogo.png"}))))))))));
});
f4f.t10857.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10859){var self__ = this;
var _10859__$1 = this;return self__.meta10858;
});
f4f.t10857.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10859,meta10858__$1){var self__ = this;
var _10859__$1 = this;return (new f4f.t10857(self__.owner,self__.app,self__.event_view,meta10858__$1));
});
f4f.__GT_t10857 = (function __GT_t10857(owner__$1,app__$1,event_view__$1,meta10858){return (new f4f.t10857(owner__$1,app__$1,event_view__$1,meta10858));
});
}
return (new f4f.t10857(owner,app,event_view,null));
});
f4f.get_value = (function get_value(id){return document.getElementById(id).value;
});
f4f.submit_pitch = (function submit_pitch(_,___$1,___$2,___$3){var r = pani.cljs.core.root.call(null,f4f.firebase_app_url);var p = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"heading","heading",-1312171873),f4f.get_value.call(null,"pitch-heading"),new cljs.core.Keyword(null,"description","description",-1428560544),f4f.get_value.call(null,"pitch-description"),new cljs.core.Keyword(null,"email","email",1415816706),f4f.get_value.call(null,"pitch-email"),new cljs.core.Keyword(null,"groupname","groupname",-493355733),f4f.get_value.call(null,"pitch-groupname"),new cljs.core.Keyword(null,"approved","approved",-803187124),true,new cljs.core.Keyword(null,"likes","likes",792554542),(0),new cljs.core.Keyword(null,"uuid","uuid",-2145095719),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_uuid.core.make_random.call(null)))], null);var new_pitches = cljs.core.conj.call(null,new cljs.core.Keyword(null,"pitches","pitches",-2052174929).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,f4f.app_state)),p);cljs.core.println.call(null,new_pitches);
pani.cljs.core.set_BANG_.call(null,r,new cljs.core.Keyword(null,"pitches","pitches",-2052174929),new_pitches);
return cljs.core.swap_BANG_.call(null,f4f.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"pitching","pitching",-720286578),false);
});
f4f.pitch_form = (function pitch_form(app,owner){if(typeof f4f.t10871 !== 'undefined')
{} else
{
/**
* @constructor
*/
f4f.t10871 = (function (owner,app,pitch_form,meta10872){
this.owner = owner;
this.app = app;
this.pitch_form = pitch_form;
this.meta10872 = meta10872;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
f4f.t10871.cljs$lang$type = true;
f4f.t10871.cljs$lang$ctorStr = "f4f/t10871";
f4f.t10871.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"f4f/t10871");
});
f4f.t10871.prototype.om$core$IRender$ = true;
f4f.t10871.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "site-wrapper-inner"},React.DOM.div({"className": "cover-container"},React.DOM.div({"className": "inner cover"},React.DOM.h1(null,React.DOM.span({"className": "orange-text"},"#freo4freedom")),React.DOM.form(null,React.DOM.div({"className": "form-group"},React.DOM.label({"htmlFor": "pitch-heading"},React.DOM.h3({"className": "orange-text"},"Give your idea a name!")),sablono.interpreter.input.call(null,{"className": "form-control", "id": "pitch-heading", "type": "text", "placeholder": "My plan to support refugee rights"}),React.DOM.label({"htmlFor": "pitch-groupname"},React.DOM.h3({"className": "orange-text"},"Who are you?")),sablono.interpreter.input.call(null,{"className": "form-control", "id": "pitch-groupname", "type": "text", "placeholder": "My name or my group's name"}),React.DOM.label({"htmlFor": "pitch-email"},React.DOM.h3({"className": "orange-text"},"What's your email address?")),sablono.interpreter.input.call(null,{"className": "form-control", "id": "pitch-email", "type": "text", "placeholder": "Email (required \u2014 won't be published)"}),React.DOM.label({"htmlFor": "pitch-description"},React.DOM.h3({"className": "orange-text"},"Describe your project")),sablono.interpreter.textarea.call(null,{"className": "form-control", "id": "pitch-description", "rows": (15), "type": "text", "placeholder": "Who, where, what, when and how?"})),React.DOM.button({"className": "btn btn-primary", "type": "submit", "onClick": f4f.submit_pitch},React.DOM.h3(null,"Tell us about it \u00BB"))))));
});
f4f.t10871.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10873){var self__ = this;
var _10873__$1 = this;return self__.meta10872;
});
f4f.t10871.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10873,meta10872__$1){var self__ = this;
var _10873__$1 = this;return (new f4f.t10871(self__.owner,self__.app,self__.pitch_form,meta10872__$1));
});
f4f.__GT_t10871 = (function __GT_t10871(owner__$1,app__$1,pitch_form__$1,meta10872){return (new f4f.t10871(owner__$1,app__$1,pitch_form__$1,meta10872));
});
}
return (new f4f.t10871(owner,app,pitch_form,null));
});
f4f.focus_view = (function focus_view(app,owner){if(typeof f4f.t10883 !== 'undefined')
{} else
{
/**
* @constructor
*/
f4f.t10883 = (function (owner,app,focus_view,meta10884){
this.owner = owner;
this.app = app;
this.focus_view = focus_view;
this.meta10884 = meta10884;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
f4f.t10883.cljs$lang$type = true;
f4f.t10883.cljs$lang$ctorStr = "f4f/t10883";
f4f.t10883.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"f4f/t10883");
});
f4f.t10883.prototype.om$core$IRender$ = true;
f4f.t10883.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(new cljs.core.Keyword(null,"pitching","pitching",-720286578).cljs$core$IFn$_invoke$arity$1(self__.app)))
{return om.core.build.call(null,f4f.pitch_form,self__.app);
} else
{return om.core.build.call(null,f4f.event_view,self__.app);
}
});
f4f.t10883.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10885){var self__ = this;
var _10885__$1 = this;return self__.meta10884;
});
f4f.t10883.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10885,meta10884__$1){var self__ = this;
var _10885__$1 = this;return (new f4f.t10883(self__.owner,self__.app,self__.focus_view,meta10884__$1));
});
f4f.__GT_t10883 = (function __GT_t10883(owner__$1,app__$1,focus_view__$1,meta10884){return (new f4f.t10883(owner__$1,app__$1,focus_view__$1,meta10884));
});
}
return (new f4f.t10883(owner,app,focus_view,null));
});
om.core.root.call(null,f4f.focus_view,f4f.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("focus")], null));
om.core.root.call(null,f4f.afternoon_view,f4f.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("afternoon")], null));
om.core.root.call(null,f4f.evening_view,f4f.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("evening")], null));

//# sourceMappingURL=f4f.js.map