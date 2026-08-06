"use client";

import { useState } from "react";
import { Search, MapPin } from "lucide-react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { LANGUAGES } from "@/constants/languages";

export function SearchPanel() {
  const [language, setLanguage] = useState("");

  return (
    <div className="relative">
      {/* Warm parchment background shape */}
      <div className="absolute -inset-x-12 -bottom-2 -top-8 rounded-[2rem] sm:-inset-x-10 lg:-left-12 lg:right-0 lg:rounded-l-none lg:rounded-r-[3rem]" />

      <div className="relative px-1 pt-2 sm:px-2">
        <p className="max-w-md pb-2 text-[15px] leading-relaxed text-foreground/70">
          Find and Book Puja in Bangalore
        </p>

        <div className="max-w-md space-y-4">
          {/* Type of service */}
          <div className="flex items-center gap-3 rounded-xl border border-primary bg-background px-5 py-4 shadow-[0_10px_30px_-14px_rgba(120,60,20,0.4)]">
            <input
              type="text"
              placeholder="Type of service"
              className="w-full bg-transparent text-sm text-foreground placeholder:text-foreground/45 focus:outline-none"
            />

            <Search
              className="h-5 w-5 shrink-0 text-brand/70"
              strokeWidth={2}
            />
          </div>

          <div className="relative">
            <Select value={language} onValueChange={setLanguage}>
              <SelectTrigger>
                <SelectValue placeholder="Select language" />
              </SelectTrigger>

              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Languages</SelectLabel>

                  {LANGUAGES.map((item) => (
                    <SelectItem key={item.value} value={item.value}>
                      {item.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>

            <MapPin className="pointer-events-none absolute right-5 top-1/2 size-5 -translate-y-1/2 text-brand/70" />
          </div>
        </div>

        {/* Search Button */}
        <div className="mt-3 flex max-w-md">
          <button className="w-full rounded-xl bg-primary px-8 py-3 text-sm font-semibold text-brand-foreground shadow-[0_12px_28px_-10px_rgba(180,90,30,0.75)] transition-transform hover:scale-[1.02]">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
