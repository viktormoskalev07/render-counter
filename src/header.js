import Link from "next/link";

const nav =[
    "swr-in-child"

    ,"props",
    "context-vs-redux"
]
export const Header =()=>{

    return <header>
        <nav>
            {nav.map((item)=>{
               return <a style={{padding:10 , margin:5}} href={item} key={item}>
                   {item}
                </a>
            })}
        </nav>
    </header>
}