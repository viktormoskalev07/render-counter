
let render =0
export  const Child1 = ({data})=>{
    render++
    return <div className={"child"}>
        <br/>
       render: {render}
        <br/>
        data :{data?.data}
    </div>
}