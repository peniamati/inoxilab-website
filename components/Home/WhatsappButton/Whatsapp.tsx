import React from 'react'
import Image from 'next/image'

const Whatsapp = () => {
  return (
    <div className="whatsapp-button">
        <a href="https://api.whatsapp.com/send/?phone=%2B5492916446200&text=Hola%2C+quiero+Realizar+una+consulta&type=phone_number&app_absent=0" target='_blank'>
            <Image src="/images/WhatsApp.png" alt="logo de whatsapp" width={50} height={50} className='whatsapp'/>
        </a>
    </div>
  )
}

export default Whatsapp
