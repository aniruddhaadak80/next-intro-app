import "./globals.css"
import Link from "next/link"
 import Page_links from "./links/page"

export default function Home() {
  return (
    // fragement as per react 
    <>
  <center>
<br/>
    <mark>Me </mark> :  <h1>Hello next js , how are you ?</h1>

<br/>

   <mark>Next js</mark> : <h2>I am fine bro .... </h2>
 
 {/* Links to move all pages */}
   <Page_links/>
 


</center>
  </>
  )
}

 