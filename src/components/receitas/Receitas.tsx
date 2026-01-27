import { Helmet } from 'react-helmet'
import { motion } from 'framer-motion'
import { ChefHat } from 'lucide-react'

const Receitas = () => {
  const recipes = [
    {
      id: 1,
      name: 'Bowl de Açaí Energético',
      image: 'https://images.unsplash.com/photo-1688045234951-e12cfd66ca87',
      ingredients: ['Açaí orgânico', 'Banana', 'Granola', 'Frutas vermelhas', 'Mel vegano'],
      difficulty: 'Fácil',
    },
    {
      id: 2,
      name: 'Poke Bowl Vegano',
      image: 'https://images.unsplash.com/photo-1589483233144-795633bf597c',
      ingredients: ['Arroz integral', 'Tofu marinado', 'Edamame', 'Abacate', 'Algas'],
      difficulty: 'Médio',
    },
    {
      id: 3,
      name: 'Burger Vegano Gourmet',
      image: 'https://images.unsplash.com/photo-1610348715829-2e60f324926c',
      ingredients: ['Hambúrguer de grão-de-bico', 'Pão integral', 'Alface', 'Tomate', 'Cebola caramelizada'],
      difficulty: 'Médio',
    },
  ]

  const handleViewRecipe = (recipeName: string) => {
    console.log(`Visualizar receita: ${recipeName}`)
  }

  return (
    <>
      <Helmet>
        <title>Receitas Saudáveis | Healthy Food</title>
        <meta
          name="description"
          content="Receitas saudáveis, veganas e equilibradas para uma alimentação simples, nutritiva e cheia de sabor."
        />
      </Helmet>

      <section
        id="receitas"
        className="relative py-28 px-6 md:px-12 bg-gradient-to-b from-black via-[#2B1B14] to-[#3A1F15]"
        aria-labelledby="recipes-title"
      >
        <div className="max-w-7xl mx-auto">
          {/* HEADER */}
          <motion.header
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h1
              id="recipes-title"
              className="text-4xl md:text-5xl font-sansita text-amber-200 mb-4"
            >
              Receitas & Cardápios
            </h1>
            <p className="text-amber-100/80 max-w-2xl mx-auto text-lg font-inter">
              Sabores naturais pensados para nutrir o corpo e encantar o paladar
            </p>
          </motion.header>

          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {recipes.map((recipe, index) => (
              <motion.article
                key={recipe.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group rounded-2xl overflow-hidden bg-white/90 backdrop-blur-md shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                {/* IMAGE */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={recipe.image}
                    alt={recipe.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />

                  <span className="absolute top-4 right-4 bg-amber-600/90 text-white px-4 py-1.5 rounded-full text-sm font-semibold shadow-md">
                    {recipe.difficulty}
                  </span>
                </div>

                {/* CONTENT */}
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-[#3A1F15] mb-4 flex items-center gap-2">
                    <ChefHat className="w-5 h-5 text-amber-700" />
                    {recipe.name}
                  </h2>

                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-[#5A3A2A] mb-2">
                      Ingredientes
                    </h3>
                    <ul className="text-sm text-[#6B4A3A] space-y-1">
                      {recipe.ingredients.map((ingredient, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-amber-600 rounded-full" />
                          {ingredient}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() => handleViewRecipe(recipe.name)}
                    className="w-full rounded-md bg-[#933C24] hover:bg-[#A85741] active:bg-[#7A3019]
                               text-white font-inter font-semibold py-3 transition-all duration-300
                               shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
                  >
                    Ver Receita Completa
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Receitas
