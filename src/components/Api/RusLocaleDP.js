const days = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']
const months = ['Янв.', 'Фев.', 'Март', 'Апр.', 'Май', 'Июн.', 'Июл.', 'Авг.', 'Сен.', 'Окт.', 'Нояб.', 'Дек.']

const  RusLocale = {
  localize: {
    day: n => days[n],
    month: n => months[n]
  },
  formatLong: {
    date: () => 'mm/dd/yyyy'
  }
}

export default RusLocale;