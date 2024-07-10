import CardCursos from "./cardCursos"

interface Card {
  img: string,
  title: string,
  text: string,
  page: string,
}

let cardList: Card[] = [
  {
    img: "https://img.icons8.com/external-flaticons-lineal-color-flat-icons/512/external-python-computer-programming-icons-flaticons-lineal-color-flat-icons-2.png",
    title: "Python",
    text: "Torne-se um mestre da linguagem de dados em uma aula imersiva de 40h com o Professor Gustavo Guanabara!",
    page: "./"
  },
  {
    img: "https://img.icons8.com/external-flaticons-lineal-color-flat-icons/512/external-java-mobile-app-development-flaticons-lineal-color-flat-icons-3.png",
    title: "Java",
    text: "Escreva uma vez, rode em todos os lugares: Aprofunde suas habilidades Java e entenda do que essa linguagem é capaz!",
    page: "./"
  },
  {
    img: "https://img.icons8.com/external-sapphire-kerismaker/512/external-C-Sharp-Laptop-computer-programming-sapphire-kerismaker.png",
    title: "C#",
    text: "Se seu objetivo é tornar-se desenvolvedor de jogos, não perca tempo! Comece agora e aprenda a utilizar a ferramenta Unity!",
    page: "./"
  },
]

export default function CardSection() {
  return (
    <div className="flex flex-col gap-y-8 card-section">
      {cardList.map((card, index) => (
        <CardCursos 
          key={index} 
          img={card.img} 
          title={card.title} 
          text={card.text}
          page={card.page}
        />
      ))}
    </div>
  );
}