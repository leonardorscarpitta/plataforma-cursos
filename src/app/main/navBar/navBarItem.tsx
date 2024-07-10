import Link from "next/link";
import Image from "next/image";
import Paragraph from "../../../components/tagComponents/paragraph/paragraph";

interface NavBarItemsProps {
  imgSource: string,
  children: string,
}

export default function NavBarItems(props: NavBarItemsProps) {
  return (
    <Link href="./">
      <li className="flex flex-col gap-y-1 items-center justify-center">
        <Image className="rounded-full bg-default p-2" src={props.imgSource} width={40} height={40} alt="item do menu de navegacao" />
        <Paragraph>
          {props.children}
        </Paragraph>
      </li>
    </Link>
  )
}