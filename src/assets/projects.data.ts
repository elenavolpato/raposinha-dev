import circuito from '/images/circuto-memoria-paulistana.webm'
import meditate from '/images/meditate.webm'
import seasonalFood from '/images/seasonal-food.png'
import weatherApp from '/images/weather-app.png'
import choremate from '/images/choremate.png'
import aiAgent from '/images/aiAgent.mp4'

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

export const projectsData: ProjectsData = [
  {
    id: 0,
    title: 'AI Agent',
    subtitle: 'An AI-powered conversational agent',
    description:
      'A conversational portfolio built around an AI assistant instead of traditional navigation. The assistant is grounded in my real experience, skills and projects, allowing visitors to ask questions naturally and receive personalized answers with rich inline project, skills and contact cards. Built with Vue 3, Vite and Pinia, with a Vercel serverless function securely proxying requests to the Gemini API so the API key is never exposed to the browser.',
    media: aiAgent,
    tags: [
      'Vue 3',
      'Pinia',
      'Gemini API',
      'AI',
      'LLM',
      'Vite',
      'Serverless',
      'Vercel',
      'REST API',
      'personal project',
    ],
    github: 'https://github.com/elenavolpato/ai-portfolio',
    external: 'https://agent.raposinha.dev',
    mediaOnRight: false,
    video: true,
  },
  {
    id: 1,
    title: 'ChoreMate App',
    subtitle:
      'Organize your household chores and make your everyday life easier',
    description:
      'This app was developed as a final project for my Master in Full Stack development in Epicode Institute of Technology. This is a ongoing project, in which many improvements are in development :D In this first you can already create a your household, add people to it, add preset tasks, create personalized tasks, and assign tasks to other group members.',
    media: choremate,
    tags: [
      'React',
      'Redux',
      'Vite',
      'Bootstrap',
      'SpringBoot',
      'Postgres',
      'Mailgun',
      'REST API',
    ],
    github: 'https://github.com/elenavolpato/FE-houseHoldChores/',
    external: 'https://choremate.raposinha.dev',
    mediaOnRight: true,
    video: false,
  },
  {
    id: 2,
    title: 'Seasonal food App',
    subtitle: 'Check the seasonality of produce in Italy',
    description:
      "This project was developed to address a genuine challenge: determining the availability of fruits and vegetables in a new country or region. Despite searching for solutions and information, we couldn't find anything intuitive or capable of meeting my needs. Used  data from slowfood.it",
    media: seasonalFood,
    tags: [
      'React',
      'Styled Components',
      'Food',
      'Tailwind',
      'App',
      'i18next',
      'personal project',
    ],
    github: 'https://github.com/elenavolpato/seasonalfood',
    external: 'https://seasonalfood.raposinha.dev',
    mediaOnRight: false,
  },
  {
    id: 3,
    title: 'Weather app',
    subtitle: 'Used API open weather to build a simple weather forecast',
    description:
      'As a part of my masters in EPICODE we had to develop a weather app using open weather. It turns out that the results came out pretty well and I decided to publish it',
    media: weatherApp,
    tags: ['React', 'Bootstrap', 'API', 'responsiveness', 'personal project'],
    github: 'https://github.com/elenavolpato/meteo-app',
    external: 'https://meteo-app.raposinha.dev/',
    mediaOnRight: true,
  },
  {
    id: 4,
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
    mediaOnRight: false,
  },
  {
    id: 5,
    title: 'Circuito da memória Paulistana',
    subtitle: 'Short project for Sao Paulo Cultural project',
    description:
      'This was a project for the Sao Paulo townhall that I worked as front end developer and Quality assurance analyst. The challenge here was to display all the material in a intuitive and interesting way while making the code as clean as possible to be maintainable.',
    media: circuito,
    tags: ['Vue', 'Tailwind', 'FrontEnd', 'QA', 'Team work'],
    github: '#',
    external: 'https://circuitomemoriapaulistana.com.br/',
    mediaOnRight: true,
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
    external: 'https://meditate.raposinha.dev/',
    mediaOnRight: false,
    video: true,
  },
]
