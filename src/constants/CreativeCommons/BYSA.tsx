import BYSAButton from "../../../assets/CreativeCommons/button/by-sa.svg"

const BYSA: Incipe.CreativeCommons.License = {
  name: "Attribution-ShareAlike",
  abbreviation: "BY-SA",
  deed: new URL("https://creativecommons.org/licenses/by-sa/4.0/"),
  leagalCode: new URL(
    "https://creativecommons.org/licenses/by-sa/4.0/legalcode"
  ),
  button: BYSAButton,
  version: 4.0,
}

export default BYSA
