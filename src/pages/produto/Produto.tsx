import { useState, useMemo } from 'react'
import { Heart, Clock, Zap, Search, Star } from 'lucide-react'

export default function ProdutoPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [saved, setSaved] = useState<number[]>([])

  const produtos = [
    {
      id: 1,
      title: 'Sopa Cremosa de Grão-de-Bico',
      image:
        'https://images.unsplash.com/photo-1543353071-873f17a7a088?q=80&w=1600',
      time: 30,
      difficulty: 'Fácil',
      calories: 220,
      rating: 4.8,
      tags: ['Vegano', 'Nutritivo']
    },
    {
      id: 2,
      title: 'Bowl Fitness com Quinoa',
      image:
        'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1600',
      time: 20,
      difficulty: 'Médio',
      calories: 350,
      rating: 4.7,
      tags: ['Fitness', 'Proteico']
    }
  ]

  const filtered = useMemo(() => {
    return produtos.filter(p =>
      p.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }, [searchTerm])

  const toggleSave = (id: number) => {
    setSaved(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    )
  }

  return (
    <main className="min-h-screen bg-[#0f0f0f] text-white">
      {/* HERO */}
      <section className="relative h-[70vh] flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1600"
          alt="Comida saudável"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/65" />

        <div className="relative z-10 text-center max-w-3xl px-6">
          <p className="text-sm uppercase tracking-widest text-green-400 mb-4">
            Nutrição simples e pura
          </p>

          <h1 className="text-4xl md:text-6xl font-serif leading-tight mb-6">
            Produtos e Receitas <br />
            para uma vida saudável
          </h1>

          <button className="mt-4 px-8 py-3 bg-[#b45309] hover:bg-[#92400e] transition rounded-md font-semibold">
            Compre Já
          </button>
        </div>
      </section>

      {/* BUSCA */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="relative mb-12">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Buscar produtos ou receitas..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="w-full bg-[#1a1a1a] border border-gray-700 rounded-lg pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map(prod => (
            <article
              key={prod.id}
              className="bg-[#1a1a1a] rounded-xl overflow-hidden hover:scale-[1.02] transition"
            >
              <div className="relative h-56">
                <img
                  src={prod.image}
                  alt={prod.title}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => toggleSave(prod.id)}
                  className={`absolute top-3 right-3 p-2 rounded-full ${
                    saved.includes(prod.id)
                      ? 'bg-red-500'
                      : 'bg-black/60'
                  }`}
                >
                  <Heart
                    size={18}
                    className={saved.includes(prod.id) ? 'fill-white' : ''}
                  />
                </button>
              </div>

              <div className="p-5">
                <h3 className="font-semibold text-lg mb-2">{prod.title}</h3>

                <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                  <span className="flex items-center gap-1">
                    <Clock size={14} /> {prod.time} min
                  </span>
                  <span className="flex items-center gap-1">
                    <Zap size={14} /> {prod.difficulty}
                  </span>
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <Star className="fill-yellow-400 text-yellow-400" size={16} />
                  <span className="text-sm">{prod.rating}</span>
                </div>

                <button className="w-full bg-green-600 hover:bg-green-700 transition py-2 rounded-md font-semibold">
                  Ver Detalhes
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
