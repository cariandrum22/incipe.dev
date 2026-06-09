declare namespace Incipe {
  export interface Link {
    name: string
    href: string
  }

  export type Links = Array<Link>

  export namespace CreativeCommons {
    export type Abbreviation =
      | "BY"
      | "BY-SA"
      | "BY-ND"
      | "BY-NC"
      | "BY-NC-SA"
      | "BY-NC-ND"

    export type Name =
      | "Attribution"
      | "Attribution-ShareAlike"
      | "Attribution-NoDerivs"
      | "Attribution-NonCommercial"
      | "Attribution-NonCommercial-ShareAlike"
      | "Attribution-NonCommercial-NoDerivs"

    export type Version = 4.0

    export interface License {
      name: Name
      abbreviation: Abbreviation
      deed: URL
      leagalCode: URL
      button: React.FC<React.SVGProps<SVGElement>>
      version: Version
    }
  }

  export namespace SocialNetworkService {
    export interface Link {
      name: string
      href: string
      icon: ReactElement
    }

    export type Links = Array<Link>
  }

  export interface Icon {
    className?: string
    "aria-hidden"?: boolean
  }
}

export as namespace Incipe
