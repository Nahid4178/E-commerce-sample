import React from "react"
import styled from "styled-components"
import SlideCard from "./SlideCard"

const SliderHome = () => {
  const Wrapper = styled.section`
    
  `
  return (
    <Wrapper>
      <section className='homeSlide contentWidth'>
        <div className='container'>
          <SlideCard />
        </div>
      </section>
      </Wrapper>
    
  )
}

export default SliderHome
