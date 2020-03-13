(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("jaspp", [], factory);
	else if(typeof exports === 'object')
		exports["jaspp"] = factory();
	else
		root["jaspp"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./src/Application.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Application =
/*#__PURE__*/
function () {
  /**
   * @param {Object} components
   * @param {Object} options
   * @param {Boolean} debug
   */
  function Application(components) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var debug = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    _classCallCheck(this, Application);

    var defaultOptions = {
      dataAttribute: 'data-view-component'
    };
    this.options = _objectSpread({}, defaultOptions, {}, options);
    this.components = components;
    this.eventTopics = {};
    this.debug = debug;
  }
  /**
   * Start all components
   */


  _createClass(Application, [{
    key: "start",
    value: function start() {
      var _this = this;

      this.dispatch('before:start', this);
      this.renderViewComponents(document);
      this.addEventListener('dom.update', function (el) {
        _this.renderViewComponents(el);
      });
      this.dispatch('after:start', this);
    }
    /**
     * @param {String} event
     * @param {Function} listener
     */

  }, {
    key: "addEventListener",
    value: function addEventListener(event, listener) {
      if (!this.eventTopics[event] || this.eventTopics[event].length < 1) {
        this.eventTopics[event] = [];
      }

      this.eventTopics[event].push(listener);
    }
    /**
     * @param {String} event
     * @param {Object} params
     */

  }, {
    key: "dispatch",
    value: function dispatch(event) {
      var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      if (!this.eventTopics[event] || this.eventTopics[event].length < 1) {
        return;
      }

      this.eventTopics[event].forEach(function (listener) {
        listener(params);
      });
    }
    /**
     * @param {Element} container
     */

  }, {
    key: "renderViewComponents",
    value: function renderViewComponents(container) {
      var _this2 = this;

      if (container instanceof HTMLElement && container.hasAttribute(this.options.dataAttribute)) {
        this.renderViewComponent(container);
      }

      var componentsContainer = Array.prototype.slice.call(container.querySelectorAll("[".concat(this.options.dataAttribute, "]")), 0);
      componentsContainer.forEach(function (el) {
        _this2.renderViewComponent(el);
      });
    }
    /**
     * @param {Element} el
     */

  }, {
    key: "renderViewComponent",
    value: function renderViewComponent(el) {
      var componentName = el.getAttribute(this.options.dataAttribute);

      if (this.components[componentName]) {
        try {
          var componentClass = this.components[componentName]; // eslint-disable-next-line new-cap

          var component = new componentClass(this);
          component.render(el);
        } catch (exception) {
          this.dispatch('error', exception);

          if (this.debug) {
            throw exception;
          }
        }
      }
    }
  }]);

  return Application;
}();


// CONCATENATED MODULE: ./src/Loader/ComponentsLoader.js
function ComponentsLoader_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ComponentsLoader_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function ComponentsLoader_createClass(Constructor, protoProps, staticProps) { if (protoProps) ComponentsLoader_defineProperties(Constructor.prototype, protoProps); if (staticProps) ComponentsLoader_defineProperties(Constructor, staticProps); return Constructor; }

var ComponentsLoader =
/*#__PURE__*/
function () {
  function ComponentsLoader() {
    ComponentsLoader_classCallCheck(this, ComponentsLoader);
  }

  ComponentsLoader_createClass(ComponentsLoader, null, [{
    key: "import",
    value: function _import(require) {
      var modules = {};

      require.keys().forEach(function (key) {
        // eslint-disable-next-line import/no-dynamic-require
        var module = require(key);

        if (module.default) {
          var name = ComponentsLoader.getModuleName(key);
          modules[name] = module.default;
        }
      });

      return modules;
    }
  }, {
    key: "getModuleName",
    value: function getModuleName(modulePath) {
      return modulePath.replace('.js', '').replace('./', '');
    }
  }]);

  return ComponentsLoader;
}();


// CONCATENATED MODULE: ./src/AbstractComponent.js
function AbstractComponent_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function AbstractComponent_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function AbstractComponent_createClass(Constructor, protoProps, staticProps) { if (protoProps) AbstractComponent_defineProperties(Constructor.prototype, protoProps); if (staticProps) AbstractComponent_defineProperties(Constructor, staticProps); return Constructor; }

/* eslint class-methods-use-this: "off", no-unused-vars: "off" */
var AbstractComponent =
/*#__PURE__*/
function () {
  /**
   * @param {Application} application
   */
  function AbstractComponent(application) {
    AbstractComponent_classCallCheck(this, AbstractComponent);

    this.application = application;
  }
  /**
   * @param {Element} el
   */


  AbstractComponent_createClass(AbstractComponent, [{
    key: "render",
    value: function render(el) {
      throw new Error('Method start should be implement');
    }
  }]);

  return AbstractComponent;
}();


// CONCATENATED MODULE: ./src/index.js
/* concated harmony reexport Application */__webpack_require__.d(__webpack_exports__, "Application", function() { return Application; });
/* concated harmony reexport ComponentsLoader */__webpack_require__.d(__webpack_exports__, "ComponentsLoader", function() { return ComponentsLoader; });
/* concated harmony reexport AbstractComponent */__webpack_require__.d(__webpack_exports__, "AbstractComponent", function() { return AbstractComponent; });




/***/ })
/******/ ]);
});
//# sourceMappingURL=index.js.map