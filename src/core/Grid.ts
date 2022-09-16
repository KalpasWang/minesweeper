import { Cell, CellState, Grid, GridSize } from './types'

export const createEmptyGrid = (
  size: GridSize,
  state: Cell = CellState.empty
): Grid => [...Array(size[0])].map(() => Array(size[1]).fill(state))

export const createGrid = (size: GridSize, mineDensity: number): Grid => {
  if (mineDensity > 1 || mineDensity < 0) {
    throw new Error('地雷密度必須介於1到0之間')
  }
  const grid = createEmptyGrid(size)
  const totalCellsNumber = size[0] * size[1]
  let unhandledCellsNumber = totalCellsNumber
  let remainingMinesNumber = Math.round(totalCellsNumber * mineDensity)
  // let remainingMineDensity = mineDensity

  grid.forEach((row) => {
    row.forEach((cell) => {
      if (remainingMinesNumber / unhandledCellsNumber > Math.random()) {
        cell = CellState.mine
        remainingMinesNumber--
      }
      unhandledCellsNumber--
    })
  })

  return grid
}
