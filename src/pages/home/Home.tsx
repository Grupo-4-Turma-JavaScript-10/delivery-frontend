import fotofood from '../../assets/fotofood.jpg'

function Home() {
    return (
    <main className="relative h-screen w-full">
      

      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            `url(${fotofood})`,
        }}
      />

      <div className="absolute inset-0 bg-black/60" />

      <section className="relative z-10 h-full flex items-center px-10 md:px-24">
        <div className="max-w-xl text-white">
          <span className="ml-3 font-inter text-[24px] tracking-wide text-amber-100">
          Nutrição Simples e Pura
          </span>

          <h1 className="mt-4 text-[74px] font-sansita font-normal leading-[1.1]
          ">
          Um equilíbrio perfeito entre <br />
          <span className="italic">Sabor, Saúde</span> e <br />
          <span className="italic">Prazer</span>
          </h1>

          <div className="mt-8 flex items-center gap-6">
            <button className="font-inter font-semibold text-[24px] bg-[#933C24] hover:bg-[#A85741] transition px-8 py-3 rounded-md font-semibold">
              Compre Já
            </button>

            <button className="font-inter font-semibold text-[24px] flex items-center gap-2 text-[#E9BD8C] hover:text-[#F8D4AC] transition">
              Saiba Mais <span>→</span>
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home