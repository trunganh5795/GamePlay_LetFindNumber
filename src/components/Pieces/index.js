import React, { useRef } from 'react'
import './style.css'
export default function Pieces({ number, findNumber, setBoard, setTurn, notChooseList }) {
    let indexNotChoose = notChooseList.findIndex(item => item === number)
    return (
        <div className={`piece ${indexNotChoose === -1 ? 'selected-item' : ""}`}
            onClick={() => {
                if (number === findNumber) {
                    setBoard(prev => {
                        let index = prev.findIndex(item => item === findNumber);
                        // let indexNotChoose = notChooseList.findIndex(item => item === findNumber)
                        if (index !== -1 && indexNotChoose !== -1) {
                            prev[index] = undefined;
                            notChooseList.splice(indexNotChoose, 1)
                            return [...prev]
                        }
                        return prev
                    })
                    setTurn(prev => prev + 1)
                }
            }}
        >
            <p>{number}</p>
        </div>
    )
}
