import { Link } from 'react-router-dom';
import { GithubLogoIcon, InstagramLogoIcon, LinkedinLogoIcon } from '@phosphor-icons/react';
import { Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-bege text-gray-700 py-12 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-8">

          <div>
            <span className="text-2xl font-bold text-olive-green mb-4 block">Healthy Food</span>
            <p className="text-sm mb-6">
              Comida vegana fresca e sustentável, feita com amor e ingredientes orgânicos.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-olive-green transition-colors duration-200">
                <InstagramLogoIcon className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-olive-green transition-colors duration-200">
                <GithubLogoIcon className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-olive-green transition-colors duration-200">
                <LinkedinLogoIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <span className="font-semibold text-gray-900 mb-4 block">Navegação</span>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-sm hover:text-olive-green transition-colors duration-200">
                Home
              </Link>
              <Link to="/produtos" className="text-sm hover:text-olive-green transition-colors duration-200">
                Produtos
              </Link>
              <Link to="/receitas" className="text-sm hover:text-olive-green transition-colors duration-200">
                Receitas
              </Link>
              <Link to="/sobre" className="text-sm hover:text-olive-green transition-colors duration-200">
                Sobre Nós
              </Link>
            </nav>
          </div>

          <div>
            <span className="font-semibold text-gray-900 mb-4 block">Contato</span>
            <div className="flex flex-col space-y-2 text-sm">
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-olive-green" />
                contato@healthyfood.com
              </p>
              <p>📞 (51) 9999-9999</p>
              <p>📍 Porto Alegre, RS</p>
            </div>
          </div>

        </div>

        <div className="border-t border-gray-300 pt-6 text-center text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} Healthy Food. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;