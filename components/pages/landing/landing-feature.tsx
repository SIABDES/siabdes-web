import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { BoxIcon, LucideIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

interface LandingFeatureProps {
  imageUrl: string;
  title: string;
  description: string;
  icon: LucideIcon;
  direction?: "left" | "right";
}

export default function LandingFeature({
  description,
  icon,
  imageUrl,
  title,
  direction = "left",
}: LandingFeatureProps) {
  if (direction === "left")
    return (
      <section id="feature" className="my-48 bg-background">
        <div className="flex flex-row justify-between">
          <div>
            <Card className="max-w-md pl-16 h-fit">
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
            className="w-[56rem] h-[32rem] relative shadow-md"
          >
            <CardContent>
              <Image alt={title} src={imageUrl} fill />
            </CardContent>
          </Card>
        </div>
      </section>
    );

  return (
    <section id="feature" className="my-48 bg-background">
      <div className="flex flex-row justify-between">
        <Card
          id="feature-image"
          className="w-[56rem] h-[32rem] relative shadow-md"
        >
          <CardContent>
            <Image alt={title} src={imageUrl} fill />
          </CardContent>
        </Card>

        <div>
          <Card className="max-w-md pr-16 h-fit">
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
      </div>
    </section>
  );
}
