"use client";

import { cn } from "@/lib/utils";
import { ChevronDownIcon, LucideIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ComponentProps,
  HTMLAttributes,
  createElement,
  useCallback,
  useState,
} from "react";
import { useBoolean } from "usehooks-ts";

interface SidebarLinkProps extends ComponentProps<typeof Link> {
  isActive?: boolean;
  label: string;
  icon?: LucideIcon;
  href: string;
}

export function SidebarLink({ icon, label, href, ...props }: SidebarLinkProps) {
  const pathname = usePathname();
  const isActive = href === pathname;

  return (
    <Link href={href} {...props}>
      <div
        id="sidebar-nav-link"
        className={cn(
          "w-full py-2.5 px-3 inline-grid grid-cols-10 items-center rounded-md cursor-pointer group text-slate-50",
          isActive && "bg-blue-600 text-slate-50",
          !isActive && "hover:bg-blue-50/20"
        )}
      >
        <span className="flex flex-row items-center col-span-9">
          {icon && createElement(icon, { className: "w-5 h-5 mr-2.5" })}
          <span className={cn("font-medium text-sm")}>{label}</span>
        </span>
      </div>
    </Link>
  );
}

interface SidebarNavsProps {
  id: string;
  label: string;
  icon?: LucideIcon;
  childs: SidebarLinkProps[];
  readonly open: boolean;
  readonly setNavsActive: (id: string) => void;
}

export function SidebarNavs({
  id,
  label,
  childs,
  icon,
  open,
  setNavsActive,
}: SidebarNavsProps) {
  return (
    <div id={`sidebar-navs-${id}`}>
      <div
        className={cn(
          "w-full py-2.5 px-3 inline-grid grid-cols-10 items-center rounded-md cursor-pointer group text-slate-50 hover:bg-blue-50/20"
        )}
        onClick={() => setNavsActive(id)}
      >
        <span className="flex flex-row items-center col-span-9">
          {icon && createElement(icon, { className: "w-5 h-5 mr-2.5" })}
          <span className={cn("font-medium text-sm")}>{label}</span>
        </span>

        <span>
          <ChevronDownIcon className="w-4 h-4" />
        </span>
      </div>

      <div
        id="sidebar-navs-childs-container"
        className={cn("pl-10 mt-2 flex flex-col gap-y-1.5", !open && "hidden")}
      >
        {childs?.map((child, index) => (
          <SidebarLink key={index} {...child} />
        ))}
      </div>
    </div>
  );
}

type SidebarNavsRequiredProps = Omit<
  SidebarNavsProps,
  "open" | "setNavsActive" | "id"
>;

type SidebarLinkItem = SidebarLinkProps | SidebarNavsRequiredProps;

interface SidebarProps extends HTMLAttributes<HTMLDivElement> {
  items: Record<string, SidebarLinkItem>;
}

const isSidebarLink = (item: SidebarLinkItem): item is SidebarLinkProps => {
  return (item as SidebarLinkProps).href !== undefined;
};

const isSidebarNavs = (
  item: SidebarLinkItem
): item is SidebarNavsRequiredProps => {
  return (item as SidebarNavsRequiredProps).childs !== undefined;
};

export function Sidebar({ items, ...props }: SidebarProps) {
  const { value: open } = useBoolean(true);
  const pathname = usePathname();

  const currentNavs = useCallback(() => {
    const navs = Object.entries(items).find(([key, item]) => {
      if (isSidebarNavs(item)) {
        return item.childs.some((child) => child.href.startsWith(pathname));
      }
    });

    return navs ? navs[0] : null;
  }, [items, pathname]);

  const [navsActive, setNavsActive] = useState<string | null>(currentNavs);

  const handleSetNavsActive = (id: string) => {
    if (navsActive === id) {
      setNavsActive(null);
    } else {
      setNavsActive(id);
    }
  };

  return (
    <div
      {...props}
      id="sidebar"
      className={cn(
        "border-r border-r-border px-2 py-4 grid grid-rows-10 sticky top-0 left-0 h-screen z-10 bg-slate-900",
        open ? "w-sidebar" : "w-sidebar-collapsed"
      )}
    >
      <div id="sidebar-header" className="flex items-center justify-center">
        <Link href={"/"}>
          <Image
            src={"/Logo-white.svg"}
            alt="SIABDes TAXion"
            width={40}
            height={40}
          />
        </Link>
      </div>

      <div
        id="sidebar-body"
        className="row-span-8 py-8 px-2 flex flex-col gap-y-2"
      >
        {Object.entries(items).map(([key, item], index) => {
          if (isSidebarLink(item)) {
            return <SidebarLink key={index} {...item} />;
          }

          if (isSidebarNavs(item)) {
            return (
              <SidebarNavs
                key={index}
                id={key}
                {...item}
                open={navsActive === key}
                setNavsActive={handleSetNavsActive}
              />
            );
          }
        })}
      </div>

      <div id="sidebar-footer"></div>
    </div>
  );
}
