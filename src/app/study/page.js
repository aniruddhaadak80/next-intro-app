import Link from "next/link";

export default function Study() {
  return (
    <>
      <h1>Study Meterials Of College </h1>

      <div>
        {/* for college day , laeture day ,topics */}
        <Link href="/study/1/1/DBMS">Day 1</Link> <br />
        <br />
        <Link href="/study/2/2/Oops">Day 2</Link> <br />
        <br />
        {/* update more here  */}
      </div>
    </>
  );
}
