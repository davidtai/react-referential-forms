'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var Emitter = _interopDefault(require('es6-event-emitter'));
var React = _interopDefault(require('react'));
var ref = _interopDefault(require('referential'));
var classnames = _interopDefault(require('classnames'));
var moment = _interopDefault(require('moment-timezone'));
var akasha = _interopDefault(require('akasha'));
var Checkbox = _interopDefault(require('@material-ui/core/Checkbox'));
var MenuItem = _interopDefault(require('@material-ui/core/MenuItem'));
var FormControl = _interopDefault(require('@material-ui/core/FormControl'));
var FormLabel = _interopDefault(require('@material-ui/core/FormLabel'));
var FormHelperText = _interopDefault(require('@material-ui/core/FormHelperText'));
var styles = require('@material-ui/core/styles');
var TextField = _interopDefault(require('@material-ui/core/TextField'));
var materialUiPickers = require('material-ui-pickers');
var InputBase = _interopDefault(require('@material-ui/core/InputBase'));
var List = _interopDefault(require('@material-ui/core/List'));
var ListItem = _interopDefault(require('@material-ui/core/ListItem'));
var ListItemIcon = _interopDefault(require('@material-ui/core/ListItemIcon'));
var ListItemText = _interopDefault(require('@material-ui/core/ListItemText'));
var CheckCircleOutlined = _interopDefault(require('@material-ui/icons/CheckCircleOutlined'));
var NumberFormat = _interopDefault(require('react-number-format'));
var MaskedInput = _interopDefault(require('react-text-mask'));
var Switch = _interopDefault(require('@material-ui/core/Switch'));
var Button = _interopDefault(require('@material-ui/core/Button'));
var Dialog = _interopDefault(require('@material-ui/core/Dialog'));
var DialogActions = _interopDefault(require('@material-ui/core/DialogActions'));
var DialogContent = _interopDefault(require('@material-ui/core/DialogContent'));
var DialogTitle = _interopDefault(require('@material-ui/core/DialogTitle'));
var IconButton = _interopDefault(require('@material-ui/core/IconButton'));
var PhotoCamera = _interopDefault(require('@material-ui/icons/PhotoCamera'));
var Webcam = _interopDefault(require('react-webcam'));

//  rollupPluginBabelHelpers.js

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
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

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
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

// src/utils/toPromise.js
var toPromise = function toPromise(fn) {
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return new Promise(function (resolve, reject) {
      requestAnimationFrame(function () {
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

var MyEmitter =
/*#__PURE__*/
function (_Emitter) {
  _inherits(MyEmitter, _Emitter);

  function MyEmitter() {
    _classCallCheck(this, MyEmitter);

    return _possibleConstructorReturn(this, _getPrototypeOf(MyEmitter).apply(this, arguments));
  }

  _createClass(MyEmitter, [{
    key: "trigger",
    value: function trigger(event) {
      var _this = this;

      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      if (typeof event === 'undefined') {
        throw new Error('You must provide an event to trigger.');
      }

      var listeners = this.events[event];
      var onceListeners = [];
      var results = [];

      if (typeof listeners !== 'undefined') {
        results = listeners.map(function (v, k) {
          if (v.once) onceListeners.unshift(k);
          return v.cb.apply(_this, args);
        });
        onceListeners.forEach(function (v, k) {
          listeners.splice(k, 1);
        });
      }

      return results;
    } // clear events and then bind new event

  }, {
    key: "unique",
    value: function unique() {
      this.off(arguments.length <= 0 ? undefined : arguments[0]);
      return this.on.apply(this, arguments);
    }
  }, {
    key: "off",
    value: function off(event, cb) {
      if (typeof this.events[event] === 'undefined') {
        return this;
      }

      var listeners = this.events[event];

      if (!cb) {
        delete this.events[event];
        this.eventLength--;
        return this;
      }

      listeners.forEach(function (v, i) {
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
  }]);

  return MyEmitter;
}(Emitter);

// src/form.js
var InputData =
/*#__PURE__*/
function () {
  function InputData(_ref) {
    var type = _ref.type,
        name = _ref.name,
        value = _ref.value,
        defaultValue = _ref.defaultValue,
        data = _ref.data,
        scrollToError = _ref.scrollToError,
        middleware = _ref.middleware,
        options = _ref.options;

    _classCallCheck(this, InputData);

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
    this.middleware = this.middleware.map(function (m) {
      if (m.isPromise) {
        return m;
      }

      return toPromise(m);
    });
    this.emitter = new MyEmitter();
  }

  _createClass(InputData, [{
    key: "val",
    value: function val(v) {
      var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (force) {
        return this.value = this.data.set(this.name, v).get(this.name);
      }

      return this.emitter.trigger('control:value', v)[0];
    }
  }]);

  return InputData;
}();
InputData.defaultProps = {
  data: ref({}),
  autoComplete: 'off',
  showControlErrors: false
};

var Form =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Form, _React$Component);

  function Form(props) {
    var _this;

    _classCallCheck(this, Form);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Form).call(this, props)); // Hash array of InputDatas keyed by names

    _this.submit = function (e) {
      if (e) {
        e.preventDefault();
        e.stopPropagation();
      }

      if (_this.state.submitted) {
        return;
      }

      _this.setState({
        loading: true,
        submitted: false
      });

      var is_submitError = false;
      return _this.runMiddleware(true).then(function () {
        is_submitError = true;

        var ret = _this._submit();

        if (ret && ret.then) {
          return ret.then(function () {
            _this.setState({
              loading: false,
              submitted: _this.props.singleSubmit
            });
          });
        }

        _this.setState({
          loading: false,
          submitted: _this.props.singleSubmit
        });
      })["catch"](function (err) {
        _this.setState({
          errorMessage: _this.props.showErrors || is_submitError ? err.message : '',
          loading: false,
          submitted: false
        });
      });
    };

    _this.inputs = {};
    _this.state = {
      errorMessage: '',
      validating: false,
      loading: false,
      submitted: false
    };
    return _this;
  }

  _createClass(Form, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      for (var k in this.inputs) {
        this.inputs[k].emitter.off('control:submit');
        this.inputs[k].emitter.off('control:value');
      }
    }
  }, {
    key: "runMiddleware",
    value: function runMiddleware(rethrow) {
      var _this2 = this;

      this.setState({
        errorMessage: '',
        validating: true
      });
      var inputs = [];

      for (var k in this.inputs) {
        inputs.push(this.inputs[k]);
      }

      var ps = inputs.map(function (i) {
        return i.emitter.trigger('control:submit');
      });
      return Promise.all([].concat.apply([], ps)).then(function () {
        _this2.setState({
          validating: false
        });
      })["catch"](function (err) {
        _this2.setState({
          validating: false,
          errorMessage: _this2.props.showControlErrors ? err.message : ''
        });

        if (rethrow) {
          throw err;
        }
      });
    }
  }, {
    key: "getErrorMessage",
    value: function getErrorMessage() {
      return this.state.errorMessage || '';
    }
  }, {
    key: "_submit",
    value: function _submit() {
      return new Promise(function (resolve) {
        resolve(true);
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement("form", {
        autoComplete: this.props.autoComplete,
        onSubmit: this.submit,
        className: classnames({
          validating: this.state.validating,
          loading: this.state.loading,
          submitted: this.state.submitted
        })
      }, this.state.loading || this.state.validating ? React.createElement("div", {
        className: "progress"
      }, React.createElement("div", {
        className: "indeterminate"
      })) : null, props.children, this.getErrorMessage() ? React.createElement("div", {
        className: "error"
      }, this.getErrorMessage()) : null);
    }
  }]);

  return Form;
}(React.Component);

Form.defaultProps = {
  showErrors: false,
  singleSubmit: false
};

// src/utils/language.js
var getLanguage = function getLanguage() {
  if (typeof window != 'undefined') {
    return window.navigator.userLanguage || window.navigator.languages[0] || window.navigator.language;
  }
};

// src/utils/date.js
var rfc3339 = 'YYYY-MM-DDTHH:mm:ssZ';
var mmddyyyy = 'MM/DD/YYYY';
var yyyymmdd = 'YYYY/MM/DD';
var ddmmyyyy = 'DD/MM/YYYY';
var defaultFormat = function defaultFormat() {
  if (getLanguage() == 'en-US') {
    return mmddyyyy;
  } else {
    return ddmmyyyy;
  }
};
var renderDate = function renderDate(date, format) {
  if (!format) {
    format = defaultFormat();
  }

  return moment(date).format(format);
};
var renderUIDate = function renderUIDate(date) {
  if (!date) {
    return '';
  }

  return renderDate(date);
};
var renderJSONDate = function renderJSONDate(date) {
  return renderDate(date, rfc3339);
};

// src/library.js
var lastChecked, countries;
var loadLibrary = function loadLibrary(client) {
  // fetch library data
  lastChecked = akasha.get('library.lastChecked');
  countries = akasha.get('library.countries') || [];
  lastChecked = renderDate(new Date(), rfc3339);
  return client.library.daisho({
    hasCountries: !!countries && countries.length != 0,
    lastChecked: renderDate(lastChecked || '2000-01-01', rfc3339)
  }).then(function (res) {
    countries = res.countries || countries;
    akasha.set('library.lastChecked', lastChecked);
    akasha.set('library.countries', countries);
  });
};
var getLibrary = function getLibrary() {
  return {
    lastChecked: lastChecked || akasha.get('library.lastChecked'),
    countries: countries || akasha.get('library.countries') || []
  };
};

// src/utils/valueOrCall.js
var valueOrCall = function valueOrCall(valueOrFunc) {
  if (typeof valueOrFunc == 'function') {
    return valueOrFunc();
  }

  return valueOrFunc;
};

// src/controls/control.js

var controlId = 0;
function control(ControlComponent) {
  var _temp;

  return _temp =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(Control, _React$Component);

    // Props should be
    function Control(props) {
      var _this;

      _classCallCheck(this, Control);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Control).call(this, props));

      _this.change = function (event) {
        _this.setState({
          errorMessage: '',
          valid: false,
          changeId: _this.changeId
        });

        _this.lastUIChangeId = _this.changeId + 1;
        return _this._change(_this.getValue(event));
      };

      _this.lastUIChangeId = _this.changeId = 0; // Unique ID for referencing the control

      _this.controlId = controlId++;

      if (props.emitter && _this.props.data) {
        props.emitter.unique('control:submit', function () {
          return _this._change(_this.state.value, true);
        }); // emitter.off to force any duplicate unmounted inputs out of scope

        props.emitter.unique('control:value', function (v) {
          if (v != null) {
            _this.props.data.set(_this.props.name, v);

            _this.setState({
              value: v
            });

            if (v != _this.props.defaultValue) {
              _this._change(v);
            }
          }

          return _this.props.data.get(_this.props.name);
        });
      }

      var value;

      if (_this.props.data) {
        value = _this.props.data.get(_this.props.name);
      }

      if (value == null) {
        value = props.value;
      }

      if (value == null) {
        value == props.defaultValue;
      }

      _this.state = {
        value: value,
        valid: false,
        errorMessage: '',
        appIsMounted: false
      };

      if (value != props.defaultValue) {
        _this._change(value);
      }

      _this.inputRef = React.createRef();
      return _this;
    }

    _createClass(Control, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this2 = this;

        requestAnimationFrame(function () {
          _this2.setState({
            appIsMounted: true
          });
        });

        if (this.props.data) {
          this._onSetLock = false;

          this._onSet = function (k, v) {
            if (k == _this2.props.name && v != _this2.state.value) {
              if (!_this2._onSetLock) {
                _this2._onSetLock = true;

                _this2.change(v).then(function () {
                  _this2._onSetLock = false;
                })["catch"](function () {
                  _this2._onSetLock = false;
                });
              }
            }
          };

          this.props.data.on('set', this._onSet);
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        // These are unbound on the form level
        // this.props.emitter.off('control:submit')
        // this.props.emitter.off('control:value')
        //
        if (this.props.data) {
          this.props.data.off('set', this._onSet);
        }
      }
    }, {
      key: "getId",
      value: function getId() {
        return 'control-' + this.controlId;
      }
    }, {
      key: "getName",
      value: function getName() {
        return valueOrCall(this.props.name || '').replace(/\\./g, '-');
      }
    }, {
      key: "getValue",
      value: function getValue(eventOrValue) {
        if (eventOrValue == null) {
          return '';
        }

        if (!eventOrValue.target) {
          return eventOrValue;
        }

        var val = eventOrValue.target.value;
        return val || '';
      }
    }, {
      key: "getErrorMessage",
      value: function getErrorMessage() {
        return this.state.errorMessage || '';
      }
    }, {
      key: "error",
      value: function error(value, e) {
        var _this3 = this;

        this.setState({
          errorMessage: e,
          value: value,
          valid: false
        }, function () {
          if (_this3.props.scrollToError && _this3.inputRef.current) {
            _this3.inputRef.current.scrollIntoView();

            _this3.inputRef.current.focus();
          }
        });
      }
    }, {
      key: "runMiddleware",
      value: function runMiddleware(value) {
        var _this4 = this;

        // need to replace with actual middleware stack
        var _ref = this.props.middleware || [],
            _ref2 = _toArray(_ref),
            p = _ref2[0],
            middleware = _ref2.slice(1);

        if (!p) {
          return new Promise(function (resolve) {
            resolve(value);
          });
        }

        var oldValue = this.state.value;
        var name = this.props.name;
        p = p.call(this.props, value, oldValue, name).then(function (v) {
          return v;
        })["catch"](function (err) {
          throw err;
        });

        var _loop = function _loop(k) {
          var m = middleware[k];
          p = p.then(function (v) {
            return new Promise(function (resolve, reject) {
              m.call(_this4.props, v, oldValue, name).then(function (v) {
                resolve(v);
              })["catch"](function (err) {
                reject(err);
              });
            });
          });
        };

        for (var k in middleware) {
          _loop(k);
        }

        return p;
      } // Note, its atleast 2 characters (max savings unbounded) shorter to abuse ES6 automatic this binding syntax with => than adding explicit binds

    }, {
      key: "_change",
      value: function _change(value, rethrow) {
        var _this5 = this;

        this.changeId++; // trim the value we run the middleware on

        var valueTrimmed = value;

        if (typeof valueTrimmed == 'string') {
          valueTrimmed = value.trim();
        }

        return this.runMiddleware(valueTrimmed).then(function (newValue) {
          if (newValue == valueTrimmed) {
            _this5.changed(value);
          } else {
            _this5.changed(newValue);
          }
        })["catch"](function (err) {
          _this5.error(value, err.message);

          if (rethrow) {
            throw err;
          }
        });
      }
    }, {
      key: "changed",
      value: function changed(value) {
        // we also store the trimmed value
        var valueTrimmed = value;

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
    }, {
      key: "render",
      value: function render() {
        var _this6 = this;

        var _this$state = this.state,
            value = _this$state.value,
            valid = _this$state.valid,
            errorMessage = _this$state.errorMessage;
        var props = Object.assign({}, this.props, {
          id: this.getId(),
          name: this.getName(),
          onChange: this.change
        });
        delete props.value;
        delete props.className;
        var lastUIChangeId = this.lastUIChangeId;
        this.lastUIChangeId = this.changeId; // Do a quick refresh to remove the force set value

        if (lastUIChangeId < this.changeId) {
          requestAnimationFrame(function () {
            _this6.forceUpdate();
          });
        }

        return React.createElement("div", {
          ref: this.inputRef,
          className: "control " + (classnames({
            valid: valid,
            invalid: !!errorMessage
          }) + (this.props.className ? ' ' + this.props.className : ''))
        }, React.createElement(ControlComponent, _extends({}, props, {
          value: value,
          valid: valid,
          forceNewValue: lastUIChangeId < this.changeId,
          errorMessage: errorMessage
        })));
      }
    }]);

    return Control;
  }(React.Component), _temp;
}

// src/controls/mui-checkbox.js

var _class, _class2, _temp;

var BaseMuiCheckbox = control(_class = (_temp = _class2 =
/*#__PURE__*/
function (_React$Component) {
  _inherits(BaseMuiCheckbox, _React$Component);

  function BaseMuiCheckbox(props) {
    var _this;

    _classCallCheck(this, BaseMuiCheckbox);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(BaseMuiCheckbox).call(this, props));

    _this.change = function (e, checked) {
      if (_this.props.onChange) {
        _this.props.onChange(checked);
      }
    };

    return _this;
  }

  _createClass(BaseMuiCheckbox, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          id = _this$props.id,
          data = _this$props.data,
          emitter = _this$props.emitter,
          showErrors = _this$props.showErrors,
          scrollToError = _this$props.scrollToError,
          value = _this$props.value,
          defaultValue = _this$props.defaultValue,
          valid = _this$props.valid,
          errorMessage = _this$props.errorMessage,
          middleware = _this$props.middleware,
          instructions = _this$props.instructions,
          options = _this$props.options,
          disabled = _this$props.disabled,
          onChange = _this$props.onChange,
          children = _this$props.children,
          classes = _this$props.classes,
          label = _this$props.label,
          props = _objectWithoutProperties(_this$props, ["id", "data", "emitter", "showErrors", "scrollToError", "value", "defaultValue", "valid", "errorMessage", "middleware", "instructions", "options", "disabled", "onChange", "children", "classes", "label"]);

      if (!disabled) {
        disabled = this.disabled;
      }

      value = value || defaultValue || false;
      var helper = instructions;

      if (showErrors && errorMessage) {
        helper = errorMessage;
      }

      return React.createElement("div", {
        className: "checkbox"
      }, React.createElement(FormControl, {
        className: classes.row
      }, React.createElement(Checkbox, _extends({}, props, {
        id: id,
        disabled: disabled,
        checked: value,
        onChange: this.change,
        type: "checkbox",
        className: classes.pointer
      })), React.createElement(FormLabel, {
        htmlFor: id,
        className: classes.label
      }, label || children), !!helper ? React.createElement(FormHelperText, {
        disabled: disabled,
        error: !!errorMessage,
        className: classes.helper
      }, helper) : null));
    }
  }]);

  return BaseMuiCheckbox;
}(React.Component), _class2.defaultProps = {
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
}, _temp)) || _class;

var styles$1 = function styles$$1(theme) {
  return {
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
  };
};

var muiCheckbox = styles.withStyles(styles$1)(
/*#__PURE__*/
function (_BaseMuiCheckbox) {
  _inherits(MuiCheckbox, _BaseMuiCheckbox);

  function MuiCheckbox() {
    _classCallCheck(this, MuiCheckbox);

    return _possibleConstructorReturn(this, _getPrototypeOf(MuiCheckbox).apply(this, arguments));
  }

  return MuiCheckbox;
}(BaseMuiCheckbox));

// src/controls/mui-text.js

var _class$1;
var BaseMuiText =
/*#__PURE__*/
function (_React$Component) {
  _inherits(BaseMuiText, _React$Component);

  function BaseMuiText(props) {
    var _this;

    _classCallCheck(this, BaseMuiText);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(BaseMuiText).call(this, props));

    _this.manualShrink = function (e) {
      _this.setState({
        shrink: !!e.target.value
      });
    };

    _this.state = {
      shrink: false
    };
    return _this;
  }

  _createClass(BaseMuiText, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          data = _this$props.data,
          emitter = _this$props.emitter,
          showErrors = _this$props.showErrors,
          scrollToError = _this$props.scrollToError,
          value = _this$props.value,
          defaultValue = _this$props.defaultValue,
          valid = _this$props.valid,
          errorMessage = _this$props.errorMessage,
          middleware = _this$props.middleware,
          instructions = _this$props.instructions,
          options = _this$props.options,
          disabled = _this$props.disabled,
          onChange = _this$props.onChange,
          changeNotBlur = _this$props.changeNotBlur,
          forceNewValue = _this$props.forceNewValue,
          props = _objectWithoutProperties(_this$props, ["data", "emitter", "showErrors", "scrollToError", "value", "defaultValue", "valid", "errorMessage", "middleware", "instructions", "options", "disabled", "onChange", "changeNotBlur", "forceNewValue"]);

      if (!options) {
        options = this.options;
      }

      if (!disabled) {
        disabled = this.disabled;
      }

      if (value == null) {
        value = defaultValue;
      }

      var helper = instructions;

      if (showErrors && errorMessage) {
        helper = errorMessage;
      }

      var isSelect = props.select != null;
      var selectOptions = [];

      if (!options) {
        options = [];
      }

      if (isSelect) {
        if (props.SelectProps && props.SelectProps["native"]) {
          for (var k in options) {
            (function (key) {
              var opt = options[key];
              selectOptions.push(React.createElement("option", {
                key: key,
                value: key
              }, opt));
            })(k);
          }
        } else {
          for (var _k in options) {
            (function (key) {
              var opt = options[key];
              selectOptions.push(React.createElement(MenuItem, {
                key: key,
                value: key
              }, opt));
            })(_k);
          }
        }
      }

      return React.createElement(TextField, _extends({}, props, {
        InputLabelProps: {
          shrink: this.state.shrink || isSelect || !!value
        },
        disabled: disabled,
        defaultValue: isSelect ? undefined : value,
        value: forceNewValue ? value : isSelect ? value : undefined,
        helperText: helper,
        error: !!errorMessage,
        onBlur: isSelect ? undefined : onChange,
        onChange: changeNotBlur ? onChange : isSelect ? onChange : this.manualShrink
      }), selectOptions);
    }
  }]);

  return BaseMuiText;
}(React.Component);
BaseMuiText.defaultProps = {
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
};

var MuiText = control(_class$1 =
/*#__PURE__*/
function (_BaseMuiText) {
  _inherits(MuiText, _BaseMuiText);

  function MuiText() {
    _classCallCheck(this, MuiText);

    return _possibleConstructorReturn(this, _getPrototypeOf(MuiText).apply(this, arguments));
  }

  return MuiText;
}(BaseMuiText)) || _class$1;

// src/controls/mui-country.js

var _class$2, _class2$1, _temp$1;
var countryOpts;

var MuiCountry = control(_class$2 = (_temp$1 = _class2$1 =
/*#__PURE__*/
function (_BaseMuiText) {
  _inherits(MuiCountry, _BaseMuiText);

  function MuiCountry(props) {
    var _this;

    _classCallCheck(this, MuiCountry);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MuiCountry).call(this, props));

    var _getLibrary = getLibrary(),
        countries = _getLibrary.countries;

    _this.options = countryOpts || {};

    if (countryOpts) {
      return _possibleConstructorReturn(_this);
    }

    countries = countries.sort(function (a, b) {
      if (a.name < b.name) {
        return -1;
      }

      if (a.name > b.name) {
        return 1;
      }

      return 0;
    });

    for (var k in countries) {
      var country = countries[k];
      _this.options[country.code.toUpperCase()] = country.name;
    }

    countryOpts = _this.options;
    return _this;
  }

  return MuiCountry;
}(BaseMuiText), _class2$1.defaultProps = {
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
}, _temp$1)) || _class$2;

// src/controls/mui-date-picker.js

var _class$3, _temp$2;

var MuiDatePicker = control(_class$3 = (_temp$2 =
/*#__PURE__*/
function (_BaseMuiText) {
  _inherits(MuiDatePicker, _BaseMuiText);

  function MuiDatePicker() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, MuiDatePicker);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(MuiDatePicker)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.change = function (e) {
      if (_this.props.onChange) {
        var v = renderJSONDate(e);

        _this.props.onChange(v);
      }
    };

    return _this;
  }

  _createClass(MuiDatePicker, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          data = _this$props.data,
          emitter = _this$props.emitter,
          showErrors = _this$props.showErrors,
          scrollToError = _this$props.scrollToError,
          value = _this$props.value,
          defaultValue = _this$props.defaultValue,
          valid = _this$props.valid,
          errorMessage = _this$props.errorMessage,
          middleware = _this$props.middleware,
          instructions = _this$props.instructions,
          InputProps = _this$props.InputProps,
          props = _objectWithoutProperties(_this$props, ["data", "emitter", "showErrors", "scrollToError", "value", "defaultValue", "valid", "errorMessage", "middleware", "instructions", "InputProps"]);

      props.onChange = this.change;
      value = value || defaultValue || moment();

      return React.createElement(materialUiPickers.MuiPickersContextConsumer, null, function (utils) {
        return React.createElement(materialUiPickers.InlineDatePicker, _extends({}, props, {
          value: moment(value).tz('UTC'),
          keyboard: true,
          utils: utils,
          onChange: _this2.change,
          format: defaultFormat(),
          mask: [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]
        }));
      });
    }
  }]);

  return MuiDatePicker;
}(BaseMuiText), _temp$2)) || _class$3;

// src/controls/mui-input.js

var _class$4;
var BaseMuiInput =
/*#__PURE__*/
function (_React$Component) {
  _inherits(BaseMuiInput, _React$Component);

  function BaseMuiInput(props) {
    _classCallCheck(this, BaseMuiInput);

    return _possibleConstructorReturn(this, _getPrototypeOf(BaseMuiInput).call(this, props));
  }

  _createClass(BaseMuiInput, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          data = _this$props.data,
          emitter = _this$props.emitter,
          value = _this$props.value,
          defaultValue = _this$props.defaultValue,
          valid = _this$props.valid,
          middleware = _this$props.middleware,
          disabled = _this$props.disabled,
          onChange = _this$props.onChange,
          errorMessage = _this$props.errorMessage,
          scrollToError = _this$props.scrollToError,
          changeNotBlur = _this$props.changeNotBlur,
          forceNewValue = _this$props.forceNewValue,
          props = _objectWithoutProperties(_this$props, ["data", "emitter", "value", "defaultValue", "valid", "middleware", "disabled", "onChange", "errorMessage", "scrollToError", "changeNotBlur", "forceNewValue"]);

      if (!disabled) {
        disabled = this.disabled;
      }

      value = value || defaultValue || "";
      return React.createElement(InputBase, _extends({}, props, {
        disabled: disabled,
        defaultValue: value,
        value: forceNewValue ? value : undefined,
        onBlur: changeNotBlur ? undefined : onChange,
        onChange: changeNotBlur ? onChange : undefined
      }));
    }
  }]);

  return BaseMuiInput;
}(React.Component);
BaseMuiInput.defaultProps = {
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
};

var MuiInput = control(_class$4 =
/*#__PURE__*/
function (_BaseMuiInput) {
  _inherits(MuiInput, _BaseMuiInput);

  function MuiInput() {
    _classCallCheck(this, MuiInput);

    return _possibleConstructorReturn(this, _getPrototypeOf(MuiInput).apply(this, arguments));
  }

  return MuiInput;
}(BaseMuiInput)) || _class$4;

// src/controls/mui-list-picker.js

var _class$5;

var MuiListPicker = control(_class$5 =
/*#__PURE__*/
function (_React$Component) {
  _inherits(MuiListPicker, _React$Component);

  function MuiListPicker(props) {
    var _this;

    _classCallCheck(this, MuiListPicker);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MuiListPicker).call(this, props));
    _this.state = {
      value: props.value
    };
    return _this;
  }

  _createClass(MuiListPicker, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          options = _this$props.options,
          classes = _this$props.classes,
          showErrors = _this$props.showErrors,
          errorMessage = _this$props.errorMessage,
          props = _objectWithoutProperties(_this$props, ["options", "classes", "showErrors", "errorMessage"]);

      var state = this.state;
      options = options || [];
      var items = [];

      for (var k in options) {
        (function (key) {
          var option = options[key];
          var Icon = option.icon;
          items.push(React.createElement(ListItem, {
            button: true,
            classes: {
              selected: classes.selected
            },
            selected: props.value === key,
            onClick: function onClick() {
              props.onChange(key);
            },
            key: key
          }, option.icon ? React.createElement(ListItemIcon, {
            className: classes.noMargin
          }, React.createElement(Icon, {
            style: {
              fontSize: 36
            }
          })) : null, React.createElement(ListItemText, {
            primary: option.primary || option.label,
            secondary: option.secondary || option.subLabel,
            className: classes.listItemText
          }), props.value === key ? React.createElement(ListItemIcon, null, React.createElement(CheckCircleOutlined, {
            style: {
              fontSize: 36
            }
          })) : null));
        })(k);
      }

      return React.createElement("div", {
        className: "list-picker " + classes.root
      }, React.createElement(List, null, items, props.children), !!errorMessage && showErrors ? React.createElement("div", {
        className: "error"
      }, errorMessage) : null);
    }
  }]);

  return MuiListPicker;
}(React.Component)) || _class$5;

var styles$2 = function styles$$1(theme) {
  return {
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
  };
};

var muiListPicker = styles.withStyles(styles$2)(MuiListPicker);

// src/controls/mui-number.js

var _class$6, _temp$3;

function NumberFormatCustom(props) {
  var inputRef = props.inputRef,
      onChange = props.onChange,
      other = _objectWithoutProperties(props, ["inputRef", "onChange"]);

  return React.createElement(NumberFormat, _extends({}, other, {
    getInputRef: inputRef,
    onValueChange: function onValueChange(values) {
      onChange({
        target: {
          value: values.value
        }
      });
    },
    prefix: "$"
  }));
}

var MuiNumber = control(_class$6 = (_temp$3 =
/*#__PURE__*/
function (_BaseMuiText) {
  _inherits(MuiNumber, _BaseMuiText);

  function MuiNumber() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, MuiNumber);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(MuiNumber)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.change = function (e) {
      var v = e;

      if (e && e.target && e.target.value) {
        v = parseFloat(e.target.value.replace(/[^0-9\.]+/g, ''));
      }

      if (v.replace) {
        v = v.replace(/[^0-9\.]+/g, '');
      }

      if (_this.props.onChange) {
        _this.props.onChange(v);
      }
    };

    return _this;
  }

  _createClass(MuiNumber, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          data = _this$props.data,
          emitter = _this$props.emitter,
          showErrors = _this$props.showErrors,
          scrollToError = _this$props.scrollToError,
          value = _this$props.value,
          defaultValue = _this$props.defaultValue,
          valid = _this$props.valid,
          errorMessage = _this$props.errorMessage,
          middleware = _this$props.middleware,
          instructions = _this$props.instructions,
          InputProps = _this$props.InputProps,
          forceNewValue = _this$props.forceNewValue,
          props = _objectWithoutProperties(_this$props, ["data", "emitter", "showErrors", "scrollToError", "value", "defaultValue", "valid", "errorMessage", "middleware", "instructions", "InputProps", "forceNewValue"]);

      props.onChange = this.change;
      value = value || defaultValue || "";
      var helper = instructions;

      if (showErrors && errorMessage) {
        helper = errorMessage;
      }

      if (!InputProps) {
        InputProps = {};
      }

      InputProps.inputComponent = NumberFormatCustom;
      return React.createElement(TextField, _extends({}, props, {
        defaultValue: value,
        value: forceNewValue ? value : undefined,
        helperText: helper,
        error: !!errorMessage,
        InputProps: InputProps
      }));
    }
  }]);

  return MuiNumber;
}(BaseMuiText), _temp$3)) || _class$6;

// src/controls/mui-phone.js

var _class$7, _temp$4;

function TextMaskCustom(props) {
  var inputRef = props.inputRef,
      other = _objectWithoutProperties(props, ["inputRef"]);

  return React.createElement(MaskedInput, _extends({}, other, {
    mask: ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
    placeholderChar: "\u2000",
    showMask: true
  }));
}

var MuiPhone = control(_class$7 = (_temp$4 =
/*#__PURE__*/
function (_BaseMuiText) {
  _inherits(MuiPhone, _BaseMuiText);

  function MuiPhone() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, MuiPhone);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(MuiPhone)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.change = function (e) {
      if (e && e.target && e.target.value) {
        e = parseInt(e.target.value.replace(/[^0-9]+/g, ''), 10);
      }

      if (_this.props.onChange) {
        _this.props.onChange(e);
      }
    };

    return _this;
  }

  _createClass(MuiPhone, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          data = _this$props.data,
          emitter = _this$props.emitter,
          showErrors = _this$props.showErrors,
          scrollToError = _this$props.scrollToError,
          value = _this$props.value,
          defaultValue = _this$props.defaultValue,
          valid = _this$props.valid,
          errorMessage = _this$props.errorMessage,
          middleware = _this$props.middleware,
          instructions = _this$props.instructions,
          InputProps = _this$props.InputProps,
          forceNewValue = _this$props.forceNewValue,
          props = _objectWithoutProperties(_this$props, ["data", "emitter", "showErrors", "scrollToError", "value", "defaultValue", "valid", "errorMessage", "middleware", "instructions", "InputProps", "forceNewValue"]);

      props.onChange = this.change;
      value = value || defaultValue || "";
      var helper = instructions;

      if (showErrors && errorMessage) {
        helper = errorMessage;
      }

      if (!InputProps) {
        InputProps = {
          onChange: this.change
        };
      }

      InputProps.inputComponent = TextMaskCustom;
      return React.createElement(TextField, _extends({}, props, {
        defaultValue: value,
        value: forceNewValue ? value : undefined,
        helperText: helper,
        error: !!errorMessage,
        InputProps: InputProps,
        InputLabelProps: {
          shrink: true
        }
      }));
    }
  }]);

  return MuiPhone;
}(BaseMuiText), _temp$4)) || _class$7;

// src/controls/mui-state.js

var _class$8, _class2$2, _temp$5;
var stateOpts;

var MuiState = control(_class$8 = (_temp$5 = _class2$2 =
/*#__PURE__*/
function (_BaseMuiText) {
  _inherits(MuiState, _BaseMuiText);

  _createClass(MuiState, [{
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
  }]);

  function MuiState(props) {
    var _this;

    _classCallCheck(this, MuiState);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MuiState).call(this, props));

    var _getLibrary = getLibrary(),
        countries = _getLibrary.countries;

    if (stateOpts) {
      return _possibleConstructorReturn(_this);
    }

    stateOpts = {};

    for (var k in countries) {
      var country = countries[k];
      var cCode = country.code.toUpperCase();
      var c = stateOpts[cCode];

      if (!c) {
        c = stateOpts[cCode] = {};
      }

      var subdivisions = country.subdivisions.sort(function (a, b) {
        if (a.name < b.name) {
          return -1;
        }

        if (a.name > b.name) {
          return 1;
        }

        return 0;
      });

      for (var k2 in subdivisions) {
        var subdivision = country.subdivisions[k2];
        c[subdivision.code.toUpperCase()] = subdivision.name;
      }
    }

    return _this;
  }

  return MuiState;
}(BaseMuiText), _class2$2.defaultProps = {
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
}, _temp$5)) || _class$8;

// src/controls/mui-switch.js

var _class$9, _class2$3, _temp$6;
var BaseMuiSwitch = control(_class$9 = (_temp$6 = _class2$3 =
/*#__PURE__*/
function (_React$Component) {
  _inherits(BaseMuiSwitch, _React$Component);

  function BaseMuiSwitch(props) {
    var _this;

    _classCallCheck(this, BaseMuiSwitch);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(BaseMuiSwitch).call(this, props));

    _this.change = function (e, checked) {
      if (_this.props.onChange) {
        _this.props.onChange(checked);
      }
    };

    return _this;
  }

  _createClass(BaseMuiSwitch, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          id = _this$props.id,
          data = _this$props.data,
          emitter = _this$props.emitter,
          showErrors = _this$props.showErrors,
          scrollToError = _this$props.scrollToError,
          value = _this$props.value,
          defaultValue = _this$props.defaultValue,
          valid = _this$props.valid,
          errorMessage = _this$props.errorMessage,
          middleware = _this$props.middleware,
          instructions = _this$props.instructions,
          options = _this$props.options,
          disabled = _this$props.disabled,
          onChange = _this$props.onChange,
          children = _this$props.children,
          classes = _this$props.classes,
          label = _this$props.label,
          props = _objectWithoutProperties(_this$props, ["id", "data", "emitter", "showErrors", "scrollToError", "value", "defaultValue", "valid", "errorMessage", "middleware", "instructions", "options", "disabled", "onChange", "children", "classes", "label"]);

      if (!disabled) {
        disabled = this.disabled;
      }

      value = value || defaultValue || false;
      var helper = instructions;

      if (showErrors && errorMessage) {
        helper = errorMessage;
      }

      return React.createElement("div", {
        className: "checkbox"
      }, React.createElement(FormControl, {
        className: classes.row
      }, React.createElement(Switch, _extends({}, props, {
        id: id,
        disabled: disabled,
        checked: value,
        onChange: this.change,
        type: "checkbox",
        className: classes.pointer
      })), React.createElement(FormLabel, {
        htmlFor: id,
        className: classes.label
      }, label || children), !!helper ? React.createElement(FormHelperText, {
        disabled: disabled,
        error: !!errorMessage,
        className: classes.helper
      }, helper) : null));
    }
  }]);

  return BaseMuiSwitch;
}(React.Component), _class2$3.defaultProps = {
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
}, _temp$6)) || _class$9;

var styles$3 = function styles$$1(theme) {
  return {
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
  };
};

var muiSwitch = styles.withStyles(styles$3)(
/*#__PURE__*/
function (_BaseMuiSwitch) {
  _inherits(MuiSwitch, _BaseMuiSwitch);

  function MuiSwitch() {
    _classCallCheck(this, MuiSwitch);

    return _possibleConstructorReturn(this, _getPrototypeOf(MuiSwitch).apply(this, arguments));
  }

  return MuiSwitch;
}(BaseMuiSwitch));

// src/controls/mui-taxid.js

var _class$a, _temp$7;

function TextMaskCustom$1(props) {
  var inputRef = props.inputRef,
      other = _objectWithoutProperties(props, ["inputRef"]);

  return React.createElement(MaskedInput, _extends({}, other, {
    mask: [/\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
    placeholderChar: "\u2000",
    showMask: true
  }));
}

var MuiTaxId = control(_class$a = (_temp$7 =
/*#__PURE__*/
function (_BaseMuiText) {
  _inherits(MuiTaxId, _BaseMuiText);

  function MuiTaxId() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, MuiTaxId);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(MuiTaxId)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.change = function (e) {
      if (e && e.target && e.target.value) {
        e = parseInt(e.target.value.replace(/[^0-9]+/g, ''), 10);
      }

      if (_this.props.onChange) {
        _this.props.onChange(e);
      }
    };

    return _this;
  }

  _createClass(MuiTaxId, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          data = _this$props.data,
          emitter = _this$props.emitter,
          showErrors = _this$props.showErrors,
          scrollToError = _this$props.scrollToError,
          value = _this$props.value,
          defaultValue = _this$props.defaultValue,
          valid = _this$props.valid,
          errorMessage = _this$props.errorMessage,
          middleware = _this$props.middleware,
          instructions = _this$props.instructions,
          InputProps = _this$props.InputProps,
          forceNewValue = _this$props.forceNewValue,
          props = _objectWithoutProperties(_this$props, ["data", "emitter", "showErrors", "scrollToError", "value", "defaultValue", "valid", "errorMessage", "middleware", "instructions", "InputProps", "forceNewValue"]);

      props.onChange = this.change;
      value = value || defaultValue || "";
      var helper = instructions;

      if (showErrors && errorMessage) {
        helper = errorMessage;
      }

      if (!InputProps) {
        InputProps = {
          onChange: this.change
        };
      }

      InputProps.inputComponent = TextMaskCustom$1;
      return React.createElement(TextField, _extends({}, props, {
        defaultValue: value,
        value: forceNewValue ? value : undefined,
        helperText: helper,
        error: !!errorMessage,
        InputProps: InputProps,
        InputLabelProps: {
          shrink: true
        }
      }));
    }
  }]);

  return MuiTaxId;
}(BaseMuiText), _temp$7)) || _class$a;

// src/controls/webcam.js

var _class$b, _class2$4, _temp$8;

var WebcamCapture = control(_class$b = (_temp$8 = _class2$4 =
/*#__PURE__*/
function (_React$Component) {
  _inherits(WebcamCapture, _React$Component);

  function WebcamCapture(props) {
    var _this;

    _classCallCheck(this, WebcamCapture);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(WebcamCapture).call(this, props));

    _this.setRef = function (webcam) {
      _this.webcam = webcam;
    };

    _this.capture = function () {
      _this.props.onChange(_this.webcam.getScreenshot());

      _this.close();
    };

    _this.open = function () {
      _this.setState({
        opened: true
      });
    };

    _this.close = function () {
      _this.setState({
        opened: false
      });
    };

    _this.state = {
      opened: false
    };
    return _this;
  }

  _createClass(WebcamCapture, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          videoContraints = _this$props.videoContraints,
          classes = _this$props.classes,
          onChange = _this$props.onChange,
          value = _this$props.value,
          errorMessage = _this$props.errorMessage,
          showErrors = _this$props.showErrors,
          props = _objectWithoutProperties(_this$props, ["videoContraints", "classes", "onChange", "value", "errorMessage", "showErrors"]);

      var videoConstraints = Object.assign({
        width: 1280,
        height: 720,
        facingMode: 'user'
      }, videoConstraints || {});
      return React.createElement("div", {
        className: "webcam-capture"
      }, value ? React.createElement(Button, {
        onClick: this.open,
        className: classes.button
      }, React.createElement("img", {
        src: value
      })) : React.createElement(IconButton, {
        onClick: this.open,
        className: classes.button
      }, React.createElement(PhotoCamera, {
        style: {
          fontSize: 200
        }
      })), !!errorMessage && showErrors ? React.createElement("div", {
        className: "error"
      }, errorMessage) : null, React.createElement(Dialog, {
        open: this.state.opened,
        onClose: this.close
      }, React.createElement(DialogTitle, null, props.instructions), React.createElement(DialogContent, null, React.createElement(Webcam, _extends({}, props, {
        ref: this.setRef,
        videoConstraints: videoConstraints
      }))), React.createElement(DialogActions, null, React.createElement(Button, {
        onClick: this.capture
      }, "SAVE PHOTO"))));
    }
  }]);

  return WebcamCapture;
}(React.Component), _class2$4.defaultProps = {
  screenshotFormat: 'image/jpeg',
  videoConstraints: {
    width: 1280,
    height: 720,
    facingMode: 'user'
  },
  screenshotQuality: .7,
  audio: false,
  height: 'auto',
  width: 'auto',
  instructions: 'Take a photo',
  showErrors: true
}, _temp$8)) || _class$b;

var styles$4 = function styles$$1(theme) {
  return {
    button: {
      margin: theme.spacing.unit,
      cursor: 'pointer'
    }
  };
};

var webcam = styles.withStyles(styles$4)(WebcamCapture);

// src/index.js

exports.MuiPickersUtilsProvider = materialUiPickers.MuiPickersUtilsProvider;
exports.default = Form;
exports.InputData = InputData;
exports.Emitter = MyEmitter;
exports.loadLibrary = loadLibrary;
exports.rfc3339 = rfc3339;
exports.mmddyyyy = mmddyyyy;
exports.yyyymmdd = yyyymmdd;
exports.ddmmyyyy = ddmmyyyy;
exports.defaultFormat = defaultFormat;
exports.renderDate = renderDate;
exports.renderUIDate = renderUIDate;
exports.renderJSONDate = renderJSONDate;
exports.getLanguage = getLanguage;
exports.toPromise = toPromise;
exports.valueOrCall = valueOrCall;
exports.control = control;
exports.MuiCheckbox = muiCheckbox;
exports.MuiCountry = MuiCountry;
exports.MuiDatePicker = MuiDatePicker;
exports.MuiInput = MuiInput;
exports.MuiListPicker = muiListPicker;
exports.MuiNumber = MuiNumber;
exports.MuiPhone = MuiPhone;
exports.MuiState = MuiState;
exports.MuiSwitch = muiSwitch;
exports.MuiTaxId = MuiTaxId;
exports.MuiText = MuiText;
exports.BaseMuiText = BaseMuiText;
exports.WebcamCapture = webcam;
//# sourceMappingURL=index.js.map
