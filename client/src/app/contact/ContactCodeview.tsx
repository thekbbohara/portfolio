import React from "react";
/* const codeString = `
const button = document.querySelector('#sendBtn');

const message = {
  name: "Jonathan Davis",
  email: "",
  message: "",
  date: "Thu 21 Apr"
}

button.addEventListener('click', () => {
  form.send(message);
})
`;
 */
const ContactCodeview = () => {
  return (
    <code className="grow  w-full p-4 mt-12 hidden lg:block">
      <span className="mr-4">1</span>
      <span className="text-a4">const</span>{" "}
      <span className="text-s3">button</span>{" "}
      <span className="text-a4"> = </span>
      <span className="text-s3">
        document.querySelector(
        <span className="text-a1">&quot;#sendBtn&quot;</span>)
      </span>
      ;<br />
      <span className="mr-4">2</span>
      <br />
      <span className="mr-4">3</span>
      <span className="text-a4">const</span>{" "}
      <span className="text-s3">message</span>
      <span className="text-a4"> = </span>
      {"{"}
      <br />
      <span className="mr-4">4</span>
      <span className="text-s3 pl-12">name</span>:{" "}
      <span className="text-a1">&quot;&quot;</span>,
      <br />
      <span className="mr-4">5</span>
      <span className="text-s3 pl-12">email</span>:{" "}
      <span className="text-a1">&quot;&quot;</span>,
      <br />
      <span className="mr-4">6</span>
      <span className="text-s3 pl-12">message</span>:{" "}
      <span className="text-a1">&quot;&quot;</span>,
      <br />
      <span className="mr-4">7</span>
      <span className="text-s3 pl-12">date</span>:{" "}
      <span className="text-a1">&quot;Thu 21 Apr&quot;</span>,
      <br />
      <span className="mr-4">8</span>
      {"}"}
      <br />
      <span className="mr-4">9</span>
      <span className="text-s3">button</span>.
      <span className="text-s3">addEventListener</span>(<br />
      <span className="mr-4">10</span>
      <span className="text-a1 pl-12">&quot;click&quot;</span>, ()
      <span className="text-a4"> ={">"} </span>
      {"{"}
      <span className="text-s3">io</span>.<span className="text-s3">emit</span>(
      {"{"} <span className="text-s3">message</span> {"}"});
      <br />
      <span className="mr-4">11</span>
      {"}"})
    </code>
  );
};

export default ContactCodeview;
