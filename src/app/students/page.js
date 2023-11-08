 import Link from "next/link";
import Page_links from "../links/page";

export default function Students() {
  return (
    <>
      <h1>Student Details :</h1>

      <ul>
        <li>
          <Link href="students/anil" >Anil</Link>
        </li>
        <li>
          <Link href="students/Kalu">Kalu</Link>
        </li>
        <li>
          <Link href="students/lalu">Lalu</Link>
        </li>
        <li>
          <Link href="students/Vulu">Vulu</Link>
        </li>
      </ul>

{/* links of pages to move from one to another   */}
      <Page_links/>
    </>
  );
}
