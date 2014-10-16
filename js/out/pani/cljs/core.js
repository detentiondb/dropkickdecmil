// Compiled by ClojureScript 0.0-2371
goog.provide('pani.cljs.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
pani.cljs.core.clj_val = (function clj_val(v){return cljs.core.js__GT_clj.call(null,v.val(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
});
pani.cljs.core.root = (function root(url){return (new Firebase(url));
});
pani.cljs.core.walk_root = (function walk_root(root,korks){var p = ((cljs.core.sequential_QMARK_.call(null,korks))?cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,"/",cljs.core.map.call(null,cljs.core.name,korks))):cljs.core.name.call(null,korks));return root.child(p);
});
pani.cljs.core.name = (function name(r){return r.name();
});
pani.cljs.core.parent = (function parent(r){var p = r.parent();if((cljs.core.js__GT_clj.call(null,p) == null))
{return null;
} else
{return p;
}
});
/**
* Set the value at the given root
*/
pani.cljs.core.fb_call_BANG_ = (function() {
var fb_call_BANG_ = null;
var fb_call_BANG___3 = (function (push_fn,root,val){var as_js = cljs.core.clj__GT_js.call(null,val);return push_fn.call(null,root,as_js);
});
var fb_call_BANG___4 = (function (push_fn,root,korks,val){return fb_call_BANG_.call(null,push_fn,pani.cljs.core.walk_root.call(null,root,korks),val);
});
fb_call_BANG_ = function(push_fn,root,korks,val){
switch(arguments.length){
case 3:
return fb_call_BANG___3.call(this,push_fn,root,korks);
case 4:
return fb_call_BANG___4.call(this,push_fn,root,korks,val);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fb_call_BANG_.cljs$core$IFn$_invoke$arity$3 = fb_call_BANG___3;
fb_call_BANG_.cljs$core$IFn$_invoke$arity$4 = fb_call_BANG___4;
return fb_call_BANG_;
})()
;
/**
* Set the value at the given root
*/
pani.cljs.core.set_BANG_ = (function() {
var set_BANG_ = null;
var set_BANG___2 = (function (root,val){return pani.cljs.core.fb_call_BANG_.call(null,(function (p1__12218_SHARP_,p2__12219_SHARP_){return p1__12218_SHARP_.set(p2__12219_SHARP_);
}),root,val);
});
var set_BANG___3 = (function (root,korks,val){return pani.cljs.core.fb_call_BANG_.call(null,(function (p1__12220_SHARP_,p2__12221_SHARP_){return p1__12220_SHARP_.set(p2__12221_SHARP_);
}),root,korks,val);
});
set_BANG_ = function(root,korks,val){
switch(arguments.length){
case 2:
return set_BANG___2.call(this,root,korks);
case 3:
return set_BANG___3.call(this,root,korks,val);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
set_BANG_.cljs$core$IFn$_invoke$arity$2 = set_BANG___2;
set_BANG_.cljs$core$IFn$_invoke$arity$3 = set_BANG___3;
return set_BANG_;
})()
;
/**
* Set the value at the given root
*/
pani.cljs.core.push_BANG_ = (function() {
var push_BANG_ = null;
var push_BANG___2 = (function (root,val){return pani.cljs.core.fb_call_BANG_.call(null,(function (p1__12222_SHARP_,p2__12223_SHARP_){return p1__12222_SHARP_.push(p2__12223_SHARP_);
}),root,val);
});
var push_BANG___3 = (function (root,korks,val){return pani.cljs.core.fb_call_BANG_.call(null,(function (p1__12224_SHARP_,p2__12225_SHARP_){return p1__12224_SHARP_.push(p2__12225_SHARP_);
}),root,korks,val);
});
push_BANG_ = function(root,korks,val){
switch(arguments.length){
case 2:
return push_BANG___2.call(this,root,korks);
case 3:
return push_BANG___3.call(this,root,korks,val);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
push_BANG_.cljs$core$IFn$_invoke$arity$2 = push_BANG___2;
push_BANG_.cljs$core$IFn$_invoke$arity$3 = push_BANG___3;
return push_BANG_;
})()
;
/**
* Bind to a certain property under the given root
*/
pani.cljs.core.bind = (function() {
var bind = null;
var bind__3 = (function (root,type,korks){var bind_chan = cljs.core.async.chan.call(null);bind.call(null,root,type,korks,((function (bind_chan){
return (function (p1__12226_SHARP_){var c__7086__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__7086__auto__,bind_chan){
return (function (){var f__7087__auto__ = (function (){var switch__7071__auto__ = ((function (c__7086__auto__,bind_chan){
return (function (state_12243){var state_val_12244 = (state_12243[(1)]);if((state_val_12244 === (2)))
{var inst_12241 = (state_12243[(2)]);var state_12243__$1 = state_12243;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12243__$1,inst_12241);
} else
{if((state_val_12244 === (1)))
{var state_12243__$1 = state_12243;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12243__$1,(2),bind_chan,p1__12226_SHARP_);
} else
{return null;
}
}
});})(c__7086__auto__,bind_chan))
;return ((function (switch__7071__auto__,c__7086__auto__,bind_chan){
return (function() {
var state_machine__7072__auto__ = null;
var state_machine__7072__auto____0 = (function (){var statearr_12248 = [null,null,null,null,null,null,null];(statearr_12248[(0)] = state_machine__7072__auto__);
(statearr_12248[(1)] = (1));
return statearr_12248;
});
var state_machine__7072__auto____1 = (function (state_12243){while(true){
var ret_value__7073__auto__ = (function (){try{while(true){
var result__7074__auto__ = switch__7071__auto__.call(null,state_12243);if(cljs.core.keyword_identical_QMARK_.call(null,result__7074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__7074__auto__;
}
break;
}
}catch (e12249){if((e12249 instanceof Object))
{var ex__7075__auto__ = e12249;var statearr_12250_12252 = state_12243;(statearr_12250_12252[(5)] = ex__7075__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12243);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12249;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12253 = state_12243;
state_12243 = G__12253;
continue;
}
} else
{return ret_value__7073__auto__;
}
break;
}
});
state_machine__7072__auto__ = function(state_12243){
switch(arguments.length){
case 0:
return state_machine__7072__auto____0.call(this);
case 1:
return state_machine__7072__auto____1.call(this,state_12243);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7072__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7072__auto____0;
state_machine__7072__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7072__auto____1;
return state_machine__7072__auto__;
})()
;})(switch__7071__auto__,c__7086__auto__,bind_chan))
})();var state__7088__auto__ = (function (){var statearr_12251 = f__7087__auto__.call(null);(statearr_12251[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7086__auto__);
return statearr_12251;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7088__auto__);
});})(c__7086__auto__,bind_chan))
);
return c__7086__auto__;
});})(bind_chan))
);
return bind_chan;
});
var bind__4 = (function (root,type,korks,cb){var c = pani.cljs.core.walk_root.call(null,root,korks);return c.on(cljs.core.name.call(null,type),((function (c){
return (function (p1__12227_SHARP_){var temp__4126__auto__ = pani.cljs.core.clj_val.call(null,p1__12227_SHARP_);if(cljs.core.truth_(temp__4126__auto__))
{var v = temp__4126__auto__;return cb.call(null,v);
} else
{return null;
}
});})(c))
);
});
bind = function(root,type,korks,cb){
switch(arguments.length){
case 3:
return bind__3.call(this,root,type,korks);
case 4:
return bind__4.call(this,root,type,korks,cb);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bind.cljs$core$IFn$_invoke$arity$3 = bind__3;
bind.cljs$core$IFn$_invoke$arity$4 = bind__4;
return bind;
})()
;
/**
* Use the firebase transaction mechanism to update a value atomically
* @param {...*} var_args
*/
pani.cljs.core.transact_BANG_ = (function() { 
var transact_BANG___delegate = function (root,korks,f,args){var c = pani.cljs.core.walk_root.call(null,root,korks);return c.transaction(((function (c){
return (function (p1__12254_SHARP_){return cljs.core.apply.call(null,f,p1__12254_SHARP_,args);
});})(c))
,((function (c){
return (function (){return cljs.core.List.EMPTY;
});})(c))
,false);
};
var transact_BANG_ = function (root,korks,f,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return transact_BANG___delegate.call(this,root,korks,f,args);};
transact_BANG_.cljs$lang$maxFixedArity = 3;
transact_BANG_.cljs$lang$applyTo = (function (arglist__12255){
var root = cljs.core.first(arglist__12255);
arglist__12255 = cljs.core.next(arglist__12255);
var korks = cljs.core.first(arglist__12255);
arglist__12255 = cljs.core.next(arglist__12255);
var f = cljs.core.first(arglist__12255);
var args = cljs.core.rest(arglist__12255);
return transact_BANG___delegate(root,korks,f,args);
});
transact_BANG_.cljs$core$IFn$_invoke$arity$variadic = transact_BANG___delegate;
return transact_BANG_;
})()
;

//# sourceMappingURL=core.js.map