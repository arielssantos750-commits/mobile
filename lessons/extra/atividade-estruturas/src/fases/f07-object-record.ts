/**
 * F07 — Object e Record
 * Edite somente os TODOs deste arquivo.
 * Verificação: npm run check
 */
import { TODO } from "../lib/todo";

export type Aluno = {
  nome: string;
  idade: number;
  entregouAtividade: boolean;
};

// TODO F07-A01
export function criarAluno(nome: string, idade: number, entregouAtividade: boolean): Aluno {
  return { nome, idade, entregouAtividade };
}

// TODO F07-A02
export function nomeDoAluno(aluno: Aluno): string {
  return aluno.nome;
}

// TODO F07-A03
export function criarRegistroNotas(
  nome1: string,
  nota1: number,
  nome2: string,
  nota2: number,
): Record<string, number> {
  return { [nome1]: nota1, [nome2]: nota2 };
}

// TODO F07-A04
export function consultarRegistro(
  registro: Record<string, number>,
  nome: string,
): number | undefined {
  return registro[nome];
}
