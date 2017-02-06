import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import tiles from '../src/tiles'
import { scrabBag, uniqueCount } from '../src/scrabBag'

chai.use(chaiChange)


describe('scrabBag', () => {
  'use strict'
  it('exists', () => {
    expect(scrabBag).to.be.a('function')
  })

  it('returns the letters and corresponding values left in the scrab bag', () => {
    const tilesTaken = 'AERETOXMYCNS_B'
    
    expect(scrabBag(tiles, tilesTaken)).to.equal({ A: 8,
  B: 1,
  C: 1,
  D: 4,
  E: 10,
  F: 2,
  G: 3,
  H: 2,
  I: 9,
  J: 1,
  K: 1,
  L: 4,
  M: 1,
  N: 5,
  O: 7,
  P: 2,
  Q: 1,
  R: 5,
  S: 3,
  T: 5,
  U: 4,
  V: 2,
  W: 2,
  X: 0,
  Y: 1,
  Z: 1,
  _: 1 })
  })

})
