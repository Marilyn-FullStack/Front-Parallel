
function Sobre() {
  return (
    <div className="container-sobre w-full flex flex-col mb-24">
      <div className=" flex flex-col w-3/6 m-auto">
        <h1 className="m-auto mb-24 text-3xl font-bold ">
         O e-Commerce Solidário Transformando Vidas
        </h1>

        {/* Primeira Imagem */}
        <div className="flex flex-col md:flex-row items-center mb-4 text-shadow">
          <img
            className="mx-auto mb-4 md:mb-0 rounded-full transform transition-transform duration-500 hover:scale-110"
            src="https://ik.imagekit.io/53urd0gwk/Segunda%20Chance/quimico.png?updatedAt=1707237585329"
            alt="Imagem do Projeto"
            width="300"
            height="150"
          />
          <p className="text-lg md:ml-4 leading-7 text-justify mb-6 p-4 bg-white text-shadow transform transition-transform duration-500 hover:scale-110">
            Em conformidade com o Objetivo de Desenvolvimento Sustentável (ODS)
            3 - Saúde e Bem-estar, o Projeto SegundaChance concentra-se na
            abordagem do ODS 3.5, que busca reforçar a prevenção e o tratamento
            do abuso de substâncias, incluindo drogas entorpecentes e uso nocivo
            do álcool. As causas subjacentes a esse problema social incluem a
            desestruturação da família, a falta de acesso a tratamento
            psicológico de qualidade, a carência de atividades recreativas e o
            aumento da taxa de mortalidade em crianças vulneráveis. Além disso, a
            situação resulta em impactos socioeconômicos, aumento da violência,
            prostituição, desigualdade e disseminação de doenças transmissíveis.
          </p>
        </div>

        {/* Segunda Imagem */}
        <div className="flex flex-col md:flex-row items-center mb-4 ">
          <img
            className="mx-auto mb-4 md:mb-0 rounded-full transform transition-transform duration-500 hover:scale-110"
            src="https://ik.imagekit.io/53urd0gwk/Segunda%20Chance/e-comerce.png?updatedAt=1707236142602"
            alt="Imagem do Projeto"
            width="300"
            height="150"
          />
          <p className="text-lg md:ml-4 leading-7 text-justify mb-6 p-4 bg-white text-shadow transform transition-transform duration-500 hover:scale-110">
            O Projeto SegundaChance optou por enfrentar esses desafios sociais
            por meio de um e-Commerce inovador, um Marketplace que visa
            conectar ONGs dedicadas ao tratamento de dependentes químicos com uma
            audiência mais ampla. Essa escolha estratégica é motivada pela
            necessidade de proporcionar às ONGs uma plataforma eficaz para
            anunciar seus produtos, arrecadar fundos essenciais para seus
            projetos sociais e, assim, ampliar o alcance de sua missão de
            reabilitação.
          </p>
        </div>

        {/* Terceira Imagem */}
        <div className="flex flex-col md:flex-row items-center mb-4">
          <img
            className="mx-auto mb-4 md:mb-0 rounded-full transform transition-transform duration-500 hover:scale-110"
            src="https://ik.imagekit.io/53urd0gwk/Segunda%20Chance/desing.png?updatedAt=1707236124313"
            alt="Imagem do Projeto"
            width="300"
            height="150"
          />
          <p className="text-lg md:ml-4 leading-7 text-justify mb-6 p-4 bg-white text-shadow transform transition-transform duration-500 hover:scale-110">
            O e-Commerce Solidário proposto pelo Projeto desempenhará um papel
            crucial na solução do problema social identificado. Ao oferecer às
            ONGs uma vitrine digital, a plataforma proporcionará maior
            visibilidade a seus produtos, alcançando um público mais amplo.
            Essa visibilidade adicional se traduzirá em maior arrecadação de
            fundos, permitindo que as organizações expandam suas iniciativas e
            intensifiquem os esforços para reabilitação de dependentes químicos.
            Ao apoiar essas ONGs, o Projeto SegundaChance busca verdadeiramente
            oferecer uma segunda chance a indivíduos em situação de
            vulnerabilidade.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Sobre;