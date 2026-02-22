import { createEffect } from 'solid-js'
import AboutData from '../assets/about.data'
import elena from '/images/elena_2025.png'

export default function About() {
  const name = AboutData()

  createEffect(() => {
    console.log(name())
  })

  return (
    <section class=" py-12">
      <div class="flex flex-col md:flex-row max-w-[1200px] items-start my-8 gap-5">
        <div class="relative">
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
            Born and raised Brazilian, living in Piemonte, Italy (yes, I traded
            caipirinhas and samba for wine and truffles, and honestly, no
            regrets).
          </p>

          <p class="text-base text-gray-50 py-2">
            As if moving to another country wasn’t enough, I also changed my
            career in 2020 from event and presentations project manager to
            front-end developer, which basically means that now I make buttons
            that actually do stuff and then secretly judge the shade of blue
            chosen by the client. :D
          </p>

          <p class="text-base text-gray-50 py-2">
            I worked for two years (2023–2025) at a German startup as a
            front-end developer, where we built software to help children learn
            how to read. Between meetings and Slack notifications, I also
            developed a couple of apps on my own. I’m now channeling that
            experience into a
            <strong> master’s degree to become a full-stack developer.</strong>
          </p>

          <p class="text-base text-gray-50 py-2">
            What really drives me? <strong>Creative problem solving.</strong> I
            really enjoy untangling messy code and designing designing things
            that just work, and sometimes I even live spending hours debugging
            and making my hair turn gray.
          </p>
        </div>
      </div>
    </section>
  )
}
