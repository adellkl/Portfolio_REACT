import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";

import Link from "next/link";

import Image from 'next/image'
import logoimg from "../image/logo.jpg"
import Particles from "react-particles";

const Navigation = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="">
      <div className="max-w-6xl  mx-auto px-9 py-9 md:py-4  ">
        <div className="flex md:flex-row justify-between items-center">
          <div className="flex flex-col ">
            <Link href="/">
              <Image
                className="w-11	"
                src={logoimg}
                alt="Picture of the author"

              />
            </Link>

            {/* Format PC */}

          </div>

          <div className="space-x-9 hidden md:block">
            <Link className=" hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm text-lg " href="/about">
              A Propos
            </Link>

            <Link className=" hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm text-lg" href="/projects">
              Projets
            </Link>
          </div>

          <div className="space-x-4 flex flex-row items-center">
            <button
              aria-label="Toggle Dark Mode"
              type="button"
              className="w-15 h-15 p-3 rounded focus:outline-none"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {mounted && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="currentColor"
                  className="w-7 h-7 text-grey-500 dark:text-grey-500"
                >
                  {theme === "dark" ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                  )}
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Format Télephone */}


      </div>

    </div>

  )
}

export default Navigation;

