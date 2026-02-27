import { createSignal, For, Show, onMount, onCleanup } from 'solid-js'

import circuito from '/images/circuto-memoria-paulistana.webm'
import meditate from '/images/meditate.webm'
import seasonalFood from '/images/seasonal-food.png'
import weatherApp from '/images/weather-app.png'

type Project = {
  id: number
  title: string
  subtitle: string
  description: string
  media: string
  tags: string[]
  github: string
  external: string
  mediaOnRight: boolean
  video?: boolean
}

type ProjectsData = Project[]

const projectsData: ProjectsData = [
  {
    id: 1,
    title: 'Seasonal food App',
    subtitle: 'Check the seasonality of produce in Italy',
    description:
      "This project was developed to address a genuine challenge: determining the availability of fruits and vegetables in a new country or region. Despite searching for solutions and information, we couldn't find anything intuitive or capable of meeting my needs. Used  data from slowfood.it",
    media: seasonalFood,
    tags: [
      'React',
      'Styled Components',
      'Food',
      'tailwind',
      'App',
      'i18next',
      'personal project',
    ],
    github: 'https://github.com/elenavolpato/seasonalfood',
    external: 'https://seasonalfood.raposinha.dev',
    mediaOnRight: true,
  },
  {
    id: 2,
    title: 'Weather app',
    subtitle: 'Used API open weather to build a simple weather forecast',
    description:
      'As a part of my masters in EPICODE we had to develop a weather app using open weather. It turns out that the results came out pretty well and I decided to publish it',
    media: weatherApp,
    tags: ['React', 'Bootstrap', 'API', 'responsiveness', 'personal project'],
    github: 'https://github.com/elenavolpato/meteo-app',
    external: 'https://meteo-app.raposinha.dev/',
    mediaOnRight: false,
  },
  {
    id: 3,
    title: 'LaLeTu - Digi Sapiens',
    subtitle: 'Nearly 2 years experience in a German Startup',
    description:
      'I worked full time as a Frontend developer using Angular and Booststrap daily. In this project I implemented the responsive design for the app, fixed countless bugs and helped implement a new business model.',
    media: 'https://www.laletu.de/assets/forderung_img.svg',
    tags: [
      'Angular',
      'Bootstrap',
      'Angular Material',
      'API',
      'Sprint',
      'FrontEnd',
      'Team work',
    ],
    github: '#',
    external: 'https://www.laletu.de/home',
    mediaOnRight: true,
  },
  {
    id: 5,
    title: 'Circuito da memória Paulistana',
    subtitle: 'Short project for Sao Paulo Cultural project',
    description:
      'This was a 2 months project for the Sao Paulo prefecture that I worked as front end developer and Quality assurance analyst.',
    media: circuito,
    tags: ['Vue', 'Tailwind', 'FrontEnd', 'QA', 'Team work'],
    github: '#',
    external: 'public/images/circuto-memoria-paulistana.webm',
    mediaOnRight: false,
    video: true,
  },
  {
    id: 6,
    title: 'Meditation timer',
    subtitle: 'During Lockdown this was my first developer project',
    description:
      'This meditation timer has customizable features beyond the time duration of your meditation session: there are three options for the Tibetan Bell sound and there is also the option to have reminders sounds along your meditation. In the end, by default, three bells are played.',
    media: meditate,
    tags: ['Vue3', 'Tailwind', 'Vite', 'Personal Project'],
    github: 'https://github.com/elenavolpato/meditate',
    external: 'https://elenavolpato.github.io/meditate/#/',
    mediaOnRight: true,
    video: true,
  },
]

function AnimatedCard(props: {
  direction: 'left' | 'right'
  delay?: boolean
  class?: string
  children: any
}) {
  let ref: HTMLDivElement | undefined

  onMount(() => {
    if (!ref) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ref!.classList.remove(
            'opacity-0',
            '-translate-x-16',
            'translate-x-16',
          )
          ref!.classList.add('opacity-100', 'translate-x-0')
          observer.unobserve(ref!)
        }
      },
      { threshold: 0.15 },
    )
    observer.observe(ref)
    onCleanup(() => observer.disconnect())
  })

  return (
    <div
      ref={ref}
      class={`
        transition-all duration-700 ease-out
        ${props.delay ? 'delay-200' : ''}
        ${props.direction === 'left' ? 'opacity-0 -translate-x-16' : 'opacity-0 translate-x-16'}
        ${props.class ?? ''}
      `}
    >
      {props.children}
    </div>
  )
}

export default function FeaturedProjects() {
  const [projects] = createSignal(projectsData)

  return (
    <div class="min-h-screen text-gray-300 px-8 bg-zinc-900 w-full  border-t border-gray-700/40 py-12">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-4xl font-bold text-center mb-16 text-gray-200">
          Featured Projects
        </h2>

        <div class="space-y-32">
          <For each={projects()}>
            {(project) => (
              <>
                {/* <div
                  class={`${project.mediaOnRight ? ' text-[#EA00FF] ' : 'text-[#87F9E6] text-right'} section-label tracking-[0.2em] uppercase mb-12 flex gap-4`}
                >
                  0{project.id} —
                </div> */}
                <div
                  class={`flex flex-col ${project.mediaOnRight ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 items-center  pb-0 md:pb-16`}
                >
                  {/* Media — slides in from the outer edge */}
                  <AnimatedCard
                    direction={project.mediaOnRight ? 'right' : 'left'}
                    class="group lg:w-1/2"
                  >
                    <div class="lg:w-full relative">
                      <div class="w-full h-auto shadow-2xl mix-blend-luminosity group group-hover:mix-blend-normal transition-all duration-300"></div>
                      <Show when={!project.video}>
                        <img
                          src={project.media}
                          alt={project.title}
                          class="w-full h-auto shadow-2xl md:grayscale group-hover:grayscale-0 transition-all duration-300"
                        />
                      </Show>
                      <Show when={project.video}>
                        <div
                          class="relative w-full group"
                          style="aspect-ratio: 16/10;"
                        >
                          <video
                            loop
                            autoplay
                            title={project.title}
                            src={project.media}
                            class="h-full w-full shadow-2xl md:grayscale group-hover:grayscale-0 transition-all duration-300"
                          />
                        </div>
                      </Show>
                    </div>
                  </AnimatedCard>

                  <AnimatedCard
                    direction={project.mediaOnRight ? 'left' : 'right'}
                    delay
                    class="group lg:w-1/2"
                  >
                    <div
                      class={`lg:w-full ${project.mediaOnRight ? 'lg:text-left' : 'lg:text-right'}`}
                    >
                      <div class="space-y-4">
                        <h3 class="text-3xl font-bold text-gray-100">
                          {project.title}
                        </h3>
                        <p class="text-gray-400 text-sm font-mono -mt-3">
                          {project.subtitle}
                        </p>

                        <div class="relative">
                          <div
                            class="absolute -inset-1 border-2 border-[#87F9E6] bg-[#1f1f1f]"
                            style={{ transform: 'translate(18px, 18px)' }}
                          ></div>
                          <div
                            class="absolute -inset-1 border-2 border-[#EA00FF]"
                            style={{ transform: 'translate(4px, 4px)' }}
                          ></div>
                          <div class="p-6 shadow-xl relative">
                            <p class="text-gray-300 leading-relaxed">
                              {project.description}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div
                        class={`flex flex-wrap gap-3 mt-4 pt-6 px-0 ${project.mediaOnRight ? 'justify-start' : 'justify-end -mr-6'}`}
                      >
                        <For each={project.tags}>
                          {(tag) => (
                            <span class="text-xs font-mono text-gray-400 bg-[#1f1f1f]/50 px-3 py-1 border border-gray-700/30">
                              {tag}
                            </span>
                          )}
                        </For>
                      </div>

                      <div
                        class={`flex gap-4 pt-2 ${project.mediaOnRight ? 'justify-start' : 'justify-end -mr-6'}`}
                      >
                        <Show when={project.github !== '#'}>
                          <a
                            href={project.github}
                            class="text-gray-400 hover:text-gray-100 transition-colors"
                            aria-label="GitHub"
                          >
                            <svg
                              class="w-6 h-6"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                          </a>
                        </Show>
                        <a
                          href={project.external}
                          class="text-slate-400 hover:text-cyan-400 transition-colors"
                          aria-label="External Link"
                        >
                          <svg
                            class="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </AnimatedCard>
                </div>
              </>
            )}
          </For>
        </div>
      </div>
    </div>
  )
}
