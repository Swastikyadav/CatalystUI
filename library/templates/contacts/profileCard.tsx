import React, { ReactElement } from "react";

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
  SettingsIcon,
  SwitchCameraIcon,
  UserIcon,
} from "lucide-react";
import NavLink from "./navLinks";
import { cx } from "@/lib/utils";

const profileLinks = [
  { icon: <UserIcon width={18} />, value: "Profile", link: "#" },
  { icon: <SettingsIcon width={18} />, value: "Account Settings", link: "#" },
  { icon: <LinkIcon width={18} />, value: "Integration", link: "#" },
  { icon: <SwitchCameraIcon width={18} />, value: "Public Profile", link: "#" },
];

function ProfilePopoverRoot({ children }: { children: ReactElement }) {
  return (
    <PopoverRoot>
      <PopoverTrigger asChild>{children}</PopoverTrigger>
      <PopoverPortal>
        <PopoverContent className="z-100" autoFocus={false} sideOffset={10}>
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
        "border border-gray-800 py-2 w-[200px] bg-[#090E1A] rounded-lg text-sm",
        className
      )}
    >
      {profileLinks.map((link) => {
        if (link.value == "Dark Mode") {
          return (
            <div
              key="dark-mode-toggle"
              className="flex items-center justify-between pr-3 hover:bg-gray-600"
            >
              <NavLink
                key={link.value}
                link={{
                  icon: link.icon,
                  value: link.value,
                  link: link.link,
                }}
                className="hover:bg-gray-600 p-1 text-gray-100"
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
            className="hover:bg-gray-600 p-1 text-gray-100"
          />
        );
      })}
      <hr className="text-gray-800 my-3" />
      <NavLink
        key="signout"
        link={{
          icon: <LogOutIcon width={18} />,
          value: "Sign Out",
          link: "#",
        }}
        className="hover:bg-gray-600 p-1 text-gray-100"
      />
    </div>
  );
}

export { ProfilePopoverRoot, ProfilePopoverContent };
