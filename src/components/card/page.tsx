import Link from "next/link";
import { Card } from "@/types/index";

interface Props {
  key: string;
  data: Card;
}
export default function page({ key, data }: Props) {
  const { href, img, label } = data;
  return (
    <>
      <Link href={href}>
        <div className="card my-7 mx-auto h-48 rounded-lg cursor-pointer">
          <div className="rounded-lg">
            <img
              className="object-cover rounded-lg"
              src={img}
              alt={label}
              title={label}
            />{" "}
          </div>
          <div className="text-white text-center font bold -mt-[100px] h-10 text-2xl">
            <p>{label}</p>
          </div>
        </div>
      </Link>
    </>
  );
}