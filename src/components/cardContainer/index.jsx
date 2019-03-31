import React from 'react'
// import CardRow from '../cardRow'
import Classname from 'classnames'
import './index.less'

export default class CardContainer extends React.Component {

    constructor () {
        super()
        this.handleTurn = this.handleTurn.bind(this)
        this.timer = null
    }

    createCardArr () {
        let x = this.props.level
        let arrMap = this.props.arrMap
        let arr = []
        for (let i = 0; i < x; i++) {
            let s = []
            for(let j = 0; j < x; j++) {
                let index = i * x +j
                s.push({
                    ...arrMap[index],
                    index: index
                })
            }
            arr.push(s)
        }
        // console.log(arr)
        return arr
    }

    handleTurn (obj) {
        // console.log(obj)
        if (!obj.render || obj.turn) return
        if (this.props.handleTurn) {        
            this.props.handleTurn(obj.index, this.props.showCard, this.props.arrMap, this.props.overCardNum)
        }
    }

    render () {
        const arr = this.createCardArr()
        return (
            <div className="card-container">
                {
                    arr.map((itemRow, index)=> {
                        return (
                            <div className="card-row" key={index}>
                                {
                                    itemRow.map(item => {
                                        // console.log(item)
                                        return (
                                            <div
                                                className={Classname({'card-item': true, 'notActive': !item.render})}
                                                key={item.index}
                                                onClick={() => {this.handleTurn(item)}}
                                            >{item.turn && item.val}</div>
                                        )
                                    })
                                }
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}