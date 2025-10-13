export default function Header() {
  return (
    <section>
      <div class="relative sm:rotate-0 rotate-90 my-15 flex justify-center h-screen w-screen">
        <img
          src="raposinha.svg"
          alt="handwritten raposinha logo"
          class="absolute opacity-50 raposinha-img pt-100"
        />
        <h1
          class=" header  absolute text-[#EA00FF] text-[305px]"
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
