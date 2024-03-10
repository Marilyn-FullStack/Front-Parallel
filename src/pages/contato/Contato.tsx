function Contato() {
    return (
        <>
            <div className="mt-5">
                <h2 className="text-center text-4xl  p-8 ">Entre em contato conosco!</h2>
            </div>
            <form className="max-w-md mx-auto my-4">
                <div>
                    <label
                        htmlFor="nome"
                        className="block mb-2 p-1 text-md font-medium text-gray-900"
                    >
                        Nome Completo:
                    </label>
                    <input
                        type="text"
                        id="nome"
                        name="Nome"
                        className="block w-full p-3 text-gray-900 border border-gray-300 rounded-lg sm:text-xs  dark:bg-gray-700 dark:border-gray-600 dark:text-white "
                    />
                </div>

                <div>
                    <label htmlFor="email" className="block mb-2 p-1 text-md font-medium text-gray-900">Email:</label>
                    <input
                        type="text"
                        id="email"
                        name="Email"
                        className="block w-full p-3 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    />
                </div>
                <div>
                    <label htmlFor="assunto" className="block mb-2 p-1 text-md font-medium text-gray-900">Assunto:</label>
                    <select
                        id="assunto"
                        name="Assunto"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-60 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                        <option>Dúvida</option>
                        <option>Reclamação</option>
                        <option>Sugestão</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="mensagem" className="block mb-2 p-1 text-md font-medium text-gray-900">Mensagem:</label>
                    <textarea
                        id="mensagem"
                        name="Mensagem"
                        className="block p-5 w-full text-md text-gray-900 bg-gray-50 rounded-lg border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                        placeholder="Deixe sua mensagem"
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className=" w-full mx-auto my-7 font-medium rounded-lg text-md px-10 py-2.5 text-center text-white  border-gray-300 dark:bg-gray-500 hover:bg-gray-700"
                >
                    <a href="mailto:ods3grupo1generation@gmail.com">Enviar</a>
                </button>
            </form>
        </>
    );
}

export default Contato;
