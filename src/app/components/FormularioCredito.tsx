import { useState } from "react";
import { Alert, StyleSheet, View, Text, TextInput, Pressable, Switch } from "react-native";

export default function FormularioCredito() {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [renda, setRenda] = useState("");
  const [possuiCLT, setPossuiCLT] = useState(false);
  const [possuiDivida, setPossuiDivida] = useState(false);

  const calcularCredito = () => {
    if (!idade || !renda) {
      Alert.alert("Erro", "Preencha idade e renda.");
      return;
    }

    const idadeNum = Number(idade);
    const rendaNum = Number(renda.replace(/\./g, "").replace(",", "."));

    if (isNaN(idadeNum) || idadeNum < 18) {
      Alert.alert("Erro", "Idade inválida.");
      return;
    }

    if (isNaN(rendaNum) || rendaNum <= 0) {
      Alert.alert("Erro", "Renda inválida.");
      return;
    }

    if (possuiDivida) {
      Alert.alert(
        "SEM DIREITO A CRÉDITO",
        `Cliente: ${nome || "Correntista"}\nMotivo: Possui dívidas em aberto.`
      );
      return;
    }

    let percentualBase = 0;
    if (idadeNum <= 24) {
      percentualBase = 25;
    } else if (idadeNum <= 49) {
      percentualBase = 40;
    } else if (idadeNum <= 64) {
      percentualBase = 30;
    } else {
      percentualBase = 15;
    }

    const percentualFinal = possuiCLT ? percentualBase : percentualBase / 2;
    const valor = rendaNum * (percentualFinal / 100);

    const valorFormatado = valor.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

    Alert.alert(
      "CRÉDITO APROVADO",
      `Cliente: ${nome || "Correntista"}\n` +
        `Idade: ${idadeNum} anos\n` +
        `Renda: R$ ${rendaNum.toLocaleString("pt-BR")}\n` +
        `CLT: ${possuiCLT ? "Sim" : "Não"}\n` +
        `Percentual: ${percentualFinal}%\n\n` +
        `Valor aprovado: ${valorFormatado}`
    );
  };

  const limpar = () => {
    setNome("");
    setIdade("");
    setRenda("");
    setPossuiCLT(false);
    setPossuiDivida(false);
  };

  return (
    <View>
      <Text style={styles.label}>Nome do Correntista</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: João da Silva"
        value={nome}
        onChangeText={setNome}
      />

      <Text style={styles.label}>Idade</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: 35"
        keyboardType="numeric"
        value={idade}
        onChangeText={setIdade}
      />

      <Text style={styles.label}>Renda Anual (R$)</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: 80000"
        keyboardType="numeric"
        value={renda}
        onChangeText={setRenda}
      />

      <View style={styles.linhaSwitch}>
        <Text style={styles.label}>Possui vínculo CLT?</Text>
        <Switch
          value={possuiCLT}
          onValueChange={setPossuiCLT}
          trackColor={{ false: "#ccc", true: "#015CA9" }}
        />
      </View>

      <View style={styles.linhaSwitch}>
        <Text style={styles.label}>Possui dívidas?</Text>
        <Switch
          value={possuiDivida}
          onValueChange={setPossuiDivida}
          trackColor={{ false: "#ccc", true: "#dc2626" }}
        />
      </View>

      <Pressable style={styles.botaoAnalisar} onPress={calcularCredito}>
        <Text style={styles.textoBotao}>Analisar Crédito</Text>
      </Pressable>

      <Pressable style={styles.botaoLimpar} onPress={limpar}>
        <Text style={styles.textoBotaoLimpar}>Limpar</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 4,
    color: "#333",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    marginBottom: 14,
    backgroundColor: "#fff",
    fontSize: 15,
  },
  linhaSwitch: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 14,
  },
  botaoAnalisar: {
    backgroundColor: "#F59700",
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  textoBotao: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  botaoLimpar: {
    backgroundColor: "#e2e8f0",
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  textoBotaoLimpar: {
    color: "#333",
    fontWeight: "600",
    fontSize: 15,
  },
});