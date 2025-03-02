import * as React from 'react';
import { Component } from 'react';
import {motion, MotionValue} from "framer-motion"
import { useState,useEffect } from 'react';

export function useRenderTransform(inputNum:number, [inputMin, inputMax]:Array<number>, [resultMin, resultMax]:Array<number>){

    const [stateTrasform, setStateTransform] = useState(inputNum)
    useEffect(()=>{
        
        const inputDistance = inputMax-inputMin
        const inputPersent = inputNum/inputDistance*100;
        const resultOnePercent = (resultMax-resultMin)/100;
        const increaceNum = inputPersent*resultOnePercent;
        setStateTransform(Math.floor(increaceNum+resultMin))
    },[inputNum])

    return [stateTrasform]
}