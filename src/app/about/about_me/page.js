import Link from "next/link";
import Page_links from "../../links/page";

export default function About_me() {
  return (
    <>
      <h1>My name is Aniruddha Adak</h1>

      <h2>
        I am currently persuing my btech in computer science and engineering
        from BBIT (A private college ).
      </h2>

      <h3>My graduation year : 2026</h3>

      {/* Importing Friend  component from the end of the page */}
      <Friend name="Boby" count="1st" />
      <Friend name="Lalu" count="2nd" />
      <Friend name="Ani" count="3rd" love="I 💜 You" />
      <Friend name='Halua' count='4th'/>

      {/* links of pages to move from one to another   */}
      <Page_links/>
   

    </>
  );
}

// Arrow functional component for rendering on the above component 
const Friend = (props) => { //you have to pass the "props" parameter or anything else to set properties.  props ----> properties(nothing more 🤪)
  return (
    <>
      <h1>My {props.count} Friend :</h1>

      {/* It reffers all name of my friends */}
      <h2> {props.name}</h2>

      {/* this is for my love  */}
      <h3>{props.love}</h3>
      
     </>
  );
};
