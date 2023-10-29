import React from 'react'
import MenuPages from '../componnent/MenuPages'
import ContentOurBlog from '../componnent/ContentOurBlog'
import Footer from '../componnent/Footer'

function OurBlog() {
  const OUR = 'LATEST NEWS'
  const PATH = "OUR BLOG"
  return (
    <div>
      <div>

        <MenuPages our={OUR} path={PATH}/>
      </div>

      {/* content Our blogs */}
      <div>
        <ContentOurBlog/>
      </div>

      {/* footer */}
      <div>
        <Footer/>
      </div>

    </div>
  )
}

export default OurBlog