export enum CellState {
  opening,
  hidden,
  flag,
}

export type Cell = {
  // -1 代表它是地雷
  minesAround: -1 | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8
  state: CellState
}

export const hiddenMine = (): Cell => ({
  minesAround: -1,
  state: CellState.hidden,
})

export const hidden0 = (): Cell => ({
  minesAround: 0,
  state: CellState.hidden,
})

export const hidden1 = (): Cell => ({
  minesAround: 1,
  state: CellState.hidden,
})

export const hidden2 = (): Cell => ({
  minesAround: 2,
  state: CellState.hidden,
})

export const hidden3 = (): Cell => ({
  minesAround: 3,
  state: CellState.hidden,
})

export const hidden4 = (): Cell => ({
  minesAround: 4,
  state: CellState.hidden,
})

export const hidden5 = (): Cell => ({
  minesAround: 5,
  state: CellState.hidden,
})

export const hidden6 = (): Cell => ({
  minesAround: 6,
  state: CellState.hidden,
})

export const hidden7 = (): Cell => ({
  minesAround: 7,
  state: CellState.hidden,
})

export const hidden8 = (): Cell => ({
  minesAround: 8,
  state: CellState.hidden,
})
