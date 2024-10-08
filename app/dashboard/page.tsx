'use client'

import React, { useState } from 'react'
import TemplateSection from './_components/TemplateSection'
import SearchSection from './_components/SearchSection'

const Dashboard = () => {
  const [userSearchInput, setUserSearchInput] = useState('')

  return (
    <div>
            <SearchSection onSearchInput={(value:string)=> setUserSearchInput(value)} />

            <TemplateSection userSearchInput={userSearchInput}/>

    </div>
  )
}

export default Dashboard