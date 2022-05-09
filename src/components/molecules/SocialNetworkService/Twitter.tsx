import Icon from "../../atoms/Icon/Twitter"

type ID = string | undefined

const Twitter = (id: ID): Incipe.SocialNetworkService.Link => ({
  name: "Twitter",
  href: `https://twitter.com/${id}`,
  icon: (props: Incipe.Icon) => Icon(props),
})

export default Twitter
