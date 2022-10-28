import { CopyOutlined as CopyIcon, DisconnectOutlined as DisconnectIcon, SwapOutlined as SwitchIcon, } from '@ant-design/icons';
import { useWallet } from '@solana/wallet-adapter-react';
import { Button, Dropdown, Menu } from 'antd';
import React, { useMemo } from 'react';
import { useWalletModal } from './useWalletModal.js';
import { WalletConnectButton } from './WalletConnectButton.js';
import { WalletIcon } from './WalletIcon.js';
import { WalletModalButton } from './WalletModalButton.js';
export const WalletMultiButton = ({ type = 'primary', size = 'large', htmlType = 'button', children, ...props }) => {
    const { publicKey, wallet, disconnect } = useWallet();
    const { setVisible } = useWalletModal();
    const base58 = useMemo(() => publicKey?.toBase58(), [publicKey]);
    const content = useMemo(() => {
        if (children)
            return children;
        if (!wallet || !base58)
            return null;
        return base58.slice(0, 4) + '..' + base58.slice(-4);
    }, [children, wallet, base58]);
    if (!wallet) {
        return (React.createElement(WalletModalButton, { type: type, size: size, htmlType: htmlType, ...props }, children));
    }
    if (!base58) {
        return (React.createElement(WalletConnectButton, { type: type, size: size, htmlType: htmlType, ...props }, children));
    }
    return (React.createElement(Dropdown, { overlay: React.createElement(Menu, { className: "wallet-adapter-multi-button-menu" },
            React.createElement(Menu.Item, { className: "wallet-adapter-multi-button-menu-item" },
                React.createElement(Button, { icon: React.createElement(WalletIcon, { wallet: wallet }), type: type, size: size, htmlType: htmlType, className: "wallet-adapter-multi-button-menu-button", block: true, ...props }, wallet.adapter.name)),
            React.createElement(Menu.Item, { onClick: async () => {
                    await navigator.clipboard.writeText(base58);
                }, icon: React.createElement(CopyIcon, { className: ".wallet-adapter-multi-button-icon" }), className: "wallet-adapter-multi-button-item" }, "Copy address"),
            React.createElement(Menu.Item, { onClick: () => setTimeout(() => setVisible(true), 100), icon: React.createElement(SwitchIcon, { className: ".wallet-adapter-multi-button-icon" }), className: "wallet-adapter-multi-button-item" }, "Change wallet"),
            React.createElement(Menu.Item, { onClick: () => {
                    // eslint-disable-next-line @typescript-eslint/no-empty-function
                    disconnect().catch(() => {
                        // Silently catch because any errors are caught by the context `onError` handler
                    });
                }, icon: React.createElement(DisconnectIcon, { className: ".wallet-adapter-multi-button-icon" }), className: "wallet-adapter-multi-button-item" }, "Disconnect")), trigger: ['click'] },
        React.createElement(Button, { icon: React.createElement(WalletIcon, { wallet: wallet }), type: type, size: size, htmlType: htmlType, ...props }, content)));
};
//# sourceMappingURL=WalletMultiButton.js.map