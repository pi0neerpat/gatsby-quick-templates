import React, { useContext, useEffect } from "react"
import { ethers } from "ethers"
import PropTypes from "prop-types"

import { Context } from "../context"
import DAIabi from "./contracts/dai"
import { CONTRACTS } from "./constants"

const Web3 = ({ children }) => {
  const [context, setContext] = useContext(Context)
  const { address } = context

  useEffect(() => {
    async function loadWeb3() {
      // Load the Web3 wallet
      if (typeof window.ethereum !== "undefined") {
        // Prevent MetaMask from page reloads on network change
        window.ethereum.autoRefreshOnNetworkChange = false

        // Load wallet.
        let walletAddress = ""
        try {
          walletAddress = await window.ethereum.enable()
          // eslint-disable-next-line no-console
          console.log(`Loaded address ${walletAddress}`)
        } catch (error) {
          // eslint-disable-next-line no-console
          console.log(`Failed to load wallet: ${error.message}`)
          setContext({
            ...context,
            isWeb3Present: true,
            error: `Failed to load wallet: ${error.message}`,
          })
        }
        setContext({
          ...context,
          isWeb3Present: true,
          address: walletAddress,
          error: "",
        })

        // Load contracts
        try {
          const walletProvider = new ethers.providers.Web3Provider(
            window.web3.currentProvider
          )

          const DAIContract = new ethers.Contract(
            CONTRACTS.dai.kovan,
            DAIabi,
            walletProvider.getSigner()
          )
          // Sanity Check
          const decimals = await DAIContract.decimals()
          // eslint-disable-next-line no-console
          console.log(decimals.toNumber())

          setContext(state => ({
            ...state,
            contracts: [DAIContract],
            provider: walletProvider,
          }))
        } catch (error) {
          // eslint-disable-next-line no-console
          console.log("Web3 Loading Error: ", error.message)
          setContext(state => ({
            ...state,
            error: `Web3 Loading Error 2: ${error}`,
          }))
        }
      } else {
        // Browser doesn't have Web3
        setContext({
          error: "Failed to load wallet: no window.ethereum",
        })
      }
    }
    loadWeb3()
  }, [])

  // Handle wallet events
  if (typeof window.ethereum !== "undefined") {
    // Detect when user changes their wallet address
    window.ethereum.on("accountsChanged", accounts => {
      // should update context when user change is detected
      if (address && address !== accounts[0]) {
        setContext({ ...context, address: accounts[0] })
        // eslint-disable-next-line no-console
        console.log(`Address was changed ${accounts[0]}`)
      }
    })
    // Detect when user changes the network
    window.ethereum.on("networkChanged", () => {
      // TODO add appropriate action
    })
  }

  return <>{children}</>
}

Web3.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Web3
