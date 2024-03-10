import { Link } from "react-router-dom";

function Footer() {
    return (
        <div className="shadow bg-[#421713]">
            <div className="w-full max-w-screen-xl mx-auto px-8 py-16">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <a href="https://github.com/Segunda-Chance" className="flex h-8 items-centerbsm:mb-0 space-x-3 rtl:space-x-reverse" target="_blank">
                        <img src="https://ik.imagekit.io/ghc9vhgb1/logo-01-removebg-preview.png?updatedAt=1710083268954" className="h-10" alt="Segunda Chance Logo" />
                        <span className="text-xl font-semibold whitespace-nowrap dark:text-gray-400 align-middle pb-2 pt-1">Segunda Chance</span>
                    </a>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <a href="https://github.com/orgs/Segunda-Chance/repositories" className="hover:underline me-4 md:me-6" target="_blank">Repositório</a>
                        </li>
                        <li>
                            <a href="https://brazil.generation.org/politica-de-privacidade/" className="hover:underline me-4 md:me-6" target="_blank">Política de Privacidade</a>
                        </li>
                        <li >
                            <Link to='/developers' className=" hover:underline mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                                Time de Desenvolvimento
                            </Link>
                        </li>
                        <li>
                            <Link to='/contato' className="pl-5 hover:underline mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                                Contato
                            </Link>
                        </li>

                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400 mt-8">© 2024 <a href="https://brazil.generation.org" className="hover:underline" target="_blank">Generation Brasil</a></span>
            </div>
        </div>

    );
}

export default Footer;