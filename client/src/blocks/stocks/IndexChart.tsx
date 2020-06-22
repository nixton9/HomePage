import React from 'react'
import { Index } from './StocksContainer'
import { IndexChartStyles } from '../../styles/IndexChartStyles'
import { capitalize } from '../../helpers/random'
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip
} from 'recharts'

interface IndexChartProps {
  index: Index
  ticker: string
}

export const IndexChart: React.FC<IndexChartProps> = ({ index, ticker }) => (
  <IndexChartStyles>
    <h2 className="index-title">
      {index.title}
      <span>({ticker})</span>
    </h2>
    {index.error ? (
      <div className="chart has-error">
        <p>
          {index.error} for {index.title}
        </p>
      </div>
    ) : (
      <div className="chart">
        <ResponsiveContainer>
          <LineChart data={index.data} margin={{ right: 20 }}>
            <XAxis dataKey="day" stroke="#fff" />
            <YAxis stroke="#fff" domain={[0, 'dataMax + 75']} />
            <Tooltip content={CustomTooltip} />
            <Line
              type="monotone"
              dataKey="close"
              stroke="#F76DF2"
              dot={false}
              strokeWidth="3"
            />
            <Line
              type="monotone"
              dataKey="high"
              stroke="#14FFED"
              dot={false}
              strokeWidth="3"
            />
            <Line
              type="monotone"
              dataKey="low"
              stroke="#7330F2"
              dot={false}
              strokeWidth="3"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    )}
  </IndexChartStyles>
)

const CustomTooltip = ({ active, payload, label }) => {
  if (active) {
    return (
      <div className="tooltip">
        <h5 className="tooltip__label">{label}</h5>
        <div className="tooltip__data">
          {payload &&
            payload.length &&
            payload.map(item => (
              <p
                key={item.dataKey}
                className="tooltip__data__value"
                style={{ color: item.color }}
              >
                {capitalize(item.dataKey)}
                <span> {item.payload[item.dataKey]}</span>
              </p>
            ))}
        </div>
      </div>
    )
  }
  return null
}
