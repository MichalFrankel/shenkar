import {RiddlesLevel} from '../common/common';
import {Board, Difficulty, IState, RiddleData} from './gameLogic';

function r(riddleData: RiddleData, board: Board, riddleWin: number[]): IState {
  return {
    board: board,
    riddleData: riddleData,
    boardBeforeMove: board,
    delta: null,
    riddleWin: riddleWin,
    difficulty: Difficulty.NOVICE,
  };
}

export const riddleLevels: RiddlesLevel<IState>[] = [
  {
    levelLocalizeId: 'GOMOKU_LEVEL1',
    difficulty: 'EASY',
    maxMovesNum: 1,
    turnIndex: 0,
    riddles: [
      r(
        'r1',
        [
          ['', '', '', 'B', '', '', '', '', ''],
          ['', '', '', 'B', 'W', '', '', '', ''],
          ['', '', '', 'B', 'W', 'W', '', '', ''],
          ['', '', '', 'B', 'W', '', '', '', ''],
          ['', '', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', '', ''],
        ],
        [4, 3]
      ),
      r(
        'r2',
        [
          ['', '', '', '', 'B', '', '', '', ''],
          ['', '', '', 'B', 'W', '', '', '', ''],
          ['', '', 'B', '', 'W', '', '', '', ''],
          ['', 'B', '', '', 'W', '', '', '', ''],
          ['', '', '', '', 'W', '', '', '', ''],
          ['', '', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', '', ''],
        ],
        [4, 0]
      ),
      r(
        'r3',
        [
          ['', '', '', '', '', 'B', 'B', 'B', 'B'],
          ['', '', '', '', 'W', '', '', '', ''],
          ['', '', '', '', 'W', '', '', '', ''],
          ['', '', '', '', 'W', '', '', '', ''],
          ['', '', '', '', 'W', '', '', '', ''],
          ['', '', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', '', ''],
        ],
        [0, 4]
      ),
      r(
        'r4',
        [
          ['', '', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', '', 'B'],
          ['', '', '', '', 'W', '', '', '', 'B'],
          ['', '', '', '', '', 'W', '', '', 'B'],
          ['', '', '', '', '', '', 'W', '', 'B'],
          ['', '', '', '', '', '', '', 'W', ''],
        ],
        [8, 8]
      ),
      r(
        'r5',
        [
          ['', '', '', '', 'B', '', '', '', ''],
          ['', '', '', 'B', 'W', 'B', '', '', ''],
          ['', '', '', 'B', 'W', 'B', 'B', '', ''],
          ['', '', '', 'B', 'W', 'B', '', 'B', ''],
          ['', '', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', '', ''],
        ],
        [4, 8]
      ),
    ],
  },
  {
    levelLocalizeId: 'GOMOKU_LEVEL2',
    difficulty: 'EASY',
    maxMovesNum: 1,
    turnIndex: 0,
    riddles: [
      r(
        'r1',
        [
          ['', '', '', '', 'W', '', '', '', ''],
          ['', '', '', 'B', 'W', '', '', '', ''],
          ['', '', '', 'B', 'W', '', '', '', ''],
          ['', '', 'B', 'B', 'W', '', '', '', ''],
          ['', '', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', '', ''],
        ],
        [4, 4]
      ),
      r(
        'r2',
        [
          ['', '', '', '', '', '', '', '', ''],
          ['B', '', '', '', '', '', '', '', ''],
          ['B', 'B', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', '', ''],
          ['W', 'W', 'W', 'W', '', '', '', '', ''],
          ['', 'B', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', '', ''],
        ],
        [5, 4]
      ),
      r(
        'r3',
        [
          ['W', 'W', 'B', '', '', '', '', '', ''],
          ['W', 'W', 'B', '', '', '', '', '', ''],
          ['W', '', '', '', '', '', '', '', ''],
          ['', 'W', '', '', '', '', '', 'B', ''],
          ['', 'B', 'W', '', '', '', '', '', ''],
          ['B', '', '', 'W', '', '', '', '', 'B'],
          ['', 'B', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', '', ''],
        ],
        [6, 4]
      ),
      r(
        'r4',
        [
          ['W', 'W', 'B', 'B', '', '', '', '', ''],
          ['W', 'W', 'B', '', 'B', 'W', 'W', 'W', 'W'],
          ['W', 'B', 'W', '', '', 'B', '', '', ''],
          ['', '', '', '', 'B', 'B', '', '', ''],
          ['W', '', '', '', '', '', '', '', ''],
          ['B', '', '', '', '', '', '', '', ''],
          ['', 'B', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', '', ''],
        ],
        [3, 0]
      ),
      r(
        'r5',
        [
          ['', '', '', '', 'W', '', '', '', ''],
          ['B', '', '', '', 'W', '', '', '', ''],
          ['B', 'B', '', '', 'W', '', '', '', ''],
          ['', '', '', '', 'W', '', '', '', ''],
          ['', '', '', '', '', '', '', '', ''],
          ['', 'B', '', 'W', '', '', '', '', ''],
          ['', 'B', 'W', '', '', '', '', '', ''],
          ['', 'W', '', '', '', '', '', '', ''],
          ['W', 'B', 'B', 'B', '', '', '', '', ''],
        ],
        [4, 4]
      ),
    ],
  },
  {
    levelLocalizeId: 'GOMOKU_LEVEL3',
    difficulty: 'MEDIUM',
    maxMovesNum: 5,
    turnIndex: 0,
    riddles: [
      r(
        'r1',
        [
          ['', '', '', '', '', '', '', '', ''],
          ['', 'W', 'W', '', '', 'W', '', '', ''],
          ['', '', 'B', '', 'W', 'B', '', '', ''],
          ['', '', 'B', 'B', 'W', 'B', '', '', ''],
          ['', '', 'B', 'W', 'B', 'B', 'B', 'W', ''],
          ['', '', '', 'W', '', 'B', 'W', '', ''],
          ['', '', '', '', '', '', 'W', '', ''],
          ['', '', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', '', ''],
        ],
        [6, 5]
      ),
      r(
        'r2',
        [
          ['', '', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', '', ''],
          ['', '', '', 'W', 'W', '', '', '', ''],
          ['', '', 'B', 'B', 'B', 'B', 'W', '', ''],
          ['', '', '', 'B', 'W', 'W', '', '', ''],
          ['', '', '', '', 'B', '', '', '', ''],
          ['', '', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', '', ''],
        ],
        [4, 1]
      ),
      r(
        'r3',
        [
          ['', '', '', '', '', '', 'B', '', 'W'],
          ['', '', '', '', 'W', 'B', 'B', 'B', ''],
          ['', '', '', '', '', 'W', 'B', 'W', ''],
          ['', '', '', '', 'W', 'B', 'B', '', 'W'],
          ['', '', '', '', '', '', 'W', '', ''],
          ['', '', '', 'B', '', '', '', '', ''],
          ['', '', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', '', ''],
        ],
        [4, 4]
      ),
      r(
        'r4',
        [
          ['', '', '', '', '', '', '', '', ''],
          ['', '', '', 'W', '', '', '', '', ''],
          ['', '', '', 'B', '', '', '', '', ''],
          ['', '', 'W', '', 'W', '', '', '', ''],
          ['', '', '', 'B', '', '', '', '', 'B'],
          ['', '', '', 'B', 'W', '', '', '', 'B'],
          ['', '', '', 'B', '', 'W', '', '', 'B'],
          ['', '', '', 'B', '', '', 'W', '', 'B'],
          ['', '', 'W', '', '', '', '', 'W', ''],
        ],
        [8, 8]
      ),
      r(
        'r5',
        [
          ['W', '', '', '', '', '', 'B', 'W', ''],
          ['B', '', '', '', '', '', '', 'B', ''],
          ['', '', '', '', 'B', '', 'B', '', 'W'],
          ['', '', '', '', '', 'W', '', 'B', ''],
          ['', '', '', 'W', 'B', '', 'B', 'B', ''],
          ['', '', '', '', '', 'B', 'B', '', ''],
          ['', '', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', '', ''],
        ],
        [0, 0]
      ),
    ],
  },
  {
    levelLocalizeId: 'GOMOKU_LEVEL4',
    difficulty: 'HARD',
    maxMovesNum: 5,
    turnIndex: 0,
    riddles: [
      r(
        'r1',
        [
          ['W', '', '', '', '', '', '', '', ''],
          ['W', 'B', '', '', 'W', 'W', 'W', 'W', 'B'],
          ['B', '', '', '', 'W', 'B', 'B', '', ''],
          ['', '', '', '', 'B', 'B', 'B', '', ''],
          ['', '', '', 'B', 'B', 'B', 'W', '', ''],
          ['', '', 'B', 'B', '', 'W', '', '', ''],
          ['', '', 'W', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', '', ''],
        ],
        [0, 0]
      ),
      r(
        'r2',
        [
          ['W', '', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', '', ''],
          ['', '', 'W', '', '', '', '', '', ''],
          ['B', '', 'W', 'B', 'B', '', '', '', ''],
          ['', 'W', 'W', 'B', 'W', 'B', '', '', ''],
          ['', '', 'W', 'B', 'B', '', 'B', '', ''],
          ['', '', 'B', 'W', 'B', 'B', '', '', ''],
          ['', '', '', '', 'W', 'B', 'W', '', ''],
        ],
        [0, 0]
      ),
      r(
        'r3',
        [
          ['B', '', '', '', '', '', 'W', '', ''],
          ['', '', 'W', 'W', '', '', '', '', ''],
          ['', '', 'B', '', 'B', 'W', '', 'W', ''],
          ['', 'W', 'B', 'B', 'B', 'B', 'W', '', ''],
          ['', 'W', 'B', 'B', 'W', 'W', '', '', ''],
          ['', 'W', '', 'W', 'W', '', '', 'W', ''],
          ['', 'B', '', 'B', '', '', '', '', ''],
          ['', '', '', '', 'B', '', '', '', ''],
          ['', '', '', '', '', 'B', '', '', ''],
        ],
        [0, 0]
      ),
      r(
        'r4',
        [
          ['W', '', 'B', 'W', 'W', 'W', 'W', '', ''],
          ['', '', '', '', 'B', 'B', 'W', '', ''],
          ['', '', 'B', 'W', 'B', 'B', '', '', ''],
          ['', '', 'W', 'B', 'B', 'B', '', '', ''],
          ['', 'W', '', '', 'W', 'B', '', 'B', ''],
          ['', '', '', '', '', 'W', '', '', ''],
          ['', '', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', '', ''],
        ],
        [0, 0]
      ),
      r(
        'r5',
        [
          ['B', '', '', '', '', '', '', '', ''],
          ['', '', '', 'W', 'B', '', '', '', ''],
          ['', '', 'W', 'B', 'W', 'W', '', '', ''],
          ['', 'W', 'B', 'B', 'B', 'B', 'W', '', ''],
          ['', '', 'B', 'B', 'W', 'B', 'B', 'W', ''],
          ['', '', 'B', 'W', 'B', 'B', 'W', '', ''],
          ['', '', 'W', '', '', 'W', '', '', ''],
          ['', 'W', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', '', ''],
        ],
        [0, 0]
      ),
    ],
  },
];
