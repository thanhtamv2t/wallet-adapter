import type { Wallet } from '@solana/wallet-adapter-react';
import type { MenuItemProps } from 'antd';
import type { FC, MouseEventHandler } from 'react';
interface WalletMenuItemProps extends Omit<MenuItemProps, 'onClick'> {
    onClick: MouseEventHandler<HTMLButtonElement>;
    wallet: Wallet;
}
export declare const WalletMenuItem: FC<WalletMenuItemProps>;
export {};
//# sourceMappingURL=WalletMenuItem.d.ts.map