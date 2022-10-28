import type { Transaction, TransactionVersion, VersionedTransaction } from '@solana/web3.js';
import type { WalletAdapter } from './adapter.js';
import type { MessageSignerWalletAdapter, SignerWalletAdapter } from './signer.js';
export declare type Adapter = WalletAdapter | SignerWalletAdapter | MessageSignerWalletAdapter;
export declare enum WalletAdapterNetwork {
    Mainnet = "mainnet-beta",
    Testnet = "testnet",
    Devnet = "devnet"
}
export declare type SupportedTransactionVersions = ReadonlySet<TransactionVersion> | null | undefined;
export declare type TransactionOrVersionedTransaction<S extends SupportedTransactionVersions> = S extends null | undefined ? Transaction : Transaction | VersionedTransaction;
//# sourceMappingURL=types.d.ts.map