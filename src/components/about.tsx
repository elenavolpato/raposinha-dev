import { createEffect } from 'solid-js'
import AboutData from '../assets/about.data'
import elena from '/images/elena_2025_small.png'

export default function About() {
  const name = AboutData()

  createEffect(() => {
    console.log(name())
  })

  return (
    <section class=" py-12">
      <div class="flex flex-col md:flex-row max-w-[1200px] items-start my-8 gap-5">
        <div class="relative mb-5 elena-img">
          <div
            class="absolute -inset-2 border-2 border-[#87F9E6] bg-[#1f1f1f]"
            style={{ transform: 'translate(18px, 18px)' }}
          ></div>
          <div
            class="absolute -inset-2 border-2 border-[#EA00FF] "
            style={{ transform: 'translate(4px, 4px)' }}
          ></div>
          <img
            src={elena}
            class="max-w-[180px] pt-2 pl-2 mix-blend-difference elena-img self-center md:self-auto "
          />
        </div>
        <div class="max-w-50% mx-4 pl-5 mb-10">
          {/* <p class="text-base text-gray-50 text-xl">About Elena Volpato </p> */}

          <p class="text-base text-gray-50 pb-2">
            Born and raised in Brazil, now living in Italy (yes, I traded
            caipirinhas and samba for wine and mountains, and honestly, no
            regrets).
          </p>

          <p class="text-base text-gray-50 py-2">
            My path into tech wasn't exactly linear. Before writing code, I
            spent{' '}
            <strong>
              {' '}
              over nine years managing projects for international brands,
            </strong>
            working between clients, creative teams and technical teams to turn
            messy requirements into things that could actually be delivered.
          </p>

          <p class="text-base text-gray-50 py-2">
            In 2021, I decided I didn't just want to manage the process — I
            wanted to build things too. Since then, I've worked on a São Paulo
            Townhall project ad Front-end developer and QA Analyst, and as a
            front-end developer at a German startup, building production
            software with Angular, Vue and TypeScript, while expanding into
            full-stack development with Java, Spring Boot and PostgreSQL.
            <strong>
              In 2026 I completed a Full Stack Development program at
              <a href="https://epicode.com/it/" target="_blank">
                Epicode Institute of Technology.
              </a>
            </strong>
          </p>

          <p class="text-base text-gray-50 py-2">
            These days, I'm particularly interested in the space where product
            <strong>
              {' '}
              thinking, business problems and software development meet.
            </strong>{' '}
            Give me an ambiguous problem, a process that makes no sense, or
            something that involves the sentence “we do this manually every
            week”, and I'll probably want to take it apart, understand it and
            figure out a better way.
          </p>
        </div>
      </div>
    </section>
  )
}
