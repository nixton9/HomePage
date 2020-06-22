import React, { useState } from 'react'
import { Index, Company } from './StocksContainer'
import { IndexChart } from './IndexChart'
import { CompanyCard } from './CompanyCard'
import { Modal } from '../../components/Modal'
import { Actions } from '../../components/Actions'
import { StocksStyles } from '../../styles/StocksStyles'
import { useRecoilState } from 'recoil'
import { stocksModalState } from '../../state/atoms'

interface StocksProps {
  indexes: Index[]
  companies: Company[]
  addCompany: (company: string, ticker: string, price: number) => void
  deleteCompany: (ticker: string) => void
}

export const Stocks: React.FC<StocksProps> = ({
  indexes,
  companies,
  addCompany,
  deleteCompany
}) => {
  const [companyInput, setCompanyInput] = useState('')
  const [tickerInput, setTickerInput] = useState('')
  const [priceInput, setPriceInput] = useState(0)
  const [isModalOpen, setIsModalOpen] = useRecoilState(stocksModalState)

  const indexesArr = Object.entries(indexes).map(([key]) => key)

  const handleSubmit = e => {
    e.preventDefault()
    addCompany(companyInput, tickerInput, priceInput)
    setCompanyInput('')
    setTickerInput('')
    setPriceInput(0)
    setIsModalOpen(false)
  }

  return (
    <>
      <StocksStyles>
        {indexesArr.length > 0 ? (
          <div className="indexes">
            {indexesArr.map(ind => (
              <IndexChart index={indexes[ind]} ticker={ind} key={ind} />
            ))}
          </div>
        ) : (
          <div className="nodata">
            There is no data for the indexes at the moment
          </div>
        )}
        <h2 className="title">My companies</h2>
        {companies.length > 0 ? (
          <div className="companies">
            {companies.map(comp => (
              <CompanyCard
                company={comp}
                key={comp.ticker}
                deleteCompany={deleteCompany}
              />
            ))}
          </div>
        ) : (
          <div className="no-companies">You have no companies added yet.</div>
        )}
        <Actions openModal={() => setIsModalOpen(true)} />
      </StocksStyles>
      <Modal
        open={isModalOpen}
        title={'Add Company'}
        closeModal={() => setIsModalOpen(false)}
      >
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Company name"
            value={companyInput}
            onChange={e => setCompanyInput(e.target.value)}
          />
          <input
            type="text"
            placeholder="Company ticker"
            value={tickerInput}
            onChange={e => setTickerInput(e.target.value)}
          />
          <input
            type="number"
            placeholder="Price bought"
            value={priceInput}
            step=".01"
            onChange={e => setPriceInput(Number(e.target.value))}
          />
          <button>Send</button>
        </form>
      </Modal>
    </>
  )
}
