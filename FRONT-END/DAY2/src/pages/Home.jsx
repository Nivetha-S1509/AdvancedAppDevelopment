// eslint-disable-next-line no-unused-vars
import React from 'react'

// Initialization for ES Users
import Carousel from '../components/public/Carousel'

const slides = [
  "./1.jpg",
  "./2.jpg",
  "./3.jpg",
]

const Home = () => {
    return (
        <>
            <div className="flex justify-center items-center h-screen w-screen">
      <div className="h-full">
        <Carousel autoSlide={true} >
          {[...slides.map((s) => (
            // eslint-disable-next-line react/jsx-key
            <img src={s} />
          ))]}
        </Carousel>

      </div>
    </div>

          
        </>
    )
}



export default Home