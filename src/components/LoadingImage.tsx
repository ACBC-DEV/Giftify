import { useState } from "react";
import Image from "next/image";

interface LoadingImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

const LoadingImage: React.FC<LoadingImageProps> = ({
  src,
  alt,
  width,
  height,
}) => {
  const [isLoading, setIsLoading] = useState(true);

  const randomColorTl = () => {
    const colorS = [
      "bg-red-500",
      "bg-yellow-500",
      "bg-green-500",
      "bg-blue-500",
      "bg-indigo-500",
    ];
    const randomColor = colorS[Math.floor(Math.random() * colorS.length)];
    return randomColor;
  };
  return (
    <div style={{ position: "relative", width, height }}>
      {isLoading && (
        <div
          style={{ width: `${width}px`, height: `${height}px` }}
          className={`animate-pulse ${randomColorTl()}`}
        />
      )}
      <picture>
        <Image
          src={src}
          alt={alt}
          // width={300}
          // height={300}
          layout="fill"
          // className={`size-32 md:size-52 lg:size-64 object-cover  `}
          unoptimized
          // objectFit="cover"
          onLoadingComplete={() => setIsLoading(false)}
        />
      </picture>
    </div>
  );
};

export default LoadingImage;
