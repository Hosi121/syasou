///|
#cfg(target="js")
pub extern "js" fn Any::_get(self : Any, key : String) -> Any =
  #| (o,k) => o[k]

///|
#cfg(target="js")
pub extern "js" fn Any::_get_index(self : Any, key : Int) -> Any =
  #| (o,k) => o[k]

///|
#cfg(target="js")
pub extern "js" fn Any::_set(self : Any, key : String, value : Any) -> Unit =
  #| (o,k,v) => {o[k]=v}

///|
#cfg(target="js")
pub extern "js" fn call(obj : Any, name : String, args : Any) -> Any =
  #| (o,k,a) => o[k](...a)

///|
#cfg(target="js")
pub extern "js" fn invoke(obj : Any, args : Any) -> Any =
  #| (f,a) => f(...a)

///|
#cfg(target="js")
pub extern "js" fn new_object() -> Any =
  #| () => ({})

///|
#cfg(target="js")
pub extern "js" fn new_array() -> Any =
  #| () => []

///|
#cfg(target="js")
pub extern "js" fn null() -> Any =
  #| () => null

///|
#cfg(target="js")
pub extern "js" fn undefined() -> Any =
  #| () => undefined

///|
#cfg(target="js")
pub extern "js" fn is_null(value : Any) -> Bool =
  #| v => v === null

///|
#cfg(target="js")
pub extern "js" fn is_undefined(value : Any) -> Bool =
  #| v => v === undefined

///|
#cfg(target="js")
pub extern "js" fn is_nullish(value : Any) -> Bool =
  #| v => v == null

///|
#cfg(target="js")
pub extern "js" fn is_array(value : Any) -> Bool =
  #| Array.isArray

///|
#cfg(target="js")
pub extern "js" fn typeof_(value : Any) -> String =
  #| v => typeof v

///|
#cfg(target="js")
pub extern "js" fn json_parse(value : String) -> Any =
  #| JSON.parse

///|
#cfg(target="js")
pub extern "js" fn json_stringify(value : Any) -> String =
  #| JSON.stringify

///|
#cfg(target="js")
pub extern "js" fn object_assign(target : Any, source : Any) -> Any =
  #| Object.assign

///|
#cfg(target="js")
pub extern "js" fn Any::to_string(self : Any) -> String =
  #| String

///|
#cfg(target="js")
pub extern "js" fn throw_error(message : String) -> Unit =
  #| message => {throw new Error(message)}

///|
#cfg(target="js")
pub extern "js" fn ffi_try(run : () -> Any) -> Any =
  #| run => {try {return {ok:true,value:run()}} catch(error) {return {ok:false,value:error}}}

///|
#cfg(target="js")
pub extern "js" fn ffi_function0(f : () -> Any) -> Any =
  #| f => f

///|
#cfg(target="js")
pub extern "js" fn ffi_function1(f : (Any) -> Any) -> Any =
  #| f => f

///|
#cfg(target="js")
pub extern "js" fn ffi_function2(f : (Any, Any) -> Any) -> Any =
  #| f => f

///|
pub fn Any::_call(self : Any, name : String, args : Array[Any]) -> Any {
  call(self, name, any(args))
}

///|
pub fn Any::_invoke(self : Any, args : Array[Any]) -> Any {
  invoke(self, any(args))
}

///|
pub suberror HostError {
  HostError(Any)
}

///|
pub fn try_sync(run : () -> Any) -> Any raise {
  let result = ffi_try(run)
  if (result._get("ok").cast() : Bool) {
    result._get("value")
  } else {
    raise HostError(result._get("value"))
  }
}

///|
pub fn[R : ToJs] from_fn0(f : () -> R) -> Any {
  ffi_function0(() => any(f()))
}

///|
pub fn[A : FromJs, R : ToJs] from_fn1(f : (A) -> R) -> Any {
  ffi_function1(a => any(f(a.cast())))
}

///|
pub fn[A : FromJs, B : FromJs, R : ToJs] from_fn2(f : (A, B) -> R) -> Any {
  ffi_function2((a, b) => any(f(a.cast(), b.cast())))
}

///|
pub fn[R : FromJs] to_fn0(value : Any) -> () -> R {
  () => value._invoke([]).cast()
}

///|
pub fn[A : ToJs, R : FromJs] to_fn1(value : Any) -> (A) -> R {
  a => value._invoke([any(a)]).cast()
}
