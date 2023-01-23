class Block {
    constructor({ data, hash, lastHash, timestamp }) {
        this.data = data
        this.hash = hash
        this.lastHash = lastHash
        this.timestamp = timestamp
    }
}

const data = 'foo-data'
const hash = 'foo-hash'
const lastHash = 'foo-lastHash'
const timestamp = Date.now().toString()

const block = new Block({ data, timestamp, hash, lastHash })
console.log(block)

module.exports = Block
