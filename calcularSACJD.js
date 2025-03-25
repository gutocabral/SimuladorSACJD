/**
 * Calcula as parcelas do Sistema de Amortização Constante com Juros Redistribuídos (SACJD)
 * @param {number} capital - Valor total do empréstimo
 * @param {number} taxaJuros - Taxa de juros (decimal) por período
 * @param {number} numParcelas - Número total de parcelas
 * @param {number} periodoCarencia - Período de carência (em períodos)
 * @param {number} tipoPeriodo - 1 para anual, 2 para semestral
 * @returns {Array} Array com os detalhes de cada período
 */
function calcularSACJD(capital, taxaJuros, numParcelas, periodoCarencia, tipoPeriodo) {
    // Ajusta a taxa de juros se for semestral
    const taxaEfetiva = tipoPeriodo === 2 ? 
        Math.pow(1 + taxaJuros, 0.5) - 1 : taxaJuros;
    
    // Valor da parcela de capital (constante)
    const parcelaCapital = capital / numParcelas;
    
    // Array para armazenar os resultados
    const periodos = [];
    
    // Variáveis de controle
    let jurosAcumulado = 0;
    let capitalRestante = capital;
    let periodoTotal = periodoCarencia + numParcelas;
    
    // Calcula para todos os períodos (carência + parcelas)
    for (let i = 1; i <= periodoTotal; i++) {
        // Acumula juros
        jurosAcumulado += capitalRestante * taxaEfetiva;
        
        let tipo = i <= periodoCarencia ? "carência" : "parcela";
        
        // Corrige o cálculo de parcelas faltantes
        // Durante a carência, todas as parcelas ainda estão faltando
        // Após a carência, diminui conforme as parcelas são pagas
        let parcelasFaltantes = tipo === "carência" ? 
            numParcelas : 
            numParcelas - (i - periodoCarencia - 1);
        
        if (tipo === "carência") {
            periodos.push({
                numeroPeriodo: i,
                tipo: tipo,
                jurosAcumuladoAntes: parseFloat(jurosAcumulado).toFixed(2),
                parcelasFaltantes: parcelasFaltantes,
                parcelaJuros: "0.00",
                parcelaCapital: "0.00",
                valorParcela: "0.00",
                jurosAcumuladoApos: parseFloat(jurosAcumulado).toFixed(2),
                capitalRestante: parseFloat(capitalRestante).toFixed(2)
            });
        } else {
            // Calcula a parcela de juros a amortizar
            const parcelaJuros = jurosAcumulado / parcelasFaltantes;
            
            // Calcula o valor total da parcela
            const valorParcela = parcelaCapital + parcelaJuros;
            
            // Atualiza o capital restante
            capitalRestante -= parcelaCapital;
            
            // Atualiza o juros acumulado após amortização
            const jurosAcumuladoAposAmortizacao = jurosAcumulado - parcelaJuros;
            jurosAcumulado = jurosAcumuladoAposAmortizacao;
            
            periodos.push({
                numeroPeriodo: i,
                tipo: tipo,
                jurosAcumuladoAntes: parseFloat(jurosAcumulado + parcelaJuros).toFixed(2),
                parcelasFaltantes: parcelasFaltantes,
                parcelaJuros: parseFloat(parcelaJuros).toFixed(2),
                parcelaCapital: parseFloat(parcelaCapital).toFixed(2),
                valorParcela: parseFloat(valorParcela).toFixed(2),
                jurosAcumuladoApos: parseFloat(jurosAcumuladoAposAmortizacao).toFixed(2),
                capitalRestante: parseFloat(capitalRestante).toFixed(2)
            });
        }
    }
    
    return periodos;
}

// Exemplo de uso
const resultado = calcularSACJD(10000, 0.10, 10, 2, 1);
console.table(resultado);
