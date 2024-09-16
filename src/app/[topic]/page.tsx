/* eslint-disable @typescript-eslint/no-unused-vars */
import { redis } from "@/lib/redis"
import ClientPage from "./ClientPage"

interface Pageprops{
    params:{
        topic:string
    }
}
const Page = async ({params}:Pageprops)=>{

    const {topic}=params
    const initialData=await redis.zrange(`room:${topic}`,0,49,{
        withScores:true,
    })

    const words:{text:string,value:number}[]=[]

    for (let i = 0; i < initialData.length; i++) {
        const [text,value] = initialData.slice(i,i+2);
        if(typeof text=== "string" && typeof value== "number"){
            words.push({text,value})
        }
    }
     await redis.incr("served-requests")
     return <ClientPage topicName={topic} initialData={words} />
return (
    
    <p>{params.topic}</p>
)
}
export default Page