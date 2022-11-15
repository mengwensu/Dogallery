import React, { Component }  from 'react';
import { LoremIpsum } from 'react-lorem-ipsum';
const FAQ = () => {
  return ( 
    <div className='Faq'>
      <h1 className='faqTitle'>FAQ</h1>
      <h1 className='faqUnderline'>________________</h1>
      <p className='faqInfo'>
        <div>
          <p className='question'>Q: Are the listed health issues all I need to worry about?</p>
          <p className='answer'> A: No! Absolutely not! The listed health issues are only some of the more common issues that one is likely 
                                 to run into when owning that type of dog. Each animal is different just like each human is different so it’s
                                important to monitor all aspects of not just your dog’s health but any pet’s health.</p>
        </div>
        <div>
          <p className='question'>Q: Why are some of the dog’s origins more specific than others? </p>
          <p className='answer'> A: There are a variety of reasons why we might know more about a specific breed’s origin than another. 
                                 For the most part the main reason will be documentation. When a specific person in recent history goes 
                                 to make a dog breed for a specific reason that will tend to be a lot easier to track down than some ancient
                                dog breed. However, we also have cases like the Pug which is a very old dog breed but we still know where it came from.</p>
        </div>
        <div>
          <p className='question'>Q: The dog breed I’m looking for isn't here, where is it? </p>
          <p className='answer'> A: We simply haven’t gotten to it yet! This website is an early model for what we’d want the final version to 
                                 look like and it takes a lot of time gathering all the necessary information for a specific dog breed. If the 
                                 breed you’re looking for isn’t here then go to the American Kennel Club website or a similar website and they’ll 
                                 probably have what you’re looking for.</p>
        </div>
    
        <div>
          <p className='question'>Q: Why don’t you have a more in-depth explanation of X listed health issue, i.e. dysplasia or bloat? </p>
          <p className='answer'> A: If we were to have an in-depth explanation of every listed health issue for every dog breed then the pages would
                                 quickly become massively bloated and harder to read. If you are curious to know more about a specific health issue 
                                then searching it up will yield the results you are looking for.</p>
        </div>
        <div>
          <p className='question'>Q: Why don’t you have X trait(s) listed on a dog’s page?  </p>
          <p className='answer'> A: Again, we want to keep things clean and readable. Additional information may be added later but we tried limiting
                                 ourselves to the information we thought most important about a dog while keeping the webpage easily traversable and 
                                 easily readable to anyone.</p>
        </div>
      </p>
      {/* <div className='faqCircle'> */}
    {/* </div> */}
  </div>

  )
}

export default FAQ