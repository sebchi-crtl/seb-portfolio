import Header from '@/components/header/Header'
import LeftSide from '@/components/header/LeftSide'
import RightSide from '@/components/header/RightSide'
import style from '@/styles/header_layout.module.css'
import Image from 'next/image'
import Project from '@/components/projects/Project'
import Contact from '@/components/contact/Contact'
// import { Poppins } from 'next/font/google'

export default function Home() {

  // const poppins = Poppins({
  //   weight: '400',
  //   subsets: ['latin'],
  // })
  return (
    <main>

      <section className="flex items-center justify-between">

        <div className='flex'>
          <LeftSide />
        </div>
        <div className='mt-[2rem]'>
          <Header />
        </div>
        <div>
          <RightSide />
        </div>

      </section>

      {/* caption */}

      <div className={` ${style.phrase} text-center text-[1.3rem] tracking-widest	my-5`}>
      &ldquo; Coding the hidden magic behind the scenes. 🔮 &rdquo;
      </div>
      
      <section>
        <Project />
      </section>

      <section>
        <Contact />
      </section>
      
    </main>
  )
}
