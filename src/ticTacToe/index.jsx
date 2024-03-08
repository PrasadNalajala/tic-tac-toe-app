import './index.css'

import React from 'react'
import { useState ,useRef} from 'react'

import circleIcon from '../assets/circle.jpg'
import XIcon from '../assets/X.png'

let data=["","","","","","","","",""]
const Tictactoe=()=>
{
    

    let [count,setCount]=useState(0)
    let [locked,toggleLock]=useState(false)

    let box1=useRef(null)
    let box2=useRef(null)
    let box3=useRef(null)
    let box4=useRef(null)
    let box5=useRef(null)
    let box6=useRef(null)
    let box7=useRef(null)
    let box8=useRef(null)
    let box9=useRef(null)
    let boxes_list=[box1,box2,box3,box4,box5,box6,box7,box8,box9]
    let [winner,setWinner]=useState("")

    const onClickBox=(e,num)=>{
        if(locked){
            // console.log('heey')
            return 0
        }
        
        if (count%2===0){
            e.target.innerHTML=`<img src="${circleIcon}" class="box-icon"/>`
            setCount(++count)
            data[num]="0"
        }
        else{
            e.target.innerHTML=`<img src="${XIcon}" class="box-icon"/>`
            setCount(++count)
            data[num]="X"
        }
        checkWin()
    }

    const checkWin=()=>{
        // console.log(data)
        if (data[0]===data[1]&&data[1]===data[2]&&data[2]!==''){
        
            won(data[0]);
        }
        else if (data[3]===data[4]&&data[4]===data[5]&&data[5]!==''){
            won(data[3])
        }
        else if (data[6]===data[7]&&data[7]===data[8]&&data[8]!==''){
            won(data[6])
        }
        else if (data[0]===data[3]&&data[3]===data[6]&&data[6]!==''){
            won(data[0])
        }
        else if (data[1]===data[4]&&data[4]===data[7]&&data[7]!==''){
            won(data[1])
        }
        else if (data[2]===data[5]&&data[5]===data[8]&&data[8]!==''){
            won(data[2])
        }
        else if (data[0]===data[4]&&data[4]===data[8]&&data[8]!==''){
            won(data[0])
        }
        else if (data[0]===data[1]&&data[1]===data[2]&&data[2]!==''){
            won(data[0])
        }
        else if (data[2]===data[4]&&data[4]===data[6]&&data[6]!==''){
            won(data[2])
        }
    }

    const won=(win)=>{
        toggleLock(true)
        setWinner(win)
        console.log(winner)

    }

    const onClickReset=()=>{
        data=["","","","","","","","",""]
        toggleLock(false)
        boxes_list.map((each)=>{
            each.current.innerHTML=''
        })

    }

        return (
            <div>
                <h1 className="title">Tac-Tic Trio </h1>

                <div className='board'>
                    <div className='row'>
                        <div className='box' ref={box1} onClick={(e)=>{onClickBox(e,0)}}></div>
                        <div className='box' ref={box2} onClick={(e)=>{onClickBox(e,1)}}></div>
                        <div className='box' ref={box3} onClick={(e)=>{onClickBox(e,2)}}></div>
                    </div>
                    <div className='row'>
                        <div className='box'ref={box4}  onClick={(e)=>{onClickBox(e,3)}}></div>
                        <div className='box' ref={box5} onClick={(e)=>{onClickBox(e,4)}}></div>
                        <div className='box'ref={box6}  onClick={(e)=>{onClickBox(e,5)}}></div>
                    </div>
                    <div className='row'>
                        <div className='box' ref={box7} onClick={(e)=>{onClickBox(e,6)}}></div>
                        <div className='box' ref={box8} onClick={(e)=>{onClickBox(e,7)}}></div>
                        <div className='box' ref={box9} onClick={(e)=>{onClickBox(e,8)}}></div>
                    </div>
                </div>
                <button className='reset-btn' onClick={onClickReset}>Reset</button>
                {locked?<><p className='winnerCS'>'<span className='winner'>{winner}</span>' Seals the Victory!🎈 </p></>:''}
            </div>
        )

        }

export default Tictactoe