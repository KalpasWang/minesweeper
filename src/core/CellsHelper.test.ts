import { getNeighboringCells, incrementNeighbiringCells } from './CellsHeleper'
import { createDefaultGrid } from './Grid'
import {
  hiddenMine as hm,
  hidden0 as h0,
  hidden1 as h1,
  hidden2 as h2,
  hidden8 as h8,
} from './Cell'

describe('core/CellsHelper functions', () => {
  describe('getNeighboringCells', () => {
    it('3x3 Grid 與 [0 0] 座標--回傳5個 cell 座標', () => {
      const grid = createDefaultGrid([3, 3])
      expect(getNeighboringCells(grid, [0, 0])).toStrictEqual({
        right: [0, 1],
        bottomRight: [1, 1],
        bottom: [1, 0],
      })
    })

    it('3x3 Grid 與 [1 1] 座標--回傳8個 cell 座標', () => {
      const grid = createDefaultGrid([3, 3])
      expect(getNeighboringCells(grid, [1, 1])).toStrictEqual({
        top: [0, 1],
        topRight: [0, 2],
        right: [1, 2],
        bottomRight: [2, 2],
        bottom: [2, 1],
        bottomLeft: [2, 0],
        left: [1, 0],
        topLeft: [0, 0],
      })
    })
  })

  describe('incrementNeighbiringCells', () => {
    it('1x1 Grid 與 1個地雷', () => {
      expect(incrementNeighbiringCells([[hm()]], [0, 0])).toStrictEqual([
        [hm()],
      ])
    })

    it('2x2 Grid 與 1個地雷', () => {
      expect(
        incrementNeighbiringCells(
          [
            [hm(), h0()],
            [h0(), h0()],
          ],
          [0, 0]
        )
      ).toStrictEqual([
        [hm(), h1()],
        [h1(), h1()],
      ])
    })
    it('2x2 Grid 與 2個地雷', () => {
      expect(
        incrementNeighbiringCells(
          [
            [hm(), h0()],
            [h0(), hm()],
          ],
          [0, 0]
        )
      ).toStrictEqual([
        [hm(), h1()],
        [h1(), hm()],
      ])
    })
  })
  describe('3x3 cases', () => {
    it('3x3 Grid 與1個在中間的地雷', () => {
      expect(
        incrementNeighbiringCells(
          [
            [h0(), h0(), h0()],
            [h0(), hm(), h0()],
            [h0(), h0(), h0()],
          ],
          [1, 1]
        )
      ).toStrictEqual([
        [h1(), h1(), h1()],
        [h1(), hm(), h1()],
        [h1(), h1(), h1()],
      ])
    })
    it('3x3 Grid 與2個地雷', () => {
      expect(
        incrementNeighbiringCells(
          [
            [h0(), h1(), hm()],
            [h0(), hm(), h1()],
            [h0(), h0(), h0()],
          ],
          [1, 1]
        )
      ).toStrictEqual([
        [h1(), h2(), hm()],
        [h1(), hm(), h2()],
        [h1(), h1(), h1()],
      ])
    })
    it('3x3 Grid 與 Cell.minsAround 已經是8就不在增加', () => {
      expect(
        incrementNeighbiringCells(
          [
            [hm(), hm(), hm()],
            [hm(), hm(), hm()],
            [hm(), h8(), hm()],
          ],
          [2, 2]
        )
      ).toStrictEqual([
        [hm(), hm(), hm()],
        [hm(), hm(), hm()],
        [hm(), h8(), hm()],
      ])
    })
  })
})
