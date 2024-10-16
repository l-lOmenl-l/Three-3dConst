export const metadata = {
    title: 'Авторизация',
  }

export default function Layout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <main className="w-full h-full flex items-center justify-center bg-slate-100 p-10 bg-[url('/backgroundLogin.jpg')] bg-contain relative">
        <div className="w-full h-full absolute bg-slate-700 right-0 opacity-65"></div>
        {children}
      </main>
    )
  }