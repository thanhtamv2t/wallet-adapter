"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HuobiWalletAdapter = exports.HuobiWalletName = void 0;
const wallet_adapter_base_1 = require("@solana/wallet-adapter-base");
const web3_js_1 = require("@solana/web3.js");
exports.HuobiWalletName = 'HuobiWallet';
class HuobiWalletAdapter extends wallet_adapter_base_1.BaseMessageSignerWalletAdapter {
    constructor(config = {}) {
        super();
        this.name = exports.HuobiWalletName;
        this.url = 'https://www.huobiwallet.io';
        this.icon = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjI0IiBoZWlnaHQ9IjIyNCIgdmlld0JveD0iMCAwIDIyNCAyMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMCAwTDIyNCAwVjIyNEgwTDAgMFoiIGZpbGw9IiMyMTU3RTIiLz4KPHBhdGggZD0iTTEzMS4wNTkgODEuMTc3MUMxMzEuMDU5IDU3Ljc1MzEgMTE5LjQ1OCAzNy42MzE1IDExMC42MjUgMzEuMDcyOEMxMTAuNjI1IDMxLjA3MjggMTA5Ljk1MyAzMC43MDQyIDExMCAzMS42MjU4VjMxLjYyNThDMTA5LjI2NSA3Ni44MzAzIDg1Ljc2NzIgODkuMDg3NSA3Mi44MzggMTA1LjU4NEM0My4wMjQxIDE0My42NzcgNzAuNzU4NyAxODUuNDU2IDk4Ljk5MzUgMTkzLjEzNkMxMTQuNzk5IDE5Ny40NTIgOTUuMzUwOCAxODUuNDU2IDkyLjg0OTQgMTYwLjIzNUM4OS44MDA3IDEyOS43NDUgMTMxLjA1OSAxMDYuNDQ0IDEzMS4wNTkgODEuMTc3MVoiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcl8xMTAxXzEyNSkiLz4KPHBhdGggZD0iTTE0My41OTcgOTYuMzE3NEMxNDMuNDA5IDk2LjE5NDMgMTQzLjE1OCA5Ni4xMDIgMTQyLjk4NiA5Ni4zOTQzQzE0Mi40ODQgMTAyLjEwMiAxMzYuNTYgMTE0LjI4NiAxMjkuMDM3IDEyNS40ODZDMTAzLjU1MiAxNjMuNDU1IDExOC4wNjUgMTgxLjc2MiAxMjYuMjQ3IDE5MS42MzlDMTMwLjk0OSAxOTcuMzQ3IDEyNi4yNDcgMTkxLjYzOSAxMzguMDk2IDE4NS44MDhDMTUyLjczNSAxNzcuMDkyIDE2Mi4yMzQgMTYyLjAyIDE2My42NDMgMTQ1LjI3QzE2NS4yMzMgMTI2Ljc1OCAxNTcuNzk4IDEwOC42IDE0My41OTcgOTYuMzE3NFoiIGZpbGw9InVybCgjcGFpbnQxX2xpbmVhcl8xMTAxXzEyNSkiLz4KPGRlZnM+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhcl8xMTAxXzEyNSIgeDE9IjEyMi40MDEiIHkxPSIyMDkuMjk1IiB4Mj0iMTc4LjY2MiIgeTI9IjExMC40NDciIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iI0Y3RjZGRiIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IndoaXRlIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQxX2xpbmVhcl8xMTAxXzEyNSIgeDE9IjE1Ny44NjEiIHkxPSIyMDMuMTc3IiB4Mj0iMTg5LjAxNCIgeTI9IjE0MC4wMjIiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iI0Y3RjZGRiIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IndoaXRlIi8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPC9zdmc+Cg==';
        this.supportedTransactionVersions = null;
        this._readyState = typeof window === 'undefined' || typeof document === 'undefined'
            ? wallet_adapter_base_1.WalletReadyState.Unsupported
            : wallet_adapter_base_1.WalletReadyState.NotDetected;
        this._disconnected = () => {
            const wallet = this._wallet;
            if (wallet) {
                wallet.off('disconnect', this._disconnected);
                this._wallet = null;
                this._publicKey = null;
                this.emit('error', new wallet_adapter_base_1.WalletDisconnectedError());
                this.emit('disconnect');
            }
        };
        this._connecting = false;
        this._wallet = null;
        this._publicKey = null;
        if (this._readyState !== wallet_adapter_base_1.WalletReadyState.Unsupported) {
            (0, wallet_adapter_base_1.scopePollingDetectionStrategy)(() => {
                var _a;
                if ((_a = window.huobiWallet) === null || _a === void 0 ? void 0 : _a.isHuobiWallet) {
                    this._readyState = wallet_adapter_base_1.WalletReadyState.Installed;
                    this.emit('readyStateChange', this._readyState);
                    return true;
                }
                return false;
            });
        }
    }
    get publicKey() {
        return this._publicKey;
    }
    get connecting() {
        return this._connecting;
    }
    get connected() {
        var _a;
        return !!((_a = this._wallet) === null || _a === void 0 ? void 0 : _a.isConnected);
    }
    get readyState() {
        return this._readyState;
    }
    connect() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (this.connected || this.connecting)
                    return;
                if (this._readyState !== wallet_adapter_base_1.WalletReadyState.Installed)
                    throw new wallet_adapter_base_1.WalletNotReadyError();
                this._connecting = true;
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                const wallet = window.huobiWallet;
                try {
                    yield wallet.connect();
                }
                catch (error) {
                    throw new wallet_adapter_base_1.WalletConnectionError(error === null || error === void 0 ? void 0 : error.message, error);
                }
                if (!wallet.publicKey)
                    throw new wallet_adapter_base_1.WalletAccountError();
                let publicKey;
                try {
                    publicKey = new web3_js_1.PublicKey(wallet.publicKey.toBytes());
                }
                catch (error) {
                    throw new wallet_adapter_base_1.WalletPublicKeyError(error === null || error === void 0 ? void 0 : error.message, error);
                }
                wallet.on('disconnect', this._disconnected);
                this._wallet = wallet;
                this._publicKey = publicKey;
                this.emit('connect', publicKey);
            }
            catch (error) {
                this.emit('error', error);
                throw error;
            }
            finally {
                this._connecting = false;
            }
        });
    }
    disconnect() {
        return __awaiter(this, void 0, void 0, function* () {
            const wallet = this._wallet;
            if (wallet) {
                wallet.off('disconnect', this._disconnected);
                this._wallet = null;
                this._publicKey = null;
                this.emit('disconnect');
            }
        });
    }
    signTransaction(transaction) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const wallet = this._wallet;
                if (!wallet)
                    throw new wallet_adapter_base_1.WalletNotConnectedError();
                try {
                    return (yield wallet.signTransaction(transaction)) || transaction;
                }
                catch (error) {
                    throw new wallet_adapter_base_1.WalletSignTransactionError(error === null || error === void 0 ? void 0 : error.message, error);
                }
            }
            catch (error) {
                this.emit('error', error);
                throw error;
            }
        });
    }
    signAllTransactions(transactions) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const wallet = this._wallet;
                if (!wallet)
                    throw new wallet_adapter_base_1.WalletNotConnectedError();
                try {
                    return (yield wallet.signAllTransactions(transactions)) || transactions;
                }
                catch (error) {
                    throw new wallet_adapter_base_1.WalletSignTransactionError(error === null || error === void 0 ? void 0 : error.message, error);
                }
            }
            catch (error) {
                this.emit('error', error);
                throw error;
            }
        });
    }
    signMessage(message) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const wallet = this._wallet;
                if (!wallet)
                    throw new wallet_adapter_base_1.WalletNotConnectedError();
                try {
                    const { signature } = yield wallet.signMessage(message);
                    return signature;
                }
                catch (error) {
                    throw new wallet_adapter_base_1.WalletSignMessageError(error === null || error === void 0 ? void 0 : error.message, error);
                }
            }
            catch (error) {
                this.emit('error', error);
                throw error;
            }
        });
    }
}
exports.HuobiWalletAdapter = HuobiWalletAdapter;
//# sourceMappingURL=adapter.js.map