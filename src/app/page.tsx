import Image from "next/image"
import Title from "../components/tagComponents/title/title"
import Paragraph from "../components/tagComponents/paragraph/paragraph"
import Button from "../components/tagComponents/button/button"

export default function Home() {
  return (
    <div className="min-h-screen content-center">
      <main className="flex flex-col gap-y-8 content-center m-8 rounded-lg">
        <Image className="place-self-center"
          src="https://img.icons8.com/external-sapphire-kerismaker/512/external-C-Sharp-Laptop-computer-programming-sapphire-kerismaker.png"
          width={200}
          height={200}
          alt="external-tech-future-of-technology-filled-outline-icons-maxicons" />
        <div className="flex flex-col gap-y-8 bg-white p-6 rounded-lg">
          <Title>
            Boas vindas a seu curso de CSharp!
          </Title>
          <Paragraph>
            Olá usuário! Seja muito bem-vindo(a) à página do curso, feito para iniciantes na programação e totalmente gratuito... sua jornada está próxima de ser iniciada, clique no botão abaixo para acessar os vídeos selecionados por nossa equipe!
          </Paragraph>
          <Button pageHref="/main">
            Comece já!
          </Button>
        </div>
      </main>
    </div>
  );
}
