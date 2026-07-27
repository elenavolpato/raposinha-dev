import circuito from '/images/circuto-memoria-paulistana.webm'
import meditate from '/images/meditate.webm'
import seasonalFood from '/images/seasonal-food.png'
import weatherApp from '/images/weather-app.png'
import choremate from '/images/choremate.png'

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
    id: 2,
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
    mediaOnRight: false,
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
