# M1 — Scanner de Barreiras

**Regra:** durante os primeiros 60 segundos, não altere o código. Use o app.

| # | Barreira observada | Evidência concreta | Quem pode ser prejudicado? | Prioridade |
|---|---|---|---|---|
| 1 | Falta de feedback visual ao pressionar | O cartão muda pouco ao tocar e não parece que recebeu ação. | Usuários que dependem de confirmação visual e de resposta percebida. | alta |
| 2 | Estado importante depende só da cor | A seleção aparece em verde, mas o texto não informa claramente se a memória está selecionada. | Pessoas com baixa visão ou daltonismo. | alta |
| 3 | Layout apertado e pouco legível | O texto está perto da borda e sem uma hierarquia clara entre imagem, título e ação. | Leitores com dificuldade de foco visual. | média |
| 4 | Sem nome acessível para a ação | O componente parece ser um botão, mas não informa ao leitor de tela o que será acionado. | Usuários de leitor de tela. | alta |

## Duas barreiras que vamos corrigir primeiro

1. O cartão não sinaliza ao pressionar e pode parecer "inativo".
2. O estado da seleção não é legível em texto e a ação ainda não tem nome acessível.

## Perguntas de apoio

- O que parece acionável?
- O toque dá uma resposta perceptível?
- Algum estado importante depende só de cor?
- O conteúdo está apertado ou sem hierarquia?
- A ação teria um nome compreensível para um leitor de tela?
- O alvo de toque parece pequeno?
