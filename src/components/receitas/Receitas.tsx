import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ChefHat } from 'lucide-react';

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
  ];

  const handleViewRecipe = (recipeName: string) => {
    // ToastAlerta implementação será feita externamente
    console.log(`Visualizar receita: ${recipeName}`);
  };

  return (
    <>
      <Helmet>
        <title>Receitas Veganas - VeganFresh</title>
        <meta 
          name="description" 
          content="Descubra receitas veganas deliciosas e fáceis de preparar com ingredientes orgânicos e sustentáveis." 
        />
      </Helmet>

      <section className="py-25 px-8 bg-amber-500" aria-labelledby="recipes-title">
        <div className="max-w-7xl mx-auto">
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 id="recipes-title" className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Receitas & Cardápios
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Inspire-se com nossas receitas veganas criativas e nutritivas
            </p>
          </motion.header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recipes.map((recipe, index) => (
              <motion.article
                key={recipe.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.03, y: -5 }}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl overflow-hidden transition-shadow duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={recipe.image}
                    alt={recipe.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <span 
                    className="absolute top-4 right-4 bg-olive-green text-white px-3 py-1 rounded-full text-sm font-semibold"
                    aria-label={`Dificuldade: ${recipe.difficulty}`}
                  >
                    {recipe.difficulty}
                  </span>
                </div>

                <div className="p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <ChefHat className="w-5 h-5 text-olive-green" aria-hidden="true" />
                    {recipe.name}
                  </h2>

                  <div className="mb-4">
                    <h3 className="text-sm font-semibold text-gray-700 mb-2">Ingredientes:</h3>
                    <ul className="text-sm text-gray-600 space-y-1" role="list">
                      {recipe.ingredients.map((ingredient, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-sage rounded-full flex-shrink-0" aria-hidden="true" />
                          {ingredient}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() => handleViewRecipe(recipe.name)}
                    className="w-full inline-flex items-center justify-center rounded-md text-sm font-medium bg-olive-green text-white hover:bg-olive-green/90 h-10 px-4 py-2 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-olive-green focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                    aria-label={`Ver receita completa de ${recipe.name}`}
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
  );
};

export default Receitas;