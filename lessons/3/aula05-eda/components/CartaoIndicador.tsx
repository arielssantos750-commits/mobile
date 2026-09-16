// AULA 5 — baseline já consolidada da Aula 4.
// O cartão é informativo e já recebe props tipadas. Nesta aula NÃO vamos recriá-lo.
import { Image, StyleSheet, Text, View } from "react-native";
import { formatarValor } from "../src/dominio";
import type { IndicadorEDA } from "../src/dominio";

type CartaoIndicadorProps = { indicador: IndicadorEDA };

export function CartaoIndicador({ indicador }: CartaoIndicadorProps) {
  const emAtencao = indicador.situacao === "atencao";

  return (
    <View style={[styles.cartao, emAtencao && styles.cartaoAtencao]}>
      <View style={styles.linhaPrincipal}>
        <Image
          source={require("../assets/images/painel-didatico.png")}
          style={styles.icone}
          resizeMode="cover"
        />

        <View style={styles.conteudo}>
          <View style={styles.linhaTitulo}>
            <Text style={styles.titulo}>{indicador.titulo}</Text>
            <Text style={[styles.situacao, emAtencao && styles.situacaoAtencao]}>
              {emAtencao ? "Em atenção" : "Adequado"}
            </Text>
          </View>

          <Text style={styles.valor}>{formatarValor(indicador.valor, indicador.unidade)}</Text>
          <Text style={styles.meta}>Meta didática: {formatarValor(indicador.meta, indicador.unidade)}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cartao: {
    backgroundColor: "#FFFFFF",
    borderColor: "#BBF7D0",
    borderLeftWidth: 6,
    borderRadius: 12,
    marginBottom: 12,
    padding: 16,
  },
  cartaoAtencao: { borderColor: "#B91C1C" },
  linhaPrincipal: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  icone: {
    width: 54,
    height: 54,
    borderRadius: 12,
    backgroundColor: "#E2E8F0",
  },
  conteudo: {
    flex: 1,
  },
  linhaTitulo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 8,
  },
  titulo: {
    color: "#0F172A",
    flex: 1,
    fontSize: 17,
    fontWeight: "700",
  },
  situacao: {
    color: "#166534",
    fontSize: 11,
    fontWeight: "800",
    textTransform: "uppercase",
  },
  situacaoAtencao: { color: "#B91C1C" },
  valor: {
    color: "#166534",
    fontSize: 30,
    fontWeight: "800",
    marginTop: 10,
  },
  meta: {
    color: "#64748B",
    fontSize: 14,
    marginTop: 4,
  },
});
