export default function Header() {
  return (
    <section class="h-150 w-screen ">
      <div class="relative sm:git chmt-15 flex justify-center items-center max-h-300 h-full ">
        <img
          src="/images/raposinha.svg"
          alt="handwritten raposinha logo"
          class="absolute opacity-50 raposinha-img overflow-hidden max-w-[1380px] w-300 md:w-full md:ml-20"
        />
        <h1
          class="header absolute text-[#EA00FF]"
          style={{ "font-family": "'Kode Mono', monospace" }}
          data-text="raposinha"
        >
          raposinha
        </h1>
      </div>

      {/* <p
        class="absolute bottom-20 text-gray-50 sm:text-2xl text-base flex justify-center w-screen"
        style={{ "font-family": "'Kode Mono', monospace" }}
      >
        coming soon
      </p> */}
    </section>
  );
}

/* html, body {
  margin: 0;
  padding: 0;
}

.pic-ctn {
  width: 100vw;
  height: 200px;
}

@keyframes display {
  0% {
    transform: translateX(200px);
    opacity: 0;
  }
  10% {
    transform: translateX(0);
    opacity: 1;
  }
  20% {
    transform: translateX(0);
    opacity: 1;
  }
  30% {
    transform: translateX(-200px);
    opacity: 0;
  }
  100% {
    transform: translateX(-200px);
    opacity: 0;
  }
}

.pic-ctn {
  position: relative;
  width: 100vw;
  height: 300px;
  margin-top: 15vh;
}

.pic-ctn > img {
  position: absolute;
  top: 0;
  left: calc(50% - 100px);
  opacity: 0;
  animation: display 10s infinite;
}

img:nth-child(2) {
  animation-delay: 2s;
}
img:nth-child(3) {
  animation-delay: 4s;
}
img:nth-child(4) {
  animation-delay: 6s;
}
img:nth-child(5) {
  animation-delay: 8s;
} */
