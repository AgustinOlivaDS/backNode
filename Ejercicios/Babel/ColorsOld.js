"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

module.exports = /*#__PURE__*/function () {
  function Colors() {
    _classCallCheck(this, Colors);

    this.ColorR = 0;
    this.ColorG = 0;
    this.ColorB = 0;
    this.RGB = 'rgb(0, 0, 0)';
  }

  _createClass(Colors, [{
    key: "getRandomColor",
    value: function getRandomColor() {
      this.ColorR = Math.floor(Math.random() * (255 - 0) + 0);
      this.ColorG = Math.floor(Math.random() * (255 - 0) + 0);
      this.ColorR = Math.floor(Math.random() * (255 - 0) + 0);
      this.RGB = "rgb(".concat(this.ColorR, ", ").concat(this.ColorG, ", ").concat(this.ColorB, ")");
    }
  }]);

  return Colors;
}();
