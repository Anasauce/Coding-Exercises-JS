import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import scrabBag from '../src/scrabBag.js'

chai.use(chaiChange)

describe('scrabBag', () => {
  'use strict'

  it('exists', () => {
    expect(scrabBag).to.be.a('function')
  })
})
