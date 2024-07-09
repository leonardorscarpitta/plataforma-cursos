import Link from "next/link";
import Image from "next/image";
import Paragraph from "../tagComponents/paragraph/paragraph";

interface NavBarItemsProps {
  imgSource: string,
  children: string,
}

export default function NavBarItems(props: NavBarItemsProps) {
  return (
    <li className="flex flex-col content-center place-content-center justify-center">
      <Image src={props.imgSource} width={40} height={40} alt="item do menu de navegacao" />
      <Paragraph>
        {props.children}
      </Paragraph>
    </li>
  )
}