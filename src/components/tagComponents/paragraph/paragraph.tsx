import { ComponentProps } from "react";

interface PragraphProps extends ComponentProps<'p'> {
  children: string,
}

export default function Paragraph(props: PragraphProps) {
  return (
    <p className="text-base from-neutral-700">
      {props.children}
    </p>
    )
}