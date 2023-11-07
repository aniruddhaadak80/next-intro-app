 "use client"

export default function Student_name({params}) {
    console.log(params)
  return (
    <>
<h1>Student Profile :</h1>

<h3>Name : {params.student}</h3>


    </>
  );
}
