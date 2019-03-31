function initCard (len) {
    len = +len || 8
    let map = {}
    let arr = []
    let f = []

    // console.log(len)
    while(arr.length < len) {
        let num = randomCard()
        if (!map[num] && map[num] !== 0) {
            map[num] = 0
            arr.push({
                val: num,
                render: true,
                turn: false
            })
            f.push({
                val: num,
                render: true,
                turn: false
            })
        }
    }

    let newArr = [...arr, ...f]
    // console.log(newArr)
    newArr.sort(() => {
        return Math.random()> 0.5 ? -1 : 1
    })

    // console.log(arr)
    return {
        arr: newArr,
        map: map
    }
}

function randomCard () {
    let num = Math.random() * 100
    return (Math.floor(num) + 1)
}

module.exports = {
    initCard: initCard
}

