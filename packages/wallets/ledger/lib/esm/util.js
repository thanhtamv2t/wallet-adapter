import { StatusCodes, TransportStatusError } from '@ledgerhq/hw-transport';
import { PublicKey } from '@solana/web3.js';
import './polyfills/index.js';
export function getDerivationPath(account, change) {
    const length = account !== undefined ? (change === undefined ? 3 : 4) : 2;
    const derivationPath = Buffer.alloc(1 + length * 4);
    let offset = derivationPath.writeUInt8(length, 0);
    offset = derivationPath.writeUInt32BE(harden(44), offset); // Using BIP44
    offset = derivationPath.writeUInt32BE(harden(501), offset); // Solana's BIP44 path
    if (account !== undefined) {
        offset = derivationPath.writeUInt32BE(harden(account), offset);
        if (change !== undefined) {
            derivationPath.writeUInt32BE(harden(change), offset);
        }
    }
    return derivationPath;
}
const BIP32_HARDENED_BIT = (1 << 31) >>> 0;
function harden(n) {
    return (n | BIP32_HARDENED_BIT) >>> 0;
}
const INS_GET_PUBKEY = 0x05;
const INS_SIGN_MESSAGE = 0x06;
const P1_NON_CONFIRM = 0x00;
const P1_CONFIRM = 0x01;
const P2_EXTEND = 0x01;
const P2_MORE = 0x02;
const MAX_PAYLOAD = 255;
const LEDGER_CLA = 0xe0;
/** @internal */
export async function getPublicKey(transport, derivationPath) {
    const bytes = await send(transport, INS_GET_PUBKEY, P1_NON_CONFIRM, derivationPath);
    return new PublicKey(bytes);
}
/** @internal */
export async function signTransaction(transport, transaction, derivationPath) {
    const paths = Buffer.alloc(1);
    paths.writeUInt8(1, 0);
    const message = transaction.serializeMessage();
    const data = Buffer.concat([paths, derivationPath, message]);
    return await send(transport, INS_SIGN_MESSAGE, P1_CONFIRM, data);
}
async function send(transport, instruction, p1, data) {
    let p2 = 0;
    let offset = 0;
    if (data.length > MAX_PAYLOAD) {
        while (data.length - offset > MAX_PAYLOAD) {
            const buffer = data.slice(offset, offset + MAX_PAYLOAD);
            const response = await transport.send(LEDGER_CLA, instruction, p1, p2 | P2_MORE, buffer);
            // @ts-ignore -- TransportStatusError is a constructor Function, not a Class
            if (response.length !== 2)
                throw new TransportStatusError(StatusCodes.INCORRECT_DATA);
            p2 |= P2_EXTEND;
            offset += MAX_PAYLOAD;
        }
    }
    const buffer = data.slice(offset);
    const response = await transport.send(LEDGER_CLA, instruction, p1, p2, buffer);
    return response.slice(0, response.length - 2);
}
//# sourceMappingURL=util.js.map