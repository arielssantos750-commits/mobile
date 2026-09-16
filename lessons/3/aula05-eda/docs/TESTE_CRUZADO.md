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

> O visitante disse que o botão do filtro parecia um texto solto e não ficava claro se era ação ou apenas legenda. Também achou que os cartões tinham pouca distinção visual entre “em atenção” e “adequado”.

### Autores

**Correção escolhida:**

> Ajustar o texto do botão para frases mais diretas, adicionar feedback visual durante o `pressed`, deixar o estado em texto (“Em atenção” / “Adequado”), usar imagem no cartão e manter o botão com área de toque compatível com 48 dp.

**Arquivo/trecho alterado:**

> app/index.tsx e components/CartaoIndicador.tsx — acessibilidade do filtro, feedback de toque e reorganização visual do cartão.

### Confirmação do visitante

Depois da correção, a tarefa ficou mais clara? `sim / parcialmente / não`

Comentário curto:

> Sim. O botão ficou mais fácil de identificar e a diferença entre os indicadores ficou mais clara.
