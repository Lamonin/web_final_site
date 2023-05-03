/* global d3, flights */

function drawGraph (form) { // eslint-disable-line no-unused-vars
  const arrGraph = getDataForGraph(+form.oxValue.value, +form.oyValue.value);
  const svg = d3.select('#graph__viewport svg');

  svg.selectAll('*').remove();

  const marginX = 50;
  const marginY = 80;
  const width = svg.attr('width');
  const height = svg.attr('height');

  const maxValuesArr = arrGraph.map(d => d.max);
  const min = d3.min(maxValuesArr) * 0.80;
  const max = d3.max(maxValuesArr) * 1.20;

  const xAxisLen = width - 2 * marginX;
  const yAxisLen = height - 2 * marginY;

  // определяем шкалы для осей
  const scaleX = d3.scaleBand()
    .domain(arrGraph.map(function (d) {
      return d.labelX;
    })).range([0, xAxisLen], 1);

  const scaleY = d3.scaleLinear().domain([min, max]).range([yAxisLen, 0]);

  // создаем оси
  const axisX = d3.axisBottom(scaleX); // горизонтальная
  const axisY = d3.axisLeft(scaleY); // вертикальная

  // отображаем ось OX, устанавливаем подписи оси ОX и угол их наклона
  svg.append('g')
    .attr('transform', `translate(${marginX}, ${height - marginY})`)
    .call(axisX)
    .attr('class', 'x-axis')
    .selectAll('text')
    .style('text-anchor', 'end')
    .attr('dx', '-.8em')
    .attr('dy', '.15em')
    .attr('transform', 'rotate(-45)');

  // отображаем ось OY
  svg.append('g')
    .attr('transform', `translate(${marginX}, ${marginY})`)
    .attr('class', 'y-axis')
    .call(axisY);

  // создаем набор вертикальных линий для сетки
  d3.selectAll('g.x-axis g.tick')
    .append('line') // добавляем линию
    .classed('grid-line', true) // добавляем класс
    .attr('x1', 0)
    .attr('y1', 0)
    .attr('x2', 0)
    .attr('y2', -(yAxisLen));

  // создаем горизонтальные линии сетки
  d3.selectAll('g.y-axis g.tick')
    .append('line')
    .classed('grid-line', true)
    .attr('x1', 0)
    .attr('y1', 0)
    .attr('x2', xAxisLen)
    .attr('y2', 0);

  // Получаем смещения ось X
  const xOffset = Number(d3.selectAll('g.x-axis g.tick')._groups[0][0]
    .outerHTML.split('translate(')[1].split(')')[0].split(',')[0]);

  svg.selectAll('.dot')
    .data(arrGraph)
    .enter()
    .append('circle')
    .attr('r', 3)
    .attr('cx', d => scaleX(d.labelX))
    .attr('cy', d => scaleY(d.max))
    .attr('transform', `translate(${marginX + xOffset}, ${marginY})`)
    .style('fill', 'red');
}

function getDataForGraph (oxvalue, oyvalue) {
  const oxvalues = ['type', 'country'];
  const oyvalues = ['speed', 'flyrange', 'flyheight', 'maxweight', 'passengers'];

  const arr = d3.group(flights, f => f[oxvalues[oxvalue]]);
  const arrGraph = [];

  for (const entry of arr) {
    const minMaxFieldValue = d3.extent(entry[1], e => e[oyvalues[oyvalue]]);
    const elem = {
      labelX: entry[0],
      max: minMaxFieldValue[1]
    };

    arrGraph.push(elem);
  }

  return arrGraph;
}

function init () {
  const bdRect = document
    .getElementById('graph__viewport')
    .getBoundingClientRect();

  const width = bdRect.width;
  const height = bdRect.height;

  d3.select('#graph__viewport svg')
    .attr('width', width)
    .attr('height', height)
    .style('outline', 'thin solid black');
}

init();
drawGraph(document.querySelector('.graph__container'));
