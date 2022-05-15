require("@nomiclabs/hardhat-waffle");
require("dotenv").config();
require("./tasks/Task");

module.exports = {
  solidity: "0.8.0",
  defaultNetwork: "ropsten",
  networks: {
    rinkeby: {
      url: process.env.RINKEYBY_INFURA_URL,
      accounts: [`0x${process.env.PRIVATE_KEY}`],
    },
    kovan: {
      url: process.env.KOVAN_INFURA_URL,
      accounts: [`0x${process.env.PRIVATE_KEY}`],
    },
    ropsten: {
      url: process.env.ROPSTEN_INFURA_URL,
      accounts: [`0x${process.env.PRIVATE_KEY}`],
    },
  },
};
