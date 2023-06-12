import { Metadata } from 'next';
import SmallHero from '@/src/components/layout/Small-Hero/page'

import Card from '@/components/templates/premium-templates/blog-website/card/page'

// ecommerce-website
const data = {
  title:'Blogs Templates',
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
          <Card />
      </>
    )
  }
  