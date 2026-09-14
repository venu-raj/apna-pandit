"use client";

import { useState } from "react";
import Container from "@/components/global/container";
import Wrapper from "@/components/global/wrapper";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { BookingFormDialog } from "../form/booking-form-dialog";
import { Product } from "@/types/product";

type GalleryProps = {
  gallery: Product[];
  title: string;
  description: string;
};

const Gallery = ({ gallery, title, description }: GalleryProps) => {
  const [selectedItem, setSelectedItem] = useState<Product | null>(null);

  return (
    <div className="flex flex-col items-center justify-center relative w-full pb-16 lg:pb-24">
      <Wrapper>
        <Container>
          <div className="flex flex-col items-start lg:items-center">
            <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight">
              {title}
            </h2>

            <p className="text-base lg:text-lg text-muted-foreground mt-2 max-w-md text-center">
              {description}
            </p>
          </div>
        </Container>

        <div className="w-full mt-10">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {gallery.map((item) => (
              <Item
                key={item.id}
                item={item}
                onClick={() => setSelectedItem(item)}
              />
            ))}
          </div>
        </div>
      </Wrapper>

      {/* <BookingFormDialog
        open={!!selectedItem}
        onOpenChange={(open) => {
          if (!open) {
            setSelectedItem(null);
          }
        }}
        item={selectedItem}
      /> */}
    </div>
  );
};

const Item = ({ item, onClick }: { item: Product; onClick: () => void }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/puja-services/${item.id}/${item.title.split(" ").join("-")}`);

    onClick();
  };

  return (
    <Container>
      <button onClick={handleClick} className="flex flex-col w-full text-left">
        <div className="relative aspect-square bg-foreground/5 border border-border/20 rounded-xl overflow-hidden">
          <Image
            src={item.srcUrl}
            alt={item.title}
            fill
            className="object-cover"
          />
        </div>

        <div className="mt-4">
          <span className="px-3 py-1 rounded-sm bg-primary/20 text-xs">
            {item.category}
          </span>

          <h3 className="text-lg font-semibold mt-2">{item.title}</h3>

          <p className="text-muted-foreground text-sm">{item.description}</p>
        </div>
      </button>
    </Container>
  );
};

export default Gallery;
