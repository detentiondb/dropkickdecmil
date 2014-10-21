// Compiled by ClojureScript 0.0-2371
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t12263 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12263 = (function (f,fn_handler,meta12264){
this.f = f;
this.fn_handler = fn_handler;
this.meta12264 = meta12264;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12263.cljs$lang$type = true;
cljs.core.async.t12263.cljs$lang$ctorStr = "cljs.core.async/t12263";
cljs.core.async.t12263.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t12263");
});
cljs.core.async.t12263.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12263.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t12263.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t12263.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12265){var self__ = this;
var _12265__$1 = this;return self__.meta12264;
});
cljs.core.async.t12263.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12265,meta12264__$1){var self__ = this;
var _12265__$1 = this;return (new cljs.core.async.t12263(self__.f,self__.fn_handler,meta12264__$1));
});
cljs.core.async.__GT_t12263 = (function __GT_t12263(f__$1,fn_handler__$1,meta12264){return (new cljs.core.async.t12263(f__$1,fn_handler__$1,meta12264));
});
}
return (new cljs.core.async.t12263(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__12267 = buff;if(G__12267)
{var bit__4304__auto__ = null;if(cljs.core.truth_((function (){var or__3640__auto__ = bit__4304__auto__;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return G__12267.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__12267.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__12267);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__12267);
}
});
/**
* Creates a channel with an optional buffer, an optional transducer (like (map f),
* (filter p) etc or a composition thereof), and an optional exception handler.
* If buf-or-n is a number, will create and use a fixed buffer of that size. If a
* transducer is supplied a buffer must be specified. ex-handler must be a
* fn of one argument - if an exception occurs during transformation it will be called
* with the thrown value as an argument, and any non-nil return value will be placed
* in the channel.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){return chan.call(null,buf_or_n,null,null);
});
var chan__2 = (function (buf_or_n,xform){return chan.call(null,buf_or_n,xform,null);
});
var chan__3 = (function (buf_or_n,xform,ex_handler){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);if(cljs.core.truth_(xform))
{if(cljs.core.truth_(buf_or_n__$1))
{} else
{throw (new Error(("Assert failed: buffer must be supplied when transducer is\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null))))));
}
} else
{}
return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});
chan = function(buf_or_n,xform,ex_handler){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
case 2:
return chan__2.call(this,buf_or_n,xform);
case 3:
return chan__3.call(this,buf_or_n,xform,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
chan.cljs$core$IFn$_invoke$arity$2 = chan__2;
chan.cljs$core$IFn$_invoke$arity$3 = chan__3;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){throw (new Error("<! used not in (go ...) block"));
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_12268 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_12268);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_12268,ret){
return (function (){return fn1.call(null,val_12268);
});})(val_12268,ret))
);
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){throw (new Error(">! used not in (go ...) block"));
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);if(cljs.core.truth_(temp__4124__auto__))
{var ret = temp__4124__auto__;return cljs.core.deref.call(null,ret);
} else
{return true;
}
});
var put_BANG___3 = (function (port,val,fn1){return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(temp__4124__auto__))
{var retb = temp__4124__auto__;var ret = cljs.core.deref.call(null,retb);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,ret);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
);
}
return ret;
} else
{return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4510__auto___12269 = n;var x_12270 = (0);while(true){
if((x_12270 < n__4510__auto___12269))
{(a[x_12270] = (0));
{
var G__12271 = (x_12270 + (1));
x_12270 = G__12271;
continue;
}
} else
{}
break;
}
var i = (1);while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__12272 = (i + (1));
i = G__12272;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t12276 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12276 = (function (flag,alt_flag,meta12277){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta12277 = meta12277;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12276.cljs$lang$type = true;
cljs.core.async.t12276.cljs$lang$ctorStr = "cljs.core.async/t12276";
cljs.core.async.t12276.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t12276");
});})(flag))
;
cljs.core.async.t12276.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12276.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t12276.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t12276.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_12278){var self__ = this;
var _12278__$1 = this;return self__.meta12277;
});})(flag))
;
cljs.core.async.t12276.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_12278,meta12277__$1){var self__ = this;
var _12278__$1 = this;return (new cljs.core.async.t12276(self__.flag,self__.alt_flag,meta12277__$1));
});})(flag))
;
cljs.core.async.__GT_t12276 = ((function (flag){
return (function __GT_t12276(flag__$1,alt_flag__$1,meta12277){return (new cljs.core.async.t12276(flag__$1,alt_flag__$1,meta12277));
});})(flag))
;
}
return (new cljs.core.async.t12276(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t12282 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12282 = (function (cb,flag,alt_handler,meta12283){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta12283 = meta12283;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12282.cljs$lang$type = true;
cljs.core.async.t12282.cljs$lang$ctorStr = "cljs.core.async/t12282";
cljs.core.async.t12282.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t12282");
});
cljs.core.async.t12282.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12282.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t12282.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t12282.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12284){var self__ = this;
var _12284__$1 = this;return self__.meta12283;
});
cljs.core.async.t12282.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12284,meta12283__$1){var self__ = this;
var _12284__$1 = this;return (new cljs.core.async.t12282(self__.cb,self__.flag,self__.alt_handler,meta12283__$1));
});
cljs.core.async.__GT_t12282 = (function __GT_t12282(cb__$1,flag__$1,alt_handler__$1,meta12283){return (new cljs.core.async.t12282(cb__$1,flag__$1,alt_handler__$1,meta12283));
});
}
return (new cljs.core.async.t12282(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__12285_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12285_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__12286_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12286_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3640__auto__ = wport;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__12287 = (i + (1));
i = G__12287;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3640__auto__ = ret;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328)))
{var temp__4126__auto__ = (function (){var and__3628__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3628__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3628__auto__;
}
})();if(cljs.core.truth_(temp__4126__auto__))
{var got = temp__4126__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__12288){var map__12290 = p__12288;var map__12290__$1 = ((cljs.core.seq_QMARK_.call(null,map__12290))?cljs.core.apply.call(null,cljs.core.hash_map,map__12290):map__12290);var opts = map__12290__$1;throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__12288 = null;if (arguments.length > 1) {
  p__12288 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__12288);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__12291){
var ports = cljs.core.first(arglist__12291);
var p__12288 = cljs.core.rest(arglist__12291);
return alts_BANG___delegate(ports,p__12288);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__7086__auto___12386 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__7086__auto___12386){
return (function (){var f__7087__auto__ = (function (){var switch__7071__auto__ = ((function (c__7086__auto___12386){
return (function (state_12362){var state_val_12363 = (state_12362[(1)]);if((state_val_12363 === (7)))
{var inst_12358 = (state_12362[(2)]);var state_12362__$1 = state_12362;var statearr_12364_12387 = state_12362__$1;(statearr_12364_12387[(2)] = inst_12358);
(statearr_12364_12387[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12363 === (1)))
{var state_12362__$1 = state_12362;var statearr_12365_12388 = state_12362__$1;(statearr_12365_12388[(2)] = null);
(statearr_12365_12388[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12363 === (4)))
{var inst_12341 = (state_12362[(7)]);var inst_12341__$1 = (state_12362[(2)]);var inst_12342 = (inst_12341__$1 == null);var state_12362__$1 = (function (){var statearr_12366 = state_12362;(statearr_12366[(7)] = inst_12341__$1);
return statearr_12366;
})();if(cljs.core.truth_(inst_12342))
{var statearr_12367_12389 = state_12362__$1;(statearr_12367_12389[(1)] = (5));
} else
{var statearr_12368_12390 = state_12362__$1;(statearr_12368_12390[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12363 === (13)))
{var state_12362__$1 = state_12362;var statearr_12369_12391 = state_12362__$1;(statearr_12369_12391[(2)] = null);
(statearr_12369_12391[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12363 === (6)))
{var inst_12341 = (state_12362[(7)]);var state_12362__$1 = state_12362;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12362__$1,(11),to,inst_12341);
} else
{if((state_val_12363 === (3)))
{var inst_12360 = (state_12362[(2)]);var state_12362__$1 = state_12362;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12362__$1,inst_12360);
} else
{if((state_val_12363 === (12)))
{var state_12362__$1 = state_12362;var statearr_12370_12392 = state_12362__$1;(statearr_12370_12392[(2)] = null);
(statearr_12370_12392[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12363 === (2)))
{var state_12362__$1 = state_12362;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12362__$1,(4),from);
} else
{if((state_val_12363 === (11)))
{var inst_12351 = (state_12362[(2)]);var state_12362__$1 = state_12362;if(cljs.core.truth_(inst_12351))
{var statearr_12371_12393 = state_12362__$1;(statearr_12371_12393[(1)] = (12));
} else
{var statearr_12372_12394 = state_12362__$1;(statearr_12372_12394[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12363 === (9)))
{var state_12362__$1 = state_12362;var statearr_12373_12395 = state_12362__$1;(statearr_12373_12395[(2)] = null);
(statearr_12373_12395[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12363 === (5)))
{var state_12362__$1 = state_12362;if(cljs.core.truth_(close_QMARK_))
{var statearr_12374_12396 = state_12362__$1;(statearr_12374_12396[(1)] = (8));
} else
{var statearr_12375_12397 = state_12362__$1;(statearr_12375_12397[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12363 === (14)))
{var inst_12356 = (state_12362[(2)]);var state_12362__$1 = state_12362;var statearr_12376_12398 = state_12362__$1;(statearr_12376_12398[(2)] = inst_12356);
(statearr_12376_12398[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12363 === (10)))
{var inst_12348 = (state_12362[(2)]);var state_12362__$1 = state_12362;var statearr_12377_12399 = state_12362__$1;(statearr_12377_12399[(2)] = inst_12348);
(statearr_12377_12399[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12363 === (8)))
{var inst_12345 = cljs.core.async.close_BANG_.call(null,to);var state_12362__$1 = state_12362;var statearr_12378_12400 = state_12362__$1;(statearr_12378_12400[(2)] = inst_12345);
(statearr_12378_12400[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7086__auto___12386))
;return ((function (switch__7071__auto__,c__7086__auto___12386){
return (function() {
var state_machine__7072__auto__ = null;
var state_machine__7072__auto____0 = (function (){var statearr_12382 = [null,null,null,null,null,null,null,null];(statearr_12382[(0)] = state_machine__7072__auto__);
(statearr_12382[(1)] = (1));
return statearr_12382;
});
var state_machine__7072__auto____1 = (function (state_12362){while(true){
var ret_value__7073__auto__ = (function (){try{while(true){
var result__7074__auto__ = switch__7071__auto__.call(null,state_12362);if(cljs.core.keyword_identical_QMARK_.call(null,result__7074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__7074__auto__;
}
break;
}
}catch (e12383){if((e12383 instanceof Object))
{var ex__7075__auto__ = e12383;var statearr_12384_12401 = state_12362;(statearr_12384_12401[(5)] = ex__7075__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12362);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12383;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12402 = state_12362;
state_12362 = G__12402;
continue;
}
} else
{return ret_value__7073__auto__;
}
break;
}
});
state_machine__7072__auto__ = function(state_12362){
switch(arguments.length){
case 0:
return state_machine__7072__auto____0.call(this);
case 1:
return state_machine__7072__auto____1.call(this,state_12362);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7072__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7072__auto____0;
state_machine__7072__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7072__auto____1;
return state_machine__7072__auto__;
})()
;})(switch__7071__auto__,c__7086__auto___12386))
})();var state__7088__auto__ = (function (){var statearr_12385 = f__7087__auto__.call(null);(statearr_12385[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7086__auto___12386);
return statearr_12385;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7088__auto__);
});})(c__7086__auto___12386))
);
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
cljs.core.async.pipeline_STAR_ = (function pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){if((n > (0)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null)))))));
}
var jobs = cljs.core.async.chan.call(null,n);var results = cljs.core.async.chan.call(null,n);var process = ((function (jobs,results){
return (function (p__12586){var vec__12587 = p__12586;var v = cljs.core.nth.call(null,vec__12587,(0),null);var p = cljs.core.nth.call(null,vec__12587,(1),null);var job = vec__12587;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);var c__7086__auto___12769 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__7086__auto___12769,res,vec__12587,v,p,job,jobs,results){
return (function (){var f__7087__auto__ = (function (){var switch__7071__auto__ = ((function (c__7086__auto___12769,res,vec__12587,v,p,job,jobs,results){
return (function (state_12592){var state_val_12593 = (state_12592[(1)]);if((state_val_12593 === (2)))
{var inst_12589 = (state_12592[(2)]);var inst_12590 = cljs.core.async.close_BANG_.call(null,res);var state_12592__$1 = (function (){var statearr_12594 = state_12592;(statearr_12594[(7)] = inst_12589);
return statearr_12594;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12592__$1,inst_12590);
} else
{if((state_val_12593 === (1)))
{var state_12592__$1 = state_12592;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12592__$1,(2),res,v);
} else
{return null;
}
}
});})(c__7086__auto___12769,res,vec__12587,v,p,job,jobs,results))
;return ((function (switch__7071__auto__,c__7086__auto___12769,res,vec__12587,v,p,job,jobs,results){
return (function() {
var state_machine__7072__auto__ = null;
var state_machine__7072__auto____0 = (function (){var statearr_12598 = [null,null,null,null,null,null,null,null];(statearr_12598[(0)] = state_machine__7072__auto__);
(statearr_12598[(1)] = (1));
return statearr_12598;
});
var state_machine__7072__auto____1 = (function (state_12592){while(true){
var ret_value__7073__auto__ = (function (){try{while(true){
var result__7074__auto__ = switch__7071__auto__.call(null,state_12592);if(cljs.core.keyword_identical_QMARK_.call(null,result__7074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__7074__auto__;
}
break;
}
}catch (e12599){if((e12599 instanceof Object))
{var ex__7075__auto__ = e12599;var statearr_12600_12770 = state_12592;(statearr_12600_12770[(5)] = ex__7075__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12592);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12599;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12771 = state_12592;
state_12592 = G__12771;
continue;
}
} else
{return ret_value__7073__auto__;
}
break;
}
});
state_machine__7072__auto__ = function(state_12592){
switch(arguments.length){
case 0:
return state_machine__7072__auto____0.call(this);
case 1:
return state_machine__7072__auto____1.call(this,state_12592);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7072__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7072__auto____0;
state_machine__7072__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7072__auto____1;
return state_machine__7072__auto__;
})()
;})(switch__7071__auto__,c__7086__auto___12769,res,vec__12587,v,p,job,jobs,results))
})();var state__7088__auto__ = (function (){var statearr_12601 = f__7087__auto__.call(null);(statearr_12601[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7086__auto___12769);
return statearr_12601;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7088__auto__);
});})(c__7086__auto___12769,res,vec__12587,v,p,job,jobs,results))
);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results))
;var async = ((function (jobs,results,process){
return (function (p__12602){var vec__12603 = p__12602;var v = cljs.core.nth.call(null,vec__12603,(0),null);var p = cljs.core.nth.call(null,vec__12603,(1),null);var job = vec__12603;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1));xf.call(null,v,res);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results,process))
;var n__4510__auto___12772 = n;var __12773 = (0);while(true){
if((__12773 < n__4510__auto___12772))
{var G__12604_12774 = (((type instanceof cljs.core.Keyword))?type.fqn:null);switch (G__12604_12774) {
case "async":
var c__7086__auto___12776 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__12773,c__7086__auto___12776,G__12604_12774,n__4510__auto___12772,jobs,results,process,async){
return (function (){var f__7087__auto__ = (function (){var switch__7071__auto__ = ((function (__12773,c__7086__auto___12776,G__12604_12774,n__4510__auto___12772,jobs,results,process,async){
return (function (state_12617){var state_val_12618 = (state_12617[(1)]);if((state_val_12618 === (7)))
{var inst_12613 = (state_12617[(2)]);var state_12617__$1 = state_12617;var statearr_12619_12777 = state_12617__$1;(statearr_12619_12777[(2)] = inst_12613);
(statearr_12619_12777[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12618 === (6)))
{var state_12617__$1 = state_12617;var statearr_12620_12778 = state_12617__$1;(statearr_12620_12778[(2)] = null);
(statearr_12620_12778[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12618 === (5)))
{var state_12617__$1 = state_12617;var statearr_12621_12779 = state_12617__$1;(statearr_12621_12779[(2)] = null);
(statearr_12621_12779[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12618 === (4)))
{var inst_12607 = (state_12617[(2)]);var inst_12608 = async.call(null,inst_12607);var state_12617__$1 = state_12617;if(cljs.core.truth_(inst_12608))
{var statearr_12622_12780 = state_12617__$1;(statearr_12622_12780[(1)] = (5));
} else
{var statearr_12623_12781 = state_12617__$1;(statearr_12623_12781[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12618 === (3)))
{var inst_12615 = (state_12617[(2)]);var state_12617__$1 = state_12617;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12617__$1,inst_12615);
} else
{if((state_val_12618 === (2)))
{var state_12617__$1 = state_12617;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12617__$1,(4),jobs);
} else
{if((state_val_12618 === (1)))
{var state_12617__$1 = state_12617;var statearr_12624_12782 = state_12617__$1;(statearr_12624_12782[(2)] = null);
(statearr_12624_12782[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
});})(__12773,c__7086__auto___12776,G__12604_12774,n__4510__auto___12772,jobs,results,process,async))
;return ((function (__12773,switch__7071__auto__,c__7086__auto___12776,G__12604_12774,n__4510__auto___12772,jobs,results,process,async){
return (function() {
var state_machine__7072__auto__ = null;
var state_machine__7072__auto____0 = (function (){var statearr_12628 = [null,null,null,null,null,null,null];(statearr_12628[(0)] = state_machine__7072__auto__);
(statearr_12628[(1)] = (1));
return statearr_12628;
});
var state_machine__7072__auto____1 = (function (state_12617){while(true){
var ret_value__7073__auto__ = (function (){try{while(true){
var result__7074__auto__ = switch__7071__auto__.call(null,state_12617);if(cljs.core.keyword_identical_QMARK_.call(null,result__7074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__7074__auto__;
}
break;
}
}catch (e12629){if((e12629 instanceof Object))
{var ex__7075__auto__ = e12629;var statearr_12630_12783 = state_12617;(statearr_12630_12783[(5)] = ex__7075__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12617);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12629;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12784 = state_12617;
state_12617 = G__12784;
continue;
}
} else
{return ret_value__7073__auto__;
}
break;
}
});
state_machine__7072__auto__ = function(state_12617){
switch(arguments.length){
case 0:
return state_machine__7072__auto____0.call(this);
case 1:
return state_machine__7072__auto____1.call(this,state_12617);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7072__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7072__auto____0;
state_machine__7072__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7072__auto____1;
return state_machine__7072__auto__;
})()
;})(__12773,switch__7071__auto__,c__7086__auto___12776,G__12604_12774,n__4510__auto___12772,jobs,results,process,async))
})();var state__7088__auto__ = (function (){var statearr_12631 = f__7087__auto__.call(null);(statearr_12631[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7086__auto___12776);
return statearr_12631;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7088__auto__);
});})(__12773,c__7086__auto___12776,G__12604_12774,n__4510__auto___12772,jobs,results,process,async))
);

break;
case "compute":
var c__7086__auto___12785 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__12773,c__7086__auto___12785,G__12604_12774,n__4510__auto___12772,jobs,results,process,async){
return (function (){var f__7087__auto__ = (function (){var switch__7071__auto__ = ((function (__12773,c__7086__auto___12785,G__12604_12774,n__4510__auto___12772,jobs,results,process,async){
return (function (state_12644){var state_val_12645 = (state_12644[(1)]);if((state_val_12645 === (7)))
{var inst_12640 = (state_12644[(2)]);var state_12644__$1 = state_12644;var statearr_12646_12786 = state_12644__$1;(statearr_12646_12786[(2)] = inst_12640);
(statearr_12646_12786[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12645 === (6)))
{var state_12644__$1 = state_12644;var statearr_12647_12787 = state_12644__$1;(statearr_12647_12787[(2)] = null);
(statearr_12647_12787[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12645 === (5)))
{var state_12644__$1 = state_12644;var statearr_12648_12788 = state_12644__$1;(statearr_12648_12788[(2)] = null);
(statearr_12648_12788[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12645 === (4)))
{var inst_12634 = (state_12644[(2)]);var inst_12635 = process.call(null,inst_12634);var state_12644__$1 = state_12644;if(cljs.core.truth_(inst_12635))
{var statearr_12649_12789 = state_12644__$1;(statearr_12649_12789[(1)] = (5));
} else
{var statearr_12650_12790 = state_12644__$1;(statearr_12650_12790[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12645 === (3)))
{var inst_12642 = (state_12644[(2)]);var state_12644__$1 = state_12644;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12644__$1,inst_12642);
} else
{if((state_val_12645 === (2)))
{var state_12644__$1 = state_12644;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12644__$1,(4),jobs);
} else
{if((state_val_12645 === (1)))
{var state_12644__$1 = state_12644;var statearr_12651_12791 = state_12644__$1;(statearr_12651_12791[(2)] = null);
(statearr_12651_12791[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
});})(__12773,c__7086__auto___12785,G__12604_12774,n__4510__auto___12772,jobs,results,process,async))
;return ((function (__12773,switch__7071__auto__,c__7086__auto___12785,G__12604_12774,n__4510__auto___12772,jobs,results,process,async){
return (function() {
var state_machine__7072__auto__ = null;
var state_machine__7072__auto____0 = (function (){var statearr_12655 = [null,null,null,null,null,null,null];(statearr_12655[(0)] = state_machine__7072__auto__);
(statearr_12655[(1)] = (1));
return statearr_12655;
});
var state_machine__7072__auto____1 = (function (state_12644){while(true){
var ret_value__7073__auto__ = (function (){try{while(true){
var result__7074__auto__ = switch__7071__auto__.call(null,state_12644);if(cljs.core.keyword_identical_QMARK_.call(null,result__7074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__7074__auto__;
}
break;
}
}catch (e12656){if((e12656 instanceof Object))
{var ex__7075__auto__ = e12656;var statearr_12657_12792 = state_12644;(statearr_12657_12792[(5)] = ex__7075__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12644);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12656;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12793 = state_12644;
state_12644 = G__12793;
continue;
}
} else
{return ret_value__7073__auto__;
}
break;
}
});
state_machine__7072__auto__ = function(state_12644){
switch(arguments.length){
case 0:
return state_machine__7072__auto____0.call(this);
case 1:
return state_machine__7072__auto____1.call(this,state_12644);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7072__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7072__auto____0;
state_machine__7072__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7072__auto____1;
return state_machine__7072__auto__;
})()
;})(__12773,switch__7071__auto__,c__7086__auto___12785,G__12604_12774,n__4510__auto___12772,jobs,results,process,async))
})();var state__7088__auto__ = (function (){var statearr_12658 = f__7087__auto__.call(null);(statearr_12658[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7086__auto___12785);
return statearr_12658;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7088__auto__);
});})(__12773,c__7086__auto___12785,G__12604_12774,n__4510__auto___12772,jobs,results,process,async))
);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));

}
{
var G__12794 = (__12773 + (1));
__12773 = G__12794;
continue;
}
} else
{}
break;
}
var c__7086__auto___12795 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__7086__auto___12795,jobs,results,process,async){
return (function (){var f__7087__auto__ = (function (){var switch__7071__auto__ = ((function (c__7086__auto___12795,jobs,results,process,async){
return (function (state_12680){var state_val_12681 = (state_12680[(1)]);if((state_val_12681 === (9)))
{var inst_12673 = (state_12680[(2)]);var state_12680__$1 = (function (){var statearr_12682 = state_12680;(statearr_12682[(7)] = inst_12673);
return statearr_12682;
})();var statearr_12683_12796 = state_12680__$1;(statearr_12683_12796[(2)] = null);
(statearr_12683_12796[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12681 === (8)))
{var inst_12666 = (state_12680[(8)]);var inst_12671 = (state_12680[(2)]);var state_12680__$1 = (function (){var statearr_12684 = state_12680;(statearr_12684[(9)] = inst_12671);
return statearr_12684;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12680__$1,(9),results,inst_12666);
} else
{if((state_val_12681 === (7)))
{var inst_12676 = (state_12680[(2)]);var state_12680__$1 = state_12680;var statearr_12685_12797 = state_12680__$1;(statearr_12685_12797[(2)] = inst_12676);
(statearr_12685_12797[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12681 === (6)))
{var inst_12661 = (state_12680[(10)]);var inst_12666 = (state_12680[(8)]);var inst_12666__$1 = cljs.core.async.chan.call(null,(1));var inst_12667 = cljs.core.PersistentVector.EMPTY_NODE;var inst_12668 = [inst_12661,inst_12666__$1];var inst_12669 = (new cljs.core.PersistentVector(null,2,(5),inst_12667,inst_12668,null));var state_12680__$1 = (function (){var statearr_12686 = state_12680;(statearr_12686[(8)] = inst_12666__$1);
return statearr_12686;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12680__$1,(8),jobs,inst_12669);
} else
{if((state_val_12681 === (5)))
{var inst_12664 = cljs.core.async.close_BANG_.call(null,jobs);var state_12680__$1 = state_12680;var statearr_12687_12798 = state_12680__$1;(statearr_12687_12798[(2)] = inst_12664);
(statearr_12687_12798[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12681 === (4)))
{var inst_12661 = (state_12680[(10)]);var inst_12661__$1 = (state_12680[(2)]);var inst_12662 = (inst_12661__$1 == null);var state_12680__$1 = (function (){var statearr_12688 = state_12680;(statearr_12688[(10)] = inst_12661__$1);
return statearr_12688;
})();if(cljs.core.truth_(inst_12662))
{var statearr_12689_12799 = state_12680__$1;(statearr_12689_12799[(1)] = (5));
} else
{var statearr_12690_12800 = state_12680__$1;(statearr_12690_12800[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12681 === (3)))
{var inst_12678 = (state_12680[(2)]);var state_12680__$1 = state_12680;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12680__$1,inst_12678);
} else
{if((state_val_12681 === (2)))
{var state_12680__$1 = state_12680;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12680__$1,(4),from);
} else
{if((state_val_12681 === (1)))
{var state_12680__$1 = state_12680;var statearr_12691_12801 = state_12680__$1;(statearr_12691_12801[(2)] = null);
(statearr_12691_12801[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
});})(c__7086__auto___12795,jobs,results,process,async))
;return ((function (switch__7071__auto__,c__7086__auto___12795,jobs,results,process,async){
return (function() {
var state_machine__7072__auto__ = null;
var state_machine__7072__auto____0 = (function (){var statearr_12695 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_12695[(0)] = state_machine__7072__auto__);
(statearr_12695[(1)] = (1));
return statearr_12695;
});
var state_machine__7072__auto____1 = (function (state_12680){while(true){
var ret_value__7073__auto__ = (function (){try{while(true){
var result__7074__auto__ = switch__7071__auto__.call(null,state_12680);if(cljs.core.keyword_identical_QMARK_.call(null,result__7074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__7074__auto__;
}
break;
}
}catch (e12696){if((e12696 instanceof Object))
{var ex__7075__auto__ = e12696;var statearr_12697_12802 = state_12680;(statearr_12697_12802[(5)] = ex__7075__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12680);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12696;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12803 = state_12680;
state_12680 = G__12803;
continue;
}
} else
{return ret_value__7073__auto__;
}
break;
}
});
state_machine__7072__auto__ = function(state_12680){
switch(arguments.length){
case 0:
return state_machine__7072__auto____0.call(this);
case 1:
return state_machine__7072__auto____1.call(this,state_12680);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7072__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7072__auto____0;
state_machine__7072__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7072__auto____1;
return state_machine__7072__auto__;
})()
;})(switch__7071__auto__,c__7086__auto___12795,jobs,results,process,async))
})();var state__7088__auto__ = (function (){var statearr_12698 = f__7087__auto__.call(null);(statearr_12698[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7086__auto___12795);
return statearr_12698;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7088__auto__);
});})(c__7086__auto___12795,jobs,results,process,async))
);
var c__7086__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__7086__auto__,jobs,results,process,async){
return (function (){var f__7087__auto__ = (function (){var switch__7071__auto__ = ((function (c__7086__auto__,jobs,results,process,async){
return (function (state_12736){var state_val_12737 = (state_12736[(1)]);if((state_val_12737 === (7)))
{var inst_12732 = (state_12736[(2)]);var state_12736__$1 = state_12736;var statearr_12738_12804 = state_12736__$1;(statearr_12738_12804[(2)] = inst_12732);
(statearr_12738_12804[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12737 === (20)))
{var state_12736__$1 = state_12736;var statearr_12739_12805 = state_12736__$1;(statearr_12739_12805[(2)] = null);
(statearr_12739_12805[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12737 === (1)))
{var state_12736__$1 = state_12736;var statearr_12740_12806 = state_12736__$1;(statearr_12740_12806[(2)] = null);
(statearr_12740_12806[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12737 === (4)))
{var inst_12701 = (state_12736[(7)]);var inst_12701__$1 = (state_12736[(2)]);var inst_12702 = (inst_12701__$1 == null);var state_12736__$1 = (function (){var statearr_12741 = state_12736;(statearr_12741[(7)] = inst_12701__$1);
return statearr_12741;
})();if(cljs.core.truth_(inst_12702))
{var statearr_12742_12807 = state_12736__$1;(statearr_12742_12807[(1)] = (5));
} else
{var statearr_12743_12808 = state_12736__$1;(statearr_12743_12808[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12737 === (15)))
{var inst_12714 = (state_12736[(8)]);var state_12736__$1 = state_12736;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12736__$1,(18),to,inst_12714);
} else
{if((state_val_12737 === (21)))
{var inst_12727 = (state_12736[(2)]);var state_12736__$1 = state_12736;var statearr_12744_12809 = state_12736__$1;(statearr_12744_12809[(2)] = inst_12727);
(statearr_12744_12809[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12737 === (13)))
{var inst_12729 = (state_12736[(2)]);var state_12736__$1 = (function (){var statearr_12745 = state_12736;(statearr_12745[(9)] = inst_12729);
return statearr_12745;
})();var statearr_12746_12810 = state_12736__$1;(statearr_12746_12810[(2)] = null);
(statearr_12746_12810[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12737 === (6)))
{var inst_12701 = (state_12736[(7)]);var state_12736__$1 = state_12736;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12736__$1,(11),inst_12701);
} else
{if((state_val_12737 === (17)))
{var inst_12722 = (state_12736[(2)]);var state_12736__$1 = state_12736;if(cljs.core.truth_(inst_12722))
{var statearr_12747_12811 = state_12736__$1;(statearr_12747_12811[(1)] = (19));
} else
{var statearr_12748_12812 = state_12736__$1;(statearr_12748_12812[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12737 === (3)))
{var inst_12734 = (state_12736[(2)]);var state_12736__$1 = state_12736;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12736__$1,inst_12734);
} else
{if((state_val_12737 === (12)))
{var inst_12711 = (state_12736[(10)]);var state_12736__$1 = state_12736;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12736__$1,(14),inst_12711);
} else
{if((state_val_12737 === (2)))
{var state_12736__$1 = state_12736;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12736__$1,(4),results);
} else
{if((state_val_12737 === (19)))
{var state_12736__$1 = state_12736;var statearr_12749_12813 = state_12736__$1;(statearr_12749_12813[(2)] = null);
(statearr_12749_12813[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12737 === (11)))
{var inst_12711 = (state_12736[(2)]);var state_12736__$1 = (function (){var statearr_12750 = state_12736;(statearr_12750[(10)] = inst_12711);
return statearr_12750;
})();var statearr_12751_12814 = state_12736__$1;(statearr_12751_12814[(2)] = null);
(statearr_12751_12814[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12737 === (9)))
{var state_12736__$1 = state_12736;var statearr_12752_12815 = state_12736__$1;(statearr_12752_12815[(2)] = null);
(statearr_12752_12815[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12737 === (5)))
{var state_12736__$1 = state_12736;if(cljs.core.truth_(close_QMARK_))
{var statearr_12753_12816 = state_12736__$1;(statearr_12753_12816[(1)] = (8));
} else
{var statearr_12754_12817 = state_12736__$1;(statearr_12754_12817[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12737 === (14)))
{var inst_12716 = (state_12736[(11)]);var inst_12714 = (state_12736[(8)]);var inst_12714__$1 = (state_12736[(2)]);var inst_12715 = (inst_12714__$1 == null);var inst_12716__$1 = cljs.core.not.call(null,inst_12715);var state_12736__$1 = (function (){var statearr_12755 = state_12736;(statearr_12755[(11)] = inst_12716__$1);
(statearr_12755[(8)] = inst_12714__$1);
return statearr_12755;
})();if(inst_12716__$1)
{var statearr_12756_12818 = state_12736__$1;(statearr_12756_12818[(1)] = (15));
} else
{var statearr_12757_12819 = state_12736__$1;(statearr_12757_12819[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12737 === (16)))
{var inst_12716 = (state_12736[(11)]);var state_12736__$1 = state_12736;var statearr_12758_12820 = state_12736__$1;(statearr_12758_12820[(2)] = inst_12716);
(statearr_12758_12820[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12737 === (10)))
{var inst_12708 = (state_12736[(2)]);var state_12736__$1 = state_12736;var statearr_12759_12821 = state_12736__$1;(statearr_12759_12821[(2)] = inst_12708);
(statearr_12759_12821[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12737 === (18)))
{var inst_12719 = (state_12736[(2)]);var state_12736__$1 = state_12736;var statearr_12760_12822 = state_12736__$1;(statearr_12760_12822[(2)] = inst_12719);
(statearr_12760_12822[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12737 === (8)))
{var inst_12705 = cljs.core.async.close_BANG_.call(null,to);var state_12736__$1 = state_12736;var statearr_12761_12823 = state_12736__$1;(statearr_12761_12823[(2)] = inst_12705);
(statearr_12761_12823[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7086__auto__,jobs,results,process,async))
;return ((function (switch__7071__auto__,c__7086__auto__,jobs,results,process,async){
return (function() {
var state_machine__7072__auto__ = null;
var state_machine__7072__auto____0 = (function (){var statearr_12765 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12765[(0)] = state_machine__7072__auto__);
(statearr_12765[(1)] = (1));
return statearr_12765;
});
var state_machine__7072__auto____1 = (function (state_12736){while(true){
var ret_value__7073__auto__ = (function (){try{while(true){
var result__7074__auto__ = switch__7071__auto__.call(null,state_12736);if(cljs.core.keyword_identical_QMARK_.call(null,result__7074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__7074__auto__;
}
break;
}
}catch (e12766){if((e12766 instanceof Object))
{var ex__7075__auto__ = e12766;var statearr_12767_12824 = state_12736;(statearr_12767_12824[(5)] = ex__7075__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12736);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12766;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12825 = state_12736;
state_12736 = G__12825;
continue;
}
} else
{return ret_value__7073__auto__;
}
break;
}
});
state_machine__7072__auto__ = function(state_12736){
switch(arguments.length){
case 0:
return state_machine__7072__auto____0.call(this);
case 1:
return state_machine__7072__auto____1.call(this,state_12736);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7072__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7072__auto____0;
state_machine__7072__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7072__auto____1;
return state_machine__7072__auto__;
})()
;})(switch__7071__auto__,c__7086__auto__,jobs,results,process,async))
})();var state__7088__auto__ = (function (){var statearr_12768 = f__7087__auto__.call(null);(statearr_12768[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7086__auto__);
return statearr_12768;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7088__auto__);
});})(c__7086__auto__,jobs,results,process,async))
);
return c__7086__auto__;
});
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the async function af, with parallelism n. af
* must be a function of two arguments, the first an input value and
* the second a channel on which to place the result(s). af must close!
* the channel before returning.  The presumption is that af will
* return immediately, having launched some asynchronous operation
* whose completion/callback will manipulate the result channel. Outputs
* will be returned in order relative to  the inputs. By default, the to
* channel will be closed when the from channel closes, but can be
* determined by the close?  parameter. Will stop consuming the from
* channel if the to channel closes.
*/
cljs.core.async.pipeline_async = (function() {
var pipeline_async = null;
var pipeline_async__4 = (function (n,to,af,from){return pipeline_async.call(null,n,to,af,from,true);
});
var pipeline_async__5 = (function (n,to,af,from,close_QMARK_){return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});
pipeline_async = function(n,to,af,from,close_QMARK_){
switch(arguments.length){
case 4:
return pipeline_async__4.call(this,n,to,af,from);
case 5:
return pipeline_async__5.call(this,n,to,af,from,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline_async.cljs$core$IFn$_invoke$arity$4 = pipeline_async__4;
pipeline_async.cljs$core$IFn$_invoke$arity$5 = pipeline_async__5;
return pipeline_async;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the transducer xf, with parallelism n. Because
* it is parallel, the transducer will be applied independently to each
* element, not across elements, and may produce zero or more outputs
* per input.  Outputs will be returned in order relative to the
* inputs. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes.
* 
* Note this is supplied for API compatibility with the Clojure version.
* Values of N > 1 will not result in actual concurrency in a
* single-threaded runtime.
*/
cljs.core.async.pipeline = (function() {
var pipeline = null;
var pipeline__4 = (function (n,to,xf,from){return pipeline.call(null,n,to,xf,from,true);
});
var pipeline__5 = (function (n,to,xf,from,close_QMARK_){return pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});
var pipeline__6 = (function (n,to,xf,from,close_QMARK_,ex_handler){return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});
pipeline = function(n,to,xf,from,close_QMARK_,ex_handler){
switch(arguments.length){
case 4:
return pipeline__4.call(this,n,to,xf,from);
case 5:
return pipeline__5.call(this,n,to,xf,from,close_QMARK_);
case 6:
return pipeline__6.call(this,n,to,xf,from,close_QMARK_,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline.cljs$core$IFn$_invoke$arity$4 = pipeline__4;
pipeline.cljs$core$IFn$_invoke$arity$5 = pipeline__5;
pipeline.cljs$core$IFn$_invoke$arity$6 = pipeline__6;
return pipeline;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__7086__auto___12926 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__7086__auto___12926,tc,fc){
return (function (){var f__7087__auto__ = (function (){var switch__7071__auto__ = ((function (c__7086__auto___12926,tc,fc){
return (function (state_12901){var state_val_12902 = (state_12901[(1)]);if((state_val_12902 === (7)))
{var inst_12897 = (state_12901[(2)]);var state_12901__$1 = state_12901;var statearr_12903_12927 = state_12901__$1;(statearr_12903_12927[(2)] = inst_12897);
(statearr_12903_12927[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12902 === (1)))
{var state_12901__$1 = state_12901;var statearr_12904_12928 = state_12901__$1;(statearr_12904_12928[(2)] = null);
(statearr_12904_12928[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12902 === (4)))
{var inst_12878 = (state_12901[(7)]);var inst_12878__$1 = (state_12901[(2)]);var inst_12879 = (inst_12878__$1 == null);var state_12901__$1 = (function (){var statearr_12905 = state_12901;(statearr_12905[(7)] = inst_12878__$1);
return statearr_12905;
})();if(cljs.core.truth_(inst_12879))
{var statearr_12906_12929 = state_12901__$1;(statearr_12906_12929[(1)] = (5));
} else
{var statearr_12907_12930 = state_12901__$1;(statearr_12907_12930[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12902 === (13)))
{var state_12901__$1 = state_12901;var statearr_12908_12931 = state_12901__$1;(statearr_12908_12931[(2)] = null);
(statearr_12908_12931[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12902 === (6)))
{var inst_12878 = (state_12901[(7)]);var inst_12884 = p.call(null,inst_12878);var state_12901__$1 = state_12901;if(cljs.core.truth_(inst_12884))
{var statearr_12909_12932 = state_12901__$1;(statearr_12909_12932[(1)] = (9));
} else
{var statearr_12910_12933 = state_12901__$1;(statearr_12910_12933[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12902 === (3)))
{var inst_12899 = (state_12901[(2)]);var state_12901__$1 = state_12901;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12901__$1,inst_12899);
} else
{if((state_val_12902 === (12)))
{var state_12901__$1 = state_12901;var statearr_12911_12934 = state_12901__$1;(statearr_12911_12934[(2)] = null);
(statearr_12911_12934[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12902 === (2)))
{var state_12901__$1 = state_12901;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12901__$1,(4),ch);
} else
{if((state_val_12902 === (11)))
{var inst_12878 = (state_12901[(7)]);var inst_12888 = (state_12901[(2)]);var state_12901__$1 = state_12901;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12901__$1,(8),inst_12888,inst_12878);
} else
{if((state_val_12902 === (9)))
{var state_12901__$1 = state_12901;var statearr_12912_12935 = state_12901__$1;(statearr_12912_12935[(2)] = tc);
(statearr_12912_12935[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12902 === (5)))
{var inst_12881 = cljs.core.async.close_BANG_.call(null,tc);var inst_12882 = cljs.core.async.close_BANG_.call(null,fc);var state_12901__$1 = (function (){var statearr_12913 = state_12901;(statearr_12913[(8)] = inst_12881);
return statearr_12913;
})();var statearr_12914_12936 = state_12901__$1;(statearr_12914_12936[(2)] = inst_12882);
(statearr_12914_12936[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12902 === (14)))
{var inst_12895 = (state_12901[(2)]);var state_12901__$1 = state_12901;var statearr_12915_12937 = state_12901__$1;(statearr_12915_12937[(2)] = inst_12895);
(statearr_12915_12937[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12902 === (10)))
{var state_12901__$1 = state_12901;var statearr_12916_12938 = state_12901__$1;(statearr_12916_12938[(2)] = fc);
(statearr_12916_12938[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12902 === (8)))
{var inst_12890 = (state_12901[(2)]);var state_12901__$1 = state_12901;if(cljs.core.truth_(inst_12890))
{var statearr_12917_12939 = state_12901__$1;(statearr_12917_12939[(1)] = (12));
} else
{var statearr_12918_12940 = state_12901__$1;(statearr_12918_12940[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7086__auto___12926,tc,fc))
;return ((function (switch__7071__auto__,c__7086__auto___12926,tc,fc){
return (function() {
var state_machine__7072__auto__ = null;
var state_machine__7072__auto____0 = (function (){var statearr_12922 = [null,null,null,null,null,null,null,null,null];(statearr_12922[(0)] = state_machine__7072__auto__);
(statearr_12922[(1)] = (1));
return statearr_12922;
});
var state_machine__7072__auto____1 = (function (state_12901){while(true){
var ret_value__7073__auto__ = (function (){try{while(true){
var result__7074__auto__ = switch__7071__auto__.call(null,state_12901);if(cljs.core.keyword_identical_QMARK_.call(null,result__7074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__7074__auto__;
}
break;
}
}catch (e12923){if((e12923 instanceof Object))
{var ex__7075__auto__ = e12923;var statearr_12924_12941 = state_12901;(statearr_12924_12941[(5)] = ex__7075__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12901);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12923;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12942 = state_12901;
state_12901 = G__12942;
continue;
}
} else
{return ret_value__7073__auto__;
}
break;
}
});
state_machine__7072__auto__ = function(state_12901){
switch(arguments.length){
case 0:
return state_machine__7072__auto____0.call(this);
case 1:
return state_machine__7072__auto____1.call(this,state_12901);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7072__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7072__auto____0;
state_machine__7072__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7072__auto____1;
return state_machine__7072__auto__;
})()
;})(switch__7071__auto__,c__7086__auto___12926,tc,fc))
})();var state__7088__auto__ = (function (){var statearr_12925 = f__7087__auto__.call(null);(statearr_12925[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7086__auto___12926);
return statearr_12925;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7088__auto__);
});})(c__7086__auto___12926,tc,fc))
);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__7086__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__7086__auto__){
return (function (){var f__7087__auto__ = (function (){var switch__7071__auto__ = ((function (c__7086__auto__){
return (function (state_12989){var state_val_12990 = (state_12989[(1)]);if((state_val_12990 === (7)))
{var inst_12985 = (state_12989[(2)]);var state_12989__$1 = state_12989;var statearr_12991_13007 = state_12989__$1;(statearr_12991_13007[(2)] = inst_12985);
(statearr_12991_13007[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12990 === (6)))
{var inst_12975 = (state_12989[(7)]);var inst_12978 = (state_12989[(8)]);var inst_12982 = f.call(null,inst_12975,inst_12978);var inst_12975__$1 = inst_12982;var state_12989__$1 = (function (){var statearr_12992 = state_12989;(statearr_12992[(7)] = inst_12975__$1);
return statearr_12992;
})();var statearr_12993_13008 = state_12989__$1;(statearr_12993_13008[(2)] = null);
(statearr_12993_13008[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12990 === (5)))
{var inst_12975 = (state_12989[(7)]);var state_12989__$1 = state_12989;var statearr_12994_13009 = state_12989__$1;(statearr_12994_13009[(2)] = inst_12975);
(statearr_12994_13009[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12990 === (4)))
{var inst_12978 = (state_12989[(8)]);var inst_12978__$1 = (state_12989[(2)]);var inst_12979 = (inst_12978__$1 == null);var state_12989__$1 = (function (){var statearr_12995 = state_12989;(statearr_12995[(8)] = inst_12978__$1);
return statearr_12995;
})();if(cljs.core.truth_(inst_12979))
{var statearr_12996_13010 = state_12989__$1;(statearr_12996_13010[(1)] = (5));
} else
{var statearr_12997_13011 = state_12989__$1;(statearr_12997_13011[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12990 === (3)))
{var inst_12987 = (state_12989[(2)]);var state_12989__$1 = state_12989;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12989__$1,inst_12987);
} else
{if((state_val_12990 === (2)))
{var state_12989__$1 = state_12989;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12989__$1,(4),ch);
} else
{if((state_val_12990 === (1)))
{var inst_12975 = init;var state_12989__$1 = (function (){var statearr_12998 = state_12989;(statearr_12998[(7)] = inst_12975);
return statearr_12998;
})();var statearr_12999_13012 = state_12989__$1;(statearr_12999_13012[(2)] = null);
(statearr_12999_13012[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
});})(c__7086__auto__))
;return ((function (switch__7071__auto__,c__7086__auto__){
return (function() {
var state_machine__7072__auto__ = null;
var state_machine__7072__auto____0 = (function (){var statearr_13003 = [null,null,null,null,null,null,null,null,null];(statearr_13003[(0)] = state_machine__7072__auto__);
(statearr_13003[(1)] = (1));
return statearr_13003;
});
var state_machine__7072__auto____1 = (function (state_12989){while(true){
var ret_value__7073__auto__ = (function (){try{while(true){
var result__7074__auto__ = switch__7071__auto__.call(null,state_12989);if(cljs.core.keyword_identical_QMARK_.call(null,result__7074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__7074__auto__;
}
break;
}
}catch (e13004){if((e13004 instanceof Object))
{var ex__7075__auto__ = e13004;var statearr_13005_13013 = state_12989;(statearr_13005_13013[(5)] = ex__7075__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12989);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13004;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13014 = state_12989;
state_12989 = G__13014;
continue;
}
} else
{return ret_value__7073__auto__;
}
break;
}
});
state_machine__7072__auto__ = function(state_12989){
switch(arguments.length){
case 0:
return state_machine__7072__auto____0.call(this);
case 1:
return state_machine__7072__auto____1.call(this,state_12989);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7072__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7072__auto____0;
state_machine__7072__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7072__auto____1;
return state_machine__7072__auto__;
})()
;})(switch__7071__auto__,c__7086__auto__))
})();var state__7088__auto__ = (function (){var statearr_13006 = f__7087__auto__.call(null);(statearr_13006[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7086__auto__);
return statearr_13006;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7088__auto__);
});})(c__7086__auto__))
);
return c__7086__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__7086__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__7086__auto__){
return (function (){var f__7087__auto__ = (function (){var switch__7071__auto__ = ((function (c__7086__auto__){
return (function (state_13088){var state_val_13089 = (state_13088[(1)]);if((state_val_13089 === (7)))
{var inst_13070 = (state_13088[(2)]);var state_13088__$1 = state_13088;var statearr_13090_13113 = state_13088__$1;(statearr_13090_13113[(2)] = inst_13070);
(statearr_13090_13113[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13089 === (1)))
{var inst_13064 = cljs.core.seq.call(null,coll);var inst_13065 = inst_13064;var state_13088__$1 = (function (){var statearr_13091 = state_13088;(statearr_13091[(7)] = inst_13065);
return statearr_13091;
})();var statearr_13092_13114 = state_13088__$1;(statearr_13092_13114[(2)] = null);
(statearr_13092_13114[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13089 === (4)))
{var inst_13065 = (state_13088[(7)]);var inst_13068 = cljs.core.first.call(null,inst_13065);var state_13088__$1 = state_13088;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13088__$1,(7),ch,inst_13068);
} else
{if((state_val_13089 === (13)))
{var inst_13082 = (state_13088[(2)]);var state_13088__$1 = state_13088;var statearr_13093_13115 = state_13088__$1;(statearr_13093_13115[(2)] = inst_13082);
(statearr_13093_13115[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13089 === (6)))
{var inst_13073 = (state_13088[(2)]);var state_13088__$1 = state_13088;if(cljs.core.truth_(inst_13073))
{var statearr_13094_13116 = state_13088__$1;(statearr_13094_13116[(1)] = (8));
} else
{var statearr_13095_13117 = state_13088__$1;(statearr_13095_13117[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13089 === (3)))
{var inst_13086 = (state_13088[(2)]);var state_13088__$1 = state_13088;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13088__$1,inst_13086);
} else
{if((state_val_13089 === (12)))
{var state_13088__$1 = state_13088;var statearr_13096_13118 = state_13088__$1;(statearr_13096_13118[(2)] = null);
(statearr_13096_13118[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13089 === (2)))
{var inst_13065 = (state_13088[(7)]);var state_13088__$1 = state_13088;if(cljs.core.truth_(inst_13065))
{var statearr_13097_13119 = state_13088__$1;(statearr_13097_13119[(1)] = (4));
} else
{var statearr_13098_13120 = state_13088__$1;(statearr_13098_13120[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13089 === (11)))
{var inst_13079 = cljs.core.async.close_BANG_.call(null,ch);var state_13088__$1 = state_13088;var statearr_13099_13121 = state_13088__$1;(statearr_13099_13121[(2)] = inst_13079);
(statearr_13099_13121[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13089 === (9)))
{var state_13088__$1 = state_13088;if(cljs.core.truth_(close_QMARK_))
{var statearr_13100_13122 = state_13088__$1;(statearr_13100_13122[(1)] = (11));
} else
{var statearr_13101_13123 = state_13088__$1;(statearr_13101_13123[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13089 === (5)))
{var inst_13065 = (state_13088[(7)]);var state_13088__$1 = state_13088;var statearr_13102_13124 = state_13088__$1;(statearr_13102_13124[(2)] = inst_13065);
(statearr_13102_13124[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13089 === (10)))
{var inst_13084 = (state_13088[(2)]);var state_13088__$1 = state_13088;var statearr_13103_13125 = state_13088__$1;(statearr_13103_13125[(2)] = inst_13084);
(statearr_13103_13125[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13089 === (8)))
{var inst_13065 = (state_13088[(7)]);var inst_13075 = cljs.core.next.call(null,inst_13065);var inst_13065__$1 = inst_13075;var state_13088__$1 = (function (){var statearr_13104 = state_13088;(statearr_13104[(7)] = inst_13065__$1);
return statearr_13104;
})();var statearr_13105_13126 = state_13088__$1;(statearr_13105_13126[(2)] = null);
(statearr_13105_13126[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7086__auto__))
;return ((function (switch__7071__auto__,c__7086__auto__){
return (function() {
var state_machine__7072__auto__ = null;
var state_machine__7072__auto____0 = (function (){var statearr_13109 = [null,null,null,null,null,null,null,null];(statearr_13109[(0)] = state_machine__7072__auto__);
(statearr_13109[(1)] = (1));
return statearr_13109;
});
var state_machine__7072__auto____1 = (function (state_13088){while(true){
var ret_value__7073__auto__ = (function (){try{while(true){
var result__7074__auto__ = switch__7071__auto__.call(null,state_13088);if(cljs.core.keyword_identical_QMARK_.call(null,result__7074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__7074__auto__;
}
break;
}
}catch (e13110){if((e13110 instanceof Object))
{var ex__7075__auto__ = e13110;var statearr_13111_13127 = state_13088;(statearr_13111_13127[(5)] = ex__7075__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13088);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13110;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13128 = state_13088;
state_13088 = G__13128;
continue;
}
} else
{return ret_value__7073__auto__;
}
break;
}
});
state_machine__7072__auto__ = function(state_13088){
switch(arguments.length){
case 0:
return state_machine__7072__auto____0.call(this);
case 1:
return state_machine__7072__auto____1.call(this,state_13088);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7072__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7072__auto____0;
state_machine__7072__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7072__auto____1;
return state_machine__7072__auto__;
})()
;})(switch__7071__auto__,c__7086__auto__))
})();var state__7088__auto__ = (function (){var statearr_13112 = f__7087__auto__.call(null);(statearr_13112[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7086__auto__);
return statearr_13112;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7088__auto__);
});})(c__7086__auto__))
);
return c__7086__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj13130 = {};return obj13130;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3628__auto__ = _;if(and__3628__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3628__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4277__auto__ = (((_ == null))?null:_);return (function (){var or__3640__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj13132 = {};return obj13132;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3628__auto__ = m;if(and__3628__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3628__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3628__auto__ = m;if(and__3628__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3628__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3628__auto__ = m;if(and__3628__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3628__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t13354 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13354 = (function (cs,ch,mult,meta13355){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta13355 = meta13355;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13354.cljs$lang$type = true;
cljs.core.async.t13354.cljs$lang$ctorStr = "cljs.core.async/t13354";
cljs.core.async.t13354.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t13354");
});})(cs))
;
cljs.core.async.t13354.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t13354.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t13354.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t13354.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t13354.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13354.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t13354.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_13356){var self__ = this;
var _13356__$1 = this;return self__.meta13355;
});})(cs))
;
cljs.core.async.t13354.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_13356,meta13355__$1){var self__ = this;
var _13356__$1 = this;return (new cljs.core.async.t13354(self__.cs,self__.ch,self__.mult,meta13355__$1));
});})(cs))
;
cljs.core.async.__GT_t13354 = ((function (cs){
return (function __GT_t13354(cs__$1,ch__$1,mult__$1,meta13355){return (new cljs.core.async.t13354(cs__$1,ch__$1,mult__$1,meta13355));
});})(cs))
;
}
return (new cljs.core.async.t13354(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__7086__auto___13575 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__7086__auto___13575,cs,m,dchan,dctr,done){
return (function (){var f__7087__auto__ = (function (){var switch__7071__auto__ = ((function (c__7086__auto___13575,cs,m,dchan,dctr,done){
return (function (state_13487){var state_val_13488 = (state_13487[(1)]);if((state_val_13488 === (7)))
{var inst_13483 = (state_13487[(2)]);var state_13487__$1 = state_13487;var statearr_13489_13576 = state_13487__$1;(statearr_13489_13576[(2)] = inst_13483);
(statearr_13489_13576[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13488 === (20)))
{var inst_13388 = (state_13487[(7)]);var inst_13398 = cljs.core.first.call(null,inst_13388);var inst_13399 = cljs.core.nth.call(null,inst_13398,(0),null);var inst_13400 = cljs.core.nth.call(null,inst_13398,(1),null);var state_13487__$1 = (function (){var statearr_13490 = state_13487;(statearr_13490[(8)] = inst_13399);
return statearr_13490;
})();if(cljs.core.truth_(inst_13400))
{var statearr_13491_13577 = state_13487__$1;(statearr_13491_13577[(1)] = (22));
} else
{var statearr_13492_13578 = state_13487__$1;(statearr_13492_13578[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13488 === (27)))
{var inst_13359 = (state_13487[(9)]);var inst_13428 = (state_13487[(10)]);var inst_13435 = (state_13487[(11)]);var inst_13430 = (state_13487[(12)]);var inst_13435__$1 = cljs.core._nth.call(null,inst_13428,inst_13430);var inst_13436 = cljs.core.async.put_BANG_.call(null,inst_13435__$1,inst_13359,done);var state_13487__$1 = (function (){var statearr_13493 = state_13487;(statearr_13493[(11)] = inst_13435__$1);
return statearr_13493;
})();if(cljs.core.truth_(inst_13436))
{var statearr_13494_13579 = state_13487__$1;(statearr_13494_13579[(1)] = (30));
} else
{var statearr_13495_13580 = state_13487__$1;(statearr_13495_13580[(1)] = (31));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13488 === (1)))
{var state_13487__$1 = state_13487;var statearr_13496_13581 = state_13487__$1;(statearr_13496_13581[(2)] = null);
(statearr_13496_13581[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13488 === (24)))
{var inst_13388 = (state_13487[(7)]);var inst_13405 = (state_13487[(2)]);var inst_13406 = cljs.core.next.call(null,inst_13388);var inst_13368 = inst_13406;var inst_13369 = null;var inst_13370 = (0);var inst_13371 = (0);var state_13487__$1 = (function (){var statearr_13497 = state_13487;(statearr_13497[(13)] = inst_13369);
(statearr_13497[(14)] = inst_13370);
(statearr_13497[(15)] = inst_13368);
(statearr_13497[(16)] = inst_13405);
(statearr_13497[(17)] = inst_13371);
return statearr_13497;
})();var statearr_13498_13582 = state_13487__$1;(statearr_13498_13582[(2)] = null);
(statearr_13498_13582[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13488 === (39)))
{var state_13487__$1 = state_13487;var statearr_13502_13583 = state_13487__$1;(statearr_13502_13583[(2)] = null);
(statearr_13502_13583[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13488 === (4)))
{var inst_13359 = (state_13487[(9)]);var inst_13359__$1 = (state_13487[(2)]);var inst_13360 = (inst_13359__$1 == null);var state_13487__$1 = (function (){var statearr_13503 = state_13487;(statearr_13503[(9)] = inst_13359__$1);
return statearr_13503;
})();if(cljs.core.truth_(inst_13360))
{var statearr_13504_13584 = state_13487__$1;(statearr_13504_13584[(1)] = (5));
} else
{var statearr_13505_13585 = state_13487__$1;(statearr_13505_13585[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13488 === (15)))
{var inst_13369 = (state_13487[(13)]);var inst_13370 = (state_13487[(14)]);var inst_13368 = (state_13487[(15)]);var inst_13371 = (state_13487[(17)]);var inst_13384 = (state_13487[(2)]);var inst_13385 = (inst_13371 + (1));var tmp13499 = inst_13369;var tmp13500 = inst_13370;var tmp13501 = inst_13368;var inst_13368__$1 = tmp13501;var inst_13369__$1 = tmp13499;var inst_13370__$1 = tmp13500;var inst_13371__$1 = inst_13385;var state_13487__$1 = (function (){var statearr_13506 = state_13487;(statearr_13506[(18)] = inst_13384);
(statearr_13506[(13)] = inst_13369__$1);
(statearr_13506[(14)] = inst_13370__$1);
(statearr_13506[(15)] = inst_13368__$1);
(statearr_13506[(17)] = inst_13371__$1);
return statearr_13506;
})();var statearr_13507_13586 = state_13487__$1;(statearr_13507_13586[(2)] = null);
(statearr_13507_13586[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13488 === (21)))
{var inst_13409 = (state_13487[(2)]);var state_13487__$1 = state_13487;var statearr_13511_13587 = state_13487__$1;(statearr_13511_13587[(2)] = inst_13409);
(statearr_13511_13587[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13488 === (31)))
{var inst_13435 = (state_13487[(11)]);var inst_13439 = done.call(null,null);var inst_13440 = cljs.core.async.untap_STAR_.call(null,m,inst_13435);var state_13487__$1 = (function (){var statearr_13512 = state_13487;(statearr_13512[(19)] = inst_13439);
return statearr_13512;
})();var statearr_13513_13588 = state_13487__$1;(statearr_13513_13588[(2)] = inst_13440);
(statearr_13513_13588[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13488 === (32)))
{var inst_13429 = (state_13487[(20)]);var inst_13428 = (state_13487[(10)]);var inst_13427 = (state_13487[(21)]);var inst_13430 = (state_13487[(12)]);var inst_13442 = (state_13487[(2)]);var inst_13443 = (inst_13430 + (1));var tmp13508 = inst_13429;var tmp13509 = inst_13428;var tmp13510 = inst_13427;var inst_13427__$1 = tmp13510;var inst_13428__$1 = tmp13509;var inst_13429__$1 = tmp13508;var inst_13430__$1 = inst_13443;var state_13487__$1 = (function (){var statearr_13514 = state_13487;(statearr_13514[(20)] = inst_13429__$1);
(statearr_13514[(10)] = inst_13428__$1);
(statearr_13514[(21)] = inst_13427__$1);
(statearr_13514[(12)] = inst_13430__$1);
(statearr_13514[(22)] = inst_13442);
return statearr_13514;
})();var statearr_13515_13589 = state_13487__$1;(statearr_13515_13589[(2)] = null);
(statearr_13515_13589[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13488 === (40)))
{var inst_13455 = (state_13487[(23)]);var inst_13459 = done.call(null,null);var inst_13460 = cljs.core.async.untap_STAR_.call(null,m,inst_13455);var state_13487__$1 = (function (){var statearr_13516 = state_13487;(statearr_13516[(24)] = inst_13459);
return statearr_13516;
})();var statearr_13517_13590 = state_13487__$1;(statearr_13517_13590[(2)] = inst_13460);
(statearr_13517_13590[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13488 === (33)))
{var inst_13446 = (state_13487[(25)]);var inst_13448 = cljs.core.chunked_seq_QMARK_.call(null,inst_13446);var state_13487__$1 = state_13487;if(inst_13448)
{var statearr_13518_13591 = state_13487__$1;(statearr_13518_13591[(1)] = (36));
} else
{var statearr_13519_13592 = state_13487__$1;(statearr_13519_13592[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13488 === (13)))
{var inst_13378 = (state_13487[(26)]);var inst_13381 = cljs.core.async.close_BANG_.call(null,inst_13378);var state_13487__$1 = state_13487;var statearr_13520_13593 = state_13487__$1;(statearr_13520_13593[(2)] = inst_13381);
(statearr_13520_13593[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13488 === (22)))
{var inst_13399 = (state_13487[(8)]);var inst_13402 = cljs.core.async.close_BANG_.call(null,inst_13399);var state_13487__$1 = state_13487;var statearr_13521_13594 = state_13487__$1;(statearr_13521_13594[(2)] = inst_13402);
(statearr_13521_13594[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13488 === (36)))
{var inst_13446 = (state_13487[(25)]);var inst_13450 = cljs.core.chunk_first.call(null,inst_13446);var inst_13451 = cljs.core.chunk_rest.call(null,inst_13446);var inst_13452 = cljs.core.count.call(null,inst_13450);var inst_13427 = inst_13451;var inst_13428 = inst_13450;var inst_13429 = inst_13452;var inst_13430 = (0);var state_13487__$1 = (function (){var statearr_13522 = state_13487;(statearr_13522[(20)] = inst_13429);
(statearr_13522[(10)] = inst_13428);
(statearr_13522[(21)] = inst_13427);
(statearr_13522[(12)] = inst_13430);
return statearr_13522;
})();var statearr_13523_13595 = state_13487__$1;(statearr_13523_13595[(2)] = null);
(statearr_13523_13595[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13488 === (41)))
{var inst_13446 = (state_13487[(25)]);var inst_13462 = (state_13487[(2)]);var inst_13463 = cljs.core.next.call(null,inst_13446);var inst_13427 = inst_13463;var inst_13428 = null;var inst_13429 = (0);var inst_13430 = (0);var state_13487__$1 = (function (){var statearr_13524 = state_13487;(statearr_13524[(20)] = inst_13429);
(statearr_13524[(27)] = inst_13462);
(statearr_13524[(10)] = inst_13428);
(statearr_13524[(21)] = inst_13427);
(statearr_13524[(12)] = inst_13430);
return statearr_13524;
})();var statearr_13525_13596 = state_13487__$1;(statearr_13525_13596[(2)] = null);
(statearr_13525_13596[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13488 === (43)))
{var state_13487__$1 = state_13487;var statearr_13526_13597 = state_13487__$1;(statearr_13526_13597[(2)] = null);
(statearr_13526_13597[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13488 === (29)))
{var inst_13471 = (state_13487[(2)]);var state_13487__$1 = state_13487;var statearr_13527_13598 = state_13487__$1;(statearr_13527_13598[(2)] = inst_13471);
(statearr_13527_13598[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13488 === (44)))
{var inst_13480 = (state_13487[(2)]);var state_13487__$1 = (function (){var statearr_13528 = state_13487;(statearr_13528[(28)] = inst_13480);
return statearr_13528;
})();var statearr_13529_13599 = state_13487__$1;(statearr_13529_13599[(2)] = null);
(statearr_13529_13599[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13488 === (6)))
{var inst_13419 = (state_13487[(29)]);var inst_13418 = cljs.core.deref.call(null,cs);var inst_13419__$1 = cljs.core.keys.call(null,inst_13418);var inst_13420 = cljs.core.count.call(null,inst_13419__$1);var inst_13421 = cljs.core.reset_BANG_.call(null,dctr,inst_13420);var inst_13426 = cljs.core.seq.call(null,inst_13419__$1);var inst_13427 = inst_13426;var inst_13428 = null;var inst_13429 = (0);var inst_13430 = (0);var state_13487__$1 = (function (){var statearr_13530 = state_13487;(statearr_13530[(29)] = inst_13419__$1);
(statearr_13530[(20)] = inst_13429);
(statearr_13530[(30)] = inst_13421);
(statearr_13530[(10)] = inst_13428);
(statearr_13530[(21)] = inst_13427);
(statearr_13530[(12)] = inst_13430);
return statearr_13530;
})();var statearr_13531_13600 = state_13487__$1;(statearr_13531_13600[(2)] = null);
(statearr_13531_13600[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13488 === (28)))
{var inst_13427 = (state_13487[(21)]);var inst_13446 = (state_13487[(25)]);var inst_13446__$1 = cljs.core.seq.call(null,inst_13427);var state_13487__$1 = (function (){var statearr_13532 = state_13487;(statearr_13532[(25)] = inst_13446__$1);
return statearr_13532;
})();if(inst_13446__$1)
{var statearr_13533_13601 = state_13487__$1;(statearr_13533_13601[(1)] = (33));
} else
{var statearr_13534_13602 = state_13487__$1;(statearr_13534_13602[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13488 === (25)))
{var inst_13429 = (state_13487[(20)]);var inst_13430 = (state_13487[(12)]);var inst_13432 = (inst_13430 < inst_13429);var inst_13433 = inst_13432;var state_13487__$1 = state_13487;if(cljs.core.truth_(inst_13433))
{var statearr_13535_13603 = state_13487__$1;(statearr_13535_13603[(1)] = (27));
} else
{var statearr_13536_13604 = state_13487__$1;(statearr_13536_13604[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13488 === (34)))
{var state_13487__$1 = state_13487;var statearr_13537_13605 = state_13487__$1;(statearr_13537_13605[(2)] = null);
(statearr_13537_13605[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13488 === (17)))
{var state_13487__$1 = state_13487;var statearr_13538_13606 = state_13487__$1;(statearr_13538_13606[(2)] = null);
(statearr_13538_13606[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13488 === (3)))
{var inst_13485 = (state_13487[(2)]);var state_13487__$1 = state_13487;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13487__$1,inst_13485);
} else
{if((state_val_13488 === (12)))
{var inst_13414 = (state_13487[(2)]);var state_13487__$1 = state_13487;var statearr_13539_13607 = state_13487__$1;(statearr_13539_13607[(2)] = inst_13414);
(statearr_13539_13607[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13488 === (2)))
{var state_13487__$1 = state_13487;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13487__$1,(4),ch);
} else
{if((state_val_13488 === (23)))
{var state_13487__$1 = state_13487;var statearr_13540_13608 = state_13487__$1;(statearr_13540_13608[(2)] = null);
(statearr_13540_13608[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13488 === (35)))
{var inst_13469 = (state_13487[(2)]);var state_13487__$1 = state_13487;var statearr_13541_13609 = state_13487__$1;(statearr_13541_13609[(2)] = inst_13469);
(statearr_13541_13609[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13488 === (19)))
{var inst_13388 = (state_13487[(7)]);var inst_13392 = cljs.core.chunk_first.call(null,inst_13388);var inst_13393 = cljs.core.chunk_rest.call(null,inst_13388);var inst_13394 = cljs.core.count.call(null,inst_13392);var inst_13368 = inst_13393;var inst_13369 = inst_13392;var inst_13370 = inst_13394;var inst_13371 = (0);var state_13487__$1 = (function (){var statearr_13542 = state_13487;(statearr_13542[(13)] = inst_13369);
(statearr_13542[(14)] = inst_13370);
(statearr_13542[(15)] = inst_13368);
(statearr_13542[(17)] = inst_13371);
return statearr_13542;
})();var statearr_13543_13610 = state_13487__$1;(statearr_13543_13610[(2)] = null);
(statearr_13543_13610[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13488 === (11)))
{var inst_13388 = (state_13487[(7)]);var inst_13368 = (state_13487[(15)]);var inst_13388__$1 = cljs.core.seq.call(null,inst_13368);var state_13487__$1 = (function (){var statearr_13544 = state_13487;(statearr_13544[(7)] = inst_13388__$1);
return statearr_13544;
})();if(inst_13388__$1)
{var statearr_13545_13611 = state_13487__$1;(statearr_13545_13611[(1)] = (16));
} else
{var statearr_13546_13612 = state_13487__$1;(statearr_13546_13612[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13488 === (9)))
{var inst_13416 = (state_13487[(2)]);var state_13487__$1 = state_13487;var statearr_13547_13613 = state_13487__$1;(statearr_13547_13613[(2)] = inst_13416);
(statearr_13547_13613[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13488 === (5)))
{var inst_13366 = cljs.core.deref.call(null,cs);var inst_13367 = cljs.core.seq.call(null,inst_13366);var inst_13368 = inst_13367;var inst_13369 = null;var inst_13370 = (0);var inst_13371 = (0);var state_13487__$1 = (function (){var statearr_13548 = state_13487;(statearr_13548[(13)] = inst_13369);
(statearr_13548[(14)] = inst_13370);
(statearr_13548[(15)] = inst_13368);
(statearr_13548[(17)] = inst_13371);
return statearr_13548;
})();var statearr_13549_13614 = state_13487__$1;(statearr_13549_13614[(2)] = null);
(statearr_13549_13614[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13488 === (14)))
{var state_13487__$1 = state_13487;var statearr_13550_13615 = state_13487__$1;(statearr_13550_13615[(2)] = null);
(statearr_13550_13615[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13488 === (45)))
{var inst_13477 = (state_13487[(2)]);var state_13487__$1 = state_13487;var statearr_13551_13616 = state_13487__$1;(statearr_13551_13616[(2)] = inst_13477);
(statearr_13551_13616[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13488 === (26)))
{var inst_13419 = (state_13487[(29)]);var inst_13473 = (state_13487[(2)]);var inst_13474 = cljs.core.seq.call(null,inst_13419);var state_13487__$1 = (function (){var statearr_13552 = state_13487;(statearr_13552[(31)] = inst_13473);
return statearr_13552;
})();if(inst_13474)
{var statearr_13553_13617 = state_13487__$1;(statearr_13553_13617[(1)] = (42));
} else
{var statearr_13554_13618 = state_13487__$1;(statearr_13554_13618[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13488 === (16)))
{var inst_13388 = (state_13487[(7)]);var inst_13390 = cljs.core.chunked_seq_QMARK_.call(null,inst_13388);var state_13487__$1 = state_13487;if(inst_13390)
{var statearr_13555_13619 = state_13487__$1;(statearr_13555_13619[(1)] = (19));
} else
{var statearr_13556_13620 = state_13487__$1;(statearr_13556_13620[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13488 === (38)))
{var inst_13466 = (state_13487[(2)]);var state_13487__$1 = state_13487;var statearr_13557_13621 = state_13487__$1;(statearr_13557_13621[(2)] = inst_13466);
(statearr_13557_13621[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13488 === (30)))
{var state_13487__$1 = state_13487;var statearr_13558_13622 = state_13487__$1;(statearr_13558_13622[(2)] = null);
(statearr_13558_13622[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13488 === (10)))
{var inst_13369 = (state_13487[(13)]);var inst_13371 = (state_13487[(17)]);var inst_13377 = cljs.core._nth.call(null,inst_13369,inst_13371);var inst_13378 = cljs.core.nth.call(null,inst_13377,(0),null);var inst_13379 = cljs.core.nth.call(null,inst_13377,(1),null);var state_13487__$1 = (function (){var statearr_13559 = state_13487;(statearr_13559[(26)] = inst_13378);
return statearr_13559;
})();if(cljs.core.truth_(inst_13379))
{var statearr_13560_13623 = state_13487__$1;(statearr_13560_13623[(1)] = (13));
} else
{var statearr_13561_13624 = state_13487__$1;(statearr_13561_13624[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13488 === (18)))
{var inst_13412 = (state_13487[(2)]);var state_13487__$1 = state_13487;var statearr_13562_13625 = state_13487__$1;(statearr_13562_13625[(2)] = inst_13412);
(statearr_13562_13625[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13488 === (42)))
{var state_13487__$1 = state_13487;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13487__$1,(45),dchan);
} else
{if((state_val_13488 === (37)))
{var inst_13455 = (state_13487[(23)]);var inst_13359 = (state_13487[(9)]);var inst_13446 = (state_13487[(25)]);var inst_13455__$1 = cljs.core.first.call(null,inst_13446);var inst_13456 = cljs.core.async.put_BANG_.call(null,inst_13455__$1,inst_13359,done);var state_13487__$1 = (function (){var statearr_13563 = state_13487;(statearr_13563[(23)] = inst_13455__$1);
return statearr_13563;
})();if(cljs.core.truth_(inst_13456))
{var statearr_13564_13626 = state_13487__$1;(statearr_13564_13626[(1)] = (39));
} else
{var statearr_13565_13627 = state_13487__$1;(statearr_13565_13627[(1)] = (40));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13488 === (8)))
{var inst_13370 = (state_13487[(14)]);var inst_13371 = (state_13487[(17)]);var inst_13373 = (inst_13371 < inst_13370);var inst_13374 = inst_13373;var state_13487__$1 = state_13487;if(cljs.core.truth_(inst_13374))
{var statearr_13566_13628 = state_13487__$1;(statearr_13566_13628[(1)] = (10));
} else
{var statearr_13567_13629 = state_13487__$1;(statearr_13567_13629[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7086__auto___13575,cs,m,dchan,dctr,done))
;return ((function (switch__7071__auto__,c__7086__auto___13575,cs,m,dchan,dctr,done){
return (function() {
var state_machine__7072__auto__ = null;
var state_machine__7072__auto____0 = (function (){var statearr_13571 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13571[(0)] = state_machine__7072__auto__);
(statearr_13571[(1)] = (1));
return statearr_13571;
});
var state_machine__7072__auto____1 = (function (state_13487){while(true){
var ret_value__7073__auto__ = (function (){try{while(true){
var result__7074__auto__ = switch__7071__auto__.call(null,state_13487);if(cljs.core.keyword_identical_QMARK_.call(null,result__7074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__7074__auto__;
}
break;
}
}catch (e13572){if((e13572 instanceof Object))
{var ex__7075__auto__ = e13572;var statearr_13573_13630 = state_13487;(statearr_13573_13630[(5)] = ex__7075__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13487);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13572;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13631 = state_13487;
state_13487 = G__13631;
continue;
}
} else
{return ret_value__7073__auto__;
}
break;
}
});
state_machine__7072__auto__ = function(state_13487){
switch(arguments.length){
case 0:
return state_machine__7072__auto____0.call(this);
case 1:
return state_machine__7072__auto____1.call(this,state_13487);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7072__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7072__auto____0;
state_machine__7072__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7072__auto____1;
return state_machine__7072__auto__;
})()
;})(switch__7071__auto__,c__7086__auto___13575,cs,m,dchan,dctr,done))
})();var state__7088__auto__ = (function (){var statearr_13574 = f__7087__auto__.call(null);(statearr_13574[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7086__auto___13575);
return statearr_13574;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7088__auto__);
});})(c__7086__auto___13575,cs,m,dchan,dctr,done))
);
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj13633 = {};return obj13633;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3628__auto__ = m;if(and__3628__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3628__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3628__auto__ = m;if(and__3628__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3628__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3628__auto__ = m;if(and__3628__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3628__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3628__auto__ = m;if(and__3628__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3628__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3628__auto__ = m;if(and__3628__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3628__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* @param {...*} var_args
*/
cljs.core.async.ioc_alts_BANG_ = (function() { 
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__13634){var map__13639 = p__13634;var map__13639__$1 = ((cljs.core.seq_QMARK_.call(null,map__13639))?cljs.core.apply.call(null,cljs.core.hash_map,map__13639):map__13639);var opts = map__13639__$1;var statearr_13640_13643 = state;(statearr_13640_13643[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__13639,map__13639__$1,opts){
return (function (val){var statearr_13641_13644 = state;(statearr_13641_13644[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__13639,map__13639__$1,opts))
,ports,opts);if(cljs.core.truth_(temp__4126__auto__))
{var cb = temp__4126__auto__;var statearr_13642_13645 = state;(statearr_13642_13645[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__13634 = null;if (arguments.length > 3) {
  p__13634 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__13634);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__13646){
var state = cljs.core.first(arglist__13646);
arglist__13646 = cljs.core.next(arglist__13646);
var cont_block = cljs.core.first(arglist__13646);
arglist__13646 = cljs.core.next(arglist__13646);
var ports = cljs.core.first(arglist__13646);
var p__13634 = cljs.core.rest(arglist__13646);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__13634);
});
ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = ioc_alts_BANG___delegate;
return ioc_alts_BANG_;
})()
;
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t13766 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13766 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta13767){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta13767 = meta13767;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13766.cljs$lang$type = true;
cljs.core.async.t13766.cljs$lang$ctorStr = "cljs.core.async/t13766";
cljs.core.async.t13766.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t13766");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13766.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t13766.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13766.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13766.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13766.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13766.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13766.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13766.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13766.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13768){var self__ = this;
var _13768__$1 = this;return self__.meta13767;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13766.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13768,meta13767__$1){var self__ = this;
var _13768__$1 = this;return (new cljs.core.async.t13766(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta13767__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t13766 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t13766(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta13767){return (new cljs.core.async.t13766(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta13767));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t13766(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__7086__auto___13885 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__7086__auto___13885,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__7087__auto__ = (function (){var switch__7071__auto__ = ((function (c__7086__auto___13885,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_13838){var state_val_13839 = (state_13838[(1)]);if((state_val_13839 === (7)))
{var inst_13782 = (state_13838[(7)]);var inst_13787 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13782);var state_13838__$1 = state_13838;var statearr_13840_13886 = state_13838__$1;(statearr_13840_13886[(2)] = inst_13787);
(statearr_13840_13886[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13839 === (20)))
{var inst_13797 = (state_13838[(8)]);var state_13838__$1 = state_13838;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13838__$1,(23),out,inst_13797);
} else
{if((state_val_13839 === (1)))
{var inst_13772 = (state_13838[(9)]);var inst_13772__$1 = calc_state.call(null);var inst_13773 = cljs.core.seq_QMARK_.call(null,inst_13772__$1);var state_13838__$1 = (function (){var statearr_13841 = state_13838;(statearr_13841[(9)] = inst_13772__$1);
return statearr_13841;
})();if(inst_13773)
{var statearr_13842_13887 = state_13838__$1;(statearr_13842_13887[(1)] = (2));
} else
{var statearr_13843_13888 = state_13838__$1;(statearr_13843_13888[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13839 === (24)))
{var inst_13790 = (state_13838[(10)]);var inst_13782 = inst_13790;var state_13838__$1 = (function (){var statearr_13844 = state_13838;(statearr_13844[(7)] = inst_13782);
return statearr_13844;
})();var statearr_13845_13889 = state_13838__$1;(statearr_13845_13889[(2)] = null);
(statearr_13845_13889[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13839 === (4)))
{var inst_13772 = (state_13838[(9)]);var inst_13778 = (state_13838[(2)]);var inst_13779 = cljs.core.get.call(null,inst_13778,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_13780 = cljs.core.get.call(null,inst_13778,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_13781 = cljs.core.get.call(null,inst_13778,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_13782 = inst_13772;var state_13838__$1 = (function (){var statearr_13846 = state_13838;(statearr_13846[(11)] = inst_13781);
(statearr_13846[(7)] = inst_13782);
(statearr_13846[(12)] = inst_13779);
(statearr_13846[(13)] = inst_13780);
return statearr_13846;
})();var statearr_13847_13890 = state_13838__$1;(statearr_13847_13890[(2)] = null);
(statearr_13847_13890[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13839 === (15)))
{var state_13838__$1 = state_13838;var statearr_13848_13891 = state_13838__$1;(statearr_13848_13891[(2)] = null);
(statearr_13848_13891[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13839 === (21)))
{var inst_13790 = (state_13838[(10)]);var inst_13782 = inst_13790;var state_13838__$1 = (function (){var statearr_13849 = state_13838;(statearr_13849[(7)] = inst_13782);
return statearr_13849;
})();var statearr_13850_13892 = state_13838__$1;(statearr_13850_13892[(2)] = null);
(statearr_13850_13892[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13839 === (13)))
{var inst_13834 = (state_13838[(2)]);var state_13838__$1 = state_13838;var statearr_13851_13893 = state_13838__$1;(statearr_13851_13893[(2)] = inst_13834);
(statearr_13851_13893[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13839 === (22)))
{var inst_13832 = (state_13838[(2)]);var state_13838__$1 = state_13838;var statearr_13852_13894 = state_13838__$1;(statearr_13852_13894[(2)] = inst_13832);
(statearr_13852_13894[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13839 === (6)))
{var inst_13836 = (state_13838[(2)]);var state_13838__$1 = state_13838;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13838__$1,inst_13836);
} else
{if((state_val_13839 === (25)))
{var state_13838__$1 = state_13838;var statearr_13853_13895 = state_13838__$1;(statearr_13853_13895[(2)] = null);
(statearr_13853_13895[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13839 === (17)))
{var inst_13812 = (state_13838[(14)]);var state_13838__$1 = state_13838;var statearr_13854_13896 = state_13838__$1;(statearr_13854_13896[(2)] = inst_13812);
(statearr_13854_13896[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13839 === (3)))
{var inst_13772 = (state_13838[(9)]);var state_13838__$1 = state_13838;var statearr_13855_13897 = state_13838__$1;(statearr_13855_13897[(2)] = inst_13772);
(statearr_13855_13897[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13839 === (12)))
{var inst_13793 = (state_13838[(15)]);var inst_13798 = (state_13838[(16)]);var inst_13812 = (state_13838[(14)]);var inst_13812__$1 = inst_13793.call(null,inst_13798);var state_13838__$1 = (function (){var statearr_13856 = state_13838;(statearr_13856[(14)] = inst_13812__$1);
return statearr_13856;
})();if(cljs.core.truth_(inst_13812__$1))
{var statearr_13857_13898 = state_13838__$1;(statearr_13857_13898[(1)] = (17));
} else
{var statearr_13858_13899 = state_13838__$1;(statearr_13858_13899[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13839 === (2)))
{var inst_13772 = (state_13838[(9)]);var inst_13775 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13772);var state_13838__$1 = state_13838;var statearr_13859_13900 = state_13838__$1;(statearr_13859_13900[(2)] = inst_13775);
(statearr_13859_13900[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13839 === (23)))
{var inst_13823 = (state_13838[(2)]);var state_13838__$1 = state_13838;if(cljs.core.truth_(inst_13823))
{var statearr_13860_13901 = state_13838__$1;(statearr_13860_13901[(1)] = (24));
} else
{var statearr_13861_13902 = state_13838__$1;(statearr_13861_13902[(1)] = (25));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13839 === (19)))
{var inst_13820 = (state_13838[(2)]);var state_13838__$1 = state_13838;if(cljs.core.truth_(inst_13820))
{var statearr_13862_13903 = state_13838__$1;(statearr_13862_13903[(1)] = (20));
} else
{var statearr_13863_13904 = state_13838__$1;(statearr_13863_13904[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13839 === (11)))
{var inst_13797 = (state_13838[(8)]);var inst_13803 = (inst_13797 == null);var state_13838__$1 = state_13838;if(cljs.core.truth_(inst_13803))
{var statearr_13864_13905 = state_13838__$1;(statearr_13864_13905[(1)] = (14));
} else
{var statearr_13865_13906 = state_13838__$1;(statearr_13865_13906[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13839 === (9)))
{var inst_13790 = (state_13838[(10)]);var inst_13790__$1 = (state_13838[(2)]);var inst_13791 = cljs.core.get.call(null,inst_13790__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_13792 = cljs.core.get.call(null,inst_13790__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_13793 = cljs.core.get.call(null,inst_13790__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_13838__$1 = (function (){var statearr_13866 = state_13838;(statearr_13866[(15)] = inst_13793);
(statearr_13866[(10)] = inst_13790__$1);
(statearr_13866[(17)] = inst_13792);
return statearr_13866;
})();return cljs.core.async.ioc_alts_BANG_.call(null,state_13838__$1,(10),inst_13791);
} else
{if((state_val_13839 === (5)))
{var inst_13782 = (state_13838[(7)]);var inst_13785 = cljs.core.seq_QMARK_.call(null,inst_13782);var state_13838__$1 = state_13838;if(inst_13785)
{var statearr_13867_13907 = state_13838__$1;(statearr_13867_13907[(1)] = (7));
} else
{var statearr_13868_13908 = state_13838__$1;(statearr_13868_13908[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13839 === (14)))
{var inst_13798 = (state_13838[(16)]);var inst_13805 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_13798);var state_13838__$1 = state_13838;var statearr_13869_13909 = state_13838__$1;(statearr_13869_13909[(2)] = inst_13805);
(statearr_13869_13909[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13839 === (26)))
{var inst_13828 = (state_13838[(2)]);var state_13838__$1 = state_13838;var statearr_13870_13910 = state_13838__$1;(statearr_13870_13910[(2)] = inst_13828);
(statearr_13870_13910[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13839 === (16)))
{var inst_13808 = (state_13838[(2)]);var inst_13809 = calc_state.call(null);var inst_13782 = inst_13809;var state_13838__$1 = (function (){var statearr_13871 = state_13838;(statearr_13871[(7)] = inst_13782);
(statearr_13871[(18)] = inst_13808);
return statearr_13871;
})();var statearr_13872_13911 = state_13838__$1;(statearr_13872_13911[(2)] = null);
(statearr_13872_13911[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13839 === (10)))
{var inst_13797 = (state_13838[(8)]);var inst_13798 = (state_13838[(16)]);var inst_13796 = (state_13838[(2)]);var inst_13797__$1 = cljs.core.nth.call(null,inst_13796,(0),null);var inst_13798__$1 = cljs.core.nth.call(null,inst_13796,(1),null);var inst_13799 = (inst_13797__$1 == null);var inst_13800 = cljs.core._EQ_.call(null,inst_13798__$1,change);var inst_13801 = (inst_13799) || (inst_13800);var state_13838__$1 = (function (){var statearr_13873 = state_13838;(statearr_13873[(8)] = inst_13797__$1);
(statearr_13873[(16)] = inst_13798__$1);
return statearr_13873;
})();if(cljs.core.truth_(inst_13801))
{var statearr_13874_13912 = state_13838__$1;(statearr_13874_13912[(1)] = (11));
} else
{var statearr_13875_13913 = state_13838__$1;(statearr_13875_13913[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13839 === (18)))
{var inst_13793 = (state_13838[(15)]);var inst_13798 = (state_13838[(16)]);var inst_13792 = (state_13838[(17)]);var inst_13815 = cljs.core.empty_QMARK_.call(null,inst_13793);var inst_13816 = inst_13792.call(null,inst_13798);var inst_13817 = cljs.core.not.call(null,inst_13816);var inst_13818 = (inst_13815) && (inst_13817);var state_13838__$1 = state_13838;var statearr_13876_13914 = state_13838__$1;(statearr_13876_13914[(2)] = inst_13818);
(statearr_13876_13914[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13839 === (8)))
{var inst_13782 = (state_13838[(7)]);var state_13838__$1 = state_13838;var statearr_13877_13915 = state_13838__$1;(statearr_13877_13915[(2)] = inst_13782);
(statearr_13877_13915[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7086__auto___13885,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__7071__auto__,c__7086__auto___13885,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__7072__auto__ = null;
var state_machine__7072__auto____0 = (function (){var statearr_13881 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13881[(0)] = state_machine__7072__auto__);
(statearr_13881[(1)] = (1));
return statearr_13881;
});
var state_machine__7072__auto____1 = (function (state_13838){while(true){
var ret_value__7073__auto__ = (function (){try{while(true){
var result__7074__auto__ = switch__7071__auto__.call(null,state_13838);if(cljs.core.keyword_identical_QMARK_.call(null,result__7074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__7074__auto__;
}
break;
}
}catch (e13882){if((e13882 instanceof Object))
{var ex__7075__auto__ = e13882;var statearr_13883_13916 = state_13838;(statearr_13883_13916[(5)] = ex__7075__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13838);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13882;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13917 = state_13838;
state_13838 = G__13917;
continue;
}
} else
{return ret_value__7073__auto__;
}
break;
}
});
state_machine__7072__auto__ = function(state_13838){
switch(arguments.length){
case 0:
return state_machine__7072__auto____0.call(this);
case 1:
return state_machine__7072__auto____1.call(this,state_13838);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7072__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7072__auto____0;
state_machine__7072__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7072__auto____1;
return state_machine__7072__auto__;
})()
;})(switch__7071__auto__,c__7086__auto___13885,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__7088__auto__ = (function (){var statearr_13884 = f__7087__auto__.call(null);(statearr_13884[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7086__auto___13885);
return statearr_13884;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7088__auto__);
});})(c__7086__auto___13885,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj13919 = {};return obj13919;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3628__auto__ = p;if(and__3628__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3628__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4277__auto__ = (((p == null))?null:p);return (function (){var or__3640__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3628__auto__ = p;if(and__3628__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3628__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4277__auto__ = (((p == null))?null:p);return (function (){var or__3640__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3628__auto__ = p;if(and__3628__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3628__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4277__auto__ = (((p == null))?null:p);return (function (){var or__3640__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3628__auto__ = p;if(and__3628__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3628__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4277__auto__ = (((p == null))?null:p);return (function (){var or__3640__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3640__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3640__auto__,mults){
return (function (p1__13920_SHARP_){if(cljs.core.truth_(p1__13920_SHARP_.call(null,topic)))
{return p1__13920_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__13920_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3640__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t14043 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14043 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta14044){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta14044 = meta14044;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14043.cljs$lang$type = true;
cljs.core.async.t14043.cljs$lang$ctorStr = "cljs.core.async/t14043";
cljs.core.async.t14043.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t14043");
});})(mults,ensure_mult))
;
cljs.core.async.t14043.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t14043.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t14043.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t14043.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t14043.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t14043.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t14043.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t14043.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_14045){var self__ = this;
var _14045__$1 = this;return self__.meta14044;
});})(mults,ensure_mult))
;
cljs.core.async.t14043.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_14045,meta14044__$1){var self__ = this;
var _14045__$1 = this;return (new cljs.core.async.t14043(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta14044__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t14043 = ((function (mults,ensure_mult){
return (function __GT_t14043(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta14044){return (new cljs.core.async.t14043(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta14044));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t14043(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__7086__auto___14165 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__7086__auto___14165,mults,ensure_mult,p){
return (function (){var f__7087__auto__ = (function (){var switch__7071__auto__ = ((function (c__7086__auto___14165,mults,ensure_mult,p){
return (function (state_14117){var state_val_14118 = (state_14117[(1)]);if((state_val_14118 === (7)))
{var inst_14113 = (state_14117[(2)]);var state_14117__$1 = state_14117;var statearr_14119_14166 = state_14117__$1;(statearr_14119_14166[(2)] = inst_14113);
(statearr_14119_14166[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14118 === (20)))
{var state_14117__$1 = state_14117;var statearr_14120_14167 = state_14117__$1;(statearr_14120_14167[(2)] = null);
(statearr_14120_14167[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14118 === (1)))
{var state_14117__$1 = state_14117;var statearr_14121_14168 = state_14117__$1;(statearr_14121_14168[(2)] = null);
(statearr_14121_14168[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14118 === (24)))
{var inst_14096 = (state_14117[(7)]);var inst_14105 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_14096);var state_14117__$1 = state_14117;var statearr_14122_14169 = state_14117__$1;(statearr_14122_14169[(2)] = inst_14105);
(statearr_14122_14169[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14118 === (4)))
{var inst_14048 = (state_14117[(8)]);var inst_14048__$1 = (state_14117[(2)]);var inst_14049 = (inst_14048__$1 == null);var state_14117__$1 = (function (){var statearr_14123 = state_14117;(statearr_14123[(8)] = inst_14048__$1);
return statearr_14123;
})();if(cljs.core.truth_(inst_14049))
{var statearr_14124_14170 = state_14117__$1;(statearr_14124_14170[(1)] = (5));
} else
{var statearr_14125_14171 = state_14117__$1;(statearr_14125_14171[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14118 === (15)))
{var inst_14090 = (state_14117[(2)]);var state_14117__$1 = state_14117;var statearr_14126_14172 = state_14117__$1;(statearr_14126_14172[(2)] = inst_14090);
(statearr_14126_14172[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14118 === (21)))
{var inst_14110 = (state_14117[(2)]);var state_14117__$1 = (function (){var statearr_14127 = state_14117;(statearr_14127[(9)] = inst_14110);
return statearr_14127;
})();var statearr_14128_14173 = state_14117__$1;(statearr_14128_14173[(2)] = null);
(statearr_14128_14173[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14118 === (13)))
{var inst_14072 = (state_14117[(10)]);var inst_14074 = cljs.core.chunked_seq_QMARK_.call(null,inst_14072);var state_14117__$1 = state_14117;if(inst_14074)
{var statearr_14129_14174 = state_14117__$1;(statearr_14129_14174[(1)] = (16));
} else
{var statearr_14130_14175 = state_14117__$1;(statearr_14130_14175[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14118 === (22)))
{var inst_14102 = (state_14117[(2)]);var state_14117__$1 = state_14117;if(cljs.core.truth_(inst_14102))
{var statearr_14131_14176 = state_14117__$1;(statearr_14131_14176[(1)] = (23));
} else
{var statearr_14132_14177 = state_14117__$1;(statearr_14132_14177[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14118 === (6)))
{var inst_14098 = (state_14117[(11)]);var inst_14096 = (state_14117[(7)]);var inst_14048 = (state_14117[(8)]);var inst_14096__$1 = topic_fn.call(null,inst_14048);var inst_14097 = cljs.core.deref.call(null,mults);var inst_14098__$1 = cljs.core.get.call(null,inst_14097,inst_14096__$1);var state_14117__$1 = (function (){var statearr_14133 = state_14117;(statearr_14133[(11)] = inst_14098__$1);
(statearr_14133[(7)] = inst_14096__$1);
return statearr_14133;
})();if(cljs.core.truth_(inst_14098__$1))
{var statearr_14134_14178 = state_14117__$1;(statearr_14134_14178[(1)] = (19));
} else
{var statearr_14135_14179 = state_14117__$1;(statearr_14135_14179[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14118 === (25)))
{var inst_14107 = (state_14117[(2)]);var state_14117__$1 = state_14117;var statearr_14136_14180 = state_14117__$1;(statearr_14136_14180[(2)] = inst_14107);
(statearr_14136_14180[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14118 === (17)))
{var inst_14072 = (state_14117[(10)]);var inst_14081 = cljs.core.first.call(null,inst_14072);var inst_14082 = cljs.core.async.muxch_STAR_.call(null,inst_14081);var inst_14083 = cljs.core.async.close_BANG_.call(null,inst_14082);var inst_14084 = cljs.core.next.call(null,inst_14072);var inst_14058 = inst_14084;var inst_14059 = null;var inst_14060 = (0);var inst_14061 = (0);var state_14117__$1 = (function (){var statearr_14137 = state_14117;(statearr_14137[(12)] = inst_14083);
(statearr_14137[(13)] = inst_14058);
(statearr_14137[(14)] = inst_14059);
(statearr_14137[(15)] = inst_14061);
(statearr_14137[(16)] = inst_14060);
return statearr_14137;
})();var statearr_14138_14181 = state_14117__$1;(statearr_14138_14181[(2)] = null);
(statearr_14138_14181[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14118 === (3)))
{var inst_14115 = (state_14117[(2)]);var state_14117__$1 = state_14117;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14117__$1,inst_14115);
} else
{if((state_val_14118 === (12)))
{var inst_14092 = (state_14117[(2)]);var state_14117__$1 = state_14117;var statearr_14139_14182 = state_14117__$1;(statearr_14139_14182[(2)] = inst_14092);
(statearr_14139_14182[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14118 === (2)))
{var state_14117__$1 = state_14117;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14117__$1,(4),ch);
} else
{if((state_val_14118 === (23)))
{var state_14117__$1 = state_14117;var statearr_14140_14183 = state_14117__$1;(statearr_14140_14183[(2)] = null);
(statearr_14140_14183[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14118 === (19)))
{var inst_14098 = (state_14117[(11)]);var inst_14048 = (state_14117[(8)]);var inst_14100 = cljs.core.async.muxch_STAR_.call(null,inst_14098);var state_14117__$1 = state_14117;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14117__$1,(22),inst_14100,inst_14048);
} else
{if((state_val_14118 === (11)))
{var inst_14058 = (state_14117[(13)]);var inst_14072 = (state_14117[(10)]);var inst_14072__$1 = cljs.core.seq.call(null,inst_14058);var state_14117__$1 = (function (){var statearr_14141 = state_14117;(statearr_14141[(10)] = inst_14072__$1);
return statearr_14141;
})();if(inst_14072__$1)
{var statearr_14142_14184 = state_14117__$1;(statearr_14142_14184[(1)] = (13));
} else
{var statearr_14143_14185 = state_14117__$1;(statearr_14143_14185[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14118 === (9)))
{var inst_14094 = (state_14117[(2)]);var state_14117__$1 = state_14117;var statearr_14144_14186 = state_14117__$1;(statearr_14144_14186[(2)] = inst_14094);
(statearr_14144_14186[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14118 === (5)))
{var inst_14055 = cljs.core.deref.call(null,mults);var inst_14056 = cljs.core.vals.call(null,inst_14055);var inst_14057 = cljs.core.seq.call(null,inst_14056);var inst_14058 = inst_14057;var inst_14059 = null;var inst_14060 = (0);var inst_14061 = (0);var state_14117__$1 = (function (){var statearr_14145 = state_14117;(statearr_14145[(13)] = inst_14058);
(statearr_14145[(14)] = inst_14059);
(statearr_14145[(15)] = inst_14061);
(statearr_14145[(16)] = inst_14060);
return statearr_14145;
})();var statearr_14146_14187 = state_14117__$1;(statearr_14146_14187[(2)] = null);
(statearr_14146_14187[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14118 === (14)))
{var state_14117__$1 = state_14117;var statearr_14150_14188 = state_14117__$1;(statearr_14150_14188[(2)] = null);
(statearr_14150_14188[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14118 === (16)))
{var inst_14072 = (state_14117[(10)]);var inst_14076 = cljs.core.chunk_first.call(null,inst_14072);var inst_14077 = cljs.core.chunk_rest.call(null,inst_14072);var inst_14078 = cljs.core.count.call(null,inst_14076);var inst_14058 = inst_14077;var inst_14059 = inst_14076;var inst_14060 = inst_14078;var inst_14061 = (0);var state_14117__$1 = (function (){var statearr_14151 = state_14117;(statearr_14151[(13)] = inst_14058);
(statearr_14151[(14)] = inst_14059);
(statearr_14151[(15)] = inst_14061);
(statearr_14151[(16)] = inst_14060);
return statearr_14151;
})();var statearr_14152_14189 = state_14117__$1;(statearr_14152_14189[(2)] = null);
(statearr_14152_14189[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14118 === (10)))
{var inst_14058 = (state_14117[(13)]);var inst_14059 = (state_14117[(14)]);var inst_14061 = (state_14117[(15)]);var inst_14060 = (state_14117[(16)]);var inst_14066 = cljs.core._nth.call(null,inst_14059,inst_14061);var inst_14067 = cljs.core.async.muxch_STAR_.call(null,inst_14066);var inst_14068 = cljs.core.async.close_BANG_.call(null,inst_14067);var inst_14069 = (inst_14061 + (1));var tmp14147 = inst_14058;var tmp14148 = inst_14059;var tmp14149 = inst_14060;var inst_14058__$1 = tmp14147;var inst_14059__$1 = tmp14148;var inst_14060__$1 = tmp14149;var inst_14061__$1 = inst_14069;var state_14117__$1 = (function (){var statearr_14153 = state_14117;(statearr_14153[(13)] = inst_14058__$1);
(statearr_14153[(17)] = inst_14068);
(statearr_14153[(14)] = inst_14059__$1);
(statearr_14153[(15)] = inst_14061__$1);
(statearr_14153[(16)] = inst_14060__$1);
return statearr_14153;
})();var statearr_14154_14190 = state_14117__$1;(statearr_14154_14190[(2)] = null);
(statearr_14154_14190[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14118 === (18)))
{var inst_14087 = (state_14117[(2)]);var state_14117__$1 = state_14117;var statearr_14155_14191 = state_14117__$1;(statearr_14155_14191[(2)] = inst_14087);
(statearr_14155_14191[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14118 === (8)))
{var inst_14061 = (state_14117[(15)]);var inst_14060 = (state_14117[(16)]);var inst_14063 = (inst_14061 < inst_14060);var inst_14064 = inst_14063;var state_14117__$1 = state_14117;if(cljs.core.truth_(inst_14064))
{var statearr_14156_14192 = state_14117__$1;(statearr_14156_14192[(1)] = (10));
} else
{var statearr_14157_14193 = state_14117__$1;(statearr_14157_14193[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7086__auto___14165,mults,ensure_mult,p))
;return ((function (switch__7071__auto__,c__7086__auto___14165,mults,ensure_mult,p){
return (function() {
var state_machine__7072__auto__ = null;
var state_machine__7072__auto____0 = (function (){var statearr_14161 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14161[(0)] = state_machine__7072__auto__);
(statearr_14161[(1)] = (1));
return statearr_14161;
});
var state_machine__7072__auto____1 = (function (state_14117){while(true){
var ret_value__7073__auto__ = (function (){try{while(true){
var result__7074__auto__ = switch__7071__auto__.call(null,state_14117);if(cljs.core.keyword_identical_QMARK_.call(null,result__7074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__7074__auto__;
}
break;
}
}catch (e14162){if((e14162 instanceof Object))
{var ex__7075__auto__ = e14162;var statearr_14163_14194 = state_14117;(statearr_14163_14194[(5)] = ex__7075__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14117);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14162;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14195 = state_14117;
state_14117 = G__14195;
continue;
}
} else
{return ret_value__7073__auto__;
}
break;
}
});
state_machine__7072__auto__ = function(state_14117){
switch(arguments.length){
case 0:
return state_machine__7072__auto____0.call(this);
case 1:
return state_machine__7072__auto____1.call(this,state_14117);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7072__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7072__auto____0;
state_machine__7072__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7072__auto____1;
return state_machine__7072__auto__;
})()
;})(switch__7071__auto__,c__7086__auto___14165,mults,ensure_mult,p))
})();var state__7088__auto__ = (function (){var statearr_14164 = f__7087__auto__.call(null);(statearr_14164[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7086__auto___14165);
return statearr_14164;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7088__auto__);
});})(c__7086__auto___14165,mults,ensure_mult,p))
);
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__7086__auto___14332 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__7086__auto___14332,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__7087__auto__ = (function (){var switch__7071__auto__ = ((function (c__7086__auto___14332,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_14302){var state_val_14303 = (state_14302[(1)]);if((state_val_14303 === (7)))
{var state_14302__$1 = state_14302;var statearr_14304_14333 = state_14302__$1;(statearr_14304_14333[(2)] = null);
(statearr_14304_14333[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14303 === (1)))
{var state_14302__$1 = state_14302;var statearr_14305_14334 = state_14302__$1;(statearr_14305_14334[(2)] = null);
(statearr_14305_14334[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14303 === (4)))
{var inst_14266 = (state_14302[(7)]);var inst_14268 = (inst_14266 < cnt);var state_14302__$1 = state_14302;if(cljs.core.truth_(inst_14268))
{var statearr_14306_14335 = state_14302__$1;(statearr_14306_14335[(1)] = (6));
} else
{var statearr_14307_14336 = state_14302__$1;(statearr_14307_14336[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14303 === (15)))
{var inst_14298 = (state_14302[(2)]);var state_14302__$1 = state_14302;var statearr_14308_14337 = state_14302__$1;(statearr_14308_14337[(2)] = inst_14298);
(statearr_14308_14337[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14303 === (13)))
{var inst_14291 = cljs.core.async.close_BANG_.call(null,out);var state_14302__$1 = state_14302;var statearr_14309_14338 = state_14302__$1;(statearr_14309_14338[(2)] = inst_14291);
(statearr_14309_14338[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14303 === (6)))
{var state_14302__$1 = state_14302;var statearr_14310_14339 = state_14302__$1;(statearr_14310_14339[(2)] = null);
(statearr_14310_14339[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14303 === (3)))
{var inst_14300 = (state_14302[(2)]);var state_14302__$1 = state_14302;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14302__$1,inst_14300);
} else
{if((state_val_14303 === (12)))
{var inst_14288 = (state_14302[(8)]);var inst_14288__$1 = (state_14302[(2)]);var inst_14289 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_14288__$1);var state_14302__$1 = (function (){var statearr_14311 = state_14302;(statearr_14311[(8)] = inst_14288__$1);
return statearr_14311;
})();if(cljs.core.truth_(inst_14289))
{var statearr_14312_14340 = state_14302__$1;(statearr_14312_14340[(1)] = (13));
} else
{var statearr_14313_14341 = state_14302__$1;(statearr_14313_14341[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14303 === (2)))
{var inst_14265 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_14266 = (0);var state_14302__$1 = (function (){var statearr_14314 = state_14302;(statearr_14314[(7)] = inst_14266);
(statearr_14314[(9)] = inst_14265);
return statearr_14314;
})();var statearr_14315_14342 = state_14302__$1;(statearr_14315_14342[(2)] = null);
(statearr_14315_14342[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14303 === (11)))
{var inst_14266 = (state_14302[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14302,(10),Object,null,(9));var inst_14275 = chs__$1.call(null,inst_14266);var inst_14276 = done.call(null,inst_14266);var inst_14277 = cljs.core.async.take_BANG_.call(null,inst_14275,inst_14276);var state_14302__$1 = state_14302;var statearr_14316_14343 = state_14302__$1;(statearr_14316_14343[(2)] = inst_14277);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14302__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14303 === (9)))
{var inst_14266 = (state_14302[(7)]);var inst_14279 = (state_14302[(2)]);var inst_14280 = (inst_14266 + (1));var inst_14266__$1 = inst_14280;var state_14302__$1 = (function (){var statearr_14317 = state_14302;(statearr_14317[(7)] = inst_14266__$1);
(statearr_14317[(10)] = inst_14279);
return statearr_14317;
})();var statearr_14318_14344 = state_14302__$1;(statearr_14318_14344[(2)] = null);
(statearr_14318_14344[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14303 === (5)))
{var inst_14286 = (state_14302[(2)]);var state_14302__$1 = (function (){var statearr_14319 = state_14302;(statearr_14319[(11)] = inst_14286);
return statearr_14319;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14302__$1,(12),dchan);
} else
{if((state_val_14303 === (14)))
{var inst_14288 = (state_14302[(8)]);var inst_14293 = cljs.core.apply.call(null,f,inst_14288);var state_14302__$1 = state_14302;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14302__$1,(16),out,inst_14293);
} else
{if((state_val_14303 === (16)))
{var inst_14295 = (state_14302[(2)]);var state_14302__$1 = (function (){var statearr_14320 = state_14302;(statearr_14320[(12)] = inst_14295);
return statearr_14320;
})();var statearr_14321_14345 = state_14302__$1;(statearr_14321_14345[(2)] = null);
(statearr_14321_14345[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14303 === (10)))
{var inst_14270 = (state_14302[(2)]);var inst_14271 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_14302__$1 = (function (){var statearr_14322 = state_14302;(statearr_14322[(13)] = inst_14270);
return statearr_14322;
})();var statearr_14323_14346 = state_14302__$1;(statearr_14323_14346[(2)] = inst_14271);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14302__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14303 === (8)))
{var inst_14284 = (state_14302[(2)]);var state_14302__$1 = state_14302;var statearr_14324_14347 = state_14302__$1;(statearr_14324_14347[(2)] = inst_14284);
(statearr_14324_14347[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7086__auto___14332,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__7071__auto__,c__7086__auto___14332,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__7072__auto__ = null;
var state_machine__7072__auto____0 = (function (){var statearr_14328 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14328[(0)] = state_machine__7072__auto__);
(statearr_14328[(1)] = (1));
return statearr_14328;
});
var state_machine__7072__auto____1 = (function (state_14302){while(true){
var ret_value__7073__auto__ = (function (){try{while(true){
var result__7074__auto__ = switch__7071__auto__.call(null,state_14302);if(cljs.core.keyword_identical_QMARK_.call(null,result__7074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__7074__auto__;
}
break;
}
}catch (e14329){if((e14329 instanceof Object))
{var ex__7075__auto__ = e14329;var statearr_14330_14348 = state_14302;(statearr_14330_14348[(5)] = ex__7075__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14302);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14329;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14349 = state_14302;
state_14302 = G__14349;
continue;
}
} else
{return ret_value__7073__auto__;
}
break;
}
});
state_machine__7072__auto__ = function(state_14302){
switch(arguments.length){
case 0:
return state_machine__7072__auto____0.call(this);
case 1:
return state_machine__7072__auto____1.call(this,state_14302);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7072__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7072__auto____0;
state_machine__7072__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7072__auto____1;
return state_machine__7072__auto__;
})()
;})(switch__7071__auto__,c__7086__auto___14332,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__7088__auto__ = (function (){var statearr_14331 = f__7087__auto__.call(null);(statearr_14331[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7086__auto___14332);
return statearr_14331;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7088__auto__);
});})(c__7086__auto___14332,chs__$1,out,cnt,rets,dchan,dctr,done))
);
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__7086__auto___14457 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__7086__auto___14457,out){
return (function (){var f__7087__auto__ = (function (){var switch__7071__auto__ = ((function (c__7086__auto___14457,out){
return (function (state_14433){var state_val_14434 = (state_14433[(1)]);if((state_val_14434 === (7)))
{var inst_14413 = (state_14433[(7)]);var inst_14412 = (state_14433[(8)]);var inst_14412__$1 = (state_14433[(2)]);var inst_14413__$1 = cljs.core.nth.call(null,inst_14412__$1,(0),null);var inst_14414 = cljs.core.nth.call(null,inst_14412__$1,(1),null);var inst_14415 = (inst_14413__$1 == null);var state_14433__$1 = (function (){var statearr_14435 = state_14433;(statearr_14435[(7)] = inst_14413__$1);
(statearr_14435[(8)] = inst_14412__$1);
(statearr_14435[(9)] = inst_14414);
return statearr_14435;
})();if(cljs.core.truth_(inst_14415))
{var statearr_14436_14458 = state_14433__$1;(statearr_14436_14458[(1)] = (8));
} else
{var statearr_14437_14459 = state_14433__$1;(statearr_14437_14459[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14434 === (1)))
{var inst_14404 = cljs.core.vec.call(null,chs);var inst_14405 = inst_14404;var state_14433__$1 = (function (){var statearr_14438 = state_14433;(statearr_14438[(10)] = inst_14405);
return statearr_14438;
})();var statearr_14439_14460 = state_14433__$1;(statearr_14439_14460[(2)] = null);
(statearr_14439_14460[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14434 === (4)))
{var inst_14405 = (state_14433[(10)]);var state_14433__$1 = state_14433;return cljs.core.async.ioc_alts_BANG_.call(null,state_14433__$1,(7),inst_14405);
} else
{if((state_val_14434 === (6)))
{var inst_14429 = (state_14433[(2)]);var state_14433__$1 = state_14433;var statearr_14440_14461 = state_14433__$1;(statearr_14440_14461[(2)] = inst_14429);
(statearr_14440_14461[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14434 === (3)))
{var inst_14431 = (state_14433[(2)]);var state_14433__$1 = state_14433;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14433__$1,inst_14431);
} else
{if((state_val_14434 === (2)))
{var inst_14405 = (state_14433[(10)]);var inst_14407 = cljs.core.count.call(null,inst_14405);var inst_14408 = (inst_14407 > (0));var state_14433__$1 = state_14433;if(cljs.core.truth_(inst_14408))
{var statearr_14442_14462 = state_14433__$1;(statearr_14442_14462[(1)] = (4));
} else
{var statearr_14443_14463 = state_14433__$1;(statearr_14443_14463[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14434 === (11)))
{var inst_14405 = (state_14433[(10)]);var inst_14422 = (state_14433[(2)]);var tmp14441 = inst_14405;var inst_14405__$1 = tmp14441;var state_14433__$1 = (function (){var statearr_14444 = state_14433;(statearr_14444[(11)] = inst_14422);
(statearr_14444[(10)] = inst_14405__$1);
return statearr_14444;
})();var statearr_14445_14464 = state_14433__$1;(statearr_14445_14464[(2)] = null);
(statearr_14445_14464[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14434 === (9)))
{var inst_14413 = (state_14433[(7)]);var state_14433__$1 = state_14433;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14433__$1,(11),out,inst_14413);
} else
{if((state_val_14434 === (5)))
{var inst_14427 = cljs.core.async.close_BANG_.call(null,out);var state_14433__$1 = state_14433;var statearr_14446_14465 = state_14433__$1;(statearr_14446_14465[(2)] = inst_14427);
(statearr_14446_14465[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14434 === (10)))
{var inst_14425 = (state_14433[(2)]);var state_14433__$1 = state_14433;var statearr_14447_14466 = state_14433__$1;(statearr_14447_14466[(2)] = inst_14425);
(statearr_14447_14466[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14434 === (8)))
{var inst_14413 = (state_14433[(7)]);var inst_14412 = (state_14433[(8)]);var inst_14414 = (state_14433[(9)]);var inst_14405 = (state_14433[(10)]);var inst_14417 = (function (){var c = inst_14414;var v = inst_14413;var vec__14410 = inst_14412;var cs = inst_14405;return ((function (c,v,vec__14410,cs,inst_14413,inst_14412,inst_14414,inst_14405,state_val_14434,c__7086__auto___14457,out){
return (function (p1__14350_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__14350_SHARP_);
});
;})(c,v,vec__14410,cs,inst_14413,inst_14412,inst_14414,inst_14405,state_val_14434,c__7086__auto___14457,out))
})();var inst_14418 = cljs.core.filterv.call(null,inst_14417,inst_14405);var inst_14405__$1 = inst_14418;var state_14433__$1 = (function (){var statearr_14448 = state_14433;(statearr_14448[(10)] = inst_14405__$1);
return statearr_14448;
})();var statearr_14449_14467 = state_14433__$1;(statearr_14449_14467[(2)] = null);
(statearr_14449_14467[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__7086__auto___14457,out))
;return ((function (switch__7071__auto__,c__7086__auto___14457,out){
return (function() {
var state_machine__7072__auto__ = null;
var state_machine__7072__auto____0 = (function (){var statearr_14453 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14453[(0)] = state_machine__7072__auto__);
(statearr_14453[(1)] = (1));
return statearr_14453;
});
var state_machine__7072__auto____1 = (function (state_14433){while(true){
var ret_value__7073__auto__ = (function (){try{while(true){
var result__7074__auto__ = switch__7071__auto__.call(null,state_14433);if(cljs.core.keyword_identical_QMARK_.call(null,result__7074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__7074__auto__;
}
break;
}
}catch (e14454){if((e14454 instanceof Object))
{var ex__7075__auto__ = e14454;var statearr_14455_14468 = state_14433;(statearr_14455_14468[(5)] = ex__7075__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14433);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14454;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14469 = state_14433;
state_14433 = G__14469;
continue;
}
} else
{return ret_value__7073__auto__;
}
break;
}
});
state_machine__7072__auto__ = function(state_14433){
switch(arguments.length){
case 0:
return state_machine__7072__auto____0.call(this);
case 1:
return state_machine__7072__auto____1.call(this,state_14433);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7072__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7072__auto____0;
state_machine__7072__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7072__auto____1;
return state_machine__7072__auto__;
})()
;})(switch__7071__auto__,c__7086__auto___14457,out))
})();var state__7088__auto__ = (function (){var statearr_14456 = f__7087__auto__.call(null);(statearr_14456[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7086__auto___14457);
return statearr_14456;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7088__auto__);
});})(c__7086__auto___14457,out))
);
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__7086__auto___14562 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__7086__auto___14562,out){
return (function (){var f__7087__auto__ = (function (){var switch__7071__auto__ = ((function (c__7086__auto___14562,out){
return (function (state_14539){var state_val_14540 = (state_14539[(1)]);if((state_val_14540 === (7)))
{var inst_14521 = (state_14539[(7)]);var inst_14521__$1 = (state_14539[(2)]);var inst_14522 = (inst_14521__$1 == null);var inst_14523 = cljs.core.not.call(null,inst_14522);var state_14539__$1 = (function (){var statearr_14541 = state_14539;(statearr_14541[(7)] = inst_14521__$1);
return statearr_14541;
})();if(inst_14523)
{var statearr_14542_14563 = state_14539__$1;(statearr_14542_14563[(1)] = (8));
} else
{var statearr_14543_14564 = state_14539__$1;(statearr_14543_14564[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14540 === (1)))
{var inst_14516 = (0);var state_14539__$1 = (function (){var statearr_14544 = state_14539;(statearr_14544[(8)] = inst_14516);
return statearr_14544;
})();var statearr_14545_14565 = state_14539__$1;(statearr_14545_14565[(2)] = null);
(statearr_14545_14565[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14540 === (4)))
{var state_14539__$1 = state_14539;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14539__$1,(7),ch);
} else
{if((state_val_14540 === (6)))
{var inst_14534 = (state_14539[(2)]);var state_14539__$1 = state_14539;var statearr_14546_14566 = state_14539__$1;(statearr_14546_14566[(2)] = inst_14534);
(statearr_14546_14566[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14540 === (3)))
{var inst_14536 = (state_14539[(2)]);var inst_14537 = cljs.core.async.close_BANG_.call(null,out);var state_14539__$1 = (function (){var statearr_14547 = state_14539;(statearr_14547[(9)] = inst_14536);
return statearr_14547;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14539__$1,inst_14537);
} else
{if((state_val_14540 === (2)))
{var inst_14516 = (state_14539[(8)]);var inst_14518 = (inst_14516 < n);var state_14539__$1 = state_14539;if(cljs.core.truth_(inst_14518))
{var statearr_14548_14567 = state_14539__$1;(statearr_14548_14567[(1)] = (4));
} else
{var statearr_14549_14568 = state_14539__$1;(statearr_14549_14568[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14540 === (11)))
{var inst_14516 = (state_14539[(8)]);var inst_14526 = (state_14539[(2)]);var inst_14527 = (inst_14516 + (1));var inst_14516__$1 = inst_14527;var state_14539__$1 = (function (){var statearr_14550 = state_14539;(statearr_14550[(10)] = inst_14526);
(statearr_14550[(8)] = inst_14516__$1);
return statearr_14550;
})();var statearr_14551_14569 = state_14539__$1;(statearr_14551_14569[(2)] = null);
(statearr_14551_14569[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14540 === (9)))
{var state_14539__$1 = state_14539;var statearr_14552_14570 = state_14539__$1;(statearr_14552_14570[(2)] = null);
(statearr_14552_14570[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14540 === (5)))
{var state_14539__$1 = state_14539;var statearr_14553_14571 = state_14539__$1;(statearr_14553_14571[(2)] = null);
(statearr_14553_14571[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14540 === (10)))
{var inst_14531 = (state_14539[(2)]);var state_14539__$1 = state_14539;var statearr_14554_14572 = state_14539__$1;(statearr_14554_14572[(2)] = inst_14531);
(statearr_14554_14572[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14540 === (8)))
{var inst_14521 = (state_14539[(7)]);var state_14539__$1 = state_14539;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14539__$1,(11),out,inst_14521);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__7086__auto___14562,out))
;return ((function (switch__7071__auto__,c__7086__auto___14562,out){
return (function() {
var state_machine__7072__auto__ = null;
var state_machine__7072__auto____0 = (function (){var statearr_14558 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_14558[(0)] = state_machine__7072__auto__);
(statearr_14558[(1)] = (1));
return statearr_14558;
});
var state_machine__7072__auto____1 = (function (state_14539){while(true){
var ret_value__7073__auto__ = (function (){try{while(true){
var result__7074__auto__ = switch__7071__auto__.call(null,state_14539);if(cljs.core.keyword_identical_QMARK_.call(null,result__7074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__7074__auto__;
}
break;
}
}catch (e14559){if((e14559 instanceof Object))
{var ex__7075__auto__ = e14559;var statearr_14560_14573 = state_14539;(statearr_14560_14573[(5)] = ex__7075__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14539);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14559;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14574 = state_14539;
state_14539 = G__14574;
continue;
}
} else
{return ret_value__7073__auto__;
}
break;
}
});
state_machine__7072__auto__ = function(state_14539){
switch(arguments.length){
case 0:
return state_machine__7072__auto____0.call(this);
case 1:
return state_machine__7072__auto____1.call(this,state_14539);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7072__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7072__auto____0;
state_machine__7072__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7072__auto____1;
return state_machine__7072__auto__;
})()
;})(switch__7071__auto__,c__7086__auto___14562,out))
})();var state__7088__auto__ = (function (){var statearr_14561 = f__7087__auto__.call(null);(statearr_14561[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7086__auto___14562);
return statearr_14561;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7088__auto__);
});})(c__7086__auto___14562,out))
);
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t14582 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14582 = (function (ch,f,map_LT_,meta14583){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta14583 = meta14583;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14582.cljs$lang$type = true;
cljs.core.async.t14582.cljs$lang$ctorStr = "cljs.core.async/t14582";
cljs.core.async.t14582.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t14582");
});
cljs.core.async.t14582.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t14582.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t14582.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t14582.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t14585 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14585 = (function (fn1,_,meta14583,ch,f,map_LT_,meta14586){
this.fn1 = fn1;
this._ = _;
this.meta14583 = meta14583;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta14586 = meta14586;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14585.cljs$lang$type = true;
cljs.core.async.t14585.cljs$lang$ctorStr = "cljs.core.async/t14585";
cljs.core.async.t14585.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t14585");
});})(___$1))
;
cljs.core.async.t14585.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t14585.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t14585.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__14575_SHARP_){return f1.call(null,(((p1__14575_SHARP_ == null))?null:self__.f.call(null,p1__14575_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t14585.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_14587){var self__ = this;
var _14587__$1 = this;return self__.meta14586;
});})(___$1))
;
cljs.core.async.t14585.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_14587,meta14586__$1){var self__ = this;
var _14587__$1 = this;return (new cljs.core.async.t14585(self__.fn1,self__._,self__.meta14583,self__.ch,self__.f,self__.map_LT_,meta14586__$1));
});})(___$1))
;
cljs.core.async.__GT_t14585 = ((function (___$1){
return (function __GT_t14585(fn1__$1,___$2,meta14583__$1,ch__$2,f__$2,map_LT___$2,meta14586){return (new cljs.core.async.t14585(fn1__$1,___$2,meta14583__$1,ch__$2,f__$2,map_LT___$2,meta14586));
});})(___$1))
;
}
return (new cljs.core.async.t14585(fn1,___$1,self__.meta14583,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3628__auto__ = ret;if(cljs.core.truth_(and__3628__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3628__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t14582.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t14582.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t14582.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t14582.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14584){var self__ = this;
var _14584__$1 = this;return self__.meta14583;
});
cljs.core.async.t14582.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14584,meta14583__$1){var self__ = this;
var _14584__$1 = this;return (new cljs.core.async.t14582(self__.ch,self__.f,self__.map_LT_,meta14583__$1));
});
cljs.core.async.__GT_t14582 = (function __GT_t14582(ch__$1,f__$1,map_LT___$1,meta14583){return (new cljs.core.async.t14582(ch__$1,f__$1,map_LT___$1,meta14583));
});
}
return (new cljs.core.async.t14582(ch,f,map_LT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t14591 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14591 = (function (ch,f,map_GT_,meta14592){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta14592 = meta14592;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14591.cljs$lang$type = true;
cljs.core.async.t14591.cljs$lang$ctorStr = "cljs.core.async/t14591";
cljs.core.async.t14591.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t14591");
});
cljs.core.async.t14591.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t14591.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t14591.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t14591.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t14591.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t14591.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t14591.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14593){var self__ = this;
var _14593__$1 = this;return self__.meta14592;
});
cljs.core.async.t14591.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14593,meta14592__$1){var self__ = this;
var _14593__$1 = this;return (new cljs.core.async.t14591(self__.ch,self__.f,self__.map_GT_,meta14592__$1));
});
cljs.core.async.__GT_t14591 = (function __GT_t14591(ch__$1,f__$1,map_GT___$1,meta14592){return (new cljs.core.async.t14591(ch__$1,f__$1,map_GT___$1,meta14592));
});
}
return (new cljs.core.async.t14591(ch,f,map_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t14597 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14597 = (function (ch,p,filter_GT_,meta14598){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta14598 = meta14598;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14597.cljs$lang$type = true;
cljs.core.async.t14597.cljs$lang$ctorStr = "cljs.core.async/t14597";
cljs.core.async.t14597.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t14597");
});
cljs.core.async.t14597.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t14597.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t14597.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t14597.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t14597.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t14597.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t14597.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t14597.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14599){var self__ = this;
var _14599__$1 = this;return self__.meta14598;
});
cljs.core.async.t14597.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14599,meta14598__$1){var self__ = this;
var _14599__$1 = this;return (new cljs.core.async.t14597(self__.ch,self__.p,self__.filter_GT_,meta14598__$1));
});
cljs.core.async.__GT_t14597 = (function __GT_t14597(ch__$1,p__$1,filter_GT___$1,meta14598){return (new cljs.core.async.t14597(ch__$1,p__$1,filter_GT___$1,meta14598));
});
}
return (new cljs.core.async.t14597(ch,p,filter_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__7086__auto___14682 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__7086__auto___14682,out){
return (function (){var f__7087__auto__ = (function (){var switch__7071__auto__ = ((function (c__7086__auto___14682,out){
return (function (state_14661){var state_val_14662 = (state_14661[(1)]);if((state_val_14662 === (7)))
{var inst_14657 = (state_14661[(2)]);var state_14661__$1 = state_14661;var statearr_14663_14683 = state_14661__$1;(statearr_14663_14683[(2)] = inst_14657);
(statearr_14663_14683[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14662 === (1)))
{var state_14661__$1 = state_14661;var statearr_14664_14684 = state_14661__$1;(statearr_14664_14684[(2)] = null);
(statearr_14664_14684[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14662 === (4)))
{var inst_14643 = (state_14661[(7)]);var inst_14643__$1 = (state_14661[(2)]);var inst_14644 = (inst_14643__$1 == null);var state_14661__$1 = (function (){var statearr_14665 = state_14661;(statearr_14665[(7)] = inst_14643__$1);
return statearr_14665;
})();if(cljs.core.truth_(inst_14644))
{var statearr_14666_14685 = state_14661__$1;(statearr_14666_14685[(1)] = (5));
} else
{var statearr_14667_14686 = state_14661__$1;(statearr_14667_14686[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14662 === (6)))
{var inst_14643 = (state_14661[(7)]);var inst_14648 = p.call(null,inst_14643);var state_14661__$1 = state_14661;if(cljs.core.truth_(inst_14648))
{var statearr_14668_14687 = state_14661__$1;(statearr_14668_14687[(1)] = (8));
} else
{var statearr_14669_14688 = state_14661__$1;(statearr_14669_14688[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14662 === (3)))
{var inst_14659 = (state_14661[(2)]);var state_14661__$1 = state_14661;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14661__$1,inst_14659);
} else
{if((state_val_14662 === (2)))
{var state_14661__$1 = state_14661;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14661__$1,(4),ch);
} else
{if((state_val_14662 === (11)))
{var inst_14651 = (state_14661[(2)]);var state_14661__$1 = state_14661;var statearr_14670_14689 = state_14661__$1;(statearr_14670_14689[(2)] = inst_14651);
(statearr_14670_14689[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14662 === (9)))
{var state_14661__$1 = state_14661;var statearr_14671_14690 = state_14661__$1;(statearr_14671_14690[(2)] = null);
(statearr_14671_14690[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14662 === (5)))
{var inst_14646 = cljs.core.async.close_BANG_.call(null,out);var state_14661__$1 = state_14661;var statearr_14672_14691 = state_14661__$1;(statearr_14672_14691[(2)] = inst_14646);
(statearr_14672_14691[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14662 === (10)))
{var inst_14654 = (state_14661[(2)]);var state_14661__$1 = (function (){var statearr_14673 = state_14661;(statearr_14673[(8)] = inst_14654);
return statearr_14673;
})();var statearr_14674_14692 = state_14661__$1;(statearr_14674_14692[(2)] = null);
(statearr_14674_14692[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14662 === (8)))
{var inst_14643 = (state_14661[(7)]);var state_14661__$1 = state_14661;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14661__$1,(11),out,inst_14643);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__7086__auto___14682,out))
;return ((function (switch__7071__auto__,c__7086__auto___14682,out){
return (function() {
var state_machine__7072__auto__ = null;
var state_machine__7072__auto____0 = (function (){var statearr_14678 = [null,null,null,null,null,null,null,null,null];(statearr_14678[(0)] = state_machine__7072__auto__);
(statearr_14678[(1)] = (1));
return statearr_14678;
});
var state_machine__7072__auto____1 = (function (state_14661){while(true){
var ret_value__7073__auto__ = (function (){try{while(true){
var result__7074__auto__ = switch__7071__auto__.call(null,state_14661);if(cljs.core.keyword_identical_QMARK_.call(null,result__7074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__7074__auto__;
}
break;
}
}catch (e14679){if((e14679 instanceof Object))
{var ex__7075__auto__ = e14679;var statearr_14680_14693 = state_14661;(statearr_14680_14693[(5)] = ex__7075__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14661);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14679;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14694 = state_14661;
state_14661 = G__14694;
continue;
}
} else
{return ret_value__7073__auto__;
}
break;
}
});
state_machine__7072__auto__ = function(state_14661){
switch(arguments.length){
case 0:
return state_machine__7072__auto____0.call(this);
case 1:
return state_machine__7072__auto____1.call(this,state_14661);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7072__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7072__auto____0;
state_machine__7072__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7072__auto____1;
return state_machine__7072__auto__;
})()
;})(switch__7071__auto__,c__7086__auto___14682,out))
})();var state__7088__auto__ = (function (){var statearr_14681 = f__7087__auto__.call(null);(statearr_14681[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7086__auto___14682);
return statearr_14681;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7088__auto__);
});})(c__7086__auto___14682,out))
);
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__7086__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__7086__auto__){
return (function (){var f__7087__auto__ = (function (){var switch__7071__auto__ = ((function (c__7086__auto__){
return (function (state_14860){var state_val_14861 = (state_14860[(1)]);if((state_val_14861 === (7)))
{var inst_14856 = (state_14860[(2)]);var state_14860__$1 = state_14860;var statearr_14862_14903 = state_14860__$1;(statearr_14862_14903[(2)] = inst_14856);
(statearr_14862_14903[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14861 === (20)))
{var inst_14826 = (state_14860[(7)]);var inst_14837 = (state_14860[(2)]);var inst_14838 = cljs.core.next.call(null,inst_14826);var inst_14812 = inst_14838;var inst_14813 = null;var inst_14814 = (0);var inst_14815 = (0);var state_14860__$1 = (function (){var statearr_14863 = state_14860;(statearr_14863[(8)] = inst_14813);
(statearr_14863[(9)] = inst_14814);
(statearr_14863[(10)] = inst_14812);
(statearr_14863[(11)] = inst_14815);
(statearr_14863[(12)] = inst_14837);
return statearr_14863;
})();var statearr_14864_14904 = state_14860__$1;(statearr_14864_14904[(2)] = null);
(statearr_14864_14904[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14861 === (1)))
{var state_14860__$1 = state_14860;var statearr_14865_14905 = state_14860__$1;(statearr_14865_14905[(2)] = null);
(statearr_14865_14905[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14861 === (4)))
{var inst_14801 = (state_14860[(13)]);var inst_14801__$1 = (state_14860[(2)]);var inst_14802 = (inst_14801__$1 == null);var state_14860__$1 = (function (){var statearr_14866 = state_14860;(statearr_14866[(13)] = inst_14801__$1);
return statearr_14866;
})();if(cljs.core.truth_(inst_14802))
{var statearr_14867_14906 = state_14860__$1;(statearr_14867_14906[(1)] = (5));
} else
{var statearr_14868_14907 = state_14860__$1;(statearr_14868_14907[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14861 === (15)))
{var state_14860__$1 = state_14860;var statearr_14872_14908 = state_14860__$1;(statearr_14872_14908[(2)] = null);
(statearr_14872_14908[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14861 === (21)))
{var state_14860__$1 = state_14860;var statearr_14873_14909 = state_14860__$1;(statearr_14873_14909[(2)] = null);
(statearr_14873_14909[(1)] = (23));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14861 === (13)))
{var inst_14813 = (state_14860[(8)]);var inst_14814 = (state_14860[(9)]);var inst_14812 = (state_14860[(10)]);var inst_14815 = (state_14860[(11)]);var inst_14822 = (state_14860[(2)]);var inst_14823 = (inst_14815 + (1));var tmp14869 = inst_14813;var tmp14870 = inst_14814;var tmp14871 = inst_14812;var inst_14812__$1 = tmp14871;var inst_14813__$1 = tmp14869;var inst_14814__$1 = tmp14870;var inst_14815__$1 = inst_14823;var state_14860__$1 = (function (){var statearr_14874 = state_14860;(statearr_14874[(8)] = inst_14813__$1);
(statearr_14874[(9)] = inst_14814__$1);
(statearr_14874[(10)] = inst_14812__$1);
(statearr_14874[(11)] = inst_14815__$1);
(statearr_14874[(14)] = inst_14822);
return statearr_14874;
})();var statearr_14875_14910 = state_14860__$1;(statearr_14875_14910[(2)] = null);
(statearr_14875_14910[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14861 === (22)))
{var state_14860__$1 = state_14860;var statearr_14876_14911 = state_14860__$1;(statearr_14876_14911[(2)] = null);
(statearr_14876_14911[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14861 === (6)))
{var inst_14801 = (state_14860[(13)]);var inst_14810 = f.call(null,inst_14801);var inst_14811 = cljs.core.seq.call(null,inst_14810);var inst_14812 = inst_14811;var inst_14813 = null;var inst_14814 = (0);var inst_14815 = (0);var state_14860__$1 = (function (){var statearr_14877 = state_14860;(statearr_14877[(8)] = inst_14813);
(statearr_14877[(9)] = inst_14814);
(statearr_14877[(10)] = inst_14812);
(statearr_14877[(11)] = inst_14815);
return statearr_14877;
})();var statearr_14878_14912 = state_14860__$1;(statearr_14878_14912[(2)] = null);
(statearr_14878_14912[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14861 === (17)))
{var inst_14826 = (state_14860[(7)]);var inst_14830 = cljs.core.chunk_first.call(null,inst_14826);var inst_14831 = cljs.core.chunk_rest.call(null,inst_14826);var inst_14832 = cljs.core.count.call(null,inst_14830);var inst_14812 = inst_14831;var inst_14813 = inst_14830;var inst_14814 = inst_14832;var inst_14815 = (0);var state_14860__$1 = (function (){var statearr_14879 = state_14860;(statearr_14879[(8)] = inst_14813);
(statearr_14879[(9)] = inst_14814);
(statearr_14879[(10)] = inst_14812);
(statearr_14879[(11)] = inst_14815);
return statearr_14879;
})();var statearr_14880_14913 = state_14860__$1;(statearr_14880_14913[(2)] = null);
(statearr_14880_14913[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14861 === (3)))
{var inst_14858 = (state_14860[(2)]);var state_14860__$1 = state_14860;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14860__$1,inst_14858);
} else
{if((state_val_14861 === (12)))
{var inst_14846 = (state_14860[(2)]);var state_14860__$1 = state_14860;var statearr_14881_14914 = state_14860__$1;(statearr_14881_14914[(2)] = inst_14846);
(statearr_14881_14914[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14861 === (2)))
{var state_14860__$1 = state_14860;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14860__$1,(4),in$);
} else
{if((state_val_14861 === (23)))
{var inst_14854 = (state_14860[(2)]);var state_14860__$1 = state_14860;var statearr_14882_14915 = state_14860__$1;(statearr_14882_14915[(2)] = inst_14854);
(statearr_14882_14915[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14861 === (19)))
{var inst_14841 = (state_14860[(2)]);var state_14860__$1 = state_14860;var statearr_14883_14916 = state_14860__$1;(statearr_14883_14916[(2)] = inst_14841);
(statearr_14883_14916[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14861 === (11)))
{var inst_14812 = (state_14860[(10)]);var inst_14826 = (state_14860[(7)]);var inst_14826__$1 = cljs.core.seq.call(null,inst_14812);var state_14860__$1 = (function (){var statearr_14884 = state_14860;(statearr_14884[(7)] = inst_14826__$1);
return statearr_14884;
})();if(inst_14826__$1)
{var statearr_14885_14917 = state_14860__$1;(statearr_14885_14917[(1)] = (14));
} else
{var statearr_14886_14918 = state_14860__$1;(statearr_14886_14918[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14861 === (9)))
{var inst_14848 = (state_14860[(2)]);var inst_14849 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_14860__$1 = (function (){var statearr_14887 = state_14860;(statearr_14887[(15)] = inst_14848);
return statearr_14887;
})();if(cljs.core.truth_(inst_14849))
{var statearr_14888_14919 = state_14860__$1;(statearr_14888_14919[(1)] = (21));
} else
{var statearr_14889_14920 = state_14860__$1;(statearr_14889_14920[(1)] = (22));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14861 === (5)))
{var inst_14804 = cljs.core.async.close_BANG_.call(null,out);var state_14860__$1 = state_14860;var statearr_14890_14921 = state_14860__$1;(statearr_14890_14921[(2)] = inst_14804);
(statearr_14890_14921[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14861 === (14)))
{var inst_14826 = (state_14860[(7)]);var inst_14828 = cljs.core.chunked_seq_QMARK_.call(null,inst_14826);var state_14860__$1 = state_14860;if(inst_14828)
{var statearr_14891_14922 = state_14860__$1;(statearr_14891_14922[(1)] = (17));
} else
{var statearr_14892_14923 = state_14860__$1;(statearr_14892_14923[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14861 === (16)))
{var inst_14844 = (state_14860[(2)]);var state_14860__$1 = state_14860;var statearr_14893_14924 = state_14860__$1;(statearr_14893_14924[(2)] = inst_14844);
(statearr_14893_14924[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14861 === (10)))
{var inst_14813 = (state_14860[(8)]);var inst_14815 = (state_14860[(11)]);var inst_14820 = cljs.core._nth.call(null,inst_14813,inst_14815);var state_14860__$1 = state_14860;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14860__$1,(13),out,inst_14820);
} else
{if((state_val_14861 === (18)))
{var inst_14826 = (state_14860[(7)]);var inst_14835 = cljs.core.first.call(null,inst_14826);var state_14860__$1 = state_14860;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14860__$1,(20),out,inst_14835);
} else
{if((state_val_14861 === (8)))
{var inst_14814 = (state_14860[(9)]);var inst_14815 = (state_14860[(11)]);var inst_14817 = (inst_14815 < inst_14814);var inst_14818 = inst_14817;var state_14860__$1 = state_14860;if(cljs.core.truth_(inst_14818))
{var statearr_14894_14925 = state_14860__$1;(statearr_14894_14925[(1)] = (10));
} else
{var statearr_14895_14926 = state_14860__$1;(statearr_14895_14926[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7086__auto__))
;return ((function (switch__7071__auto__,c__7086__auto__){
return (function() {
var state_machine__7072__auto__ = null;
var state_machine__7072__auto____0 = (function (){var statearr_14899 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14899[(0)] = state_machine__7072__auto__);
(statearr_14899[(1)] = (1));
return statearr_14899;
});
var state_machine__7072__auto____1 = (function (state_14860){while(true){
var ret_value__7073__auto__ = (function (){try{while(true){
var result__7074__auto__ = switch__7071__auto__.call(null,state_14860);if(cljs.core.keyword_identical_QMARK_.call(null,result__7074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__7074__auto__;
}
break;
}
}catch (e14900){if((e14900 instanceof Object))
{var ex__7075__auto__ = e14900;var statearr_14901_14927 = state_14860;(statearr_14901_14927[(5)] = ex__7075__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14860);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14900;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14928 = state_14860;
state_14860 = G__14928;
continue;
}
} else
{return ret_value__7073__auto__;
}
break;
}
});
state_machine__7072__auto__ = function(state_14860){
switch(arguments.length){
case 0:
return state_machine__7072__auto____0.call(this);
case 1:
return state_machine__7072__auto____1.call(this,state_14860);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7072__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7072__auto____0;
state_machine__7072__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7072__auto____1;
return state_machine__7072__auto__;
})()
;})(switch__7071__auto__,c__7086__auto__))
})();var state__7088__auto__ = (function (){var statearr_14902 = f__7087__auto__.call(null);(statearr_14902[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7086__auto__);
return statearr_14902;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7088__auto__);
});})(c__7086__auto__))
);
return c__7086__auto__;
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__7086__auto___15025 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__7086__auto___15025,out){
return (function (){var f__7087__auto__ = (function (){var switch__7071__auto__ = ((function (c__7086__auto___15025,out){
return (function (state_15000){var state_val_15001 = (state_15000[(1)]);if((state_val_15001 === (7)))
{var inst_14995 = (state_15000[(2)]);var state_15000__$1 = state_15000;var statearr_15002_15026 = state_15000__$1;(statearr_15002_15026[(2)] = inst_14995);
(statearr_15002_15026[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15001 === (1)))
{var inst_14977 = null;var state_15000__$1 = (function (){var statearr_15003 = state_15000;(statearr_15003[(7)] = inst_14977);
return statearr_15003;
})();var statearr_15004_15027 = state_15000__$1;(statearr_15004_15027[(2)] = null);
(statearr_15004_15027[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15001 === (4)))
{var inst_14980 = (state_15000[(8)]);var inst_14980__$1 = (state_15000[(2)]);var inst_14981 = (inst_14980__$1 == null);var inst_14982 = cljs.core.not.call(null,inst_14981);var state_15000__$1 = (function (){var statearr_15005 = state_15000;(statearr_15005[(8)] = inst_14980__$1);
return statearr_15005;
})();if(inst_14982)
{var statearr_15006_15028 = state_15000__$1;(statearr_15006_15028[(1)] = (5));
} else
{var statearr_15007_15029 = state_15000__$1;(statearr_15007_15029[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15001 === (6)))
{var state_15000__$1 = state_15000;var statearr_15008_15030 = state_15000__$1;(statearr_15008_15030[(2)] = null);
(statearr_15008_15030[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15001 === (3)))
{var inst_14997 = (state_15000[(2)]);var inst_14998 = cljs.core.async.close_BANG_.call(null,out);var state_15000__$1 = (function (){var statearr_15009 = state_15000;(statearr_15009[(9)] = inst_14997);
return statearr_15009;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15000__$1,inst_14998);
} else
{if((state_val_15001 === (2)))
{var state_15000__$1 = state_15000;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15000__$1,(4),ch);
} else
{if((state_val_15001 === (11)))
{var inst_14980 = (state_15000[(8)]);var inst_14989 = (state_15000[(2)]);var inst_14977 = inst_14980;var state_15000__$1 = (function (){var statearr_15010 = state_15000;(statearr_15010[(7)] = inst_14977);
(statearr_15010[(10)] = inst_14989);
return statearr_15010;
})();var statearr_15011_15031 = state_15000__$1;(statearr_15011_15031[(2)] = null);
(statearr_15011_15031[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15001 === (9)))
{var inst_14980 = (state_15000[(8)]);var state_15000__$1 = state_15000;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15000__$1,(11),out,inst_14980);
} else
{if((state_val_15001 === (5)))
{var inst_14977 = (state_15000[(7)]);var inst_14980 = (state_15000[(8)]);var inst_14984 = cljs.core._EQ_.call(null,inst_14980,inst_14977);var state_15000__$1 = state_15000;if(inst_14984)
{var statearr_15013_15032 = state_15000__$1;(statearr_15013_15032[(1)] = (8));
} else
{var statearr_15014_15033 = state_15000__$1;(statearr_15014_15033[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15001 === (10)))
{var inst_14992 = (state_15000[(2)]);var state_15000__$1 = state_15000;var statearr_15015_15034 = state_15000__$1;(statearr_15015_15034[(2)] = inst_14992);
(statearr_15015_15034[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15001 === (8)))
{var inst_14977 = (state_15000[(7)]);var tmp15012 = inst_14977;var inst_14977__$1 = tmp15012;var state_15000__$1 = (function (){var statearr_15016 = state_15000;(statearr_15016[(7)] = inst_14977__$1);
return statearr_15016;
})();var statearr_15017_15035 = state_15000__$1;(statearr_15017_15035[(2)] = null);
(statearr_15017_15035[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__7086__auto___15025,out))
;return ((function (switch__7071__auto__,c__7086__auto___15025,out){
return (function() {
var state_machine__7072__auto__ = null;
var state_machine__7072__auto____0 = (function (){var statearr_15021 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_15021[(0)] = state_machine__7072__auto__);
(statearr_15021[(1)] = (1));
return statearr_15021;
});
var state_machine__7072__auto____1 = (function (state_15000){while(true){
var ret_value__7073__auto__ = (function (){try{while(true){
var result__7074__auto__ = switch__7071__auto__.call(null,state_15000);if(cljs.core.keyword_identical_QMARK_.call(null,result__7074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__7074__auto__;
}
break;
}
}catch (e15022){if((e15022 instanceof Object))
{var ex__7075__auto__ = e15022;var statearr_15023_15036 = state_15000;(statearr_15023_15036[(5)] = ex__7075__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15000);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e15022;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15037 = state_15000;
state_15000 = G__15037;
continue;
}
} else
{return ret_value__7073__auto__;
}
break;
}
});
state_machine__7072__auto__ = function(state_15000){
switch(arguments.length){
case 0:
return state_machine__7072__auto____0.call(this);
case 1:
return state_machine__7072__auto____1.call(this,state_15000);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7072__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7072__auto____0;
state_machine__7072__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7072__auto____1;
return state_machine__7072__auto__;
})()
;})(switch__7071__auto__,c__7086__auto___15025,out))
})();var state__7088__auto__ = (function (){var statearr_15024 = f__7087__auto__.call(null);(statearr_15024[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7086__auto___15025);
return statearr_15024;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7088__auto__);
});})(c__7086__auto___15025,out))
);
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__7086__auto___15172 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__7086__auto___15172,out){
return (function (){var f__7087__auto__ = (function (){var switch__7071__auto__ = ((function (c__7086__auto___15172,out){
return (function (state_15142){var state_val_15143 = (state_15142[(1)]);if((state_val_15143 === (7)))
{var inst_15138 = (state_15142[(2)]);var state_15142__$1 = state_15142;var statearr_15144_15173 = state_15142__$1;(statearr_15144_15173[(2)] = inst_15138);
(statearr_15144_15173[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15143 === (1)))
{var inst_15105 = (new Array(n));var inst_15106 = inst_15105;var inst_15107 = (0);var state_15142__$1 = (function (){var statearr_15145 = state_15142;(statearr_15145[(7)] = inst_15106);
(statearr_15145[(8)] = inst_15107);
return statearr_15145;
})();var statearr_15146_15174 = state_15142__$1;(statearr_15146_15174[(2)] = null);
(statearr_15146_15174[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15143 === (4)))
{var inst_15110 = (state_15142[(9)]);var inst_15110__$1 = (state_15142[(2)]);var inst_15111 = (inst_15110__$1 == null);var inst_15112 = cljs.core.not.call(null,inst_15111);var state_15142__$1 = (function (){var statearr_15147 = state_15142;(statearr_15147[(9)] = inst_15110__$1);
return statearr_15147;
})();if(inst_15112)
{var statearr_15148_15175 = state_15142__$1;(statearr_15148_15175[(1)] = (5));
} else
{var statearr_15149_15176 = state_15142__$1;(statearr_15149_15176[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15143 === (15)))
{var inst_15132 = (state_15142[(2)]);var state_15142__$1 = state_15142;var statearr_15150_15177 = state_15142__$1;(statearr_15150_15177[(2)] = inst_15132);
(statearr_15150_15177[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15143 === (13)))
{var state_15142__$1 = state_15142;var statearr_15151_15178 = state_15142__$1;(statearr_15151_15178[(2)] = null);
(statearr_15151_15178[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15143 === (6)))
{var inst_15107 = (state_15142[(8)]);var inst_15128 = (inst_15107 > (0));var state_15142__$1 = state_15142;if(cljs.core.truth_(inst_15128))
{var statearr_15152_15179 = state_15142__$1;(statearr_15152_15179[(1)] = (12));
} else
{var statearr_15153_15180 = state_15142__$1;(statearr_15153_15180[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15143 === (3)))
{var inst_15140 = (state_15142[(2)]);var state_15142__$1 = state_15142;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15142__$1,inst_15140);
} else
{if((state_val_15143 === (12)))
{var inst_15106 = (state_15142[(7)]);var inst_15130 = cljs.core.vec.call(null,inst_15106);var state_15142__$1 = state_15142;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15142__$1,(15),out,inst_15130);
} else
{if((state_val_15143 === (2)))
{var state_15142__$1 = state_15142;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15142__$1,(4),ch);
} else
{if((state_val_15143 === (11)))
{var inst_15122 = (state_15142[(2)]);var inst_15123 = (new Array(n));var inst_15106 = inst_15123;var inst_15107 = (0);var state_15142__$1 = (function (){var statearr_15154 = state_15142;(statearr_15154[(10)] = inst_15122);
(statearr_15154[(7)] = inst_15106);
(statearr_15154[(8)] = inst_15107);
return statearr_15154;
})();var statearr_15155_15181 = state_15142__$1;(statearr_15155_15181[(2)] = null);
(statearr_15155_15181[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15143 === (9)))
{var inst_15106 = (state_15142[(7)]);var inst_15120 = cljs.core.vec.call(null,inst_15106);var state_15142__$1 = state_15142;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15142__$1,(11),out,inst_15120);
} else
{if((state_val_15143 === (5)))
{var inst_15106 = (state_15142[(7)]);var inst_15110 = (state_15142[(9)]);var inst_15107 = (state_15142[(8)]);var inst_15115 = (state_15142[(11)]);var inst_15114 = (inst_15106[inst_15107] = inst_15110);var inst_15115__$1 = (inst_15107 + (1));var inst_15116 = (inst_15115__$1 < n);var state_15142__$1 = (function (){var statearr_15156 = state_15142;(statearr_15156[(12)] = inst_15114);
(statearr_15156[(11)] = inst_15115__$1);
return statearr_15156;
})();if(cljs.core.truth_(inst_15116))
{var statearr_15157_15182 = state_15142__$1;(statearr_15157_15182[(1)] = (8));
} else
{var statearr_15158_15183 = state_15142__$1;(statearr_15158_15183[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15143 === (14)))
{var inst_15135 = (state_15142[(2)]);var inst_15136 = cljs.core.async.close_BANG_.call(null,out);var state_15142__$1 = (function (){var statearr_15160 = state_15142;(statearr_15160[(13)] = inst_15135);
return statearr_15160;
})();var statearr_15161_15184 = state_15142__$1;(statearr_15161_15184[(2)] = inst_15136);
(statearr_15161_15184[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15143 === (10)))
{var inst_15126 = (state_15142[(2)]);var state_15142__$1 = state_15142;var statearr_15162_15185 = state_15142__$1;(statearr_15162_15185[(2)] = inst_15126);
(statearr_15162_15185[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15143 === (8)))
{var inst_15106 = (state_15142[(7)]);var inst_15115 = (state_15142[(11)]);var tmp15159 = inst_15106;var inst_15106__$1 = tmp15159;var inst_15107 = inst_15115;var state_15142__$1 = (function (){var statearr_15163 = state_15142;(statearr_15163[(7)] = inst_15106__$1);
(statearr_15163[(8)] = inst_15107);
return statearr_15163;
})();var statearr_15164_15186 = state_15142__$1;(statearr_15164_15186[(2)] = null);
(statearr_15164_15186[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7086__auto___15172,out))
;return ((function (switch__7071__auto__,c__7086__auto___15172,out){
return (function() {
var state_machine__7072__auto__ = null;
var state_machine__7072__auto____0 = (function (){var statearr_15168 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15168[(0)] = state_machine__7072__auto__);
(statearr_15168[(1)] = (1));
return statearr_15168;
});
var state_machine__7072__auto____1 = (function (state_15142){while(true){
var ret_value__7073__auto__ = (function (){try{while(true){
var result__7074__auto__ = switch__7071__auto__.call(null,state_15142);if(cljs.core.keyword_identical_QMARK_.call(null,result__7074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__7074__auto__;
}
break;
}
}catch (e15169){if((e15169 instanceof Object))
{var ex__7075__auto__ = e15169;var statearr_15170_15187 = state_15142;(statearr_15170_15187[(5)] = ex__7075__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15142);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e15169;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15188 = state_15142;
state_15142 = G__15188;
continue;
}
} else
{return ret_value__7073__auto__;
}
break;
}
});
state_machine__7072__auto__ = function(state_15142){
switch(arguments.length){
case 0:
return state_machine__7072__auto____0.call(this);
case 1:
return state_machine__7072__auto____1.call(this,state_15142);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7072__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7072__auto____0;
state_machine__7072__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7072__auto____1;
return state_machine__7072__auto__;
})()
;})(switch__7071__auto__,c__7086__auto___15172,out))
})();var state__7088__auto__ = (function (){var statearr_15171 = f__7087__auto__.call(null);(statearr_15171[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7086__auto___15172);
return statearr_15171;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7088__auto__);
});})(c__7086__auto___15172,out))
);
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__7086__auto___15331 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__7086__auto___15331,out){
return (function (){var f__7087__auto__ = (function (){var switch__7071__auto__ = ((function (c__7086__auto___15331,out){
return (function (state_15301){var state_val_15302 = (state_15301[(1)]);if((state_val_15302 === (7)))
{var inst_15297 = (state_15301[(2)]);var state_15301__$1 = state_15301;var statearr_15303_15332 = state_15301__$1;(statearr_15303_15332[(2)] = inst_15297);
(statearr_15303_15332[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15302 === (1)))
{var inst_15260 = [];var inst_15261 = inst_15260;var inst_15262 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_15301__$1 = (function (){var statearr_15304 = state_15301;(statearr_15304[(7)] = inst_15261);
(statearr_15304[(8)] = inst_15262);
return statearr_15304;
})();var statearr_15305_15333 = state_15301__$1;(statearr_15305_15333[(2)] = null);
(statearr_15305_15333[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15302 === (4)))
{var inst_15265 = (state_15301[(9)]);var inst_15265__$1 = (state_15301[(2)]);var inst_15266 = (inst_15265__$1 == null);var inst_15267 = cljs.core.not.call(null,inst_15266);var state_15301__$1 = (function (){var statearr_15306 = state_15301;(statearr_15306[(9)] = inst_15265__$1);
return statearr_15306;
})();if(inst_15267)
{var statearr_15307_15334 = state_15301__$1;(statearr_15307_15334[(1)] = (5));
} else
{var statearr_15308_15335 = state_15301__$1;(statearr_15308_15335[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15302 === (15)))
{var inst_15291 = (state_15301[(2)]);var state_15301__$1 = state_15301;var statearr_15309_15336 = state_15301__$1;(statearr_15309_15336[(2)] = inst_15291);
(statearr_15309_15336[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15302 === (13)))
{var state_15301__$1 = state_15301;var statearr_15310_15337 = state_15301__$1;(statearr_15310_15337[(2)] = null);
(statearr_15310_15337[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15302 === (6)))
{var inst_15261 = (state_15301[(7)]);var inst_15286 = inst_15261.length;var inst_15287 = (inst_15286 > (0));var state_15301__$1 = state_15301;if(cljs.core.truth_(inst_15287))
{var statearr_15311_15338 = state_15301__$1;(statearr_15311_15338[(1)] = (12));
} else
{var statearr_15312_15339 = state_15301__$1;(statearr_15312_15339[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15302 === (3)))
{var inst_15299 = (state_15301[(2)]);var state_15301__$1 = state_15301;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15301__$1,inst_15299);
} else
{if((state_val_15302 === (12)))
{var inst_15261 = (state_15301[(7)]);var inst_15289 = cljs.core.vec.call(null,inst_15261);var state_15301__$1 = state_15301;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15301__$1,(15),out,inst_15289);
} else
{if((state_val_15302 === (2)))
{var state_15301__$1 = state_15301;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15301__$1,(4),ch);
} else
{if((state_val_15302 === (11)))
{var inst_15265 = (state_15301[(9)]);var inst_15269 = (state_15301[(10)]);var inst_15279 = (state_15301[(2)]);var inst_15280 = [];var inst_15281 = inst_15280.push(inst_15265);var inst_15261 = inst_15280;var inst_15262 = inst_15269;var state_15301__$1 = (function (){var statearr_15313 = state_15301;(statearr_15313[(11)] = inst_15281);
(statearr_15313[(7)] = inst_15261);
(statearr_15313[(8)] = inst_15262);
(statearr_15313[(12)] = inst_15279);
return statearr_15313;
})();var statearr_15314_15340 = state_15301__$1;(statearr_15314_15340[(2)] = null);
(statearr_15314_15340[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15302 === (9)))
{var inst_15261 = (state_15301[(7)]);var inst_15277 = cljs.core.vec.call(null,inst_15261);var state_15301__$1 = state_15301;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15301__$1,(11),out,inst_15277);
} else
{if((state_val_15302 === (5)))
{var inst_15265 = (state_15301[(9)]);var inst_15269 = (state_15301[(10)]);var inst_15262 = (state_15301[(8)]);var inst_15269__$1 = f.call(null,inst_15265);var inst_15270 = cljs.core._EQ_.call(null,inst_15269__$1,inst_15262);var inst_15271 = cljs.core.keyword_identical_QMARK_.call(null,inst_15262,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_15272 = (inst_15270) || (inst_15271);var state_15301__$1 = (function (){var statearr_15315 = state_15301;(statearr_15315[(10)] = inst_15269__$1);
return statearr_15315;
})();if(cljs.core.truth_(inst_15272))
{var statearr_15316_15341 = state_15301__$1;(statearr_15316_15341[(1)] = (8));
} else
{var statearr_15317_15342 = state_15301__$1;(statearr_15317_15342[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15302 === (14)))
{var inst_15294 = (state_15301[(2)]);var inst_15295 = cljs.core.async.close_BANG_.call(null,out);var state_15301__$1 = (function (){var statearr_15319 = state_15301;(statearr_15319[(13)] = inst_15294);
return statearr_15319;
})();var statearr_15320_15343 = state_15301__$1;(statearr_15320_15343[(2)] = inst_15295);
(statearr_15320_15343[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15302 === (10)))
{var inst_15284 = (state_15301[(2)]);var state_15301__$1 = state_15301;var statearr_15321_15344 = state_15301__$1;(statearr_15321_15344[(2)] = inst_15284);
(statearr_15321_15344[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15302 === (8)))
{var inst_15265 = (state_15301[(9)]);var inst_15269 = (state_15301[(10)]);var inst_15261 = (state_15301[(7)]);var inst_15274 = inst_15261.push(inst_15265);var tmp15318 = inst_15261;var inst_15261__$1 = tmp15318;var inst_15262 = inst_15269;var state_15301__$1 = (function (){var statearr_15322 = state_15301;(statearr_15322[(7)] = inst_15261__$1);
(statearr_15322[(8)] = inst_15262);
(statearr_15322[(14)] = inst_15274);
return statearr_15322;
})();var statearr_15323_15345 = state_15301__$1;(statearr_15323_15345[(2)] = null);
(statearr_15323_15345[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7086__auto___15331,out))
;return ((function (switch__7071__auto__,c__7086__auto___15331,out){
return (function() {
var state_machine__7072__auto__ = null;
var state_machine__7072__auto____0 = (function (){var statearr_15327 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15327[(0)] = state_machine__7072__auto__);
(statearr_15327[(1)] = (1));
return statearr_15327;
});
var state_machine__7072__auto____1 = (function (state_15301){while(true){
var ret_value__7073__auto__ = (function (){try{while(true){
var result__7074__auto__ = switch__7071__auto__.call(null,state_15301);if(cljs.core.keyword_identical_QMARK_.call(null,result__7074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__7074__auto__;
}
break;
}
}catch (e15328){if((e15328 instanceof Object))
{var ex__7075__auto__ = e15328;var statearr_15329_15346 = state_15301;(statearr_15329_15346[(5)] = ex__7075__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15301);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e15328;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15347 = state_15301;
state_15301 = G__15347;
continue;
}
} else
{return ret_value__7073__auto__;
}
break;
}
});
state_machine__7072__auto__ = function(state_15301){
switch(arguments.length){
case 0:
return state_machine__7072__auto____0.call(this);
case 1:
return state_machine__7072__auto____1.call(this,state_15301);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7072__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7072__auto____0;
state_machine__7072__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7072__auto____1;
return state_machine__7072__auto__;
})()
;})(switch__7071__auto__,c__7086__auto___15331,out))
})();var state__7088__auto__ = (function (){var statearr_15330 = f__7087__auto__.call(null);(statearr_15330[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7086__auto___15331);
return statearr_15330;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7088__auto__);
});})(c__7086__auto___15331,out))
);
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map