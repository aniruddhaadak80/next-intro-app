import Link from "next/link";
import Page_links from "../links/page";


const Login =()=>{
    return(
<>
    <h1>Login page </h1>
    <button>Login</button>
 
{/* links of pages to move from one to another   */}
  <Page_links/>


</>

    )
}

export default Login;