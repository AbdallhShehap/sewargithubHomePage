import React from 'react'
import MenuPages from '../componnent/MenuPages'
import BannerOurStory from '../componnent/BannerOurStory'
import SlideOurStory from '../componnent/SlideOurStory'
import Footer from '../componnent/Footer'

function OurStory() {
  const OUR = 'OUR '
  const PATH = "STORY"
  return (
    <div>
      <div>

        <MenuPages our={OUR} path={PATH}/>
      </div>

      <div>
        <BannerOurStory/>
      </div>

      {/* slider */}
      <div>
        <SlideOurStory/>
      </div>

      {/* footer */}
      <div>
        <Footer/>
      </div>

    </div>
  )
}

export default OurStory