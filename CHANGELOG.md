# Changelog - Calendário Religioso Católico

## [2.0.0] - 2026

### Novas Funcionalidades

#### Tempo Litúrgico Completo
- **Ano Litúrgico**: Cálculo automático do ano litúrgico (ex: 2025–2026)
- **Ciclo Dominical**: Determinação dos ciclos A, B, C para leituras dominicais
- **Ciclo Ferial**: Ciclos I e II para leituras feriais
- **Tempo Litúrgico**: Identificação de Advento, Natal, Quaresma, Páscoa e Tempo Comum
- **Cor Litúrgica**: Indicador visual da cor litúrgica do dia
- **Semana Litúrgica**: Número da semana dentro do tempo litúrgico

#### Painel de Detalhes Aprimorado
- Seção dedicada com todas as informações litúrgicas
- Indicador visual colorido para a cor litúrgica
- Layout mais organizado e informativo

### Melhorias Técnicas

#### mobile-dates.js
- Nova função `calcularTempoLiturgico(year, month, day)`
- Funções auxiliares:
  - `getAnoLiturgico()` - Calcula o ano litúrgico correto
  - `getCicloDominical()` - Retorna A, B ou C
  - `getTempoLiturgico()` - Identifica o tempo e cor litúrgica
  - `getSemanaLiturgica()` - Calcula a semana atual
  - `getPrimeiroDomingoAdvento()` - Base para cálculo do ano litúrgico
  - `getCorTriduo()` - Cores específicas do Tríduo Pascal

#### app.js
- Nova função `addTempoLiturgicoPanel()` para exibir informações litúrgicas
- Nova função `getCorColorIndicator()` para indicador visual de cores
- Integração automática das informações litúrgicas no painel de detalhes

#### README.md
- Documentação completa das cores litúrgicas e seus significados
- Instruções detalhadas de uso
- Seção sobre responsividade
- Sugestões para evoluções futuras

### Arquitetura

A arquitetura permanece modular com clara separação de responsabilidades:
- Dados (santoral.js)
- Cálculos litúrgicos (mobile-dates.js)
- Interface e interação (app.js)

---

## [1.0.0] - Versão Inicial

### Funcionalidades
- Calendário anual completo
- Santoral da CNBB com celebrações fixas
- Cálculo de datas móveis (Páscoa, Cinzas, Ramos, Ascensão, Pentecostes, etc.)
- Filtros por tipo de celebração
- Pesquisa por santos
- Design responsivo
- Interface moderna com tipografia clássica
