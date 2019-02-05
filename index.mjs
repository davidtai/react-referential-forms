import Emitter from 'es6-event-emitter';
import React from 'react';
import ref from 'referential';
import 'classnames';
import moment from 'moment-timezone';
import akasha from 'akasha';
import '@material-ui/core/Checkbox';
import '@material-ui/core/MenuItem';
import '@material-ui/core/FormControl';
import '@material-ui/core/FormLabel';
import '@material-ui/core/FormHelperText';
import { withStyles } from '@material-ui/core/styles';
import '@material-ui/core/TextField';
import { InlineDatePicker, MuiPickersContextConsumer } from 'material-ui-pickers';
import '@material-ui/core/InputBase';
import '@material-ui/core/List';
import '@material-ui/core/ListItem';
import '@material-ui/core/ListItemIcon';
import '@material-ui/core/ListItemText';
import '@material-ui/icons/CheckCircleOutlined';
import NumberFormat from 'react-number-format';
import MaskedInput from 'react-text-mask';
import '@material-ui/core/Switch';

//  rollupPluginBabelHelpers.js

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _toArray(arr) {
  return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

function _toPrimitive(input, hint) {
  if (typeof input !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];

  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (typeof res !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }

  return (hint === "string" ? String : Number)(input);
}

function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");

  return typeof key === "symbol" ? key : String(key);
}

function _decorate(decorators, factory, superClass, mixins) {
  var api = _getDecoratorsApi();

  if (mixins) {
    for (var i = 0; i < mixins.length; i++) {
      api = mixins[i](api);
    }
  }

  var r = factory(function initialize(O) {
    api.initializeInstanceElements(O, decorated.elements);
  }, superClass);
  var decorated = api.decorateClass(_coalesceClassElements(r.d.map(_createElementDescriptor)), decorators);
  api.initializeClassElements(r.F, decorated.elements);
  return api.runClassFinishers(r.F, decorated.finishers);
}

function _getDecoratorsApi() {
  _getDecoratorsApi = function () {
    return api;
  };

  var api = {
    elementsDefinitionOrder: [["method"], ["field"]],
    initializeInstanceElements: function (O, elements) {
      ["method", "field"].forEach(function (kind) {
        elements.forEach(function (element) {
          if (element.kind === kind && element.placement === "own") {
            this.defineClassElement(O, element);
          }
        }, this);
      }, this);
    },
    initializeClassElements: function (F, elements) {
      var proto = F.prototype;
      ["method", "field"].forEach(function (kind) {
        elements.forEach(function (element) {
          var placement = element.placement;

          if (element.kind === kind && (placement === "static" || placement === "prototype")) {
            var receiver = placement === "static" ? F : proto;
            this.defineClassElement(receiver, element);
          }
        }, this);
      }, this);
    },
    defineClassElement: function (receiver, element) {
      var descriptor = element.descriptor;

      if (element.kind === "field") {
        var initializer = element.initializer;
        descriptor = {
          enumerable: descriptor.enumerable,
          writable: descriptor.writable,
          configurable: descriptor.configurable,
          value: initializer === void 0 ? void 0 : initializer.call(receiver)
        };
      }

      Object.defineProperty(receiver, element.key, descriptor);
    },
    decorateClass: function (elements, decorators) {
      var newElements = [];
      var finishers = [];
      var placements = {
        static: [],
        prototype: [],
        own: []
      };
      elements.forEach(function (element) {
        this.addElementPlacement(element, placements);
      }, this);
      elements.forEach(function (element) {
        if (!_hasDecorators(element)) return newElements.push(element);
        var elementFinishersExtras = this.decorateElement(element, placements);
        newElements.push(elementFinishersExtras.element);
        newElements.push.apply(newElements, elementFinishersExtras.extras);
        finishers.push.apply(finishers, elementFinishersExtras.finishers);
      }, this);

      if (!decorators) {
        return {
          elements: newElements,
          finishers: finishers
        };
      }

      var result = this.decorateConstructor(newElements, decorators);
      finishers.push.apply(finishers, result.finishers);
      result.finishers = finishers;
      return result;
    },
    addElementPlacement: function (element, placements, silent) {
      var keys = placements[element.placement];

      if (!silent && keys.indexOf(element.key) !== -1) {
        throw new TypeError("Duplicated element (" + element.key + ")");
      }

      keys.push(element.key);
    },
    decorateElement: function (element, placements) {
      var extras = [];
      var finishers = [];

      for (var decorators = element.decorators, i = decorators.length - 1; i >= 0; i--) {
        var keys = placements[element.placement];
        keys.splice(keys.indexOf(element.key), 1);
        var elementObject = this.fromElementDescriptor(element);
        var elementFinisherExtras = this.toElementFinisherExtras((0, decorators[i])(elementObject) || elementObject);
        element = elementFinisherExtras.element;
        this.addElementPlacement(element, placements);

        if (elementFinisherExtras.finisher) {
          finishers.push(elementFinisherExtras.finisher);
        }

        var newExtras = elementFinisherExtras.extras;

        if (newExtras) {
          for (var j = 0; j < newExtras.length; j++) {
            this.addElementPlacement(newExtras[j], placements);
          }

          extras.push.apply(extras, newExtras);
        }
      }

      return {
        element: element,
        finishers: finishers,
        extras: extras
      };
    },
    decorateConstructor: function (elements, decorators) {
      var finishers = [];

      for (var i = decorators.length - 1; i >= 0; i--) {
        var obj = this.fromClassDescriptor(elements);
        var elementsAndFinisher = this.toClassDescriptor((0, decorators[i])(obj) || obj);

        if (elementsAndFinisher.finisher !== undefined) {
          finishers.push(elementsAndFinisher.finisher);
        }

        if (elementsAndFinisher.elements !== undefined) {
          elements = elementsAndFinisher.elements;

          for (var j = 0; j < elements.length - 1; j++) {
            for (var k = j + 1; k < elements.length; k++) {
              if (elements[j].key === elements[k].key && elements[j].placement === elements[k].placement) {
                throw new TypeError("Duplicated element (" + elements[j].key + ")");
              }
            }
          }
        }
      }

      return {
        elements: elements,
        finishers: finishers
      };
    },
    fromElementDescriptor: function (element) {
      var obj = {
        kind: element.kind,
        key: element.key,
        placement: element.placement,
        descriptor: element.descriptor
      };
      var desc = {
        value: "Descriptor",
        configurable: true
      };
      Object.defineProperty(obj, Symbol.toStringTag, desc);
      if (element.kind === "field") obj.initializer = element.initializer;
      return obj;
    },
    toElementDescriptors: function (elementObjects) {
      if (elementObjects === undefined) return;
      return _toArray(elementObjects).map(function (elementObject) {
        var element = this.toElementDescriptor(elementObject);
        this.disallowProperty(elementObject, "finisher", "An element descriptor");
        this.disallowProperty(elementObject, "extras", "An element descriptor");
        return element;
      }, this);
    },
    toElementDescriptor: function (elementObject) {
      var kind = String(elementObject.kind);

      if (kind !== "method" && kind !== "field") {
        throw new TypeError('An element descriptor\'s .kind property must be either "method" or' + ' "field", but a decorator created an element descriptor with' + ' .kind "' + kind + '"');
      }

      var key = _toPropertyKey(elementObject.key);

      var placement = String(elementObject.placement);

      if (placement !== "static" && placement !== "prototype" && placement !== "own") {
        throw new TypeError('An element descriptor\'s .placement property must be one of "static",' + ' "prototype" or "own", but a decorator created an element descriptor' + ' with .placement "' + placement + '"');
      }

      var descriptor = elementObject.descriptor;
      this.disallowProperty(elementObject, "elements", "An element descriptor");
      var element = {
        kind: kind,
        key: key,
        placement: placement,
        descriptor: Object.assign({}, descriptor)
      };

      if (kind !== "field") {
        this.disallowProperty(elementObject, "initializer", "A method descriptor");
      } else {
        this.disallowProperty(descriptor, "get", "The property descriptor of a field descriptor");
        this.disallowProperty(descriptor, "set", "The property descriptor of a field descriptor");
        this.disallowProperty(descriptor, "value", "The property descriptor of a field descriptor");
        element.initializer = elementObject.initializer;
      }

      return element;
    },
    toElementFinisherExtras: function (elementObject) {
      var element = this.toElementDescriptor(elementObject);

      var finisher = _optionalCallableProperty(elementObject, "finisher");

      var extras = this.toElementDescriptors(elementObject.extras);
      return {
        element: element,
        finisher: finisher,
        extras: extras
      };
    },
    fromClassDescriptor: function (elements) {
      var obj = {
        kind: "class",
        elements: elements.map(this.fromElementDescriptor, this)
      };
      var desc = {
        value: "Descriptor",
        configurable: true
      };
      Object.defineProperty(obj, Symbol.toStringTag, desc);
      return obj;
    },
    toClassDescriptor: function (obj) {
      var kind = String(obj.kind);

      if (kind !== "class") {
        throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator' + ' created a class descriptor with .kind "' + kind + '"');
      }

      this.disallowProperty(obj, "key", "A class descriptor");
      this.disallowProperty(obj, "placement", "A class descriptor");
      this.disallowProperty(obj, "descriptor", "A class descriptor");
      this.disallowProperty(obj, "initializer", "A class descriptor");
      this.disallowProperty(obj, "extras", "A class descriptor");

      var finisher = _optionalCallableProperty(obj, "finisher");

      var elements = this.toElementDescriptors(obj.elements);
      return {
        elements: elements,
        finisher: finisher
      };
    },
    runClassFinishers: function (constructor, finishers) {
      for (var i = 0; i < finishers.length; i++) {
        var newConstructor = (0, finishers[i])(constructor);

        if (newConstructor !== undefined) {
          if (typeof newConstructor !== "function") {
            throw new TypeError("Finishers must return a constructor.");
          }

          constructor = newConstructor;
        }
      }

      return constructor;
    },
    disallowProperty: function (obj, name, objectType) {
      if (obj[name] !== undefined) {
        throw new TypeError(objectType + " can't have a ." + name + " property.");
      }
    }
  };
  return api;
}

function _createElementDescriptor(def) {
  var key = _toPropertyKey(def.key);

  var descriptor;

  if (def.kind === "method") {
    descriptor = {
      value: def.value,
      writable: true,
      configurable: true,
      enumerable: false
    };
  } else if (def.kind === "get") {
    descriptor = {
      get: def.value,
      configurable: true,
      enumerable: false
    };
  } else if (def.kind === "set") {
    descriptor = {
      set: def.value,
      configurable: true,
      enumerable: false
    };
  } else if (def.kind === "field") {
    descriptor = {
      configurable: true,
      writable: true,
      enumerable: true
    };
  }

  var element = {
    kind: def.kind === "field" ? "field" : "method",
    key: key,
    placement: def.static ? "static" : def.kind === "field" ? "own" : "prototype",
    descriptor: descriptor
  };
  if (def.decorators) element.decorators = def.decorators;
  if (def.kind === "field") element.initializer = def.value;
  return element;
}

function _coalesceGetterSetter(element, other) {
  if (element.descriptor.get !== undefined) {
    other.descriptor.get = element.descriptor.get;
  } else {
    other.descriptor.set = element.descriptor.set;
  }
}

function _coalesceClassElements(elements) {
  var newElements = [];

  var isSameElement = function (other) {
    return other.kind === "method" && other.key === element.key && other.placement === element.placement;
  };

  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    var other;

    if (element.kind === "method" && (other = newElements.find(isSameElement))) {
      if (_isDataDescriptor(element.descriptor) || _isDataDescriptor(other.descriptor)) {
        if (_hasDecorators(element) || _hasDecorators(other)) {
          throw new ReferenceError("Duplicated methods (" + element.key + ") can't be decorated.");
        }

        other.descriptor = element.descriptor;
      } else {
        if (_hasDecorators(element)) {
          if (_hasDecorators(other)) {
            throw new ReferenceError("Decorators can't be placed on different accessors with for " + "the same property (" + element.key + ").");
          }

          other.decorators = element.decorators;
        }

        _coalesceGetterSetter(element, other);
      }
    } else {
      newElements.push(element);
    }
  }

  return newElements;
}

function _hasDecorators(element) {
  return element.decorators && element.decorators.length;
}

function _isDataDescriptor(desc) {
  return desc !== undefined && !(desc.value === undefined && desc.writable === undefined);
}

function _optionalCallableProperty(obj, name) {
  var value = obj[name];

  if (value !== undefined && typeof value !== "function") {
    throw new TypeError("Expected '" + name + "' to be a function");
  }

  return value;
}

// src/utils/toPromise.js
let toPromise = fn => {
  return (...args) => {
    return new Promise((resolve, reject) => {
      requestAnimationFrame(() => {
        try {
          resolve(fn.apply(null, args));
        } catch (e) {
          reject(e);
        }
      });
    });
  };
};

// src/emitter.js
class MyEmitter extends Emitter {
  trigger(event, ...args) {
    if (typeof event === 'undefined') {
      throw new Error('You must provide an event to trigger.');
    }

    let listeners = this.events[event];
    let onceListeners = [];
    let results = [];

    if (typeof listeners !== 'undefined') {
      results = listeners.map((v, k) => {
        if (v.once) onceListeners.unshift(k);
        return v.cb.apply(this, args);
      });
      onceListeners.forEach((v, k) => {
        listeners.splice(k, 1);
      });
    }

    return results;
  } // clear events and then bind new event


  unique(...args) {
    this.off(args[0]);
    return this.on(...args);
  }

  off(event, cb) {
    if (typeof this.events[event] === 'undefined') {
      return this;
    }

    const listeners = this.events[event];

    if (!cb) {
      delete this.events[event];
      this.eventLength--;
      return this;
    }

    listeners.forEach((v, i) => {
      if (v.cb === cb) {
        listeners.splice(i, 1);
      }
    });

    if (listeners.length === 0) {
      delete this.events[event];
      this.eventLength--;
    }

    return this;
  }

}

// src/form.js
class InputData {
  constructor({
    type,
    name,
    value,
    defaultValue,
    data,
    scrollToError,
    middleware,
    options
  }) {
    // Data context for storing control values outside of the state
    this.type = type || undefined; // Name of field in data context

    this.name = name || ''; // Data Context

    this.data = data || ref({}); // Default starting value used to override null data values

    this.defaultValue = defaultValue;
    this.value = this.data.get(this.name);

    if (this.value == null) {
      this.value = value;
    }

    if (this.value == null) {
      this.value = defaultValue;
    }

    if (this.value != this.data.get(this.name)) {
      this.data.set(this.name, this.value);
    }

    this.options = options;
    this.select = options != null ? true : undefined; // Should the page scroll to an error in the middleware?

    this.scrollToError = false; //scrollToError || false
    // List of middleware
    // in the form of (newValue, oldValue, name) => {}
    // where
    //       newValue is the new value of the control
    //       oldValue is the old value of the control
    //       name is the name of the control

    this.middleware = middleware || [];
    this.middleware = this.middleware.map(m => {
      if (m.isPromise) {
        return m;
      }

      return toPromise(m);
    });
    this.emitter = new MyEmitter();
  }

  val(v) {
    return this.emitter.trigger('control:value', v)[0];
  }

}

_defineProperty(InputData, "defaultProps", {
  data: ref({}),
  autoComplete: 'off',
  showControlErrors: false
});

class Form extends React.Component {
  constructor(props) {
    super(props); // Hash array of InputDatas keyed by names

    _defineProperty(this, "submit", e => {
      if (e) {
        e.preventDefault();
        e.stopPropagation();
      }

      if (this.state.submitted) {
        return;
      }

      this.setState({
        loading: true,
        submitted: false
      });
      let is_submitError = false;
      return this.runMiddleware(true).then(() => {
        is_submitError = true;

        let ret = this._submit();

        if (ret && ret.then) {
          return ret.then(() => {
            this.setState({
              loading: false,
              submitted: this.props.singleSubmit
            });
          });
        }

        this.setState({
          loading: false,
          submitted: this.props.singleSubmit
        });
      }).catch(err => {
        this.setState({
          errorMessage: this.props.showErrors || is_submitError ? err.message : '',
          loading: false,
          submitted: false
        });
      });
    });

    this.inputs = {};
    this.state = {
      errorMessage: '',
      validating: false,
      loading: false,
      submitted: false
    };
  }

  componentWillUnmount() {
    for (let k in this.inputs) {
      this.inputs[k].emitter.off('control:submit');
      this.inputs[k].emitter.off('control:value');
    }
  }

  runMiddleware(rethrow) {
    this.setState({
      errorMessage: '',
      validating: true
    });
    let inputs = [];

    for (let k in this.inputs) {
      inputs.push(this.inputs[k]);
    }

    let ps = inputs.map(i => {
      return i.emitter.trigger('control:submit');
    });
    return Promise.all([].concat.apply([], ps)).then(() => {
      this.setState({
        validating: false
      });
    }).catch(err => {
      this.setState({
        validating: false,
        errorMessage: this.props.showControlErrors ? err.message : ''
      });

      if (rethrow) {
        throw err;
      }
    });
  }

  getErrorMessage() {
    return this.state.errorMessage || '';
  }

  _submit() {
    return new Promise(resolve => {
      resolve(true);
    });
  }

  render() {
    return pug`
      form(
        autoComplete=this.props.autoComplete
        onSubmit=this.submit
        className=classnames({
          validating: this.state.validating,
          loading: this.state.loading,
          submitted: this.state.submitted,
        })
      )
        if this.state.loading || this.state.validating
          .progress
            .indeterminate
        = props.children
        if this.getErrorMessage()
          .error
            = this.getErrorMessage()

    `;
  }

}

_defineProperty(Form, "defaultProps", {
  showErrors: false,
  singleSubmit: true
});

// src/utils/language.js
let getLanguage = () => {
  if (typeof window != 'undefined') {
    return window.navigator.userLanguage || window.navigator.languages[0] || window.navigator.language;
  }
};

// src/utils/date.js
let rfc3339 = 'YYYY-MM-DDTHH:mm:ssZ';
let mmddyyyy = 'MM/DD/YYYY';
let yyyymmdd = 'YYYY/MM/DD';
let ddmmyyyy = 'DD/MM/YYYY';
let defaultFormat = () => {
  if (getLanguage() == 'en-US') {
    return mmddyyyy;
  } else {
    return ddmmyyyy;
  }
};
let renderDate = (date, format) => {
  if (!format) {
    format = defaultFormat();
  }

  return moment(date).format(format);
};
let renderUIDate = date => {
  if (!date) {
    return '';
  }

  return renderDate(date);
};
let renderJSONDate = date => {
  return renderDate(date, rfc3339);
};

// src/library.js
let lastChecked, countries;
let loadLibrary = client => {
  // fetch library data
  lastChecked = akasha.get('library.lastChecked');
  countries = akasha.get('library.countries') || [];
  lastChecked = renderDate(new Date(), rfc3339);
  return client.library.daisho({
    hasCountries: !!countries && countries.length != 0,
    lastChecked: renderDate(lastChecked || '2000-01-01', rfc3339)
  }).then(res => {
    countries = res.countries || countries;
    akasha.set('library.lastChecked', lastChecked);
    akasha.set('library.countries', countries);
  });
};
let getLibrary = () => {
  return {
    lastChecked: lastChecked || akasha.get('library.lastChecked'),
    countries: countries || akasha.get('library.countries') || []
  };
};

// src/utils/valueOrCall.js
let valueOrCall = valueOrFunc => {
  if (typeof valueOrFunc == 'function') {
    return valueOrFunc();
  }

  return valueOrFunc;
};

// src/controls/control.js

let controlId = 0;
function control(ControlComponent) {
  var _temp;

  return _temp = class Control extends React.Component {
    // Props should be
    constructor(props) {
      super(props); // Unique ID for referencing the control

      _defineProperty(this, "change", event => {
        this.setState({
          errorMessage: '',
          valid: false
        });
        return this._change(this.getValue(event));
      });

      this.controlId = controlId++;

      if (props.emitter && this.props.data) {
        props.emitter.unique('control:submit', () => {
          return this._change(this.state.value, true);
        }); // emitter.off to force any duplicate unmounted inputs out of scope

        props.emitter.unique('control:value', v => {
          if (v != null) {
            this.props.data.set(this.props.name, v);
            this.setState({
              value: v
            });

            if (v != this.props.defaultValue) {
              this._change(v);
            }
          }

          return this.props.data.get(this.props.name);
        });
      }

      let value;

      if (this.props.data) {
        value = this.props.data.get(this.props.name);
      }

      if (value == null) {
        value = props.value;
      }

      if (value == null) {
        value == props.defaultValue;
      }

      this.state = {
        value: value,
        valid: false,
        errorMessage: '',
        appIsMounted: false
      };

      if (props.value != props.defaultValue) {
        this._change(props.value);
      }

      this.inputRef = React.createRef();
    }

    componentDidMount() {
      requestAnimationFrame(() => {
        this.setState({
          appIsMounted: true
        });
      });

      if (this.props.data) {
        this._onSetLock = false;

        this._onSet = (k, v) => {
          if (k == this.props.name && v != this.state.value) {
            if (!this._onSetLock) {
              this._onSetLock = true;
              this.change(v).then(() => {
                this._onSetLock = false;
              }).catch(() => {
                this._onSetLock = false;
              });
            }
          }
        };

        this.props.data.on('set', this._onSet);
      }
    }

    componentWillUnmount() {
      // These are unbound on the form level
      // this.props.emitter.off('control:submit')
      // this.props.emitter.off('control:value')
      //
      if (this.props.data) {
        this.props.data.off('set', this._onSet);
      }
    }

    getId() {
      return 'control-' + this.controlId;
    }

    getName() {
      return valueOrCall(this.props.name || '').replace(/\\./g, '-');
    }

    getValue(eventOrValue) {
      if (eventOrValue == null) {
        return '';
      }

      if (!eventOrValue.target) {
        return eventOrValue;
      }

      let val = eventOrValue.target.value;
      return val || '';
    }

    getErrorMessage() {
      return this.state.errorMessage || '';
    }

    error(value, e) {
      this.setState({
        errorMessage: e,
        value: value,
        valid: false
      }, () => {
        if (this.props.scrollToError && this.inputRef.current) {
          this.inputRef.current.scrollIntoView();
          this.inputRef.current.focus();
        }
      });
    }

    runMiddleware(value) {
      // need to replace with actual middleware stack
      let [p, ...middleware] = this.props.middleware || [];

      if (!p) {
        return new Promise(resolve => {
          resolve(value);
        });
      }

      let oldValue = this.state.value;
      let name = this.props.name;
      p = p.call(this.props, value, oldValue, name).then(v => {
        return v;
      }).catch(err => {
        throw err;
      });

      for (let k in middleware) {
        let m = middleware[k];
        p = p.then(v => {
          return new Promise((resolve, reject) => {
            m.call(this.props, v, oldValue, name).then(v => {
              resolve(v);
            }).catch(err => {
              reject(err);
            });
          });
        });
      }

      return p;
    } // Note, its atleast 2 characters (max savings unbounded) shorter to abuse ES6 automatic this binding syntax with => than adding explicit binds


    _change(value, rethrow) {
      // trim the value we run the middleware on
      let valueTrimmed = value;

      if (typeof valueTrimmed == 'string') {
        valueTrimmed = value.trim();
      }

      return this.runMiddleware(valueTrimmed).then(newValue => {
        if (newValue == valueTrimmed) {
          this.changed(value);
        } else {
          this.changed(newValue);
        }
      }).catch(err => {
        this.error(value, err.message);

        if (rethrow) {
          throw err;
        }
      });
    }

    changed(value) {
      // we also store the trimmed value
      let valueTrimmed = value;

      if (typeof valueTrimmed == 'string') {
        valueTrimmed = value.trim();
      }

      if (this.props.data) {
        this.props.data.set(this.props.name, valueTrimmed);
      }

      this.setState({
        value: value,
        valid: true
      });
    }

    render() {
      let {
        value,
        valid,
        errorMessage
      } = this.state;
      let props = Object.assign({}, this.props, {
        id: this.getId(),
        name: this.getName(),
        onChange: this.change
      });
      delete props.value;
      delete props.className;
      return pug`
        .control(
          ref=this.inputRef
          className=classnames({
            valid: valid,
            invalid: !!errorMessage,
          }) + (this.props.className ? ' ' + this.props.className : '')
        )
          ControlComponent(
            ...props
            value=value
            valid=valid
            errorMessage=errorMessage
          )
        `;
    }

  }, _temp;
}

// src/controls/mui-checkbox.js

let BaseMuiCheckbox = _decorate([control], function (_initialize, _React$Component) {
  class BaseMuiCheckbox extends _React$Component {
    constructor(props) {
      super(props);

      _initialize(this);
    }

  }

  return {
    F: BaseMuiCheckbox,
    d: [{
      kind: "field",
      static: true,
      key: "defaultProps",

      value() {
        return {
          type: 'text',
          autoComplete: 'new-password',
          autoFocus: undefined,
          disabled: undefined,
          maxLength: undefined,
          readOnly: undefined,
          placeholder: '',
          label: '',
          instructions: '',
          wrap: '',
          spellCheck: '',
          rows: undefined,
          cols: undefined,
          showErrors: true,
          options: undefined
        };
      }

    }, {
      kind: "field",
      key: "change",

      value() {
        return (e, checked) => {
          if (this.props.onChange) {
            this.props.onChange(checked);
          }
        };
      }

    }, {
      kind: "method",
      key: "render",
      value: function render() {
        let {
          id,
          data,
          emitter,
          showErrors,
          scrollToError,
          value,
          defaultValue,
          valid,
          errorMessage,
          middleware,
          instructions,
          options,
          disabled,
          onChange,
          children,
          classes,
          label,
          ...props
        } = this.props;

        if (!disabled) {
          disabled = this.disabled;
        }

        value = value || defaultValue || false;

        return pug`
      .checkbox
        FormControl(className=classes.row)
          Checkbox(
            ...props
            id=id
            disabled=disabled
            checked=value
            onChange=this.change
            className=classes.pointer
            type='checkbox'
          )
          FormLabel(
            htmlFor=id
            className=classes.label
          )
            =label || children
          if !!helper
            FormHelperText(
              disabled=disabled
              error=!!errorMessage
              className=classes.helper
            )
              =helper
      `;
      }
    }]
  };
}, React.Component);

const styles = theme => ({
  pointer: {
    cursor: 'pointer'
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  label: {
    textAlign: 'left',
    cursor: 'pointer'
  },
  helper: {
    flex: '0 1 100%'
  }
});

var muiCheckbox = withStyles(styles)(class MuiCheckbox extends BaseMuiCheckbox {});

// src/controls/mui-text.js
class BaseMuiText extends React.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "manualShrink", e => {
      this.setState({
        shrink: !!e.target.value
      });
    });

    this.state = {
      shrink: false
    };
  }

  render() {
    let {
      data,
      emitter,
      showErrors,
      scrollToError,
      value,
      defaultValue,
      valid,
      errorMessage,
      middleware,
      instructions,
      options,
      disabled,
      onChange,
      changeNotBlur,
      ...props
    } = this.props;

    if (!options) {
      options = this.options;
    }

    if (!disabled) {
      disabled = this.disabled;
    }

    if (value == null) {
      value = defaultValue;
    }

    let isSelect = props.select != null;
    let selectOptions = [];

    if (!options) {
      options = [];
    }

    if (isSelect) {
      if (props.SelectProps && props.SelectProps.native) {
        for (let k in options) {
          (key => {
            let opt = options[key];
            selectOptions.push(pug`
              option(key=key value=key)
                =opt
            `);
          })(k);
        }
      } else {
        for (let k in options) {
          (key => {
            let opt = options[key];
            selectOptions.push(pug`
              MenuItem(key=key value=key)
                =opt
            `);
          })(k);
        }
      }
    }

    return pug`
      TextField(
        ...props
        InputLabelProps={ shrink: this.state.shrink || isSelect || !!value}
        disabled=disabled
        defaultValue=isSelect ? undefined : value
        value=isSelect ? value : undefined
        helperText=helper
        error=!!errorMessage
        onBlur=isSelect ? undefined : onChange
        onChange=changeNotBlur ? onChange : (isSelect ? onChange : this.manualShrink)
      )
        =selectOptions
      `;
  }

}

_defineProperty(BaseMuiText, "defaultProps", {
  type: 'text',
  autoComplete: 'new-password',
  autoFocus: undefined,
  disabled: undefined,
  maxLength: undefined,
  readOnly: undefined,
  placeholder: '',
  label: '',
  instructions: '',
  wrap: '',
  spellCheck: '',
  rows: undefined,
  cols: undefined,
  showErrors: true,
  options: undefined,
  changeNotBlur: false
});

let MuiText = _decorate([control], function (_initialize, _BaseMuiText) {
  class MuiText extends _BaseMuiText {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: MuiText,
    d: []
  };
}, BaseMuiText);

// src/controls/mui-country.js
let countryOpts;

let MuiCountry = _decorate([control], function (_initialize, _BaseMuiText) {
  class MuiCountry extends _BaseMuiText {
    constructor(props) {
      super(props);

      _initialize(this);

      let {
        countries
      } = getLibrary();
      this.options = countryOpts || {};

      if (countryOpts) {
        return;
      }

      countries = countries.sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        }

        if (a.name > b.name) {
          return 1;
        }

        return 0;
      });

      for (let k in countries) {
        let country = countries[k];
        this.options[country.code.toUpperCase()] = country.name;
      }

      countryOpts = this.options;
    }

  }

  return {
    F: MuiCountry,
    d: [{
      kind: "field",
      static: true,
      key: "defaultProps",

      value() {
        return {
          type: 'text',
          autoComplete: 'new-password',
          autoFocus: undefined,
          disabled: undefined,
          maxLength: undefined,
          readOnly: undefined,
          placeholder: '',
          label: '',
          instructions: '',
          wrap: '',
          spellCheck: '',
          rows: undefined,
          cols: undefined,
          showErrors: true,
          options: undefined,
          select: true
        };
      }

    }]
  };
}, BaseMuiText);

// src/controls/mui-date-picker.js

let MuiDatePicker = _decorate([control], function (_initialize, _BaseMuiText) {
  class MuiDatePicker extends _BaseMuiText {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: MuiDatePicker,
    d: [{
      kind: "field",
      key: "change",

      value() {
        return e => {
          if (this.props.onChange) {
            let v = renderJSONDate(e);
            this.props.onChange(v);
          }
        };
      }

    }, {
      kind: "method",
      key: "render",
      value: function render() {
        let {
          data,
          emitter,
          showErrors,
          scrollToError,
          value,
          defaultValue,
          valid,
          errorMessage,
          middleware,
          instructions,
          InputProps,
          ...props
        } = this.props;
        props.onChange = this.change;
        value = value || defaultValue || moment();

        return React.createElement(MuiPickersContextConsumer, null, utils => {
          return React.createElement(InlineDatePicker, _extends({}, props, {
            value: moment(value),
            keyboard: true,
            utils: utils,
            onChange: this.change,
            format: defaultFormat(),
            mask: [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]
          }));
        });
      }
    }]
  };
}, BaseMuiText);

// src/controls/mui-input.js
class BaseMuiInput extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {
      data,
      emitter,
      value,
      defaultValue,
      valid,
      middleware,
      disabled,
      onChange,
      errorMessage,
      scrollToError,
      changeNotBlur,
      ...props
    } = this.props;

    if (!disabled) {
      disabled = this.disabled;
    }

    value = value || defaultValue || "";
    return pug`
      InputBase(
        ...props
        disabled=disabled
        defaultValue=value
        onBlur=changeNotBlur ? undefined : onChange
        onChange=changeNotBlur ? onChange : undefined
      )
      `;
  }

}

_defineProperty(BaseMuiInput, "defaultProps", {
  type: 'text',
  autoComplete: 'new-password',
  autoFocus: undefined,
  disabled: undefined,
  maxLength: undefined,
  readOnly: undefined,
  placeholder: '',
  instructions: '',
  wrap: '',
  spellCheck: '',
  rows: undefined,
  cols: undefined,
  options: undefined,
  changeNotBlur: false
});

let MuiInput = _decorate([control], function (_initialize, _BaseMuiInput) {
  class MuiInput extends _BaseMuiInput {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: MuiInput,
    d: []
  };
}, BaseMuiInput);

// src/controls/mui-list-picker.js

let MuiListPicker = _decorate([control], function (_initialize, _React$Component) {
  class MuiListPicker extends _React$Component {
    constructor(props) {
      super(props);

      _initialize(this);

      this.state = {
        value: props.value
      };
    }

  }

  return {
    F: MuiListPicker,
    d: [{
      kind: "method",
      key: "render",
      value: function render() {
        let {
          options,
          classes,
          showErrors,
          errorMessage,
          ...props
        } = this.props;
        let state = this.state;
        options = options || [];
        let items = [];

        for (let k in options) {
          (key => {
            let option = options[key];
            let Icon = option.icon;
            items.push(pug`
          ListItem(
            button
            classes={ selected: classes.selected }
            selected=( props.value === key )
            onClick=() => { props.onChange(key) }
            key=key
          )
            if option.icon
              ListItemIcon(className=classes.noMargin)
                Icon(style={ fontSize: 36 })
            ListItemText(
              primary=(option.primary || option.label)
              secondary=(option.secondary || option.subLabel)
              className=classes.listItemText
            )
            if props.value === key
              ListItemIcon
                CheckCircleOutlined(style={ fontSize: 36 })
        `);
          })(k);
        }

        return pug`
      .list-picker(className=classes.root)
        List
          = items
          = props.children
        if !!errorMessage && showErrors
          .error
            = errorMessage
    `;
      }
    }]
  };
}, React.Component);

const styles$1 = theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper
  },
  selected: {
    backgroundColor: theme.palette.secondary.main + ' !important'
  },
  listItemText: {
    flexGrow: 1
  },
  noMargin: {
    margin: 0
  }
});

var muiListPicker = withStyles(styles$1)(MuiListPicker);

// src/controls/mui-number.js

function NumberFormatCustom(props) {
  const {
    inputRef,
    onChange,
    ...other
  } = props;
  return React.createElement(NumberFormat, _extends({}, other, {
    getInputRef: inputRef,
    onValueChange: values => {
      onChange({
        target: {
          value: values.value
        }
      });
    },
    prefix: "$"
  }));
}

let MuiNumber = _decorate([control], function (_initialize, _BaseMuiText) {
  class MuiNumber extends _BaseMuiText {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: MuiNumber,
    d: [{
      kind: "field",
      key: "change",

      value() {
        return e => {
          let v = e;

          if (e && e.target && e.target.value) {
            v = parseFloat(e.target.value.replace(/[^0-9\.]+/g, ''));
          }

          if (v.replace) {
            v = v.replace(/[^0-9\.]+/g, '');
          }

          if (this.props.onChange) {
            this.props.onChange(v);
          }
        };
      }

    }, {
      kind: "method",
      key: "render",
      value: function render() {
        let {
          data,
          emitter,
          showErrors,
          scrollToError,
          value,
          defaultValue,
          valid,
          errorMessage,
          middleware,
          instructions,
          InputProps,
          ...props
        } = this.props;
        props.onChange = this.change;
        value = value || defaultValue || "";

        if (!InputProps) {
          InputProps = {};
        }

        InputProps.inputComponent = NumberFormatCustom;
        return pug`TextField(
      ...props
      defaultValue=value
      helperText=helper
      error=!!errorMessage
      InputProps=InputProps
    )`;
      }
    }]
  };
}, BaseMuiText);

// src/controls/mui-phone.js

function TextMaskCustom(props) {
  const {
    inputRef,
    ...other
  } = props;
  return React.createElement(MaskedInput, _extends({}, other, {
    mask: ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
    placeholderChar: '\u2000',
    showMask: true
  }));
}

let MuiPhone = _decorate([control], function (_initialize, _BaseMuiText) {
  class MuiPhone extends _BaseMuiText {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: MuiPhone,
    d: [{
      kind: "field",
      key: "change",

      value() {
        return e => {
          if (e && e.target && e.target.value) {
            e = parseInt(e.target.value.replace(/[^0-9]+/g, ''), 10);
          }

          if (this.props.onChange) {
            this.props.onChange(e);
          }
        };
      }

    }, {
      kind: "method",
      key: "render",
      value: function render() {
        let {
          data,
          emitter,
          showErrors,
          scrollToError,
          value,
          defaultValue,
          valid,
          errorMessage,
          middleware,
          instructions,
          InputProps,
          ...props
        } = this.props;
        props.onChange = this.change;
        value = value || defaultValue || "";

        if (!InputProps) {
          InputProps = {
            onChange: this.change
          };
        }

        InputProps.inputComponent = TextMaskCustom;
        return pug`TextField(
      ...props
      defaultValue=value
      helperText=helper
      error=!!errorMessage
      InputProps=InputProps
      InputLabelProps={ shrink: true }
    )`;
      }
    }]
  };
}, BaseMuiText);

// src/controls/mui-state.js
let stateOpts;

let MuiState = _decorate([control], function (_initialize, _BaseMuiText) {
  class MuiState extends _BaseMuiText {
    constructor(props) {
      super(props);

      _initialize(this);

      let {
        countries
      } = getLibrary();

      if (stateOpts) {
        return;
      }

      stateOpts = {};

      for (let k in countries) {
        let country = countries[k];
        let cCode = country.code.toUpperCase();
        let c = stateOpts[cCode];

        if (!c) {
          c = stateOpts[cCode] = {};
        }

        let subdivisions = country.subdivisions.sort((a, b) => {
          if (a.name < b.name) {
            return -1;
          }

          if (a.name > b.name) {
            return 1;
          }

          return 0;
        });

        for (let k2 in subdivisions) {
          let subdivision = country.subdivisions[k2];
          c[subdivision.code.toUpperCase()] = subdivision.name;
        }
      }
    }

  }

  return {
    F: MuiState,
    d: [{
      kind: "field",
      static: true,
      key: "defaultProps",

      value() {
        return {
          type: 'text',
          autoComplete: 'new-password',
          autoFocus: undefined,
          disabled: undefined,
          maxLength: undefined,
          readOnly: undefined,
          placeholder: '',
          label: '',
          instructions: '',
          wrap: '',
          spellCheck: '',
          rows: undefined,
          cols: undefined,
          showErrors: true,
          options: undefined,
          select: true
        };
      }

    }, {
      kind: "method",
      key: "shouldComponentUpdate",
      value: function shouldComponentUpdate(nextProps) {
        if (this.props.country != nextProps.country) {
          this.options = stateOpts[nextProps.country] || {};

          if (!this.options) {
            this.disabled = true;
          } else if (!this.options[this.props.value]) {
            this.props.onChange(Object.keys(this.options)[0]);
          }
        }

        return true;
      }
    }]
  };
}, BaseMuiText);

// src/controls/mui-switch.js
let BaseMuiSwitch = _decorate([control], function (_initialize, _React$Component) {
  class BaseMuiSwitch extends _React$Component {
    constructor(props) {
      super(props);

      _initialize(this);
    }

  }

  return {
    F: BaseMuiSwitch,
    d: [{
      kind: "field",
      static: true,
      key: "defaultProps",

      value() {
        return {
          type: 'text',
          autoComplete: 'new-password',
          autoFocus: undefined,
          disabled: undefined,
          maxLength: undefined,
          readOnly: undefined,
          placeholder: '',
          label: '',
          instructions: '',
          wrap: '',
          spellCheck: '',
          rows: undefined,
          cols: undefined,
          showErrors: true,
          options: undefined
        };
      }

    }, {
      kind: "field",
      key: "change",

      value() {
        return (e, checked) => {
          if (this.props.onChange) {
            this.props.onChange(checked);
          }
        };
      }

    }, {
      kind: "method",
      key: "render",
      value: function render() {
        let {
          id,
          data,
          emitter,
          showErrors,
          scrollToError,
          value,
          defaultValue,
          valid,
          errorMessage,
          middleware,
          instructions,
          options,
          disabled,
          onChange,
          children,
          classes,
          label,
          ...props
        } = this.props;

        if (!disabled) {
          disabled = this.disabled;
        }

        value = value || defaultValue || false;

        return pug`
      .checkbox
        FormControl(className=classes.row)
          Switch(
            ...props
            id=id
            disabled=disabled
            checked=value
            onChange=this.change
            className=classes.pointer
            type='checkbox'
          )
          FormLabel(
            htmlFor=id
            className=classes.label
          )
            =label || children
          if !!helper
            FormHelperText(
              disabled=disabled
              error=!!errorMessage
              className=classes.helper
            )
              =helper
      `;
      }
    }]
  };
}, React.Component);

const styles$2 = theme => ({
  pointer: {
    cursor: 'pointer'
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  label: {
    textAlign: 'left',
    cursor: 'pointer'
  },
  helper: {
    flex: '0 1 100%'
  }
});

var muiSwitch = withStyles(styles$2)(class MuiSwitch extends BaseMuiSwitch {});

// src/controls/mui-taxid.js

function TextMaskCustom$1(props) {
  const {
    inputRef,
    ...other
  } = props;
  return React.createElement(MaskedInput, _extends({}, other, {
    mask: [/\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
    placeholderChar: '\u2000',
    showMask: true
  }));
}

let MuiTaxId = _decorate([control], function (_initialize, _BaseMuiText) {
  class MuiTaxId extends _BaseMuiText {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: MuiTaxId,
    d: [{
      kind: "field",
      key: "change",

      value() {
        return e => {
          if (e && e.target && e.target.value) {
            e = parseInt(e.target.value.replace(/[^0-9]+/g, ''), 10);
          }

          if (this.props.onChange) {
            this.props.onChange(e);
          }
        };
      }

    }, {
      kind: "method",
      key: "render",
      value: function render() {
        let {
          data,
          emitter,
          showErrors,
          scrollToError,
          value,
          defaultValue,
          valid,
          errorMessage,
          middleware,
          instructions,
          InputProps,
          ...props
        } = this.props;
        props.onChange = this.change;
        value = value || defaultValue || "";

        if (!InputProps) {
          InputProps = {
            onChange: this.change
          };
        }

        InputProps.inputComponent = TextMaskCustom$1;
        return pug`TextField(
      ...props
      defaultValue=value
      helperText=helper
      error=!!errorMessage
      InputProps=InputProps
      InputLabelProps={ shrink: true }
    )`;
      }
    }]
  };
}, BaseMuiText);

// src/index.js

export default Form;
export { InputData, MyEmitter as Emitter, loadLibrary, rfc3339, mmddyyyy, yyyymmdd, ddmmyyyy, defaultFormat, renderDate, renderUIDate, renderJSONDate, getLanguage, toPromise, valueOrCall, control, muiCheckbox as MuiCheckbox, MuiCountry, MuiDatePicker, MuiInput, muiListPicker as MuiListPicker, MuiNumber, MuiPhone, MuiState, muiSwitch as MuiSwitch, MuiTaxId, MuiText, BaseMuiText };
//# sourceMappingURL=index.mjs.map
