//Utility function to generate unique hash

genHash = (lastHash, data) => lastHash + data + '*'

// Block Class Members -> data, hash, lastHash

class Block {
    constructor(data, hash, lastHash) {
        this.data = data
        this.hash = hash
        this.lastHash = lastHash
    }
}

class Blockchain {
    constructor() {
        this.chain = []
        this.chain.push(new Block('genData', 'genHash', 'genLastHash')) // creating genesis block
    }

    addBlock = function (data) {
        const lastHash = chain[chain.length - 1].hash
        const hash = genHash(lastHash, data)
        this.chain.push(new Block(data, hash, lastHash))
    }
}

const speedChain = new Blockchain()
console.log(speedChain)

// to access member of JS class always* use 'this'.
// to define constructor, instead of using class name use constructor keyword.
// We can define class members in constructor.
