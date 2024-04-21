import Link from "next/link";

const nav =[
    "redux"
    , "context"
    , "swrOnly"
    ,"props"
]
export const Header =()=>{

    return <header>
        <nav>
            {nav.map((item)=>{
               return <Link style={{padding:10 , margin:5}} href={item} key={item}>
                   {item}
                </Link>
            })}
        </nav>
    </header>
}