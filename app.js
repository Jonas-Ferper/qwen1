/**
 * Aplicação Principal do Calendário Religioso Católico
 */

class CalendarioReligioso {
    constructor() {
        this.currentYear = new Date().getFullYear();
        this.calendarGrid = document.getElementById('calendarGrid');
        this.yearInput = document.getElementById('yearInput');
        this.prevYearBtn = document.getElementById('prevYear');
        this.nextYearBtn = document.getElementById('nextYear');
        this.modal = document.getElementById('dayModal');
        this.closeModalBtn = document.getElementById('closeModal');
        this.modalDate = document.getElementById('modalDate');
        this.modalCelebrations = document.getElementById('modalCelebrations');
        
        this.init();
    }

    init() {
        // Configura o ano atual no input
        this.yearInput.value = this.currentYear;
        
        // Adiciona event listeners
        this.prevYearBtn.addEventListener('click', () => this.changeYear(-1));
        this.nextYearBtn.addEventListener('click', () => this.changeYear(1));
        this.yearInput.addEventListener('change', (e) => this.setYear(parseInt(e.target.value)));
        this.closeModalBtn.addEventListener('click', () => this.closeModal());
        this.modal.addEventListener('click', (e) => {
            if (e.target === this.modal) this.closeModal();
        });
        
        // Fecha modal com ESC
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') this.closeModal();
        });
        
        // Renderiza o calendário
        this.renderCalendar();
    }

    changeYear(delta) {
        const newYear = this.currentYear + delta;
        if (newYear >= 1900 && newYear <= 2100) {
            this.setYear(newYear);
        }
    }

    setYear(year) {
        if (year >= 1900 && year <= 2100) {
            this.currentYear = year;
            this.yearInput.value = year;
            this.renderCalendar();
        }
    }

    /**
     * Renderiza todo o calendário
     */
    renderCalendar() {
        this.calendarGrid.innerHTML = '';
        
        const monthNames = [
            'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
            'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
        ];
        
        const weekdayNames = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
        
        for (let month = 0; month < 12; month++) {
            // Adiciona cabeçalho do mês
            const monthHeader = document.createElement('div');
            monthHeader.className = 'month-header';
            monthHeader.textContent = `${monthNames[month]} ${this.currentYear}`;
            this.calendarGrid.appendChild(monthHeader);
            
            // Adiciona cabeçalhos dos dias da semana
            weekdayNames.forEach(day => {
                const weekdayHeader = document.createElement('div');
                weekdayHeader.className = 'weekday-header';
                weekdayHeader.textContent = day;
                this.calendarGrid.appendChild(weekdayHeader);
            });
            
            // Renderiza os dias do mês
            this.renderMonthDays(month);
        }
    }

    /**
     * Renderiza os dias de um mês específico
     * @param {number} month - Mês (0-11)
     */
    renderMonthDays(month) {
        const firstDay = new Date(this.currentYear, month, 1);
        const lastDay = new Date(this.currentYear, month + 1, 0);
        const startDayOfWeek = firstDay.getDay();
        const totalDays = lastDay.getDate();
        
        // Células vazias antes do primeiro dia
        for (let i = 0; i < startDayOfWeek; i++) {
            const emptyCell = document.createElement('div');
            emptyCell.className = 'day-cell empty';
            this.calendarGrid.appendChild(emptyCell);
        }
        
        // Dias do mês
        for (let day = 1; day <= totalDays; day++) {
            const cell = document.createElement('div');
            cell.className = 'day-cell';
            cell.dataset.date = `${this.currentYear}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
            
            // Número do dia
            const dayNumber = document.createElement('div');
            dayNumber.className = 'day-number';
            dayNumber.textContent = day;
            cell.appendChild(dayNumber);
            
            // Obtém celebrações
            const celebrations = this.getCelebrationsForDate(month + 1, day);
            
            if (celebrations.length > 0) {
                cell.classList.add('has-celebrations');
                
                // Lista de celebrações (mostra até 3, depois "ver mais")
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
            
            // Adiciona evento de clique
            cell.addEventListener('click', () => this.showDayDetails(month + 1, day, celebrations));
            
            this.calendarGrid.appendChild(cell);
        }
    }

    /**
     * Obtém todas as celebrações para uma data específica
     * @param {number} month - Mês (1-12)
     * @param {number} day - Dia (1-31)
     * @returns {Array} Array de celebrações
     */
    getCelebrationsForDate(month, day) {
        const celebrations = [];
        
        // Celebrações fixas do santoral
        const fixedCelebrations = window.SANTORAL?.getCelebracoes(month, day) || [];
        celebrations.push(...fixedCelebrations);
        
        // Celebrações móveis
        const mobileCelebrations = window.MobileDates?.getCelebracoesMoveis(this.currentYear, month, day) || [];
        celebrations.push(...mobileCelebrations);
        
        // Ordena por tipo de importância
        const typeOrder = { solemnity: 0, feast: 1, memorial: 2, optional: 3 };
        celebrations.sort((a, b) => typeOrder[a.type] - typeOrder[b.type]);
        
        return celebrations;
    }

    /**
     * Mostra detalhes do dia no modal
     * @param {number} month - Mês (1-12)
     * @param {number} day - Dia (1-31)
     * @param {Array} celebrations - Celebrações do dia
     */
    showDayDetails(month, day, celebrations) {
        const monthNames = [
            'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
            'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
        ];
        
        const date = new Date(this.currentYear, month - 1, day);
        const weekdayNames = [
            'Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira',
            'Quinta-feira', 'Sexta-feira', 'Sábado'
        ];
        
        this.modalDate.textContent = `${day} de ${monthNames[month - 1]} de ${this.currentYear} - ${weekdayNames[date.getDay()]}`;
        
        if (celebrations.length === 0) {
            this.modalCelebrations.innerHTML = '<p style="color: #666; padding: 20px;">Nenhuma celebração registrada para esta data.</p>';
        } else {
            this.modalCelebrations.innerHTML = '';
            celebrations.forEach(celebration => {
                const div = document.createElement('div');
                div.className = `modal-celebration ${celebration.type}`;
                
                const title = document.createElement('h3');
                title.textContent = celebration.name;
                div.appendChild(title);
                
                const typeText = this.getTypeText(celebration.type);
                const typeInfo = document.createElement('p');
                typeInfo.textContent = typeText;
                if (celebration.isMobile) {
                    typeInfo.textContent += ' (Data Móvel)';
                }
                div.appendChild(typeInfo);
                
                this.modalCelebrations.appendChild(div);
            });
        }
        
        this.modal.style.display = 'block';
    }

    /**
     * Obtém o texto descritivo do tipo de celebração
     * @param {string} type - Tipo da celebração
     * @returns {string} Texto descritivo
     */
    getTypeText(type) {
        const texts = {
            solemnity: 'Solenidade - Maior grau de importância litúrgica',
            feast: 'Festa - Celebração de importância significativa',
            memorial: 'Memória Obrigatória - Celebração que deve ser observada',
            optional: 'Memória Facultativa - Celebração opcional'
        };
        return texts[type] || type;
    }

    /**
     * Fecha o modal
     */
    closeModal() {
        this.modal.style.display = 'none';
    }
}

// Inicializa a aplicação quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
    window.calendarioApp = new CalendarioReligioso();
});
