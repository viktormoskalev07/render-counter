import {Header} from "@/header";
import {useEffect, useState} from "react";


export  const Layout =({children})=>{
    const [isClient , setIsClient] = useState(false);
    useEffect(() => {
        setIsClient(true)
    }, []);
    return <>
    <Header/>

        <main>
            {isClient?children:"loading"}
        </main>

    </>
}