import './globals.css';
import type { Metadata } from 'next';
import Header from '../components/Headers';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Kostyrko Games',
  description: 'Добро пожаловать на наш сайт с играми! У нас вы найдете огромный выбор захватывающих игр, которые подарят вам часы увлекательного развлечения. От экшен-игр и головоломок до спортивных симуляторов и казуальных проектов - мы предлагаем что-то для всех любителей игровой индустрии. Присоединяйтесь к нам и окунитесь в мир невероятных приключений прямо сейчас!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className='container'>
          {children}
        
        </main>
        <Footer />
      </body>
    </html>
  )
}
