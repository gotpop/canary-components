import React, { HTMLAttributes } from "react"

import { GetStyles } from "@/components/GetStyles"
import Image from "next/image"
import styles from "./popOver.style"

type PopOverProps = {
  imageSrc: string
  title: string
  index: number
  width: number
  height: number
}

interface MyDivProps extends HTMLAttributes<HTMLDivElement> {
  popover?: string
}

interface MyButtonProps extends HTMLAttributes<HTMLButtonElement> {
  popovertarget?: string
  popovertargetaction?: string
}

const MyDiv: React.FC<MyDivProps> = ({ children, ...rest }) => {
  return <div {...rest}>{children}</div>
}

const MyButton: React.FC<MyButtonProps> = ({ children, ...rest }) => {
  return <button {...rest}>{children}</button>
}

export const PopOver: React.FC<PopOverProps> = ({ imageSrc, index, title, width, height }) => {
  const popId = `popover-${index}`

  return (
    <>
      <GetStyles styles={styles} data-style="PopOver" />
      <figure className="figure">
        <Image className="image" src={imageSrc} alt={title} width={width} height={height} />
        {/* <MyButton popovertarget={popId} popovertargetaction="show" className="button-view">
          View image
        </MyButton> */}
      </figure>
      <MyDiv id={popId} className="outer" popover="auto">
        <MyButton popovertarget={popId} popovertargetaction="hide" className="button-close">
          <span aria-hidden="true">❌</span>
        </MyButton>
        <div className="inner">
          <Image className="image" src={imageSrc} alt={title} width={width} height={height} />
        </div>
      </MyDiv>
    </>
  )
}
