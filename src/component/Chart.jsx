import React from 'react';
import ReactECharts from 'echarts-for-react';

const data1 = [
  { x: 1, y: 2 },
  { x: 2, y: 3 },
  { x: 3, y: 11 },
  { x: 4, y: 7 },
  { x: 5, y: 8 },
  { x: 6, y: 3 },
  { x: 7, y: 5 }
];

const data2 = [
  { x: 1, y: 5 },
  { x: 2, y: 6 },
  { x: 3, y: 9 },
  { x: 4, y: 4 },
  { x: 5, y: 7 },
  { x: 6, y: 2 },
  { x: 7, y: 6 }
];

const getOption = () => {
  return {
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: data1.map((point) => point.x),
      axisLine: {
        show: true,
      },
    },
    yAxis: {
      type: 'value',
      axisLine: {
        show: true,
      },
    },
    series: [
      {
        name: "fuel consumption",
        type: 'line',
        smooth: true,
        data: data1.map((point) => point.y),
        color: "#ff0000"
      },
      {
        name: 'going in km',
        type: 'line',
        smooth: true,
        data: data2.map((point) => point.y),
        color: "#0000ff"
      }
    ],
    tooltip: {
      trigger: 'axis',
      formatter: (params) => {
        let tooltipText = '';
        params.forEach(param => {
          tooltipText += `${param.seriesName}: (X: ${param.dataIndex + 1}, Y: ${param.data})<br />`;
        });
        return tooltipText;
      }
    }
  };
};

const Chart = () => {
  const [tooltipText, setTooltipText] = React.useState('');

  const handleMouseEnter = (params) => {
    setTooltipText(`Value: ${params.data}, X: ${params.dataIndex + 1}`);
  };

  const handleMouseLeave = () => {
    setTooltipText('');
  };

  const handleClick = (params) => {
    setTooltipText(`Value: ${params.data}, X: ${params.dataIndex + 1}`);
  };

  return (
    <div className='charts'>
      <ReactECharts
        option={getOption()}
        onEvents={{
          click: handleClick,
          mouseEnter: handleMouseEnter,
          mouseLeave: handleMouseLeave,
        }}
      />
      {tooltipText !== '' && (
        <div className="tooltip">
          <p>{tooltipText}</p>
        </div>
      )}
    </div>
  );
};

export default Chart;
