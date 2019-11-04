import React from "react"
import PropTypes from "prop-types"
import { Provider } from "./src/components/context"
import Web3 from "./src/components/web3/web3"

export const wrapRootElement = ({ element }) => (
  <Provider>
    <Web3>{element} </Web3>
  </Provider>
)

wrapRootElement.propTypes = {
  element: PropTypes.node.isRequired,
}
