import React from "react"
import Button from "../atoms/Button/Link"

type Props = {
  className: string
}

const SingInSignUp: React.FC<Props> = ({ className }) => (
  <div className={className}>
    <Button href="#" className="bg-indigo-500 text-white hover:bg-opacity-75">
      Sign in
    </Button>
    <Button href="#" className="bg-white text-indigo-600 hover:bg-indigo-50">
      Sign up
    </Button>
  </div>
)

export default SingInSignUp
