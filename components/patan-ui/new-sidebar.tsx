"use client";

import { faker } from "@faker-js/faker";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  ScrollShadow,
  Tooltip,
  cn,
} from "@nextui-org/react";
import { CaretLeftIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import { ChevronLeftIcon, HomeIcon } from "lucide-react";
import { useState } from "react";

export function NewSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className="h-screen sticky top-0"
      initial={false}
      animate={{
        width: isOpen ? "16rem" : "6rem",
        animation: "ease-in",
      }}
    >
      <Card className="h-full bg-slate-900 text-slate-100" radius="none">
        <CardHeader className="justify-center">
          <p>Hello</p>
        </CardHeader>

        <CardBody>
          <ScrollShadow
            className={cn(
              "grid grid-cols-1 gap-y-2",
              !isOpen && "justify-items-center"
            )}
            hideScrollBar
          >
            {Array.from({ length: 20 }).map((_, i) => (
              <Tooltip
                key={i}
                placement="right-end"
                content="Tooltip"
                color="primary"
                radius="sm"
                isDisabled={isOpen}
                delay={500}
              >
                <Button
                  className={cn(
                    "text-white bg-transparent hover:text-primary-400",
                    i % 10 === 0 && "bg-primary-600 hover:text-white-100",
                    isOpen && "justify-start"
                  )}
                  startContent={<HomeIcon className="w-4 h-4" />}
                  isIconOnly={!isOpen}
                  radius="sm"
                >
                  {isOpen && faker.location.city()}
                </Button>
              </Tooltip>
            ))}
          </ScrollShadow>
        </CardBody>

        <CardFooter className="justify-center">
          <Button
            variant="light"
            color="secondary"
            isIconOnly
            onClick={() => setIsOpen(!isOpen)}
            endContent={<ChevronLeftIcon className="w-4 h-4" />}
          />
        </CardFooter>
      </Card>
    </motion.div>
  );
}
