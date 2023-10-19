import Link from 'next/link'
import React from 'react'

function Email() {
  return (
    <div className='email'>
          <Link href="mailto:mfaladan@gmail.com" className='email-link'>
              mfaladan@gmail.com
      </Link>
    </div>
  )
}

export default Email
