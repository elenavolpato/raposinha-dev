export default function Header() {
  /* sm:rotate-0 rotate-90 */
  return (
    <section class="h-screen w-screen">
      <div class="relative my-15 flex justify-center items-center max-h-full h-full w-screen">
        <img
          src="/images/raposinha.svg"
          alt="handwritten raposinha logo"
          class="absolute opacity-50 raposinha-img "
        />
        <h1
          class="header absolute text-[#EA00FF] text-7x1 "
          style={{ "font-family": "'Kode Mono', monospace" }}
          data-text="raposinha"
        >
          raposinha
        </h1>
      </div>

      <p
        class="absolute bottom-20 text-gray-50 text-[35px] flex justify-center w-screen"
        style={{ "font-family": "'Kode Mono', monospace" }}
      >
        coming soon
      </p>
    </section>
  );
}
