### Estratégias criadas até o momento


| Estratégia | Categoria       | Implementação   | Princípio                     | Objetivo                                                                    |  Estado Atual          |         Observações
| ---------- | --------------- | --------------  | ----------------------------- | --------------------------------------------------------------------------- |  --------------------- | 
| **1**      | Desvio          | ✅ Implementada | Desvio padrão simples         | Comprar abaixo da banda inferior e vender acima da superior                 | 🔴 Base               | Serve apenas como comparação. 
| **1.1**    | Desvio          | ✅ Implementada | Desvio extremo                | Exigir um afastamento maior das bandas                                      | 🟡 Experimental       | Reduz operações e evita ruídos.
| **2**      | Tendência       | ✅ Implementada | Derivada                      | Comprar quando a derivada fica positiva e vender quando negativa            | 🔴 Base               | Muito sensível ao ruído.
| **3**      | Híbrida         | ✅ Implementada | Desvio + derivada             | Exigir desvio e início de reversão                                          | 🟡 Experimental       | Primeiro filtro inteligente.
| **4**      | Híbrida         | ✅ Implementada | Desvio + derivada confirmada  | Confirmar que a reversão realmente começou                                  | 🟢 Benchmark          | Estratégia Referencia!
| **4.1**    | Híbrida         | ✅ Implementada | Versão extrema da 4           | Igual à 4, porém exigindo desvio maior                                      | 🟢 Promissora         | Menos operações, porém melhores
| **5**      | Tendência       | ✅ Implementada | Derivada mínima               | Ignorar pequenas oscilações                                                 | 🟡 Experimental       | Funciona melhor lateralização.
| **6**      | Proteção        | ✅ Implementada | Stop Loss clássico            | Encerrar perdas rapidamente                                                 | 🔴 Legado V1          | V1 o lucro era garantido
| **7**      | Proteção        | ✅ Implementada | Stop baseado em lucro líquido | Stop utilizando resultado real da posição                                   | 🟡 Em desenvolvimento | Correta para V2, simples
| **8**      | Lucro           | ✅ Implementada | Lucro confirmado              | Só vender após lucro líquido mínimo                                         | 🟡 Versão original    | sempre vende de imediato
| **8.1**    | Lucro           | ✅ Implementada | Lucro confirmado ajustado     | Espera lucro líquido mínimo e acompanha perda de força da tendência         | 🟢 Muito promissora   | Atualmente uma das melhores.
| **9**      | Financeira      | ✅ Implementada | Lucro real condicionado       | Venda baseada principalmente no lucro líquido                               | 🟡 Versão original    | Muito agressiva nas saídas.
| **9.1**    | Financeira      | ✅ Implementada | Lucro real + desvio extremo   | Une lucro líquido e entrada mais seletiva                                   | 🟢 Promissora         | Boa candidata para evoluir.
| **10**     | Extrema         | ✅ Implementada | Reversão extrema              | Opera apenas em desvios muito grandes                                       | 🟡 Experimental       | Pode passar horas sem operar. 
| **11**     | Tendência       | ✅ Implementada | Trailing Profit               | Após atingir lucro mínimo, seguir a máxima e vender apenas quando perder X% | 🟢 Promissora         | Semelhante ao Trailing Stop 
| **11.1**   | Tendência       | ✅ Implementada | Trailing Profit + lucro safe  | Tente atingir lucro máximo, mas se cai, garante lucro minimo                | 🟢 Muito Promissora   |Premissa de lucro garantido
| **11.2**   | Tendência       | ✅ Implementada | Trailing Profit + lucro max   | Tente atingir lucro máximo e se atualiza, mas se cai, garante lucro minimo  | 🟢 Muito Promissora   |Lucro garantido com crescimento
| **12**     | Tendência       | ✅ Implementada | Trailing Profit + min max win | Apenas compra entre o valor minimo do dia e a derivada extrema              | 🟢 Muito Promissora   |Alto lucro, porem muito demorado
| **13**     | Tendência       | 💡 Ideia       | Média móvel da derivada       | Só vender quando a derivada média ficar negativa                            | 🔵 Planejada          | Evita vender pequenos repiques.
| **14**     | Volatilidade    | 💡 Ideia       | ATR / volatilidade            | Operar apenas quando houver movimento suficiente para pagar taxas           | 🔵 Planejada          | Deve reduzir operações ruins.
| **15**     | Momentum        | 💡 Ideia       | Confirmação por candles       | Comprar apenas após 2 ou 3 candles consecutivos de recuperação              | 🔵 Planejada          | Evita pegar "facas caindo".
| **16**     | Tempo           | 💡 Ideia       | Tempo mínimo em posição       | Proibir venda antes de X segundos/minutos                                   | 🔵 Planejada          | Evita operações que pagam taxa.
| **17**     | Financeira      | 💡 Ideia       | Lucro alvo dinâmico           | Lucro mínimo varia conforme volatilidade do mercado                         | 🔵 Planejada          | Muito interessante para V2.
| **18**     | Tendência       | 💡 Ideia       | Força da tendência            | Compra somente quando derivada + aceleração forem positivas                 | 🔵 Planejada          | Usa velocidade e aceleração juntas.
| **19**     | Volume          | 💡 Ideia       | Volume comprador              | Exigir aumento de volume para validar entrada                               | 🔵 Planejada          | Excelente quando começar a usar Book/Ticker completo.                                                |
| **20**     | Inteligente     | 💡 Ideia       | Score                         | Cada indicador soma pontos e compra apenas acima de um score mínimo         | 🟣 Futuro             | Provavelmente será a arquitetura definitiva do projeto.
| **21**     | IA / Otimização | 💡 Ideia       | Otimização automática         | Ajustar parâmetros utilizando backtests                                     | 🟣 Futuro             | Fase final do projeto.

## Estratégia 1

É literalmente um Mean Reversion.

```
Preço ↓

Compra

↓

Preço ↑

Vende
```

Serve como controle.

Nunca apagaria.

---

## Estratégia 2

Só usa derivada.

É praticamente:

```
Subiu

Compra

↓

Desceu

Vende
```

Hoje eu considero fraca.

---

## Estratégia 3

Mistura duas confirmações.

```
Preço barato

+

Derivada positiva

↓

Compra
```

Muito melhor que a 2.

---

## Estratégia 4

Essa continua sendo sua melhor referência.

Ela espera a derivada realmente inverter.

```
Preço abaixo

+

Derivada positiva

+

Derivada aumentando

↓

Compra
```

Depois:

```
Preço acima

+

Derivada enfraquecendo

↓

Venda
```

Essa ainda é a estratégia que eu usaria como "baseline".

---

## Estratégia 5

É uma versão mais rígida.

Ao invés de aceitar qualquer derivada:

```
derivada > 5
```

Ela exige movimento realmente forte.

Boa em tendências.

Ruim em lateralização.

---

## Estratégia 6

Na prática ela virou

```
Estratégia 3

+

Stop Loss
```

Só que agora existe um problema.

Na V2 toda operação nasce negativa.

Então ela acaba brigando com as taxas.

Eu praticamente aposentaria essa versão.

---

## Estratégia 7

Essa já conversa com a carteira.

Ela pergunta

```
Quanto realmente estou ganhando?
```

e não

```
Quanto o BTC subiu?
```

Esse conceito é muito melhor.

Só precisa melhorar as condições.

---

## Estratégia 8

Essa eu gostei.

Ela faz algo parecido com:

```
Lucro líquido existe?

↓

Não

↓

Segura
```

Ou seja.

Ela não vende simplesmente porque chegou no desvio.

Ela exige lucro real.

Isso conversa perfeitamente com o simulador novo.

---

## Estratégia 9

Pelo trecho que vi, ela segue a ideia do lucro real da posição para decidir a venda. 

Na minha opinião ela já representa uma nova geração das estratégias.

Ela começa a pensar em dinheiro.

Não apenas em preço.

Esse é o caminho.

---

## Estratégia 10

Você inventou uma coisa interessante.

```
Desvio extremo

+

Derivada confirmada

↓

Compra
```

A ideia é excelente.

Meu medo é outro.

Ela pode passar horas sem operar.

Se o objetivo for aumentar qualidade, ótimo.

Se o objetivo for fazer vários trades, talvez seja restritiva demais.

---

# Como eu organizaria

### Grupo A — Estratégias de referência

* 1
* 2
* 3

Nunca apagar.

Servem para comparação.

---

### Grupo B — Estratégias realmente competitivas

* 4
* 5
* 8
* 9

Essas eu focaria em otimizar.

---

### Grupo C — Estratégias experimentais

* 6
* 7
* 10

Ainda estão procurando a identidade.

---

## Minha sugestão para o futuro

A partir de agora eu evitaria criar a Estratégia 11, 12, 13...

Em vez disso, eu faria uma evolução controlada, por exemplo:

* 4.1 → derivada confirmada + lucro mínimo
* 4.2 → 4.1 + volatilidade mínima
* 4.3 → 4.2 + filtro de lateralização

Assim você consegue medir exatamente qual modificação melhorou (ou piorou) o resultado, sem perder a origem da estratégia. Isso é muito mais próximo de como sistemas quantitativos são desenvolvidos e vai facilitar bastante quando você começar a comparar resultados em CSV e construir estatísticas.
