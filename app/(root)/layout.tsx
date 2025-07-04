import {ReactNode} from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Rootlayout = ({children}: {children: ReactNode}) => {
  return (
    <div className='root-layout'>
        <nav>
            <Link href ="/" className = "flex items-center gap-2">
                <Image src="/logo.svg" alt="Logo" width={32} height={38} />
                <h2 className="text-primary-100">PrepBuddy</h2>
            </Link>
            {children}
            
        </nav>
      
    </div>
  )
}

export default Rootlayout
