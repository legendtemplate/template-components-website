import { Metadata } from "next";
import SmallHero from "@/components/Small-Hero/page";
const data = {
  title: "Chakura React and Typescript Templates",
  description:
    "This website provide components and templates of react , next js and typescript support with tailwind css and chakura ui.",
  Url: "https://acme.com",
};
export const metadata: Metadata = {
  title: `${data.title}`,
  description: `${data.description}`,
  keywords: ["about us"],
  metadataBase: new URL(`${data.Url}`),
};
export default function page() {
  return (
    <>
      <SmallHero head={`${data.title}`} />
      <p>
        orem ipsum dolor sit amet, consectetur adipiscing elit. Donec
        condimentum quam arcu, eu tempus tortor molestie at. Vestibulum pretium
        condimentum dignissim. Vestibulum ultrices vitae nisi sed imperdiet.
        Mauris quis erat consequat, commodo massa quis, feugiat sapien.
        Suspendisse placerat vulputate posuere. Curabitur neque tortor, mattis
        nec lacus non, placerat congue elit. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Donec condimentum quam arcu, eu tempus
        tortor molestie at. Vestibulum pretium condimentum dignissim. Vestibulum
        ultrices vitae nisi sed imperdiet. Mauris quis erat consequat, commodo
        massa quis, feugiat sapien. Suspendisse placerat vulputate posuere.
        Curabitur neque tortor, mattis nec lacus non, placerat congue elit.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
        condimentum quam arcu, eu tempus tortor molestie at. Vestibulum pretium
        condimentum dignissim. Vestibulum ultrices vitae nisi sed imperdiet.
        Mauris quis erat consequat, commodo massa quis, feugiat sapien.
        Suspendisse placerat vulputate posuere. Curabitur neque tortor, mattis
        nec lacus non, placerat congue elit.
      </p>
      <p>
        orem ipsum dolor sit amet, consectetur adipiscing elit. Donec
        condimentum quam arcu, eu tempus tortor molestie at. Vestibulum pretium
        condimentum dignissim. Vestibulum ultrices vitae nisi sed imperdiet.
        Mauris quis erat consequat, commodo massa quis, feugiat sapien.
        Suspendisse placerat vulputate posuere. Curabitur neque tortor, mattis
        nec lacus non, placerat congue elit. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Donec condimentum quam arcu, eu tempus
        tortor molestie at. Vestibulum pretium condimentum dignissim. Vestibulum
        ultrices vitae nisi sed imperdiet. Mauris quis erat consequat, commodo
        massa quis, feugiat sapien. Suspendisse placerat vulputate posuere.
        Curabitur neque tortor, mattis nec lacus non, placerat congue elit.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
        condimentum quam arcu, eu tempus tortor molestie at. Vestibulum pretium
        condimentum dignissim. Vestibulum ultrices vitae nisi sed imperdiet.
        Mauris quis erat consequat, commodo massa quis, feugiat sapien.
        Suspendisse placerat vulputate posuere. Curabitur neque tortor, mattis
        nec lacus non, placerat congue elit.
      </p>
      <p>
        orem ipsum dolor sit amet, consectetur adipiscing elit. Donec
        condimentum quam arcu, eu tempus tortor molestie at. Vestibulum pretium
        condimentum dignissim. Vestibulum ultrices vitae nisi sed imperdiet.
        Mauris quis erat consequat, commodo massa quis, feugiat sapien.
        Suspendisse placerat vulputate posuere. Curabitur neque tortor, mattis
        nec lacus non, placerat congue elit. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Donec condimentum quam arcu, eu tempus
        tortor molestie at. Vestibulum pretium condimentum dignissim. Vestibulum
        ultrices vitae nisi sed imperdiet. Mauris quis erat consequat, commodo
        massa quis, feugiat sapien. Suspendisse placerat vulputate posuere.
        Curabitur neque tortor, mattis nec lacus non, placerat congue elit.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
        condimentum quam arcu, eu tempus tortor molestie at. Vestibulum pretium
        condimentum dignissim. Vestibulum ultrices vitae nisi sed imperdiet.
        Mauris quis erat consequat, commodo massa quis, feugiat sapien.
        Suspendisse placerat vulputate posuere. Curabitur neque tortor, mattis
        nec lacus non, placerat congue elit.
      </p>
    </>
  );
}
