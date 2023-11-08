// you can use "page.tsx or page.jsx " as per your choice .
// It will show the esults same 
import Link from "next/link"
import Page_links from "../links/page";

export default function Blog(){
    return (
       <>

       <h1>I am blog page .</h1>
       <h2>I will write my all blogs here ...</h2>
 
 {/* links of pages to move from one to another   */}
 <Page_links/>

       </>
    )
}

