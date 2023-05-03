const flights = [
  {
    name: 'Dassault Falcon 50',
    type: 'Бизнес-джет',
    country: 'Франция',
    speed: 880,
    flyrange: 6300,
    flyheight: 13800,
    maxweight: 14600,
    passengers: 10,
    href: 'dassault_falcon_50.html'
  },
  {
    name: 'Boeing 747',
    type: 'Пассажирский',
    country: 'США',
    speed: 920,
    flyrange: 13400,
    flyheight: 13100,
    maxweight: 396890,
    passengers: 660,
    href: 'boeing_747.html'
  },
  {
    name: 'Airbus A380',
    type: 'Пассажирский',
    country: 'Европа',
    speed: 945,
    flyrange: 15200,
    flyheight: 13100,
    maxweight: 575000,
    passengers: 853,
    href: 'airbus_a380.html'
  },
  {
    name: 'Cessna Citation X+',
    type: 'Бизнес-джет',
    country: 'США',
    speed: 980,
    flyrange: 6037,
    flyheight: 15200,
    maxweight: 15790,
    passengers: 12,
    href: 'cessna_citation_x+.html'
  },
  {
    name: 'Embraer Phenom 300',
    type: 'Бизнес-джет',
    country: 'Бразилия',
    speed: 839,
    flyrange: 3650,
    flyheight: 13700,
    maxweight: 7711,
    passengers: 8,
    href: 'embraer_phenom_300.html'
  },
  {
    name: 'Gulfstream G650ER',
    type: 'Бизнес-джет',
    country: 'США',
    speed: 982,
    flyrange: 13000,
    flyheight: 15545,
    maxweight: 45359,
    passengers: 19,
    href: 'gulfstream_g650er.html'
  },
  {
    name: 'Bombardier Global 7500',
    type: 'Бизнес-джет',
    country: 'Канада',
    speed: 982,
    flyrange: 14800,
    flyheight: 15545,
    maxweight: 50000,
    passengers: 19,
    href: 'bombardier_global_7500.html'
  },
  {
    name: 'Antonov An-225 Mriya',
    type: 'Грузовой',
    country: 'Украина',
    speed: 850,
    flyrange: 15400,
    flyheight: 10600,
    maxweight: 640000,
    passengers: 0,
    href: 'antonov_an-225_mriya.html'
  },
  {
    name: 'Airbus A400M Atlas',
    type: 'Грузовой',
    country: 'Европа',
    speed: 781,
    flyrange: 3300,
    flyheight: 12200,
    maxweight: 81000,
    passengers: 116,
    href: 'airbus_a400m_atlas.html'
  },
  {
    name: 'Boeing C-17 Globemaster III',
    type: 'Грузовой',
    country: 'США',
    speed: 830,
    flyrange: 4400,
    flyheight: 13700,
    maxweight: 265352,
    passengers: 102,
    href: 'boeing_c-17_globemaster_iii.html'
  },
  {
    name: 'Airbus A320',
    type: 'Пассажирский',
    country: 'Европа',
    speed: 840,
    flyrange: 6100,
    flyheight: 11800,
    maxweight: 78000,
    passengers: 180,
    href: 'airbus_a320.html'
  },
  {
    name: 'Boeing 737 MAX',
    type: 'Пассажирский',
    country: 'США',
    speed: 840,
    flyrange: 7040,
    flyheight: 12500,
    maxweight: 82000,
    passengers: 230,
    href: 'boeing_737_max.html'
  },
  {
    name: 'Embraer E190-E2',
    type: 'Пассажирский',
    country: 'Бразилия',
    speed: 829,
    flyrange: 5278,
    flyheight: 10668,
    maxweight: 57700,
    passengers: 114,
    href: 'embraer_e190-e2.html'
  },
  {
    name: 'Bombardier CRJ900',
    type: 'Пассажирский',
    country: 'Канада',
    speed: 828,
    flyrange: 2889,
    flyheight: 12497,
    maxweight: 37500,
    passengers: 90,
    href: 'bombardier_crj900.html'
  },
  {
    name: 'Airbus A220',
    type: 'Пассажирский',
    country: 'Европа',
    speed: 870,
    flyrange: 6100,
    flyheight: 12497,
    maxweight: 60500,
    passengers: 160,
    href: 'airbus_a220.html'
  },
  {
    name: 'Cessna 172',
    type: 'Легкий',
    country: 'США',
    speed: 302,
    flyrange: 965,
    flyheight: 14700,
    maxweight: 1111,
    passengers: 4,
    href: 'cessna_172.html'
  },
  {
    name: 'Piper PA-28 Cherokee',
    type: 'Легкий',
    country: 'США',
    speed: 215,
    flyrange: 1000,
    flyheight: 14000,
    maxweight: 1100,
    passengers: 4,
    href: 'piper_pa-28_cherokee.html'
  },
  {
    name: 'Diamond DA40',
    type: 'Легкий',
    country: 'Австрия',
    speed: 246,
    flyrange: 720,
    flyheight: 15240,
    maxweight: 1202,
    passengers: 4,
    href: 'diamond_da40.html'
  },
  {
    name: 'Cirrus SR22',
    type: 'Легкий',
    country: 'США',
    speed: 300,
    flyrange: 1387,
    flyheight: 25000,
    maxweight: 1588,
    passengers: 4,
    href: 'cirrus_sr22.html'
  }
];

let filteredFlights = flights.slice();

function drawTable (flightsData) {
  const table = document.getElementById('flights-table-body');

  table.innerHTML = '';
  let index = 1;

  for (const f of flightsData) {
    const row = table.insertRow();
    const cell = row.insertCell();
    cell.innerHTML = index;
    cell.className = 'flights-table__number';

    row.insertCell().innerHTML = `<a href=${f.href}>${f.name}</a>`;

    const data = [f.type, f.country, f.speed, f.flyrange, f.flyheight, f.maxweight, f.passengers];
    for (const t of data) {
      row.insertCell().innerHTML = t;
    }

    index += 1;
  }

  if (flightsData.length === 0) {
    const row = table.insertRow();
    row.insertCell().innerHTML = 1;
    for (let i = 0; i < 6; i++) {
      row.insertCell().innerHTML = '---';
    }
  }
}

const firstSortSelect = document.getElementById('sort1');
const secondSortSelect = document.getElementById('sort2');
const isDescending1Checkbox = document.getElementById('isDescending1');
const isDescending2Checkbox = document.getElementById('isDescending2');

let firstSortOption = -1;
let secondSortOption = -1;
let isDescending1 = false;
let isDescending2 = false;

function updateSortSelect (select, prevIndex, newIndex) {
  if (prevIndex !== -1) {
    select.item(prevIndex + 1).hidden = false;
  }
  select.item(newIndex + 1).hidden = newIndex !== -1;
  return newIndex;
}

function changeFirstSortLevel () {
  firstSortOption = updateSortSelect(
    secondSortSelect,
    firstSortOption,
    +firstSortSelect.value
  );

  secondSortSelect.disabled = firstSortOption === -1;
  updateFlightsSort();
}

function changeSecondSortLevel () {
  secondSortOption = updateSortSelect(
    firstSortSelect,
    secondSortOption,
    +secondSortSelect.value
  );

  updateFlightsSort();
}

function updateFlightsSort () {
  if (firstSortOption === -1) {
    drawTable(filteredFlights);
  }

  drawTable(filteredFlights.slice().sort(flightsSortCompare));
}

function flightsSortCompare (a, b) {
  function compare (a, b) {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
  }

  function compareRev (a, b) {
    return -1 * compare(a, b);
  }

  const keys = Object.keys(a);
  let compareFunc = isDescending1 ? compareRev : compare;
  let result = compareFunc(a[keys[firstSortOption]], b[keys[firstSortOption]]);
  console.log(keys[firstSortOption]);

  if (result === 0 && secondSortOption !== -1) {
    compareFunc = isDescending2 ? compareRev : compare;
    result = compareFunc(a[keys[secondSortOption]], b[keys[secondSortOption]]);
  }
  return result;
}

function applyFilter () {
  function getElemValue (id) {
    return document.getElementById(id).value;
  }

  function isContains (field, value) {
    return field.toString().indexOf(value) !== -1;
  }

  filteredFlights = flights.filter(flight => {
    let res = isContains(flight.name, getElemValue('filterInputName'));
    res &= isContains(flight.type, getElemValue('filterInputType'));
    res &= isContains(flight.country, getElemValue('filterInputCountry'));
    res &= isContains(flight.speed, getElemValue('filterInputSpeed'));
    res &= isContains(flight.flyrange, getElemValue('filterInputDistance'));
    res &= isContains(flight.flyheight, getElemValue('filterInputHeight'));
    res &= isContains(flight.maxweight, getElemValue('filterInputWeight'));
    res &= isContains(flight.passengers, getElemValue('filterInputPassengers'));
    return res;
  });

  updateFlightsSort();
}

function init () {
  drawTable(flights);

  firstSortSelect.addEventListener('change', changeFirstSortLevel);
  secondSortSelect.addEventListener('change', changeSecondSortLevel);
  document.getElementById('filter_button').addEventListener('click', applyFilter);
  secondSortSelect.disabled = true;

  isDescending1Checkbox.addEventListener('change', (e) => {
    isDescending1 = e.currentTarget.checked;
    updateFlightsSort();
  });

  isDescending2Checkbox.addEventListener('change', (e) => {
    isDescending2 = e.currentTarget.checked;
    updateFlightsSort();
  });
}

init();
