import Image from "next/image";
import Link from "next/link";

export default function Logotype() {
  return (
    <Link
      href={"/"}
      className="hover:opacity-90 transition-all flex items-center justify-center"
    >
      <Image src="/logo-dark.svg" alt="Logotype" width={36} height={36} />
    </Link>
  );
}
