export const FETCH_DATA = "FETCH_DATA"
export const fetchData = () => {
  return {
    type: FETCH_DATA
  }
}

export const HITUNG_SALDO = "HITUNG_SALDO"
export const hitungTotalSaldo = (saldoAmount, amountFromUser) => {
  const result = saldoAmount + parseInt(amountFromUser)
  console.log(result)
  // this.props.navigation.navigate("ThankyouPage", { updatedSaldo: result })
  return {
    type: HITUNG_SALDO,
    payload: result
  }
}
