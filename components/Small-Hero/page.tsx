import Container from "@/components/container/page";

export default function page(props: { head: string }) {
  return (
    <div className="shero py-32">
      <Container>
        <div className="flex justify-center items-center flex-col">
          <h1 className="text-center text-white md:text-4xl text-2xl font-semibold">
            {props.head}
          </h1>
          <button className="bg-red-500 text-white py-3 px-6 rounded mt-5 font-medium">
            Get Started
          </button>
        </div>
      </Container>
    </div>
  );
}
