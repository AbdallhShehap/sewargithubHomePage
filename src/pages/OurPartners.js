import React from 'react'
import MenuPages from '../componnent/MenuPages'
import ContentOurPartners from '../componnent/ContentOurPartners'
import Footer from '../componnent/Footer'

function OurStory() {
  const OUR = 'OUR '
  const PATH = "PARTNERS"
  return (
    <div>
      <div>

        <MenuPages our={OUR} path={PATH}/>
      </div>

      {/* content Our Partners */}
      <div >
        <ContentOurPartners/>
      </div>

      {/* footer */}
      <div>
        <Footer/>
      </div>

    </div>
  )
}

export default OurStory