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
          width={width}
          height={height}
          // layout="fill"
          className={`size-full object-cover  `}
          unoptimized
          // objectFit="cover"
          onLoad={() => setIsLoading(false)}
          // onLoadingComplete={() => setIsLoading(false)}
        />
      </picture>
    </div>
  );
};

export default LoadingImage;
