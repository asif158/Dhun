import Highcharts from 'highcharts'
import PropTypes from 'prop-types'
import {
  HighchartsProvider,
  HighchartsChart,
  Chart,
  XAxis,
  YAxis,
  Legend,
  ColumnSeries,
} from 'react-jsx-highcharts'

const HIGHCHARTS_THEME = {
  colors: ['#F0C3F1'],
  chart: {
    backgroundColor: {
      linearGradient: [0, 0, 1500, 1500],
      stops: [[0, '#000000']],
    },
  },
  style: {
    fontFamily: 'Unica One, sans-serif',
  },
  xAxis: {
    labels: {
      style: {
        color: 'white',
      },
    },
  },
  yAxis: {
    labels: {
      style: {
        color: 'white',
      },
    },
  },

  legend: {
    itemStyle: {
      font: '9pt Trebuchet MS, Verdana, sans-serif',
      color: 'white',
    },
    itemHoverStyle: {
      color: 'white',
    },
  },
}

Highcharts.theme = HIGHCHARTS_THEME
Highcharts.setOptions(Highcharts.theme)

function PriceHistory({ data }) {
  const a = {
    x_axis: ['Custom', 'Category 1', 'Category 2', 'Category 3', 'Category 4'],
    data: [
      data?.category_6,
      data?.category_7,
      data?.category_8,
      data?.category_9,
      data?.category_10,
    ],
  }

  return (
    <HighchartsProvider Highcharts={Highcharts}>
      <HighchartsChart>
        <Chart />
        <Legend layout="horizontal" align="center" verticalAlign="top" />
        <XAxis categories={a.x_axis}>
          <XAxis.Title>Months</XAxis.Title>
        </XAxis>
        <YAxis>
          <ColumnSeries name="Price" data={a.data} key="0" />
        </YAxis>
      </HighchartsChart>
    </HighchartsProvider>
  )
}

PriceHistory.propTypes = {
  data: PropTypes.shape({
    category_6: PropTypes.number,
    category_7: PropTypes.number,
    category_8: PropTypes.number,
    category_9: PropTypes.number,
    category_10: PropTypes.number,
  }),
}

export default PriceHistory
