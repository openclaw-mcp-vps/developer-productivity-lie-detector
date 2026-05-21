import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'DevLie Detector — Anonymous Developer Productivity Benchmarking',
  description: 'Track actual coding time vs reported hours. Anonymous industry benchmarks for engineers and managers. $19/mo.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="c439121c-d06e-485a-9118-4cb81be1527c"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
