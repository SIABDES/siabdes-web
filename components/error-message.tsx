"use client";

import { cn } from "@/lib/utils";
import { useSearchParams } from "next/navigation";
import { Card, CardContent } from "./ui/card";

interface ErrorMessageProps {
  className?: string;
  variant?: "inline" | "alert";
}

export default function ErrorMessage({
  className,
  variant = "inline",
}: ErrorMessageProps) {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");

  switch (variant) {
    case "inline": {
      return (
        <>
          <p
            className={cn(
              "text-destructive font-medium text-sm",
              className,
              error ? "block" : "hidden"
            )}
          >
            {error}
          </p>
        </>
      );
    }

    case "alert": {
      return (
        <Card
          className={cn(
            "w-full border-destructive text-destructive bg-destructive/5",
            className,
            error ? "block" : "hidden"
          )}
        >
          <CardContent className="py-4">
            <p className="font-medium text-sm">{error}</p>
          </CardContent>
        </Card>
      );
    }
  }
}
