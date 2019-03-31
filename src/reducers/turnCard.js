import { CardActions } from '../actions/turnCard'

const initState = {
    startTime: 0,
    overTime: 0,
    showCardNum: [],
    turnCardNum: 0,
    gameLevel: 4,
    overCardNum: 0,
    cardMap: {},
    arrMap: [],
    initState: 'start'
}

export default (state = initState, action) => {
    switch(action.type) {
        case CardActions.INIT_GAME: {
            return initState
        }
        case CardActions.ADD_TURN_NUM: {
            return {
                ...state,
                turnCardNum: state.turnCardNum+1
            }
        }
        case CardActions.SHOW_CARD_NUM: {
            const { arr } = action.payload
            // let newArr = [...state.showCardNum]
            return {
                ...state,
                showCardNum: arr
            }
        }
        case CardActions.CHANGE_START_TIME: {
            const { str } = action.payload
            return {
                ...state,
                startTime: str
            }
        }
        case CardActions.CHANGE_OVER_TIME: {
            const { str } = action.payload
            return {
                ...state,
                overTime: str
            }
        }
        case CardActions.CHANGE_INIT_STATE: {
            const { is } = action.payload
            return {
                ...state,
                initState: is
            } 
        }
        case CardActions.CHANGE_OVER_CARD_NUM: {
            const { num } = action.payload
            return {
                ...state,
                overCardNum: num
            }
        }
        case CardActions.CHANGE_CARD_MAP: {
            const { arr } = action.payload
            return {
                ...state,
                cardMap: arr
            }
        }
        case CardActions.GAME_START: {
            const { cardMap, arrMap } = action.payload
            return {
                ...initState,
                cardMap: cardMap,
                arrMap: arrMap,
                initState: 'alive',
                turnCardNum: 0,
                startTime: new Date().getTime()
            }
        }
        case CardActions.TURN_CARD: {
            const { arr } = action.payload
            const newArr  = [...state.arrMap]
            // console.log(arr)
            arr.forEach(item => {
                newArr[item].turn = !newArr[item].turn
            })
            // console.log(newArr)
            return {
                ...state,
                arrMap: newArr
            }
        }
        case CardActions.OVER_CARD: {
            // console.log('over')
            const { arr } = action.payload
            const newArr = [...state.arrMap]
            arr.forEach(item => {
                newArr[item].render = false
            })
            // console.log(newArr)
            return {
                ...state,
                arrMap: newArr,
                overCardNum: state.overCardNum + 2
            }
        }
        default:
            return state
    }
}