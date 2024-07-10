import { ComponentProps } from "react"

interface CaptionProps extends ComponentProps<'h3'> {
}

export default function Caption(props: CaptionProps) {
  return (
    <h3 className="text-2xl font-bold">
      {props.children}
    </h3>
  ) 
}