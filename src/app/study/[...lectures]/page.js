"use client";
 

export default function Lectures({ params }) {
  return (
    <>
      {/* for lecture day number */}
      <h1>College Day : {params.lectures[0]}</h1>

      {/* for lecture number  */}
      <h2>Lecture No : {params.lectures[1]}</h2>

      {/* for the topic of lectures */}
      <p>Topics : {params.lectures[2]}</p>

    
    </>
  );
}
