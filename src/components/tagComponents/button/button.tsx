import { ComponentProps } from "react";
import Link from "next/link";

interface ButtonProps {
  children: string,
  pageHref: string,
}

export default function Button( {children, pageHref}: ButtonProps) {
  return (
      <Link className="text-center text-lg bg-default py-1 rounded-lg font-bold text-white" href={pageHref}>
        {children}
      </Link>
  )
}
