import Button from "@/components/tagComponents/button/button"
import Paragraph from "@/components/tagComponents/paragraph/paragraph"
import Caption from "@/components/tagComponents/caption/caption"
import Image from "next/image"

interface CardCursosProps {
  img: string,
  title: string,
  text: string,
  page: string,
}

export default function CardCursos(props: CardCursosProps) {
  return (
    <div className="bg-white shadow-2xl rounded-lg p-8 flex flex-col gap-y-1 justify-center">
      <Image className="self-center" src={props.img} width={172} height={172} alt="imagem do curso" />
      <Caption>
        {props.title}
      </Caption>
      <Paragraph>
        {props.text}
      </Paragraph>
      <Button pageHref={props.page}>
        Acessar
      </Button>
    </div>
  )
}