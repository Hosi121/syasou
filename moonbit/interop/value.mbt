// JavaScript values cross the Wasm boundary only through typed conversions.

///|
#external
pub type Any

///|
pub(open) trait ToJs {
  fn to_js(Self) -> Any
}

///|
pub(open) trait FromJs {
  fn from_js(Any) -> Self
}

///|
pub fn[T : ToJs] any(value : T) -> Any {
  value.to_js()
}

///|
pub fn[T : FromJs] Any::cast(value : Any) -> T {
  T::from_js(value)
}

///|
pub impl ToJs for Any with fn to_js(self) {
  self
}

///|
pub impl FromJs for Any with fn from_js(value) {
  value
}

///|
pub fn[A, B] identity(value : A) -> B = "%identity"

///|
#cfg(target="js")
extern "js" fn int_to_js(v : Int) -> Any =
  #| v => v

///|
#cfg(target="js")
extern "js" fn int_from_js(v : Any) -> Int =
  #| v => v

///|
pub impl ToJs for Int with fn to_js(self) {
  int_to_js(self)
}

///|
pub impl FromJs for Int with fn from_js(value) {
  int_from_js(value)
}

///|
#cfg(target="js")
extern "js" fn double_to_js(v : Double) -> Any =
  #| v => v

///|
#cfg(target="js")
extern "js" fn double_from_js(v : Any) -> Double =
  #| v => v

///|
pub impl ToJs for Double with fn to_js(self) {
  double_to_js(self)
}

///|
pub impl FromJs for Double with fn from_js(value) {
  double_from_js(value)
}

///|
#cfg(target="js")
extern "js" fn bool_to_js(v : Bool) -> Any =
  #| v => Boolean(v)

///|
#cfg(target="js")
extern "js" fn bool_from_js(v : Any) -> Bool =
  #| v => Boolean(v)

///|
pub impl ToJs for Bool with fn to_js(self) {
  bool_to_js(self)
}

///|
pub impl FromJs for Bool with fn from_js(value) {
  bool_from_js(value)
}

///|
#cfg(target="js")
extern "js" fn string_to_js(v : String) -> Any =
  #| v => v

///|
#cfg(target="js")
extern "js" fn string_from_js(v : Any) -> String =
  #| v => v

///|
pub impl ToJs for String with fn to_js(self) {
  string_to_js(self)
}

///|
pub impl FromJs for String with fn from_js(value) {
  string_from_js(value)
}

///|
#cfg(target="js")
extern "js" fn unit_to_js(v : Unit) -> Any =
  #| () => undefined

///|
#cfg(target="js")
extern "js" fn unit_from_js(v : Any) -> Unit =
  #| () => {}

///|
pub impl ToJs for Unit with fn to_js(self) {
  unit_to_js(self)
}

///|
pub impl FromJs for Unit with fn from_js(value) {
  unit_from_js(value)
}

///|
pub impl[T : ToJs] ToJs for Array[T] with fn to_js(self) {
  let out = new_array()
  for item in self {
    array_push(out, any(item))
  }
  out
}

///|
pub impl[T : FromJs] FromJs for Array[T] with fn from_js(value) {
  let count : Int = value._get("length").cast()
  Array::makei(count, i => value._get_index(i).cast())
}

///|
pub impl[T : ToJs] ToJs for FixedArray[T] with fn to_js(self) {
  any(self.iter().to_array())
}

///|
pub impl[T : FromJs] FromJs for FixedArray[T] with fn from_js(value) {
  let items : Array[T] = value.cast()
  FixedArray::makei(items.length(), i => items[i])
}

///|
pub impl[T : ToJs] ToJs for T? with fn to_js(self) {
  match self {
    Some(v) => any(v)
    None => undefined()
  }
}

///|
pub impl[T : FromJs] FromJs for T? with fn from_js(value) {
  if is_nullish(value) {
    None
  } else {
    Some(value.cast())
  }
}

///|
#external
pub type Nullable[T]

///|
pub fn[T : FromJs] Nullable::to_option(self : Nullable[T]) -> T? {
  (identity(self) : Any).cast()
}

///|
pub fn[T] Nullable::null() -> Nullable[T] {
  identity(null())
}

///|
pub fn[T : ToJs] Nullable::new(value : T) -> Nullable[T] {
  identity(any(value))
}

///|
pub(open) trait Same {
  fn same(Self, Self) -> Bool
}

///|
pub impl Same for Int with fn same(a, b) {
  a == b
}

///|
pub impl Same for Double with fn same(a, b) {
  same_host(any(a), any(b))
}

///|
pub impl Same for Bool with fn same(a, b) {
  a == b
}

///|
pub impl Same for String with fn same(a, b) {
  a == b
}

///|
pub impl Same for Any with fn same(a, b) {
  same_host(a, b)
}

///|
pub impl[T : Same] Same for T? with fn same(a, b) {
  match (a, b) {
    (Some(a), Some(b)) => a.same(b)
    (None, None) => true
    _ => false
  }
}

///|
#cfg(target="js")
pub extern "js" fn same_host(a : Any, b : Any) -> Bool =
  #| Object.is

///|
#cfg(target="js")
pub extern "js" fn array_push(array : Any, value : Any) -> Unit =
  #| (array,value) => {array.push(value)}
