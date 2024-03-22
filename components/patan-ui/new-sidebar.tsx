"use client";

import { faker } from "@faker-js/faker";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Link,
  ScrollShadow,
  Tooltip,
  cn,
} from "@nextui-org/react";
import { CaretLeftIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import { ChevronLeftIcon, HomeIcon, LucideIcon } from "lucide-react";
import React from "react";
import { useState } from "react";

type SidebarLinkItem = {
  label: string;
  icon: LucideIcon;
  tooltip?: string;
  href?: string;
  children?: SidebarLinkItem[];
};

interface SidebarLinkItemProps {
  items: SidebarLinkItem[];
  isOpen: boolean;
}

export function NewSidebarLinks({ items, isOpen }: SidebarLinkItemProps) {
  return (
    <>
      {items.map((item, i) => (
        <Tooltip
          key={i}
          placement="right-end"
          content={item.tooltip}
          color="primary"
          radius="sm"
          isDisabled={isOpen || !item.tooltip}
          delay={500}
        >
          <Button
            className={cn(
              "text-white bg-transparent hover:text-primary-400",
              i % 10 === 0 && "bg-primary-600 hover:text-white-100",
              isOpen && "justify-start"
            )}
            startContent={React.createElement(item.icon, {
              className: "w-5 h-5",
            })}
            isIconOnly={!isOpen}
            radius="sm"
            as={Link}
            href={item.href}
          >
            {isOpen && item.label}
          </Button>
        </Tooltip>
      ))}
    </>
  );
}

interface SidebarLinkProps {
  items: SidebarLinkItem[];
}

export function NewSidebar({ items }: SidebarLinkProps) {
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
            <NewSidebarLinks items={items} isOpen={isOpen} />
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
