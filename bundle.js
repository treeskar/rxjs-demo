/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/sass/index.scss":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/sass/index.scss ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
var urlEscape = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/url-escape.js */ "./node_modules/css-loader/dist/runtime/url-escape.js");
var ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(/*! ../assets/icon-view.svg */ "./src/assets/icon-view.svg"));
var ___CSS_LOADER_URL___1___ = urlEscape(__webpack_require__(/*! ../assets/icon-edit.svg */ "./src/assets/icon-edit.svg"));

// Module
exports.push([module.i, "@charset \"UTF-8\";\nhtml {\n  --background: #222222;\n  --text: #ecf0f1;\n  --subPrimary: #7a07db;\n  --primary: #ff0290;\n  --hover: white;\n  --error: #ff3c3c;\n  --fontSize: 18px;\n  --border: #7e8a8c;\n  --cellWidth: 100px;\n  --cellHeight: 60px; }\n\n.no-select {\n  user-select: none; }\n\n.grid {\n  display: grid;\n  grid-template-areas: \"cells cells\" \". .\" \"address input\" \"note note\";\n  grid-template-columns: calc(var(--cellWidth) * 0.7) auto;\n  grid-template-rows: auto 20px 60px 20px;\n  color: var(--text); }\n  .grid .cells {\n    grid-area: cells;\n    display: grid;\n    outline: none;\n    grid-template-columns: calc(var(--cellWidth) * 0.7) repeat(6, 1fr); }\n  .grid .th-x,\n  .grid .th-y,\n  .grid .cell {\n    display: flex;\n    place-items: center;\n    place-content: center;\n    height: var(--cellHeight);\n    box-sizing: border-box;\n    border-right: 1px solid var(--border);\n    border-bottom: 1px solid var(--border);\n    padding: 5px;\n    white-space: nowrap;\n    line-height: 1.5; }\n    .grid .th-x:nth-child(7n),\n    .grid .th-y:nth-child(7n),\n    .grid .cell:nth-child(7n) {\n      border-right: 0; }\n    .grid .th-x:nth-last-child(-n+7),\n    .grid .th-y:nth-last-child(-n+7),\n    .grid .cell:nth-last-child(-n+7) {\n      border-bottom: 0; }\n  .grid .th-x,\n  .grid .th-y {\n    color: var(--border);\n    transition: .1s linear color; }\n    .grid .th-x.hover,\n    .grid .th-y.hover {\n      color: var(--hover); }\n    .grid .th-x.focus,\n    .grid .th-y.focus {\n      color: var(--primary); }\n  .grid .th-x::before {\n    content: attr(data-x); }\n  .grid .th-y {\n    width: calc(var(--cellWidth) * 0.7); }\n    .grid .th-y::before {\n      content: attr(data-y); }\n  .grid .cell {\n    transition: .1s linear color; }\n    .grid .cell.include {\n      color: var(--primary); }\n    .grid .cell:hover, .grid .cell.focus {\n      position: relative;\n      overflow: visible; }\n      .grid .cell:hover::after, .grid .cell.focus::after {\n        content: '';\n        position: absolute;\n        top: -1px;\n        left: -1px;\n        right: -1px;\n        bottom: -1px;\n        border: 1px solid;\n        border-image-slice: 1; }\n    .grid .cell:hover::after {\n      border-image-source: linear-gradient(-45deg, var(--text) 20%, transparent 40%, var(--text) 80%); }\n    .grid .cell.focus::after {\n      border-image-source: linear-gradient(-45deg, var(--primary) 20%, transparent 40%, var(--subPrimary) 80%); }\n    .grid .cell[data-error] {\n      position: relative;\n      color: var(--error); }\n      .grid .cell[data-error]::before {\n        content: '';\n        position: absolute;\n        top: 0;\n        right: 0;\n        border: 6px solid var(--error);\n        border-color: var(--error) var(--error) transparent transparent; }\n  .grid .cell-address,\n  .grid .primary-input {\n    font-weight: 100;\n    font-size: 200%; }\n  .grid .primary-input {\n    grid-area: input;\n    padding: 0 15px;\n    border: 0;\n    background-color: transparent;\n    outline: none;\n    color: inherit;\n    background-image: url(" + ___CSS_LOADER_URL___0___ + ");\n    background-position: center right;\n    background-size: 50px 50px;\n    background-repeat: no-repeat; }\n    .grid .primary-input:focus {\n      background-image: url(" + ___CSS_LOADER_URL___1___ + "); }\n      .grid .primary-input:focus + .cell-address {\n        color: var(--primary); }\n  .grid .cell-address {\n    grid-area: address;\n    display: flex;\n    place-items: center;\n    place-content: center;\n    font-style: normal;\n    width: calc(var(--cellWidth) * 0.7); }\n    .grid .cell-address:before {\n      text-transform: uppercase;\n      content: attr(data-address); }\n    .grid .cell-address:after {\n      content: \"›\";\n      font-size: 180%;\n      transform: translate(9px, -7.5%); }\n  .grid .error-message {\n    grid-area: note;\n    margin: 0;\n    color: var(--error);\n    font-size: 110%; }\n\nhtml {\n  --background: #222222;\n  --text: #ecf0f1;\n  --subPrimary: #7a07db;\n  --primary: #ff0290;\n  --hover: white;\n  --error: #ff3c3c;\n  --fontSize: 18px;\n  --border: #7e8a8c;\n  --cellWidth: 100px;\n  --cellHeight: 60px; }\n\nhtml {\n  font-family: Roboto, Helvetica, sans-serif;\n  font-size: var(--fontSize);\n  font-style: normal;\n  font-weight: 100;\n  background-color: var(--background); }\n\nhtml {\n  height: 100%;\n  display: flex;\n  margin: 0;\n  padding: 0; }\n\nbody {\n  width: 80%;\n  max-width: 900px;\n  margin: auto; }\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/url-escape.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/url-escape.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function escape(url, needQuotes) {
  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || needQuotes) {
    return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"';
  }

  return url;
};

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/assets/icon-edit.svg":
/*!**********************************!*\
  !*** ./src/assets/icon-edit.svg ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "./0768753bac2b6dccf8b1ea5530d383d4.svg";

/***/ }),

/***/ "./src/assets/icon-view.svg":
/*!**********************************!*\
  !*** ./src/assets/icon-view.svg ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "./3b18c9ff63ed5c24b8cf281a58b21d7f.svg";

/***/ }),

/***/ "./src/bootstrap.tsx":
/*!***************************!*\
  !*** ./src/bootstrap.tsx ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var jsx_1 = __webpack_require__(/*! ./jsx */ "./src/jsx.tsx");
exports.ALPHABET = ['A', 'B', 'C', 'D', 'E', 'F'];
exports.NUMBERS = Array.from({ length: 6 }, function (v, i) { return i + 1; });
exports.cellsElement = (jsx_1.default("section", { className: "cells", tabindex: "0" },
    jsx_1.default("div", { className: "th-y" }),
    exports.ALPHABET.map(function (x) { return (jsx_1.default("div", { className: "th-x", "data-x": x })); }),
    exports.NUMBERS.reduce(function (acc, y) { return acc.concat([
        jsx_1.default("div", { className: "th-y", "data-y": y })
    ], exports.ALPHABET.map(function (x) { return jsx_1.default("div", { className: "cell", "data-id": x + y }); })); }, [])));
exports.inputElement = (jsx_1.default("input", { className: "primary-input", type: "text", placeholder: "No data" }));
exports.cellAddressElement = jsx_1.default("i", { className: "cell-address" });
exports.errorMessageElement = jsx_1.default("p", { className: "error-message" });
exports.gridElement = (jsx_1.default("section", { className: "grid" },
    exports.cellsElement,
    exports.inputElement,
    exports.cellAddressElement,
    exports.errorMessageElement));


/***/ }),

/***/ "./src/cell.ts":
/*!*********************!*\
  !*** ./src/cell.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(/*! ./rxjs */ "./src/rxjs/index.ts");
var functions_1 = __webpack_require__(/*! ./functions */ "./src/functions.ts");
var bootstrap_1 = __webpack_require__(/*! ./bootstrap */ "./src/bootstrap.tsx");
exports.CELL_ID_PATTERN = /^[A-F][1-6]$/;
exports.FUNCTION_PATTERN = /^([A-Z]+)\(([A-Z0-9, ()]*)\)?$/;
exports.ARGUMENT_MATCHER = /([A-Z]+\([A-Z0-9, ()]*?\)+)|([A-Z0-9]+)/g;
var throwError = function (error) { return rxjs_1.of(new Error(error)); };
function getCellElement(id) {
    return bootstrap_1.cellsElement.querySelector("[data-id=" + id + "]");
}
exports.getCellElement = getCellElement;
var CELLS = new Map();
function getCell(id) {
    if (!CELLS.has(id)) {
        CELLS.set(id, new Cell(id));
    }
    return CELLS.get(id);
}
exports.getCell = getCell;
var Cell = /** @class */ (function () {
    function Cell(id) {
        var _this = this;
        this.id = id;
        this.input$ = new rxjs_1.BehaviorSubject('');
        this.output$ = new rxjs_1.BehaviorSubject('');
        this.dependency = [];
        this.subscription = this.input$
            .pipe(rxjs_1.switchMap(function (value) { return _this.parse(value); }))
            .subscribe(function (output) { return _this.output$.next(output); });
        this.subscription.add(this.output$.subscribe(function (output) { return _this.render(output); }));
    }
    Object.defineProperty(Cell.prototype, "element", {
        get: function () {
            return getCellElement(this.id);
        },
        enumerable: true,
        configurable: true
    });
    Cell.prototype.render = function (output) {
        var element = this.element;
        if (!(element instanceof HTMLElement)) {
            return;
        }
        if (output instanceof Error) {
            this.element.dataset.error = output.message;
            this.element.innerText = '#ERROR';
            return;
        }
        if (this.element.dataset.error) {
            delete this.element.dataset.error;
        }
        this.element.innerText = output.toString();
    };
    Cell.prototype.parse = function (input) {
        var value = input
            .trim()
            .toUpperCase()
            .replace(/ +/, '');
        this.dependency = [];
        if (!/^=.+/.test(value)) {
            return rxjs_1.of(input);
        }
        value = value.substr(1);
        return this.parseArgument(value);
    };
    Cell.prototype.parseArgument = function (argument) {
        if (exports.CELL_ID_PATTERN.test(argument)) {
            var dependency = getCell(argument);
            if (this.isDependencyValid(dependency)) {
                this.dependency.push(dependency);
                return dependency.output$;
            }
            else {
                return throwError('Circular dependency');
            }
        }
        var result = argument.match(exports.FUNCTION_PATTERN);
        if (result === null) {
            return rxjs_1.of(argument);
        }
        var functionName = result[1];
        var args = result[2];
        if (functions_1.FUNCTIONS.has(result[1])) {
            return this.exec(functions_1.FUNCTIONS.get(functionName), args.match(exports.ARGUMENT_MATCHER) || []);
        }
        return throwError('Unknown function');
    };
    Cell.prototype.isDependencyValid = function (cell) {
        var _this = this;
        if (!(cell instanceof Cell)) {
            return true;
        }
        if (cell === this) {
            return false;
        }
        return !cell.dependency.some(function (cell) { return !_this.isDependencyValid(cell); });
    };
    Cell.prototype.exec = function (operator, args) {
        var _this = this;
        var dependency$ = rxjs_1.of([]);
        if (args.length) {
            var arguments$ = args.map(function (argument) {
                return _this.parseArgument(argument);
            });
            dependency$ = rxjs_1.combineLatest(arguments$);
        }
        return dependency$.pipe(rxjs_1.map(function (args) {
            try {
                return operator.apply(void 0, args);
            }
            catch (error) {
                return new Error(error);
            }
        }));
    };
    Cell.prototype.destroy = function () {
        this.subscription.unsubscribe();
    };
    return Cell;
}());
exports.Cell = Cell;


/***/ }),

/***/ "./src/functions.ts":
/*!**************************!*\
  !*** ./src/functions.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function toNumber(number) {
    return parseInt(number, 10);
}
function sumOperator() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var result = args.reduce(function (acc, number) { return acc + toNumber(number); }, toNumber(args.shift()));
    if (Number.isNaN(result)) {
        throw Error('Each argument has to be a number');
    }
    return result;
}
function minusOperator() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var result = args.reduce(function (acc, number) { return acc - toNumber(number); }, toNumber(args.shift()));
    if (Number.isNaN(result)) {
        throw Error('Each argument has to be a number');
    }
    return result;
}
function maxOperator() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return Math.max.apply(Math, args.map(function (number) { return toNumber(number); }));
}
function minOperator() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return Math.min.apply(Math, args.map(function (number) { return toNumber(number); }));
}
function powOperator(base, exponent) {
    return Math.pow(toNumber(base), toNumber(exponent));
}
function sortOperator() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args.sort().join(', ');
}
exports.FUNCTIONS = new Map([
    ['SUM', sumOperator],
    ['MINUS', minusOperator],
    ['MAX', maxOperator],
    ['MIN', minOperator],
    ['POW', powOperator],
    ['SORT', sortOperator],
]);


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! ./sass/index.scss */ "./src/sass/index.scss");
var rxjs_1 = __webpack_require__(/*! ./rxjs */ "./src/rxjs/index.ts");
var cell_1 = __webpack_require__(/*! ./cell */ "./src/cell.ts");
var bootstrap_1 = __webpack_require__(/*! ./bootstrap */ "./src/bootstrap.tsx");
document.body.appendChild(bootstrap_1.gridElement);
var addClass = function (element, className) {
    return element && element.classList.add(className);
};
var removeClass = function (element, className) {
    return element && element.classList.remove(className);
};
var toggleClass = function (element, className) {
    return element && element.classList.toggle(className);
};
// Listen to mouse over and highlight row & column of hovered cell
rxjs_1.fromEvent(document.body, 'mousemove')
    .pipe(rxjs_1.map(function (_a) {
    var target = _a.target;
    return target.classList.contains('cell')
        ? { x: target.dataset.id[0], y: target.dataset.id[1] }
        : {};
}), rxjs_1.startWith({}), rxjs_1.pairwise())
    .subscribe(function (_a) {
    var prevCell = _a[0], newCell = _a[1];
    if (prevCell.x !== newCell.x) {
        bootstrap_1.cellsElement
            .querySelectorAll(".th-x[data-x=\"" + prevCell.x + "\"], .th-x[data-x=\"" + newCell.x + "\"]")
            .forEach(function (cell) { return toggleClass(cell, 'hover'); });
    }
    if (prevCell.y !== newCell.y) {
        bootstrap_1.cellsElement
            .querySelectorAll(".th-y[data-y=\"" + prevCell.y + "\"], .th-y[data-y=\"" + newCell.y + "\"]")
            .forEach(function (cell) { return toggleClass(cell, 'hover'); });
    }
});
var selected$ = new rxjs_1.BehaviorSubject(cell_1.getCellElement('A1'));
var MODE;
(function (MODE) {
    MODE[MODE["VIEW"] = 0] = "VIEW";
    MODE[MODE["INSERT"] = 1] = "INSERT";
})(MODE || (MODE = {}));
var mode$ = new rxjs_1.BehaviorSubject(MODE.VIEW);
var getClosestCell = rxjs_1.map(function (_a) {
    var target = _a.target;
    return target.closest('.cell');
});
// Listen to cell click
rxjs_1.fromEvent(bootstrap_1.cellsElement, 'click')
    .pipe(getClosestCell)
    .subscribe(function (newFocus) {
    selected$.next(newFocus);
});
// Display focused cell
selected$
    .pipe(rxjs_1.startWith(null), rxjs_1.pairwise())
    .subscribe(function (_a) {
    var previousCell = _a[0], currentCell = _a[1];
    if (previousCell instanceof HTMLElement) {
        var _b = Array.from(previousCell.dataset.id), x = _b[0], y = _b[1];
        bootstrap_1.gridElement
            .querySelectorAll(".th-x[data-x=\"" + x + "\"], .th-y[data-y=\"" + y + "\"]")
            .forEach(function (th) { return removeClass(th, 'focus'); });
        removeClass(previousCell, 'focus');
    }
    if (currentCell instanceof HTMLElement) {
        currentCell.classList.add('focus');
        var _c = Array.from(currentCell.dataset.id), x = _c[0], y = _c[1];
        bootstrap_1.gridElement
            .querySelectorAll(".th-x[data-x=\"" + x + "\"], .th-y[data-y=\"" + y + "\"]")
            .forEach(function (th) { return addClass(th, 'focus'); });
        addClass(currentCell, 'focus');
    }
});
// Add keyboard navigation
var KEY_CODES;
(function (KEY_CODES) {
    KEY_CODES["ArrowDown"] = "ArrowDown";
    KEY_CODES["ArrowRight"] = "ArrowRight";
    KEY_CODES["ArrowUp"] = "ArrowUp";
    KEY_CODES["ArrowLeft"] = "ArrowLeft";
    KEY_CODES["Enter"] = "Enter";
})(KEY_CODES || (KEY_CODES = {}));
rxjs_1.fromEvent(document.body, 'keydown')
    .pipe(rxjs_1.filter(function (event) { return (event.key in KEY_CODES && mode$.value === MODE.VIEW); }))
    .subscribe(function (event) {
    event.stopPropagation();
    var _a = Array.from(selected$.value.dataset.id), x = _a[0], y = _a[1];
    var index;
    switch (event.key) {
        case KEY_CODES.ArrowLeft:
            index = bootstrap_1.ALPHABET.indexOf(x) - 1;
            if (index >= 0) {
                selected$.next(cell_1.getCellElement(bootstrap_1.ALPHABET[index] + y));
            }
            break;
        case KEY_CODES.ArrowRight:
            index = bootstrap_1.ALPHABET.indexOf(x) + 1;
            if (index < bootstrap_1.ALPHABET.length) {
                selected$.next(cell_1.getCellElement(bootstrap_1.ALPHABET[index] + y));
            }
            break;
        case KEY_CODES.ArrowUp:
            index = parseInt(y, 10) - 1;
            if (index > 0) {
                selected$.next(cell_1.getCellElement(x + index));
            }
            break;
        case KEY_CODES.ArrowDown:
            index = parseInt(y, 10) + 1;
            if (index <= bootstrap_1.NUMBERS.length) {
                selected$.next(cell_1.getCellElement(x + index));
            }
            break;
        // TODO: 12 initiate editing on cell ENTER
        case KEY_CODES.Enter:
            mode$.next(MODE.INSERT);
            break;
    }
});
// emit start cell edit from input
rxjs_1.fromEvent(bootstrap_1.inputElement, 'focus')
    .pipe(rxjs_1.filter(function () { return mode$.value === MODE.VIEW; }))
    .subscribe(function () {
    mode$.next(MODE.INSERT);
});
// emit end cell edit from input
var inputBlur$ = rxjs_1.fromEvent(bootstrap_1.inputElement, 'blur').pipe(rxjs_1.filter(function () { return mode$.value === MODE.INSERT; }));
var inputEnter$ = rxjs_1.fromEvent(bootstrap_1.inputElement, 'keydown').pipe(rxjs_1.filter(function (event) { return event.key === 'Enter'; }));
rxjs_1.merge(inputBlur$, inputEnter$).subscribe(function (event) {
    event.stopPropagation();
    mode$.next(MODE.VIEW);
});
// Listen to start editing
mode$.subscribe(function (mode) {
    if (mode === MODE.INSERT) {
        bootstrap_1.inputElement.focus();
    }
    else {
        bootstrap_1.cellsElement.focus();
    }
});
// emit cell input
rxjs_1.fromEvent(bootstrap_1.inputElement, 'input')
    .pipe(rxjs_1.filter(function () { return mode$.value === MODE.INSERT; }), rxjs_1.map(function (event) { return ({
    value: event.target.value,
    cell: cell_1.getCell(selected$.value.dataset.id),
}); }))
    .subscribe(function (_a) {
    var value = _a.value, cell = _a.cell;
    cell.input$.next(value);
});
// update input cell address when cell focus changed
selected$
    .pipe(rxjs_1.filter(function (element) { return element instanceof HTMLElement; }), rxjs_1.map(function (element) { return element.dataset.id; }))
    .subscribe(function (cellId) {
    bootstrap_1.cellAddressElement.dataset.address = cellId;
    var cell = cell_1.getCell(cellId);
    bootstrap_1.inputElement.value = cell.input$.value;
});
// Listen to error messages
selected$
    .pipe(rxjs_1.filter(function (cell) { return cell instanceof HTMLElement; }), rxjs_1.map(function (cell) { return cell_1.getCell(cell.dataset.id); }), rxjs_1.switchMap(function (cell) { return cell.output$; }))
    .subscribe(function (output) {
    bootstrap_1.errorMessageElement.innerText =
        output instanceof Error ? "#ERROR: " + output.message : '';
});
// Highlight cell's dependency
mode$
    .pipe(rxjs_1.switchMap(function (mode) {
    if (mode === MODE.VIEW) {
        return rxjs_1.of([]);
    }
    var cell = cell_1.getCell(selected$.value.dataset.id);
    return cell.output$.pipe(rxjs_1.map(function () { return cell.dependency; }));
}), rxjs_1.map(function (cells) { return cells.map(function (cell) { return cell.element; }); }), rxjs_1.pairwise())
    .subscribe(function (_a) {
    var prevDependency = _a[0], newDependency = _a[1];
    prevDependency
        .filter(function (cell) { return !newDependency.includes(cell); })
        .forEach(function (cell) { return removeClass(cell, 'include'); });
    newDependency
        .filter(function (cell) { return !prevDependency.includes(cell); })
        .forEach(function (cell) { return addClass(cell, 'include'); });
});


/***/ }),

/***/ "./src/jsx.tsx":
/*!*********************!*\
  !*** ./src/jsx.tsx ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Fragment = '<></>';
function JSX(tagName, attributes) {
    var children = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        children[_i - 2] = arguments[_i];
    }
    if (tagName === Fragment) {
        return document.createDocumentFragment();
    }
    var element = document.createElement(tagName);
    if (attributes) {
        for (var _a = 0, _b = Object.keys(attributes); _a < _b.length; _a++) {
            var key = _b[_a];
            var attributeValue = attributes[key];
            if (key === 'className') {
                // JSX does not allow class as a valid name
                element.setAttribute('class', attributeValue);
            }
            else if (key.startsWith('on') &&
                typeof attributes[key] === 'function') {
                element.addEventListener(key.substring(2), attributeValue);
            }
            else {
                // <input disable />      { disable: true }
                // <input type='text' />  { type: 'text'}
                if (typeof attributeValue === 'boolean' && attributeValue) {
                    element.setAttribute(key, '');
                }
                else {
                    element.setAttribute(key, attributeValue);
                }
            }
        }
    }
    for (var _c = 0, children_1 = children; _c < children_1.length; _c++) {
        var child = children_1[_c];
        appendChild(element, child);
    }
    return element;
}
exports.default = JSX;
function appendChild(parent, child) {
    if (typeof child === 'undefined' || child === null) {
        return;
    }
    if (Array.isArray(child)) {
        for (var _i = 0, child_1 = child; _i < child_1.length; _i++) {
            var value = child_1[_i];
            appendChild(parent, value);
        }
    }
    else if (typeof child === 'string') {
        parent.appendChild(document.createTextNode(child));
    }
    else if (child instanceof Node) {
        parent.appendChild(child);
    }
    else if (typeof child === 'boolean') {
        // <>{condition && <a>Display when condition is true</a>}</>
        // if condition is false, the child is a boolean, but we don't want to display anything
    }
    else {
        parent.appendChild(document.createTextNode(String(child)));
    }
}


/***/ }),

/***/ "./src/rxjs/behaviorSubject.ts":
/*!*************************************!*\
  !*** ./src/rxjs/behaviorSubject.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var subject_1 = __webpack_require__(/*! ./subject */ "./src/rxjs/subject.ts");
var BehaviorSubject = /** @class */ (function (_super) {
    __extends(BehaviorSubject, _super);
    function BehaviorSubject(value) {
        var _this = _super.call(this) || this;
        _this.value = value;
        return _this;
    }
    BehaviorSubject.prototype.next = function (value) {
        this.value = value;
        _super.prototype.next.call(this, value);
    };
    BehaviorSubject.prototype._subscribe = function (subscriber) {
        if (!this.isStopped) {
            subscriber.next(this.value);
        }
        return _super.prototype._subscribe.call(this, subscriber);
    };
    return BehaviorSubject;
}(subject_1.Subject));
exports.BehaviorSubject = BehaviorSubject;


/***/ }),

/***/ "./src/rxjs/index.ts":
/*!***************************!*\
  !*** ./src/rxjs/index.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./observable/index */ "./src/rxjs/observable/index.ts"));
__export(__webpack_require__(/*! ./operators */ "./src/rxjs/operators/index.ts"));
__export(__webpack_require__(/*! ./observable */ "./src/rxjs/observable.ts"));
__export(__webpack_require__(/*! ./subject */ "./src/rxjs/subject.ts"));
__export(__webpack_require__(/*! ./behaviorSubject */ "./src/rxjs/behaviorSubject.ts"));
__export(__webpack_require__(/*! ./subscription */ "./src/rxjs/subscription.ts"));
__export(__webpack_require__(/*! ./subjectSubscription */ "./src/rxjs/subjectSubscription.ts"));
__export(__webpack_require__(/*! ./subscriber */ "./src/rxjs/subscriber.ts"));


/***/ }),

/***/ "./src/rxjs/observable.ts":
/*!********************************!*\
  !*** ./src/rxjs/observable.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var subscriber_1 = __webpack_require__(/*! ./subscriber */ "./src/rxjs/subscriber.ts");
var Observable = /** @class */ (function () {
    function Observable(subscribe) {
        if (typeof subscribe === 'function') {
            this._subscribe = subscribe;
        }
    }
    Observable.prototype.subscribe = function (next, error, complete) {
        var subscriber = new subscriber_1.Subscriber(next, error, complete);
        return this._subscribe(subscriber);
    };
    Observable.prototype.pipe = function () {
        var operators = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            operators[_i] = arguments[_i];
        }
        return operators.reduce(function (acc, operator) { return operator(acc); }, this);
    };
    Observable.prototype._subscribe = function (subscriber) {
        return subscriber;
    };
    return Observable;
}());
exports.Observable = Observable;


/***/ }),

/***/ "./src/rxjs/observable/combineLatest.ts":
/*!**********************************************!*\
  !*** ./src/rxjs/observable/combineLatest.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = __webpack_require__(/*! ../observable */ "./src/rxjs/observable.ts");
function combineLatest(observables) {
    return new observable_1.Observable(function (subscriber) {
        var response = [];
        var streamsSet = new Set();
        var notCompleted = observables.length;
        observables.forEach(function (observable, i) {
            var nextHandler = function (value) {
                response[i] = value;
                if (!streamsSet.has(i)) {
                    streamsSet.add(i);
                }
                if (streamsSet.size === observables.length) {
                    subscriber.next(response);
                }
            };
            var completeHandler = function () {
                if (--notCompleted === 0) {
                    subscriber.complete();
                }
            };
            var subscription = observable.subscribe(nextHandler, function (error) { return subscriber.error(error); }, completeHandler);
            subscriber.add(subscription);
        });
        return subscriber;
    });
}
exports.combineLatest = combineLatest;


/***/ }),

/***/ "./src/rxjs/observable/from.ts":
/*!*************************************!*\
  !*** ./src/rxjs/observable/from.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = __webpack_require__(/*! ../observable */ "./src/rxjs/observable.ts");
function from(iterable) {
    return new observable_1.Observable(function (subscriber) {
        for (var _i = 0, iterable_1 = iterable; _i < iterable_1.length; _i++) {
            var value = iterable_1[_i];
            subscriber.next(value);
        }
        subscriber.complete();
        return subscriber;
    });
}
exports.from = from;


/***/ }),

/***/ "./src/rxjs/observable/fromEvent.ts":
/*!******************************************!*\
  !*** ./src/rxjs/observable/fromEvent.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = __webpack_require__(/*! ../observable */ "./src/rxjs/observable.ts");
var subscription_1 = __webpack_require__(/*! ../subscription */ "./src/rxjs/subscription.ts");
function fromEvent(target, eventName) {
    return new observable_1.Observable(function (subscriber) {
        var nextHandler = function (event) { return subscriber.next(event); };
        target.addEventListener(eventName, nextHandler);
        var subscription = new subscription_1.Subscription(function () {
            return target.removeEventListener(eventName, nextHandler);
        });
        subscriber.add(subscription);
        return subscriber;
    });
}
exports.fromEvent = fromEvent;


/***/ }),

/***/ "./src/rxjs/observable/index.ts":
/*!**************************************!*\
  !*** ./src/rxjs/observable/index.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./of */ "./src/rxjs/observable/of.ts"));
__export(__webpack_require__(/*! ./from */ "./src/rxjs/observable/from.ts"));
__export(__webpack_require__(/*! ./fromEvent */ "./src/rxjs/observable/fromEvent.ts"));
__export(__webpack_require__(/*! ./merge */ "./src/rxjs/observable/merge.ts"));
__export(__webpack_require__(/*! ./combineLatest */ "./src/rxjs/observable/combineLatest.ts"));


/***/ }),

/***/ "./src/rxjs/observable/merge.ts":
/*!**************************************!*\
  !*** ./src/rxjs/observable/merge.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = __webpack_require__(/*! ../observable */ "./src/rxjs/observable.ts");
function merge() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i] = arguments[_i];
    }
    return new observable_1.Observable(function (subscriber) {
        var notCompleted = observables.length;
        var completeHandler = function () {
            if (--notCompleted === 0) {
                subscriber.complete();
            }
        };
        observables.forEach(function (observable) {
            var subscription = observable.subscribe(function (value) { return subscriber.next(value); }, function (error) { return subscriber.error(error); }, completeHandler);
            subscriber.add(subscription);
        });
        return subscriber;
    });
}
exports.merge = merge;


/***/ }),

/***/ "./src/rxjs/observable/of.ts":
/*!***********************************!*\
  !*** ./src/rxjs/observable/of.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = __webpack_require__(/*! ../observable */ "./src/rxjs/observable.ts");
function of(value) {
    return new observable_1.Observable(function (subscriber) {
        subscriber.next(value);
        subscriber.complete();
        return subscriber;
    });
}
exports.of = of;


/***/ }),

/***/ "./src/rxjs/operators/filter.ts":
/*!**************************************!*\
  !*** ./src/rxjs/operators/filter.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = __webpack_require__(/*! ../observable */ "./src/rxjs/observable.ts");
function filter(project) {
    return function (source) {
        return new observable_1.Observable(function (subscriber) {
            return filterOperator(project, source, subscriber);
        });
    };
}
exports.filter = filter;
function filterOperator(project, source, subscriber) {
    var count = 0;
    var nextHandler = function (value) {
        try {
            if (project(value, count++)) {
                subscriber.next(value);
            }
        }
        catch (error) {
            subscriber.error(error);
        }
    };
    var subscription = source.subscribe(nextHandler, function (error) { return subscriber.error(error); }, function () { return subscriber.complete(); });
    subscriber.add(subscription);
    return subscriber;
}


/***/ }),

/***/ "./src/rxjs/operators/index.ts":
/*!*************************************!*\
  !*** ./src/rxjs/operators/index.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./filter */ "./src/rxjs/operators/filter.ts"));
__export(__webpack_require__(/*! ./map */ "./src/rxjs/operators/map.ts"));
__export(__webpack_require__(/*! ./startWith */ "./src/rxjs/operators/startWith.ts"));
__export(__webpack_require__(/*! ./pairwise */ "./src/rxjs/operators/pairwise.ts"));
__export(__webpack_require__(/*! ./switchMap */ "./src/rxjs/operators/switchMap.ts"));


/***/ }),

/***/ "./src/rxjs/operators/map.ts":
/*!***********************************!*\
  !*** ./src/rxjs/operators/map.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = __webpack_require__(/*! ../observable */ "./src/rxjs/observable.ts");
function map(project) {
    return function (source) {
        return new observable_1.Observable(function (subscriber) {
            return mapOperator(project, source, subscriber);
        });
    };
}
exports.map = map;
function mapOperator(project, source, subscriber) {
    var count = 0;
    var nextHandler = function (value) {
        var result;
        try {
            result = project(value, count++);
        }
        catch (error) {
            subscriber.error(error);
            return;
        }
        subscriber.next(result);
    };
    var subscription = source.subscribe(nextHandler, function (error) { return subscriber.error(error); }, function () { return subscriber.complete(); });
    subscriber.add(subscription);
    return subscriber;
}


/***/ }),

/***/ "./src/rxjs/operators/pairwise.ts":
/*!****************************************!*\
  !*** ./src/rxjs/operators/pairwise.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = __webpack_require__(/*! ../observable */ "./src/rxjs/observable.ts");
function pairwise() {
    return function (source) {
        return new observable_1.Observable(function (subscriber) {
            return pairwiseOperator(source, subscriber);
        });
    };
}
exports.pairwise = pairwise;
function pairwiseOperator(source, subscriber) {
    var result;
    var nextHandler = function (value) {
        if (result) {
            result = [result[1], value];
            subscriber.next(result);
        }
        else {
            result = [value, value];
        }
    };
    var subscription = source.subscribe(nextHandler, function (error) { return subscriber.error(error); }, function () { return subscriber.complete(); });
    subscriber.add(subscription);
    return subscriber;
}


/***/ }),

/***/ "./src/rxjs/operators/startWith.ts":
/*!*****************************************!*\
  !*** ./src/rxjs/operators/startWith.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = __webpack_require__(/*! ../observable */ "./src/rxjs/observable.ts");
function startWith(startValue) {
    return function (source) {
        return new observable_1.Observable(function (subscriber) {
            return startWithOperator(startValue, source, subscriber);
        });
    };
}
exports.startWith = startWith;
function startWithOperator(startValue, source, subscriber) {
    subscriber.next(startValue);
    var subscription = source.subscribe(function (value) { return subscriber.next(value); }, function (error) { return subscriber.error(error); }, function () { return subscriber.complete(); });
    subscriber.add(subscription);
    return subscriber;
}


/***/ }),

/***/ "./src/rxjs/operators/switchMap.ts":
/*!*****************************************!*\
  !*** ./src/rxjs/operators/switchMap.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = __webpack_require__(/*! ../observable */ "./src/rxjs/observable.ts");
function switchMap(project) {
    return function (source) {
        return new observable_1.Observable(function (subscriber) {
            return switchMapOperator(project, source, subscriber);
        });
    };
}
exports.switchMap = switchMap;
function switchMapOperator(project, source, subscriber) {
    var nextSubscription;
    var nextHandler = function (value) {
        if (nextSubscription) {
            subscriber.remove(nextSubscription);
            nextSubscription.unsubscribe();
        }
        var next;
        try {
            next = project(value);
            nextSubscription = next.subscribe(function (nextValue) { return subscriber.next(nextValue); }, function (error) { return subscriber.error(error); });
            subscriber.add(nextSubscription);
        }
        catch (error) {
            subscriber.error(error);
        }
    };
    var subscription = source.subscribe(nextHandler, function (error) { return subscriber.error(error); }, function () { return subscriber.complete(); });
    subscriber.add(subscription);
    return subscriber;
}


/***/ }),

/***/ "./src/rxjs/subject.ts":
/*!*****************************!*\
  !*** ./src/rxjs/subject.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = __webpack_require__(/*! ./observable */ "./src/rxjs/observable.ts");
var subjectSubscription_1 = __webpack_require__(/*! ./subjectSubscription */ "./src/rxjs/subjectSubscription.ts");
var Subject = /** @class */ (function (_super) {
    __extends(Subject, _super);
    function Subject() {
        var _this = _super.call(this) || this;
        _this.subscribers = [];
        _this.isStopped = false;
        _this.hasError = false;
        return _this;
    }
    Subject.prototype.next = function (value) {
        if (!this.isStopped) {
            this.subscribers.forEach(function (subscriber) { return subscriber.next(value); });
        }
    };
    Subject.prototype.error = function (error) {
        if (this.isStopped) {
            return;
        }
        this.isStopped = true;
        this.hasError = true;
        this.thrownError = error;
        this.subscribers.forEach(function (subscriber) { return subscriber.error(error); });
    };
    Subject.prototype.complete = function () {
        if (this.isStopped) {
            return;
        }
        this.isStopped = true;
        this.subscribers.forEach(function (subscriber) { return subscriber.complete(); });
    };
    Subject.prototype.unsubscribe = function () {
        this.isStopped = true;
        this.subscribers = [];
    };
    Subject.prototype._subscribe = function (subscriber) {
        if (this.hasError) {
            subscriber.error(this.thrownError);
            return subscriber;
        }
        if (this.isStopped) {
            subscriber.complete();
            return subscriber;
        }
        this.subscribers.push(subscriber);
        return new subjectSubscription_1.SubjectSubscription(this, subscriber);
    };
    return Subject;
}(observable_1.Observable));
exports.Subject = Subject;


/***/ }),

/***/ "./src/rxjs/subjectSubscription.ts":
/*!*****************************************!*\
  !*** ./src/rxjs/subjectSubscription.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var subscription_1 = __webpack_require__(/*! ./subscription */ "./src/rxjs/subscription.ts");
var SubjectSubscription = /** @class */ (function (_super) {
    __extends(SubjectSubscription, _super);
    function SubjectSubscription(subject, subscriber) {
        var _this = _super.call(this) || this;
        _this.subject = subject;
        _this.subscriber = subscriber;
        return _this;
    }
    SubjectSubscription.prototype._unsubscribe = function () {
        this.subscriber.unsubscribe();
        if (this.subject.isStopped) {
            return;
        }
        var index = this.subject.subscribers.indexOf(this.subscriber);
        if (index > -1) {
            this.subject.subscribers.splice(index, 1);
        }
    };
    return SubjectSubscription;
}(subscription_1.Subscription));
exports.SubjectSubscription = SubjectSubscription;


/***/ }),

/***/ "./src/rxjs/subscriber.ts":
/*!********************************!*\
  !*** ./src/rxjs/subscriber.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var subscription_1 = __webpack_require__(/*! ./subscription */ "./src/rxjs/subscription.ts");
var Subscriber = /** @class */ (function (_super) {
    __extends(Subscriber, _super);
    function Subscriber(next, error, complete) {
        if (error === void 0) { error = function () { }; }
        if (complete === void 0) { complete = function () { }; }
        var _this = _super.call(this) || this;
        if (typeof next === 'function') {
            _this._observer = { next: next, error: error, complete: complete };
        }
        else {
            _this._observer = next;
        }
        return _this;
    }
    Subscriber.prototype.next = function (value) {
        if (!this.closed) {
            this._observer.next(value);
        }
    };
    Subscriber.prototype.error = function (error) {
        if (!this.closed) {
            this._observer.error(error);
            this.unsubscribe();
        }
    };
    Subscriber.prototype.complete = function () {
        if (!this.closed) {
            this._observer.complete();
            this.unsubscribe();
        }
    };
    return Subscriber;
}(subscription_1.Subscription));
exports.Subscriber = Subscriber;


/***/ }),

/***/ "./src/rxjs/subscription.ts":
/*!**********************************!*\
  !*** ./src/rxjs/subscription.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Subscription = /** @class */ (function () {
    function Subscription(unsubscribe) {
        this.closed = false;
        this._subscriptions = [];
        if (unsubscribe) {
            this._unsubscribe = unsubscribe;
        }
    }
    Subscription.prototype.add = function (subscription) {
        this._subscriptions.push(subscription);
        return subscription;
    };
    Subscription.prototype.remove = function (subscription) {
        var index = this._subscriptions.indexOf(subscription);
        if (index > -1) {
            this._subscriptions.splice(index, 1);
        }
    };
    Subscription.prototype.unsubscribe = function () {
        if (this.closed) {
            return;
        }
        this.closed = true;
        this._subscriptions.forEach(function (subscription) { return subscription.unsubscribe(); });
        this._unsubscribe();
    };
    Subscription.prototype._unsubscribe = function () { };
    return Subscription;
}());
exports.Subscription = Subscription;


/***/ }),

/***/ "./src/sass/index.scss":
/*!*****************************!*\
  !*** ./src/sass/index.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/lib/loader.js!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/sass/index.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map