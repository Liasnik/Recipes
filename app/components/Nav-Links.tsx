"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const links = [
  { name: "Recipes", href: "/" },
  {
    name: "Quotes",
    href: "/quotes",
  },
  { name: "Carts", href: "/carts" },
  { name: "Posts", href: "/posts" },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      <nav className="flex space-x-4 md:space-x-7">
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={clsx("hover:text-blue-300", {
              " text-blue-300": pathname === link.href,
            })}
          >
            <p>{link.name}</p>
          </Link>
        ))}
      </nav>
    </>
  );
}
