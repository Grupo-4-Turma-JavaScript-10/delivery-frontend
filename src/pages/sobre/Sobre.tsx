import React from 'react'

function Sobre() {
  return (
    <span className='bg-black w-full'>
      <section className="py-27 px-[5%] w-full min-h-100 bg-[url('/src/assets/SobrenosBG.jpg')] bg-cover bg-center flex flex-col items-center">
        <h1 className="font-sansita font-normal text-white text-5xl z-1">Sobre nós</h1>
        <section className='mb-10 font-inter mt-10 rounded-4xl flex w-full bg-white/75 z-1 p-[6%] gap-15 flex-wrap justify-around items-center'>
          <img src="/src/assets/vertex.png" alt="Vertex.bah" className='w-70 h-min' />
          <span className='flex flex-col gap-4 max-w-120'>
            <p> Vertex.bah é uma equipe de desenvolvedores gaúchos, unida pelo gosto por tecnologia e inovação. Nascemos no Bootcamp da Generation Brasil, onde nos conhecemos, trocamos experiências e descobrimos que juntos podemos ir muito mais longe. </p>
            <p> Cada membro da Vertex.bah traz habilidades únicas, mas o que realmente nos diferencia é a vontade de aprender, criar soluções inteligentes e encarar desafios com criatividade e espírito colaborativo. Somos gaúchos, somos programadores, e estamos prontos para transformar ideias em realidade!</p>
          </span>
        </section>
        <section className='w-full flex justify-around flex-wrap gap-10'>
          <section className='font-inter flex flex-col items-center bg-white/50 min-w-1/4 p-5 rounded-xl'>
            <div>
              <img src="/src/assets/Pedro.png" alt="pedro santana" className='mb-2 w-40 rounded-full aspect-square ring-2 ring-orange-600'/>
            </div>
            <h3 className='font-bold'>Pedro Santana</h3>
            <p className='text-sm text-orange-700'>Desenvolvedor</p>
          </section>
          <section className='font-inter flex flex-col items-center bg-white/50 min-w-1/4 p-5 rounded-xl'>
            <div>
              <img src="/src/assets/Assis.png" alt="Assis" className='mb-2 w-40 rounded-full aspect-square ring-2 ring-orange-600'/>
            </div>
            <h3 className='font-bold'>Assis Neto</h3>
            <p className='text-sm text-orange-700'>Desenvolvedor</p>
          </section>
          <section className='font-inter flex flex-col items-center bg-white/50 min-w-1/4 p-5 rounded-xl'>
            <div>
              <img src="/src/assets/Gabi.png" alt="Gabrieli Martins" className='mb-2 w-40 rounded-full aspect-square ring-2 ring-orange-600'/>
            </div>
            <h3 className='font-bold'>Gabrieli Martins</h3>
            <p className='text-sm text-orange-700'>Desenvolvedora</p>
          </section>
          <section className='font-inter flex flex-col items-center bg-white/50 min-w-1/4 p-5 rounded-xl'>
            <div>
              <img src="/src/assets/Kaua.png" alt="Kaua Gabriel" className='mb-2 w-40 rounded-full aspect-square ring-2 ring-orange-600'/>
            </div>
            <h3 className='font-bold'>Kaua Gabriel</h3>
            <p className='text-sm text-orange-700'>Desenvolvedor</p>
          </section>
          <section className='font-inter flex flex-col items-center bg-white/50 min-w-1/4 p-5 rounded-xl'>
            <div>
              <img src="/src/assets/Lia.png" alt="Lilia Santos" className='mb-2 w-40 rounded-full aspect-square ring-2 ring-orange-600'/>
            </div>
            <h3 className='font-bold'>Lilia Santos</h3>
            <p className='text-sm text-orange-700'>Desenvolvedora</p>
          </section>
          <section className='font-inter flex flex-col items-center bg-white/50 min-w-1/4 p-5 rounded-xl'>
            <div>
              <img src="/src/assets/Pati.png" alt="Patricia da Rosa" className='mb-2 w-40 rounded-full aspect-square   ring-2 ring-orange-600'/>
            </div>
            <h3 className='font-bold'>Patricia da Rosa</h3>
            <p className='text-sm text-orange-700'>Desenvolvedora</p>
          </section>
        </section>
      </section>
    </span>
  )
}

export default Sobre