import Header from '@/components/header/Header'
import LeftSide from '@/components/header/LeftSide'
import RightSide from '@/components/header/RightSide'
import Image from 'next/image'
// import { Poppins } from 'next/font/google'

export default function Home() {

  // const poppins = Poppins({
  //   weight: '400',
  //   subsets: ['latin'],
  // })
  return (
    <main>

      <div className="flex items-center justify-between">

        <div className='flex'>
          <LeftSide />
        </div>
        <div className='mt-[2rem]'>
          <Header />
        </div>
        <div>
          <RightSide />
        </div>

      </div>

      {/* caption */}

      <div className={` text-center text-[1.3rem] font-medium tracking-widest	my-5`}>
      &ldquo; Coding the hidden magic behind the scenes. 🔮 &rdquo;
      </div>
      
    </main>
  )
}
