import React, { Component } from "react"
import { View, Text, TouchableOpacity } from "react-native"

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      saldoAmount: 100000 // Integer
    }
  }

  static navigationOptions = {
      title: 'Home Page'
  }

  render() {
    const { saldoAmount } = this.state
    return (
      <View>
        <Text style={{ fontSize: 25 }}>Saldo anda Rp. {saldoAmount}</Text>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate("TopupPage", { saldoAmount })
          }
          style={{ backgroundColor: "green", borderRadius: 10 }}
        >
          <Text style={{ margin: 20, fontSize: 25, color: "white" }}>
            Top Up
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default Home

// 1. Text amount ambil dari state local
// 2. Button ketika di-clicked akan mengarah ke page Topup
