import React from 'react'
import Header from '@/components/blocks/header'
import Sidebar from '@/components/blocks/sidebar'

//Type definition for props
type LayoutProps = {children: React.ReactNode;}


const layout = ({children}: {children: LayoutProps}) => {
  return (
    <section className='grid h-screen w-full pl-[56px]'>
        {/* Shared UI */}
        <Header></Header>

        <Sidebar/>
    </section>
  )
}



export default layout