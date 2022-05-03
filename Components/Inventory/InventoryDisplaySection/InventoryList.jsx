// Modules/Data
import React, { useMemo } from 'react'
import { useState } from 'react'
import { useTable } from 'react-table'
import { useSelector } from 'react-redux'
import Inventory from '../../../data/TableData'


// Components
import InventoryHeader from './InventoryHeader';
import Actions from './Actions'

// React Icons







export default function InventoryList() {
    // Redux State(s)
    const currentCategory = useSelector(state => state.Inventory.category)
    const [cat, setCat] = useState(currentCategory)
    
    const displayedCategory = Inventory.filter(category => category.Category === cat)
    const {Items:itemData} = displayedCategory[0]

    const items = itemData.map((item, index) => {
        return {
            check:<input type='checkbox'/>,
            id:item.id,
            name:item.name,
            category:item.category,
            loc:item.loc,
            quantity:item.quantity,
            dateAdded:item.dateAdded,
            actions:<Actions index={index}/>
        }
    })

    // Table Data
    const data = useMemo(() => items, [items])
    const columns = useMemo(() => [
        {
            Header:' ',
            accessor:'check'
        },
        {
            Header:'Id',
            accessor:'id'
        },
        {
            Header:'Category',
            accessor:'category'
        },
        {
            Header:'Location',
            accessor:'loc'
        },
        {
            Header:'Quantity',
            accessor:'quantity'
        },
        {
            Header:'Added At',
            accessor:'dateAdded'
        },
        {
            Header:'Actions',
            accessor:'actions'
        }
    ],[])

    // Table Instance
    const {getTableProps,getTableBodyProps,headerGroups,rows,prepareRow} = useTable({columns, data});
    
  return (
    <div className='flex flex-col w-full max-w-[1000px] h-full max-h-[700px] my-5 bg-white border-[1px] p-2'>
        <InventoryHeader   currentCategory={currentCategory}  />
        <div className="w-full overflow-x-auto">   
            <table {...getTableProps()} className='w-full min-w-[800px]'>
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr key={'1'} {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th key={''} {...column.getHeaderProps()}>
                                    {column.render('Header')}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>

                <tbody {...getTableBodyProps()}>
                    {rows.map(row => {
                        prepareRow(row)
                        return(
                            <tr key={''} {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                    return(
                                        <td key={''} {...cell.getCellProps()}>
                                            {cell.render('Cell')}
                                        </td>
                                    )
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div> 
    </div>
  )
}



