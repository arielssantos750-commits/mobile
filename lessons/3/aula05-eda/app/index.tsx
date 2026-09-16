import { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { CartaoIndicador } from "../components/CartaoIndicador";
import { INDICADORES } from "../src/dominio";

export default function Index() {
  const [somenteAtencao, setSomenteAtencao] = useState<boolean>(false);
  const indicadoresVisiveis = somenteAtencao
    ? INDICADORES.filter((indicador) => indicador.situacao === "atencao")
    : INDICADORES;

  function alternarFiltro(): void {
    setSomenteAtencao((valorAtual) => !valorAtual);
  }

  return (
    <SafeAreaView style={styles.tela}>
      <ScrollView contentContainerStyle={styles.conteudo}>
        <Text style={styles.marca}>IFMA · PROTÓTIPO DIDÁTICO</Text>
        <Text style={styles.titulo}>Painel EDA</Text>
        <Text style={styles.introducao}>Indicadores simulados de permanência estudantil.</Text>
        <Text style={styles.aviso}>DADOS FICTÍCIOS E AGREGADOS · Não representam uma turma real.</Text>

        <View style={styles.controles}>
          <Pressable
            accessibilityRole="button"
            accessibilityLabel={
              somenteAtencao
                ? "Mostrar todos os indicadores"
                : "Mostrar somente indicadores em atenção"
            }
            onPress={alternarFiltro}
            style={({ pressed }) => [
              styles.botao,
              somenteAtencao && styles.botaoAtivo,
              pressed && styles.botaoPressed,
            ]}
          >
            <Text style={[styles.textoBotao, somenteAtencao && styles.textoBotaoAtivo]}>
              {somenteAtencao ? "Mostrar todos" : "Somente em atenção"}
            </Text>
          </Pressable>

          <Text style={styles.contagem}>
            {indicadoresVisiveis.length} exibidos · {somenteAtencao ? "modo filtro" : "modo geral"}
          </Text>
        </View>

        <View style={styles.lista}>
          {indicadoresVisiveis.map((indicador) => (
            <CartaoIndicador key={indicador.id} indicador={indicador} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  tela: { flex: 1, backgroundColor: "#F8FAFC" },
  conteudo: {
    padding: 20,
    paddingBottom: 36,
    width: "100%",
    maxWidth: 720,
    alignSelf: "center",
  },
  marca: { color: "#B91C1C", fontSize: 12, fontWeight: "700" },
  titulo: { color: "#166534", fontSize: 30, fontWeight: "800", marginTop: 6 },
  introducao: { color: "#334155", fontSize: 16, lineHeight: 23, marginTop: 8 },
  aviso: { color: "#64748B", fontSize: 12, lineHeight: 18, marginTop: 8 },
  controles: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    gap: 12,
  },
  botao: {
    backgroundColor: "#FFFFFF",
    borderColor: "#166534",
    borderRadius: 999,
    borderWidth: 2,
    paddingHorizontal: 16,
    paddingVertical: 12,
    minHeight: 48,
    justifyContent: "center",
    alignItems: "center",
    flexShrink: 1,
  },
  botaoPressed: {
    backgroundColor: "#EFF6FF",
    borderColor: "#2563EB",
  },
  botaoAtivo: { backgroundColor: "#166534" },
  textoBotao: { color: "#166534", fontSize: 14, fontWeight: "700" },
  textoBotaoAtivo: { color: "#FFFFFF" },
  contagem: { color: "#64748B", fontSize: 14, flexShrink: 1, textAlign: "right" },
  lista: { marginTop: 16 },
});
