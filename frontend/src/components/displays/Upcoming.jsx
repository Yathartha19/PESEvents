import React from 'react'
import './displays.css'
import Navbar from '../utils/Navbar'
import Footer from '../utils/Footer'
import EventCard from '../utils/EventCard'
import eventData from '../utils/EventData.js'
import { Link } from 'react-router-dom'

const Upcoming = () => {

  const data = eventData

  return (
    <div>
        <Navbar />
        <div className='groundoftheback'>
            <div className='flex flex-row items-center justify-between text-white font-kara pt-[15vh] text-[3rem] lg:text-[5rem] mx-[5vw]'>
                <h1 className='ml-4'>Upcoming Events</h1>
                <div className='h-[6vh] w-[6vh] lg:h-[8vh] lg:w-[8vh] bg-black bg-opacity-40 rounded-2xl mt-2 lg:mt-6 hover:cursor-pointer flex items-center justify-center'> 
                    <img src='/filters.png' className='h-[4vh] lg:h-[5vh]' />
                </div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-[5vw] mt-[2rem] gap-[5vw] place-items-center'>
                {data.map((Event, index) => (
                    <EventCard key={index} event={Event} />
                ))}
            </div>
            <div className='flex flex-col lg:flex-row items-center justify-center gap-[5vw] py-[15vh]'>
                <Link to='/events' onClick={() => window.scrollTo(0, 0)} className='text-white lg:text-xl xl:text-2xl btn-clr rounded-xl px-10 py-2 mt-[2vh] xl:mt-[4vh] border hover:border-black font-thin'>Browse all Events</Link>
                <Link to='/clubs' onClick={() => window.scrollTo(0, 0)} className='text-white lg:text-xl xl:text-2xl btn-clr rounded-xl px-14 py-2 mt-[2vh] xl:mt-[4vh] border hover:border-black font-thin'>Browse Clubs</Link>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Upcoming