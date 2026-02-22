import { createSignal, onMount } from 'solid-js'

export default function Techs() {
  const logos = [
    {
      name: 'Angular',
      url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
    },
    {
      name: 'HTML',
      url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    },
    {
      name: 'TypeScript',
      url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    },
    {
      name: 'JavaScript',
      url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    },
    {
      name: 'React',
      url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    },
    {
      name: 'Svelte',
      url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg',
    },
    {
      name: 'SolidJS',
      url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidjs/solidjs-original.svg',
    },
    {
      name: 'Sass',
      url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg',
    },
    {
      name: 'Tailwind',
      url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
    },
  ]

  // Duplicate logos for seamless loop
  const duplicatedLogos = [...logos, ...logos]
  const [index, setIndex] = createSignal(0)
  onMount(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % logos.length)
    }, 2000) // 1s animation + 1s stop
    return () => clearInterval(interval)
  })

  return (
    <section class="flex items-center justify-center max-w-full ">
      <div class="w-full ">
        <h1 class="md:text-6xl text-4xl text-gray-100 text-center pb-2 ">
          Elena Volpato
        </h1>
        <h1 class="md:text-4xl  text-2xl text-gray-100 text-center pb-5 mb-5">
          Framework agnostic front-end developer
        </h1>

        <div class="max-w-full w-screen ">
          <style>{`
          
            .carousel-container:hover {
              animation-play-state: paused;
            }
            .logo-container {
              position: relative;
            }
            .logo-name {
            position: absolute;
              left: 50%;
              transform: translateX(-50%);
              opacity: 0;
              transition: opacity .3s ease;
              white-space: nowrap;
              font-size: 17px;
              font-weight: 500;
              color: white;
              background: #374151; 
              padding-inline:1em;
              
            }
            .logo-container:hover .logo-name,
            .logo-container:focus .logo-name {
              opacity: 1;
              
            }
            
            /* Mobile styles */
            @media (max-width: 1019px) {
              .carousel-container {
                display: none !important;
              }
              .grid-container {
                display: grid !important;
              }
            }
            
            /* Desktop styles */
            @media (min-width: 1020px) {
              .carousel-container {
                display: block !important;
              }
              .grid-container {
                display: none !important;
              }
            }
          `}</style>

          {/* Desktop Carousel */}
          {/* <div class="carousel-container overflow-hidden">
            <div class="flex justify-center">
              {logos.map((logo) => (
                <div
                  class="flex-shrink-0 px-12 flex items-center justify-center logo-container h-20"
                  tabindex="0"
                >
                  <img
                    src={logo.url}
                    alt={logo.name}
                    class="h-16 w-16 object-contain glitch-techs"
                  />
                  <span class="logo-name">{logo.name}</span>
                </div>
              ))}
            </div>
          </div> */}

          {/* Mobile Grid */}
          {/* <div class="grid-container grid-cols-3 gap-4 max-w-md mx-auto">
            {logos.map((logo) => (
              <div class="flex flex-col items-center justify-center p-2">
                <img
                  src={logo.url}
                  alt={logo.name}
                  class="h-12 w-12 object-contain mb-2"
                />
                <span class="text-xs text-gray-700 text-center font-medium">
                  {logo.name}
                </span>
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </section>
  )
}
