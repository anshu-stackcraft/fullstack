import React from "react";

export default function FourImagesFullWidth() {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      title: "Nature",
      desc: "Beautiful view",
    },
    {
      url: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429",
      title: "Mountains",
      desc: "Peace & calm",
    },
    {
      url: "https://images.unsplash.com/photo-1500534623283-312aade485b7",
      title: "Forest",
      desc: "Green world",
    },
    {
      url: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429",
      title: "Adventure",
      desc: "Feel the journey",
    },
  ];

  return (
    <div className="w-full">
      {images.map((item, index) => (
        <div
          key={index}
          className="relative w-full h-screen bg-cover bg-center"
          style={{ backgroundImage: `url(${item.url})` }}
        >
          {/* DARK OVERLAY */}
          <div className="absolute inset-0 bg-black/60 z-10"></div>

          {/* TEXT */}
          <div className="absolute inset-0 z-20 flex items-center justify-center text-white">
            <div className="text-center px-4">
              <h2 className="text-4xl font-bold mb-2">
                {item.title}
              </h2>
              <p className="text-lg">
                {item.desc}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
