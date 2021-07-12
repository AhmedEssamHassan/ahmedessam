import React from "react";
import "./home.css";
export default function Home() {
  return (
    <main className="container home d-lg-flex align-items-center">
      <section className="photo-container d-flex justify-content-center align-items-center">
        <img
          className="photo"
          src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
          alt=""
        />
      </section>
      <section className="intro d-flex flex-column align-items-start">
        <h2>my name is ahmed essam</h2>
        <h4>iam a front end developer</h4>
        <p style={{ textAlign: "left" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          natus perspiciatis nulla facilis omnis adipisci velit ratione sed, id
          pariatur est facere et labore saepe hic quo voluptatem? Eos suscipit
          saepe, aspernatur, est id dolores, quos placeat quia aliquam ipsa
          quidem autem voluptatem recusandae fugiat dolor deleniti reprehenderit
          excepturi rem.
        </p>
      </section>
    </main>
  );
}
