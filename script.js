// Contract ABI
const contractABI = [ /* paste your ABI here */ ];

// Deployed contract address
const contractAddress = "0xa733A0553Cd7b34e071Ce1E98582aFA615e4e943";

let web3;
let contract;
let account;
let isConnected = false;

// Initialize Web3 on page load
window.addEventListener('load', async () => {
    checkConnection();
    setupConnectButton();
    
    if (window.ethereum) {
        window.ethereum.on('accountsChanged', handleAccountsChanged);
        window.ethereum.on('chainChanged', () => window.location.reload());
    }
});

