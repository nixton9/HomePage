import React from 'react'
import { SelectStyles } from '../styles/SelectStyles'

interface SelectProps {
  items: { val: string | number; name: string }[] | []
  selectedItem: string | number
  setSelectedItem: any
}

export const Select: React.FC<SelectProps> = ({
  items,
  selectedItem,
  setSelectedItem
}) => {
  return (
    <SelectStyles
      defaultValue={selectedItem}
      onChange={e => setSelectedItem(e.target.value)}
    >
      {(items as Array<{ val: string | number; name: string }>).map(item => (
        <option key={item.val} value={item.val}>
          {item.name}
        </option>
      ))}
    </SelectStyles>
  )
}
