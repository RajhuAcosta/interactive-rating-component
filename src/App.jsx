import { useState } from 'react';
import './App.css';

function App() {
  const [changeModal, setChangeModal] = useState(false);
  const [number, setNumber] = useState(null);
  return (
    <main className='min-h-screen grid place-content-center font-["Overpass"] bg-[hsl(216,12%,8%)] px-6'>
      {!changeModal?(
      <section className='lg:w-[420px] bg-[hsl(213,19%,18%)] grid gap-3 rounded-3xl px-6 lg:px-8 lg:py-8 py-6'>
        <div className='rounded-full bg-[hsla(217,12%,63%,0.1)] w-fit px-3 py-3 lg:px-4 lg:py-4 inline-block'>
          <img src="/icon-star.svg" alt="" />
        </div>
        <h3 className='text-[hsl(0,0%,100%)] font-bold text-2xl mt-2 lg:mt-5'>How did we do?</h3>
        <p className='text-[hsl(217,12%,63%)] text-[14px] lg:text-base'>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
        <div className='flex gap-5 justify-center lg:justify-between mt-2.5 mb-3'>
          <button onClick={()=>setNumber(1)} className='text-[hsl(216,12%,54%)] flex items-center justify-center focus:text-white focus:bg-[hsl(25,97%,53%)] hover:text-white hover:bg-[hsl(216,12%,54%)] transition-all text-sm font-bold px-3.5 py-2  bg-[hsla(217,12%,63%,0.1)] rounded-full lg:text-lg lg:px-5 lg:py-3'>1</button>
          <button onClick={()=>setNumber(2)} className='text-[hsl(216,12%,54%)] flex items-center justify-center focus:text-white focus:bg-[hsl(25,97%,53%)] hover:text-white hover:bg-[hsl(216,12%,54%)] transition-all text-sm font-bold px-3.5 py-2 bg-[hsla(217,12%,63%,0.1)] rounded-full lg:text-lg lg:px-5 lg:py-3'>2</button>
          <button onClick={()=>setNumber(3)} className='text-[hsl(216,12%,54%)] flex items-center justify-center focus:text-white focus:bg-[hsl(25,97%,53%)] hover:text-white hover:bg-[hsl(216,12%,54%)] transition-all text-sm font-bold px-3.5 py-2 bg-[hsla(217,12%,63%,0.1)] rounded-full lg:text-lg lg:px-5 lg:py-3'>3</button>
          <button onClick={()=>setNumber(4)} className='text-[hsl(216,12%,54%)] flex items-center justify-center focus:text-white focus:bg-[hsl(25,97%,53%)] hover:text-white hover:bg-[hsl(216,12%,54%)] transition-all text-sm font-bold px-3.5 py-2 bg-[hsla(217,12%,63%,0.1)] rounded-full lg:text-lg lg:px-5 lg:py-3'>4</button>
          <button onClick={()=>setNumber(5)} className='text-[hsl(216,12%,54%)] flex items-center justify-center focus:text-white focus:bg-[hsl(25,97%,53%)] hover:text-white hover:bg-[hsl(216,12%,54%)] transition-all text-sm font-bold px-3.5 py-2 bg-[hsla(217,12%,63%,0.1)] rounded-full lg:text-lg lg:px-5 lg:py-3'>5</button>
        </div>
        <button onClick={()=>setChangeModal(true)} className='bg-[hsl(25,97%,53%)] text-[hsl(0,0%,100%)] hover:text-[hsl(25,97%,53%)] hover:bg-white transition-all py-3.5 rounded-full font-bold text-sm mb-1' style={number==null?({cursor: "default", pointerEvents: "none", opacity: "0.74"}):({listStyle: "none"})}>SUBMIT</button>
      </section>
      ):(
      <section className='lg:w-[420px] bg-[hsl(213,19%,18%)] rounded-3xl px-7 lg:px-8 lg:py-8 py-6 grid gap-5 justify-center'>
        <picture className='mt-3 mb-1'>
          <img className='block mx-auto' src="/public/illustration-thank-you.svg" alt="" />
        </picture>
        <h3 className='w-fit block mx-auto px-3 py-2 rounded-full text-[hsla(25,97%,53%,0.8)] bg-[hsla(216,12%,8%,0.2)] text-center'>{`You selected ${number} out of 5`}</h3>
        <h2 className='text-[hsl(0,0%,100%)] text-3xl mx-auto font-semibold mt-0.5 lg:mt-1.5'>Thank you!</h2>
        <p className='text-[hsl(217,12%,63%)] text-center -mt-2 text-[14px] lg:text-base lg:mb-1'>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
      </section>
      )}
    </main>
  )
}

export default App
