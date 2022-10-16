import React, { memo, useEffect, useState } from 'react'
import './style.css'
let clearId;
function ScoreBoard({ turn }) {
    const [time, setTime] = useState(0);
    const [totalScore, setTotalScore] = useState(0)
    useEffect(() => {
        if (clearId) clearInterval(clearId);
        setTime(0);
        if (turn) {
            if (time < 5) {
                setTotalScore(prev => (turn === 1 ? 0 : prev) + 5)
            } else if (time >= 5 && time <= 10) {
                setTotalScore(prev => (turn === 1 ? 0 : prev) + 2)
            } else {
                setTotalScore(prev => (turn === 1 ? 0 : prev) + 1)
            }
        }
        if (turn < 100) {
            clearId = setInterval(() => {
                setTime(prev => prev + 1)
            }, 1000)
        }
        return () => {
            clearInterval(clearId)
        }
    }, [turn])

    return (
        <div className='score-board'>
            <h2>Time: {time}s</h2>
            <h2>Total Score: {totalScore}</h2>
        </div>
    )
}
export default memo(ScoreBoard)
