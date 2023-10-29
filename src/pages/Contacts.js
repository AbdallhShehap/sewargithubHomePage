import React from 'react'
import MenuPages from '../componnent/MenuPages'
import ContentContacts from '../componnent/ContentContacts'
import Footer from '../componnent/Footer'

function Contacts() {
  const OUR = 'LET’S TALK!'
  const PATH = "CONTACTS"
  return (
    <div>
      <div>

        <MenuPages our={OUR} path={PATH}/>
      </div>

      {/* content Our contact */}
      <div>
        <ContentContacts/>
      </div>

      {/* footer */}
      <div>
        <Footer/>
      </div>

    </div>
  )
}

export default Contacts