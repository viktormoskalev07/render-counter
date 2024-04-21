import useSWR from "swr";
import {fetcher} from "@/helpers";

let render =0
export  const SwrChild4 = ()=>{
    render++
    const { data  } = useSWR('/api/api1', fetcher)
    const { data:data2  } = useSWR('/api/api2', fetcher)
    return <div className={"child"}>
        <br/>
        render: {render}
        <br/>
        data :{data?.data}
        <br/>
        data2 :{data2?.data}
    </div>
}