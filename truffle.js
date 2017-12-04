module.exports = {
  networks: {
    development: {
      host: 'localhost',
      port: 8546,
      network_id: '*',
      gas: 6700000
    }
  },
  solc: {
    optimizer: {
      enabled: true,
      runs: 1000
    }
  }
}
