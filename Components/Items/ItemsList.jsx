import React, { useMemo } from 'react'
import {SiAddthis} from 'react-icons/si'
import {AiFillPrinter,AiOutlineMore,AiFillDelete} from 'react-icons/ai'
import {MdDeleteForever} from 'react-icons/md'
import Inventory from '../../data/TableData'
import { useState } from 'react'
import { useTable } from 'react-table'


export default function ItemsList() {
    const [cat, setCat] = useState('Household')
    
    const displayedCategory = Inventory.filter(category => category.Category === cat)
    const {Items} = displayedCategory[0]

    const data = useMemo(() => Items, [Items])
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
    <div className='flex flex-col w-full h-full my-5 bg-white border-[1px] p-2'>
        <div className="flex items-center justify-between w-full h-[10%]">
            <h1 className='text-[1.5rem]'>Household Items</h1>
            <div className="flex items-center">
                <div className="text-[1rem] text-[rgb(50,65,140)] mx-2 transition-all duration-300 hover:scale-110">
                    <SiAddthis/>
                </div>
                <div className="text-[1.3rem] text-[rgb(50,65,140)] mx-2 transition-all duration-300 hover:scale-110">
                    <AiFillPrinter/>
                </div>
                <div className="text-[1.3rem] text-[rgb(50,65,140)] mx-2 transition-all duration-300 hover:scale-110">
                    <MdDeleteForever/>
                </div>
                <div className="text-[1.3rem] text-[rgb(50,65,140)]">
                    <AiOutlineMore/>
                </div>
            </div>
        </div>

        <table {...getTableProps()}>
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
  )
}



