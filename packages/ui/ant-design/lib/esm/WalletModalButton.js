import { Button } from 'antd';
import React, { useCallback } from 'react';
import { useWalletModal } from './useWalletModal.js';
export const WalletModalButton = ({ children = 'Select Wallet', type = 'primary', size = 'large', htmlType = 'button', onClick, ...props }) => {
    const { setVisible } = useWalletModal();
    const handleClick = useCallback((event) => {
        if (onClick)
            onClick(event);
        if (!event.defaultPrevented)
            setVisible(true);
    }, [onClick, setVisible]);
    return (React.createElement(Button, { onClick: handleClick, type: type, size: size, htmlType: htmlType, ...props }, children));
};
//# sourceMappingURL=WalletModalButton.js.map