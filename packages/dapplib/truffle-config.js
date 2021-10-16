require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea kitten fresh skull drift rebel noise atom gesture person flock gas'; 
let testAccounts = [
"0xd84236df44d260a40862b1feda819f82227bb763e0f00189242a4cc9fc5fb916",
"0x46d0afda2820d142b2221d1a79028c2c4a55b526517613e1cc5658fbb7925668",
"0xf1956b460da55cabcdb7d4ccc73bf2cc06edc4832822bcd53e3753ec66bff581",
"0x5f68b17fcfa2a9a8d4328820081e03e0b349016234c32d4531d34aad08be6cf8",
"0xc09f2c126335fb4f82f8a39048e43dba2b17deef42345153db1554591696be41",
"0x774931ceaf128a131d8f750a465f1078c1fd4d3eb399ad75fd8a029feacd9f9b",
"0x906f4b9ea89f4e4550d00581f74686d2b195275a440f0a9c4561411d220136db",
"0x1534a9e6ea4c9f41b2007e287dbe29991b870edc258a9d5edfa6824303244021",
"0x1333eec07b0633f31439f852576ab449dab29182ac9d897d45bf4981ccff3cc9",
"0xb7753233be4a17a7f45440534e86974e7d68862954849dc058b3f57214782f31"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

