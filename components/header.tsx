import { GithubIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header className="flex items-center justify-between border-b border-gray-200 text-gray-800 py-4 px-8 lg:px-16">
      <Link href="/">
        <h1 className="text-lg font-bold">CatalystUI</h1>
      </Link>
      <span className="flex gap-4 items-center text-sm text-gray-800">
        <Link href="/documentation/why">Docs</Link>
        <Link href="/documentation/templates">Templates</Link>
        <Link href="https://github.com/swastikyadav/catalystui" target="_blank">
          <GithubIcon className="text-gray-700" />
        </Link>
      </span>
    </header>
  );
}

export default Header;
