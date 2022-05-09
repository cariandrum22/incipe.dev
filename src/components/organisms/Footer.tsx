import React from "react"
import CCBYSA from "../../constants/CreativeCommons/BYSA"
import Copyright from "../atoms/Copyright"
import Links from "../molecules/SocialNetworkService/Links"
import GitHub from "../molecules/SocialNetworkService/GitHub"
import Twitter from "../molecules/SocialNetworkService/Twitter"
import Facebook from "../molecules/SocialNetworkService/Facebook"

type Author = GatsbyTypes.Maybe<
  Pick<
    GatsbyTypes.SiteSiteMetadataAuthor,
    "name" | "email" | "github" | "twitter" | "facebook"
  >
>

const Footer: React.FC<{ author: Author }> = ({ author }) => {
  const SNSLinks: Incipe.SocialNetworkService.Links = [
    GitHub(author?.github),
    Twitter(author?.twitter),
    Facebook(author?.facebook),
  ]
  return (
    <footer className="bg-white">
      <div className="py-12 px-4 mx-auto max-w-7xl sm:px-6 md:flex md:justify-between lg:px-8">
        <Links>{SNSLinks}</Links>
        <Copyright license={CCBYSA}>{author?.name}</Copyright>
      </div>
    </footer>
  )
}

export default Footer
