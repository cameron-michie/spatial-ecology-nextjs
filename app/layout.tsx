import './global.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Spatial Ecology Game',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-row bg-white">
          <div className="flex flex-row gap-4 p-12 grow">
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}