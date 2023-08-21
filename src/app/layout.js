import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'GitHub-Xplorer:Discover GitHub Repositories: Explore Coding Projects, Open Source, and More | Find Top Repos',
  description: 'Uncover a world of coding innovation with our GitHub explorer. Dive into a diverse array of repositories, from cutting-edge coding projects to impactful open-source initiatives. Explore, learn, and contribute to the heart of developer collaboration. Discover the top repositories that inspire, empower, and drive technological advancement.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
