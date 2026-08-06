"use client";

import React, { useState } from "react";
import Wrapper from "@/components/global/wrapper";
import Icons from "@/components/global/icons";
import { NAV_LINKS, POPULAR_PUJAS, Routes, socialLinks } from "@/constants";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { cn } from "@/utils";
import { CONTACT_DETAILS } from "@/constants/contact";
import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";

const Footer = () => {
  const [email, setEmail] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter:", email);
    setEmail("");
  };

  return (
    <footer className="w-full relative mt-16 lg:mt-24 overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-foreground/0 via-foreground/20 to-foreground/0" />
      <div className="absolute top-0 inset-x-0 w-1/2 mx-auto h-4 bg-foreground/40 blur-[4rem]" />

      <Wrapper className="py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          {/* Logo + Newsletter */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block">
              <div className="flex items-center gap-2">
                <Image
                  src="/logo.jpg"
                  width={45}
                  height={45}
                  alt="logo"
                  className="rounded-md"
                />

                <Icons.wordmark className="w-auto h-5 transition-all group-hover:drop-shadow-[0_0_8px_rgba(0,85,255,0.6)]" />
              </div>
            </Link>
            <p className="text-sm text-muted-foreground mt-4 max-w-xs">
              Authentic Vedic astrology, Puja, Katha and Pravachan services by
              experienced Pandits.
            </p>
            <form onSubmit={handleSubmit} className="mt-6 w-full md:max-w-xs">
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 h-8.5 text-sm bg-foreground/5 border-foreground/10 focus-visible:ring-0 rounded-full px-4"
                />

                <Button type="submit" size="sm">
                  Subscribe
                </Button>
              </div>
            </form>
            {/* Social Links */}{" "}
            <div className="flex mt-6 items-center gap-4">
              {socialLinks.map((social) => (
                <Link key={social.label} href={social.href} target="_blank">
                  <Image
                    src={`/icons/integrations/${social.icon}.svg`}
                    alt={social.label}
                    width={20}
                    height={20}
                    className={cn("size-5", social.icon === "x" && "size-4")}
                  />{" "}
                </Link>
              ))}{" "}
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:col-span-7">
            {/* Popular Pujas + Quick Links */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Popular Pujas */}
              <div>
                <h3 className="text-sm font-semibold text-foreground">
                  Popular Pujas
                </h3>

                <ul className="mt-4 space-y-3">
                  {POPULAR_PUJAS.map((puja) => (
                    <li key={puja.label}>
                      <Link
                        href={puja.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {puja.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="text-sm font-semibold text-foreground">
                  Quick Links
                </h3>

                <ul className="mt-4 space-y-3">
                  {NAV_LINKS.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact Information */}
            <div className="mt-10 pt-10 border-t border-foreground/5">
              <h3 className="text-sm font-semibold text-foreground">
                Contact Information
              </h3>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-8">
                {CONTACT_DETAILS.map((contact) => (
                  <div key={contact.title}>
                    <h4 className="text-sm font-medium text-foreground">
                      {contact.title}
                    </h4>

                    <div className="mt-3 space-y-3 text-sm text-muted-foreground">
                      <p className="font-medium text-foreground">
                        {contact.name}
                      </p>

                      <div className="flex gap-2">
                        <MapPinIcon className="size-4 shrink-0 mt-0.5" />

                        <p>
                          {contact.address.map((line) => (
                            <span key={line} className="block">
                              {line}
                            </span>
                          ))}
                        </p>
                      </div>

                      {contact.email && (
                        <div className="flex gap-2">
                          <MailIcon className="size-4 shrink-0 mt-0.5" />

                          <Link
                            href={`mailto:${contact.email}`}
                            className="hover:text-foreground transition-colors"
                          >
                            {contact.email}
                          </Link>
                        </div>
                      )}

                      {contact.phones.map((phone) => (
                        <div key={phone} className="flex gap-2">
                          <PhoneIcon className="size-4 shrink-0 mt-0.5" />

                          <Link
                            href={`tel:${phone.replace(/\s/g, "")}`}
                            className="hover:text-foreground transition-colors"
                          >
                            {phone}
                          </Link>
                        </div>
                      ))}

                      {contact.description && <p>{contact.description}</p>}

                      {contact.services && (
                        <ul className="space-y-1">
                          {contact.services.map((service) => (
                            <li key={service}>• {service}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;
