import { Grid, Coords } from './types'

export const getNeighboringCells = (
  grid: Grid,
  [y, x]: Coords
): Record<string, Coords> => {
  const yMax = grid.length
  const xMax = grid[0].length

  const temp: Record<string, Coords> = {
    top: [y - 1, x],
    topRight: [y - 1, x + 1],
    right: [y, x + 1],
    bottomRight: [y + 1, x + 1],
    bottom: [y + 1, x],
    bottomLeft: [y + 1, x - 1],
    left: [y, x - 1],
    topLeft: [y - 1, x - 1],
  }
  const result: Record<string, Coords> = {}

  for (const key in temp) {
    if (Object.prototype.hasOwnProperty.call(temp, key)) {
      const [y, x] = temp[key]
      if (y < yMax && y >= 0 && x < xMax && x >= 0) {
        result[key] = [y, x]
      }
    }
  }
  return result
}

export const incrementNeighbiringCells = (grid: Grid, coord: Coords): Grid => {
  const neighbors = getNeighboringCells(grid, coord)
  Object.values(neighbors).forEach(([y, x]: Coords) => {
    if (grid[y][x] < 8) {
      grid[y][x]++
    }
  })
  return grid
}
