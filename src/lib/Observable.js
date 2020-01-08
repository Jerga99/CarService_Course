
class Observer {
  
  constructor(handlers) {
    this._handlers = handlers;
  }

  next(value) {
    if (this._handlers[0]) {
      this._handlers[0](value);
    }
  }

  error(error) {
    if (this._handlers[1]) {
      this._handlers[1](error);
    }
  }

  complete() {
    if (this._handlers[2]) {
      this._handlers[2]();
    }
  }
}


class Observable {
  constructor(executionFunction) {
    this._executionFunction = executionFunction;
  }

  subscribe(...handlers) {
    const observer = new Observer(handlers);
    this._executionFunction(observer);
  }
}

// module.exports = Observable;
exports.Observable = Observable;