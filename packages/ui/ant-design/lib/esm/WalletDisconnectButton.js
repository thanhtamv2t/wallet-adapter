import { useWallet } from '@solana/wallet-adapter-react';
import { Button } from 'antd';
import React, { useCallback, useMemo } from 'react';
import { WalletIcon } from './WalletIcon.js';
export const WalletDisconnectButton = ({ type = 'primary', size = 'large', htmlType = 'button', children, disabled, onClick, ...props }) => {
    const { wallet, disconnect, disconnecting } = useWallet();
    const handleClick = useCallback((event) => {
        if (onClick)
            onClick(event);
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        if (!event.defaultPrevented)
            disconnect().catch(() => {
                // Silently catch because any errors are caught by the context `onError` handler
            });
    }, [onClick, disconnect]);
    const content = useMemo(() => {
        if (children)
            return children;
        if (disconnecting)
            return 'Disconnecting ...';
        if (wallet)
            return 'Disconnect';
        return 'Disconnect Wallet';
    }, [children, disconnecting, wallet]);
    return (React.createElement(Button, { onClick: handleClick, disabled: disabled || !wallet, icon: React.createElement(WalletIcon, { wallet: wallet }), type: type, size: size, htmlType: htmlType, ...props }, content));
};
//# sourceMappingURL=WalletDisconnectButton.js.map