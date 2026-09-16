// AULA 5 — baseline já consolidada da Aula 4.
// O componente já existe e recebe props tipadas. Nesta aula NÃO vamos recriá-lo.
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { criarLegenda } from "../src/dominio";
import type { Memoria } from "../src/dominio";

type CartaoMemoriaProps = {
  memoria: Memoria;
  selecionada: boolean;
  aoSelecionar: (id: number) => void;
};

export function CartaoMemoria({ memoria, selecionada, aoSelecionar }: CartaoMemoriaProps) {
  const descricaoEstado = selecionada ? "Selecionada" : "Disponível";

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={
        selecionada
          ? `Memória selecionada: ${memoria.titulo}`
          : `Selecionar memória: ${memoria.titulo}`
      }
      onPress={() => aoSelecionar(memoria.id)}
      style={({ pressed }) => [
        styles.cartao,
        pressed && styles.cartaoPressed,
        selecionada && styles.cartaoSelecionado,
      ]}
    >
      <View style={styles.conteudoLinha}>
        <Image
          source={require("../assets/images/arquivo-didatico.png")}
          style={styles.icone}
          resizeMode="cover"
        />

        <View style={styles.textos}>
          <Text style={styles.titulo}>{memoria.titulo}</Text>
          <Text style={styles.legenda}>{criarLegenda(memoria)}</Text>
        </View>
      </View>

      <View style={styles.rodape}>
        <Text style={styles.estado}>{descricaoEstado}</Text>
        <Text style={styles.acao}>
          {selecionada ? "Toque para fechar" : "Toque para conhecer"}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  cartao: {
    backgroundColor: "#FFFFFF",
    borderColor: "#CBD5E1",
    borderWidth: 2,
    borderRadius: 14,
    padding: 14,
    marginBottom: 12,
    minHeight: 48,
    width: "100%",
    justifyContent: "center",
  },
  cartaoPressed: {
    backgroundColor: "#EFF6FF",
    borderColor: "#60A5FA",
  },
  cartaoSelecionado: {
    backgroundColor: "#F0FDF4",
    borderColor: "#2F9E41",
  },
  conteudoLinha: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  textos: {
    flex: 1,
  },
  icone: {
    width: 58,
    height: 58,
    borderRadius: 12,
    backgroundColor: "#E2E8F0",
  },
  titulo: {
    color: "#0F172A",
    fontSize: 18,
    fontWeight: "700",
  },
  legenda: {
    color: "#475569",
    fontSize: 14,
    marginTop: 5,
    lineHeight: 20,
  },
  rodape: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 12,
    gap: 8,
  },
  estado: {
    color: "#475569",
    fontSize: 12,
    fontWeight: "700",
    textTransform: "uppercase",
  },
  acao: {
    color: "#166534",
    fontSize: 14,
    fontWeight: "700",
  },
});
