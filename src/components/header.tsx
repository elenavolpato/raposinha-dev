export default function Header() {
  return (
    <section class="h-150 max-w-screen overflow-hidden">
      <div class="relative sm:git mt-15 flex justify-center items-center max-h-300 h-full ">
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
