import React from "react";

import {
  AvatarRoot,
  AvatarImage,
  AvatarFallback,
} from "@/library/components/ui/avatar";
import {
  PopoverRoot,
  PopoverTrigger,
  PopoverPortal,
  PopoverContent,
} from "@/library/components/ui/popover";
import { SwitchRoot, SwitchThumb } from "@/library/components/ui/switch";
import {
  LinkIcon,
  LogOutIcon,
  MoonIcon,
  SettingsIcon,
  UserIcon,
} from "lucide-react";
import NavLink from "./common/navLink";
import { cx } from "@/lib/utils";

const profileLinks = [
  { icon: <UserIcon width={18} />, value: "Profile", link: "#" },
  { icon: <SettingsIcon width={18} />, value: "Account Settings", link: "#" },
  { icon: <LinkIcon width={18} />, value: "Integration", link: "#" },
  { icon: <MoonIcon width={18} />, value: "Dark Mode", link: "#" },
];

function ProfilePopoverRoot() {
  return (
    <PopoverRoot>
      <PopoverTrigger asChild>
        <AvatarRoot>
          <AvatarImage imgUrl="https://avatars.githubusercontent.com/u/44374494" />
          <AvatarFallback>SW</AvatarFallback>
        </AvatarRoot>
      </PopoverTrigger>
      <PopoverPortal>
        <PopoverContent className="mr-4" autoFocus={false} sideOffset={10}>
          <ProfilePopoverContent />
        </PopoverContent>
      </PopoverPortal>
    </PopoverRoot>
  );
}

function ProfilePopoverContent({ className }: { className?: string }) {
  return (
    <div
      className={cx(
        "border border-gray-200 dark:border-gray-800 py-2 w-3xs bg-white dark:bg-[#090E1A] rounded-lg text-sm",
        className
      )}
    >
      {profileLinks.map((link) => {
        if (link.value == "Dark Mode") {
          return (
            <div
              key="dark-mode-toggle"
              className="flex items-center justify-between pr-3 hover:bg-gray-100 dark:hover:bg-gray-600"
            >
              <NavLink
                key={link.value}
                link={{
                  icon: link.icon,
                  value: link.value,
                  link: link.link,
                }}
                className="hover:bg-gray-100 dark:hover:bg-gray-600 p-1 dark:text-gray-100"
              />
              <SwitchRoot>
                <SwitchThumb />
              </SwitchRoot>
            </div>
          );
        }

        return (
          <NavLink
            key={link.value}
            link={{
              icon: link.icon,
              value: link.value,
              link: link.link,
            }}
            className="hover:bg-gray-100 dark:hover:bg-gray-600 p-1 dark:text-gray-100"
          />
        );
      })}
      <hr className="text-gray-200 dark:text-gray-800 my-3" />
      <NavLink
        key="signout"
        link={{
          icon: <LogOutIcon width={18} />,
          value: "Sign Out",
          link: "#",
        }}
        className="hover:bg-gray-100 dark:hover:bg-gray-600 p-1 dark:text-gray-100"
      />
    </div>
  );
}

export { ProfilePopoverRoot, ProfilePopoverContent };
