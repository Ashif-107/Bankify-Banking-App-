import RightSidebar from '@/components/RightSidebar'
import HeaderBox from '@/components/ui/HeaderBox'
import TotalBalance from '@/components/ui/TotalBalance'
import React from 'react'

const Home = () => {

  const loggedin = {firstName: 'Ashif', lastName: "KM", email:"abc@gmail.com"}

  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home=header'>
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedin?.firstName || 'Guest'}
            subtext="Get All Your Banking Info in One place more easily and flexibly."
          />
          <TotalBalance
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={6969.96}
          />
        </header>

        Recent transactions


      </div>

       <RightSidebar 
        user={loggedin}
        transactions={[]}
        banks={[{currentBalance: 6969},{currentBalance: 9696}]}
       />
    </section>
  )
}

export default Home
