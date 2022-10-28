"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.WalletMultiButton = void 0;
const icons_1 = require("@ant-design/icons");
const wallet_adapter_react_1 = require("@solana/wallet-adapter-react");
const antd_1 = require("antd");
const react_1 = __importStar(require("react"));
const useWalletModal_js_1 = require("./useWalletModal.js");
const WalletConnectButton_js_1 = require("./WalletConnectButton.js");
const WalletIcon_js_1 = require("./WalletIcon.js");
const WalletModalButton_js_1 = require("./WalletModalButton.js");
const WalletMultiButton = (_a) => {
    var { type = 'primary', size = 'large', htmlType = 'button', children } = _a, props = __rest(_a, ["type", "size", "htmlType", "children"]);
    const { publicKey, wallet, disconnect } = (0, wallet_adapter_react_1.useWallet)();
    const { setVisible } = (0, useWalletModal_js_1.useWalletModal)();
    const base58 = (0, react_1.useMemo)(() => publicKey === null || publicKey === void 0 ? void 0 : publicKey.toBase58(), [publicKey]);
    const content = (0, react_1.useMemo)(() => {
        if (children)
            return children;
        if (!wallet || !base58)
            return null;
        return base58.slice(0, 4) + '..' + base58.slice(-4);
    }, [children, wallet, base58]);
    if (!wallet) {
        return (react_1.default.createElement(WalletModalButton_js_1.WalletModalButton, Object.assign({ type: type, size: size, htmlType: htmlType }, props), children));
    }
    if (!base58) {
        return (react_1.default.createElement(WalletConnectButton_js_1.WalletConnectButton, Object.assign({ type: type, size: size, htmlType: htmlType }, props), children));
    }
    return (react_1.default.createElement(antd_1.Dropdown, { overlay: react_1.default.createElement(antd_1.Menu, { className: "wallet-adapter-multi-button-menu" },
            react_1.default.createElement(antd_1.Menu.Item, { className: "wallet-adapter-multi-button-menu-item" },
                react_1.default.createElement(antd_1.Button, Object.assign({ icon: react_1.default.createElement(WalletIcon_js_1.WalletIcon, { wallet: wallet }), type: type, size: size, htmlType: htmlType, className: "wallet-adapter-multi-button-menu-button", block: true }, props), wallet.adapter.name)),
            react_1.default.createElement(antd_1.Menu.Item, { onClick: () => __awaiter(void 0, void 0, void 0, function* () {
                    yield navigator.clipboard.writeText(base58);
                }), icon: react_1.default.createElement(icons_1.CopyOutlined, { className: ".wallet-adapter-multi-button-icon" }), className: "wallet-adapter-multi-button-item" }, "Copy address"),
            react_1.default.createElement(antd_1.Menu.Item, { onClick: () => setTimeout(() => setVisible(true), 100), icon: react_1.default.createElement(icons_1.SwapOutlined, { className: ".wallet-adapter-multi-button-icon" }), className: "wallet-adapter-multi-button-item" }, "Change wallet"),
            react_1.default.createElement(antd_1.Menu.Item, { onClick: () => {
                    // eslint-disable-next-line @typescript-eslint/no-empty-function
                    disconnect().catch(() => {
                        // Silently catch because any errors are caught by the context `onError` handler
                    });
                }, icon: react_1.default.createElement(icons_1.DisconnectOutlined, { className: ".wallet-adapter-multi-button-icon" }), className: "wallet-adapter-multi-button-item" }, "Disconnect")), trigger: ['click'] },
        react_1.default.createElement(antd_1.Button, Object.assign({ icon: react_1.default.createElement(WalletIcon_js_1.WalletIcon, { wallet: wallet }), type: type, size: size, htmlType: htmlType }, props), content)));
};
exports.WalletMultiButton = WalletMultiButton;
//# sourceMappingURL=WalletMultiButton.js.map