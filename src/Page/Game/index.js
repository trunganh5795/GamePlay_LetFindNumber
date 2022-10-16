import React, { Fragment, useMemo, useState } from 'react'
import Pieces from '../../components/Pieces'
import ScoreBoard from '../../components/ScoreBoard'
import { generateArray, initArray } from '../../helpers/helpers'
import './style.css'
let notChooseList = [...initArray]
export default function Game() {
    const [board, setBoard] = useState(generateArray());
    const [turn, setTurn] = useState(0);
    const [isPlay, setIsPlay] = useState(false);
    let findNumberFunction = () => {
        let index = Math.floor(Math.random() * notChooseList.length);
        return notChooseList[index]
    }
    let findNumber = findNumberFunction();
    return (
        <div className='game'>
            {isPlay ? <Fragment>
                <div className="info">
                    <h1>Game</h1>
                    <h2>Let's find :<br></br><span>{findNumber}</span></h2>
                    <ScoreBoard turn={turn} />
                    {turn === 100 ?
                        <div className='play-again'>
                            <button
                            onClick={()=>{
                                setTurn(0);
                                setBoard(generateArray());
                                notChooseList=[...initArray]
                            }}
                            >Play Again</button>
                        </div> : ""
                    }
                </div>
                <div className="board">
                    {board.map((item, index) => <Pieces findNumber={findNumber} number={item} key={index} setBoard={setBoard} setTurn={setTurn} notChooseList={notChooseList} />)}
                </div>
            </Fragment> :
                <div className='play-again'>
                    <button
                        onClick={() => {
                            setIsPlay(prev => !prev)
                        }}
                    >Play Now !</button>
                    <p>You were required to find the number that the computer give you.
                        <br />
                        If you can find out under 5s, you'll got 5 points,
                        <br />
                        You'll get 2 points if you do that between 5s and 10s
                        <br />
                        Otherwise you just get 1 point if you done
                    </p>
                </div>
            }
        </div>
    )
}
