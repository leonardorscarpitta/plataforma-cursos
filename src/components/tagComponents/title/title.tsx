import { ComponentProps } from "react"

interface TitleProps extends ComponentProps<'h2'> {
}

export default function Title(props: TitleProps) {
  return (
    <h2 className="text-3xl font-bold">
      {props.children}
    </h2>
  ) 
}