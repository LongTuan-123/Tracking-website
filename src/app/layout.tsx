import Head from 'next/head'

// Third-party Imports
import 'react-perfect-scrollbar/dist/css/styles.css'
import { Toaster } from 'react-hot-toast'

// Type Imports
import type { ChildrenType } from '@core/types'

// Style Imports
import '@/app/globals.css'

// Style map
import 'leaflet/dist/leaflet.css'

// Generated Icon CSS Imports
import '@assets/iconify-icons/generated-icons.css'
import RootProvider from '@/libs/provider/RootProvider'

// Import Next.js Head component
export const metadata = {
  title: 'Lottery Code Sales Admin',
  description: 'Administrator page for Lottery Code Sales'
}

const RootLayout = ({ children }: ChildrenType) => {
  // Vars
  const direction = 'ltr'

  return (
    <html id='__next' dir={direction}>
      <Head>
        <link rel='stylesheet' href='https://unpkg.com/leaflet@1.2.0/dist/leaflet.css' />
        <link
          rel='stylesheet'
          href='https://unpkg.com/leaflet-routing-machine@latest/dist/leaflet-routing-machine.css'
        />
      </Head>
      <body className='flex is-full min-bs-full flex-auto flex-col'>
        <RootProvider>
          {children}
          <Toaster
            position='top-right'
            gutter={8}
            toastOptions={{
              // Define default options
              className: '',
              duration: 3000,
              style: {
                background: '#F0FEE7',
                color: '#000'
              }
            }}
          />
        </RootProvider>
      </body>
    </html>
  )
}

export default RootLayout
