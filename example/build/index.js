(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
  if (true) module.exports = factory();else { var i, a; }
})(window, function () {
  return (
    /******/
    function (modules) {
      // webpackBootstrap

      /******/
      // The module cache

      /******/
      var installedModules = {};
      /******/

      /******/
      // The require function

      /******/

      function __webpack_require__(moduleId) {
        /******/

        /******/
        // Check if module is in cache

        /******/
        if (installedModules[moduleId]) {
          /******/
          return installedModules[moduleId].exports;
          /******/
        }
        /******/
        // Create a new module (and put it into the cache)

        /******/


        var module = installedModules[moduleId] = {
          /******/
          i: moduleId,

          /******/
          l: false,

          /******/
          exports: {}
          /******/

        };
        /******/

        /******/
        // Execute the module function

        /******/

        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/

        /******/
        // Flag the module as loaded

        /******/

        module.l = true;
        /******/

        /******/
        // Return the exports of the module

        /******/

        return module.exports;
        /******/
      }
      /******/

      /******/

      /******/
      // expose the modules object (__webpack_modules__)

      /******/


      __webpack_require__.m = modules;
      /******/

      /******/
      // expose the module cache

      /******/

      __webpack_require__.c = installedModules;
      /******/

      /******/
      // define getter function for harmony exports

      /******/

      __webpack_require__.d = function (exports, name, getter) {
        /******/
        if (!__webpack_require__.o(exports, name)) {
          /******/
          Object.defineProperty(exports, name, {
            enumerable: true,
            get: getter
          });
          /******/
        }
        /******/

      };
      /******/

      /******/
      // define __esModule on exports

      /******/


      __webpack_require__.r = function (exports) {
        /******/
        if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
          /******/
          Object.defineProperty(exports, Symbol.toStringTag, {
            value: 'Module'
          });
          /******/
        }
        /******/


        Object.defineProperty(exports, '__esModule', {
          value: true
        });
        /******/
      };
      /******/

      /******/
      // create a fake namespace object

      /******/
      // mode & 1: value is a module id, require it

      /******/
      // mode & 2: merge all properties of value into the ns

      /******/
      // mode & 4: return value when already ns object

      /******/
      // mode & 8|1: behave like require

      /******/


      __webpack_require__.t = function (value, mode) {
        /******/
        if (mode & 1) value = __webpack_require__(value);
        /******/

        if (mode & 8) return value;
        /******/

        if (mode & 4 && typeof value === 'object' && value && value.__esModule) return value;
        /******/

        var ns = Object.create(null);
        /******/

        __webpack_require__.r(ns);
        /******/


        Object.defineProperty(ns, 'default', {
          enumerable: true,
          value: value
        });
        /******/

        if (mode & 2 && typeof value != 'string') for (var key in value) __webpack_require__.d(ns, key, function (key) {
          return value[key];
        }.bind(null, key));
        /******/

        return ns;
        /******/
      };
      /******/

      /******/
      // getDefaultExport function for compatibility with non-harmony modules

      /******/


      __webpack_require__.n = function (module) {
        /******/
        var getter = module && module.__esModule ?
        /******/
        function getDefault() {
          return module['default'];
        } :
        /******/
        function getModuleExports() {
          return module;
        };
        /******/

        __webpack_require__.d(getter, 'a', getter);
        /******/


        return getter;
        /******/
      };
      /******/

      /******/
      // Object.prototype.hasOwnProperty.call

      /******/


      __webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      /******/

      /******/
      // __webpack_public_path__

      /******/


      __webpack_require__.p = "";
      /******/

      /******/

      /******/
      // Load entry module and return exports

      /******/

      return __webpack_require__(__webpack_require__.s = 0);
      /******/
    }(
    /************************************************************************/

    /******/
    [
    /* 0 */

    /***/
    function (module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__); // CONCATENATED MODULE: ./src/Application.js


      class Application {
        constructor(components, options = {}) {
          const defaultOptions = {
            'dataAttribute': 'data-view-component'
          };
          this.options = { ...defaultOptions,
            ...options
          };
          this.components = components;
          this.eventTopics = {};
        }

        start() {
          this.dispatch('before:start', this);
          this.renderViewComponents(document);
          this.addEventListener('dom.update', el => {
            this.renderViewComponents(el);
          });
          this.dispatch('after:start', this);
        }

        addEventListener(event, listener) {
          if (!this.eventTopics[event] || this.eventTopics[event].length < 1) {
            this.eventTopics[event] = [];
          }

          this.eventTopics[event].push(listener);
        }

        dispatch(event, params = {}) {
          if (!this.eventTopics[event] || this.eventTopics[event].length < 1) {
            return;
          }

          this.eventTopics[event].forEach(listener => {
            listener(params);
          });
        }

        renderViewComponents(container) {
          const componentsContainer = container.querySelectorAll('[' + this.options.dataAttribute + ']');

          if (container instanceof HTMLElement && container.hasAttribute(this.options.dataAttribute)) {
            this._renderViewComponent(container);
          }

          for (const el of componentsContainer) {
            this._renderViewComponent(el);
          }
        }

        _renderViewComponent(el) {
          const componentName = el.getAttribute(this.options.dataAttribute);

          if (this.components[componentName]) {
            try {
              const componentClass = this.components[componentName];
              const component = new componentClass(this);
              component.render(el);
            } catch (exception) {
              console.log(exception);
              this.dispatch('error', exception);
            }
          }
        }

      } // CONCATENATED MODULE: ./src/Loader/ComponentsLoader.js


      class ComponentsLoader {
        static import(require) {
          const modules = {};

          require.keys().forEach(key => {
            const module = require(key);

            if (module.default) {
              const name = ComponentsLoader._getModuleName(key);

              modules[name] = module.default;
            }
          });

          return modules;
        }

        static _getModuleName(modulePath) {
          return modulePath.replace('.js', '').replace('./', '');
        }

      } // CONCATENATED MODULE: ./src/AbstractComponent.js


      class AbstractComponent {
        constructor(application) {
          this.application = application;
        }

        render(el) {
          throw new Error('Method start should be implement');
        }

      } // CONCATENATED MODULE: ./src/index.js

      /* concated harmony reexport Application */


      __webpack_require__.d(__webpack_exports__, "Application", function () {
        return Application;
      });
      /* concated harmony reexport ComponentsLoader */


      __webpack_require__.d(__webpack_exports__, "ComponentsLoader", function () {
        return ComponentsLoader;
      });
      /* concated harmony reexport AbstractComponent */


      __webpack_require__.d(__webpack_exports__, "AbstractComponent", function () {
        return AbstractComponent;
      });
      /***/

    }
    /******/
    ])
  );
});

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dist_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _dist_index_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_dist_index_js__WEBPACK_IMPORTED_MODULE_0__);

const components = _dist_index_js__WEBPACK_IMPORTED_MODULE_0__["ComponentsLoader"].import(__webpack_require__(2));
const app = new _dist_index_js__WEBPACK_IMPORTED_MODULE_0__["Application"](components);
app.addEventListener('before:start', app => {
  console.log('Application before start event');
});
app.addEventListener('after:start', app => {
  console.log('Application after start event');
});
app.start();

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./TodoApp.js": 3,
	"./TodoItem.js": 4
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 2;

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TodoApp; });
/* harmony import */ var _dist_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _dist_index_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_dist_index_js__WEBPACK_IMPORTED_MODULE_0__);

class TodoApp extends _dist_index_js__WEBPACK_IMPORTED_MODULE_0__["AbstractComponent"] {
  render(el) {
    const inputAdd = el.querySelector('.new-todo');
    inputAdd.addEventListener("keyup", event => {
      event.preventDefault();

      if (event.keyCode === 13) {
        if (inputAdd.value === '') {
          return;
        }

        this._add(inputAdd.value, el);

        inputAdd.value = '';
      }
    });
  }

  _add(value, el) {
    const list = el.querySelector('.todo-list');

    const id = this._generateId();

    const item = `
      <li data-id="${id}" data-view-component="TodoItem">
        <div class="view">
          <input class="toggle" type="checkbox">
          <label>${value}</label>
          <button class="destroy"></button>
        </div>
      </li>
    `;
    list.insertAdjacentHTML('beforeend', item);
    this.application.dispatch('dom.update', el.querySelector('[data-id=' + id + ']'));
  }

  _clearAll(el) {
    const list = el.querySelector('.todo-list');
    list.innerHTML = '';
  }

  _generateId() {
    return '_' + Math.random().toString(36).substr(2, 9);
  }

}

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TodoApp; });
/* harmony import */ var _dist_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _dist_index_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_dist_index_js__WEBPACK_IMPORTED_MODULE_0__);

class TodoApp extends _dist_index_js__WEBPACK_IMPORTED_MODULE_0__["AbstractComponent"] {
  render(el) {
    const deleteButton = el.querySelector('.destroy');
    deleteButton.addEventListener('click', event => {
      event.preventDefault();

      this._delete(el);
    });
  }

  _delete(el) {
    el.parentNode.removeChild(el);
  }

}

/***/ })
/******/ ]);
});