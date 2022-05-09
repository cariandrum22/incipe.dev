import BYNCNDButton from "../../../assets/CreativeCommons/button/by-nc-nd.svg"

const BYNCND: Incipe.CreativeCommons.License = {
  name: "Attribution-NonCommercial-NoDerivs",
  abbreviation: "BY-NC-ND",
  deed: new URL("https://creativecommons.org/licenses/by-nc-nd/4.0/"),
  leagalCode: new URL(
    "https://creativecommons.org/licenses/by-nc-nd/4.0/legalcode"
  ),
  button: BYNCNDButton,
  version: 4.0,
}
export default BYNCND
