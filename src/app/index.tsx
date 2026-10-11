import { StyleSheet, View } from "react-native";
import TelaCredito from "./components/TelaCredito";

export default function Index() {
  return (
    <View style={styles.container}>
      <TelaCredito />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});