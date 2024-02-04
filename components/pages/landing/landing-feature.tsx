import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { BoxIcon, LucideIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

interface LandingFeatureProps {
  imageUrl: string;
  title: string;
  description: string;
  icon: LucideIcon;
  direction?: "left" | "right";
  highlightCard?: boolean;
}

export default function LandingFeature({
  description,
  icon,
  imageUrl,
  title,
  direction = "left",
  highlightCard = false,
}: LandingFeatureProps) {
  return (
    <section id="feature">
      <div
        className={cn(
          "flex flex-row justify-between",
          direction === "right" && "flex-row-reverse"
        )}
      >
        <div>
          <Card
            className={cn(
              "max-w-md h-fit",
              direction === "left" ? "pl-8" : "pr-8"
            )}
          >
            <CardHeader>
              <h3 className="text-xl font-semibold inline-flex flex-row items-center">
                {React.createElement(icon, { className: "h-5 w-5 mr-4" })}

                {title}
              </h3>
            </CardHeader>
            <CardContent>
              <p>{description}</p>
            </CardContent>
          </Card>
        </div>

        <Card
          id="feature-image"
          className="shadow-md min-w-[52rem] max-w-full h-full"
        >
          <AspectRatio ratio={16 / 9}>
            <Image
              alt={title}
              src={imageUrl}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw, 33vw"
            />
          </AspectRatio>
        </Card>
      </div>
    </section>
  );
}
