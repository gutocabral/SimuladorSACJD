/**
 * Calcula as parcelas do Sistema de Amortização Constante com Juros Redistribuídos (SACJD)
 * @param {number} capital - Valor total do empréstimo
 * @param {number} taxaJuros - Taxa de juros (decimal) por período
 * @param {number} numParcelas - Número total de parcelas
 * @param {number} periodoCarencia - Período de carência (em períodos)
 * @param {number} tipoPeriodo - 1 para anual, 2 para semestral
 * @returns {Array} Array com os detalhes de cada parcela
 */
function calcularSACJD(capital, taxaJuros, numParcelas, periodoCarencia, tipoPeriodo) {
    // Ajusta a taxa de juros se for semestral
    const taxaEfetiva = tipoPeriodo === 2 ? 
        Math.pow(1 + taxaJuros, 0.5) - 1 : taxaJuros;
    
    // Valor da parcela de capital (constante)
    const parcelaCapital = capital / numParcelas;
    
    // Array para armazenar os resultados
    const parcelas = [];
    
    // Variáveis de controle
    let jurosAcumulado = 0;
    let capitalRestante = capital;
    
    // Calcula juros durante o período de carência
    for (let i = 0; i < periodoCarencia; i++) {
        jurosAcumulado += capitalRestante * taxaEfetiva;
    }
    
    // Calcula as parcelas
    for (let i = 1; i <= numParcelas; i++) {
        // Acumula juros antes do pagamento da parcela
        jurosAcumulado += capitalRestante * taxaEfetiva;
        
        // Calcula a parcela de juros a amortizar
        const parcelasRestantes = numParcelas - i + 1;
        const parcelaJuros = jurosAcumulado / parcelasRestantes;
        
        // Calcula o valor total da parcela
        const valorParcela = parcelaCapital + parcelaJuros;
        
        // Atualiza o capital restante
        capitalRestante -= parcelaCapital;
        
        // Atualiza o juros acumulado após amortização
        const jurosAcumuladoAposAmortizacao = jurosAcumulado - parcelaJuros;
        jurosAcumulado = jurosAcumuladoAposAmortizacao;
        
        // Adiciona os dados da parcela ao array de resultados
        parcelas.push({
            numeroParcela: i,
            jurosAcumuladoAntes: parseFloat(jurosAcumulado + parcelaJuros).toFixed(2),
            parcelaJuros: parseFloat(parcelaJuros).toFixed(2),
            parcelaCapital: parseFloat(parcelaCapital).toFixed(2),
            valorParcela: parseFloat(valorParcela).toFixed(2),
            jurosAcumuladoApos: parseFloat(jurosAcumuladoAposAmortizacao).toFixed(2),
            capitalRestante: parseFloat(capitalRestante).toFixed(2)
        });
    }
    
    return parcelas;
}

// Exemplo de uso
const resultado = calcularSACJD(100000, 0.12, 5, 1, 1);
console.table(resultado);
