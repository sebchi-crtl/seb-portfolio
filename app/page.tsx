'use client'
import Header from '@/components/header/Header'
import LeftSide from '@/components/header/LeftSide'
import RightSide from '@/components/header/RightSide'
import style from '@/styles/header_layout.module.css'
import Project from '@/components/projects/Project'
import Contact from '@/components/contact/Contact'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Scrollbar from 'smooth-scrollbar'
import { useEffect } from 'react';



gsap.registerPlugin(ScrollTrigger);

export default function Home()  {


  useEffect(() => { 
    const mainElement = document.querySelector(".main") as HTMLElement;
    if (!mainElement) {
      // Handle the case when the element with class "main" is not found.
      console.error('Element with class "main" not found.');
    }
    const scrollBar = Scrollbar.init(mainElement, { 
      damping: 0.06, 
      delegateTo: document, 
      alwaysShowTracks: false, 
      // speed: 3, 
    }); 
    ScrollTrigger.defaults({ 
      scroller: '.main', 
    }); 
    ScrollTrigger.scrollerProxy('.main', { 
      scrollTop(value) { 
        if (arguments.length) { 
          scrollBar.scrollTop = value as number; 
        } 
        return scrollBar.scrollTop; 
      }, 
    }); 
 
    scrollBar.addListener(ScrollTrigger.update); 

 
    const sectionColor = document.querySelectorAll('[data-bgcolor]');

    sectionColor.forEach((colorSection, i) => {
      const prevBgColor = i === 0 ? '' : sectionColor[i - 1]?.getAttribute('data-bgcolor') || '';
      const prevTextColor = i === 0 ? '' : sectionColor[i - 1]?.getAttribute('data-textcolor') || '';

      ScrollTrigger.create({ 
        trigger: colorSection, 
        scroller: '.main', 
        start: 'top 50%', 
        onEnter: () => 
          gsap.to('.main', { 
            backgroundColor: colorSection.getAttribute('data-bgcolor') as string, 
            color: colorSection.getAttribute('data-textcolor') as string, 
            overwrite: 'auto', 
          }), 
        onLeaveBack: () => 
          gsap.to('.main', { 
            backgroundColor: prevBgColor, 
            color: prevTextColor, 
            overwrite: 'auto', 
          }), 
      }); 
    }); 
 
    
    return () => {}; 
  }, []); 
 
 

  return (
    <main >
      <section className="flex items-center justify-between" data-bgcolor="#161616" data-textcolor="#404040">

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
      
      <section  data-bgcolor="#582e1a" 
        data-textcolor="#ffffff">
        <Project />
      </section>

      <section data-bgcolor="#3b3825" 
        data-textcolor="#c2c1b3" >
        <Contact />
      </section>
      
    </main>
  )
}
