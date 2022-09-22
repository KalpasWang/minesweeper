import { Grid, createGrid, createDefaultGrid } from './Grid'
import { Cell, hidden0 as h0 } from './Cell'

describe('core/Grid functions', () => {
  describe('createDefaultGrid', () => {
    it('產生 3x5 的 預設 2D Grid', () => {
      const grid = createDefaultGrid([3, 5])
      expect(grid).toStrictEqual<Grid>([
        [h0(), h0(), h0(), h0(), h0()],
        [h0(), h0(), h0(), h0(), h0()],
        [h0(), h0(), h0(), h0(), h0()],
      ])
    })
  })

  describe('createGrid', () => {
    it('地雷密度錯誤會拋出錯誤', () => {
      const errorText = '地雷密度必須介於0到1之間'
      expect(() => createGrid([2, 2], -1)).toThrow(errorText)
      expect(() => createGrid([9, 9], 2)).toThrow(errorText)
    })

    it('產生 10x10 的 Grid 且地雷密度 0.1 (10個地雷)', () => {
      const minesNumber = 10
      const cellsNumber = 100
      const density = minesNumber / cellsNumber
      const grid = createGrid([10, 10], density)
      const flattedGrid = grid.flat()
      const filterMines = (array: Cell[]) =>
        array.filter((cell) => cell.minesAround === -1)

      // console.table(flattedGrid)
      expect(flattedGrid.length).toBe(100)
      expect(filterMines(flattedGrid).length).toBe(minesNumber)
      expect(filterMines(grid[0]).length).not.toBe(minesNumber)
    })
  })
})
