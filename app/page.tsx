import Features from '@/components/feature/page'
import Components from '@/components/comp/page'
import Technology from '@/components/technology/page'
import Hero from '@/components/hero/page'
import Hire from '@/components/hire/page'
import { Metadata } from 'next';

const data = {
  title:'Website Templates and Components',
  description:'This website provide components and templates of react , next js and typescript support with tailwind css and chakura ui.',
  Url : 'https://acme.com'
}

export const metadata: Metadata = {
  title: `${data.title}`,
  description: `${data.description}`,
  keywords: ['Next.js', 'React', 'JavaScript'],
  metadataBase: new URL(`${data.Url}`),

}
export default function Home() {
  return (
    <>
    <Hero />
    <Technology />
    <Hire />
    <Components />
    <Features />
    </>
  )
}
