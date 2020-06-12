import React from 'react'
import { CategoriesStyles } from '../styles/CategoriesStyles'

interface CategoriesProps {
  categories: Category[]
  selectedCategory: string | undefined
  setSelectedCategory: React.Dispatch<React.SetStateAction<string | undefined>>
}

export interface Category {
  value?: string
  name: string
}

export const Categories: React.FC<CategoriesProps> = ({
  categories,
  selectedCategory,
  setSelectedCategory
}) => {
  return (
    <CategoriesStyles className="categories">
      {(categories as Category[]).map(cat => (
        <div
          key={cat.value ? cat.value : 'all'}
          className={
            cat.value === selectedCategory
              ? 'category enlight-on-hover selected'
              : 'category enlighten-on-hover'
          }
          onClick={() => setSelectedCategory(cat.value)}
        >
          {cat.name}
        </div>
      ))}
    </CategoriesStyles>
  )
}
