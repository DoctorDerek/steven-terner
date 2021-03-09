import { useState } from "react"
import Link from "./Link"
import headerNavLinks from "@/data/headerNavLinks"

const MobileNav = () => {
  const [navShow, setNavShow] = useState(false)

  const onToggleNav = () => {
    setNavShow((status) => {
      if (status) {
        document.body.style.overflow = "auto"
      } else {
        // Prevent scrolling
        document.body.style.overflow = "hidden"
      }
      return !status
    })
  }

  return (
    <div className="sm:hidden">
      <button
        type="button"
        className="flex w-32 h-8 mx-1 rounded"
        aria-label="Toggle Menu"
        onClick={onToggleNav}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          className="w-8 ml-3 text-gray-900 bg-transparent border-2 border-gray-900 border-solid rounded fill-current dark:hover:text-gray-900 dark:border-gray-400 xl:text-2xl md:text-xl sm:flex sm:text-l hover:text-green-dark dark:text-gray-300 hover:bg-green-light"
        >
          {navShow ? (
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          ) : (
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          )}
        </svg>
        <div className="m-auto font-serif text-2xl font-bold text-gray-900 dark:text-gray-200">
          Menu
        </div>
      </button>
      <div
        className={
          "fixed w-full h-full top-48 right-0 bg-gray-200 dark:bg-gray-800 opacity-100 z-10 transform ease-in-out duration-300" +
          ` ${navShow ? "translate-x-0" : "translate-x-full"}`
        }
      >
        <button
          type="button"
          aria-label="toggle modal"
          className="fixed w-full h-full py-24 border-0 border-black border-solid cursor-auto focus:outline-none"
          onClick={onToggleNav}
        ></button>
        <nav className="flex flex-col content-center justify-between w-full px-4 mx-auto mt-8 text-center transform border-0 border-red-900 border-solid h-3/5">
          {headerNavLinks.map((link) => (
            <Link
              href={link.href}
              className="w-full max-w-sm py-2 mx-auto font-serif text-2xl font-bold tracking-widest rounded-3xl bg-green-lightest hover:text-black text-green-dark dark:bg-gray-200 hover:bg-green-light dark:hover:bg-green-light dark:hover:text-green-dark dark:hover:bg-gradient-to-r dark:hover:from-gray-500 dark:hover:to-green-lightest"
              onClick={onToggleNav}
              key={link.title}
            >
              {link.title}
            </Link>
          ))}
          <div>IEN</div>
        </nav>
      </div>
    </div>
  )
}

export default MobileNav
