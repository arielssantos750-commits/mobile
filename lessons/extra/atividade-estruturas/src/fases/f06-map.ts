/**
 * F06 — Map
 * Edite somente os TODOs deste arquivo.
 * Verificação: npm run check
 */
import { TODO } from "../lib/todo";

// TODO F06-A01
export function criarNotasPorAluno(): Map<string, number> {
  return new Map([
    ["Ana", 8.5],
    ["Bruno", 7],
    ["Carla", 9],
  ]);
}

// TODO F06-A02
export function registrarNota(
  notas: Map<string, number>,
  nome: string,
  nota: number,
): Map<string, number> {
  notas.set(nome, nota);
  return notas;
}

// TODO F06-A03
export function consultarNota(notas: Map<string, number>, nome: string): number | undefined {
  return notas.get(nome);
}

// TODO F06-A04
export function atualizarNota(
  notas: Map<string, number>,
  nome: string,
  novaNota: number,
): Map<string, number> {
  notas.set(nome, novaNota);
  return notas;
}

// TODO F06-A05
export function mapearTresNotas(
  nome1: string,
  nota1: number,
  nome2: string,
  nota2: number,
  nome3: string,
  nota3: number,
): Map<string, number> {
  return new Map([
    [nome1, nota1],
    [nome2, nota2],
    [nome3, nota3],
  ]);
}
