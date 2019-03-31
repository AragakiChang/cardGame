import React from 'react'
import CardContainer from '../../containers/cardContainer'
import './index.less'

export default class GameField extends React.Component {

    constructor () {
        super()
        this.handleStart = this.handleStart.bind(this)
    }

    renderTime (str) {
        let allsecond = Math.floor(+str/1000)
        let hour = Math.floor(allsecond/3600)
        let minute = Math.floor((allsecond % 3600)/60)
        let second = allsecond - hour*3600 - minute*60 
        return {
            hour: hour,
            minute: minute,
            second: second
        }
    }

    handleStart () {
        // console.log(this.props)
        if (this.props.handleStart) {
            this.props.handleStart(this.props.level)
        }
    }

    render () {
        // console.log(this)
        let time = +this.props.overTime - +this.props.startTime
        // console.log(this.props.overTime, this.props.startTime)
        let timeObj = this.renderTime(time)
        return (
            <div className="game-field">
                <div className="game-left">
                    {
                        this.props.initState !== 'start' && <CardContainer />
                    }
                </div>
                <div className="game-right">
                    {
                        this.props.initState === 'start' && (
                            <div className="game-over">
                                <div className="game-button" onClick={this.handleStart}>开始游戏</div>
                            </div>                           
                        )
                    }
                    {
                        this.props.initState === 'alive' && (
                            <div className="game-over">
                                <div className="click-times">操作次数：{this.props.turnCardNum}</div>
                            </div>                            
                        )
                    }
                    {
                        this.props.initState === 'over' && (
                            <div className="game-over">
                                <div className="click-times">操作次数：{this.props.turnCardNum}</div>
                                <div className="use-time">游戏时间：{`${timeObj.hour} 时 ${timeObj.minute} 分 ${timeObj.second} 秒`}</div>
                                <div className="game-button" onClick={this.handleStart}>重新开始</div>
                            </div>
                        )
                    }
                </div>
            </div>
        )
    }
}