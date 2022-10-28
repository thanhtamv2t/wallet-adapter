import type { WalletAdapterNetwork, WalletName } from '@solana/wallet-adapter-base';
import { BaseMessageSignerWalletAdapter, WalletReadyState } from '@solana/wallet-adapter-base';
import type { Transaction, TransactionVersion, VersionedTransaction } from '@solana/web3.js';
import { PublicKey } from '@solana/web3.js';
export interface SolflareWalletAdapterConfig {
    network?: WalletAdapterNetwork;
}
export declare const SolflareWalletName: WalletName<"Solflare">;
export declare class SolflareWalletAdapter extends BaseMessageSignerWalletAdapter {
    name: WalletName<"Solflare">;
    url: string;
    icon: string;
    supportedTransactionVersions: ReadonlySet<TransactionVersion>;
    private _connecting;
    private _wallet;
    private _publicKey;
    private _config;
    private _readyState;
    constructor(config?: SolflareWalletAdapterConfig);
    get publicKey(): PublicKey | null;
    get connecting(): boolean;
    get connected(): boolean;
    get readyState(): WalletReadyState;
    connect(): Promise<void>;
    disconnect(): Promise<void>;
    signTransaction<T extends Transaction | VersionedTransaction>(transaction: T): Promise<T>;
    signAllTransactions<T extends Transaction | VersionedTransaction>(transactions: T[]): Promise<T[]>;
    signMessage(message: Uint8Array): Promise<Uint8Array>;
    private _disconnected;
}
//# sourceMappingURL=adapter.d.ts.map