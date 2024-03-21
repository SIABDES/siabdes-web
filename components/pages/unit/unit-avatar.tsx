import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { LogOutIcon, UserIcon } from 'lucide-react';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';

export default function UnitAvatar() {
  const session = useSession();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="inline-flex gap-x-4 items-center">
          <p className="text-sm font-medium">
            Bumdes {session.data?.user.bumdesName}
          </p>

          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>{session.data?.user.unitId}</DropdownMenuLabel>
        <DropdownMenuSeparator />

        <Link href={'/unit/profile'}>
          <DropdownMenuItem>
            <UserIcon className="w-3 h-3 mr-2" />
            Profil Unit
          </DropdownMenuItem>
        </Link>

        <DropdownMenuItem
          className="text-destructive cursor-pointer"
          onClick={() =>
            signOut({ redirect: true, callbackUrl: '/auth/login' })
          }
        >
          <LogOutIcon className="w-3 h-3 mr-2" />
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
