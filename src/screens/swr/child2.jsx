import useSWR from "swr";
import {fetcher} from "@/helpers";

let render =0
export  const SwrChild2 = ()=>{
    render++

    const { data  } = useSWR('/api/api1', fetcher)
    return <div className={"child"}>
        <br/>
        render: {render}
        <br/>
        data :{data?.data}
    </div>
}