import { Button } from "@/library/components/ui/button";
import React from "react";
import ShowCase from "@/components/showcase";
import Link from "next/link";

function HomePage() {
  return (
    <>
      <section className="py-32 px-8 md:px-16 lg:px-44 text-center">
        <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold text-gray-800">
          React components library for faster product prototyping
        </h2>
        <p className="py-8 lg:px-24 text-gray-800 text-lg">
          11+ (& counting) ready to ship and accessible components built with
          React, TailwindCSS, and RadixUI.
        </p>
        <Link href="/documentation/why">
          <Button className="cursor-pointer py-4 px-6">Get Started</Button>
        </Link>
      </section>
      <section className="px-8 md:px-44">
        <ShowCase />
      </section>
      <section className="py-32 px-8 md:px-16 lg:px-44 text-center">
        <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold text-gray-800">
          Want custom components or product prototype?
        </h2>
        <p className="py-8 lg:px-24 text-gray-800 text-lg">
          Build your MVP with our CatalystUI components library OR let us do
          that for you.{" "}
          <span className="font-bold">Your idea to MVP in a weekend</span>.
        </p>
        <p className="pb-8 lg:px-24 text-gray-800 text-lg">
          Flat $99 for an MVP.
        </p>
        <Link href="https://cal.com/swastikyadav/catalystui" target="_blank">
          <Button className="cursor-pointer py-4 px-6">
            Build My Prototype
          </Button>
        </Link>
      </section>
      <footer className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 border-t border-gray-200 text-gray-800 py-4 px-8 lg:px-16">
        <Link href="/">
          <small className="text-sm">CatalystUI</small>
        </Link>
        <Link href="/documentation/why">
          <small className="text-sm">Docs</small>
        </Link>
        <Link href="https://cal.com/swastikyadav/catalystui">
          <small className="text-sm">Book A Call</small>
        </Link>
        <Link href="https://github.com/swastikyadav/catalystui" target="_blank">
          <small className="text-sm">GitHub</small>
        </Link>
        <Link href="https://linkedin.com/in/swastikyadav" target="_blank">
          <small className="text-sm">LinkedIn</small>
        </Link>
      </footer>
    </>
  );
}

export default HomePage;
