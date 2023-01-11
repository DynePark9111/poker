export const RANK = {
  "0": "",
  "1": "Royal Flush",
  "2": "Straight Flush",
  "3": "Four Cards",
  "4": "Full House",
  "5": "Flush",
  "6": "Straight",
  "7": "Triple",
  "8": "Two Pair",
  "9": "Jacks or Better",
  "10": "All Other",
} as const;

export const PAY_TABLE = {
  "0": 0,
  "1": 250,
  "2": 50,
  "3": 25,
  "4": 9,
  "5": 6,
  "6": 4,
  "7": 3,
  "8": 2,
  "9": 1,
  "10": 0,
} as const;

export const PROBABILITY_TABLE = {
  "0": 0,
  "1": 0.002,
  "2": 0.011,
  "3": 0.236,
  "4": 1.151,
  "5": 1.101,
  "6": 1.123,
  "7": 7.445,
  "8": 25.865,
  "9": 21.459,
  "10": 54.543,
} as const;

export const COLOR_TABLE = {
  "0": "#ffffff00",
  "1": "#000000dd",
  "2": "#442F8Add",
  "3": "#EE1745dd",
  "4": "#02cd71dd",
  "5": "#DE2DFCdd",
  "6": "#01BBFFdd",
  "7": "#fe9613dd",
  "8": "#8489E3dd",
  "9": "#E75507dd",
  "10": "#A8A9ABdd",
} as const;

export type RANK_TYPE = keyof typeof RANK;
export type PAY_TABLE_TYPE = keyof typeof PAY_TABLE;
export type GAME_STATUS_TYPE = keyof typeof GAME_STATUS;

export const GAME_STATUS = {
  ERROR: -2,
  LOADING: -1,
  START: 0,
  DEAL: 1,
  END: 2,
};
