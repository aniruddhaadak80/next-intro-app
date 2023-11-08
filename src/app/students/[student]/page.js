 "use client"
 import Link from "next/link";
 import Page_links from "@/app/links/page";


export default function Student_name({params}) {
  return (
    <>
<h1>Student Profile :</h1>

<h3>Name : {params.student}</h3>


{/* links of pages to move from one to another   */}
<Page_links/>
 
    </>
  );
}
