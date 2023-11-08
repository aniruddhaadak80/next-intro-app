import Link from "next/link";

export default function About() {
  return (
    <>
      <h1>About Page for Everything </h1>
      <Link href="about/about_me">About Me</Link> <br />
      <br />
      <Link href="about/about_college">About_college</Link>
    </>
  );
}
