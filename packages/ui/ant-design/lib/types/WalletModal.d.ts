import type { ModalProps } from 'antd';
import type { FC } from 'react';
export interface WalletModalProps extends Omit<ModalProps, 'visible'> {
    featuredWallets?: number;
}
export declare const WalletModal: FC<WalletModalProps>;
//# sourceMappingURL=WalletModal.d.ts.map