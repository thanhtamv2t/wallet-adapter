import type { WalletName } from '@solana/wallet-adapter-base';
import { BaseMessageSignerWalletAdapter, WalletReadyState } from '@solana/wallet-adapter-base';
import type { Transaction } from '@solana/web3.js';
import { PublicKey } from '@solana/web3.js';
export interface NekoWalletAdapterConfig {
}
export declare const NekoWalletName: WalletName<"Neko">;
export declare class NekoWalletAdapter extends BaseMessageSignerWalletAdapter {
    name: WalletName<"Neko">;
    url: string;
    icon: string;
    readonly supportedTransactionVersions: null;
    private _connecting;
    private _wallet;
    private _publicKey;
    private _readyState;
    constructor(config?: NekoWalletAdapterConfig);
    get publicKey(): PublicKey | null;
    get connecting(): boolean;
    get connected(): boolean;
    get readyState(): WalletReadyState;
    connect(): Promise<void>;
    disconnect(): Promise<void>;
    signTransaction<T extends Transaction>(transaction: T): Promise<T>;
    signAllTransactions<T extends Transaction>(transactions: T[]): Promise<T[]>;
    signMessage(message: Uint8Array): Promise<Uint8Array>;
    private _disconnected;
}
//# sourceMappingURL=adapter.d.ts.map