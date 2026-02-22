import Header from '../components/header'
import Techs from '../components/techs'
import Projects from '../components/projects'
import About from '../components/about'
import Contact from '../components/contact'

export default function Home() {
  return (
    <>
      <main class="bg-gradient-to-br from-[#181717] via-[#252525] to-[#2d2d2d]">
        <Header />
        <section class="flex flex-col items-center ">
          <Techs />
          <About />
          <Projects />

          <Contact />
        </section>
      </main>
    </>
  )
}
