const CardActions = {
    INIT_GAME: 'INIT_GAME',
    ADD_TURN_NUM: 'ADD_TURN_NUM',
    SHOW_CARD_NUM: 'SHOW_CARD_NUM',
    CHANGE_START_TIME: 'CHANGE_SART_TIME',
    CHANGE_OVER_TIME: 'CHANGE_OVER_TIME',
    CHANGE_INIT_STATE: 'CHANGE_INIT_STATE',
    CHANGE_OVER_CARD_NUM: 'CHANGE_OVER_CARD_NUM',
    CHANGE_CARD_MAP: 'CHANGE_CARD_MAP',
    GAME_START: 'GAME_START',
    TURN_CARD: 'TURN_CARD',
    OVER_CARD: 'OVER_CARD'
}

export { CardActions }

export default {
    initGame: () => ({
        type: CardActions.INIT_GAME,
        payload: {}
    }),
    gameStart: (cardMap, arrMap) => ({
        type: CardActions.GAME_START,
        payload: {
            cardMap,
            arrMap
        }
    }),
    overCard: (arr) => ({
        type: CardActions.OVER_CARD,
        payload: {
            arr
        }
    }),
    addTurnNum: () => ({
        type: CardActions.ADD_TURN_NUM,
        payload: {}
    }),
    showCardNum: arr => ({
        type: CardActions.SHOW_CARD_NUM,
        payload: {
            arr
        }
    }),
    changeStartTime: str => ({
        type: CardActions.CHANGE_START_TIME,
        payload: {
            str
        }
    }),
    changeOverTime: str => ({
        type: CardActions.CHANGE_OVER_TIME,
        payload: {
            str
        }
    }),

    /**
     * 
     * 初始状态 start
     * 游戏状态 alive
     * 结束状态 over
     */
    changeInitState: is => ({
        type: CardActions.CHANGE_INIT_STATE,
        payload: {
            is
        }
    }),
    changeOverCardNum: num => ({
        type: CardActions.CHANGE_OVER_CARD_NUM,
        payload: {
            num
        }
    }),
    changeCardMap: arr => ({
        type: CardActions.CHANGE_CARD_MAP,
        payload: {
            arr
        }
    }),
    turnCard: arr => ({
        type: CardActions.TURN_CARD,
        payload: {
            arr
        }
    })
}