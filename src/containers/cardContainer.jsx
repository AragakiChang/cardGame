import CardContainer from '../components/cardContainer'
import { connect } from 'react-redux'
import turnCard from '../actions/turnCard'

let overTimer = null
let turnTimer = null

const mapState = state => {
    return {
        level: state.turnCard.gameLevel,
        cardMap: state.turnCard.cardMap,
        arrMap: state.turnCard.arrMap,
        showCard: state.turnCard.showCardNum,
        overCardNum: state.turnCard.overCardNum,
        turnCardNum: state.turnCard.turnCardNum
    }
}

const mapDispatch = dispatch => {
    return {
        handleTurn: (index, arr, map, overNum) => {
            if (overTimer) return
            let len = arr.length
            if (len === 0) {
                dispatch(turnCard.turnCard([index]))
                dispatch(turnCard.showCardNum([index]))
            } else if (len === 1) {
                if (map[index].val === map[arr[0]].val) {
                    dispatch(turnCard.turnCard([index]))
                    overTimer = setTimeout(()=>{
                        arr.push(index)
                        if (overNum + 2 === map.length) {
                            dispatch(turnCard.changeInitState('over'))
                            dispatch(turnCard.changeOverTime(new Date().getTime()))
                        }
                        dispatch(turnCard.overCard(arr))
                        dispatch(turnCard.showCardNum([]))
                        clearTimeout(overTimer)
                        overTimer = null
                    }, 500)
                } else {
                    arr.push(index)
                    dispatch(turnCard.turnCard([index]))
                    dispatch(turnCard.showCardNum(arr))
                    turnTimer = setTimeout(() => {
                        dispatch(turnCard.turnCard(arr))
                        dispatch(turnCard.showCardNum([]))
                        clearTimeout(turnTimer)
                        turnTimer = null
                    },1000)
                }
            } else if (len === 2) {
                if (turnTimer) {
                    arr.push(index)
                    dispatch(turnCard.turnCard(arr))
                    dispatch(turnCard.showCardNum([index]))
                    clearTimeout(turnTimer)
                    turnTimer = null
                } 
            }
            dispatch(turnCard.addTurnNum())
        }
    }
}

export default connect(mapState, mapDispatch)(CardContainer)