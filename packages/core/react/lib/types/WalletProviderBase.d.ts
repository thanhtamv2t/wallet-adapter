import type { Adapter, WalletName } from '@solana/wallet-adapter-base';
import React from 'react';
import type { WalletProviderProps } from './WalletProvider.js';
declare type Props = Readonly<Omit<WalletProviderProps, 'autoConnect' | 'localStorageKey'> & {
    adapter: Adapter | null;
    isUnloadingRef: React.RefObject<boolean>;
    onAutoConnectRequest?: () => Promise<void>;
    onConnectError: () => void;
    onSelectWallet: (walletName: WalletName | null) => void;
}>;
export declare function WalletProviderBase({ adapter, children, isUnloadingRef, onAutoConnectRequest, onConnectError, onError, onSelectWallet, wallets: adapters, }: Props): JSX.Element;
export {};
//# sourceMappingURL=WalletProviderBase.d.ts.map