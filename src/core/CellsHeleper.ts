import { Grid, Coords } from './Grid'

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
  if (grid[coord[0]][coord[1]].minesAround >= 0) {
    throw new Error('此座標的 cell 不是地雷')
  }
  const neighbors = getNeighboringCells(grid, coord)
  Object.values(neighbors).forEach(([y, x]: Coords) => {
    const cell = grid[y][x]
    if (cell.minesAround >= 0 && cell.minesAround < 8) {
      cell.minesAround++
    }
  })
  return grid
}
