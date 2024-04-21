
let render =0
export  const Child4 = ({data1, data2})=>{
    render++
    return <div className={"child"}>
        <br/>
        render: {render}
        <br/>
        data1 :{data1?.data}
        <br/>
        data2 :{data2?.data}
    </div>
}