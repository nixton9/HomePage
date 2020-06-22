import React from 'react'
import { Company } from './StocksContainer'
import { CompanyCardStyles } from '../../styles/CompanyCardStyles'
import { calculatePercentage } from '../../helpers/random'
import { TiArrowSortedUp } from 'react-icons/ti'
import { FaTimes } from 'react-icons/fa'

interface CompanyCardProps {
  company: Company
  deleteCompany: (ticker: string) => void
}

export const CompanyCard: React.FC<CompanyCardProps> = ({
  company,
  deleteCompany
}) => {
  const boughtPriceDifference = company.currPrice
    ? calculatePercentage(company.bought, company.currPrice)
    : 0
  const lastWeekPriceDifference =
    company.currPrice && company.lastWeekPrice
      ? calculatePercentage(company.lastWeekPrice, company.currPrice)
      : 0

  return company.error ? (
    <CompanyCardStyles className="company translate-top-on-hover has-error">
      <p>
        {company.error} for {company.name}
      </p>
      <button className="delete" onClick={() => deleteCompany(company.ticker)}>
        <FaTimes />
      </button>
    </CompanyCardStyles>
  ) : (
    <CompanyCardStyles className="company translate-top-on-hover">
      <div className="primary">
        <div>
          <h3 className="primary__title">{company.name}</h3>
          <h4 className="primary__ticker">{company.ticker}</h4>
        </div>
        <div className="primary__price">{company.currPrice}$</div>
      </div>

      <div className="secondary">
        <div>
          <h6 className="secondary__title">Bought at</h6>
          <h4 className="secondary__price">
            {company.bought}${' '}
            <span
              className={
                Math.sign(boughtPriceDifference) === -1
                  ? 'secondary__price__percentage negative'
                  : 'secondary__price__percentage'
              }
            >
              {boughtPriceDifference}%
              <TiArrowSortedUp />
            </span>
          </h4>
        </div>
        <div className="right">
          <h6 className="secondary__title">Last week at</h6>
          <h4 className="secondary__price">
            {company.lastWeekPrice}${' '}
            <span
              className={
                Math.sign(lastWeekPriceDifference) === -1
                  ? 'secondary__price__percentage negative'
                  : 'secondary__price__percentage'
              }
            >
              {lastWeekPriceDifference}%
              <TiArrowSortedUp />
            </span>
          </h4>
        </div>
      </div>
      <button className="delete" onClick={() => deleteCompany(company.ticker)}>
        <FaTimes />
      </button>
    </CompanyCardStyles>
  )
}
