const { it } = require('node:test')
const { describe } = require('yargs')
const Block = require('./block')

describe('Block', () => {
    const data = 'foo-d'
    const hash = 'foo-h'
    const lastHash = 'foo-l'
    const timestamp = 'foo-t'

    const block = new Block({ data, hash, lastHash, timestamp })

    it('should have data field', () => {
        expect(block.data).toStrictEqual(data)
    })
})
