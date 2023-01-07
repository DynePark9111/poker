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
  "10": "One Pair",
  "11": "High Card",
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
  "11": 0,
} as const;

export const COLOR_TABLE = {
  "0": "#ffffff00",
  "1": "#000000",
  "2": "#442F8A",
  "3": "#EE1745",
  "4": "#02cd71",
  "5": "#DE2DFC",
  "6": "#01BBFF",
  "7": "#fe9613",
  "8": "#8489E3",
  "9": "#E75507",
  "10": "#A8A9AB",
  "11": "#A8A9AB",
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
