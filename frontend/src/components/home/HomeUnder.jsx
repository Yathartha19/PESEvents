import React from 'react'
import Footer from '../utils/Footer'
import './home.css'
import EventCard from '../utils/EventCard'
import eventData from '../utils/EventData.js'
import { Link } from 'react-router-dom'

const HomeUnder = () => {

  const data = eventData
  
  return (
    <div className='bg-[#fff] h-full'>

      <div className='flex flex-col items-center low:pt-[10vh] lg:pt-[19vh] xl:pt-[17vh]'>
        <h1 className='vp:font-thin low:text-4xl lg:text-6xl pb-20'>Featured Events</h1>
        <div className='flex low:flex-col lg:flex-row low:gap-10 lg:gap-2 xl:gap-10'>
          {data.map((Event, index) => (
            <EventCard key={index} event={Event} />
          ))}
        </div>
      </div>


      <div className='flex flex-col items-center justify-center orgteambg2 h-[55vh] mt-24 p-4 text-center'>
          <h1 className='font-lale text-white low:text-4xl lg:text-6xl'>Interested in Clubs/Events?</h1>
          <p className='text-white text-xl font-thin pt-6'>Get to know about any Event/Club now!</p>
          <div className='flex flex-row gap-10'>
            <Link to='/upcoming' onClick={() => window.scrollTo(0, 0)} className='bg-white rounded-xl py-4 px-8 text-black font-sans mt-12 shadow-2xl hover:bg-black hover:text-white transition duration-200'>Events</Link>
            <Link to='/clubs' onClick={() => window.scrollTo(0, 0)} className='bg-white rounded-xl py-4 px-8 text-black font-sans mt-12 shadow-2xl hover:bg-black hover:text-white transition duration-200'>Clubs</Link>
          </div>
      </div>


      <div className='flex flex-col items-center low:pt-[8vh] lg:pt-[17vh] xl:pt-[15vh] pb-24'>
        <h1 className='vp:font-thin low:text-4xl lg:text-6xl pb-12'>What We Offer</h1>  
        <div className='flex low:flex-col lg:flex-row items-start justify-between gap-4 vp:font-thin low:text-xl lg:text-2xl low:mx-4 lg:mx-0'>
          <div className='max-w-[70vh]'>
            <h2>For Students</h2>
            <div className='border border-[#C5C5C5] rounded-xl px-4 py-4 mt-4 h-[25vh] min-h-[210px] flex flex-col justify-center bg-white'>
              <p className='pb-2'>Easier registration process and Event Awareness</p>
              <p className='low:text-sm lg:text-lg'>PESEvents is your centralized platform for all PES events. Stay informed about upcoming events, ensuring you never miss an opportunity to participate.</p>
            </div>
            <div className='border border-[#C5C5C5] rounded-xl px-4 py-4 mt-4 h-[25vh] min-h-[210px] flex flex-col justify-center bg-white'>
              <p className='pb-2'>Learn about any PES Event or Club, also see a history of Events</p>
              <p className='low:text-sm lg:text-lg'>Access comprehensive information about any PES event or club, including their history, gallery, and much more, all in one place.</p>
            </div>
          </div>
          <div className='max-w-[70vh]'>
          <h2>For Clubs</h2>
            <div className='border border-[#C5C5C5] rounded-xl px-4 py-4 mt-4 h-[25vh] min-h-[210px] flex flex-col justify-center bg-white'>
              <p className='pb-2'>Streamlined Registrations and Statistics</p>
              <p className='low:text-sm lg:text-lg'>Our easy registration process handles the complexities for you. We also provide feedback and statistics on interest levels and general opinions about the club.</p>
            </div>
            <div className='border border-[#C5C5C5] rounded-xl px-4 py-4 mt-4 h-[25vh] min-h-[210px] flex flex-col justify-center bg-white'>
              <p className='pb-2'>Easier Marketing/PR and a recorded History of the Club </p>
              <p className='low:text-sm lg:text-lg'>Provides a user-friendly way for individuals to learn about the club and its activities, fostering a deeper understanding of what the club does and its benefits.</p>
            </div>
          </div>
        </div>
      </div>

      
      <div className='flex flex-col items-center justify-center orgteambg h-[55vh] mb-24 p-4 text-center'>
          <h1 className='font-lale text-white low:text-4xl lg:text-6xl'>Part of an Organising Team?</h1>
          <p className='text-white text-xl vp:font-thin pt-6'>Get your Event/Club onto our site today!</p>
          <Link to='/login-clubs' className='bg-white rounded-xl py-4 px-6 text-black font-sans mt-12 shadow-2xl hover:bg-black hover:text-white transition duration-200'>Get Started</Link>
      </div>

        
      <div className='flex flex-col items-center pb-24'>
        <h1 className='vp:font-thin text-6xl pb-20 '>Gallery</h1>
      </div>

      <Footer />

    </div>
  )
}

export default HomeUnder