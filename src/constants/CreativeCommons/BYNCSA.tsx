import BYNCSAButton from "../../../assets/CreativeCommons/button/by-nc-sa.svg"

const BYNCSA: Incipe.CreativeCommons.License = {
  name: "Attribution-NonCommercial-ShareAlike",
  abbreviation: "BY-NC-SA",
  deed: new URL("https://creativecommons.org/licenses/by-nc-sa/4.0/"),
  leagalCode: new URL(
    "https://creativecommons.org/licenses/by-nc-sa/4.0/legalcode"
  ),
  button: BYNCSAButton,
  version: 4.0,
}
export default BYNCSA
