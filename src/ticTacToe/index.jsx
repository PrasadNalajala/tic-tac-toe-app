import './index.css'

import React from 'react'
import { useState } from 'react'

import circleIcon from '../assets/circle.jpg'
import XIcon from '../assets/X.png'

const Tictactoe=()=>
{
    let boxes=["","","","","","","","",""]

    let [count,setCount]=useState(0)

    const onClickBox=(e,num)=>{
        setCount(++count)
        console.log(count)
        if (count%2===0){
            console.log("Even")
            e.target.innerHTML=`<img src="${circleIcon}" class="box-icon"/>`
        }
        else{
            console.log("Odd")
            e.target.innerHTML=`<img src="${XIcon}" class="box-icon"/>`
        }
    }

        return (
            <div>
                <h1 className="title">Noughts & Kisses</h1>

                <div className='board'>
                    <div className='row'>
                        <div className='box' onClick={(e)=>{onClickBox(e,0)}}></div>
                        <div className='box' onClick={(e)=>{onClickBox(e,1)}}></div>
                        <div className='box' onClick={(e)=>{onClickBox(e,2)}}></div>
                    </div>
                    <div className='row'>
                        <div className='box' onClick={(e)=>{onClickBox(e,3)}}></div>
                        <div className='box' onClick={(e)=>{onClickBox(e,4)}}></div>
                        <div className='box' onClick={(e)=>{onClickBox(e,5)}}></div>
                    </div>
                    <div className='row'>
                        <div className='box' onClick={(e)=>{onClickBox(e,6)}}></div>
                        <div className='box' onClick={(e)=>{onClickBox(e,7)}}></div>
                        <div className='box' onClick={(e)=>{onClickBox(e,8)}}></div>
                    </div>
                </div>
                <button className='reset-btn'>Reset</button>
            </div>
        )

        }

export default Tictactoe