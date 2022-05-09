import React from "react"
import Logo from "../atoms/Logo"
import Links from "../molecules/Navigation/Links"
// import SingInSignUp from "../molecules/SignInSignUp"

const navigation: Incipe.Links = [
  { name: "Blog", href: "/blog" },
  { name: "About", href: "/about" },
  // { name: "Profile", href: "/profile" },
  // { name: "Laboratory", href: "/laboratory" },
]

type Props = {
  title: GatsbyTypes.Maybe<string>
}

const Header: React.FC<Props> = ({ title }) => (
  <header className="bg-white">
    <nav
      className="px-4 mx-auto max-w-7xl sm:px-6　md:justify-between lg:px-8"
      aria-label="Top"
    >
      <div className="flex justify-between items-center py-6 w-full border-b border-slate-800 lg:border-none">
        <div className="flex items-center">
          <Logo text={title || "No title"} href="/" />
          <Links
            className="hidden ml-20 space-x-8 lg:block"
            links={navigation}
          />
        </div>
        {/*
        <SingInSignUp className="ml-10 space-x-4" />
        */}
      </div>
      <Links
        className="flex flex-wrap justify-center py-4 space-x-6 lg:hidden"
        links={navigation}
      />
    </nav>
  </header>
)

export default Header
