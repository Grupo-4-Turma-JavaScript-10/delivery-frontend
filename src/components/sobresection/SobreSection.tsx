import { Link } from "react-router-dom";

export function SobreSection() {
    return (
        <>
            <section className="relative w-full h-64 flex items-center justify-center bg-black/60 bg-[url('/src/assets/sobre-bg.jpg')] bg-cover border-0 border-off-white rounded-3xl shadow-lg overflow-hidden     ">
                <div className="text-center px-4 max-w-md">
                    <h2 className="text-2xl font-semibold text-black mb-2">
                        Sobre nós
                    </h2>

                    <p className="text-sm text-black mb-4">
                        Apresentamos uma proposta prática para tornar a alimentação saudável
                        simples e funcional.
                    </p>

                    <Link
                        to="/sobre"
                        className="w-full  text-white sm:w-auto font-inter font-semibold text-lg md:text-xl lg:text-2xl
                  bg-[#933C24] hover:bg-[#A85741] active:bg-[#7A3019]
                  transition-all duration-300 px-9 py-3.5 rounded-md
                  shadow-lg hover:shadow-xl transform hover:-translate-y-0.5
                  focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-black"
                    >
                        Saiba mais
                    </Link>
                </div>
            </section>
        </>
    );
};
export default SobreSection;