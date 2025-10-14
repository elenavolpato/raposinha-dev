export default function Header() {
  /*  */
  return (
    <section class="h-screen w-screen ">
      <div class="relative my-15 flex  justify-center items-center max-h-full h-full ">
        <img
          src="/images/raposinha.svg"
          alt="handwritten raposinha logo"
          class="absolute opacity-50 raposinha-img overflow-hidden"
        />
        <h1
          class="header absolute text-[#EA00FF] overflow-hidden"
          style={{ "font-family": "'Kode Mono', monospace" }}
          data-text="raposinha"
        >
          raposinha
        </h1>
      </div>

      <p
        class="absolute bottom-20 text-gray-50 sm:text-2xl text-base flex justify-center w-screen"
        style={{ "font-family": "'Kode Mono', monospace" }}
      >
        coming soon
      </p>
    </section>
  );
}
