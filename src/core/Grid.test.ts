import { CellState, Grid } from './types'
import { createGrid, createEmptyGrid } from './Grid'

const { empty, mine } = CellState

describe('core/Grid functions', () => {
  describe('emptyGridGenerator', () => {
    it('產生 3x5 的 empty 2D Grid', () => {
      const grid = createEmptyGrid([3, 5])
      expect(grid).toStrictEqual<Grid>([
        [empty, empty, empty, empty, empty],
        [empty, empty, empty, empty, empty],
        [empty, empty, empty, empty, empty],
      ])
    })
  })

  describe('gridGenerator', () => {
    it('產生 5x5 地雷密度 0.4 (10個地雷) 的 2D Grid', () => {
      const minesNumber = 10
      const cellsNumber = 25
      const density = minesNumber / cellsNumber
      const grid = createGrid([5, 5], density)
      const flattedGrid = grid.flat()

      // console.table(grid)
      // expect(flattedGrid.length).toBe(25)
      // expect(flattedGrid.filter((cell) => cell === mine)).toBe(minesNumber)
      // expect(
      //   flattedGrid.slice(0, 10).filter((cell) => cell === mine).length
      // ).not.toBe(minesNumber)
    })
  })
})
