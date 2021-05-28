import ImageFixed from "next/image"
import Link from "@/components/Link"

const Card = ({ alt, src, link, heading, children }) => {
  return (
    <div className="py-8 md:px-3 sm:px-4 sm:first:pl-0 sm:first:pr-4 sm:last:pl-4 sm:last:pr-0 md:first:pr-3 md:last:pl-3 sm:py-0 first:pt-0 first:pb-8 last:pt-8 last:pb-0 sm:first:py-0 sm:last:py-0">
      {src && (
        <div className="relative m-auto h-36">
          <ImageFixed
            alt={alt}
            src={src}
            className="object-cover rounded-full"
            layout="fill"
            sizes="33vw"
            preload={true}
          />
        </div>
      )}

      <h2 className="py-4 font-serif text-3xl font-bold text-center sm:text-2xl md:text-3xl">
        <Link href={link} className="no-underline">
          {heading}
        </Link>
      </h2>

      <p className="text-lg xl:text-xl">{children}</p>
    </div>
  )
}

export default Card
