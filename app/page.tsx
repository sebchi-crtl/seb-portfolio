import Header from '@/components/header/Header'
import LeftSide from '@/components/header/LeftSide'
import RightSide from '@/components/header/RightSide'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex items-center justify-between">

      <div className='flex'>
        <LeftSide />
      </div>
      <div>
        <Header />
      </div>
      <div>
        <RightSide />
      </div>

    </main>
  )
}
