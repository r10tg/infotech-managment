"use client";

import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const currentPath = usePathname();

  const links = [
    { label: "Leaves", href: "/leaves" },
    { label: "Devices", href: "/device" },
  ];

  return (
    <nav className="flex space-x-6 border-b mb-5 py-5 px-5 h-14 items-center">
      <Link href="/" className="py-5">
        {" "}
        <Image alt="logo" src="/logo.svg" width={50} height={50} />{" "}
      </Link>
      <ul className="flex space-x-6">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={classNames({
              "text-primary-1": link.href === currentPath,
              "text-zinc-300": link.href !== currentPath,
              "hover:text-zinc-500 transition-colors": true,
            })}
          >
            {" "}
            {link.label}{" "}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
