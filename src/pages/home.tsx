import { createSignal } from "solid-js";
import Header from "./header";
import Techs from "./techs";
import Projects from "./projects";
import About from "./about";
import Contact from "./contact";

export default function Home() {
  return (
    <>
      <main>
        <Header />
        <section class="max-w-800 flex flex-col items-center ">
          <Techs />
          <Projects />
          <About />
          <Contact />
        </section>
      </main>
    </>
  );
}
