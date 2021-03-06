/**
 * @file test keyStore method
 * @author zmh3788
*/

const keyStore = require('../lib/utils/keyStore');

const password = 'ASD.123.asd.123';
const wallet = {
    mnemonic: 'laundry enact stable taste broccoli enemy local daring fancy already sibling man',
    privateKey: 'bb175b7113c18e947f1e9a840167999009dfcb36df2dccf70aef0371de957727',
    address: '8K4PHZp4xGerftQRN5ufDWnMJMCM4ZzgW4vXoehVkyNknwPGz',
    nickName: 'Wallet'
};

const keystore = {
    type: 'aelf',
    address: '8K4PHZp4xGerftQRN5ufDWnMJMCM4ZzgW4vXoehVkyNknwPGz',
    nickName: 'Wallet',
    crypto:
    {
        version: 1,
        cipher: 'AES256',
        cipherparams: { iv: '379986d4d098db8493f05fec60fb00aa' },
        mnemonicEncrypted:
            'U2FsdGVkX19PXP6/te2oE/TWBB4uiplI4ewKbibf+Xq4Rt67B+CYKv2K5klFgyfU200pgG7yo+p1EzsRm8Cr1etoBnw6kNCt5PcdhjVjtmQ/2YU6S93v+ovpQPDh83h/nIgB7P/nGUCAZkvgsbG1GA==',
        privateKeyEncrypted:
            'U2FsdGVkX19PHgwZUU1TqGaC3KA2Btth8RUbiuu0S/ibqqUVJib85Wyg7yJcHEcQVSpLN4/iGCoGKIHm46NMxQFPZdfURjsnzQBxQHDvJikuAGQWP/Lv81JIk4pFv19J',
        kdf: 'scrypt',
        kdfparams:
        {
            r: 1,
            N: 262144,
            p: 8,
            dkLen: 64,
            salt: 'c3c4669a5a3978a75a0201a6516ccba8'
        },
        mac: '084f2882107d46aafd5deaa5860187e1b1aaf4f7b6796c72afbc0ea811af1b70'
    }
};



// The default value of version parameter is 1 if it is not filled in.
// keyStore.getKeystore(wallet, password, 1, (error, result) => {
//     console.log(result);
// });

keyStore.getKeystore(wallet, password).then(result => {
    console.log(result);
    keyStore.unlockKeystore(result, password).then(walletInfo => {
        console.log(walletInfo);
    }).catch(error => {
        console.log(error);
    });
});


keyStore.checkPassword(keystore, password).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});