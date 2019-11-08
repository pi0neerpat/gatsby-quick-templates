import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../Layout"

const PowerUpsData = [
  {
    name: "Watering can",
    perWeek: "+0.001",
    total: "0.003",
    price: "20",
    backgroundColor: "#DDFAFF",
    primaryColor: "#062333",
    buttonColor: "#1DADFE",
    boxShadow: "0 17px 20px -5px rgba(177,233,255,1)",
    emoji: "💧",
  },
  {
    name: "Fertilizer",
    perWeek: "+0.005",
    total: "0.003",
    price: "50",
    backgroundColor: "#FFE5CF",
    primaryColor: "#572A01",
    buttonColor: "#724412",
    boxShadow: "0 17px 20px -5px rgba(226,193,164,1)",
    emoji: "💩",
  },
  {
    name: "Private Sun",
    perWeek: "+0.005",
    total: "0.003",
    price: "150",
    backgroundColor: "#FFEFC8",
    primaryColor: "#8D5A00",
    buttonColor: "#E79F24",
    boxShadow: "0 17px 20px -5px rgba(249,221,162,1)",
    emoji: "🌞",
  },
]

const growingTreeData = [
  {
    currentGrowth: "0.003",
    perWeekGrowth: "0.0001",
  },
]

const PowerUps = styled.div`
  width: 420px;
  position: absolute;
  left: 30px;
  bottom: 30px;
`

const PowerUp = styled.div`
  width: 100%;
  display: flex;
  background-color: red;
  margin-bottom: 20px;
  border-radius: 100px;
  padding: 10px;
  height: 80px;

  h3 {
    font-size: 22px;
    margin: 6px 0 0 0;
    padding: 0;
  }

  h5 {
    font-size: 14px;
    position: relative;
    margin: 6px 25px 0 0;
    padding: 0;
    display: inline-flex;
  }

  h5:last-child::before {
    content: "";
    width: 6px;
    height: 6px;
    border-radius: 3px;
    position: absolute;
    left: -15px;
    top: 4px;
    display: block;
    background-color: black;
    opacity: 0.2;
  }

  button {
    font-family: "Inter";
    font-size: 18px;
    font-weight: 700;
    color: white;
    border: 0;
    border-radius: 50px;
    align-self: center;
    margin-left: auto;
    padding: 12px 16px;
    width: 100px;
    margin-right: 5px;
    transition: all 0.2s ease;

    &:hover {
      stroke: 0;
      outline: 0;
      transform: translateY(-2px);
      transition: transform 0.2s ease;
      cursor: pointer;
    }

    &:active {
      stroke: 0;
      outline: 0;
      transform: scale(0.98);
      transition: transform 0.2s ease;
    }

    &:focus {
      outline: 0;
    }
  }
`

const EmojiContainer = styled.div`
  display: block;
  width: 60px;
  height: 60px;
  padding-top: 5px;
  background-color: white;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  text-align: center;
  margin-right: 10px;
`

const CounterContainer = styled.div`
  margin: 0 auto;
  text-align: center;

  h1 {
    font-family: "Inter", sans-serif;
    font-weight: 900;
    letter-spacing: -0.2px;
    font-size: 64px;
    text-align: center;
    max-width: 600px;
    margin: 0 auto;
    color: #0e0544;
  }

  h5 {
    margin: 10px 0;
    font-family: "Inter", sans-serif;
    color: #0e0544;
  }
`
const PowerUpsList = () => (
  <PowerUps>
    {PowerUpsData.map(item => (
      <PowerUp
        style={{
          color: item.primaryColor,
          backgroundColor: item.backgroundColor,
        }}
      >
        <EmojiContainer
          style={{
            boxShadow: item.boxShadow,
          }}
        >
          {item.emoji}
        </EmojiContainer>
        <div>
          <h3>{item.name}</h3>
          <h5>{item.perWeek}/week</h5>
          <h5>{item.total} total</h5>
        </div>
        <button
          style={{
            backgroundColor: item.buttonColor,
            boxShadow: item.boxShadow,
          }}
        >
          {item.price}
          <span style={{ fontSize: "16px" }}> DAI</span>
        </button>
      </PowerUp>
    ))}
  </PowerUps>
)

const SecondPage = () => (
  <Layout>
    <PowerUpsList />
    {growingTreeData.map(item => (
      <CounterContainer
        style={{
          color: item.primaryColor,
          backgroundColor: item.backgroundColor,
        }}
      >
        <h5>Current tree</h5>
        <h1>{item.currentGrowth}</h1>
        <h5>+{item.perWeekGrowth} per week</h5>
      </CounterContainer>
    ))}
  </Layout>
)

export default SecondPage
