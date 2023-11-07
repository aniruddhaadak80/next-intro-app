 import Link from "next/link";

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
    </>
  );
}
