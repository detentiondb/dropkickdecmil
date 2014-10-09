// Compiled by ClojureScript 0.0-2356
goog.provide('f4f.core');
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
f4f.core.firebase_app_url = "https://torid-heat-2247.firebaseio.com";
f4f.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pitching","pitching",-720286578),false,new cljs.core.Keyword(null,"activities","activities",1654844313),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"heading","heading",-1312171873),"Mythbusting circle",new cljs.core.Keyword(null,"description","description",-1428560544),"There are many false perceptions about asylum seekers and refugees in the Australian community. The Mythbusting Circle will be an opportunity for attendees of the event to sit with refugee advocates and refugees in a non-judgmental environment to ask questions about refugees to learn more about the issues they face in country of origin, their refugee journey and detention in Australia.",new cljs.core.Keyword(null,"image-uri","image-uri",-291285743),"/img/drumming.jpg"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"heading","heading",-1312171873),"Tamil cuisine",new cljs.core.Keyword(null,"description","description",-1428560544),"Come and try the mouthwatering tastes of Tamil cooking.",new cljs.core.Keyword(null,"image-uri","image-uri",-291285743),"/img/koththu.jpg"], null)], null),new cljs.core.Keyword(null,"pitches","pitches",-2052174929),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,(function (n){return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"heading","heading",-1312171873),("Pitch #"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)),new cljs.core.Keyword(null,"likes","likes",792554542),(0),new cljs.core.Keyword(null,"email","email",1415816706),"tflynch@gmail.com",new cljs.core.Keyword(null,"groupname","groupname",-493355733),"Test Group",new cljs.core.Keyword(null,"uuid","uuid",-2145095719),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_uuid.core.make_random.call(null))),new cljs.core.Keyword(null,"approved","approved",-803187124),true,new cljs.core.Keyword(null,"description","description",-1428560544),"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."], null);
}),cljs.core.range.call(null,(6))))], null));
f4f.core.init_firebase_BANG_ = (function init_firebase_BANG_(){cljs.core.println.call(null,cljs_uuid.core.make_random.call(null));
var r = pani.cljs.core.root.call(null,f4f.core.firebase_app_url);var app = cljs.core.deref.call(null,f4f.core.app_state);return pani.cljs.core.set_BANG_.call(null,r,new cljs.core.Keyword(null,"pitches","pitches",-2052174929),new cljs.core.Keyword(null,"pitches","pitches",-2052174929).cljs$core$IFn$_invoke$arity$1(app));
});
f4f.core.activity_view = (function activity_view(activity,owner){if(typeof f4f.core.t10726 !== 'undefined')
{} else
{
/**
* @constructor
*/
f4f.core.t10726 = (function (owner,activity,activity_view,meta10727){
this.owner = owner;
this.activity = activity;
this.activity_view = activity_view;
this.meta10727 = meta10727;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
f4f.core.t10726.cljs$lang$type = true;
f4f.core.t10726.cljs$lang$ctorStr = "f4f.core/t10726";
f4f.core.t10726.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"f4f.core/t10726");
});
f4f.core.t10726.prototype.om$core$IRender$ = true;
f4f.core.t10726.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "col-lg-6"},React.DOM.h2(null,(function (){var attrs10729 = new cljs.core.Keyword(null,"heading","heading",-1312171873).cljs$core$IFn$_invoke$arity$1(self__.activity);return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs10729))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["red-text"], null)], null),attrs10729)):{"className": "red-text"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs10729))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs10729)], null))));
})()),React.DOM.div({"className": "pull-right"},React.DOM.img({"className": "activity-thumbnail", "src": new cljs.core.Keyword(null,"image-uri","image-uri",-291285743).cljs$core$IFn$_invoke$arity$1(self__.activity)})),(function (){var attrs10730 = new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(self__.activity);return cljs.core.apply.call(null,React.DOM.p,((cljs.core.map_QMARK_.call(null,attrs10730))?sablono.interpreter.attributes.call(null,attrs10730):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs10730))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs10730)], null))));
})());
});
f4f.core.t10726.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10728){var self__ = this;
var _10728__$1 = this;return self__.meta10727;
});
f4f.core.t10726.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10728,meta10727__$1){var self__ = this;
var _10728__$1 = this;return (new f4f.core.t10726(self__.owner,self__.activity,self__.activity_view,meta10727__$1));
});
f4f.core.__GT_t10726 = (function __GT_t10726(owner__$1,activity__$1,activity_view__$1,meta10727){return (new f4f.core.t10726(owner__$1,activity__$1,activity_view__$1,meta10727));
});
}
return (new f4f.core.t10726(owner,activity,activity_view,null));
});
f4f.core.vote_button_id = (function vote_button_id(unique_id){return ("vote-button-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(unique_id));
});
f4f.core.submit_vote = (function submit_vote(unique_id){return (function (){cljs.core.println.call(null,"Voted for pitch ",unique_id);
return document.getElementById(f4f.core.vote_button_id.call(null,unique_id)).className = "btn btn-primary pull-right";
});
});
f4f.core.pitch_view = (function pitch_view(pitch,owner){if(typeof f4f.core.t10742 !== 'undefined')
{} else
{
/**
* @constructor
*/
f4f.core.t10742 = (function (owner,pitch,pitch_view,meta10743){
this.owner = owner;
this.pitch = pitch;
this.pitch_view = pitch_view;
this.meta10743 = meta10743;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
f4f.core.t10742.cljs$lang$type = true;
f4f.core.t10742.cljs$lang$ctorStr = "f4f.core/t10742";
f4f.core.t10742.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"f4f.core/t10742");
});
f4f.core.t10742.prototype.om$core$IRender$ = true;
f4f.core.t10742.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "col-lg-6"},React.DOM.div({"className": "inner"},React.DOM.h2({"style": {"display": "inline"}},(function (){var attrs10745 = new cljs.core.Keyword(null,"heading","heading",-1312171873).cljs$core$IFn$_invoke$arity$1(self__.pitch);return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs10745))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["orange-text"], null)], null),attrs10745)):{"className": "orange-text"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs10745))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs10745)], null))));
})()),(function (){var attrs10746 = (function (){var pitch_id = new cljs.core.Keyword(null,"uuid","uuid",-2145095719).cljs$core$IFn$_invoke$arity$1(self__.pitch);return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),("vote-button-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(pitch_id)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),f4f.core.submit_vote.call(null,pitch_id)], null);
})();return cljs.core.apply.call(null,React.DOM.button,((cljs.core.map_QMARK_.call(null,attrs10746))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["btn","btn-default","pull-right"], null)], null),attrs10746)):{"className": "btn btn-default pull-right"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs10746))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.span({"className": "glyphicon glyphicon-heart-empty"})], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs10746),React.DOM.span({"className": "glyphicon glyphicon-heart-empty"})], null))));
})(),React.DOM.h4(null,(function (){var attrs10751 = new cljs.core.Keyword(null,"groupname","groupname",-493355733).cljs$core$IFn$_invoke$arity$1(self__.pitch);return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs10751))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["red-text"], null)], null),attrs10751)):{"className": "red-text"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs10751))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs10751)], null))));
})()),(function (){var attrs10752 = new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(self__.pitch);return cljs.core.apply.call(null,React.DOM.p,((cljs.core.map_QMARK_.call(null,attrs10752))?sablono.interpreter.attributes.call(null,attrs10752):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs10752))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs10752)], null))));
})()));
});
f4f.core.t10742.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10744){var self__ = this;
var _10744__$1 = this;return self__.meta10743;
});
f4f.core.t10742.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10744,meta10743__$1){var self__ = this;
var _10744__$1 = this;return (new f4f.core.t10742(self__.owner,self__.pitch,self__.pitch_view,meta10743__$1));
});
f4f.core.__GT_t10742 = (function __GT_t10742(owner__$1,pitch__$1,pitch_view__$1,meta10743){return (new f4f.core.t10742(owner__$1,pitch__$1,pitch_view__$1,meta10743));
});
}
return (new f4f.core.t10742(owner,pitch,pitch_view,null));
});
f4f.core.activities_view = (function activities_view(app,owner){if(typeof f4f.core.t10758 !== 'undefined')
{} else
{
/**
* @constructor
*/
f4f.core.t10758 = (function (owner,app,activities_view,meta10759){
this.owner = owner;
this.app = app;
this.activities_view = activities_view;
this.meta10759 = meta10759;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
f4f.core.t10758.cljs$lang$type = true;
f4f.core.t10758.cljs$lang$ctorStr = "f4f.core/t10758";
f4f.core.t10758.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"f4f.core/t10758");
});
f4f.core.t10758.prototype.om$core$IRender$ = true;
f4f.core.t10758.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "row inner"},React.DOM.h2(null,"#freo4freedom \u00BB On the day"),sablono.interpreter.interpret.call(null,om.core.build_all.call(null,f4f.core.activity_view,new cljs.core.Keyword(null,"activities","activities",1654844313).cljs$core$IFn$_invoke$arity$1(self__.app))));
});
f4f.core.t10758.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10760){var self__ = this;
var _10760__$1 = this;return self__.meta10759;
});
f4f.core.t10758.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10760,meta10759__$1){var self__ = this;
var _10760__$1 = this;return (new f4f.core.t10758(self__.owner,self__.app,self__.activities_view,meta10759__$1));
});
f4f.core.__GT_t10758 = (function __GT_t10758(owner__$1,app__$1,activities_view__$1,meta10759){return (new f4f.core.t10758(owner__$1,app__$1,activities_view__$1,meta10759));
});
}
return (new f4f.core.t10758(owner,app,activities_view,null));
});
f4f.core.pitches_view = (function pitches_view(app,owner){if(typeof f4f.core.t10794 !== 'undefined')
{} else
{
/**
* @constructor
*/
f4f.core.t10794 = (function (owner,app,pitches_view,meta10795){
this.owner = owner;
this.app = app;
this.pitches_view = pitches_view;
this.meta10795 = meta10795;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
f4f.core.t10794.cljs$lang$type = true;
f4f.core.t10794.cljs$lang$ctorStr = "f4f.core/t10794";
f4f.core.t10794.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"f4f.core/t10794");
});
f4f.core.t10794.prototype.om$core$IRender$ = true;
f4f.core.t10794.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.apply.call(null,om.dom.div,null,om.core.build_all.call(null,f4f.core.pitch_view,new cljs.core.Keyword(null,"pitches","pitches",-2052174929).cljs$core$IFn$_invoke$arity$1(self__.app)));
});
f4f.core.t10794.prototype.om$core$IWillMount$ = true;
f4f.core.t10794.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var r = pani.cljs.core.root.call(null,f4f.core.firebase_app_url);var c = pani.cljs.core.bind.call(null,r,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"pitches","pitches",-2052174929));var c__7079__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__7079__auto__,r,c,___$1){
return (function (){var f__7080__auto__ = (function (){var switch__7064__auto__ = ((function (c__7079__auto__,r,c,___$1){
return (function (state_10810){var state_val_10811 = (state_10810[(1)]);if((state_val_10811 === (5)))
{var inst_10805 = (state_10810[(2)]);var inst_10799 = inst_10805;var state_10810__$1 = (function (){var statearr_10812 = state_10810;(statearr_10812[(7)] = inst_10799);
return statearr_10812;
})();var statearr_10813_10824 = state_10810__$1;(statearr_10813_10824[(2)] = null);
(statearr_10813_10824[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10811 === (4)))
{var inst_10808 = (state_10810[(2)]);var state_10810__$1 = state_10810;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10810__$1,inst_10808);
} else
{if((state_val_10811 === (3)))
{var inst_10799 = (state_10810[(7)]);var inst_10801 = (function (){var m = inst_10799;return ((function (m,inst_10799,state_val_10811,c__7079__auto__,r,c,___$1){
return (function (p1__10763_SHARP_){return new cljs.core.Keyword(null,"approved","approved",-803187124).cljs$core$IFn$_invoke$arity$1(p1__10763_SHARP_);
});
;})(m,inst_10799,state_val_10811,c__7079__auto__,r,c,___$1))
})();var inst_10802 = cljs.core.filter.call(null,inst_10801,inst_10799);var inst_10803 = om.core.update_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"pitches","pitches",-2052174929),inst_10802);var state_10810__$1 = (function (){var statearr_10814 = state_10810;(statearr_10814[(8)] = inst_10803);
return statearr_10814;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10810__$1,(5),c);
} else
{if((state_val_10811 === (2)))
{var inst_10798 = (state_10810[(2)]);var inst_10799 = inst_10798;var state_10810__$1 = (function (){var statearr_10815 = state_10810;(statearr_10815[(7)] = inst_10799);
return statearr_10815;
})();var statearr_10816_10825 = state_10810__$1;(statearr_10816_10825[(2)] = null);
(statearr_10816_10825[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10811 === (1)))
{var state_10810__$1 = state_10810;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10810__$1,(2),c);
} else
{return null;
}
}
}
}
}
});})(c__7079__auto__,r,c,___$1))
;return ((function (switch__7064__auto__,c__7079__auto__,r,c,___$1){
return (function() {
var state_machine__7065__auto__ = null;
var state_machine__7065__auto____0 = (function (){var statearr_10820 = [null,null,null,null,null,null,null,null,null];(statearr_10820[(0)] = state_machine__7065__auto__);
(statearr_10820[(1)] = (1));
return statearr_10820;
});
var state_machine__7065__auto____1 = (function (state_10810){while(true){
var ret_value__7066__auto__ = (function (){try{while(true){
var result__7067__auto__ = switch__7064__auto__.call(null,state_10810);if(cljs.core.keyword_identical_QMARK_.call(null,result__7067__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__7067__auto__;
}
break;
}
}catch (e10821){if((e10821 instanceof Object))
{var ex__7068__auto__ = e10821;var statearr_10822_10826 = state_10810;(statearr_10822_10826[(5)] = ex__7068__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10810);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e10821;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7066__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10827 = state_10810;
state_10810 = G__10827;
continue;
}
} else
{return ret_value__7066__auto__;
}
break;
}
});
state_machine__7065__auto__ = function(state_10810){
switch(arguments.length){
case 0:
return state_machine__7065__auto____0.call(this);
case 1:
return state_machine__7065__auto____1.call(this,state_10810);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7065__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7065__auto____0;
state_machine__7065__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7065__auto____1;
return state_machine__7065__auto__;
})()
;})(switch__7064__auto__,c__7079__auto__,r,c,___$1))
})();var state__7081__auto__ = (function (){var statearr_10823 = f__7080__auto__.call(null);(statearr_10823[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7079__auto__);
return statearr_10823;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7081__auto__);
});})(c__7079__auto__,r,c,___$1))
);
return c__7079__auto__;
});
f4f.core.t10794.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10796){var self__ = this;
var _10796__$1 = this;return self__.meta10795;
});
f4f.core.t10794.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10796,meta10795__$1){var self__ = this;
var _10796__$1 = this;return (new f4f.core.t10794(self__.owner,self__.app,self__.pitches_view,meta10795__$1));
});
f4f.core.__GT_t10794 = (function __GT_t10794(owner__$1,app__$1,pitches_view__$1,meta10795){return (new f4f.core.t10794(owner__$1,app__$1,pitches_view__$1,meta10795));
});
}
return (new f4f.core.t10794(owner,app,pitches_view,null));
});
f4f.core.event_view = (function event_view(app,owner){if(typeof f4f.core.t10849 !== 'undefined')
{} else
{
/**
* @constructor
*/
f4f.core.t10849 = (function (owner,app,event_view,meta10850){
this.owner = owner;
this.app = app;
this.event_view = event_view;
this.meta10850 = meta10850;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
f4f.core.t10849.cljs$lang$type = true;
f4f.core.t10849.cljs$lang$ctorStr = "f4f.core/t10849";
f4f.core.t10849.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"f4f.core/t10849");
});
f4f.core.t10849.prototype.om$core$IRender$ = true;
f4f.core.t10849.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "site-wrapper-inner"},React.DOM.div({"className": "cover-container"},React.DOM.div({"className": "inner cover"},React.DOM.h1(null,React.DOM.span({"className": "orange-text"},"#freo4freedom")),React.DOM.h5(null,"a project of ",React.DOM.a({"href": "http://rran.org", "target": "_blank"},"Refugee Rights Action Network")),React.DOM.p({"className": "lead"},"Sunday November 2, North Fremantle Bowling Club."),React.DOM.dl({"className": "dl-horizontal"},React.DOM.dt(null,"2PM"),React.DOM.dd(null,"food, workshops, collaboration, lawn bowls, music"),React.DOM.dt(null,"6:30PM"),React.DOM.dd(null,"music, comedy performances and speakers")),React.DOM.p(null,React.DOM.h4({"className": "headline"},"Join us for an afternoon of social education and collaboration, leading into an evening of insightful comedy and inspiring music as we come together to build a creative local movement for social and political change.")),React.DOM.div({"className": "row"},React.DOM.div({"className": "col-lg-6"},React.DOM.h2({"className": "red-text"},"What can I do?"),React.DOM.p(null,"The #freo4freedom event is dedicated to promoting the cause of refugee rights in Australia. We want ",React.DOM.span({"className": "orange-text"},"you")," to help us make a change.")),React.DOM.div({"className": "col-lg-6"},React.DOM.h2({"className": "red-text"},"Like a project"),React.DOM.p(null,"Which of the project pitches for #freo4freedom do you think can make an impact?"))),React.DOM.div({"className": "row"},React.DOM.div({"className": "col-lg-6"},React.DOM.h2({"className": "red-text"},"What's your idea?"),React.DOM.p(null,"If you have an idea for an initiative, an event, a campaign or a creative work that you think can make a difference, click the red button below.")),React.DOM.div({"className": "col-lg-6"},React.DOM.h2({"className": "red-text"},"Questions?"),React.DOM.p(null,"Any questions, contact us at ",React.DOM.a({"href": "mailto:freo@rran.org"},"freo@rran.org")," today."))),React.DOM.div({"className": "row"},React.DOM.div({"className": "col-lg-6"},React.DOM.p(null,"Funds raised by #freo4freedom will be used to help fund the project pitch with the most support. We're working towards the ",React.DOM.span({"className": "orange-text"},"end of mandatory detention")," and the ",React.DOM.span({"className": "orange-text"},"end of offshore processing")," of asylum seekers.")),React.DOM.div({"className": "col-lg-6"},React.DOM.button({"className": "btn btn-primary", "type": "submit", "style": {"float": "bottom"}, "onClick": ((function (___$1){
return (function (){return om.core.update_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"pitching","pitching",-720286578),true);
});})(___$1))
},React.DOM.h3(null,"I've got an idea \u00BB")))))));
});
f4f.core.t10849.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10851){var self__ = this;
var _10851__$1 = this;return self__.meta10850;
});
f4f.core.t10849.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10851,meta10850__$1){var self__ = this;
var _10851__$1 = this;return (new f4f.core.t10849(self__.owner,self__.app,self__.event_view,meta10850__$1));
});
f4f.core.__GT_t10849 = (function __GT_t10849(owner__$1,app__$1,event_view__$1,meta10850){return (new f4f.core.t10849(owner__$1,app__$1,event_view__$1,meta10850));
});
}
return (new f4f.core.t10849(owner,app,event_view,null));
});
f4f.core.get_value = (function get_value(id){return document.getElementById(id).value;
});
f4f.core.submit_pitch = (function submit_pitch(_,___$1,___$2,___$3){var r = pani.cljs.core.root.call(null,f4f.core.firebase_app_url);var p = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"heading","heading",-1312171873),f4f.core.get_value.call(null,"pitch-heading"),new cljs.core.Keyword(null,"description","description",-1428560544),f4f.core.get_value.call(null,"pitch-description"),new cljs.core.Keyword(null,"email","email",1415816706),f4f.core.get_value.call(null,"pitch-email"),new cljs.core.Keyword(null,"groupname","groupname",-493355733),f4f.core.get_value.call(null,"pitch-groupname"),new cljs.core.Keyword(null,"approved","approved",-803187124),true,new cljs.core.Keyword(null,"likes","likes",792554542),(0),new cljs.core.Keyword(null,"uuid","uuid",-2145095719),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_uuid.core.make_random.call(null)))], null);var new_pitches = cljs.core.conj.call(null,new cljs.core.Keyword(null,"pitches","pitches",-2052174929).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,f4f.core.app_state)),p);cljs.core.println.call(null,new_pitches);
pani.cljs.core.set_BANG_.call(null,r,new cljs.core.Keyword(null,"pitches","pitches",-2052174929),new_pitches);
return cljs.core.swap_BANG_.call(null,f4f.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"pitching","pitching",-720286578),false);
});
f4f.core.pitch_form = (function pitch_form(app,owner){if(typeof f4f.core.t10879 !== 'undefined')
{} else
{
/**
* @constructor
*/
f4f.core.t10879 = (function (owner,app,pitch_form,meta10880){
this.owner = owner;
this.app = app;
this.pitch_form = pitch_form;
this.meta10880 = meta10880;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
f4f.core.t10879.cljs$lang$type = true;
f4f.core.t10879.cljs$lang$ctorStr = "f4f.core/t10879";
f4f.core.t10879.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"f4f.core/t10879");
});
f4f.core.t10879.prototype.om$core$IRender$ = true;
f4f.core.t10879.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "site-wrapper-inner"},React.DOM.div({"className": "cover-container"},React.DOM.div({"className": "inner cover"},React.DOM.h1(null,React.DOM.span({"className": "orange-text"},"#freo4freedom")),React.DOM.form(null,React.DOM.div({"className": "form-group"},React.DOM.label({"htmlFor": "pitch-heading"},React.DOM.h3({"className": "orange-text"},"Give your idea a name!")),sablono.interpreter.input.call(null,{"className": "form-control", "id": "pitch-heading", "type": "text", "placeholder": "My plan to support refugee rights"}),React.DOM.label({"htmlFor": "pitch-groupname"},React.DOM.h3({"className": "orange-text"},"Who are you?")),sablono.interpreter.input.call(null,{"className": "form-control", "id": "pitch-groupname", "type": "text", "placeholder": "My name or my group's name"}),React.DOM.label({"htmlFor": "pitch-email"},React.DOM.h3({"className": "orange-text"},"What's your email address?")),sablono.interpreter.input.call(null,{"className": "form-control", "id": "pitch-email", "type": "text", "placeholder": "Email (required \u2014 won't be published)"}),React.DOM.label({"htmlFor": "pitch-description"},React.DOM.h3({"className": "orange-text"},"Describe your project")),sablono.interpreter.textarea.call(null,{"className": "form-control", "id": "pitch-description", "rows": (15), "type": "text", "placeholder": "Who, where, what, when and how?"})),React.DOM.button({"className": "btn btn-primary", "type": "submit", "onClick": f4f.core.submit_pitch},React.DOM.h3(null,"Tell us about it \u00BB"))))));
});
f4f.core.t10879.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10881){var self__ = this;
var _10881__$1 = this;return self__.meta10880;
});
f4f.core.t10879.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10881,meta10880__$1){var self__ = this;
var _10881__$1 = this;return (new f4f.core.t10879(self__.owner,self__.app,self__.pitch_form,meta10880__$1));
});
f4f.core.__GT_t10879 = (function __GT_t10879(owner__$1,app__$1,pitch_form__$1,meta10880){return (new f4f.core.t10879(owner__$1,app__$1,pitch_form__$1,meta10880));
});
}
return (new f4f.core.t10879(owner,app,pitch_form,null));
});
f4f.core.focus_view = (function focus_view(app,owner){if(typeof f4f.core.t10891 !== 'undefined')
{} else
{
/**
* @constructor
*/
f4f.core.t10891 = (function (owner,app,focus_view,meta10892){
this.owner = owner;
this.app = app;
this.focus_view = focus_view;
this.meta10892 = meta10892;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
f4f.core.t10891.cljs$lang$type = true;
f4f.core.t10891.cljs$lang$ctorStr = "f4f.core/t10891";
f4f.core.t10891.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"f4f.core/t10891");
});
f4f.core.t10891.prototype.om$core$IRender$ = true;
f4f.core.t10891.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(new cljs.core.Keyword(null,"pitching","pitching",-720286578).cljs$core$IFn$_invoke$arity$1(self__.app)))
{return om.core.build.call(null,f4f.core.pitch_form,self__.app);
} else
{return om.core.build.call(null,f4f.core.event_view,self__.app);
}
});
f4f.core.t10891.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10893){var self__ = this;
var _10893__$1 = this;return self__.meta10892;
});
f4f.core.t10891.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10893,meta10892__$1){var self__ = this;
var _10893__$1 = this;return (new f4f.core.t10891(self__.owner,self__.app,self__.focus_view,meta10892__$1));
});
f4f.core.__GT_t10891 = (function __GT_t10891(owner__$1,app__$1,focus_view__$1,meta10892){return (new f4f.core.t10891(owner__$1,app__$1,focus_view__$1,meta10892));
});
}
return (new f4f.core.t10891(owner,app,focus_view,null));
});
om.core.root.call(null,f4f.core.focus_view,f4f.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("focus")], null));
om.core.root.call(null,f4f.core.activities_view,f4f.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("activities")], null));
om.core.root.call(null,f4f.core.pitches_view,f4f.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("pitches")], null));

//# sourceMappingURL=core.js.map