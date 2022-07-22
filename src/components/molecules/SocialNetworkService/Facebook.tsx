import Icon from "../../atoms/Icon/Facebook"

type ID = Queries.Maybe<string>

const Facebook = (id: ID): Incipe.SocialNetworkService.Link => ({
  name: "Facebook",
  href: `https://facebook.com/${id}`,
  icon: (props: Incipe.Icon) => Icon(props),
})

export default Facebook
