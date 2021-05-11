require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom glimpse flame tone strong random night equip just clock army general'; 
let testAccounts = [
"0x50fafb1c92fa823b2f31a9669616fba532d00cad41da8ba13ee997edb761bc1b",
"0x120b3d044ea7eb5be2168458ac3ee44a5b697d87fbbb6c221c74c83d2da7fc6c",
"0x0c768190a5c9fd2fba6ec8c20710acf637659db7942e58b4a17bf2f548a32946",
"0x118fa2fdd98dc3c9755a650b39c010f06208f4968a84a3c11b0b6c8a98619155",
"0xecaa166107badc922d9f33adc927c6a2b7eee296e48963c2a569898d348190a8",
"0xb6d39ad634a67f3a49523255b25c1c23f4d5393207cf2a45fe0667398a04c71f",
"0x3a19223314958ed9524cf1196882426664a7b5c3753f37ad1d00bb7efbc6fc2e",
"0xd5ee17fd7da7858447825076d9d94165e35a10d102f5089b97e10e9f1976b296",
"0x8634edd7294b7ff660203d4b7f9d135118a70d90396d3c34b0ec44843acc6f03",
"0x82cf082234a2f5ad7ae2cb34d0b051e48e6c05043ea163c6443c509d6f5aef18"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
