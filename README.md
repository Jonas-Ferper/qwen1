# Calendário Religioso Católico - Brasil

Um calendário anual de datas religiosas do Brasil, com foco nas principais celebrações do calendário católico em um formato de calendário civil tradicional.

## 📋 Características

- **Santoral da CNBB**: Inclui solenidades, festas, memórias obrigatórias, memórias facultativas e santos celebrados no Brasil
- **Datas Móveis**: Calcula automaticamente as datas móveis importantes:
  - Quarta-feira de Cinzas
  - Domingo de Ramos
  - Páscoa da Ressurreição
  - Ascensão do Senhor
  - Pentecostes
  - Santíssima Trindade
  - Corpus Christi
  - Sagrado Coração de Jesus
  - Cristo Rei do Universo
- **Interface Moderna**: Design limpo e intuitivo, semelhante a um calendário convencional
- **Seleção de Ano**: Permite selecionar qualquer ano entre 1900 e 2100
- **Visualização Detalhada**: Clique em qualquer dia para ver todas as celebrações

## 🎨 Tipos de Celebração

| Tipo | Descrição | Cor |
|------|-----------|-----|
| Solenidade | Maior grau de importância litúrgica | Vermelho |
| Festa | Celebração de importância significativa | Laranja |
| Memória Obrigatória | Celebração que deve ser observada | Azul |
| Memória Facultativa | Celebração opcional | Cinza |

## 📁 Estrutura do Projeto

```
/workspace
├── index.html          # Página principal
├── styles.css          # Estilos CSS
├── santoral.js         # Dados do Santoral da CNBB
├── mobile-dates.js     # Cálculo de datas móveis
├── app.js              # Lógica da aplicação
└── README.md           # Este arquivo
```

## 🚀 Como Usar

1. Abra o arquivo `index.html` em um navegador moderno
2. Use os botões ◀ e ▶ para navegar entre os anos
3. Ou digite diretamente o ano desejado no campo de entrada
4. Clique em qualquer dia para ver os detalhes das celebrações

## 🏗️ Arquitetura

O projeto segue uma arquitetura que separa claramente:

1. **Dados do Santoral** (`santoral.js`): Contém todas as celebrações fixas do calendário, organizadas por mês e dia
2. **Cálculo de Datas Móveis** (`mobile-dates.js`): Implementa o algoritmo de Gauss para calcular a Páscoa e deriva todas as outras datas móveis
3. **Aplicação Principal** (`app.js`): Gerencia a renderização do calendário e interações do usuário

## 🇧🇷 Santos e Beatos Brasileiros Incluídos

- São Frei Galvão (28 de abril)
- Santa Dulce dos Pobres (19 de setembro)
- Beata Madre Paulina (17 de outubro)
- Nossa Senhora Aparecida (celebração especial)

## 🔧 Personalização

Para adicionar novas celebrações ou modificar as existentes, edite o arquivo `santoral.js`. A estrutura é simples:

```javascript
{
    mes: [
        { day: dia, type: 'tipo', name: 'Nome da Celebração' }
    ]
}
```

Tipos disponíveis: `solemnity`, `feast`, `memorial`, `optional`

## 📄 Licença

Este projeto é de código aberto e pode ser usado livremente.