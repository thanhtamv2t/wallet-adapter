"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WalletMenuItem = void 0;
const antd_1 = require("antd");
const react_1 = __importDefault(require("react"));
const WalletIcon_js_1 = require("./WalletIcon.js");
const WalletMenuItem = (_a) => {
    var { onClick, wallet } = _a, props = __rest(_a, ["onClick", "wallet"]);
    return (react_1.default.createElement(antd_1.Menu.Item, Object.assign({ className: "wallet-adapter-modal-menu-item" }, props),
        react_1.default.createElement(antd_1.Button, { onClick: onClick, icon: react_1.default.createElement(WalletIcon_js_1.WalletIcon, { wallet: wallet, className: "wallet-adapter-modal-menu-button-icon" }), type: "text", className: "wallet-adapter-modal-menu-button", htmlType: "button", block: true }, wallet.adapter.name)));
};
exports.WalletMenuItem = WalletMenuItem;
//# sourceMappingURL=WalletMenuItem.js.map