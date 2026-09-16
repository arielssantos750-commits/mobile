# Boss Fight — Teste Cego por Pares

## Regra dos 60 segundos

A dupla visitante usa a interface **sem receber explicação**. A dupla autora não pode apontar onde tocar.

### Visitante

- O que parece acionável?
- O toque produz resposta perceptível?
- Algum estado depende apenas de cor?
- O texto e a hierarquia estão claros?
- Há algo apertado, ambíguo ou difícil de tocar?

**Uma barreira observada:**

> O visitante disse que o cartão parecia apenas um bloco de texto e não sabia se era clicável. Depois do toque, a resposta visual era fraca e o texto de seleção não deixava claro o estado atual.

### Autores

**Correção escolhida:**

> Adicionar imagem ilustrativa, organizar título e legenda em layout horizontal, manter área de toque mínima de 48 dp, indicar "Selecionada" ou "Disponível" em texto e usar feedback de pressed no Pressable.

**Arquivo/trecho alterado:**

> components/CartaoMemoria.tsx — layout com View + Image + Flexbox, `accessibilityRole`, `accessibilityLabel`, `pressed` e texto de estado.

### Confirmação do visitante

Depois da correção, a tarefa ficou mais clara? `sim / parcialmente / não`

Comentário curto:

> Sim. O cartão ficou mais fácil de reconhecer como botão e o texto de estado deixou a seleção clara.
