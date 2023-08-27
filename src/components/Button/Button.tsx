"use client"

import styles from "./Button.style"

type Props = {
  children: React.ReactNode
}

export const Button = ({ children }: Props) => {
  return (
    <>
      <style>{styles}</style>
      <a className="button" href="#">
        {children}
      </a>
    </>
  )
}
