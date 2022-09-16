import { getNeighboringCells } from './CellsHeleper'
import { createEmptyGrid } from './Grid'

describe('core/CellsHelper functions', () => {
  describe('getNeighboringCells', () => {
    it('3x3 Grid 與 [0 0] 座標--回傳5個 cell 座標', () => {
      const grid = createEmptyGrid([3, 3])
      expect(getNeighboringCells(grid, [0, 0])).toStrictEqual({
        right: [0, 1],
        bottomRight: [1, 1],
        bottom: [1, 0],
      })
    })

    it('3x3 Grid 與 [1 1] 座標--回傳8個 cell 座標', () => {
      const grid = createEmptyGrid([3, 3])
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

  describe('incrementNeighbiringCells', () => {})
})
