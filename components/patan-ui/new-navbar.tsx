"use client";

import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
  User,
  Link as NextLink,
  Skeleton,
} from "@nextui-org/react";
import { LockIcon, LogOutIcon, User2Icon } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export function NewNavbar() {
  const session = useSession();
  const router = useRouter();

  if (session.status === "unauthenticated") {
    router.replace("/auth/login");
    return null;
  }

  return (
    <nav className="py-4 w-full pr-16 mb-4">
      <div className="flex flex-row justify-between">
        <div className="inline-flex flex=row gap-x-6">
          <NextLink
            href={"/docs"}
            color="foreground"
            size="sm"
            underline="hover"
            isExternal
          >
            Panduan
          </NextLink>
          <NextLink
            href={"/support"}
            color="foreground"
            size="sm"
            underline="hover"
            isExternal
          >
            Bantuan
          </NextLink>
        </div>

        <Dropdown
          aria-label="Dropdown Avatar"
          isDisabled={session.status !== "authenticated"}
        >
          <DropdownTrigger>
            <User
              as="button"
              name={session.data?.user.bumdesName}
              description={session.data?.user.role.toLowerCase()}
              classNames={{
                base: "flex flex-row-reverse",
                wrapper: "flex flex-col items-end",
                description: "capitalize",
              }}
              avatarProps={{
                showFallback: true,
                src: "https://images.unsplash.com/broken",
                fallback: <User2Icon className="w-4 h-4" />,
              }}
              isFocusable
            />
          </DropdownTrigger>

          <DropdownMenu>
            <DropdownSection showDivider title={"Pengaturan Akun"}>
              <DropdownItem
                as={Link}
                href="/bumdes/user/profile"
                startContent={<User2Icon className="h-4 w-4" />}
              >
                Profil
              </DropdownItem>
              <DropdownItem
                as={Link}
                href="/bumdes/user/security"
                startContent={<LockIcon className="h-4 w-4" />}
              >
                Keamanan
              </DropdownItem>
            </DropdownSection>

            <DropdownSection>
              <DropdownItem
                color="danger"
                className="text-danger"
                startContent={<LogOutIcon className="h-4 w-4" />}
                onClick={() => signOut()}
              >
                Keluar
              </DropdownItem>
            </DropdownSection>
          </DropdownMenu>
        </Dropdown>
      </div>
    </nav>
  );
}
