import React, { Component } from "react"
import { View, Text, TouchableOpacity } from "react-native"

class Thankyou extends Component {
  render() {
    return (
      <View>
        <Text style={{ fontSize: 25 }}>
          Selamat! Saldo anda sekarang Rp{" "}
          {this.props.navigation.state.params.updatedSaldo}
        </Text>
        <TouchableOpacity onPress={() => this.props.navigation.popToTop()}>
          <Text>Back To Homepage</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default Thankyou

// 1. Tampilkan updated Saldo
// 2. Tampilkan terima kasih
// 3. Tampilkan Button Back to Homepage
