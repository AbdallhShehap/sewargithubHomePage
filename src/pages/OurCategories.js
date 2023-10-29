import React from 'react'
import MenuPages from '../componnent/MenuPages'
import ContentOurCategories from '../componnent/ContentOurCategories'
import Footer from '../componnent/Footer'

function OurCategories() {
  const OUR = 'OUR '
  const PATH = "CATEGORIES"
  return (
    <div>
      <div>

        <MenuPages our={OUR} path={PATH}/>
      </div>

      {/* content Our Partners */}
      <div>
        <ContentOurCategories/>
      </div>

      {/* footer */}
      <div>
        <Footer/>
      </div>

    </div>
  )
}

export default OurCategories