import Link from "next/link";
import React from "react";

const Navbar = () => {
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
              className="text-zinc-500 hover:text-zinc-900 transition-colors"
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
