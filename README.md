# Sistema de Amortização Constante com Juros Redistribuídos (SACJD)

## Sobre o Projeto

Este projeto implementa um algoritmo para cálculo de um sistema de amortização alternativo que denominamos "Sistema de Amortização Constante com Juros Redistribuídos" (SACJD). Este sistema combina características do Sistema de Amortização Constante (SAC) tradicional com uma abordagem diferenciada para o tratamento dos juros.

## Características do SACJD

O SACJD possui as seguintes características principais:

- **Capital dividido em parcelas iguais**: Similar ao SAC tradicional, o valor principal do empréstimo é dividido em parcelas iguais.
- **Redistribuição de juros**: Os juros acumulados são distribuídos proporcionalmente entre as parcelas restantes.
- **Parcelas crescentes**: Diferente do SAC tradicional, as parcelas aumentam a cada vencimento.
- **Suporte a período de carência**: Possibilidade de configurar um período inicial onde apenas os juros acumulam, sem pagamentos.
- **Flexibilidade de periodicidade**: Suporte para pagamentos anuais ou semestrais.


## Como Funciona

1. O valor do capital é dividido em parcelas iguais.
2. O valor dos juros a amortizar a cada parcela equivale ao juro total acumulado dividido pela quantidade de parcelas faltantes.
3. O valor da parcela a ser pago equivale à soma da parcela do capital mais a parcela dos juros.
4. A cada vencimento, o valor da parcela aumenta.
5. Durante o período de carência (se configurado), os juros acumulam normalmente, mas não há pagamentos.


## Comparação entre SAC e SACJD

A tabela abaixo apresenta uma comparação entre o Sistema de Amortização Constante (SAC) tradicional e o Sistema de Amortização Constante com Juros Redistribuídos (SACJD) para um empréstimo com as seguintes características:

- Capital: R\$ 10.000,00
- Taxa de juros: 10% ao ano
- Número de parcelas: 10
- Período de carência: 2 anos
- Periodicidade: Anual


### Tabela Comparativa

| Parcela | SAC |  |  |  | SACJD |  |  |  |
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
| \# | Juros | Capital | Total | Saldo Devedor | Juros | Capital | Total | Saldo Devedor |
| 1 | 1.000,00 | 1.000,00 | 2.000,00 | 9.000,00 | 300,00 | 1.000,00 | 1.300,00 | 9.000,00 |
| 2 | 900,00 | 1.000,00 | 1.900,00 | 8.000,00 | 400,00 | 1.000,00 | 1.400,00 | 8.000,00 |
| 3 | 800,00 | 1.000,00 | 1.800,00 | 7.000,00 | 500,00 | 1.000,00 | 1.500,00 | 7.000,00 |
| 4 | 700,00 | 1.000,00 | 1.700,00 | 6.000,00 | 600,00 | 1.000,00 | 1.600,00 | 6.000,00 |
| 5 | 600,00 | 1.000,00 | 1.600,00 | 5.000,00 | 700,00 | 1.000,00 | 1.700,00 | 5.000,00 |
| 6 | 500,00 | 1.000,00 | 1.500,00 | 4.000,00 | 800,00 | 1.000,00 | 1.800,00 | 4.000,00 |
| 7 | 400,00 | 1.000,00 | 1.400,00 | 3.000,00 | 900,00 | 1.000,00 | 1.900,00 | 3.000,00 |
| 8 | 300,00 | 1.000,00 | 1.300,00 | 2.000,00 | 1.000,00 | 1.000,00 | 2.000,00 | 2.000,00 |
| 9 | 200,00 | 1.000,00 | 1.200,00 | 1.000,00 | 1.100,00 | 1.000,00 | 2.100,00 | 1.000,00 |
| 10 | 100,00 | 1.000,00 | 1.100,00 | 0,00 | 1.200,00 | 1.000,00 | 2.200,00 | 0,00 |

### Principais diferenças

- **SAC**: As parcelas são decrescentes, começando com valores mais altos e diminuindo ao longo do tempo.
- **SACJD**: As parcelas são crescentes, começando com valores mais baixos e aumentando ao longo do tempo.
- **Total pago**:
    - SAC: R\$ 15.500,00
    - SACJD: R\$ 17.500,00


### Vantagens do SACJD

- Parcelas iniciais menores, facilitando o início do pagamento
- Distribuição mais equilibrada do esforço financeiro ao longo do tempo
- Adequado para financiamentos onde se espera aumento da capacidade de pagamento do tomador


### Vantagens do SAC

- Menor custo total do financiamento
- Amortização mais rápida do saldo devedor
- Adequado para quem prefere pagar mais no início e reduzir o compromisso financeiro ao longo do tempo



## Implementação Atual

Atualmente, o projeto consiste em um algoritmo JavaScript que calcula todos os componentes de cada parcela:

- Total de juros acumulado até cada vencimento
- Valor da parcela de juros a amortizar em cada vencimento
- Valor da parcela do capital a amortizar
- Valor dos juros acumulados após amortização
- Valor do capital restante após amortização


## Exemplo de Uso

```javascript
// Exemplo: Empréstimo de R$ 100.000,00 com taxa de 12% ao ano, 5 parcelas anuais e 1 período de carência
const resultado = calcularSACJD(100000, 0.12, 5, 1, 1);
console.table(resultado);
```


## Próximos Passos

Este projeto está em desenvolvimento ativo. Os próximos passos incluem:

- **Desenvolvimento de uma interface frontend em HTML/CSS/JavaScript** para permitir:
    - Entrada de dados pelo usuário
    - Visualização da tabela de amortização
    - Comparativos com outros sistemas de amortização



## Contribuições

Contribuições são bem-vindas! Se você tem sugestões para melhorar o algoritmo ou deseja contribuir com o desenvolvimento do frontend, sinta-se à vontade para abrir uma issue ou enviar um pull request.

