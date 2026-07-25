/**
 * Aplicação Principal do Calendário Religioso Católico
 */

class CalendarioReligioso {
    constructor() {
        this.currentYear = new Date().getFullYear();
        this.currentMonth = new Date().getMonth();
        
        // Elementos do DOM
        this.monthSelect = document.getElementById('month-select');
        this.yearSelect = document.getElementById('year-select');
        this.calendarDays = document.getElementById('calendar-days');
        this.prevMonthBtn = document.getElementById('prev-month');
        this.nextMonthBtn = document.getElementById('next-month');
        this.prevYearBtn = document.getElementById('prev-year');
        this.nextYearBtn = document.getElementById('next-year');
        this.detailsPanel = document.getElementById('details-panel');
        this.closePanelBtn = document.getElementById('close-panel');
        this.panelDate = document.getElementById('panel-date');
        this.panelWeekday = document.getElementById('panel-weekday');
        this.panelContent = document.getElementById('panel-content');
        this.searchInput = document.getElementById('search-saint');
        this.searchResults = document.getElementById('search-results');
        this.mobileDatesList = document.getElementById('mobile-dates-list');
        this.filterCheckboxes = document.querySelectorAll('.filter-checkbox input');
        
        this.init();
    }

    init() {
        this.populateYearSelect();
        this.populateMonthSelect();
        this.setupEventListeners();
        this.renderCalendar();
        this.updateMobileDatesList();
        this.setupSearch();
        this.setupFilters();
    }

    populateYearSelect() {
        const startYear = 1900;
        const endYear = 2100;
        
        for (let year = startYear; year <= endYear; year++) {
            const option = document.createElement('option');
            option.value = year;
            option.textContent = year;
            if (year === this.currentYear) {
                option.selected = true;
            }
            this.yearSelect.appendChild(option);
        }
    }

    populateMonthSelect() {
        const monthNames = [
            'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
            'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
        ];
        
        monthNames.forEach((name, index) => {
            const option = document.createElement('option');
            option.value = index;
            option.textContent = name;
            if (index === this.currentMonth) {
                option.selected = true;
            }
            this.monthSelect.appendChild(option);
        });
    }

    setupEventListeners() {
        // Navegação de mês
        this.prevMonthBtn.addEventListener('click', () => this.changeMonth(-1));
        this.nextMonthBtn.addEventListener('click', () => this.changeMonth(1));
        
        // Navegação de ano
        this.prevYearBtn.addEventListener('click', () => this.changeYear(-1));
        this.nextYearBtn.addEventListener('click', () => this.changeYear(1));
        
        // Seletores
        this.monthSelect.addEventListener('change', (e) => {
            this.currentMonth = parseInt(e.target.value);
            this.renderCalendar();
        });
        
        this.yearSelect.addEventListener('change', (e) => {
            this.currentYear = parseInt(e.target.value);
            this.renderCalendar();
            this.updateMobileDatesList();
        });
        
        // Painel de detalhes
        this.closePanelBtn.addEventListener('click', () => this.closeDetailsPanel());
        
        // Fechar painel com ESC
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') this.closeDetailsPanel();
        });
    }

    changeMonth(delta) {
        this.currentMonth += delta;
        
        if (this.currentMonth < 0) {
            this.currentMonth = 11;
            this.changeYear(-1);
        } else if (this.currentMonth > 11) {
            this.currentMonth = 0;
            this.changeYear(1);
        }
        
        this.monthSelect.value = this.currentMonth;
        this.renderCalendar();
    }

    changeYear(delta) {
        const newYear = this.currentYear + delta;
        if (newYear >= 1900 && newYear <= 2100) {
            this.currentYear = newYear;
            this.yearSelect.value = newYear;
            this.renderCalendar();
            this.updateMobileDatesList();
        }
    }

    renderCalendar() {
        this.calendarDays.innerHTML = '';
        
        const firstDay = new Date(this.currentYear, this.currentMonth, 1);
        const lastDay = new Date(this.currentYear, this.currentMonth + 1, 0);
        const startDayOfWeek = firstDay.getDay();
        const totalDays = lastDay.getDate();
        
        const today = new Date();
        const isCurrentMonth = today.getFullYear() === this.currentYear && today.getMonth() === this.currentMonth;
        
        // Células vazias antes do primeiro dia
        for (let i = 0; i < startDayOfWeek; i++) {
            const emptyCell = document.createElement('div');
            emptyCell.className = 'day-cell empty';
            this.calendarDays.appendChild(emptyCell);
        }
        
        // Dias do mês
        for (let day = 1; day <= totalDays; day++) {
            const cell = document.createElement('div');
            cell.className = 'day-cell';
            
            const dateStr = `${this.currentYear}-${String(this.currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
            cell.dataset.date = dateStr;
            
            // Marca dia atual
            if (isCurrentMonth && day === today.getDate()) {
                cell.classList.add('today');
            }
            
            // Marca domingos
            const dayOfWeek = new Date(this.currentYear, this.currentMonth, day).getDay();
            if (dayOfWeek === 0) {
                cell.classList.add('sunday');
            }
            
            // Número do dia
            const dayNumber = document.createElement('div');
            dayNumber.className = 'day-number';
            
            const dayNumSpan = document.createElement('span');
            dayNumSpan.textContent = day;
            dayNumber.appendChild(dayNumSpan);
            
            // Marcadores de celebrações
            const celebrations = this.getCelebrationsForDate(this.currentMonth + 1, day);
            const markerTypes = this.getMarkerTypes(celebrations);
            
            if (markerTypes.length > 0) {
                const markersContainer = document.createElement('div');
                markersContainer.style.display = 'flex';
                markersContainer.style.gap = '3px';
                
                markerTypes.forEach(type => {
                    const marker = document.createElement('span');
                    marker.className = `day-marker marker-${type}`;
                    markersContainer.appendChild(marker);
                });
                
                dayNumber.appendChild(markersContainer);
            }
            
            cell.appendChild(dayNumber);
            
            // Lista de celebrações (resumo)
            if (celebrations.length > 0) {
                const celebrationList = document.createElement('div');
                celebrationList.className = 'celebration-list';
                
                const maxVisible = 3;
                celebrations.slice(0, maxVisible).forEach(celebration => {
                    const item = document.createElement('div');
                    item.className = `celebration-item ${celebration.type}`;
                    if (celebration.isMobile) {
                        item.classList.add('mobile-date');
                    }
                    item.textContent = celebration.name;
                    celebrationList.appendChild(item);
                });
                
                if (celebrations.length > maxVisible) {
                    const more = document.createElement('div');
                    more.className = 'celebration-item optional';
                    more.textContent = `+${celebrations.length - maxVisible} outra(s)`;
                    celebrationList.appendChild(more);
                }
                
                cell.appendChild(celebrationList);
            }
            
            // Evento de clique
            cell.addEventListener('click', () => this.showDayDetails(this.currentMonth + 1, day, celebrations));
            
            this.calendarDays.appendChild(cell);
        }
    }

    getMarkerTypes(celebrations) {
        const types = [];
        const typePriority = { solemnity: 0, feast: 1, obligatory: 2, optional: 3 };
        
        celebrations.forEach(c => {
            const type = c.type === 'memorial' ? 'obligatory' : c.type;
            if (!types.includes(type)) {
                types.push(type);
            }
        });
        
        return types.sort((a, b) => typePriority[a] - typePriority[b]);
    }

    getCelebrationsForDate(month, day) {
        const celebrations = [];
        
        // Celebrações fixas do santoral
        const fixedCelebrations = window.SANTORAL?.getCelebracoes(month, day) || [];
        celebrations.push(...fixedCelebrations);
        
        // Celebrações móveis
        const mobileCelebrations = window.MobileDates?.getCelebracoesMoveis(this.currentYear, month, day) || [];
        celebrations.push(...mobileCelebrations);
        
        // Filtra por filtros ativos
        const activeFilters = this.getActiveFilters();
        if (activeFilters.length > 0) {
            return celebrations.filter(c => this.matchesFilters(c, activeFilters));
        }
        
        // Ordena por tipo de importância
        const typeOrder = { solemnity: 0, feast: 1, memorial: 2, obligatory: 3, optional: 4 };
        celebrations.sort((a, b) => typeOrder[a.type] - typeOrder[b.type]);
        
        return celebrations;
    }

    getActiveFilters() {
        const active = [];
        this.filterCheckboxes.forEach(cb => {
            if (cb.checked && cb.value !== 'brazilian' && cb.value !== 'marian') {
                active.push(cb.value);
            }
        });
        return active;
    }

    matchesFilters(celebration, filters) {
        // Verifica filtros de tipo
        const typeMap = {
            solemnity: 'solemnity',
            feast: 'feast',
            memorial: 'obligatory',
            optional: 'optional'
        };
        
        const celebrationType = typeMap[celebration.type];
        if (!filters.includes(celebrationType)) {
            return false;
        }
        
        // Verifica filtro de santos brasileiros
        if (document.querySelector('input[value="brazilian"]')?.checked) {
            if (!celebration.brazilian) {
                return false;
            }
        }
        
        // Verifica filtro mariano
        if (document.querySelector('input[value="marian"]')?.checked) {
            const marianKeywords = ['maria', 'nossa senhora', 'madre de deus', 'conceição', 'assunção'];
            const nameLower = celebration.name.toLowerCase();
            if (!marianKeywords.some(keyword => nameLower.includes(keyword))) {
                return false;
            }
        }
        
        return true;
    }

    showDayDetails(month, day, celebrations) {
        const monthNames = [
            'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
            'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
        ];
        
        const weekdayNames = [
            'Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira',
            'Quinta-feira', 'Sexta-feira', 'Sábado'
        ];
        
        const date = new Date(this.currentYear, month - 1, day);
        
        this.panelDate.textContent = `${day} de ${monthNames[month - 1]} de ${this.currentYear}`;
        this.panelWeekday.textContent = weekdayNames[date.getDay()];
        
        if (celebrations.length === 0) {
            this.panelContent.innerHTML = '<p class="no-celebrations">Nenhuma celebração registrada para esta data.</p>';
        } else {
            this.panelContent.innerHTML = '';
            celebrations.forEach(celebration => {
                const detailDiv = document.createElement('div');
                detailDiv.className = `celebration-detail ${celebration.type}`;
                
                const title = document.createElement('h4');
                title.textContent = celebration.name;
                detailDiv.appendChild(title);
                
                const infoDiv = document.createElement('div');
                infoDiv.className = 'celebration-info';
                
                const typeText = this.getTypeText(celebration.type);
                infoDiv.innerHTML = `
                    <div class="info-row">
                        <strong>Tipo:</strong>
                        <span>${typeText}${celebration.isMobile ? ' (Data Móvel)' : ''}</span>
                    </div>
                `;
                
                if (celebration.brazilian) {
                    infoDiv.innerHTML += `
                        <div class="info-row">
                            <strong>Origem:</strong>
                            <span>Brasil</span>
                        </div>
                    `;
                }
                
                if (celebration.description) {
                    infoDiv.innerHTML += `
                        <div class="info-row" style="display: block; padding-top: 10px;">
                            <span style="color: #666; font-style: italic;">${celebration.description}</span>
                        </div>
                    `;
                }
                
                detailDiv.appendChild(infoDiv);
                this.panelContent.appendChild(detailDiv);
            });
        }
        
        // Abre o painel (responsivo)
        this.detailsPanel.classList.add('active');
    }

    closeDetailsPanel() {
        this.detailsPanel.classList.remove('active');
    }

    getTypeText(type) {
        const texts = {
            solemnity: 'Solenidade',
            feast: 'Festa',
            memorial: 'Memória Obrigatória',
            obligatory: 'Memória Obrigatória',
            optional: 'Memória Facultativa'
        };
        return texts[type] || type;
    }

    updateMobileDatesList() {
        const mobileDates = window.MobileDates?.getDatasMoveis(this.currentYear) || {};
        
        this.mobileDatesList.innerHTML = '';
        
        const mobileOrder = [
            'quartaCinzas', 'domingoRamos', 'pascoa', 'ascensao', 
            'pentecostes', 'trindade', 'corpusChristi', 'sagradoCoracao', 'cristoRei'
        ];
        
        const mobileNames = {
            quartaCinzas: 'Quarta-feira de Cinzas',
            domingoRamos: 'Domingo de Ramos',
            pascoa: 'Páscoa da Ressurreição',
            ascensao: 'Ascensão do Senhor',
            pentecostes: 'Pentecostes',
            trindade: 'Santíssima Trindade',
            corpusChristi: 'Corpus Christi',
            sagradoCoracao: 'Sagrado Coração de Jesus',
            cristoRei: 'Cristo Rei'
        };
        
        mobileOrder.forEach(key => {
            if (mobileDates[key]) {
                const date = new Date(mobileDates[key]);
                const day = date.getDate();
                const month = date.toLocaleDateString('pt-BR', { month: 'short' });
                
                const item = document.createElement('div');
                item.className = 'mobile-date-item';
                item.innerHTML = `
                    <div class="mobile-date-name">${mobileNames[key]}</div>
                    <div class="mobile-date-day">${day} de ${month}</div>
                `;
                this.mobileDatesList.appendChild(item);
            }
        });
    }

    setupSearch() {
        let searchTimeout;
        
        this.searchInput.addEventListener('input', (e) => {
            clearTimeout(searchTimeout);
            const query = e.target.value.trim().toLowerCase();
            
            if (query.length < 2) {
                this.searchResults.classList.remove('active');
                this.searchResults.innerHTML = '';
                return;
            }
            
            searchTimeout = setTimeout(() => {
                this.performSearch(query);
            }, 300);
        });
        
        // Fecha resultados ao clicar fora
        document.addEventListener('click', (e) => {
            if (!this.searchInput.contains(e.target) && !this.searchResults.contains(e.target)) {
                this.searchResults.classList.remove('active');
            }
        });
    }

    performSearch(query) {
        const results = [];
        const allCelebrations = window.SANTORAL?.getAllCelebrations() || [];
        
        // Adiciona datas móveis ao search
        const mobileDates = window.MobileDates?.getDatasMoveis(this.currentYear) || {};
        const mobileNames = {
            quartaCinzas: 'Quarta-feira de Cinzas',
            domingoRamos: 'Domingo de Ramos',
            pascoa: 'Páscoa da Ressurreição',
            ascensao: 'Ascensão do Senhor',
            pentecostes: 'Pentecostes',
            trindade: 'Santíssima Trindade',
            corpusChristi: 'Corpus Christi',
            sagradoCoracao: 'Sagrado Coração de Jesus',
            cristoRei: 'Cristo Rei'
        };
        
        Object.entries(mobileNames).forEach(([key, name]) => {
            if (name.toLowerCase().includes(query) && mobileDates[key]) {
                const date = new Date(mobileDates[key]);
                results.push({
                    name: name,
                    type: 'mobile',
                    date: date,
                    isMobile: true
                });
            }
        });
        
        // Busca no santoral
        allCelebrations.forEach(celebration => {
            if (celebration.name.toLowerCase().includes(query)) {
                results.push({
                    ...celebration,
                    date: new Date(this.currentYear, celebration.month - 1, celebration.day)
                });
            }
        });
        
        // Limita a 10 resultados
        const limitedResults = results.slice(0, 10);
        
        if (limitedResults.length === 0) {
            this.searchResults.innerHTML = '<div class="search-result-item">Nenhum resultado encontrado</div>';
        } else {
            this.searchResults.innerHTML = '';
            limitedResults.forEach(result => {
                const item = document.createElement('div');
                item.className = 'search-result-item';
                const dateStr = result.date.toLocaleDateString('pt-BR', { day: 'numeric', month: 'long' });
                item.innerHTML = `<strong>${result.name}</strong><br><small>${dateStr}</small>`;
                item.addEventListener('click', () => {
                    this.currentYear = result.date.getFullYear();
                    this.currentMonth = result.date.getMonth();
                    this.yearSelect.value = this.currentYear;
                    this.monthSelect.value = this.currentMonth;
                    this.renderCalendar();
                    this.searchResults.classList.remove('active');
                    this.searchInput.value = '';
                    
                    // Mostra detalhes
                    const celebrations = this.getCelebrationsForDate(result.date.getMonth() + 1, result.date.getDate());
                    this.showDayDetails(result.date.getMonth() + 1, result.date.getDate(), celebrations);
                });
                this.searchResults.appendChild(item);
            });
        }
        
        this.searchResults.classList.add('active');
    }

    setupFilters() {
        this.filterCheckboxes.forEach(cb => {
            cb.addEventListener('change', () => {
                this.renderCalendar();
            });
        });
    }
}

// Inicializa a aplicação quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
    window.calendarioApp = new CalendarioReligioso();
});
