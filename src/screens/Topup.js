import React, { Component } from "react"
import { View, Text, TextInput, TouchableOpacity } from "react-native"
import { connect } from "react-redux"
import { hitungTotalSaldo } from "../actions/index"

class Topup extends Component {
  constructor(props) {
    super(props)

    this.state = {
      amountFromUser: "0" // String
    }
  }

  static navigationOptions = {
    header: null
  }

  render() {
    // console.log(this.props)
    const { saldoAmount } = this.props.navigation.state.params
    return (
      <View>
        <Text style={{ fontSize: 25 }}>Current saldo: Rp {saldoAmount}</Text>
        <TextInput
          keyboardType={"number-pad"}
          placeholder="Masukkan amount Topup"
          onChangeText={txt => this.setState({ amountFromUser: txt })}
        />
        <TouchableOpacity
          style={{ backgroundColor: "green" }}
          onPress={() =>
            this.props.dispatch(
              hitungTotalSaldo(saldoAmount, this.state.amountFromUser)
            )
          }
        >
          <Text style={{ margin: 10, color: "white", fontSize: 15 }}>Pay</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default connect()(Topup)

// 1. Tampilkan current saldo
// 2. TextInput untuk menampung angka yg diinput user
// 3. Button di-click => menjumlahkan current saldo dan angka dari TextInput
