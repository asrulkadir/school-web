"use client";

import { truncateText } from "@/lib/utils";
import { Button } from "./ui/button";
import Image from "next/image";

interface BlogCardProps {
  title: string;
  description: string;
  image: string;
}

const BlogCard = ({ title, description, image }: BlogCardProps) => {
  return (
    <div className="mx-auto max-w-sm overflow-hidden rounded bg-white shadow-lg transition-shadow duration-300 ease-in-out hover:shadow-xl">
      <div className="relative h-48 w-full">
        <Image
          className="object-cover"
          src={image}
          alt="Blog Image"
          fill
          sizes="100vw"
        />
      </div>
      <div className="p-6">
        <h2 className="mb-2 text-xl font-bold text-gray-800">{title}</h2>
        <p className="mb-4 text-sm text-gray-600">
          {truncateText(description, 100)}
        </p>

        <div className="flex items-center justify-between">
          <Button className="text-sm">Baca Selengkapnya</Button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
