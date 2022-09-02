"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _plugin = require("@parcel/plugin");

var _default = new _plugin.Transformer({
  async transform({
    asset
  }) {
    const buffer = await asset.getBuffer();
    asset.setCode(`'${buffer.toString('base64')}'`);
    return [asset];
  }

});

exports.default = _default;