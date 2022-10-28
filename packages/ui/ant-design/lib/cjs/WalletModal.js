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
exports.WalletModal = void 0;
const wallet_adapter_base_1 = require("@solana/wallet-adapter-base");
const wallet_adapter_react_1 = require("@solana/wallet-adapter-react");
const antd_1 = require("antd");
const react_1 = __importStar(require("react"));
const useWalletModal_js_1 = require("./useWalletModal.js");
const WalletMenuItem_js_1 = require("./WalletMenuItem.js");
const WalletModal = (_a) => {
    var { title = 'Select your wallet', featuredWallets = 3, onCancel } = _a, props = __rest(_a, ["title", "featuredWallets", "onCancel"]);
    const { wallets, select } = (0, wallet_adapter_react_1.useWallet)();
    const { visible, setVisible } = (0, useWalletModal_js_1.useWalletModal)();
    const [expanded, setExpanded] = (0, react_1.useState)(false);
    const [featured, more] = (0, react_1.useMemo)(() => {
        const supportedWallets = wallets.filter((wallet) => wallet.readyState !== wallet_adapter_base_1.WalletReadyState.Unsupported);
        return [supportedWallets.slice(0, featuredWallets), supportedWallets.slice(featuredWallets)];
    }, [wallets, featuredWallets]);
    const handleCancel = (0, react_1.useCallback)((event) => {
        if (onCancel)
            onCancel(event);
        if (!event.defaultPrevented)
            setVisible(false);
    }, [onCancel, setVisible]);
    const handleWalletClick = (0, react_1.useCallback)((event, walletName) => {
        select(walletName);
        handleCancel(event);
    }, [select, handleCancel]);
    const onOpenChange = (0, react_1.useCallback)(() => setExpanded(!expanded), [setExpanded, expanded]);
    return (react_1.default.createElement(antd_1.Modal, Object.assign({ title: title, visible: visible, centered: true, onCancel: handleCancel, footer: null, width: 320, bodyStyle: { padding: 0 } }, props),
        react_1.default.createElement(antd_1.Menu, { className: "wallet-adapter-modal-menu", inlineIndent: 0, mode: "inline", onOpenChange: onOpenChange },
            featured.map((wallet) => (react_1.default.createElement(WalletMenuItem_js_1.WalletMenuItem, { key: wallet.adapter.name, onClick: (event) => handleWalletClick(event, wallet.adapter.name), wallet: wallet }))),
            more.length ? (react_1.default.createElement(antd_1.Menu.SubMenu, { key: "wallet-adapter-modal-submenu", title: `${expanded ? 'Less' : 'More'} options` }, more.map((wallet) => (react_1.default.createElement(WalletMenuItem_js_1.WalletMenuItem, { key: wallet.adapter.name, onClick: (event) => handleWalletClick(event, wallet.adapter.name), wallet: wallet }))))) : null)));
};
exports.WalletModal = WalletModal;
//# sourceMappingURL=WalletModal.js.map