import React from "react"
import Logo from "../atoms/Logo"
import Links from "../molecules/Navigation/Links"
// import SingInSignUp from "../molecules/SignInSignUp"

const navigation: Incipe.Links = [
  { name: "Blog", href: "/blog" },
  { name: "About", href: "/about" },
  { name: "Environments", href: "/environments" },
  // { name: "Laboratory", href: "/laboratory" },
]

type Props = {
  title: Queries.Maybe<string>
}

const Header: React.FC<Props> = ({ title }) => (
  <header className="bg-white">
    <nav
      className="sm:px-6　md:justify-between mx-auto max-w-7xl px-4 lg:px-8"
      aria-label="Top"
    >
      <div className="flex w-full items-center justify-between border-b border-slate-800 py-6 lg:border-none">
        <div className="flex items-center">
          <Logo text={title || "No title"} href="/" />
          <Links
            className="ml-20 hidden space-x-8 lg:block"
            links={navigation}
          />
        </div>
        {/*
        <SingInSignUp className="ml-10 space-x-4" />
        */}
      </div>
      <Links
        className="flex flex-wrap justify-center space-x-6 py-4 lg:hidden"
        links={navigation}
      />
    </nav>
  </header>
)

export default Header
