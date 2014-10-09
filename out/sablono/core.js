// Compiled by ClojureScript 0.0-2356
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('clojure.string');
goog.require('sablono.util');
goog.require('goog.dom');
goog.require('goog.dom');
goog.require('sablono.interpreter');
goog.require('sablono.interpreter');
goog.require('sablono.util');
goog.require('clojure.walk');
goog.require('clojure.string');
/**
* Add an optional attribute argument to a function that returns a element vector.
*/
sablono.core.wrap_attrs = (function wrap_attrs(func){return (function() { 
var G__15464__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__15463 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__15463,(0),null);var body = cljs.core.nthnext.call(null,vec__15463,(1));if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__15464 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__15464__delegate.call(this,args);};
G__15464.cljs$lang$maxFixedArity = 0;
G__15464.cljs$lang$applyTo = (function (arglist__15465){
var args = cljs.core.seq(arglist__15465);
return G__15464__delegate(args);
});
G__15464.cljs$core$IFn$_invoke$arity$variadic = G__15464__delegate;
return G__15464;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4377__auto__ = (function iter__15470(s__15471){return (new cljs.core.LazySeq(null,(function (){var s__15471__$1 = s__15471;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__15471__$1);if(temp__4126__auto__)
{var s__15471__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__15471__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__15471__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__15473 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__15472 = (0);while(true){
if((i__15472 < size__4376__auto__))
{var args = cljs.core._nth.call(null,c__4375__auto__,i__15472);cljs.core.chunk_append.call(null,b__15473,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));
{
var G__15474 = (i__15472 + (1));
i__15472 = G__15474;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15473),iter__15470.call(null,cljs.core.chunk_rest.call(null,s__15471__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15473),null);
}
} else
{var args = cljs.core.first.call(null,s__15471__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),iter__15470.call(null,cljs.core.rest.call(null,s__15471__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4377__auto__.call(null,arglists);
});
/**
* Render the React `component` as an HTML string.
*/
sablono.core.render = (function render(component){return React.renderComponentToString(component);
});
/**
* Include a list of external stylesheet files.
* @param {...*} var_args
*/
sablono.core.include_css = (function() { 
var include_css__delegate = function (styles){var iter__4377__auto__ = (function iter__15479(s__15480){return (new cljs.core.LazySeq(null,(function (){var s__15480__$1 = s__15480;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__15480__$1);if(temp__4126__auto__)
{var s__15480__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__15480__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__15480__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__15482 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__15481 = (0);while(true){
if((i__15481 < size__4376__auto__))
{var style = cljs.core._nth.call(null,c__4375__auto__,i__15481);cljs.core.chunk_append.call(null,b__15482,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));
{
var G__15483 = (i__15481 + (1));
i__15481 = G__15483;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15482),iter__15479.call(null,cljs.core.chunk_rest.call(null,s__15480__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15482),null);
}
} else
{var style = cljs.core.first.call(null,s__15480__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),iter__15479.call(null,cljs.core.rest.call(null,s__15480__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4377__auto__.call(null,styles);
};
var include_css = function (var_args){
var styles = null;if (arguments.length > 0) {
  styles = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return include_css__delegate.call(this,styles);};
include_css.cljs$lang$maxFixedArity = 0;
include_css.cljs$lang$applyTo = (function (arglist__15484){
var styles = cljs.core.seq(arglist__15484);
return include_css__delegate(styles);
});
include_css.cljs$core$IFn$_invoke$arity$variadic = include_css__delegate;
return include_css;
})()
;
/**
* Include the JavaScript library at `src`.
*/
sablono.core.include_js = (function include_js(src){return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",{"src": src}));
});
/**
* Include Facebook's React JavaScript library.
*/
sablono.core.include_react = (function include_react(){return sablono.core.include_js.call(null,"http://fb.me/react-0.9.0.js");
});
/**
* Wraps some content in a HTML hyperlink with the supplied URL.
* @param {...*} var_args
*/
sablono.core.link_to15485 = (function() { 
var link_to15485__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to15485 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to15485__delegate.call(this,url,content);};
link_to15485.cljs$lang$maxFixedArity = 1;
link_to15485.cljs$lang$applyTo = (function (arglist__15486){
var url = cljs.core.first(arglist__15486);
var content = cljs.core.rest(arglist__15486);
return link_to15485__delegate(url,content);
});
link_to15485.cljs$core$IFn$_invoke$arity$variadic = link_to15485__delegate;
return link_to15485;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to15485);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to15487 = (function() { 
var mail_to15487__delegate = function (e_mail,p__15488){var vec__15490 = p__15488;var content = cljs.core.nth.call(null,vec__15490,(0),null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),("mailto:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail))], null),(function (){var or__3639__auto__ = content;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to15487 = function (e_mail,var_args){
var p__15488 = null;if (arguments.length > 1) {
  p__15488 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to15487__delegate.call(this,e_mail,p__15488);};
mail_to15487.cljs$lang$maxFixedArity = 1;
mail_to15487.cljs$lang$applyTo = (function (arglist__15491){
var e_mail = cljs.core.first(arglist__15491);
var p__15488 = cljs.core.rest(arglist__15491);
return mail_to15487__delegate(e_mail,p__15488);
});
mail_to15487.cljs$core$IFn$_invoke$arity$variadic = mail_to15487__delegate;
return mail_to15487;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to15487);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list15492 = (function unordered_list15492(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4377__auto__ = (function iter__15497(s__15498){return (new cljs.core.LazySeq(null,(function (){var s__15498__$1 = s__15498;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__15498__$1);if(temp__4126__auto__)
{var s__15498__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__15498__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__15498__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__15500 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__15499 = (0);while(true){
if((i__15499 < size__4376__auto__))
{var x = cljs.core._nth.call(null,c__4375__auto__,i__15499);cljs.core.chunk_append.call(null,b__15500,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__15501 = (i__15499 + (1));
i__15499 = G__15501;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15500),iter__15497.call(null,cljs.core.chunk_rest.call(null,s__15498__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15500),null);
}
} else
{var x = cljs.core.first.call(null,s__15498__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__15497.call(null,cljs.core.rest.call(null,s__15498__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4377__auto__.call(null,coll);
})()], null);
});
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list15492);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list15502 = (function ordered_list15502(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4377__auto__ = (function iter__15507(s__15508){return (new cljs.core.LazySeq(null,(function (){var s__15508__$1 = s__15508;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__15508__$1);if(temp__4126__auto__)
{var s__15508__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__15508__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__15508__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__15510 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__15509 = (0);while(true){
if((i__15509 < size__4376__auto__))
{var x = cljs.core._nth.call(null,c__4375__auto__,i__15509);cljs.core.chunk_append.call(null,b__15510,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__15511 = (i__15509 + (1));
i__15509 = G__15511;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15510),iter__15507.call(null,cljs.core.chunk_rest.call(null,s__15508__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15510),null);
}
} else
{var x = cljs.core.first.call(null,s__15508__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__15507.call(null,cljs.core.rest.call(null,s__15508__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4377__auto__.call(null,coll);
})()], null);
});
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list15502);
/**
* Create an image element.
*/
sablono.core.image15512 = (function() {
var image15512 = null;
var image15512__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});
var image15512__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});
image15512 = function(src,alt){
switch(arguments.length){
case 1:
return image15512__1.call(this,src);
case 2:
return image15512__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image15512.cljs$core$IFn$_invoke$arity$1 = image15512__1;
image15512.cljs$core$IFn$_invoke$arity$2 = image15512__2;
return image15512;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image15512);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__15513_SHARP_,p2__15514_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__15513_SHARP_)+"["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__15514_SHARP_)+"]");
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__15515_SHARP_,p2__15516_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__15515_SHARP_)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__15516_SHARP_));
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Creates a new <input> element.
*/
sablono.core.input_field_STAR_ = (function input_field_STAR_(type,name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
/**
* Creates a color input field.
*/
sablono.core.color_field15517 = (function() {
var color_field15517 = null;
var color_field15517__1 = (function (name__5127__auto__){return color_field15517.call(null,name__5127__auto__,null);
});
var color_field15517__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))),name__5127__auto__,value__5128__auto__);
});
color_field15517 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return color_field15517__1.call(this,name__5127__auto__);
case 2:
return color_field15517__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field15517.cljs$core$IFn$_invoke$arity$1 = color_field15517__1;
color_field15517.cljs$core$IFn$_invoke$arity$2 = color_field15517__2;
return color_field15517;
})()
;
sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field15517);
/**
* Creates a date input field.
*/
sablono.core.date_field15518 = (function() {
var date_field15518 = null;
var date_field15518__1 = (function (name__5127__auto__){return date_field15518.call(null,name__5127__auto__,null);
});
var date_field15518__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))),name__5127__auto__,value__5128__auto__);
});
date_field15518 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return date_field15518__1.call(this,name__5127__auto__);
case 2:
return date_field15518__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field15518.cljs$core$IFn$_invoke$arity$1 = date_field15518__1;
date_field15518.cljs$core$IFn$_invoke$arity$2 = date_field15518__2;
return date_field15518;
})()
;
sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field15518);
/**
* Creates a datetime input field.
*/
sablono.core.datetime_field15519 = (function() {
var datetime_field15519 = null;
var datetime_field15519__1 = (function (name__5127__auto__){return datetime_field15519.call(null,name__5127__auto__,null);
});
var datetime_field15519__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))),name__5127__auto__,value__5128__auto__);
});
datetime_field15519 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return datetime_field15519__1.call(this,name__5127__auto__);
case 2:
return datetime_field15519__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field15519.cljs$core$IFn$_invoke$arity$1 = datetime_field15519__1;
datetime_field15519.cljs$core$IFn$_invoke$arity$2 = datetime_field15519__2;
return datetime_field15519;
})()
;
sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field15519);
/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field15520 = (function() {
var datetime_local_field15520 = null;
var datetime_local_field15520__1 = (function (name__5127__auto__){return datetime_local_field15520.call(null,name__5127__auto__,null);
});
var datetime_local_field15520__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))),name__5127__auto__,value__5128__auto__);
});
datetime_local_field15520 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return datetime_local_field15520__1.call(this,name__5127__auto__);
case 2:
return datetime_local_field15520__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field15520.cljs$core$IFn$_invoke$arity$1 = datetime_local_field15520__1;
datetime_local_field15520.cljs$core$IFn$_invoke$arity$2 = datetime_local_field15520__2;
return datetime_local_field15520;
})()
;
sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field15520);
/**
* Creates a email input field.
*/
sablono.core.email_field15521 = (function() {
var email_field15521 = null;
var email_field15521__1 = (function (name__5127__auto__){return email_field15521.call(null,name__5127__auto__,null);
});
var email_field15521__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))),name__5127__auto__,value__5128__auto__);
});
email_field15521 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return email_field15521__1.call(this,name__5127__auto__);
case 2:
return email_field15521__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field15521.cljs$core$IFn$_invoke$arity$1 = email_field15521__1;
email_field15521.cljs$core$IFn$_invoke$arity$2 = email_field15521__2;
return email_field15521;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field15521);
/**
* Creates a file input field.
*/
sablono.core.file_field15522 = (function() {
var file_field15522 = null;
var file_field15522__1 = (function (name__5127__auto__){return file_field15522.call(null,name__5127__auto__,null);
});
var file_field15522__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))),name__5127__auto__,value__5128__auto__);
});
file_field15522 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return file_field15522__1.call(this,name__5127__auto__);
case 2:
return file_field15522__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field15522.cljs$core$IFn$_invoke$arity$1 = file_field15522__1;
file_field15522.cljs$core$IFn$_invoke$arity$2 = file_field15522__2;
return file_field15522;
})()
;
sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field15522);
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field15523 = (function() {
var hidden_field15523 = null;
var hidden_field15523__1 = (function (name__5127__auto__){return hidden_field15523.call(null,name__5127__auto__,null);
});
var hidden_field15523__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))),name__5127__auto__,value__5128__auto__);
});
hidden_field15523 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return hidden_field15523__1.call(this,name__5127__auto__);
case 2:
return hidden_field15523__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field15523.cljs$core$IFn$_invoke$arity$1 = hidden_field15523__1;
hidden_field15523.cljs$core$IFn$_invoke$arity$2 = hidden_field15523__2;
return hidden_field15523;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field15523);
/**
* Creates a month input field.
*/
sablono.core.month_field15524 = (function() {
var month_field15524 = null;
var month_field15524__1 = (function (name__5127__auto__){return month_field15524.call(null,name__5127__auto__,null);
});
var month_field15524__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))),name__5127__auto__,value__5128__auto__);
});
month_field15524 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return month_field15524__1.call(this,name__5127__auto__);
case 2:
return month_field15524__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field15524.cljs$core$IFn$_invoke$arity$1 = month_field15524__1;
month_field15524.cljs$core$IFn$_invoke$arity$2 = month_field15524__2;
return month_field15524;
})()
;
sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field15524);
/**
* Creates a number input field.
*/
sablono.core.number_field15525 = (function() {
var number_field15525 = null;
var number_field15525__1 = (function (name__5127__auto__){return number_field15525.call(null,name__5127__auto__,null);
});
var number_field15525__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))),name__5127__auto__,value__5128__auto__);
});
number_field15525 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return number_field15525__1.call(this,name__5127__auto__);
case 2:
return number_field15525__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field15525.cljs$core$IFn$_invoke$arity$1 = number_field15525__1;
number_field15525.cljs$core$IFn$_invoke$arity$2 = number_field15525__2;
return number_field15525;
})()
;
sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field15525);
/**
* Creates a password input field.
*/
sablono.core.password_field15526 = (function() {
var password_field15526 = null;
var password_field15526__1 = (function (name__5127__auto__){return password_field15526.call(null,name__5127__auto__,null);
});
var password_field15526__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))),name__5127__auto__,value__5128__auto__);
});
password_field15526 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return password_field15526__1.call(this,name__5127__auto__);
case 2:
return password_field15526__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field15526.cljs$core$IFn$_invoke$arity$1 = password_field15526__1;
password_field15526.cljs$core$IFn$_invoke$arity$2 = password_field15526__2;
return password_field15526;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field15526);
/**
* Creates a range input field.
*/
sablono.core.range_field15527 = (function() {
var range_field15527 = null;
var range_field15527__1 = (function (name__5127__auto__){return range_field15527.call(null,name__5127__auto__,null);
});
var range_field15527__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))),name__5127__auto__,value__5128__auto__);
});
range_field15527 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return range_field15527__1.call(this,name__5127__auto__);
case 2:
return range_field15527__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field15527.cljs$core$IFn$_invoke$arity$1 = range_field15527__1;
range_field15527.cljs$core$IFn$_invoke$arity$2 = range_field15527__2;
return range_field15527;
})()
;
sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field15527);
/**
* Creates a search input field.
*/
sablono.core.search_field15528 = (function() {
var search_field15528 = null;
var search_field15528__1 = (function (name__5127__auto__){return search_field15528.call(null,name__5127__auto__,null);
});
var search_field15528__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))),name__5127__auto__,value__5128__auto__);
});
search_field15528 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return search_field15528__1.call(this,name__5127__auto__);
case 2:
return search_field15528__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field15528.cljs$core$IFn$_invoke$arity$1 = search_field15528__1;
search_field15528.cljs$core$IFn$_invoke$arity$2 = search_field15528__2;
return search_field15528;
})()
;
sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field15528);
/**
* Creates a tel input field.
*/
sablono.core.tel_field15529 = (function() {
var tel_field15529 = null;
var tel_field15529__1 = (function (name__5127__auto__){return tel_field15529.call(null,name__5127__auto__,null);
});
var tel_field15529__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))),name__5127__auto__,value__5128__auto__);
});
tel_field15529 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return tel_field15529__1.call(this,name__5127__auto__);
case 2:
return tel_field15529__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field15529.cljs$core$IFn$_invoke$arity$1 = tel_field15529__1;
tel_field15529.cljs$core$IFn$_invoke$arity$2 = tel_field15529__2;
return tel_field15529;
})()
;
sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field15529);
/**
* Creates a text input field.
*/
sablono.core.text_field15530 = (function() {
var text_field15530 = null;
var text_field15530__1 = (function (name__5127__auto__){return text_field15530.call(null,name__5127__auto__,null);
});
var text_field15530__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))),name__5127__auto__,value__5128__auto__);
});
text_field15530 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return text_field15530__1.call(this,name__5127__auto__);
case 2:
return text_field15530__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field15530.cljs$core$IFn$_invoke$arity$1 = text_field15530__1;
text_field15530.cljs$core$IFn$_invoke$arity$2 = text_field15530__2;
return text_field15530;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field15530);
/**
* Creates a time input field.
*/
sablono.core.time_field15531 = (function() {
var time_field15531 = null;
var time_field15531__1 = (function (name__5127__auto__){return time_field15531.call(null,name__5127__auto__,null);
});
var time_field15531__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))),name__5127__auto__,value__5128__auto__);
});
time_field15531 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return time_field15531__1.call(this,name__5127__auto__);
case 2:
return time_field15531__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field15531.cljs$core$IFn$_invoke$arity$1 = time_field15531__1;
time_field15531.cljs$core$IFn$_invoke$arity$2 = time_field15531__2;
return time_field15531;
})()
;
sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field15531);
/**
* Creates a url input field.
*/
sablono.core.url_field15532 = (function() {
var url_field15532 = null;
var url_field15532__1 = (function (name__5127__auto__){return url_field15532.call(null,name__5127__auto__,null);
});
var url_field15532__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))),name__5127__auto__,value__5128__auto__);
});
url_field15532 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return url_field15532__1.call(this,name__5127__auto__);
case 2:
return url_field15532__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field15532.cljs$core$IFn$_invoke$arity$1 = url_field15532__1;
url_field15532.cljs$core$IFn$_invoke$arity$2 = url_field15532__2;
return url_field15532;
})()
;
sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field15532);
/**
* Creates a week input field.
*/
sablono.core.week_field15533 = (function() {
var week_field15533 = null;
var week_field15533__1 = (function (name__5127__auto__){return week_field15533.call(null,name__5127__auto__,null);
});
var week_field15533__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))),name__5127__auto__,value__5128__auto__);
});
week_field15533 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return week_field15533__1.call(this,name__5127__auto__);
case 2:
return week_field15533__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field15533.cljs$core$IFn$_invoke$arity$1 = week_field15533__1;
week_field15533.cljs$core$IFn$_invoke$arity$2 = week_field15533__2;
return week_field15533;
})()
;
sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field15533);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box15534 = (function() {
var check_box15534 = null;
var check_box15534__1 = (function (name){return check_box15534.call(null,name,null);
});
var check_box15534__2 = (function (name,checked_QMARK_){return check_box15534.call(null,name,checked_QMARK_,"true");
});
var check_box15534__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
check_box15534 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box15534__1.call(this,name);
case 2:
return check_box15534__2.call(this,name,checked_QMARK_);
case 3:
return check_box15534__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box15534.cljs$core$IFn$_invoke$arity$1 = check_box15534__1;
check_box15534.cljs$core$IFn$_invoke$arity$2 = check_box15534__2;
check_box15534.cljs$core$IFn$_invoke$arity$3 = check_box15534__3;
return check_box15534;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box15534);
/**
* Creates a radio button.
*/
sablono.core.radio_button15535 = (function() {
var radio_button15535 = null;
var radio_button15535__1 = (function (group){return radio_button15535.call(null,group,null);
});
var radio_button15535__2 = (function (group,checked_QMARK_){return radio_button15535.call(null,group,checked_QMARK_,"true");
});
var radio_button15535__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value)))),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
radio_button15535 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button15535__1.call(this,group);
case 2:
return radio_button15535__2.call(this,group,checked_QMARK_);
case 3:
return radio_button15535__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button15535.cljs$core$IFn$_invoke$arity$1 = radio_button15535__1;
radio_button15535.cljs$core$IFn$_invoke$arity$2 = radio_button15535__2;
radio_button15535.cljs$core$IFn$_invoke$arity$3 = radio_button15535__3;
return radio_button15535;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button15535);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options15536 = (function() {
var select_options15536 = null;
var select_options15536__1 = (function (coll){return select_options15536.call(null,coll,null);
});
var select_options15536__2 = (function (coll,selected){var iter__4377__auto__ = (function iter__15545(s__15546){return (new cljs.core.LazySeq(null,(function (){var s__15546__$1 = s__15546;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__15546__$1);if(temp__4126__auto__)
{var s__15546__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__15546__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__15546__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__15548 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__15547 = (0);while(true){
if((i__15547 < size__4376__auto__))
{var x = cljs.core._nth.call(null,c__4375__auto__,i__15547);cljs.core.chunk_append.call(null,b__15548,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__15551 = x;var text = cljs.core.nth.call(null,vec__15551,(0),null);var val = cljs.core.nth.call(null,vec__15551,(1),null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__15551,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options15536.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__15553 = (i__15547 + (1));
i__15547 = G__15553;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15548),iter__15545.call(null,cljs.core.chunk_rest.call(null,s__15546__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15548),null);
}
} else
{var x = cljs.core.first.call(null,s__15546__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__15552 = x;var text = cljs.core.nth.call(null,vec__15552,(0),null);var val = cljs.core.nth.call(null,vec__15552,(1),null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__15552,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options15536.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__15545.call(null,cljs.core.rest.call(null,s__15546__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4377__auto__.call(null,coll);
});
select_options15536 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options15536__1.call(this,coll);
case 2:
return select_options15536__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options15536.cljs$core$IFn$_invoke$arity$1 = select_options15536__1;
select_options15536.cljs$core$IFn$_invoke$arity$2 = select_options15536__2;
return select_options15536;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options15536);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down15554 = (function() {
var drop_down15554 = null;
var drop_down15554__2 = (function (name,options){return drop_down15554.call(null,name,options,null);
});
var drop_down15554__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down15554 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down15554__2.call(this,name,options);
case 3:
return drop_down15554__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down15554.cljs$core$IFn$_invoke$arity$2 = drop_down15554__2;
drop_down15554.cljs$core$IFn$_invoke$arity$3 = drop_down15554__3;
return drop_down15554;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down15554);
/**
* Creates a text area element.
*/
sablono.core.text_area15555 = (function() {
var text_area15555 = null;
var text_area15555__1 = (function (name){return text_area15555.call(null,name,null);
});
var text_area15555__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
text_area15555 = function(name,value){
switch(arguments.length){
case 1:
return text_area15555__1.call(this,name);
case 2:
return text_area15555__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area15555.cljs$core$IFn$_invoke$arity$1 = text_area15555__1;
text_area15555.cljs$core$IFn$_invoke$arity$2 = text_area15555__2;
return text_area15555;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area15555);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label15556 = (function label15556(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label15556);
/**
* Creates a submit button.
*/
sablono.core.submit_button15557 = (function submit_button15557(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button15557);
/**
* Creates a form reset button.
*/
sablono.core.reset_button15558 = (function reset_button15558(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button15558);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to15559 = (function() { 
var form_to15559__delegate = function (p__15560,body){var vec__15562 = p__15560;var method = cljs.core.nth.call(null,vec__15562,(0),null);var action = cljs.core.nth.call(null,vec__15562,(1),null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to15559 = function (p__15560,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to15559__delegate.call(this,p__15560,body);};
form_to15559.cljs$lang$maxFixedArity = 1;
form_to15559.cljs$lang$applyTo = (function (arglist__15563){
var p__15560 = cljs.core.first(arglist__15563);
var body = cljs.core.rest(arglist__15563);
return form_to15559__delegate(p__15560,body);
});
form_to15559.cljs$core$IFn$_invoke$arity$variadic = form_to15559__delegate;
return form_to15559;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to15559);

//# sourceMappingURL=core.js.map