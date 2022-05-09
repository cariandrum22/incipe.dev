import BYNDButton from "../../../assets/CreativeCommons/button/by-nd.svg"

const BYND: Incipe.CreativeCommons.License = {
  name: "Attribution-NoDerivs",
  abbreviation: "BY-ND",
  deed: new URL("https://creativecommons.org/licenses/by-nd/4.0/"),
  leagalCode: new URL(
    "https://creativecommons.org/licenses/by-nd/4.0/legalcode"
  ),
  button: BYNDButton,
  version: 4.0,
}
export default BYND
