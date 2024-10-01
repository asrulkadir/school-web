"use client";

import Banner from "@/components/Banner";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

const Gallery = () => {
  const [showCaption, setShowCaption] = useState("");
  const galleryItems = [
    { src: "https://picsum.photos/400/300", caption: "Beautiful Landscape" },
    { src: "https://picsum.photos/500/300", caption: "City at Night" },
    { src: "https://picsum.photos/300/400", caption: "Mountain View" },
    { src: "https://picsum.photos/600/400", caption: "Sunset by the Sea" },
    { src: "https://picsum.photos/400/500", caption: "Forest Pathway" },
    { src: "https://picsum.photos/500/600", caption: "Snowy Mountains" },
    { src: "https://picsum.photos/600/500", caption: "Beach Sunrise" },
    { src: "https://picsum.photos/300/500", caption: "Countryside Road" },
    { src: "https://picsum.photos/500/300", caption: "Lush Green Valley" },
    { src: "https://picsum.photos/400/300", caption: "Beautiful Landscape" },
    { src: "https://picsum.photos/500/300", caption: "City at Night" },
    { src: "https://picsum.photos/300/400", caption: "Mountain View" },
    { src: "https://picsum.photos/600/400", caption: "Sunset by the Sea" },
    { src: "https://picsum.photos/400/500", caption: "Forest Pathway" },
    { src: "https://picsum.photos/500/600", caption: "Snowy Mountains" },
    { src: "https://picsum.photos/600/500", caption: "Beach Sunrise" },
    { src: "https://picsum.photos/300/500", caption: "Countryside Road" },
    { src: "https://picsum.photos/500/300", caption: "Lush Green Valley" },
  ];
  return (
    <>
      <Banner title="Galeri Sekolah" />
      <section className="container mx-auto p-8">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="group relative grid gap-4 overflow-hidden"
              style={{
                gridRowEnd: `span ${Math.ceil(Number(item.src.split("/")[4]) / 100)}`,
              }}
            >
              <div>
                <Image
                  src={item.src}
                  alt={item.caption}
                  width={600}
                  height={400}
                  className="h-full max-w-full transform rounded-lg object-cover transition duration-500 ease-in-out group-hover:scale-105"
                  onMouseEnter={() => setShowCaption(`gallery-${index}`)}
                  onMouseLeave={() => setShowCaption("")}
                />
              </div>
              <div
                className={cn(
                  "absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 opacity-0 transition-opacity duration-500 ease-in-out hover:opacity-100",
                  showCaption === `gallery-${index}`
                    ? "opacity-100"
                    : "opacity-0",
                )}
              >
                <p className="text-center text-white">{item.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Gallery;
