import React from "react"
import CCBYSA from "../../constants/CreativeCommons/BYSA"
import Copyright from "../atoms/Copyright"
import Links from "../molecules/SocialNetworkService/Links"
import GitHub from "../molecules/SocialNetworkService/GitHub"
import Twitter from "../molecules/SocialNetworkService/Twitter"
import Facebook from "../molecules/SocialNetworkService/Facebook"
import type { SiteMetadata } from "../../config/siteMetadata"

type Author = SiteMetadata["author"]

const Footer: React.FC<{ author: Author }> = ({ author }) => {
  const SNSLinks: Incipe.SocialNetworkService.Links = [
    GitHub(author.github),
    Twitter(author.twitter),
    Facebook(author.facebook),
  ]
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:flex md:justify-between lg:px-8">
        <Links>{SNSLinks}</Links>
        <Copyright license={CCBYSA}>{author.name}</Copyright>
      </div>
    </footer>
  )
}

export default Footer
