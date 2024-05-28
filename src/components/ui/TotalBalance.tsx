import React from 'react'
import { formatAmount } from '../../../lib/utils'
import DoughnutChart from './DoughnutChart'
import AnimatedCounter from './AnimatedCounter';



const TotalBalance = ({accounts=[],totalBanks,totalCurrentBalance}:TotlaBalanceBoxProps) => {
  return (
    <section className='total-balance'>
        <div className='total-balance-chart'>
            <DoughnutChart accounts={accounts}/>
        </div>
        <div className='flex flex-col gap-6'>
            <h2 className='header-2'>
                {totalBanks} Bank Account(s)
            </h2>
            <div className='flex flex-col gap-2'>
                <p className='total-balance-label'>
                    Total Current Balance
                </p>
                <div className='total-balance-amount flex-center gap-2'>
                <AnimatedCounter amount={totalCurrentBalance} />
                </div>
            </div>
        </div>
    </section>
  )
}

export default TotalBalance
