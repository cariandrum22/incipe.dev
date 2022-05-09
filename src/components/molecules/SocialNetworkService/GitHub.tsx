import Icon from "../../atoms/Icon/GitHub"

type ID = string | undefined

const GitHub = (id: ID): Incipe.SocialNetworkService.Link => ({
  name: "GitHub",
  href: `https://github.com/${id}`,
  icon: (props: Incipe.Icon) => Icon(props),
})

export default GitHub
