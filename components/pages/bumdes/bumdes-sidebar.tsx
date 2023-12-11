import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { DoubleArrowLeftIcon } from "@radix-ui/react-icons";
import { TooltipTrigger } from "@radix-ui/react-tooltip";
import {
  ContactIcon,
  HomeIcon,
  LucideIcon,
  NewspaperIcon,
  ReceiptIcon,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface BumdesSidebarProps {
  isOpen: boolean;
  toggleSidebar?: () => void;
}

export function BumdesSidebar(props: BumdesSidebarProps) {
  return (
    <div
      id="sidebar"
      className={cn(
        "fixed min-h-screen border-r border-gray-200 grid grid-rows-12",
        props.isOpen ? "w-sidebar" : "w-sidebar-collapsed"
      )}
    >
      <header
        id="sidebar-header"
        className="border-b border-border py-4 row-span-1 "
      ></header>

      <TooltipProvider>
        <section
          id="sidebar-content"
          className={cn(
            "overflow-y-scroll py-4 pt-16 flex flex-col gap-y-4 items-center row-span-12",
            props.isOpen ? "" : ""
          )}
        >
          <BumdesSidebarItem
            href="/bumdes"
            icon={HomeIcon}
            label="Dashboard"
            isIconOnly={!props.isOpen}
          />

          <BumdesSidebarItem
            href="/bumdes/units"
            icon={ContactIcon}
            label="Manajemen Unit"
            isIconOnly={!props.isOpen}
          />

          <BumdesSidebarItem
            href="/bumdes/financial-statement"
            icon={NewspaperIcon}
            label="Laporan Keuangan"
            isIconOnly={!props.isOpen}
          />

          <BumdesSidebarItem
            href="/bumdes/taxes"
            icon={ReceiptIcon}
            label="Laporan Pajak"
            isIconOnly={!props.isOpen}
          />
        </section>
      </TooltipProvider>

      <footer className="border-t border-border py-4 row-span-1">
        <Button
          className={cn("relative", props.isOpen ? "left-[80%]" : "left-[20%]")}
          variant={"outline"}
          size={"icon"}
          onClick={props.toggleSidebar}
        >
          <DoubleArrowLeftIcon className="w-4 h-4" />
        </Button>
      </footer>
    </div>
  );
}

interface BumdesSidebarItemProps {
  href: string;
  icon?: LucideIcon;
  label: string;
  isIconOnly: boolean;
  className?: string;
}

export function BumdesSidebarItem(props: BumdesSidebarItemProps) {
  const pathname = usePathname();
  const isActive = pathname === props.href;

  return (
    <Tooltip>
      <TooltipTrigger
        className={cn(
          "w-full",
          props.isIconOnly ? "w-fit" : "px-4",
          props.className
        )}
      >
        <Link
          href={props.href}
          className={cn(
            "w-full py-2.5 px-5 inline-flex text-sm flex-row items-center font-medium group rounded-md hover:text-blue-500 hover:bg-blue-100 transition ease-in-out duration-300",
            isActive ? "bg-blue-100 text-blue-500" : "text-gray-500",
            props.isIconOnly
              ? "justify-center w-fit h-fit px-2.5 py-2.5"
              : "justify-start"
          )}
        >
          <span>
            {props.icon &&
              React.createElement(props.icon, {
                className: cn("w-5 h-5", !props.isIconOnly && "mr-4"),
              })}
          </span>
          <p className={cn(props.isIconOnly ? "hidden" : "block")}>
            {props.label}
          </p>
        </Link>
      </TooltipTrigger>
      <TooltipContent side="right">
        <p>{props.label}</p>
      </TooltipContent>
    </Tooltip>
  );
}
