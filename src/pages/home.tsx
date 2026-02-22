import Header from '../components/header'
import Techs from '../components/techs'
import Projects from '../components/projects'
import About from '../components/about'
import Contact from '../components/contact'

export default function Home() {
  return (
    <>
      <main class="bg-zinc-900">
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
