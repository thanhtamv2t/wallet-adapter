import type { Adapter, WalletError } from '@solana/wallet-adapter-base';
import type { ReactNode } from 'react';
export interface WalletProviderProps {
    children: ReactNode;
    wallets: Adapter[];
    autoConnect?: boolean;
    onError?: (error: WalletError, adapter?: Adapter) => void;
    localStorageKey?: string;
}
export declare function WalletProvider({ autoConnect, localStorageKey, wallets: adapters, ...props }: WalletProviderProps): JSX.Element;
//# sourceMappingURL=WalletProvider.d.ts.map