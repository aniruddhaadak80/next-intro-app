import Link from "next/link";
import Page_links from "../../links/page";
 
const About_college =()=>{
    return(
        <>
            <h1>My College Name :</h1>
            <h2>BBIT</h2>

{/* Links to move one page to another  */}
            <Page_links/>

        </>
    )
}

export default About_college;