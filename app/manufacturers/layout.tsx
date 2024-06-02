import React from 'react'
import Header from '@/components/blocks/header'
import Sidebar from '@/components/blocks/sidebar'

//Type definition for props
type LayoutProps = {children: React.ReactNode;}


const layout = ({children}: LayoutProps) => {
  return (
    <section className='h-full' style={{ display: 'grid', gridTemplateColumns: '16rem 1fr', gridTemplateRows: '15% 1fr' }}>
        <div className='row-start-2'><Sidebar/></div>
        <div className='col-start-1 col-end-3'><Header/></div>
        <div style={{backgroundColor: "#FBFBFB" }} >
            {children}
        </div>

        
    </section>
  )
}



export default layout