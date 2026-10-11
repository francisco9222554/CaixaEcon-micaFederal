import { StyleSheet, View, Text } from "react-native";
import FormularioCredito from "./FormularioCredito";
import RegrasCredito from "./RegrasCredito";

export default function TelaCredito() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Análise de Crédito - Caixa</Text>

      <FormularioCredito />
      <RegrasCredito />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f0f4f8",
  },
  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#015CA9",
    marginBottom: 20,
    textAlign: "center",
  },
});