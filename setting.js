var globalSetData = {
    blockSet: [
//      block 1
        [
            [[1,0],[1,1],[0,1],[1,2]],
            [[0,1],[1,1],[2,1],[1,2]],
            [[1,0],[1,1],[2,1],[1,2]],
            [[1,0],[0,1],[1,1],[2,1]]
        ],
//      block 2
        [
            [[0,0],[1,0],[1,1],[1,2]],
            [[0,1],[0,0],[1,0],[2,0]],
            [[0,0],[0,1],[0,2],[1,2]],
            [[0,1],[1,1],[2,1],[2,0]]
        ],
//      block 3
        [
            [[1,0],[1,1],[1,2],[0,2]],
            [[0,0],[1,0],[2,0],[2,1]],
            [[1,0],[0,0],[0,1],[0,2]],
            [[0,0],[0,1],[1,1],[2,1]]
        ],
//      block 4
        [
            [[0,0],[0,1],[1,1],[1,2]],
            [[0,1],[1,1],[1,0],[2,0]]
        ],
//      block 5
        [
            [[0,2],[0,1],[1,1],[1,0]],
            [[0,0],[1,0],[1,1],[2,1]]
        ],
//      block 6
        [
            [[1,0],[1,1],[1,2],[1,3]],
            [[0,0],[1,0],[2,0],[3,0]]
        ],
//      block 7
        [
            [[0,0],[0,1],[1,1],[1,0]]
        ]
    ],
    colorSet: [
        // block 1's color
        '#800080',
        // block 2's color
        '#0000ff',
        // block 3's color
        '#ffa500',
        // block 4's color
        '#ff0000',
        // block 5's color
        '#adff2f',
        // block 6's color
        '#00bfff',
        // block 7's color
        '#ffea00'
    ],
    maxColNum: 10,
    maxRowNum: 25,
    // nextMaxColNum: 4,
    // nextMaxRowNum: 3,
    hideRowNum:3,
    startRow: 3,
    startCol: 4,
    gameOverRow: 3,
    spaceKeyCode:32,
    leftKeyCode:37,
    upKeyCode:38,
    rightKeyCode:39,
    downKeyCode:40,
    speedUpScore:100,
    initSpeed:700,
    maxSpeed:300,
};