import type { WalletName } from '@solana/wallet-adapter-base';
import { BaseMessageSignerWalletAdapter, WalletReadyState } from '@solana/wallet-adapter-base';
import type { Transaction, TransactionVersion } from '@solana/web3.js';
import { PublicKey, VersionedTransaction } from '@solana/web3.js';
export interface Coin98WalletAdapterConfig {
}
export declare const Coin98WalletName: WalletName<"Coin98">;
export declare class Coin98WalletAdapter extends BaseMessageSignerWalletAdapter {
    name: WalletName<"Coin98">;
    url: string;
    icon: string;
    supportedTransactionVersions: ReadonlySet<TransactionVersion>;
    private _connecting;
    private _wallet;
    private _publicKey;
    private _readyState;
    constructor(config?: Coin98WalletAdapterConfig);
    get publicKey(): PublicKey | null;
    get connecting(): boolean;
    get connected(): boolean;
    get readyState(): WalletReadyState;
    connect(): Promise<void>;
    disconnect(): Promise<void>;
    signTransaction<T extends Transaction | VersionedTransaction>(transaction: T): Promise<T>;
    signAllTransactions<T extends Transaction | VersionedTransaction>(transactions: T[]): Promise<T[]>;
    signMessage(message: Uint8Array): Promise<Uint8Array>;
}
//# sourceMappingURL=adapter.d.ts.map