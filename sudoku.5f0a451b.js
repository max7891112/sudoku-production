// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"xTqK":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var RenderGameField = /*#__PURE__*/function () {
  function RenderGameField() {
    _classCallCheck(this, RenderGameField);
  }
  _createClass(RenderGameField, [{
    key: "renderGameField",
    value: function renderGameField(row, column, container) {
      var table = document.createElement('table'); // создаем таблицу
      var gameField = document.querySelector(container);
      for (var i = 0; i < row; i++) {
        var tr = document.createElement('tr');
        for (var j = 0; j < column; j++) {
          var td = document.createElement('td');
          var span = document.createElement('span');
          td.append(span);
          tr.append(td);
        }
        table.append(tr);
      }
      gameField.append(table);
    }
  }]);
  return RenderGameField;
}();
var _default = new RenderGameField();
exports.default = _default;
},{}],"TMVZ":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _TechnicalFunc = _interopRequireDefault(require("../../TechnicalFunc/TechnicalFunc.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var InputNumber = /*#__PURE__*/function () {
  function InputNumber() {
    _classCallCheck(this, InputNumber);
    this.numpads = document.querySelectorAll('.sudoku__numpad-item');
    this.scriptListener = '';
  }
  _createClass(InputNumber, [{
    key: "fillRandomEmptyCell",
    value: function fillRandomEmptyCell(value) {
      var tds = document.querySelectorAll('td');
      for (var i = 0; i <= 81; i++) {
        var random = _TechnicalFunc.default.randomMinMax(0, 100);
        if (random < value) {
          if (tds[i]) {
            tds[i].firstElementChild.innerHTML += "\n                        <div class=\"hidden-element\">\n                            <span></span>\n                        </div>\n                    ";
          }
          ;
        }
        ;
      }
      ;
    }
  }, {
    key: "gameLevel",
    value: function gameLevel(level) {
      if (level == 'easy') {
        this.fillRandomEmptyCell(3);
      }
      ;
      if (level == 'medium') {
        this.fillRandomEmptyCell(60);
      }
      ;
      if (level == 'hard') {
        ;
        this.fillRandomEmptyCell(70);
      }
      ;
    }
  }, {
    key: "listenerForTd",
    value: function listenerForTd() {
      var _this = this;
      var tdListener = '';
      document.addEventListener('click', tdListener = function tdListener(event) {
        var mainTarget = event.target.closest('.hidden-element');
        if (!mainTarget) return;
        _this.scriptListener = function (target) {
          var hiddenElems = document.querySelectorAll('.hidden-element');
          var tr = '';
          if (target) {
            tr = target.parentNode.parentNode.parentNode.childNodes;
          } else {
            return;
          }
          var tds = document.querySelectorAll('td');
          var targetIndex = '';
          var _iterator = _createForOfIteratorHelper(hiddenElems),
            _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var hiddenElem = _step.value;
              if (hiddenElem.classList.contains('clicked')) {
                hiddenElem.classList.remove('clicked');
              }
              if (hiddenElem.classList.contains('illumination')) {
                hiddenElem.classList.remove('illumination');
                hiddenElem.parentNode.parentNode.classList.remove('illumination');
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
          target.classList.add('clicked');
          for (var i = 0; i < tds.length; i++) {
            // перебор td для убирания класса
            if (tds[i].firstElementChild.firstElementChild == target) {
              targetIndex = i;
            }
            if (tds[i].classList.contains('illumination')) {
              tds[i].classList.remove('illumination');
            }
            ;
          }
          ;
          var illuminationSquare = function illuminationSquare(index) {
            var squares = [];
            squares.push([0, 1, 2, 9, 10, 11, 18, 19, 20], [3, 4, 5, 12, 13, 14, 21, 22, 23], [6, 7, 8, 15, 16, 17, 24, 25, 26], [27, 28, 29, 36, 37, 38, 45, 46, 47], [30, 31, 32, 39, 40, 41, 48, 49, 50], [33, 34, 35, 42, 43, 44, 51, 52, 53], [54, 55, 56, 63, 64, 65, 72, 73, 74], [57, 58, 59, 66, 67, 68, 75, 76, 77], [60, 61, 62, 69, 70, 71, 78, 79, 80]);
            for (var _i = 0, _squares = squares; _i < _squares.length; _i++) {
              var square = _squares[_i];
              if (square.includes(index)) {
                var _iterator2 = _createForOfIteratorHelper(square),
                  _step2;
                try {
                  for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                    var elem = _step2.value;
                    tds[elem].classList.add('illumination');
                    if (tds[elem].firstElementChild.firstElementChild && tds[elem].firstElementChild.firstElementChild != target) {
                      tds[elem].firstElementChild.firstElementChild.classList.add('illumination');
                    }
                    ;
                  }
                } catch (err) {
                  _iterator2.e(err);
                } finally {
                  _iterator2.f();
                }
                ;
              }
              ;
            }
            ;
          };
          illuminationSquare(targetIndex);
          while (targetIndex >= 9) {
            targetIndex = targetIndex - 9;
          }
          for (var _i2 = targetIndex; _i2 < tds.length; _i2 = _i2 + 9) {
            tds[_i2].classList.add('illumination');
            if (tds[_i2].firstElementChild.firstElementChild && tds[_i2].firstElementChild.firstElementChild != target) {
              tds[_i2].firstElementChild.firstElementChild.classList.add('illumination');
            }
          }
          var _iterator3 = _createForOfIteratorHelper(tr),
            _step3;
          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var td = _step3.value;
              td.classList.add('illumination');
              if (td.firstElementChild.firstElementChild && td.firstElementChild.firstElementChild != target) {
                td.firstElementChild.firstElementChild.classList.add('illumination');
              }
              ;
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
          ;
        };
        _this.scriptListener(mainTarget);
      });
      document.addEventListener('keydown', function (event) {
        if (event.code == 'ArrowLeft') {
          var mainTarget = document.querySelector('.clicked');
          if (!mainTarget) return;
          if (mainTarget.parentNode.parentNode.previousElementSibling) {
            var enumeration = function enumeration() {
              for (var _i3 = index - 1; _i3 >= 0; _i3--) {
                if (trs[_i3].firstElementChild) {
                  if (trs[_i3].firstElementChild.firstElementChild) {
                    return trs[_i3].firstElementChild.firstElementChild;
                  }
                }
              }
            };
            var trs = mainTarget.parentNode.parentNode.parentNode.children;
            var index = 0;
            for (var i = 0; i < trs.length; i++) {
              if (trs[i] == mainTarget.parentNode.parentNode) {
                index = i;
              }
            }
            mainTarget = enumeration();
          }
          _this.scriptListener(mainTarget);
        }
      });
      document.addEventListener('keydown', function (event) {
        if (event.code == 'ArrowRight') {
          var mainTarget = document.querySelector('.clicked');
          if (!mainTarget) return;
          if (mainTarget.parentNode.parentNode.nextElementSibling) {
            var enumeration = function enumeration() {
              for (var _i4 = index + 1; _i4 <= 8; _i4++) {
                if (trs[_i4].firstElementChild) {
                  if (trs[_i4].firstElementChild.firstElementChild) {
                    return trs[_i4].firstElementChild.firstElementChild;
                  }
                }
              }
            };
            var trs = mainTarget.parentNode.parentNode.parentNode.children;
            var index = 0;
            for (var i = 0; i < trs.length; i++) {
              if (trs[i] == mainTarget.parentNode.parentNode) {
                index = i;
              }
            }
            mainTarget = enumeration();
          }
          _this.scriptListener(mainTarget);
        }
      });
      document.addEventListener('keydown', function (event) {
        event.preventDefault();
        if (event.code == 'ArrowUp') {
          var mainTarget = document.querySelector('.clicked');
          if (!mainTarget) return;
          if (mainTarget.parentNode.parentNode.parentNode.previousElementSibling) {
            var enumeration = function enumeration() {
              for (var _i5 = index - 9; _i5 >= 0; _i5 = _i5 - 9) {
                if (tds[_i5].firstElementChild) {
                  if (tds[_i5].firstElementChild.firstElementChild) {
                    return tds[_i5].firstElementChild.firstElementChild;
                  }
                }
              }
            };
            var tds = document.querySelectorAll('td');
            var index = 0;
            for (var i = 0; i < tds.length; i++) {
              if (tds[i] == mainTarget.parentNode.parentNode) {
                index = i;
              }
            }
            mainTarget = enumeration();
          }
          _this.scriptListener(mainTarget);
        }
      });
      document.addEventListener('keydown', function (event) {
        event.preventDefault();
        if (event.code == 'ArrowDown') {
          var mainTarget = document.querySelector('.clicked');
          if (!mainTarget) return;
          if (mainTarget.parentNode.parentNode.parentNode.nextElementSibling) {
            var enumeration = function enumeration() {
              for (var _i6 = index + 9; _i6 <= tds.length; _i6 = _i6 + 9) {
                if (tds[_i6].firstElementChild) {
                  if (tds[_i6].firstElementChild.firstElementChild) {
                    return tds[_i6].firstElementChild.firstElementChild;
                  }
                }
              }
            };
            var tds = document.querySelectorAll('td');
            var index = 0;
            for (var i = 0; i < tds.length; i++) {
              if (tds[i] == mainTarget.parentNode.parentNode) {
                index = i;
              }
            }
            mainTarget = enumeration();
          }
          _this.scriptListener(mainTarget);
        }
      });
    }
  }, {
    key: "listenerForNumpad",
    value: function listenerForNumpad() {
      var _this2 = this;
      var numpadListener = '';
      var _iterator4 = _createForOfIteratorHelper(this.numpads),
        _step4;
      try {
        var _loop = function _loop() {
          var numpad = _step4.value;
          numpad.addEventListener('click', numpadListener = function numpadListener() {
            _this2.checkNumber(numpad.firstElementChild.textContent);
            var tds = document.querySelectorAll('td');
            var _iterator5 = _createForOfIteratorHelper(tds),
              _step5;
            try {
              for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                var td = _step5.value;
                if (td.firstElementChild.firstElementChild) {
                  if (!td.firstElementChild.firstElementChild.classList.contains('error') && td.firstElementChild.firstElementChild.firstElementChild.textContent != '' && +NumError.textContent < 3) {
                    continue;
                  } else {
                    return;
                  }
                }
              }
            } catch (err) {
              _iterator5.e(err);
            } finally {
              _iterator5.f();
            }
            var level = document.querySelector('.active');
            level = level.textContent;
            _TechnicalFunc.default.gameWinner(level);
          });
        };
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          _loop();
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
      ;
      document.addEventListener('keydown', function (event) {
        if (event.code == 'Digit1' || event.code == 'Numpad1') {
          _this2.checkNumber(1);
        }
        if (event.code == 'Digit2' || event.code == 'Numpad2') {
          _this2.checkNumber(2);
        }
        if (event.code == 'Digit3' || event.code == 'Numpad3') {
          _this2.checkNumber(3);
        }
        if (event.code == 'Digit4' || event.code == 'Numpad4') {
          _this2.checkNumber(4);
        }
        if (event.code == 'Digit5' || event.code == 'Numpad5') {
          _this2.checkNumber(5);
        }
        if (event.code == 'Digit6' || event.code == 'Numpad6') {
          _this2.checkNumber(6);
        }
        if (event.code == 'Digit7' || event.code == 'Numpad7') {
          _this2.checkNumber(7);
        }
        if (event.code == 'Digit8' || event.code == 'Numpad8') {
          _this2.checkNumber(8);
        }
        if (event.code == 'Digit9' || event.code == 'Numpad9') {
          _this2.checkNumber(9);
        }
      });
    }
  }, {
    key: "checkNumber",
    value: function checkNumber(number) {
      var target = document.querySelector('.clicked');
      if (this.numpads[0].parentNode.getAttribute('data-playing') == 'false') {
        _TechnicalFunc.default.addTimer();
        _TechnicalFunc.default.pause();
        this.numpads[0].parentNode.setAttribute('data-playing', 'true');
      }
      if (target) {
        target.classList.remove('error');
        target.firstElementChild.textContent = number;
        var str = target.parentNode.textContent.replace(/\s/g, '');
        if (str[0] != str[1]) {
          target.classList.add('error');
          +NumError.textContent++; // получена по id
          if (NumError.textContent == '3') {
            var activeLevel = document.querySelector('.active');
            _TechnicalFunc.default.gameOver(activeLevel.textContent.toLowerCase());
          }
          ;
        }
        ;
      }
      ;
    }
  }, {
    key: "listenerForLevelButtons",
    value: function listenerForLevelButtons() {
      var easy = document.getElementById('levelEasy');
      var medium = document.getElementById('levelMedium');
      var hard = document.getElementById('levelHard');
      var buttons = document.querySelectorAll('.sudoku__level-button');
      var tds = document.querySelectorAll('td');
      easy.addEventListener('click', function () {
        var _iterator6 = _createForOfIteratorHelper(tds),
          _step6;
        try {
          for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
            var elem = _step6.value;
            elem.classList.remove('illumination');
          }
        } catch (err) {
          _iterator6.e(err);
        } finally {
          _iterator6.f();
        }
        var answer = confirm('the progress of the current game will be lost');
        if (answer) {
          var _iterator7 = _createForOfIteratorHelper(buttons),
            _step7;
          try {
            for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
              var button = _step7.value;
              button.classList.remove('active');
            }
          } catch (err) {
            _iterator7.e(err);
          } finally {
            _iterator7.f();
          }
          easy.classList.add('active');
          var field = document.querySelector('.preloader');
          field.classList.remove('preloader__not-active');
          _TechnicalFunc.default.gameRestart('easy');
        }
      });
      medium.addEventListener('click', function () {
        var _iterator8 = _createForOfIteratorHelper(tds),
          _step8;
        try {
          for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
            var elem = _step8.value;
            elem.classList.remove('illumination');
          }
        } catch (err) {
          _iterator8.e(err);
        } finally {
          _iterator8.f();
        }
        var answer = confirm('the progress of the current game will be lost');
        if (answer) {
          var _iterator9 = _createForOfIteratorHelper(buttons),
            _step9;
          try {
            for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
              var button = _step9.value;
              button.classList.remove('active');
            }
          } catch (err) {
            _iterator9.e(err);
          } finally {
            _iterator9.f();
          }
          medium.classList.add('active');
          var field = document.querySelector('.preloader');
          field.classList.remove('preloader__not-active');
          _TechnicalFunc.default.gameRestart('medium');
        }
      });
      hard.addEventListener('click', function () {
        var _iterator10 = _createForOfIteratorHelper(tds),
          _step10;
        try {
          for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
            var elem = _step10.value;
            elem.classList.remove('illumination');
          }
        } catch (err) {
          _iterator10.e(err);
        } finally {
          _iterator10.f();
        }
        var answer = confirm('the progress of the current game will be lost');
        if (answer) {
          var _iterator11 = _createForOfIteratorHelper(buttons),
            _step11;
          try {
            for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
              var button = _step11.value;
              button.classList.remove('active');
            }
          } catch (err) {
            _iterator11.e(err);
          } finally {
            _iterator11.f();
          }
          hard.classList.add('active');
          var field = document.querySelector('.preloader');
          field.classList.remove('preloader__not-active');
          _TechnicalFunc.default.gameRestart('hard');
        }
        ;
      });
    }
  }, {
    key: "addPreloaderForField",
    value: function addPreloaderForField() {
      var field = document.querySelector('.preloader');
      field.classList.remove('preloader__not-active');
    }
  }, {
    key: "listenerForNewGame",
    value: function listenerForNewGame(level) {
      var tds = document.querySelectorAll('td');
      var newGameBtn = document.querySelector('.sudoku__button');
      newGameBtn.addEventListener('click', function () {
        var _iterator12 = _createForOfIteratorHelper(tds),
          _step12;
        try {
          for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
            var elem = _step12.value;
            elem.classList.remove('illumination');
          }
        } catch (err) {
          _iterator12.e(err);
        } finally {
          _iterator12.f();
        }
        var activeLevel = document.querySelector('.active');
        var answer = confirm('do you want to start a new game?');
        if (answer) {
          var field = document.querySelector('.preloader');
          field.classList.remove('preloader__not-active');
          _TechnicalFunc.default.gameRestart(activeLevel.textContent.toLowerCase());
        }
        ;
      });
    }
  }]);
  return InputNumber;
}();
;
var _default = new InputNumber();
exports.default = _default;
},{"../../TechnicalFunc/TechnicalFunc.js":"ZwDe"}],"ZwDe":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _renderGameField = _interopRequireDefault(require("../components/sudoku/renderGameField"));
var _Sudoku = _interopRequireDefault(require("../components/sudoku/Sudoku"));
var _InputNumber = _interopRequireDefault(require("../components/InputNumber/InputNumber"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var TechnicalFunc = /*#__PURE__*/function () {
  function TechnicalFunc() {
    _classCallCheck(this, TechnicalFunc);
    this.timerId = '1';
    this.flag = true;
    this.stopTimer = false;
  }
  _createClass(TechnicalFunc, [{
    key: "random",
    value: function random(max) {
      var min = 0;
      var rand = min - 0.5 + Math.random() * (max - min + 1);
      return Math.round(rand);
    }
  }, {
    key: "randomMinMax",
    value: function randomMinMax(min, max) {
      var rand = (min - 0.5 + Math.random() * (max - min + 0.5)).toFixed();
      return Math.round(rand);
    }
  }, {
    key: "gameOver",
    value: function gameOver(level) {
      var answer = confirm('game over! Do you want start a new game?');
      if (answer) {
        this.gameRestart(level);
      }
    }
  }, {
    key: "gameWinner",
    value: function gameWinner(level) {
      var target = document.querySelector('.game-win');
      target.classList.remove('_hidden');
      var numpad = document.querySelector('.sudoku__numpad');
      var transparentBlock = document.createElement('div');
      transparentBlock.classList.add('_transparent-block');
      numpad.append(transparentBlock);
      gameWinLevel.textContent = level;
      gameWinTime.textContent = minutes.textContent + ':' + seconds.textContent;
      clearInterval(this.timerId);
    }
  }, {
    key: "gameRestart",
    value: function gameRestart(level) {
      // let field = document.querySelector('.sudoku__field') // удалить
      clearInterval(this.timerId);
      NumError.textContent = '0'; // обнуление счетчика ошибок
      minutes.textContent = '00'; // обнуление счетчика минут
      seconds.textContent = '00'; // обнуление счетчика секунд
      // field.innerHTML = '' // удаление всего поля
      _Sudoku.default.createFullGameField(level); // рендер поля
      var _iterator = _createForOfIteratorHelper(document.querySelectorAll('.illumination')),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var elem = _step.value;
          elem.classList.remove('illumination');
        }
        // Sudoku.addMarkup(); // рендер разметки
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      _InputNumber.default.gameLevel(level); // установка прошлого уровня для игрока 
      document.querySelector('.sudoku__numpad').setAttribute('data-playing', 'false'); // подготовка numpad к следующей игре

      var target = document.querySelector('.game-win');
      var transparentBlock = document.querySelector('._transparent-block');
      if (target) {
        target.classList.add('_hidden');
        if (transparentBlock) {
          transparentBlock.parentNode.lastElementChild.remove();
        }
      }
    }
  }, {
    key: "addTimer",
    value: function addTimer() {
      var _this = this;
      var counterForSeconds = 0;
      var counterForMinutes = 0;
      this.timerId = setInterval(function () {
        if (_this.stopTimer) return;
        if (counterForSeconds < 10) {
          var time = '0' + counterForSeconds;
          seconds.textContent = time;
          counterForSeconds++;
        }
        if (counterForSeconds < 60 & counterForSeconds >= 10) {
          seconds.textContent = counterForSeconds;
          counterForSeconds++;
        }
        if (counterForSeconds == 59) {
          counterForMinutes++;
          if (counterForMinutes < 10) {
            minutes.textContent = '0' + counterForMinutes;
          } else {
            minutes.textContent = counterForMinutes;
          }
          counterForSeconds = 0;
        }
      }, 1000);
    }
  }, {
    key: "pause",
    value: function pause() {
      var _this2 = this;
      var pause = document.getElementById('pause');
      var play = document.getElementById('play');
      var field = document.querySelector('.sudoku__field');
      var listenerForPlay = '';
      pause.addEventListener('click', function () {
        pause.classList.add('_hidden');
        play.classList.remove('_hidden');
        _this2.stopTimer = true;
        var pauseBlock = document.createElement('div');
        pauseBlock.classList.add('_pause');
        field.append(pauseBlock);
        pauseBlock.addEventListener('click', listenerForPlay);
      });
      play.addEventListener('click', listenerForPlay = function listenerForPlay() {
        play.classList.add('_hidden');
        pause.classList.remove('_hidden');
        _this2.stopTimer = false;
        field.removeChild(field.lastElementChild);
      });
    }
  }]);
  return TechnicalFunc;
}();
var _default = new TechnicalFunc();
exports.default = _default;
},{"../components/sudoku/renderGameField":"xTqK","../components/sudoku/Sudoku":"e7Bj","../components/InputNumber/InputNumber":"TMVZ"}],"e7Bj":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _TechnicalFunc = _interopRequireDefault(require("../../TechnicalFunc/TechnicalFunc"));
var _InputNumber = _interopRequireDefault(require("../InputNumber/InputNumber"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Sudoku = /*#__PURE__*/function () {
  function Sudoku() {
    _classCallCheck(this, Sudoku);
  }
  _createClass(Sudoku, [{
    key: "addMarkup",
    value: function addMarkup() {
      var trs = document.querySelectorAll('tr');
      var tds = document.querySelectorAll('td');
      trs[3].style.borderTop = '2px solid black';
      trs[6].style.borderTop = '2px solid black';
      for (var i = 2; i < tds.length; i = i + 9) {
        tds[i].style.borderRight = '2px solid black';
      }
      for (var _i = 5; _i < tds.length; _i = _i + 9) {
        tds[_i].style.borderRight = '2px solid black';
      }
    }
  }, {
    key: "addBaseField",
    value: function addBaseField() {
      var tds = document.querySelectorAll('td');
      var trs = document.querySelectorAll('tr');
      var arrColumnOne = []; // цифры, содрежащиеся в столбце
      var arrColumnTwo = [];
      var arrColumnThree = [];
      var arrColumnFour = [];
      var arrColumnFive = [];
      var arrColumnSix = [];
      var arrColumnSeven = [];
      var arrColumnEight = [];
      var arrColumnNine = [];
      var currentStackNumber = 0;
      var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      function fillField(currentNumFunc) {
        var currentNum = currentNumFunc;
        var _loop = function _loop() {
          currentNum++;
          var randomNum = getRandomNum();
          function getRandomNum() {
            currentStackNumber++;
            if (currentStackNumber > 40) throw new Error('-_-');
            var randomNum = _TechnicalFunc.default.random(arr.length - 1);
            if (currentNum % 9 == 1 && arrColumnOne.includes(arr[randomNum])) return getRandomNum();
            if (currentNum % 9 == 2 && arrColumnTwo.includes(arr[randomNum])) return getRandomNum();
            if (currentNum % 9 == 3 && arrColumnThree.includes(arr[randomNum])) return getRandomNum();
            if (currentNum % 9 == 4 && arrColumnFour.includes(arr[randomNum])) return getRandomNum();
            if (currentNum % 9 == 5 && arrColumnFive.includes(arr[randomNum])) return getRandomNum();
            if (currentNum % 9 == 6 && arrColumnSix.includes(arr[randomNum])) return getRandomNum();
            if (currentNum % 9 == 7 && arrColumnSeven.includes(arr[randomNum])) return getRandomNum();
            if (currentNum % 9 == 8 && arrColumnEight.includes(arr[randomNum])) return getRandomNum();
            if (currentNum % 9 == 0 && arrColumnNine.includes(arr[randomNum])) return getRandomNum();
            if (currentNum >= 1 && currentNum <= 9 && trs[0].textContent.includes("".concat(arr[randomNum]))) return getRandomNum();
            if (currentNum >= 10 && currentNum <= 18 && trs[1].textContent.includes("".concat(arr[randomNum]))) return getRandomNum();
            if (currentNum >= 19 && currentNum <= 27 && trs[2].textContent.includes("".concat(arr[randomNum]))) return getRandomNum();
            if (currentNum >= 28 && currentNum <= 36 && trs[3].textContent.includes("".concat(arr[randomNum]))) return getRandomNum();
            if (currentNum >= 37 && currentNum <= 45 && trs[4].textContent.includes("".concat(arr[randomNum]))) return getRandomNum();
            if (currentNum >= 46 && currentNum <= 54 && trs[5].textContent.includes("".concat(arr[randomNum]))) return getRandomNum();
            if (currentNum >= 55 && currentNum <= 63 && trs[6].textContent.includes("".concat(arr[randomNum]))) return getRandomNum();
            if (currentNum >= 64 && currentNum <= 72 && trs[7].textContent.includes("".concat(arr[randomNum]))) return getRandomNum();
            if (currentNum >= 73 && currentNum <= 81 && trs[8].textContent.includes("".concat(arr[randomNum]))) return getRandomNum();
            return randomNum;
          }
          ;
          currentStackNumber = 0;
          if (currentNum % 9 == 1) arrColumnOne.push(arr[randomNum]);
          if (currentNum % 9 == 2) arrColumnTwo.push(arr[randomNum]);
          if (currentNum % 9 == 3) arrColumnThree.push(arr[randomNum]);
          if (currentNum % 9 == 4) arrColumnFour.push(arr[randomNum]);
          if (currentNum % 9 == 5) arrColumnFive.push(arr[randomNum]);
          if (currentNum % 9 == 6) arrColumnSix.push(arr[randomNum]);
          if (currentNum % 9 == 7) arrColumnSeven.push(arr[randomNum]);
          if (currentNum % 9 == 8) arrColumnEight.push(arr[randomNum]);
          if (currentNum % 9 == 0) arrColumnNine.push(arr[randomNum]);
          tds[currentNum - 1].firstElementChild.textContent = arr[randomNum];
          arr.splice(arr.indexOf(arr[randomNum]), 1);
          if (currentNum % 3 == 0) currentNum += 6;
          if (arr.length == 0) arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        };
        for (var i = 1; i < 28; i++) {
          _loop();
        }
        ;
      }
      ;
      fillField(0);
      fillField(3);
      fillField(6);
      this.deletePreloader();
    }
  }, {
    key: "clearField",
    value: function clearField() {
      var tds = document.querySelectorAll('td');
      for (var i = 0; i < 81; i++) {
        tds[i].firstElementChild.textContent = '';
      }
      ;
    }
  }, {
    key: "createFullGameField",
    value: function createFullGameField(level) {
      var _this = this;
      setTimeout(function () {
        try {
          _this.addBaseField();
          _InputNumber.default.gameLevel(level);
        } catch (_unused) {
          _this.clearField();
          _this.createFullGameField(level);
        }
        ;
      }, 0);
    }
  }, {
    key: "deletePreloader",
    value: function deletePreloader() {
      document.querySelector('.preloader').classList.add('preloader__not-active');
    }
  }]);
  return Sudoku;
}();
;
var _default = new Sudoku(); // tds[i].firstElementChild.textContent = TechnicalFunc.random(1,9) 
exports.default = _default;
},{"../../TechnicalFunc/TechnicalFunc":"ZwDe","../InputNumber/InputNumber":"TMVZ"}],"Focm":[function(require,module,exports) {
"use strict";

var _renderGameField = _interopRequireDefault(require("./components/sudoku/renderGameField.js"));
var _Sudoku = _interopRequireDefault(require("./components/sudoku/Sudoku.js"));
var _InputNumber = _interopRequireDefault(require("./components/InputNumber/InputNumber.js"));
var _TechnicalFunc = _interopRequireDefault(require("./TechnicalFunc/TechnicalFunc.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
_renderGameField.default.renderGameField(9, 9, '.sudoku__field');
_Sudoku.default.addMarkup();
_Sudoku.default.createFullGameField('easy');
_InputNumber.default.listenerForNumpad();
_InputNumber.default.listenerForTd();
_InputNumber.default.listenerForLevelButtons();
_InputNumber.default.listenerForNewGame();
},{"./components/sudoku/renderGameField.js":"xTqK","./components/sudoku/Sudoku.js":"e7Bj","./components/InputNumber/InputNumber.js":"TMVZ","./TechnicalFunc/TechnicalFunc.js":"ZwDe"}]},{},["Focm"], null)