import '@/assets/style/global.css'

export const metadata = {
  title: 'Веб-конструктор',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="w-screen h-screen">{children}</body>
    </html>
  )
}
