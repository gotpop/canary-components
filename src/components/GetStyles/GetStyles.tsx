/**
 * Renders a <style> element with the provided styles as inner HTML.
 *
 * NOTE: this is rendered at build time so it is safe to use dangerouslySetInnerHTML.
 *
 * @param {Object} props - The component props.
 * @param {string} props.styles - The styles to be rendered as inner HTML.
 * @returns {JSX.Element} - The rendered <style> element.
 */

import React from "react"

type GetStylesProps = {
  styles: string
  [key: string]: any
}

export const GetStyles = ({ styles, ...props }: GetStylesProps): JSX.Element => <style dangerouslySetInnerHTML={{ __html: styles }} {...props} />
