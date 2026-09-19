function _M0TPB4IterGRP26mizchi8js__core3AnyE(param0, param1) {
  this.f = param0;
  this.size_hint = param1;
}
class $PanicError extends Error {}
function $panic() {
  throw new $PanicError();
}
function $oob() {
  throw new Error("Index out of bounds");
}
const _M0MPB7JSArray4push = (arr, val) => { arr.push(val); };
function _M0TPB8MutLocalGiE(param0) {
  this.val = param0;
}
function _M0DTPC16option6OptionGRP26mizchi8js__core3AnyE4None() {}
_M0DTPC16option6OptionGRP26mizchi8js__core3AnyE4None.prototype.$tag = 0;
const _M0DTPC16option6OptionGRP26mizchi8js__core3AnyE4None__ = new _M0DTPC16option6OptionGRP26mizchi8js__core3AnyE4None();
function _M0DTPC16option6OptionGRP26mizchi8js__core3AnyE4Some(param0) {
  this._0 = param0;
}
_M0DTPC16option6OptionGRP26mizchi8js__core3AnyE4Some.prototype.$tag = 1;
function _M0TPB9ArrayViewGRP26mizchi8js__core3AnyE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0DTPC16option6OptionGdE4None() {}
_M0DTPC16option6OptionGdE4None.prototype.$tag = 0;
const _M0DTPC16option6OptionGdE4None__ = new _M0DTPC16option6OptionGdE4None();
function _M0DTPC16option6OptionGdE4Some(param0) {
  this._0 = param0;
}
_M0DTPC16option6OptionGdE4Some.prototype.$tag = 1;
function _M0TP37Hosi1216syasou6domain6Ticket(param0, param1, param2, param3, param4, param5, param6, param7) {
  this.id = param0;
  this.kind = param1;
  this.started_at = param2;
  this.arrived_at = param3;
  this.speed = param4;
  this.scene = param5;
  this.title = param6;
  this.note = param7;
}
function _M0DTP37Hosi1216syasou6domain12TravelChange10KeepTravel() {}
_M0DTP37Hosi1216syasou6domain12TravelChange10KeepTravel.prototype.$tag = 0;
const _M0DTP37Hosi1216syasou6domain12TravelChange10KeepTravel__ = new _M0DTP37Hosi1216syasou6domain12TravelChange10KeepTravel();
function _M0DTP37Hosi1216syasou6domain12TravelChange6Update(param0, param1, param2) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
}
_M0DTP37Hosi1216syasou6domain12TravelChange6Update.prototype.$tag = 1;
function _M0DTP37Hosi1216syasou6domain12TicketChange11KeepTickets() {}
_M0DTP37Hosi1216syasou6domain12TicketChange11KeepTickets.prototype.$tag = 0;
const _M0DTP37Hosi1216syasou6domain12TicketChange11KeepTickets__ = new _M0DTP37Hosi1216syasou6domain12TicketChange11KeepTickets();
function _M0DTP37Hosi1216syasou6domain12TicketChange7Prepend(param0) {
  this._0 = param0;
}
_M0DTP37Hosi1216syasou6domain12TicketChange7Prepend.prototype.$tag = 1;
function _M0DTP37Hosi1216syasou6domain12TicketChange11EditTickets(param0) {
  this._0 = param0;
}
_M0DTP37Hosi1216syasou6domain12TicketChange11EditTickets.prototype.$tag = 2;
function _M0DTP37Hosi1216syasou6domain13JourneyChange4Keep() {}
_M0DTP37Hosi1216syasou6domain13JourneyChange4Keep.prototype.$tag = 0;
const _M0DTP37Hosi1216syasou6domain13JourneyChange4Keep__ = new _M0DTP37Hosi1216syasou6domain13JourneyChange4Keep();
function _M0DTP37Hosi1216syasou6domain13JourneyChange7Replace(param0) {
  this._0 = param0;
}
_M0DTP37Hosi1216syasou6domain13JourneyChange7Replace.prototype.$tag = 1;
function _M0DTP37Hosi1216syasou6domain13JourneyChange5Patch(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP37Hosi1216syasou6domain13JourneyChange5Patch.prototype.$tag = 2;
function _M0TP37Hosi1216syasou6domain7Journey(param0, param1, param2, param3, param4, param5, param6, param7, param8, param9, param10) {
  this.phase = param0;
  this.running = param1;
  this.deadline = param2;
  this.remaining = param3;
  this.focus_minutes = param4;
  this.rest_minutes = param5;
  this.id = param6;
  this.started_at = param7;
  this.arrived_at = param8;
  this.speed = param9;
  this.scene = param10;
}
const _M0FP26mizchi8js__core9undefined = () => undefined;
const _M0MP26mizchi8js__core3Any5__get = (obj, key) => obj[key];
const _M0FP26mizchi8js__core11is__nullish = (v) => v == null;
const _M0MP26mizchi8js__core3Any5__set = (obj, key, value) => { obj[key] = value };
const _M0FP26mizchi8js__core4null = () => null;
const _M0FP26mizchi8js__core11new__object = () => ({});
const _M0FP26mizchi8js__core14object__assign = (target, source) => Object.assign(target, source);
function _M0TP37Hosi1216syasou6domain6Travel(param0, param1, param2) {
  this.journey = param0;
  this.tickets = param1;
  this.pending_arrival_id = param2;
}
function _M0DTP37Hosi1216syasou6domain13JourneyAction5Start(param0, param1, param2, param3, param4, param5) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
  this._3 = param3;
  this._4 = param4;
  this._5 = param5;
}
_M0DTP37Hosi1216syasou6domain13JourneyAction5Start.prototype.$tag = 0;
function _M0DTP37Hosi1216syasou6domain13JourneyAction4Tick(param0) {
  this._0 = param0;
}
_M0DTP37Hosi1216syasou6domain13JourneyAction4Tick.prototype.$tag = 1;
function _M0DTP37Hosi1216syasou6domain13JourneyAction6Toggle(param0) {
  this._0 = param0;
}
_M0DTP37Hosi1216syasou6domain13JourneyAction6Toggle.prototype.$tag = 2;
function _M0DTP37Hosi1216syasou6domain13JourneyAction6Finish(param0) {
  this._0 = param0;
}
_M0DTP37Hosi1216syasou6domain13JourneyAction6Finish.prototype.$tag = 3;
function _M0DTP37Hosi1216syasou6domain12TravelAction12JourneyEvent(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP37Hosi1216syasou6domain12TravelAction12JourneyEvent.prototype.$tag = 0;
function _M0DTP37Hosi1216syasou6domain12TravelAction7Welcome(param0) {
  this._0 = param0;
}
_M0DTP37Hosi1216syasou6domain12TravelAction7Welcome.prototype.$tag = 1;
function _M0DTP37Hosi1216syasou6domain12TravelAction11Acknowledge() {}
_M0DTP37Hosi1216syasou6domain12TravelAction11Acknowledge.prototype.$tag = 2;
const _M0DTP37Hosi1216syasou6domain12TravelAction11Acknowledge__ = new _M0DTP37Hosi1216syasou6domain12TravelAction11Acknowledge();
function _M0DTP37Hosi1216syasou6domain12TravelAction4Edit(param0, param1, param2) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
}
_M0DTP37Hosi1216syasou6domain12TravelAction4Edit.prototype.$tag = 3;
const _M0MPB4Iter4nextN6constrS9918GRP26mizchi8js__core3AnyE = 0;
const _M0MPB4Iter4nextN6constrS9919GRP26mizchi8js__core3AnyE = 0;
const _M0MPB4Iter3newN6constrS9926GRP26mizchi8js__core3AnyE = 0;
const _M0FP37Hosi1216syasou6domain14reduce__travelN7_2abindS192 = "welcome-v1";
const _M0FP37Hosi1216syasou6domain14reduce__travelN7_2abindS194 = "local";
const _M0FP37Hosi1216syasou6domain14reduce__travelN7_2abindS195 = "mist";
const _M0FP37Hosi1216syasou6domain14reduce__travelN7_2abindS196 = "はじめての窓辺";
const _M0FP37Hosi1216syasou6domain14reduce__travelN7_2abindS197 = "車窓へ、ようこそ。\nこれは、旅のしおりをめくった記念の一枚。\n\n次の切符には、あなたが進めたことを。\nどうぞ、自分のペースで。";
const _M0FP37Hosi1216syasou6domain14reduce__travelN6constrS198 = "welcome";
const _M0FP37Hosi1216syasou6domain14reduce__travelN7_2abindS193 = "welcome";
function _M0IP016_24default__implPB2Eq10not__equalGRP37Hosi1216syasou6domain5PhaseE(x, y) {
  return !_M0IP37Hosi1216syasou6domain5PhasePB2Eq5equal(x, y);
}
function _M0MPB4Iter4nextGRP26mizchi8js__core3AnyE(self) {
  const _func = self.f;
  const result = _func();
  const _bind = self.size_hint;
  if (result.$tag === 1) {
    if (_bind === undefined) {
    } else {
      const _Some = _bind;
      const _n = _Some;
      self.size_hint = _n > 0 ? _n - 1 | 0 : _M0MPB4Iter4nextN6constrS9918GRP26mizchi8js__core3AnyE;
    }
  } else {
    self.size_hint = _M0MPB4Iter4nextN6constrS9919GRP26mizchi8js__core3AnyE;
  }
  return result;
}
function _M0MPB4Iter3newGRP26mizchi8js__core3AnyE(f, size_hint) {
  let size_hint$2;
  if (size_hint === undefined) {
    size_hint$2 = undefined;
  } else {
    const _Some = size_hint;
    const _n = _Some;
    size_hint$2 = _n > 0 ? _n : _M0MPB4Iter3newN6constrS9926GRP26mizchi8js__core3AnyE;
  }
  return new _M0TPB4IterGRP26mizchi8js__core3AnyE(f, size_hint$2);
}
function _M0MPC15array5Array4pushGRP26mizchi8js__core3AnyE(self, value) {
  _M0MPB7JSArray4push(self, value);
}
function _M0MPC15array9ArrayView4iterGRP26mizchi8js__core3AnyE(self) {
  const i = new _M0TPB8MutLocalGiE(0);
  const len = self.end - self.start | 0;
  return _M0MPB4Iter3newGRP26mizchi8js__core3AnyE(() => {
    if (i.val < len) {
      const elem = self.buf[self.start + i.val | 0];
      i.val = i.val + 1 | 0;
      return new _M0DTPC16option6OptionGRP26mizchi8js__core3AnyE4Some(elem);
    } else {
      return _M0DTPC16option6OptionGRP26mizchi8js__core3AnyE4None__;
    }
  }, len);
}
function _M0MPC15array5Array4iterGRP26mizchi8js__core3AnyE(self) {
  return _M0MPC15array9ArrayView4iterGRP26mizchi8js__core3AnyE(new _M0TPB9ArrayViewGRP26mizchi8js__core3AnyE(self, 0, self.length));
}
function _M0IPC16option6OptionPB2Eq5equalGsE(self, other) {
  if (self === undefined) {
    return other === undefined;
  } else {
    const _Some = self;
    const _x = _Some;
    if (other === undefined) {
      return false;
    } else {
      const _Some$2 = other;
      const _y = _Some$2;
      return _x === _y;
    }
  }
}
function _M0MPC16option6Option10unwrap__orGsE(self, default_) {
  if (self === undefined) {
    return default_;
  } else {
    const _Some = self;
    const _t = _Some;
    return _t;
  }
}
function _M0MPC16option6Option10unwrap__orGdE(self, default_) {
  if (self.$tag === 1) {
    const _Some = self;
    const _t = _Some._0;
    return _t;
  } else {
    return default_;
  }
}
function _M0MPC16option6Option3mapGddE(self, f) {
  if (self.$tag === 1) {
    const _Some = self;
    const _t = _Some._0;
    return new _M0DTPC16option6OptionGdE4Some(f(_t));
  } else {
    return _M0DTPC16option6OptionGdE4None__;
  }
}
function _M0MPC16double6Double3min(self, other) {
  return self !== self ? other : other !== other ? self : self < other ? self : other;
}
function _M0MPC16double6Double3max(self, other) {
  return self !== self ? other : other !== other ? self : self > other ? self : other;
}
function _M0MPC15array5Array2atGRP26mizchi8js__core3AnyE(self, index) {
  const len = self.length;
  return index >= 0 && index < len ? self[index] : $panic();
}
function _M0MPC15array5Array10push__iterGRP26mizchi8js__core3AnyE(self, iter) {
  const _bind = iter.size_hint;
  if (_bind === undefined) {
  }
  while (true) {
    const _bind$2 = _M0MPB4Iter4nextGRP26mizchi8js__core3AnyE(iter);
    if (_bind$2.$tag === 1) {
      const _Some = _bind$2;
      const _x = _Some._0;
      _M0MPC15array5Array4pushGRP26mizchi8js__core3AnyE(self, _x);
      continue;
    } else {
      return;
    }
  }
}
function _M0IP37Hosi1216syasou6domain5PhasePB2Eq5equal(_x_82, _x_83) {
  switch (_x_82) {
    case 0: {
      if (_x_83 === 0) {
        return true;
      } else {
        return false;
      }
    }
    case 1: {
      if (_x_83 === 1) {
        return true;
      } else {
        return false;
      }
    }
    case 2: {
      if (_x_83 === 2) {
        return true;
      } else {
        return false;
      }
    }
    default: {
      if (_x_83 === 3) {
        return true;
      } else {
        return false;
      }
    }
  }
}
function _M0FP37Hosi1216syasou6domain11limit__text(text, limit) {
  const _p = text.length;
  return text.substring(0, _p < limit ? _p : limit);
}
function _M0FP37Hosi1216syasou6domain14js__whitespace(code) {
  const _bind = code;
  switch (_bind) {
    case 9: {
      return true;
    }
    case 10: {
      return true;
    }
    case 11: {
      return true;
    }
    case 12: {
      return true;
    }
    case 13: {
      return true;
    }
    case 32: {
      return true;
    }
    case 160: {
      return true;
    }
    case 5760: {
      return true;
    }
    case 8192: {
      return true;
    }
    case 8193: {
      return true;
    }
    case 8194: {
      return true;
    }
    case 8195: {
      return true;
    }
    case 8196: {
      return true;
    }
    case 8197: {
      return true;
    }
    case 8198: {
      return true;
    }
    case 8199: {
      return true;
    }
    case 8200: {
      return true;
    }
    case 8201: {
      return true;
    }
    case 8202: {
      return true;
    }
    case 8232: {
      return true;
    }
    case 8233: {
      return true;
    }
    case 8239: {
      return true;
    }
    case 8287: {
      return true;
    }
    case 12288: {
      return true;
    }
    case 65279: {
      return true;
    }
    default: {
      return false;
    }
  }
}
function _M0FP37Hosi1216syasou6domain17title__from__note(note) {
  let start = 0;
  let end = note.length;
  while (true) {
    let _tmp;
    if (start < end) {
      const _tmp$2 = start;
      _tmp = _M0FP37Hosi1216syasou6domain14js__whitespace(_tmp$2 >>> 0 < note.length ? note.charCodeAt(_tmp$2) : $oob());
    } else {
      _tmp = false;
    }
    if (_tmp) {
      start = start + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  while (true) {
    let _tmp;
    if (end > start) {
      const _tmp$2 = end - 1 | 0;
      _tmp = _M0FP37Hosi1216syasou6domain14js__whitespace(_tmp$2 >>> 0 < note.length ? note.charCodeAt(_tmp$2) : $oob());
    } else {
      _tmp = false;
    }
    if (_tmp) {
      end = end - 1 | 0;
      continue;
    } else {
      break;
    }
  }
  let line_end = start;
  while (true) {
    let _tmp;
    if (line_end < end) {
      const _tmp$2 = line_end;
      _tmp = (_tmp$2 >>> 0 < note.length ? note.charCodeAt(_tmp$2) : $oob()) !== 10;
    } else {
      _tmp = false;
    }
    if (_tmp) {
      line_end = line_end + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return _M0FP37Hosi1216syasou6domain11limit__text(note.substring(start, line_end), 80);
}
function _M0FP37Hosi1216syasou6domain11number__max(a, b) {
  return a !== a ? a : b !== b ? b : a === 0 && b === 0 ? (1 / a > 0 || 1 / b > 0 ? 0 : -0) : _M0MPC16double6Double3max(a, b);
}
function _M0FP37Hosi1216syasou6domain16collect__arrival(journey, tickets, note) {
  _L: {
    const _bind = journey.id;
    if (_bind === undefined) {
      break _L;
    } else {
      const _Some = _bind;
      const _id = _Some;
      const _p = "";
      if (!(_id === _p)) {
        const _bind$2 = journey.started_at;
        if (_bind$2.$tag === 1) {
          const _Some$2 = _bind$2;
          const _started_at = _Some$2._0;
          const _bind$3 = journey.arrived_at;
          if (_bind$3.$tag === 1) {
            const _Some$3 = _bind$3;
            const _arrived_at = _Some$3._0;
            let _tmp;
            let _p$2;
            _L$2: {
              _L$3: {
                const _p$3 = tickets.length;
                let _tmp$2 = 0;
                while (true) {
                  const _p$4 = _tmp$2;
                  if (_p$4 < _p$3) {
                    const _p$5 = tickets[_p$4];
                    if (_p$5.id === _id) {
                      _p$2 = true;
                      break _L$3;
                    }
                    _tmp$2 = _p$4 + 1 | 0;
                    continue;
                  } else {
                    break;
                  }
                }
                _tmp = false;
                break _L$2;
              }
              _tmp = _p$2;
            }
            if (_tmp) {
              return undefined;
            }
            return new _M0TP37Hosi1216syasou6domain6Ticket(_id, undefined, _started_at, _M0FP37Hosi1216syasou6domain11number__max(_started_at, _arrived_at), _M0MPC16option6Option10unwrap__orGsE(journey.speed, "local"), _M0MPC16option6Option10unwrap__orGsE(journey.scene, "mist"), _M0FP37Hosi1216syasou6domain17title__from__note(note), _M0FP37Hosi1216syasou6domain11limit__text(note, 300));
          } else {
            return undefined;
          }
        } else {
          return undefined;
        }
      } else {
        break _L;
      }
    }
  }
  return undefined;
}
function _M0MP37Hosi1216syasou6domain13JourneyChange5value(self, previous) {
  switch (self.$tag) {
    case 0: {
      return previous;
    }
    case 1: {
      const _Replace = self;
      const _next = _Replace._0;
      return _next;
    }
    default: {
      const _Patch = self;
      const _next$2 = _Patch._0;
      return _next$2;
    }
  }
}
function _M0FP37Hosi1216syasou6domain15arrival__change(state, change, note, force) {
  const _bind = _M0FP37Hosi1216syasou6domain16collect__arrival(_M0MP37Hosi1216syasou6domain13JourneyChange5value(change, state.journey), state.tickets, note);
  if (_bind === undefined) {
    if (change.$tag === 0) {
      return force ? new _M0DTP37Hosi1216syasou6domain12TravelChange6Update(_M0DTP37Hosi1216syasou6domain13JourneyChange4Keep__, _M0DTP37Hosi1216syasou6domain12TicketChange11KeepTickets__, state.pending_arrival_id) : _M0DTP37Hosi1216syasou6domain12TravelChange10KeepTravel__;
    } else {
      return new _M0DTP37Hosi1216syasou6domain12TravelChange6Update(change, _M0DTP37Hosi1216syasou6domain12TicketChange11KeepTickets__, state.pending_arrival_id);
    }
  } else {
    const _Some = _bind;
    const _ticket = _Some;
    return new _M0DTP37Hosi1216syasou6domain12TravelChange6Update(change, new _M0DTP37Hosi1216syasou6domain12TicketChange7Prepend(_ticket), _ticket.id);
  }
}
function _M0FP37Hosi1216syasou6domain7advance(state, now) {
  _L: {
    if (state.running) {
      const _bind = state.deadline;
      if (_bind.$tag === 1) {
        const _Some = _bind;
        const _deadline = _Some._0;
        if (now < _deadline) {
          return _M0DTP37Hosi1216syasou6domain13JourneyChange4Keep__;
        }
        if (_M0IP37Hosi1216syasou6domain5PhasePB2Eq5equal(state.phase, 1)) {
          const rest_deadline = _deadline + state.rest_minutes * 60000;
          const next = now < rest_deadline ? new _M0TP37Hosi1216syasou6domain7Journey(2, state.running, new _M0DTPC16option6OptionGdE4Some(rest_deadline), _M0DTPC16option6OptionGdE4None__, state.focus_minutes, state.rest_minutes, state.id, state.started_at, new _M0DTPC16option6OptionGdE4Some(_deadline), state.speed, state.scene) : new _M0TP37Hosi1216syasou6domain7Journey(3, false, _M0DTPC16option6OptionGdE4None__, _M0DTPC16option6OptionGdE4None__, state.focus_minutes, state.rest_minutes, state.id, state.started_at, new _M0DTPC16option6OptionGdE4Some(_deadline), state.speed, state.scene);
          return new _M0DTP37Hosi1216syasou6domain13JourneyChange5Patch(next, true);
        } else {
          return new _M0DTP37Hosi1216syasou6domain13JourneyChange5Patch(new _M0TP37Hosi1216syasou6domain7Journey(3, false, _M0DTPC16option6OptionGdE4None__, _M0DTPC16option6OptionGdE4None__, state.focus_minutes, state.rest_minutes, state.id, state.started_at, state.arrived_at, state.speed, state.scene), false);
        }
      } else {
        break _L;
      }
    } else {
      break _L;
    }
  }
  return _M0DTP37Hosi1216syasou6domain13JourneyChange4Keep__;
}
function _M0FP37Hosi1216syasou6domain7restore(state, now, note) {
  return _M0FP37Hosi1216syasou6domain15arrival__change(state, _M0FP37Hosi1216syasou6domain7advance(state.journey, now), note, true);
}
function _M0FP37Hosi1216syasou6domain11number__min(a, b) {
  return a !== a ? a : b !== b ? b : a === 0 && b === 0 ? (1 / a < 0 || 1 / b < 0 ? -0 : 0) : _M0MPC16double6Double3min(a, b);
}
function _M0FP37Hosi1216syasou6domain15reduce__journey(state, action) {
  switch (action.$tag) {
    case 0: {
      const _Start = action;
      const _now = _Start._0;
      const _focus_minutes = _Start._1;
      const _rest_minutes = _Start._2;
      const _id = _Start._3;
      const _speed = _Start._4;
      const _scene = _Start._5;
      return new _M0DTP37Hosi1216syasou6domain13JourneyChange7Replace(new _M0TP37Hosi1216syasou6domain7Journey(1, true, _focus_minutes === 0 || _focus_minutes !== _focus_minutes ? _M0DTPC16option6OptionGdE4None__ : new _M0DTPC16option6OptionGdE4Some(_now + _focus_minutes * 60000), _M0DTPC16option6OptionGdE4None__, _focus_minutes, _rest_minutes, _id, new _M0DTPC16option6OptionGdE4Some(_now), _M0DTPC16option6OptionGdE4None__, _speed, _scene));
    }
    case 3: {
      const _Finish = action;
      const _now$2 = _Finish._0;
      const _bind = state.arrived_at;
      let arrived_at;
      if (_bind.$tag === 1) {
        arrived_at = state.arrived_at;
      } else {
        arrived_at = _M0IP37Hosi1216syasou6domain5PhasePB2Eq5equal(state.phase, 1) ? new _M0DTPC16option6OptionGdE4Some(_M0FP37Hosi1216syasou6domain11number__min(_now$2, _M0MPC16option6Option10unwrap__orGdE(state.deadline, _now$2))) : _M0DTPC16option6OptionGdE4None__;
      }
      return new _M0DTP37Hosi1216syasou6domain13JourneyChange5Patch(new _M0TP37Hosi1216syasou6domain7Journey(3, false, _M0DTPC16option6OptionGdE4None__, _M0DTPC16option6OptionGdE4None__, state.focus_minutes, state.rest_minutes, state.id, state.started_at, arrived_at, state.speed, state.scene), true);
    }
    case 1: {
      const _Tick = action;
      const _now$3 = _Tick._0;
      return _M0FP37Hosi1216syasou6domain7advance(state, _now$3);
    }
    default: {
      const _Toggle = action;
      const _now$4 = _Toggle._0;
      const change = _M0FP37Hosi1216syasou6domain7advance(state, _now$4);
      const current = _M0MP37Hosi1216syasou6domain13JourneyChange5value(change, state);
      if (_M0IP016_24default__implPB2Eq10not__equalGRP37Hosi1216syasou6domain5PhaseE(current.phase, 1) && _M0IP016_24default__implPB2Eq10not__equalGRP37Hosi1216syasou6domain5PhaseE(current.phase, 2)) {
        return change;
      }
      let write_arrival;
      if (change.$tag === 2) {
        const _Patch = change;
        write_arrival = _Patch._1;
      } else {
        write_arrival = false;
      }
      const next = current.running ? new _M0TP37Hosi1216syasou6domain7Journey(current.phase, false, _M0DTPC16option6OptionGdE4None__, _M0MPC16option6Option3mapGddE(current.deadline, (d) => _M0FP37Hosi1216syasou6domain11number__max(0, d - _now$4)), current.focus_minutes, current.rest_minutes, current.id, current.started_at, current.arrived_at, current.speed, current.scene) : new _M0TP37Hosi1216syasou6domain7Journey(current.phase, true, _M0MPC16option6Option3mapGddE(current.remaining, (r) => _now$4 + r), _M0DTPC16option6OptionGdE4None__, current.focus_minutes, current.rest_minutes, current.id, current.started_at, current.arrived_at, current.speed, current.scene);
      return new _M0DTP37Hosi1216syasou6domain13JourneyChange5Patch(next, write_arrival);
    }
  }
}
function _M0FP37Hosi1216syasou6domain14reduce__travel(state, action) {
  switch (action.$tag) {
    case 0: {
      const _JourneyEvent = action;
      const _action = _JourneyEvent._0;
      const _note = _JourneyEvent._1;
      return _M0FP37Hosi1216syasou6domain15arrival__change(state, _M0FP37Hosi1216syasou6domain15reduce__journey(state.journey, _action), _note, false);
    }
    case 2: {
      return new _M0DTP37Hosi1216syasou6domain12TravelChange6Update(_M0DTP37Hosi1216syasou6domain13JourneyChange4Keep__, _M0DTP37Hosi1216syasou6domain12TicketChange11KeepTickets__, undefined);
    }
    case 3: {
      const _Edit = action;
      const _id = _Edit._0;
      const _title = _Edit._1;
      const _note$2 = _Edit._2;
      const _p = state.tickets;
      const _p$2 = new Array(_p.length);
      const _p$3 = _p.length;
      let _tmp = 0;
      while (true) {
        const _p$4 = _tmp;
        if (_p$4 < _p$3) {
          const _p$5 = _p[_p$4];
          _p$2[_p$4] = _p$5.id === _id ? { _0: _M0FP37Hosi1216syasou6domain11limit__text(_M0MPC16option6Option10unwrap__orGsE(_title, _p$5.title), 80), _1: _M0FP37Hosi1216syasou6domain11limit__text(_M0MPC16option6Option10unwrap__orGsE(_note$2, _p$5.note), 300) } : undefined;
          _tmp = _p$4 + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      const edits = _p$2;
      return new _M0DTP37Hosi1216syasou6domain12TravelChange6Update(_M0DTP37Hosi1216syasou6domain13JourneyChange4Keep__, new _M0DTP37Hosi1216syasou6domain12TicketChange11EditTickets(edits), state.pending_arrival_id);
    }
    default: {
      const _Welcome = action;
      const _now = _Welcome._0;
      const _bind = state.pending_arrival_id;
      if (_bind === undefined) {
      } else {
        const _Some = _bind;
        const _id$2 = _Some;
        const _p$4 = "";
        if (!(_id$2 === _p$4)) {
          return _M0DTP37Hosi1216syasou6domain12TravelChange10KeepTravel__;
        }
      }
      const _bind$2 = state.tickets;
      const _bind$3 = _bind$2.length;
      let _tmp$2 = 0;
      while (true) {
        const _ = _tmp$2;
        if (_ < _bind$3) {
          const ticket = _bind$2[_];
          if (_M0IPC16option6OptionPB2Eq5equalGsE(ticket.kind, _M0FP37Hosi1216syasou6domain14reduce__travelN6constrS198)) {
            return new _M0DTP37Hosi1216syasou6domain12TravelChange6Update(_M0DTP37Hosi1216syasou6domain13JourneyChange4Keep__, _M0DTP37Hosi1216syasou6domain12TicketChange11KeepTickets__, ticket.id);
          }
          _tmp$2 = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      const ticket = new _M0TP37Hosi1216syasou6domain6Ticket(_M0FP37Hosi1216syasou6domain14reduce__travelN7_2abindS192, _M0FP37Hosi1216syasou6domain14reduce__travelN7_2abindS193, _now, _now, _M0FP37Hosi1216syasou6domain14reduce__travelN7_2abindS194, _M0FP37Hosi1216syasou6domain14reduce__travelN7_2abindS195, _M0FP37Hosi1216syasou6domain14reduce__travelN7_2abindS196, _M0FP37Hosi1216syasou6domain14reduce__travelN7_2abindS197);
      return new _M0DTP37Hosi1216syasou6domain12TravelChange6Update(_M0DTP37Hosi1216syasou6domain13JourneyChange4Keep__, new _M0DTP37Hosi1216syasou6domain12TicketChange7Prepend(ticket), _M0FP37Hosi1216syasou6domain14reduce__travelN7_2abindS192);
    }
  }
}
function _M0FP37Hosi1216syasou6bridge8optionalGsE(value) {
  return _M0FP26mizchi8js__core11is__nullish(value) ? undefined : value;
}
function _M0FP37Hosi1216syasou6bridge8optionalGdE(value) {
  return _M0FP26mizchi8js__core11is__nullish(value) ? _M0DTPC16option6OptionGdE4None__ : new _M0DTPC16option6OptionGdE4Some(value);
}
function _M0FP37Hosi1216syasou6bridge12read__ticket(value) {
  return new _M0TP37Hosi1216syasou6domain6Ticket(_M0MP26mizchi8js__core3Any5__get(value, "id"), _M0FP37Hosi1216syasou6bridge8optionalGsE(_M0MP26mizchi8js__core3Any5__get(value, "kind")), _M0MP26mizchi8js__core3Any5__get(value, "startedAt"), _M0MP26mizchi8js__core3Any5__get(value, "arrivedAt"), _M0MP26mizchi8js__core3Any5__get(value, "speed"), _M0MP26mizchi8js__core3Any5__get(value, "scene"), _M0MP26mizchi8js__core3Any5__get(value, "title"), _M0MP26mizchi8js__core3Any5__get(value, "note"));
}
function _M0FP37Hosi1216syasou6bridge13read__journey(value) {
  const _bind = _M0MP26mizchi8js__core3Any5__get(value, "phase");
  let phase;
  switch (_bind) {
    case "focus": {
      phase = 1;
      break;
    }
    case "rest": {
      phase = 2;
      break;
    }
    case "finished": {
      phase = 3;
      break;
    }
    default: {
      phase = 0;
    }
  }
  return new _M0TP37Hosi1216syasou6domain7Journey(phase, _M0MP26mizchi8js__core3Any5__get(value, "running"), _M0FP37Hosi1216syasou6bridge8optionalGdE(_M0MP26mizchi8js__core3Any5__get(value, "deadline")), _M0FP37Hosi1216syasou6bridge8optionalGdE(_M0MP26mizchi8js__core3Any5__get(value, "remaining")), _M0MP26mizchi8js__core3Any5__get(value, "focusMinutes"), _M0MP26mizchi8js__core3Any5__get(value, "restMinutes"), _M0FP37Hosi1216syasou6bridge8optionalGsE(_M0MP26mizchi8js__core3Any5__get(value, "id")), _M0FP37Hosi1216syasou6bridge8optionalGdE(_M0MP26mizchi8js__core3Any5__get(value, "startedAt")), _M0FP37Hosi1216syasou6bridge8optionalGdE(_M0MP26mizchi8js__core3Any5__get(value, "arrivedAt")), _M0FP37Hosi1216syasou6bridge8optionalGsE(_M0MP26mizchi8js__core3Any5__get(value, "speed")), _M0FP37Hosi1216syasou6bridge8optionalGsE(_M0MP26mizchi8js__core3Any5__get(value, "scene")));
}
function _M0FP37Hosi1216syasou6bridge12read__travel(value) {
  const tickets = _M0MP26mizchi8js__core3Any5__get(value, "tickets");
  const _tmp = _M0FP37Hosi1216syasou6bridge13read__journey(_M0MP26mizchi8js__core3Any5__get(value, "journey"));
  const _p = new Array(tickets.length);
  const _p$2 = tickets.length;
  let _tmp$2 = 0;
  while (true) {
    const _p$3 = _tmp$2;
    if (_p$3 < _p$2) {
      const _p$4 = tickets[_p$3];
      _p[_p$3] = _M0FP37Hosi1216syasou6bridge12read__ticket(_p$4);
      _tmp$2 = _p$3 + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0TP37Hosi1216syasou6domain6Travel(_tmp, _p, _M0FP37Hosi1216syasou6bridge8optionalGsE(_M0MP26mizchi8js__core3Any5__get(value, "pendingArrivalId")));
}
function _M0FP37Hosi1216syasou6bridge13write__ticket(ticket) {
  const out = _M0FP26mizchi8js__core11new__object();
  _M0MP26mizchi8js__core3Any5__set(out, "id", ticket.id);
  const _bind = ticket.kind;
  if (_bind === undefined) {
  } else {
    const _Some = _bind;
    const _kind = _Some;
    _M0MP26mizchi8js__core3Any5__set(out, "kind", _kind);
  }
  _M0MP26mizchi8js__core3Any5__set(out, "startedAt", ticket.started_at);
  _M0MP26mizchi8js__core3Any5__set(out, "arrivedAt", ticket.arrived_at);
  _M0MP26mizchi8js__core3Any5__set(out, "speed", ticket.speed);
  _M0MP26mizchi8js__core3Any5__set(out, "scene", ticket.scene);
  _M0MP26mizchi8js__core3Any5__set(out, "title", ticket.title);
  _M0MP26mizchi8js__core3Any5__set(out, "note", ticket.note);
  return out;
}
function _M0FP37Hosi1216syasou6bridge8nullableGsE(value) {
  if (value === undefined) {
    return _M0FP26mizchi8js__core4null();
  } else {
    const _Some = value;
    const _value = _Some;
    return _value;
  }
}
function _M0FP37Hosi1216syasou6bridge8nullableGdE(value) {
  if (value.$tag === 1) {
    const _Some = value;
    const _value = _Some._0;
    return _value;
  } else {
    return _M0FP26mizchi8js__core4null();
  }
}
function _M0FP37Hosi1216syasou6bridge13undefined__orGdE(value) {
  if (value.$tag === 1) {
    const _Some = value;
    const _value = _Some._0;
    return _value;
  } else {
    return _M0FP26mizchi8js__core9undefined();
  }
}
function _M0FP37Hosi1216syasou6bridge13undefined__orGsE(value) {
  if (value === undefined) {
    return _M0FP26mizchi8js__core9undefined();
  } else {
    const _Some = value;
    const _value = _Some;
    return _value;
  }
}
function _M0FP37Hosi1216syasou6bridge14write__journey(source, change) {
  let next;
  let out;
  let write_arrival;
  _L: {
    switch (change.$tag) {
      case 0: {
        return source;
      }
      case 1: {
        const _Replace = change;
        const _next = _Replace._0;
        const out$2 = _M0FP26mizchi8js__core11new__object();
        _M0MP26mizchi8js__core3Any5__set(out$2, "focusMinutes", _next.focus_minutes);
        _M0MP26mizchi8js__core3Any5__set(out$2, "restMinutes", _next.rest_minutes);
        _M0MP26mizchi8js__core3Any5__set(out$2, "id", _M0FP37Hosi1216syasou6bridge13undefined__orGsE(_next.id));
        _M0MP26mizchi8js__core3Any5__set(out$2, "startedAt", _M0FP37Hosi1216syasou6bridge13undefined__orGdE(_next.started_at));
        _M0MP26mizchi8js__core3Any5__set(out$2, "speed", _M0FP37Hosi1216syasou6bridge13undefined__orGsE(_next.speed));
        _M0MP26mizchi8js__core3Any5__set(out$2, "scene", _M0FP37Hosi1216syasou6bridge13undefined__orGsE(_next.scene));
        next = _next;
        out = out$2;
        write_arrival = false;
        break _L;
      }
      default: {
        const _Patch = change;
        const _next$2 = _Patch._0;
        const _write_arrival = _Patch._1;
        next = _next$2;
        out = _M0FP26mizchi8js__core14object__assign(_M0FP26mizchi8js__core11new__object(), source);
        write_arrival = _write_arrival;
        break _L;
      }
    }
  }
  const _bind = next.phase;
  let phase;
  switch (_bind) {
    case 0: {
      phase = "idle";
      break;
    }
    case 1: {
      phase = "focus";
      break;
    }
    case 2: {
      phase = "rest";
      break;
    }
    default: {
      phase = "finished";
    }
  }
  _M0MP26mizchi8js__core3Any5__set(out, "phase", phase);
  _M0MP26mizchi8js__core3Any5__set(out, "running", next.running);
  _M0MP26mizchi8js__core3Any5__set(out, "deadline", _M0FP37Hosi1216syasou6bridge8nullableGdE(next.deadline));
  _M0MP26mizchi8js__core3Any5__set(out, "remaining", _M0FP37Hosi1216syasou6bridge8nullableGdE(next.remaining));
  if (write_arrival) {
    _M0MP26mizchi8js__core3Any5__set(out, "arrivedAt", _M0FP37Hosi1216syasou6bridge13undefined__orGdE(next.arrived_at));
  }
  return out;
}
function _M0FP37Hosi1216syasou6bridge13write__travel(source, change) {
  if (change.$tag === 1) {
    const _Update = change;
    const _journey = _Update._0;
    const _tickets = _Update._1;
    const _pending = _Update._2;
    const out = _M0FP26mizchi8js__core14object__assign(_M0FP26mizchi8js__core11new__object(), source);
    _M0MP26mizchi8js__core3Any5__set(out, "journey", _M0FP37Hosi1216syasou6bridge14write__journey(_M0MP26mizchi8js__core3Any5__get(source, "journey"), _journey));
    const originals = _M0MP26mizchi8js__core3Any5__get(source, "tickets");
    let items;
    switch (_tickets.$tag) {
      case 0: {
        items = originals;
        break;
      }
      case 1: {
        const _Prepend = _tickets;
        const _ticket = _Prepend._0;
        const _self = [];
        _M0MPC15array5Array4pushGRP26mizchi8js__core3AnyE(_self, _M0FP37Hosi1216syasou6bridge13write__ticket(_ticket));
        _M0MPC15array5Array10push__iterGRP26mizchi8js__core3AnyE(_self, _M0MPC15array5Array4iterGRP26mizchi8js__core3AnyE(originals));
        items = _self;
        break;
      }
      default: {
        const _EditTickets = _tickets;
        const _edits = _EditTickets._0;
        let _p;
        _L: {
          _L$2: {
            if (_edits.length === 0) {
              _p = [];
              break _L$2;
            }
            const _p$2 = new Array(_edits.length);
            const _p$3 = _edits.length;
            let _tmp = 0;
            while (true) {
              const _p$4 = _tmp;
              if (_p$4 < _p$3) {
                const _p$5 = _edits[_p$4];
                let _tmp$2;
                if (_p$5 === undefined) {
                  _tmp$2 = _M0MPC15array5Array2atGRP26mizchi8js__core3AnyE(originals, _p$4);
                } else {
                  const _p$6 = _p$5;
                  const _p$7 = _p$6;
                  const _p$8 = _p$7._0;
                  const _p$9 = _p$7._1;
                  const _p$10 = _M0FP26mizchi8js__core14object__assign(_M0FP26mizchi8js__core11new__object(), _M0MPC15array5Array2atGRP26mizchi8js__core3AnyE(originals, _p$4));
                  _M0MP26mizchi8js__core3Any5__set(_p$10, "title", _p$8);
                  _M0MP26mizchi8js__core3Any5__set(_p$10, "note", _p$9);
                  _tmp$2 = _p$10;
                }
                _p$2[_p$4] = _tmp$2;
                _tmp = _p$4 + 1 | 0;
                continue;
              } else {
                break;
              }
            }
            items = _p$2;
            break _L;
          }
          items = _p;
        }
      }
    }
    _M0MP26mizchi8js__core3Any5__set(out, "tickets", items);
    _M0MP26mizchi8js__core3Any5__set(out, "pendingArrivalId", _M0FP37Hosi1216syasou6bridge8nullableGsE(_pending));
    return out;
  } else {
    return source;
  }
}
function _M0FP37Hosi1216syasou6bridge15restore__travel(state, now, note) {
  return _M0FP37Hosi1216syasou6bridge13write__travel(state, _M0FP37Hosi1216syasou6domain7restore(_M0FP37Hosi1216syasou6bridge12read__travel(state), now, note));
}
function _M0FP37Hosi1216syasou6bridge12read__action(value) {
  const now = _M0MP26mizchi8js__core3Any5__get(value, "now");
  const _bind = _M0MP26mizchi8js__core3Any5__get(value, "type");
  switch (_bind) {
    case "start": {
      return new _M0DTP37Hosi1216syasou6domain13JourneyAction5Start(now, _M0MP26mizchi8js__core3Any5__get(value, "focusMinutes"), _M0MP26mizchi8js__core3Any5__get(value, "restMinutes"), _M0MP26mizchi8js__core3Any5__get(value, "id"), _M0MP26mizchi8js__core3Any5__get(value, "speed"), _M0MP26mizchi8js__core3Any5__get(value, "scene"));
    }
    case "finish": {
      return new _M0DTP37Hosi1216syasou6domain13JourneyAction6Finish(now);
    }
    case "tick": {
      return new _M0DTP37Hosi1216syasou6domain13JourneyAction4Tick(now);
    }
    default: {
      return new _M0DTP37Hosi1216syasou6domain13JourneyAction6Toggle(now);
    }
  }
}
function _M0FP37Hosi1216syasou6bridge15travel__reducer(state, action) {
  const _bind = _M0MP26mizchi8js__core3Any5__get(action, "type");
  let event;
  switch (_bind) {
    case "welcome-ticket": {
      event = new _M0DTP37Hosi1216syasou6domain12TravelAction7Welcome(_M0MP26mizchi8js__core3Any5__get(action, "now"));
      break;
    }
    case "acknowledge-arrival": {
      event = _M0DTP37Hosi1216syasou6domain12TravelAction11Acknowledge__;
      break;
    }
    case "edit-ticket": {
      const changes = _M0MP26mizchi8js__core3Any5__get(action, "changes");
      event = new _M0DTP37Hosi1216syasou6domain12TravelAction4Edit(_M0MP26mizchi8js__core3Any5__get(action, "id"), _M0FP37Hosi1216syasou6bridge8optionalGsE(_M0MP26mizchi8js__core3Any5__get(changes, "title")), _M0FP37Hosi1216syasou6bridge8optionalGsE(_M0MP26mizchi8js__core3Any5__get(changes, "note")));
      break;
    }
    default: {
      event = new _M0DTP37Hosi1216syasou6domain12TravelAction12JourneyEvent(_M0FP37Hosi1216syasou6bridge12read__action(_M0MP26mizchi8js__core3Any5__get(action, "action")), _M0MP26mizchi8js__core3Any5__get(action, "note"));
    }
  }
  return _M0FP37Hosi1216syasou6bridge13write__travel(state, _M0FP37Hosi1216syasou6domain14reduce__travel(_M0FP37Hosi1216syasou6bridge12read__travel(state), event));
}
function _M0FP37Hosi1216syasou6bridge16advance__journey(state, now) {
  return _M0FP37Hosi1216syasou6bridge14write__journey(state, _M0FP37Hosi1216syasou6domain7advance(_M0FP37Hosi1216syasou6bridge13read__journey(state), now));
}
function _M0FP37Hosi1216syasou6bridge16journey__reducer(state, action) {
  return _M0FP37Hosi1216syasou6bridge14write__journey(state, _M0FP37Hosi1216syasou6domain15reduce__journey(_M0FP37Hosi1216syasou6bridge13read__journey(state), _M0FP37Hosi1216syasou6bridge12read__action(action)));
}
export { _M0FP37Hosi1216syasou6bridge15restore__travel as restoreTravel, _M0FP37Hosi1216syasou6bridge15travel__reducer as travelReducer, _M0FP37Hosi1216syasou6bridge16advance__journey as advanceJourney, _M0FP37Hosi1216syasou6bridge16journey__reducer as journeyReducer }
