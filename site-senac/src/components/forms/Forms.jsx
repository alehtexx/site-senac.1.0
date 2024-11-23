import './styles.css';

const Forms = () => {

    return (
        <div id="forms-container">
            <div className="form-wrapper">
                <h1 className="text-2xl md:text-3xl text-white text-center mb-8 font-bold">
                    ENTRE EM CONTATO COM NOSSOS ESPECIALISTAS
                    <span className="block text-blue-400 text-xl md:text-2xl mt-2">
                        Sem compromisso
                    </span>
                </h1>
                
                <form className="bg-white/10 backdrop-blur-md p-8 rounded-lg shadow-xl max-w-md w-full mx-auto">
                    <div className="mb-5">
                        <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Seu Email</label>
                        <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required />
                    </div>
                    <div className="mb-5">
                        <label for="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Seu Nome</label>
                        <input type="text" id="text" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
                    </div>
                    <div className="mb-5">
                        <label for="tel" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Seu WhatsApp</label>
                        <input type="tel" id="tel" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="(00) 0000-0000 " />
                    </div>
                    <div className="flex items-start mb-5">
                        <div className="flex items-center h-5">
                            <input id="terms" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                        </div>
                        <label for="terms" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Ao clicar no botão abaixo, você está ciente de que a nossa empresa poderá entrar em contato com você de acordo com os seus interesses e nossa  <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">Política de Privacidade.*</a></label>
                    </div>
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Enviar</button>
                </form>
            </div>
        </div>
    )
}

export default Forms;