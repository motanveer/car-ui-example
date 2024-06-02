import React from 'react'
import { Triangle } from 'lucide-react'

import { Button } from '../ui/button'

import logo from '../../src/logoblack.png'
import Image from 'next/image'

const sidebar = () => {
  return (
    <aside className="inset-y fixed  left-0 z-20 flex h-full flex-col border-r p-5">
        <div className="border-b p-2">
          <Button variant="outline" size="icon" aria-label="Home">
          <Image className="max-w-20" src={logo} alt="Logo" />
          </Button>
        </div>
        <nav className="grid gap-1 p-2">
            <p>ss</p>  
        </nav>
      </aside>
  )
}

export default sidebar