import Link from "next/link"
import Page_links from "../links/page"


export default function About(){
  return(
    <>

    <h1>About Page for Everything </h1>
    <Link href="about/about_me">About Me</Link> <br/>
    <br/>
    <Link href="about/about_college">About_college</Link>

{/* Links to move one page to another  */}
<Page_links/>


    </>


  )
}