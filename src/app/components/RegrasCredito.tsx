import { StyleSheet, View, Text } from "react-native";

export default function RegrasCredito() {
  return (
    <View style={styles.regras}>
      <Text style={styles.regrasTitulo}>Regras:</Text>
      <Text style={styles.regra}>• Até 24 anos → 25%</Text>
      <Text style={styles.regra}>• 25 a 49 anos → 40%</Text>
      <Text style={styles.regra}>• 50 a 64 anos → 30%</Text>
      <Text style={styles.regra}>• 65 ou mais → 15%</Text>
      <Text style={styles.regra}>• Sem CLT → percentual pela metade</Text>
      <Text style={styles.regra}>• Com dívida → sem direito a crédito</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  regras: {
    marginTop: 24,
    padding: 14,
    backgroundColor: "#fff",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  regrasTitulo: {
    fontWeight: "bold",
    fontSize: 15,
    color: "#015CA9",
    marginBottom: 8,
  },
  regra: {
    fontSize: 13,
    color: "#555",
    marginBottom: 3,
  },
});