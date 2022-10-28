import { Button, Menu } from 'antd';
import React from 'react';
import { WalletIcon } from './WalletIcon.js';
export const WalletMenuItem = ({ onClick, wallet, ...props }) => {
    return (React.createElement(Menu.Item, { className: "wallet-adapter-modal-menu-item", ...props },
        React.createElement(Button, { onClick: onClick, icon: React.createElement(WalletIcon, { wallet: wallet, className: "wallet-adapter-modal-menu-button-icon" }), type: "text", className: "wallet-adapter-modal-menu-button", htmlType: "button", block: true }, wallet.adapter.name)));
};
//# sourceMappingURL=WalletMenuItem.js.map