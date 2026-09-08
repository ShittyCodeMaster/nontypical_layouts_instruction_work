function renderCalendar(year, monthIndex) {
  // Use querySelector to explicitly query the DOM node
  const container = document.querySelector('#calendar');

  // Guard check: ensure the element was found
  if (!container) {
    console.error("Calendar container element '#calendar' was not found in the DOM.");
    return;
  }

  container.innerHTML = ''; // Clear previous grid

  // 1. Calculate offset (0 = Sun, 1 = Mon, etc.)
  const firstDayOfWeek = new Date(year, monthIndex, 1).getDay();

  // 2. Calculate total days in target month
  const totalDays = new Date(year, monthIndex + 1, 0).getDate();

  // 2.1 Current day
  const currentDay = new Date();

  // 3. Render Empty Padding Cells
  for (let i = 0; i < firstDayOfWeek; i++) {
    const emptyCell = document.createElement('div');
    emptyCell.classList.add('day-cell', 'empty-cell');
    container.appendChild(emptyCell);
  }

  let checkDay = new Date().getDate();

  // 4. Render Actual Calendar Days
  for (let day = 1; day <= totalDays; day++) {
    const dayCell = document.createElement('div');
    const popUpCell = document.createElement('div');
    const popUpCellSpan = document.createElement('span');

    if (day === checkDay) {
      popUpCell.classList.add('popup');
      popUpCellSpan.classList.add('popuptext');

      dayCell.classList.add('current-day-cell');

      dayCell.setAttribute('id', day);
      popUpCellSpan.setAttribute('id', day + 'p');
      dayCell.setAttribute('onclick', 'getInfo(this.id)');
    } else {
      popUpCell.classList.add('popup');
      popUpCellSpan.classList.add('popuptext');
      popUpCellSpan.setAttribute('id', day + 'p');

      dayCell.classList.add('day-cell');

      dayCell.setAttribute('id', day);
      dayCell.setAttribute('onclick', 'getInfo(this.id)');
    }

    popUpCellSpan.textContent = "Fuck! I did it with zero fucking experience!";
    dayCell.textContent = day;
    container.appendChild(dayCell).appendChild(popUpCell).appendChild(popUpCellSpan);
    //container.appendChild(dayCell);
  }

}

// Ensure the DOM is fully loaded before executing
document.addEventListener('DOMContentLoaded', () => {
  renderCalendar(2026, 9); // October 2026
});

function getInfo(id) {
  var popup = document.getElementById(id + 'p');

  let check;
  check = popup;

  popup.classList.toggle("show");

}