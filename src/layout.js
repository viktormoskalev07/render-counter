import {Header} from "@/header";
import {useEffect, useState} from "react";
import Head from "next/head";

const git = "viktormoskalev07/render-counter"
export  const Layout =({children})=>{
    const [isClient , setIsClient] = useState(false);
    useEffect(() => {
        setIsClient(true)
    }, []);
    return <>
        <Head>
            <title>Render counter</title>
            <meta name="description" content="Dont use states in parent!" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    <Header/>

        <main>
            <div style={{display:"flex"}}>

                {isClient?children:"loading"}
                <div style={{width:800 ,flexShrink:0 ,height:900}}>
                    <GitHub1sIframe repoUrl={git}/>
                </div>

            </div>

        </main>

    </>
}


const GitHub1sIframe = ({ repoUrl }) => {
    const [IsShowCode , setIsShowCode]=useState(false);
    const github1sUrl = `https://github1s.com/${repoUrl}`;
    return (
        <div>
            <button onClick={()=>setIsShowCode(p=>!p)}> {IsShowCode?"hide":"show"}code </button>
            {IsShowCode&&<iframe
                src={github1sUrl}
                style={{
                    width: "800px", // Занимает всю ширину контейнера
                    height: '800px', // Высота iframe
                    border: 'none'  // Убираем рамку
                }}
                title="GitHub1s Code Viewer"
                allowFullScreen
            ></iframe>}
        </div>

    );
};


