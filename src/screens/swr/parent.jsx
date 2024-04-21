
import {SwrChild1} from "@/screens/swr/child1";
import {SwrChild4} from "@/screens/swr/child4";
import {SwrChild3} from "@/screens/swr/child3";
import {SwrChild2} from "@/screens/swr/child2";

let render =0
export const SwrParent = ()=>{
    render=render+1


    return <div className={"box"}>
        <h1> swr-in-child </h1>
        <br/>
        render:{render}
        <br/> <br/>
        <div className="flex">
            <SwrChild1 />
            <SwrChild2 />
            <SwrChild3 />
            <SwrChild4/>
        </div>
    </div>
}