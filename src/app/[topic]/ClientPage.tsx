"use client"

import { useState } from "react";
import MaxWidthWrapper from "../components/MaxWidthWrapper";

interface ClientPageProps {
    topicName:string
    initialData:{text:string; value:number}[]
}
const ClientPage=({topicName,initialData}:ClientPageProps)=>{
const [words,setWords]=useState(initialData)

return <div>

<div className="w-full flex flex-col items-center justify-center min-h-screen bg-grid-zinc-50 pb-20">
      <MaxWidthWrapper className="flex flex-col items-center gap-6 pt-20">
        <h1 className="text-4xl sm:text-5xl font-bold text-center tracking-tight text-balance">
          What people think about{" "}
          <span className="text-blue-600">{topicName}</span>:
        </h1>
           </MaxWidthWrapper>
           </div>
</div>
}
export default ClientPage