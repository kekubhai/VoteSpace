"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"

const TopicCreator =()=>{
    const [input, setinput] = useState<string>("")
    return (
<>
<div className="mt-12 flex flex-col gap-2">
 <Input
 value={input}
 onChange={({target})=>setinput(target.value)}
 className="bg-white text"
 placeholder="Enter the text..."/>
 <Button> Create</Button>
</div>
</>
    )
}
export default TopicCreator