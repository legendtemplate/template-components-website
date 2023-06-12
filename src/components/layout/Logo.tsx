import Link from "next/link";

export default function Logo() {
  return (
    <div>
      <Link href="/">
        <img
          src="/logo.png"
          className="md:h-16 h-12 w-auto"
          alt="website template and components logo"
          title="website template and components logo"
        />
      </Link>
    </div>
  );
}
