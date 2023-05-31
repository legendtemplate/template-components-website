import SmallHero from '@/components/Small-Hero/page'

import { Metadata } from 'next';

const data = {
  title:'Our Teams',
  description:'This website provide components and templates of react , next js and typescript support with tailwind css and chakura ui.',
  Url : 'https://acme.com'
}
export const metadata: Metadata = {
  title: `${data.title}`,
  description: `${data.description}`,
  keywords: ['about us'],
  metadataBase: new URL(`${data.Url}`),

}
export default function page() {

  return (
    <>
      <SmallHero head={`${data.title}`} />
    </>
  )
}
