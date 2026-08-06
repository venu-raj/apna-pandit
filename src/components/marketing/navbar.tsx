"use client";

import { cn } from "@/utils";
import { MenuIcon, XIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import Icons from "../global/icons";
import { Button } from "../ui/button";
import MobileMenu from "./mobile-menu";
import { NAV_LINKS, Routes } from "@/constants";
import Image from "next/image";
import { BookingFormDialog } from "../form/booking-form-dialog";
import { GalleryItem } from "@/types/gallery";
import { SERVICESGALLERY } from "@/constants/services-gallery";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <div className="relative w-full h-full">
        <div className="z-100 hidden lg:block fixed pointer-events-none inset-x-0 h-[88px] bg-[oklch(0.9901_0.0161_95.2193_/_0.2)] backdrop-blur-sm [mask:linear-gradient(to_bottom,#000_20%,transparent_calc(100%-20%))]"></div>
        <header
          className={cn(
            "fixed top-4 inset-x-0 mx-auto max-w-6xl px-2 md:px-12 z-100 transition-all duration-300 ease-in-out",
            isOpen ? "h-[calc(100dvh-2rem)]" : "h-14 md:h-16",
          )}
        >
          <div className="backdrop-blur-xl rounded-xl lg:rounded-full border border-primary/40 h-full flex flex-col overflow-hidden relative">
            <div className="flex items-center justify-between w-full px-4 min-h-14 md:min-h-16 shrink-0 pb-1">
              {/* Left side: Logo + Nav */}
              <div className="flex items-center gap-6 lg:gap-8">
                <Link
                  href={Routes.Home}
                  className="text-lg font-semibold text-foreground group"
                >
                  <div className="flex gap-2 items-center">
                    <Image
                      src={"/logo.jpg"}
                      width={35}
                      height={35}
                      alt="logo"
                      className=" rounded-md"
                    />
                    <Icons.wordmark className="w-auto h-5 transition-all group-hover:drop-shadow-[0_0_8px_rgba(0,85,255,0.6)]" />
                  </div>
                </Link>

                <div className="hidden lg:flex items-center gap-1">
                  {NAV_LINKS.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      className="text-sm text-foreground/70 hover:text-foreground font-medium transition-colors px-3 py-1.5"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Right side: CTA + Mobile Menu */}
              <div className="flex items-center gap-2 lg:gap-3">
                <Button
                  className="hidden lg:flex"
                  onClick={() => {
                    setSelectedItem(SERVICESGALLERY[0]);
                  }}
                >
                  Book Now
                </Button>

                <Button
                  size="icon-sm"
                  variant="ghost"
                  onClick={() => setIsOpen((prev) => !prev)}
                  className="lg:hidden"
                >
                  {isOpen ? (
                    <XIcon className="size-4 duration-300" />
                  ) : (
                    <MenuIcon className="size-4 duration-300" />
                  )}
                </Button>
              </div>
            </div>

            <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
        </header>
      </div>
      <BookingFormDialog
        open={!!selectedItem}
        onOpenChange={(open) => {
          if (!open) {
            setSelectedItem(null);
          }
        }}
        item={selectedItem}
      />
    </>
  );
};

export default Navbar;
