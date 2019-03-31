import GameField from '../components/gamefield'
import turnCard from '../actions/turnCard'
import { connect } from 'react-redux'
import { initCard } from '../../lib/createCard'

const mapState = state => {
    return {
        initState: state.turnCard.initState,
        level: state.turnCard.gameLevel,
        turnCardNum: state.turnCard.turnCardNum,
        overCardNum: state.turnCard.overCardNum,
        startTime: state.turnCard.startTime,
        overTime: state.turnCard.overTime
    }
}

const mapDispatch = dispatch => {
    return {
        handleStart: (level) => {
            let cardObj = initCard(+level*2)
            let map = cardObj.map
            let arr = cardObj.arr
            dispatch(turnCard.gameStart(map, arr))
        }
    }
}

export default connect(mapState, mapDispatch)(GameField)