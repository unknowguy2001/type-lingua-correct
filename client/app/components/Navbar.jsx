import chicken from "@/public/chicken.png";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="navbar bg-base-100">
      <Link href="/" className="btn btn-ghost text-xl text-white">
        Type Linuga Correct{" "}
        <Image
          src={chicken}
          alt="Picture of the chicken"
          width={30}
          height={30}
        />
      </Link>
    </nav>
  );
};

export default Navbar;
