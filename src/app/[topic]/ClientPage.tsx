"use client"
import {Wordcloud} from "@visx/wordcloud"
import { useState } from "react";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import {scaleLog} from "@visx/scale"
import {Text} from "@visx/text"
import { NumberValue } from "d3-scale";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useMutation } from "@tanstack/react-query";
interface ClientPageProps {
    topicName:string
    initialData:{text:string; value:number}[]
}

const COLORS = ["#143059", "#2F6B9A", "#82a6c2"]


const ClientPage=({topicName,initialData}:ClientPageProps)=>{
const [words,setWords]=useState([{text:"hello",value:1}])
const [input,setInput]=useState<string>('')
const fontSize= scaleLog({
  domain:[Math.min(...words.map((w)=>w.value)),
    Math.max(...words.map((w)=>w.value))],
    range:[10,100]
})
const {}=useMutation({
  mutationFn
})
return <div>

<div className="w-full flex flex-col items-center justify-center min-h-screen bg-grid-zinc-50 pb-20">
      <MaxWidthWrapper className="flex flex-col items-center gap-6 pt-20">
        <h1 className="text-4xl sm:text-5xl font-bold text-center tracking-tight text-balance">
          What people think about{" "}
          <span className="text-blue-600">{topicName}</span>:
        </h1>
        <p className="text-sm text-red-400">(updated in real time)</p>
           <div className="aspect-square max-w-full items-center justify-center text-slate-400">
          
            <Wordcloud words={words} width={500} height={500} 
            fontSize={(data: { value: NumberValue; })=>fontSize(data.value)}
            font={"Impact"}
            padding={2}
            
            rotate={0}
            random={()=>0.5}>
              {(cloudWords: any[])=>cloudWords.map((w,i)=>(
                <Text key={w.text} fill={COLORS[i% COLORS.length]}
                textAnchor="middle"
                className="text-slate-400"
                transform={`translate(${w.x},${w.y})`}
                fontSize={w.size}
                fontFamily="w.font"
                >{w.text}</Text>
              ))}
            </Wordcloud>
           </div>
          <div className="max-w-lg w-full">
            <Label className="font-semibold tracking-tight text-lg pb-2">
              Here's what I think about {topicName}

            </Label>
            <div className="mt-1 flex gap-2 items-center">
              <Input value={input} onChange={({target})=>setInput(target.value)} placeholder={`${topicName} is absolutely...`}></Input>

            </div>

          </div>
           
           </MaxWidthWrapper>
           </div>
</div>
}
export default ClientPage