import { ComponentProps } from "react"
import Link from "next/link"

interface TitleProps extends ComponentProps<'h2'> {
}

export default function Title(props: TitleProps) {
  return (
    <h2 className="text-3xl font-bold">
      <Link href="./"></Link>
      {props.children}
    </h2>
  ) 
}