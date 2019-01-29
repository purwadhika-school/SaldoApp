/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react"
import { StyleSheet, Text, View } from "react-native"
import { Provider } from "react-redux"
import store from "./src/store/Store"

import Home from "./src/screens/Home"
import Thankyou from "./src/screens/Thankyou"
import Topup from "./src/screens/Topup"

import { createStackNavigator } from "react-navigation"

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Setup />
      </Provider>
    )
  }
}

// Bikin Router
const Router = createStackNavigator(
  {
    HomePage: {
      screen: Home
    },
    TopupPage: {
      screen: Topup
    },
    ThankyouPage: {
      screen: Thankyou
    }
  },
  {
    initialRouteName: "HomePage"
  }
)

export default Router

// 1. Navigasi ke halaman lain
// 2. Topup dan update saldo di halaman thankyou (Redux)
// 3. Update saldo di halaman Home dengan Redux
