/**
 * Cálculo de Datas Móveis da Páscoa e Celebrações Relacionadas
 * 
 * Algoritmo baseado no cálculo da Páscoa (algoritmo de Gauss)
 * para determinar as datas móveis do calendário litúrgico católico.
 */

const MobileDates = {
    /**
     * Calcula a data da Páscoa para um determinado ano
     * @param {number} year - Ano
     * @returns {Date} Data da Páscoa
     */
    calcularPascoa(year) {
        const a = year % 19;
        const b = Math.floor(year / 100);
        const c = year % 100;
        const d = Math.floor(b / 4);
        const e = b % 4;
        const f = Math.floor((b + 8) / 25);
        const g = Math.floor((b - f + 1) / 3);
        const h = (19 * a + b - d - g + 15) % 30;
        const i = Math.floor(c / 4);
        const k = c % 4;
        const l = (32 + 2 * e + 2 * i - h - k) % 7;
        const m = Math.floor((a + 11 * h + 22 * l) / 451);
        
        const mes = Math.floor((h + l - 7 * m + 114) / 31) - 1; // Mês base 0
        const dia = ((h + l - 7 * m + 114) % 31) + 1;
        
        return new Date(year, mes, dia);
    },

    /**
     * Calcula todas as datas móveis relacionadas à Páscoa
     * @param {number} year - Ano
     * @returns {Object} Objeto com todas as datas móveis
     */
    calcularDatasMoveis(year) {
        const pascoa = this.calcularPascoa(year);
        
        // Helper para adicionar/subtrair dias
        const addDays = (date, days) => {
            const result = new Date(date);
            result.setDate(result.getDate() + days);
            return result;
        };

        // Helper para obter o domingo anterior
        const getPreviousSunday = (date, weeksBefore) => {
            const result = new Date(date);
            result.setDate(result.getDate() - (weeksBefore * 7));
            return result;
        };

        // Helper para obter a quinta-feira anterior
        const getPreviousThursday = (date, weeksBefore) => {
            const result = new Date(date);
            result.setDate(result.getDate() - (weeksBefore * 7) - 3);
            return result;
        };

        // Helper para obter a quarta-feira anterior
        const getPreviousWednesday = (date, weeksBefore) => {
            const result = new Date(date);
            result.setDate(result.getDate() - (weeksBefore * 7) - 4);
            return result;
        };

        // Helper para obter o sábado anterior
        const getPreviousSaturday = (date, weeksBefore) => {
            const result = new Date(date);
            result.setDate(result.getDate() - (weeksBefore * 7) - 1);
            return result;
        };

        // Datas da Quaresma e Tempo Pascal
        const quartaCinzas = getPreviousWednesday(pascoa, 6);
        const primeiroDomingoQuaresma = getPreviousSunday(pascoa, 6);
        const segundoDomingoQuaresma = getPreviousSunday(pascoa, 5);
        const terceiroDomingoQuaresma = getPreviousSunday(pascoa, 4);
        const quartoDomingoQuaresma = getPreviousSunday(pascoa, 3);
        const quintoDomingoQuaresma = getPreviousSunday(pascoa, 2);
        const domingoRamos = getPreviousSunday(pascoa, 1);
        
        // Tríduo Pascal
        const quintaFeiraSanta = getPreviousThursday(pascoa, 0);
        const sextaFeiraSanta = addDays(quintaFeiraSanta, 1);
        const sabadoSanto = addDays(sextaFeiraSanta, 1);
        
        // Tempo Pascal
        const ascensao = addDays(pascoa, 39); // 40º dia (contando a Páscoa)
        const pentecostes = addDays(pascoa, 49); // 50º dia
        const santissimaTrindade = addDays(pentecostes, 7);
        const corpusChristi = addDays(santissimaTrindade, 4); // Quinta-feira após a Trindade
        const sagradoCoracaoJesus = addDays(corpusChristi, 8); // Sexta-feira após Corpus Christi
        
        // Final do Ano Litúrgico
        const cristoRei = addDays(pentecostes, 147); // 34º domingo do tempo comum
        
        return {
            pascoa,
            quartaCinzas,
            primeiroDomingoQuaresma,
            segundoDomingoQuaresma,
            terceiroDomingoQuaresma,
            quartoDomingoQuaresma,
            quintoDomingoQuaresma,
            domingoRamos,
            quintaFeiraSanta,
            sextaFeiraSanta,
            sabadoSanto,
            ascensao,
            pentecostes,
            santissimaTrindade,
            corpusChristi,
            sagradoCoracaoJesus,
            cristoRei
        };
    },

    /**
     * Formata uma data para exibição
     * @param {Date} date - Data
     * @returns {string} Data formatada
     */
    formatarData(date) {
        const dia = String(date.getDate()).padStart(2, '0');
        const mes = String(date.getMonth() + 1).padStart(2, '0');
        return `${dia}/${mes}`;
    },

    /**
     * Obtém as celebrações de datas móveis para um mês específico
     * @param {number} year - Ano
     * @param {number} month - Mês (1-12)
     * @param {number} day - Dia (1-31)
     * @returns {Array} Array de celebrações
     */
    getCelebracoesMoveis(year, month, day) {
        const datasMoveis = this.calcularDatasMoveis(year);
        const celebracoes = [];
        
        const targetDate = new Date(year, month - 1, day);
        
        // Verifica cada data móvel
        for (const [nome, data] of Object.entries(datasMoveis)) {
            if (data.getDate() === day && data.getMonth() === month - 1) {
                celebracoes.push({
                    name: this.getNomeCelebracao(nome),
                    type: this.getTypeCelebracao(nome),
                    isMobile: true
                });
            }
        }
        
        return celebracoes;
    },

    /**
     * Obtém o nome formatado da celebração
     * @param {string} nome - Nome interno da celebração
     * @returns {string} Nome formatado
     */
    getNomeCelebracao(nome) {
        const nomes = {
            pascoa: 'Páscoa da Ressurreição',
            quartaCinzas: 'Quarta-feira de Cinzas',
            primeiroDomingoQuaresma: '1º Domingo da Quaresma',
            segundoDomingoQuaresma: '2º Domingo da Quaresma',
            terceiroDomingoQuaresma: '3º Domingo da Quaresma',
            quartoDomingoQuaresma: '4º Domingo da Quaresma',
            quintoDomingoQuaresma: '5º Domingo da Quaresma',
            domingoRamos: 'Domingo de Ramos da Paixão do Senhor',
            quintaFeiraSanta: 'Quinta-feira Santa',
            sextaFeiraSanta: 'Sexta-feira Santa da Paixão do Senhor',
            sabadoSanto: 'Sábado Santo',
            ascensao: 'Ascensão do Senhor',
            pentecostes: 'Pentecostes',
            santissimaTrindade: 'Santíssima Trindade',
            corpusChristi: 'Corpus Christi',
            sagradoCoracaoJesus: 'Sagrado Coração de Jesus',
            cristoRei: 'Cristo Rei do Universo'
        };
        
        return nomes[nome] || nome;
    },

    /**
     * Obtém o tipo da celebração
     * @param {string} nome - Nome interno da celebração
     * @returns {string} Tipo da celebração
     */
    getTypeCelebracao(nome) {
        const tipos = {
            pascoa: 'solemnity',
            quartaCinzas: 'feast',
            primeiroDomingoQuaresma: 'feast',
            segundoDomingoQuaresma: 'feast',
            terceiroDomingoQuaresma: 'feast',
            quartoDomingoQuaresma: 'feast',
            quintoDomingoQuaresma: 'feast',
            domingoRamos: 'solemnity',
            quintaFeiraSanta: 'feast',
            sextaFeiraSanta: 'feast',
            sabadoSanto: 'feast',
            ascensao: 'solemnity',
            pentecostes: 'solemnity',
            santissimaTrindade: 'solemnity',
            corpusChristi: 'solemnity',
            sagradoCoracaoJesus: 'feast',
            cristoRei: 'solemnity'
        };
        
        return tipos[nome] || 'optional';
    },

    /**
     * Verifica se uma data é uma data móvel
     * @param {number} year - Ano
     * @param {number} month - Mês
     * @param {number} day - Dia
     * @returns {boolean} True se for data móvel
     */
    isDataMovil(year, month, day) {
        const celebracoes = this.getCelebracoesMoveis(year, month, day);
        return celebracoes.length > 0;
    }
};

// Exporta para uso global
window.MobileDates = MobileDates;

/**
 * Obtém todas as datas móveis de um ano
 * @param {number} year - Ano
 * @returns {Object} Objeto com todas as datas móveis
 */
function getDatasMoveis(year) {
    const pascoa = calcularPascoa(year);
    
    return {
        quartaCinzas: new Date(year, 2, pascoa.day - 46),
        domingoRamos: new Date(year, 2, pascoa.day - 7),
        pascoa: new Date(year, 2, pascoa.day),
        ascensao: new Date(year, 3, pascoa.day + 39),
        pentecostes: new Date(year, 3, pascoa.day + 49),
        trindade: new Date(year, 3, pascoa.day + 56),
        corpusChristi: new Date(year, 3, pascoa.day + 60),
        sagradoCoracao: new Date(year, 3, pascoa.day + 68),
        cristoRei: new Date(year, 9, 1 + (7 - new Date(year, 9, 1).getDay()) % 7) // Último domingo de novembro
    };
}

// Adiciona ao objeto exportado
window.MobileDates.getDatasMoveis = getDatasMoveis;
