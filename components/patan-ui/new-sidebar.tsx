"use client";

import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Link,
  Listbox,
  ListboxItem,
  Popover,
  PopoverContent,
  PopoverTrigger,
  ScrollShadow,
  Tooltip,
  cn,
} from "@nextui-org/react";
import { motion } from "framer-motion";
import { ChevronLeftIcon, LucideIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

type SidebarLinkItem = {
  label: string;
  icon?: LucideIcon;
  tooltip?: string;
  href?: string;
  children?: SidebarLinkItem[];
};

interface NewSidebarLinksProps {
  items: SidebarLinkItem[];
  isOpen: boolean;
}

interface NewSidebarLinkItemProps {
  item: SidebarLinkItem;
  isSidebarOpen: boolean;
}

export function NewSidebarLinkItem({
  isSidebarOpen,
  item,
}: NewSidebarLinkItemProps) {
  const pathname = usePathname();

  const isActive =
    (item.href && pathname === item.href) ||
    item.children?.some((child) => child.href && pathname === child.href);

  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  return (
    <>
      {item.children ? (
        <Popover
          placement="right-end"
          offset={30}
          classNames={{ trigger: "w-full" }}
          showArrow
          isOpen={isPopoverOpen}
          onOpenChange={setIsPopoverOpen}
        >
          <Tooltip
            placement="right-end"
            content={item.tooltip}
            color="primary"
            radius="sm"
            isDisabled={isSidebarOpen || isPopoverOpen || !item.tooltip}
            delay={1000}
          >
            <div>
              <PopoverTrigger>
                <Button
                  className={cn(
                    isActive
                      ? "bg-primary-700 text-primary-foreground"
                      : "text-slate-300 bg-transparentd hover:text-slate-50 hover:bg-slate-50/20",
                    isSidebarOpen && "justify-start"
                  )}
                  startContent={
                    item.icon &&
                    React.createElement(item.icon, {
                      className: "w-5 h-5",
                    })
                  }
                  isIconOnly={!isSidebarOpen}
                  radius="sm"
                  as={Link}
                  href={item.href}
                >
                  {isSidebarOpen && item.label}
                </Button>
              </PopoverTrigger>
            </div>
          </Tooltip>

          <PopoverContent>
            <Listbox>
              {item.children.map((child, j) => {
                return (
                  <ListboxItem
                    key={j}
                    startContent={
                      child.icon &&
                      React.createElement(child.icon, {
                        className: "w-5 h-5",
                      })
                    }
                    as={Link}
                    href={child.href}
                    classNames={{ base: "text-default-foreground" }}
                  >
                    {child.label}
                  </ListboxItem>
                );
              })}
            </Listbox>
          </PopoverContent>
        </Popover>
      ) : (
        <Tooltip
          placement="right-end"
          content={item.tooltip}
          color="primary"
          radius="sm"
          isDisabled={isSidebarOpen || !item.tooltip}
          delay={500}
        >
          <Button
            className={cn(
              isActive
                ? "bg-primary-600 text-slate-50"
                : "text-slate-300 bg-transparentd hover:text-slate-50 hover:bg-slate-50/20",
              isSidebarOpen && "justify-start"
            )}
            startContent={
              item.icon &&
              React.createElement(item.icon, {
                className: "w-5 h-5",
              })
            }
            isIconOnly={!isSidebarOpen}
            radius="sm"
            as={Link}
            href={item.href}
          >
            {isSidebarOpen && item.label}
          </Button>
        </Tooltip>
      )}
    </>
  );
}

export function NewSidebarLinks({ items, isOpen }: NewSidebarLinksProps) {
  return (
    <>
      {items.map((item, i) => {
        return (
          <NewSidebarLinkItem key={i} isSidebarOpen={isOpen} item={item} />
        );
      })}
    </>
  );
}

interface SidebarLinkProps {
  items: SidebarLinkItem[];
}

export default function NewSidebar({ items }: SidebarLinkProps) {
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
              "grid grid-cols-1 gap-y-4 my-8",
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
