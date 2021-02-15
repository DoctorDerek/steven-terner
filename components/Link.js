/* eslint-disable jsx-a11y/anchor-has-content */
import Link from 'next/link'

const CustomLink = ({ href, className, ...rest }) => {
  const isInternalLink = href && href.startsWith('/')
  const isAnchorLink = href && href.startsWith('#')

  const defaultClass = 'underline text-green-dark hover:text-green hover:no-underline'
  className = className ? className + ' ' + defaultClass : defaultClass

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a {...rest} className={className} />
      </Link>
    )
  }

  if (isAnchorLink) {
    return <a href={href} {...rest} className={className} />
  }

  return <a target="_blank" rel="noopener noreferrer" href={href} {...rest} className={className} />
}

export default CustomLink
