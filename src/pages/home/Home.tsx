import fotofood from '../../assets/fotofood.jpg'

function Home() {
  const handleBuyNow = () => {
    console.log('Navegando para página de compra...')
  }

  const handleLearnMore = () => {
    console.log('Navegando para mais informações...')
  }

  return (
    <main className="relative w-full min-h-screen pt-20 md:pt-24">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${fotofood})`,
        }}
        role="img"
        aria-label="Imagem de fundo mostrando alimentos saudáveis"
      />
      
      <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/60 to-black/70" />
      
      <section className="relative z-10 flex items-start pt-24 md:pt-32 lg:pt-40 px-6 sm:px-10 md:px-16 lg:px-24">
        <div className="max-w-4xl text-white">
          <span className="inline-block font-inter text-xl sm:text-2xl md:text-2xl tracking-wide text-amber-100 animate-fade-in">
            Nutrição Simples e Pura
          </span>
          
          <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-sansita font-normal leading-tight sm:leading-[1.1]">
            Um equilíbrio perfeito entre{' '}
            <br className="hidden sm:block" />
            <span className="italic text-amber-200">Sabor, Saúde</span> e{' '}
            <br className="hidden sm:block" />
            <span className="italic text-amber-200">Prazer</span>
          </h1>
          
          <div className="mt-9 md:mt-11 flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
            <button
              onClick={handleBuyNow}
              className="w-full sm:w-auto font-inter font-semibold text-lg md:text-xl lg:text-2xl 
                       bg-[#933C24] hover:bg-[#A85741] 
                       active:bg-[#7A3019] 
                       transition-all duration-300 
                       px-9 py-3.5 rounded-md 
                       shadow-lg hover:shadow-xl 
                       transform hover:-translate-y-0.5
                       focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-black"
              aria-label="Comprar produtos agora"
            >
              Compre Já
            </button>
            
            <button
              onClick={handleLearnMore}
              className="w-full sm:w-auto font-inter font-semibold text-lg md:text-xl lg:text-2xl 
                       flex items-center justify-center sm:justify-start gap-2 
                       text-[#E9BD8C] hover:text-[#F8D4AC] 
                       transition-all duration-300 
                       group
                       focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-black
                       rounded-md px-5 py-3.5"
              aria-label="Saiba mais sobre nossos produtos"
            >
              Saiba Mais{' '}
              <span className="transform group-hover:translate-x-1 transition-transform duration-300">
                →
              </span>
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home;