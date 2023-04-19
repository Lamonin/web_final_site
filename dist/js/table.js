let flights = [
    {
        name: "Dassault Falcon 50",
        speed: 880,
        flyrange: 6300,
        flyheight: 13800,
        maxweight: 14600,
        passengers: 10,
        href: "dassault_falcon_50.html"
    },
    {
        name: "Hawker 1000",
        speed: 867,
        flyrange: 5637,
        flyheight: 12497,
        maxweight: 14107,
        passengers: 15,
        href: "hawker_1000.html"
    },
    {
        name: "Gulfstream G200",
        speed: 796,
        flyrange: 6301,
        flyheight: 13720,
        maxweight: 16080,
        passengers: 11,
        href: "gulfstream_g200.html"
    },
    {
        name: "Cessna Citation Sovereign",
        speed: 848,
        flyrange: 5556,
        flyheight: 14326,
        maxweight: 13959,
        passengers: 12,
        href: "cesna_soveregin.html"
    },
    {
        name: "Embraer Phenom 300",
        speed: 834,
        flyrange: 1996,
        flyheight: 13716,
        maxweight: 16535,
        passengers: 8,
        href: "embraer_phenom_300.html"
    },
    {
        name: "Bombardier Challenger 300",
        speed: 839,
        flyrange: 5786,
        flyheight: 13716,
        maxweight: 16964,
        passengers: 9,
        href: "bombardier_challenger_300.html"
    },
    {
        name: "Cessna Citation XLS+",
        speed: 839,
        flyrange: 3384,
        flyheight: 13716,
        maxweight: 14473,
        passengers: 9,
        href: "cessna_citation_xls+.html"
    },
    {
        name: "Dassault Falcon 7X",
        speed: 953,
        flyrange: 11056,
        flyheight: 15545,
        maxweight: 31976,
        passengers: 12,
        href: "dassault_falcon_7x.html"
    },
    {
        name: "Boeing Business Jet",
        speed: 890,
        flyrange: 11000,
        flyheight: 13100,
        maxweight: 17115,
        passengers: 50,
        href: "boeing_business_jet.html"
    },
    {
        name: "Cirrus Vision Jet",
        speed: 345,
        flyrange: 1175,
        flyheight: 28000,
        maxweight: 5300,
        passengers: 5,
        href: "cirrus_vision_jet.html"
    },
    {
        name: "Piaggio P180 Avanti",
        speed: 465,
        flyrange: 1630,
        flyheight: 41000,
        maxweight: 7055,
        passengers: 9,
        href: "piaggio_p180_avanti.html"
    },
    {
        name: "Beechcraft King Air 350i",
        speed: 312,
        flyrange: 1768,
        flyheight: 35000,
        maxweight: 15800,
        passengers: 9,
        href: "beechcraft_king_air_350i.html"
    },
    {
        name: "Embraer Legacy 500",
        speed: 834,
        flyrange: 5930,
        flyheight: 45000,
        maxweight: 28400,
        passengers: 12,
        href: "embraer_legacy_500.html"
    },
    {
        name: "Daher TBM 940",
        speed: 330,
        flyrange: 1738,
        flyheight: 31000,
        maxweight: 4300,
        passengers: 6,
        href: "daher_tbm_940.html"
    }
];

let filteredFlights = flights.slice();

function drawTable(flightsData) {
    const table = document.getElementById("flights-table-body");

    table.innerHTML = "";
    let index = 1;

    for (let f of flightsData) {
        let row = table.insertRow();
        let cell = row.insertCell();
        cell.innerHTML = index;
        cell.className = "flights-table__number";

        row.insertCell().innerHTML = `<a href=${f.href}>${f.name}</a>`;

        const data = [f.speed, f.flyrange, f.flyheight, f.maxweight, f.passengers];
        for (let t of data) {
            row.insertCell().innerHTML = t;
        }

        index += 1;
    }

    if (flightsData.length === 0) {
        let row = table.insertRow();
        row.insertCell().innerHTML = 1;
        for (let i = 0; i < 6; i++) {
            row.insertCell().innerHTML = '---';
        }
    }
}

const firstSortSelect = document.getElementById("sort1");
const secondSortSelect = document.getElementById("sort2");
const isDescending1Checkbox = document.getElementById("isDescending1");
const isDescending2Checkbox = document.getElementById("isDescending2");

let firstSortOption = -1;
let secondSortOption = -1;
let isDescending1 = false;
let isDescending2 = false;

function updateSortSelect(select, prevIndex, newIndex) {
    if (prevIndex !== -1) {
        select.item(prevIndex + 1).hidden = false;
    }
    select.item(newIndex + 1).hidden = newIndex !== -1;
    return newIndex;
}

function changeFirstSortLevel() {
    firstSortOption = updateSortSelect(
        secondSortSelect,
        firstSortOption,
        +firstSortSelect.value
    );

    secondSortSelect.disabled = firstSortOption === -1;
    updateFlightsSort();
}

function changeSecondSortLevel() {
    secondSortOption = updateSortSelect(
        firstSortSelect,
        secondSortOption,
        +secondSortSelect.value
    );

    updateFlightsSort();
}

function updateFlightsSort() {
    if (firstSortOption === -1) {
        console.log("dfads");
        drawTable(filteredFlights);
    }

    drawTable(filteredFlights.slice().sort(flightsSortCompare));
}

function flightsSortCompare(a, b) {
    function compare(a, b) {
        if (a > b) return 1;
        if (a < b) return -1;
        return 0;
    }

    function compareRev(a, b) {
        return -1 * compare(a, b);
    }

    const keys = Object.keys(a);
    let compareFunc = isDescending1 ? compareRev : compare;
    let result = compareFunc(a[keys[firstSortOption]], b[keys[firstSortOption]]);

    if (result === 0 && secondSortOption !== -1) {
        compareFunc = isDescending2 ? compareRev : compare;
        result = compareFunc(a[keys[secondSortOption]], b[keys[secondSortOption]]);
    }
    return result;
}

function applyFilter() {
    function getElemValue(id) {
        return document.getElementById(id).value;
    }

    function isContains(field, value) {
        return field.toString().indexOf(value) !== -1;
    }

    filteredFlights = flights.filter(flight => {
        let res = isContains(flight.name, getElemValue("filterInputName"));
        res &= isContains(flight.speed, getElemValue("filterInputSpeed"));
        res &= isContains(flight.flyrange, getElemValue("filterInputDistance"));
        res &= isContains(flight.flyheight, getElemValue("filterInputHeight"));
        res &= isContains(flight.maxweight, getElemValue("filterInputWeight"));
        res &= isContains(flight.passengers, getElemValue("filterInputPassengers"));
        return res;
    });

    updateFlightsSort();
}

function init() {
    drawTable(flights);

    firstSortSelect.addEventListener("change", changeFirstSortLevel);
    secondSortSelect.addEventListener("change", changeSecondSortLevel);
    document.getElementById("filter_button").addEventListener("click", applyFilter)
    secondSor00tSelect.disabled = true;

    isDescending1Checkbox.addEventListener("change", (e) => {
        isDescending1 = e.currentTarget.checked;
        updateFlightsSort();
    });

    isDescending2Checkbox.addEventListener("change", (e) => {
        isDescending2 = e.currentTarget.checked;
        updateFlightsSort();
    });
}

init();