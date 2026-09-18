"use client";

import { useMemo, useState } from "react";
import { MapPin, Search, X, ChevronDown, ChevronUp } from "lucide-react";

import {
  PLACES,
  SERVICES,
  type Place,
  type Service,
} from "@/constants/puja-search";

import { Modal } from "../ui/dialog";
import { WHATSAPP_NUMBER } from "@/constants/contact";
import Image from "next/image";

export default function SearchPanel() {
  const [showModal, setShowModal] = useState(false);

  const [serviceQuery, setServiceQuery] = useState("");
  const [locationQuery, setLocationQuery] = useState("");

  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);

  const [serviceFocused, setServiceFocused] = useState(false);
  const [locationFocused, setLocationFocused] = useState(false);

  const [showAllServices, setShowAllServices] = useState(false);
  const [showAllPlaces, setShowAllPlaces] = useState(false);

  /*
   * SERVICES
   */
  const filteredServices = useMemo(() => {
    const query = serviceQuery.trim().toLowerCase();

    if (!query) {
      return showAllServices ? SERVICES : SERVICES.slice(0, 8);
    }

    return SERVICES.filter((service) =>
      service.title.toLowerCase().includes(query),
    );
  }, [serviceQuery, showAllServices]);

  /*
   * PLACES
   */
  const filteredPlaces = useMemo(() => {
    const query = locationQuery.trim().toLowerCase();

    if (!query) {
      return showAllPlaces ? PLACES : PLACES.slice(0, 8);
    }

    return PLACES.filter((place) => place.title.toLowerCase().includes(query));
  }, [locationQuery, showAllPlaces]);

  /*
   * RESET
   */
  const resetSearch = () => {
    setServiceQuery("");
    setLocationQuery("");

    setSelectedService(null);
    setSelectedPlace(null);

    setServiceFocused(false);
    setLocationFocused(false);

    setShowAllServices(false);
    setShowAllPlaces(false);
  };

  /*
   * CLOSE
   */
  const handleClose = () => {
    setShowModal(false);
    resetSearch();
  };

  /*
   * WHATSAPP SEARCH
   */
  const handleSearch = () => {
    if (!selectedService || !selectedPlace) {
      return;
    }

    const message = `🙏 Namaste,

I’m interested in booking a puja service.

🪔 Puja: ${selectedService.title}
📍 Location: ${selectedPlace.title}

I found this service on your website and would like to know more.

Could you please share the available dates, package details, and provide a quote?

Thank you. 🙏`;

    const phoneNumber = WHATSAPP_NUMBER;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message,
    )}`;

    window.open(whatsappUrl, "_blank");

    handleClose();
  };

  return (
    <>
      {/* =====================================================
          SEARCH TRIGGER
      ====================================================== */}
      <button
        type="button"
        onClick={() => setShowModal(true)}
        className="group flex h-14 w-full max-w-xl items-center rounded-full border border-border bg-background p-1.5 text-left shadow-sm transition hover:border-primary/50 hover:shadow-md"
      >
        {/* ICON */}
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
          <Search className="h-5 w-5" />
        </div>

        {/* TEXT */}
        <div className="ml-3 flex-1">
          <p className="text-sm font-medium">What puja are you looking for?</p>

          <p className="text-xs text-muted-foreground">
            Search a puja and choose your location
          </p>
        </div>

        {/* SEARCH BUTTON */}
        <div className="mr-1 hidden rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white sm:block">
          Search
        </div>
      </button>

      {/* =====================================================
          SEARCH MODAL
      ====================================================== */}
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        onClose={resetSearch}
        className="max-w-2xl rounded-2xl mt-23"
      >
        <div className="flex max-h-[85vh] flex-col">
          {/* =================================================
              HEADER
          ================================================== */}
          <div className="flex items-center justify-between border-b px-5 py-4">
            <div>
              <h2 className="text-lg font-semibold">Find a Puja</h2>

              <p className="mt-1 text-sm text-muted-foreground">
                Choose a service and location
              </p>
            </div>

            <button
              type="button"
              onClick={handleClose}
              className="flex h-9 w-9 items-center justify-center rounded-full transition hover:bg-muted"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* =================================================
              CONTENT
          ================================================== */}
          <div className="min-h-0 flex-1 overflow-y-auto p-5 [scrollbar-width:thin]">
            <div className="space-y-7">
              {/* =================================================
                  SERVICE
              ================================================== */}
              <section>
                <label className="mb-2 block text-sm font-medium">
                  What service do you need?
                </label>

                {/* SERVICE INPUT */}
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

                  <input
                    autoFocus
                    value={serviceQuery}
                    onFocus={() => {
                      setServiceFocused(true);
                      setLocationFocused(false);
                    }}
                    onBlur={() => {
                      setTimeout(() => {
                        setServiceFocused(false);
                      }, 100);
                    }}
                    onChange={(e) => {
                      setServiceQuery(e.target.value);
                      setSelectedService(null);
                      setServiceFocused(true);
                      setLocationFocused(false);
                      setShowAllServices(false);
                    }}
                    placeholder="Search Puja, Homa, Havan..."
                    className="h-12 w-full rounded-xl border bg-background pl-11 pr-4 text-sm outline-none transition focus:border-primary"
                  />
                </div>

                {/* SERVICE RECOMMENDATIONS */}
                {serviceFocused && (
                  <div className="mt-4">
                    {/* TITLE */}
                    <div className="mb-3 flex items-center justify-between">
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        {serviceQuery ? "Search results" : "Recommended"}
                      </p>

                      {!serviceQuery && (
                        <span className="text-xs text-muted-foreground">
                          {SERVICES.length} services
                        </span>
                      )}
                    </div>

                    {/* RESULTS */}
                    {filteredServices.length > 0 ? (
                      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                        {filteredServices.map((service) => {
                          const active = selectedService?.id === service.id;

                          return (
                            <button
                              key={service.id}
                              type="button"
                              onMouseDown={(e) => {
                                // Prevent input blur before click
                                e.preventDefault();
                              }}
                              onClick={() => {
                                setSelectedService(service);
                                setServiceQuery(service.title);
                                setServiceFocused(false);
                              }}
                              className={`flex items-center gap-3 rounded-xl border p-2.5 text-left transition ${
                                active
                                  ? "border-black bg-black text-white"
                                  : "border-border hover:border-black"
                              }`}
                            >
                              {/* IMAGE */}
                              <Image
                                src={service.image}
                                alt={service.slug}
                                width={80}
                                height={80}
                                className="h-12 w-12 shrink-0 rounded-lg object-cover"
                              />

                              {/* DETAILS */}
                              <div className="min-w-0">
                                <p className="truncate text-sm font-medium">
                                  {service.title}
                                </p>

                                {service.price ? (
                                  <p
                                    className={`mt-0.5 text-xs ${
                                      active
                                        ? "text-white/70"
                                        : "text-muted-foreground"
                                    }`}
                                  >
                                    Starting from ₹
                                    {service.price.toLocaleString("en-IN")}
                                  </p>
                                ) : null}
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    ) : (
                      <div className="rounded-xl border border-dashed p-6 text-center">
                        <p className="text-sm font-medium">
                          No puja services found
                        </p>

                        <p className="mt-1 text-xs text-muted-foreground">
                          Try searching for another service.
                        </p>
                      </div>
                    )}

                    {/* SHOW ALL SERVICES */}
                    {!serviceQuery && SERVICES.length > 8 && (
                      <button
                        type="button"
                        onMouseDown={(e) => {
                          e.preventDefault();
                        }}
                        onClick={() =>
                          setShowAllServices((previous) => !previous)
                        }
                        className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl border py-2.5 text-sm font-medium transition hover:bg-muted"
                      >
                        {showAllServices ? (
                          <>
                            Show fewer services
                            <ChevronUp className="h-4 w-4" />
                          </>
                        ) : (
                          <>
                            Show all services
                            <ChevronDown className="h-4 w-4" />
                          </>
                        )}
                      </button>
                    )}
                  </div>
                )}
              </section>

              {/* =================================================
                  LOCATION
              ================================================== */}
              <section>
                <label className="mb-2 block text-sm font-medium">
                  Where do you need it?
                </label>

                {/* LOCATION INPUT */}
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

                  <input
                    value={locationQuery}
                    onFocus={() => {
                      setLocationFocused(true);
                      setServiceFocused(false);
                    }}
                    onBlur={() => {
                      setTimeout(() => {
                        setLocationFocused(false);
                      }, 100);
                    }}
                    onChange={(e) => {
                      setLocationQuery(e.target.value);
                      setSelectedPlace(null);
                      setLocationFocused(true);
                      setServiceFocused(false);
                      setShowAllPlaces(false);
                    }}
                    placeholder="Search city..."
                    className="h-12 w-full rounded-xl border bg-background pl-11 pr-4 text-sm outline-none transition focus:border-primary"
                  />
                </div>

                {/* LOCATION RECOMMENDATIONS */}
                {locationFocused && (
                  <div className="mt-4">
                    {/* TITLE */}
                    <div className="mb-3 flex items-center justify-between">
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        {locationQuery ? "Search results" : "Recommended"}
                      </p>

                      {!locationQuery && (
                        <span className="text-xs text-muted-foreground">
                          {PLACES.length} locations
                        </span>
                      )}
                    </div>

                    {/* RESULTS */}
                    {filteredPlaces.length > 0 ? (
                      <div className="flex flex-wrap gap-2">
                        {filteredPlaces.map((place) => {
                          const active = selectedPlace?.id === place.id;

                          return (
                            <button
                              key={place.id}
                              type="button"
                              onMouseDown={(e) => {
                                // Prevent input blur before click
                                e.preventDefault();
                              }}
                              onClick={() => {
                                setSelectedPlace(place);
                                setLocationQuery(place.title);
                                setLocationFocused(false);
                              }}
                              className={`flex items-center gap-2 rounded-full border py-1.5 pl-1.5 pr-4 text-sm transition ${
                                active
                                  ? "border-black bg-black text-white"
                                  : "border-border hover:border-black"
                              }`}
                            >
                              <img
                                src={place.image}
                                alt={place.title}
                                loading="lazy"
                                className="h-7 w-7 shrink-0 rounded-full object-cover ring-1 ring-border"
                              />
                              <span>{place.title}</span>
                            </button>
                          );
                        })}
                      </div>
                    ) : (
                      <div className="rounded-xl border border-dashed p-6 text-center">
                        <p className="text-sm font-medium">
                          No locations found
                        </p>

                        <p className="mt-1 text-xs text-muted-foreground">
                          Try searching for another city.
                        </p>
                      </div>
                    )}

                    {/* SHOW ALL LOCATIONS */}
                    {!locationQuery && PLACES.length > 8 && (
                      <button
                        type="button"
                        onMouseDown={(e) => {
                          e.preventDefault();
                        }}
                        onClick={() =>
                          setShowAllPlaces((previous) => !previous)
                        }
                        className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl border py-2.5 text-sm font-medium transition hover:bg-muted"
                      >
                        {showAllPlaces ? (
                          <>
                            Show fewer locations
                            <ChevronUp className="h-4 w-4" />
                          </>
                        ) : (
                          <>
                            Show all locations
                            <ChevronDown className="h-4 w-4" />
                          </>
                        )}
                      </button>
                    )}
                  </div>
                )}
              </section>

              {/* =================================================
                  SELECTION
              ================================================== */}

              {/* =================================================
                  WHATSAPP
              ================================================== */}
              <button
                type="button"
                disabled={!selectedService || !selectedPlace}
                onClick={handleSearch}
                className="h-12 w-full rounded-full bg-black text-sm font-medium text-white transition hover:bg-black/80 disabled:cursor-not-allowed disabled:opacity-40"
              >
                Get a Quote on WhatsApp
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
