import BYNCButton from "../../../assets/CreativeCommons/button/by-nc.svg"

const BYNC: Incipe.CreativeCommons.License = {
  name: "Attribution-NonCommercial",
  abbreviation: "BY-NC",
  deed: new URL("https://creativecommons.org/licenses/by-nc/4.0/"),
  leagalCode: new URL(
    "https://creativecommons.org/licenses/by-nc/4.0/legalcode"
  ),
  button: BYNCButton,
  version: 4.0,
}
export default BYNC
