import { WalletReadyState } from '@solana/wallet-adapter-base';
import { useWallet } from '@solana/wallet-adapter-react';
import { Menu, Modal } from 'antd';
import React, { useCallback, useMemo, useState } from 'react';
import { useWalletModal } from './useWalletModal.js';
import { WalletMenuItem } from './WalletMenuItem.js';
export const WalletModal = ({ title = 'Select your wallet', featuredWallets = 3, onCancel, ...props }) => {
    const { wallets, select } = useWallet();
    const { visible, setVisible } = useWalletModal();
    const [expanded, setExpanded] = useState(false);
    const [featured, more] = useMemo(() => {
        const supportedWallets = wallets.filter((wallet) => wallet.readyState !== WalletReadyState.Unsupported);
        return [supportedWallets.slice(0, featuredWallets), supportedWallets.slice(featuredWallets)];
    }, [wallets, featuredWallets]);
    const handleCancel = useCallback((event) => {
        if (onCancel)
            onCancel(event);
        if (!event.defaultPrevented)
            setVisible(false);
    }, [onCancel, setVisible]);
    const handleWalletClick = useCallback((event, walletName) => {
        select(walletName);
        handleCancel(event);
    }, [select, handleCancel]);
    const onOpenChange = useCallback(() => setExpanded(!expanded), [setExpanded, expanded]);
    return (React.createElement(Modal, { title: title, visible: visible, centered: true, onCancel: handleCancel, footer: null, width: 320, bodyStyle: { padding: 0 }, ...props },
        React.createElement(Menu, { className: "wallet-adapter-modal-menu", inlineIndent: 0, mode: "inline", onOpenChange: onOpenChange },
            featured.map((wallet) => (React.createElement(WalletMenuItem, { key: wallet.adapter.name, onClick: (event) => handleWalletClick(event, wallet.adapter.name), wallet: wallet }))),
            more.length ? (React.createElement(Menu.SubMenu, { key: "wallet-adapter-modal-submenu", title: `${expanded ? 'Less' : 'More'} options` }, more.map((wallet) => (React.createElement(WalletMenuItem, { key: wallet.adapter.name, onClick: (event) => handleWalletClick(event, wallet.adapter.name), wallet: wallet }))))) : null)));
};
//# sourceMappingURL=WalletModal.js.map