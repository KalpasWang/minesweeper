import { Cell, hidden0 } from './Cell'

export type Grid = Cell[][]
export type GridSize = [number, number]
export type Coords = [number, number]

export const createDefaultGrid = (
  size: GridSize,
  cell: Cell = hidden0()
): Grid => {
  const grid = [...Array(size[0])].map(() => {
    return [...Array(size[1])].map(() => {
      return { ...cell }
    })
  })
  return grid
}

export const createGrid = (size: GridSize, mineDensity: number): Grid => {
  if (mineDensity > 1 || mineDensity < 0) {
    throw new Error('地雷密度必須介於0到1之間')
  }
  const grid = createDefaultGrid(size)
  const totalCellsNumber = size[0] * size[1]
  let unhandledCellsNumber = totalCellsNumber
  let remainingMinesNumber = Math.round(totalCellsNumber * mineDensity)

  grid.forEach((row) => {
    row.forEach((cell) => {
      if (remainingMinesNumber / unhandledCellsNumber > Math.random()) {
        cell.minesAround = -1
        remainingMinesNumber--
      }
      unhandledCellsNumber--
    })
  })

  return grid
}
