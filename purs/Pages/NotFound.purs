module Pages.NotFound (mkNotFound) where

import Prelude
import React.Basic.DOM as D
import React.Basic.Hooks as React

mkNotFound :: React.Component {}
mkNotFound = do
  React.component "NotFound" \props -> React.do
    pure $ render props
  where
  render props =
    React.fragment
      [ D.div
          { className: "max-w-7xl mx-auto px-4 sm:px-6"
          , children:
              [ D.h2 { className: "text-2xl py-7", children: [ D.text "Not Found" ] } ]
          }
      ]
