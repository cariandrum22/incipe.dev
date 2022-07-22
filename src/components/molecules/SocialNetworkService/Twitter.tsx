import Icon from "../../atoms/Icon/Twitter"

type ID = Queries.Maybe<string>

const Twitter = (id: ID): Incipe.SocialNetworkService.Link => ({
  name: "Twitter",
  href: `https://twitter.com/${id}`,
  icon: (props: Incipe.Icon) => Icon(props),
})

export default Twitter
