"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {

    const pathname = usePathname();
    console.log(pathname);

  const links = [
    {
      to: "/",
      name: "Dashboard",
    },
    {
      to: "/issues",
      name: "Issue",
    },
  ];

  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
      <Link href={"/"}>Issue-Tracker</Link>
      <ul className="flex space-x-6">
        {links.map((link, index) => (
          <li key={index}>
            <Link
              href={`${link.to}`}
              className={`${link.to === pathname ? "text-zinc-200" : "text-zinc-400"} hover:text-zinc-100 transition-colors`}
              >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
