import React from "react";
import { Media } from "@once-ui-system/core";

interface WinniePoohBalloonProps {
  /** Path to the image file. Place image in public/images/ folder */
  imagePath?: string;
  /** Alternative text for the image */
  alt?: string;
}

export function WinniePoohBalloon({ 
  imagePath = "/images/winnie-pooh-balloon.png",
  alt = "Winnie the Pooh floating with a balloon"
}: WinniePoohBalloonProps) {
  return (
    <div style={{ maxWidth: "200px", margin: "0 auto" }}>
      <Media
        src={imagePath}
        alt={alt}
        sizes="200px"
        style={{
          width: "100%",
          height: "auto",
          display: "block",
        }}
      />
    </div>
  );
}

