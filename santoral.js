/**
 * Santoral da CNBB - Calendário de Santos e Celebrações Católicas no Brasil
 * 
 * Tipos de celebração:
 * - solemnity: Solenidade (maior importância litúrgica)
 * - feast: Festa
 * - memorial: Memória Obrigatória
 * - optional: Memória Facultativa
 * 
 * Formato: { mes: dia, type: 'tipo', name: 'Nome da Celebração' }
 */

const SANTORAL_CNBB = {
    // Janeiro
    1: [
        { day: 1, type: 'solemnity', name: 'Santa Maria, Mãe de Deus' },
        { day: 2, type: 'optional', name: 'São Basílio Magno e São Gregório Nazianzeno' },
        { day: 3, type: 'optional', name: 'Santíssimo Nome de Jesus' },
        { day: 5, type: 'optional', name: 'São João Neumann' },
        { day: 6, type: 'feast', name: 'Epifania do Senhor' },
        { day: 7, type: 'optional', name: 'São Raimundo de Peñafort' },
        { day: 13, type: 'memorial', name: 'Santo Hilário' },
        { day: 15, type: 'optional', name: 'São Paulo, Primeiro Eremita' },
        { day: 17, type: 'memorial', name: 'Santo Antão' },
        { day: 20, type: 'memorial', name: 'São Sebastião' },
        { day: 21, type: 'memorial', name: 'Santa Inês' },
        { day: 22, type: 'optional', name: 'São Vicente' },
        { day: 24, type: 'memorial', name: 'São Francisco de Sales' },
        { day: 25, type: 'feast', name: 'Conversão de São Paulo' },
        { day: 26, type: 'memorial', name: 'Santos Timóteo e Tito' },
        { day: 27, type: 'memorial', name: 'Santa Ângela Merici' },
        { day: 28, type: 'memorial', name: 'São Tomás de Aquino' },
        { day: 31, type: 'memorial', name: 'São João Bosco' }
    ],
    
    // Fevereiro
    2: [
        { day: 2, type: 'feast', name: 'Apresentação do Senhor' },
        { day: 3, type: 'memorial', name: 'São Brás e São Ansgário' },
        { day: 5, type: 'memorial', name: 'Santa Ágata' },
        { day: 6, type: 'optional', name: 'Santos Paulo Miki e Companheiros' },
        { day: 8, type: 'optional', name: 'São Jerônimo Emiliani' },
        { day: 10, type: 'memorial', name: 'Santa Escolástica' },
        { day: 11, type: 'memorial', name: 'Nossa Senhora de Lourdes' },
        { day: 14, type: 'memorial', name: 'Santos Cirilo e Metódio' },
        { day: 15, type: 'optional', name: 'Santos Irmãos Servitas' },
        { day: 17, type: 'optional', name: 'Sete Santos Fundadores' },
        { day: 21, type: 'optional', name: 'São Pedro Damião' },
        { day: 22, type: 'feast', name: 'Cátedra de São Pedro' },
        { day: 23, type: 'memorial', name: 'São Policarpo' }
    ],
    
    // Março
    3: [
        { day: 4, type: 'optional', name: 'São Casimiro' },
        { day: 7, type: 'memorial', name: 'Santa Perpétua e Santa Felicidade' },
        { day: 8, type: 'optional', name: 'São João de Deus' },
        { day: 9, type: 'optional', name: 'Santa Francisca Romana' },
        { day: 12, type: 'optional', name: 'São Luís Orione' },
        { day: 17, type: 'optional', name: 'Santa Gertrudes' },
        { day: 18, type: 'optional', name: 'São Cirilo de Jerusalém' },
        { day: 19, type: 'solemnity', name: 'São José, Esposo da Virgem Maria' },
        { day: 21, type: 'optional', name: 'São Nicolau de Flue' },
        { day: 23, type: 'optional', name: 'São Turíbio de Mogrovejo' },
        { day: 25, type: 'solemnity', name: 'Anunciação do Senhor' },
        { day: 27, type: 'optional', name: 'São João Batista de La Salle' },
        { day: 28, type: 'optional', name: 'São Sixto III' }
    ],
    
    // Abril
    4: [
        { day: 2, type: 'optional', name: 'São Francisco de Paula' },
        { day: 4, type: 'optional', name: 'São Isidoro' },
        { day: 5, type: 'optional', name: 'São Vicente Ferrer' },
        { day: 7, type: 'optional', name: 'São João Batista de La Salle' },
        { day: 11, type: 'optional', name: 'São Estanislau' },
        { day: 13, type: 'optional', name: 'São Martinho I' },
        { day: 21, type: 'optional', name: 'São Anselmo' },
        { day: 22, type: 'optional', name: 'Santos Caio e Soter' },
        { day: 23, type: 'optional', name: 'São Jorge' },
        { day: 24, type: 'optional', name: 'São Fidelis de Sigmaringen' },
        { day: 25, type: 'feast', name: 'São Marcos, Evangelista' },
        { day: 28, type: 'optional', name: 'São Luís Grignion de Montfort' },
        { day: 29, type: 'memorial', name: 'Santa Catarina de Siena' },
        { day: 30, type: 'optional', name: 'São Pio V' }
    ],
    
    // Maio
    5: [
        { day: 1, type: 'memorial', name: 'São José Operário' },
        { day: 2, type: 'optional', name: 'Santo Atanásio' },
        { day: 3, type: 'feast', name: 'Santos Filipe e Tiago, Apóstolos' },
        { day: 4, type: 'optional', name: 'Santa Mônica' },
        { day: 6, type: 'optional', name: 'Santos Nereu e Aquileu' },
        { day: 8, type: 'optional', name: 'São Victor III' },
        { day: 12, type: 'optional', name: 'Santos Nereu, Aquileu e Pancrácio' },
        { day: 13, type: 'memorial', name: 'Nossa Senhora de Fátima' },
        { day: 14, type: 'optional', name: 'São Matias, Apóstolo' },
        { day: 15, type: 'optional', name: 'São João Batista de La Salle' },
        { day: 18, type: 'optional', name: 'São João I' },
        { day: 20, type: 'optional', name: 'São Bernardino de Sena' },
        { day: 22, type: 'optional', name: 'Santa Joana' },
        { day: 24, type: 'optional', name: 'Maria Auxiliadora' },
        { day: 25, type: 'optional', name: 'São Beda Venerável' },
        { day: 26, type: 'optional', name: 'São Filipe Néri' },
        { day: 27, type: 'optional', name: 'Santo Agostinho de Cantuária' },
        { day: 31, type: 'feast', name: 'Visitação de Nossa Senhora' }
    ],
    
    // Junho
    6: [
        { day: 1, type: 'optional', name: 'São Justino' },
        { day: 2, type: 'memorial', name: 'Santos Marcelino e Pedro' },
        { day: 3, type: 'memorial', name: 'Santos Carlos Lwanga e Companheiros' },
        { day: 5, type: 'optional', name: 'São Bonifácio' },
        { day: 6, type: 'optional', name: 'São Norberto' },
        { day: 9, type: 'optional', name: 'Santos Primo e Feliciano' },
        { day: 11, type: 'memorial', name: 'São Barnabé, Apóstolo' },
        { day: 13, type: 'memorial', name: 'Santo Antônio de Pádua' },
        { day: 19, type: 'optional', name: 'São Romualdo' },
        { day: 20, type: 'optional', name: 'Silverio ou Vigílio' },
        { day: 21, type: 'optional', name: 'São Luís Gonzaga' },
        { day: 22, type: 'optional', name: 'Paulino de Nola ou John Fisher e Thomas More' },
        { day: 24, type: 'solemnity', name: 'Natividade de São João Batista' },
        { day: 27, type: 'optional', name: 'São Cirilo de Alexandria' },
        { day: 28, type: 'optional', name: 'São Ireneu' },
        { day: 29, type: 'solemnity', name: 'Santos Pedro e Paulo, Apóstolos' },
        { day: 30, type: 'memorial', name: 'Santos Primeiros Mártires da Igreja Romana' }
    ],
    
    // Julho
    7: [
        { day: 1, type: 'optional', name: 'Santos Protomártires da Igreja Romana' },
        { day: 3, type: 'feast', name: 'São Tomé, Apóstolo' },
        { day: 4, type: 'optional', name: 'Santa Isabel Rainha' },
        { day: 5, type: 'optional', name: 'São Antonio Maria Zaccaria' },
        { day: 6, type: 'optional', name: 'Santa Maria Goretti' },
        { day: 8, type: 'optional', name: 'São Quiliano e esposa' },
        { day: 9, type: 'optional', name: 'Santos Agostinho Zhao Rong e Companheiros' },
        { day: 11, type: 'memorial', name: 'São Bento' },
        { day: 13, type: 'optional', name: 'São Henrique' },
        { day: 14, type: 'optional', name: 'São Camilo de Léllis' },
        { day: 15, type: 'optional', name: 'São Boaventura' },
        { day: 16, type: 'memorial', name: 'Nossa Senhora do Carmo' },
        { day: 21, type: 'optional', name: 'São Lourenço de Brindisi' },
        { day: 22, type: 'feast', name: 'Santa Maria Madalena' },
        { day: 23, type: 'optional', name: 'Santa Brígida' },
        { day: 25, type: 'feast', name: 'São Tiago, Apóstolo' },
        { day: 26, type: 'memorial', name: 'Santos Joaquim e Ana' },
        { day: 29, type: 'memorial', name: 'Santa Marta' },
        { day: 30, type: 'optional', name: 'São Pedro Crisólogo' },
        { day: 31, type: 'memorial', name: 'Santo Inácio de Loyola' }
    ],
    
    // Agosto
    8: [
        { day: 1, type: 'optional', name: 'Santo Afonso Maria de Ligório' },
        { day: 2, type: 'optional', name: 'Santo Eusébio de Vercelli' },
        { day: 4, type: 'optional', name: 'São João Maria Vianney' },
        { day: 5, type: 'optional', name: 'Dedicação da Basílica de Santa Maria Maior' },
        { day: 6, type: 'feast', name: 'Transfiguração do Senhor' },
        { day: 7, type: 'optional', name: 'São Sixto II e Companheiros' },
        { day: 8, type: 'optional', name: 'São Domingos' },
        { day: 9, type: 'optional', name: 'Santa Teresa Benedita da Cruz' },
        { day: 10, type: 'feast', name: 'São Lourenço, Diácono e Mártir' },
        { day: 11, type: 'memorial', name: 'Santa Clara' },
        { day: 12, type: 'optional', name: 'Santa Joana Francisca de Chantal' },
        { day: 13, type: 'optional', name: 'Santos Pôncio e Cipriano' },
        { day: 14, type: 'optional', name: 'São Maximiliano Kolbe' },
        { day: 15, type: 'solemnity', name: 'Assunção de Nossa Senhora' },
        { day: 16, type: 'optional', name: 'São Roque' },
        { day: 17, type: 'optional', name: 'São Jacinto' },
        { day: 19, type: 'optional', name: 'São João Eudes' },
        { day: 20, type: 'optional', name: 'São Bernardo' },
        { day: 21, type: 'optional', name: 'São Pio X' },
        { day: 22, type: 'memorial', name: 'Maria Rainha' },
        { day: 23, type: 'optional', name: 'Santa Rosa de Lima' },
        { day: 24, type: 'memorial', name: 'São Bartolomeu, Apóstolo' },
        { day: 25, type: 'optional', name: 'São Luís IX' },
        { day: 27, type: 'optional', name: 'Santa Mônica' },
        { day: 28, type: 'memorial', name: 'Santo Agostinho' },
        { day: 29, type: 'memorial', name: 'Martírio de São João Batista' }
    ],
    
    // Setembro
    9: [
        { day: 3, type: 'optional', name: 'São Gregório Magno' },
        { day: 8, type: 'feast', name: 'Natividade de Nossa Senhora' },
        { day: 9, type: 'optional', name: 'São Pedro Claver' },
        { day: 10, type: 'optional', name: 'Santos Gorgônio e Companheiros' },
        { day: 12, type: 'optional', name: 'Santíssimo Nome de Maria' },
        { day: 13, type: 'memorial', name: 'São João Crisóstomo' },
        { day: 14, type: 'feast', name: 'Exaltação da Santa Cruz' },
        { day: 15, type: 'memorial', name: 'Nossa Senhora das Dores' },
        { day: 16, type: 'optional', name: 'Santos Cornélio e Cipriano' },
        { day: 17, type: 'optional', name: 'Santo Roberto Belarmino' },
        { day: 19, type: 'optional', name: 'São Januário' },
        { day: 20, type: 'optional', name: 'Santos André Kim Taegon e Companheiros' },
        { day: 21, type: 'feast', name: 'São Mateus, Apóstolo e Evangelista' },
        { day: 23, type: 'memorial', name: 'São Pio de Pietrelcina' },
        { day: 26, type: 'optional', name: 'Santos Cosme e Damião' },
        { day: 27, type: 'optional', name: 'São Vicente de Paulo' },
        { day: 28, type: 'optional', name: 'São Wenceslau' },
        { day: 29, type: 'feast', name: 'Santos Miguel, Gabriel e Rafael, Arcanjos' },
        { day: 30, type: 'memorial', name: 'São Jerônimo' }
    ],
    
    // Outubro
    10: [
        { day: 1, type: 'memorial', name: 'Santa Teresinha do Menino Jesus' },
        { day: 2, type: 'memorial', name: 'Santos Anjos da Guarda' },
        { day: 4, type: 'memorial', name: 'São Francisco de Assis' },
        { day: 5, type: 'optional', name: 'Santa Faustina Kowalska' },
        { day: 6, type: 'optional', name: 'São Bruno' },
        { day: 7, type: 'memorial', name: 'Nossa Senhora do Rosário' },
        { day: 9, type: 'optional', name: 'São Dionísio e Companheiros' },
        { day: 10, type: 'optional', name: 'São Francisco de Borja' },
        { day: 13, type: 'optional', name: 'Santo Eduardo' },
        { day: 14, type: 'optional', name: 'São Calisto I' },
        { day: 15, type: 'memorial', name: 'Santa Teresa de Ávila' },
        { day: 16, type: 'optional', name: 'Santa Edwiges' },
        { day: 17, type: 'optional', name: 'Santa Margarida Maria Alacoque' },
        { day: 18, type: 'feast', name: 'São Lucas, Evangelista' },
        { day: 19, type: 'optional', name: 'Santos Isaac Jogues e Companheiros' },
        { day: 23, type: 'optional', name: 'São João de Capistrano' },
        { day: 24, type: 'optional', name: 'São Antônio Maria Claret' },
        { day: 28, type: 'feast', name: 'Santos Simão e Judas Tadeu, Apóstolos' },
        { day: 31, type: 'optional', name: 'Santo Afonso Rodrigues' }
    ],
    
    // Novembro
    11: [
        { day: 1, type: 'solemnity', name: 'Todos os Santos' },
        { day: 2, type: 'optional', name: 'Comemoração dos Fiéis Defuntos' },
        { day: 3, type: 'optional', name: 'São Martinho de Porres' },
        { day: 4, type: 'optional', name: 'São Carlos Borromeu' },
        { day: 5, type: 'optional', name: 'Santos Zacarias e Isabel' },
        { day: 9, type: 'feast', name: 'Dedicação da Basílica de Latrão' },
        { day: 10, type: 'optional', name: 'São Leão Magno' },
        { day: 11, type: 'memorial', name: 'São Martinho de Tours' },
        { day: 12, type: 'optional', name: 'São Josafat' },
        { day: 13, type: 'optional', name: 'Santa Francisca Xavier Cabrini' },
        { day: 14, type: 'optional', name: 'São José Pignatelli' },
        { day: 15, type: 'optional', name: 'Santa Gertrudes' },
        { day: 16, type: 'optional', name: 'Santa Margarida da Escócia' },
        { day: 17, type: 'optional', name: 'Santa Isabel da Hungria' },
        { day: 18, type: 'memorial', name: 'Dedicação das Basílicas de São Pedro e São Paulo' },
        { day: 21, type: 'optional', name: 'Apresentação de Nossa Senhora' },
        { day: 22, type: 'optional', name: 'Santa Cecília' },
        { day: 23, type: 'optional', name: 'São Clemente I e São Columbano' },
        { day: 24, type: 'memorial', name: 'Santos André Dung-Lac e Companheiros' },
        { day: 25, type: 'optional', name: 'Santa Catarina de Alexandria' },
        { day: 30, type: 'feast', name: 'Santo André, Apóstolo' }
    ],
    
    // Dezembro
    12: [
        { day: 3, type: 'optional', name: 'São Francisco Xavier' },
        { day: 4, type: 'optional', name: 'São João Damasceno' },
        { day: 5, type: 'optional', name: 'São Geraldo' },
        { day: 6, type: 'optional', name: 'São Nicolau' },
        { day: 7, type: 'optional', name: 'Santo Ambrósio' },
        { day: 8, type: 'solemnity', name: 'Imaculada Conceição de Nossa Senhora' },
        { day: 9, type: 'optional', name: 'São Juan Diego' },
        { day: 11, type: 'optional', name: 'São Dâmaso I' },
        { day: 12, type: 'memorial', name: 'Nossa Senhora de Guadalupe' },
        { day: 13, type: 'memorial', name: 'Santa Luzia' },
        { day: 14, type: 'optional', name: 'São João da Cruz' },
        { day: 16, type: 'optional', name: 'Santos Inocêncio e Adelaide' },
        { day: 17, type: 'optional', name: 'Santo Eugênio' },
        { day: 18, type: 'optional', name: 'Santos Rufino e Valério' },
        { day: 21, type: 'optional', name: 'São Pedro Canísio' },
        { day: 23, type: 'optional', name: 'São João de Kety' },
        { day: 24, type: 'optional', name: 'Santos Adão e Eva' },
        { day: 25, type: 'solemnity', name: 'Natal do Senhor' },
        { day: 26, type: 'feast', name: 'Santo Estêvão, Protomártir' },
        { day: 27, type: 'feast', name: 'São João, Apóstolo e Evangelista' },
        { day: 28, type: 'feast', name: 'Santos Inocentes' },
        { day: 29, type: 'optional', name: 'São Tomás Becket' },
        { day: 31, type: 'optional', name: 'São Silvestre I' }
    ]
};

// Santos e Beatos Brasileiros
const SANTOS_BRASILEIROS = {
    3: [
        { day: 3, type: 'memorial', name: 'Beato Frei Galvão (Antônio de Sant\'Ana Galvão)' }
    ],
    4: [
        { day: 28, type: 'memorial', name: 'São Frei Galvão' }
    ],
    9: [
        { day: 19, type: 'memorial', name: 'Santas Dulce dos Pobres (Irmã Dulce)' }
    ],
    10: [
        { day: 17, type: 'memorial', name: 'Beata Madre Paulina' }
    ]
};

// Datas específicas do Brasil
const DATAS_BRASIL = {
    4: [
        { day: 21, type: 'optional', name: 'Nossa Senhora Aparecida (Padroeira do Brasil) - Aniversário de Brasília' }
    ],
    7: [
        { day: 9, type: 'optional', name: 'Nossa Senhora do Carmo - Padroeira do Estado de SP' }
    ]
};

/**
 * Combina todas as fontes do santoral
 */
function getSantoralCompleto() {
    const santoral = {};
    
    // Copia o santoral base
    for (let mes = 1; mes <= 12; mes++) {
        santoral[mes] = [...(SANTORAL_CNBB[mes] || [])];
    }
    
    // Adiciona santos brasileiros
    for (const mes in SANTOS_BRASILEIROS) {
        if (santoral[mes]) {
            santoral[mes] = [...santoral[mes], ...SANTOS_BRASILEIROS[mes]];
        } else {
            santoral[mes] = [...SANTOS_BRASILEIROS[mes]];
        }
    }
    
    // Adiciona datas específicas do Brasil
    for (const mes in DATAS_BRASIL) {
        if (santoral[mes]) {
            santoral[mes] = [...santoral[mes], ...DATAS_BRASIL[mes]];
        } else {
            santoral[mes] = [...DATAS_BRASIL[mes]];
        }
    }
    
    return santoral;
}

/**
 * Obtém as celebrações para uma data específica
 * @param {number} mes - Mês (1-12)
 * @param {number} dia - Dia (1-31)
 * @returns {Array} Array de celebrações
 */
function getCelebracoes(mes, dia) {
    const santoral = getSantoralCompleto();
    if (!santoral[mes]) return [];
    
    return santoral[mes].filter(c => c.day === dia);
}

/**
 * Exporta o santoral completo
 */
window.SANTORAL = {
    getSantoralCompleto,
    getCelebracoes,
    SANTORAL_CNBB,
    SANTOS_BRASILEIROS,
    DATAS_BRASIL
};
