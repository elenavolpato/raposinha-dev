import { createSignal, onMount } from "solid-js";

export default function Techs() {
  const logos = [
    {
      name: "Angular",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
    },
    {
      name: "HTML",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "TypeScript",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
    {
      name: "React",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Svelte",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg",
    },
    {
      name: "SolidJS",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidjs/solidjs-original.svg",
    },
    {
      name: "Sass",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
    },
    {
      name: "Tailwind",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    },
    {
      name: "MongoDB",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
  ];

  // Duplicate logos for seamless loop
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section class="flex items-center justify-center max-w-full">
      <div class="w-full px-4">
        <h1 class="md:text-6xl text-4xl text-gray-100 text-center pb-2">
          Elena Volpato
        </h1>
        <h1 class="md:text-4xl  text-2xl text-gray-100 text-center pb-5">
          Language agnostic front end developer
        </h1>

        <div class="w-full bg-gray-200 py-10 px-4 md:px-20">
          <style>{`
            @keyframes scroll {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
            .animate-scroll {
              animation: scroll 30s linear infinite;
            }
            .animate-scroll:hover {
              animation-play-state: paused;
            }
            .logo-container {
              position: relative;
            }
            .logo-name {
              position: absolute;
              bottom: -30px;
              left: 50%;
              transform: translateX(-50%);
              opacity: 0;
              transition: opacity 0.3s ease;
              white-space: nowrap;
              font-size: 14px;
              font-weight: 500;
              color: #374151;
            }
            .logo-container:hover .logo-name,
            .logo-container:focus .logo-name {
              opacity: 1;
            }
            
            /* Mobile styles */
            @media (max-width: 768px) {
              .carousel-container {
                display: none !important;
              }
              .grid-container {
                display: grid !important;
              }
            }
            
            /* Desktop styles */
            @media (min-width: 769px) {
              .carousel-container {
                display: block !important;
              }
              .grid-container {
                display: none !important;
              }
            }
          `}</style>

          {/* Desktop Carousel */}
          <div class="carousel-container overflow-hidden">
            <div class="flex animate-scroll">
              {duplicatedLogos.map((logo, index) => (
                <div
                  class="flex-shrink-0 px-12 flex items-center justify-center logo-container"
                  tabindex="0"
                >
                  <img
                    src={logo.url}
                    alt={logo.name}
                    class="h-16 w-16 object-contain"
                  />
                  <span class="logo-name">{logo.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Grid */}
          <div class="grid-container grid-cols-3 gap-4 max-w-md mx-auto">
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
          </div>
        </div>
      </div>
    </section>
  );
}
