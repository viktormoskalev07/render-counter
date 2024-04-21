import {useState} from "react";
import useSWR from "swr";
import {fetcher} from "@/helpers";
import {Child1} from "@/screens/props/child1";
import {Child2} from "@/screens/props/child2";
import {Child3} from "@/screens/props/child3";
import {Child4} from "@/screens/props/child4";

let render =0
export const PropsParent = ()=>{
    render=render+1
    const { data :api1 } = useSWR('/api/api1', fetcher)
    const { data:api2  } = useSWR('/api/api2', fetcher)
    return <div className={"box"}>
        <h1> props </h1>
        <br/>
        render:{render}
        <br/> <br/>
            <Child1 data={api1}/>
            <Child2 data={api1}/>
            <Child3 data={api2}/>
            <Child4 data1={api1} data2={api2}/>
    </div>
}