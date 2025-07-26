import React from "react";

import {
  AvatarFallback,
  AvatarImage,
  AvatarRoot,
} from "@/library/components/ui/avatar";
import { Button } from "@/library/components/ui/button";
import {
  CardDescription,
  CardRoot,
  CardTitle,
} from "@/library/components/ui/card";
import { cx } from "@/lib/utils";

interface MembersProps {
  image: string;
  name: string;
  email: string;
  badge: string;
}

function InviteCard({
  members,
  className,
  ...props
}: {
  members: MembersProps[];
  className?: string;
}) {
  return (
    <CardRoot className={cx(className)} {...props}>
      <CardTitle>
        <h2 className="text-lg text-gray-800 dark:text-gray-200 font-bold">
          Invite Members
        </h2>
        <span className="text-sm text-gray-600 dark:text-gray-400">
          Members can help make changes to the article
        </span>
      </CardTitle>
      <CardDescription>
        <div className="relative my-6">
          <input
            type="text"
            placeholder="Email"
            className="w-full border border-gray-600 dark:border-gray-400 px-4 py-2 rounded-lg text-sm"
          />
          <Button className="absolute top-0 right-0 px-4 md:px-6 py-2 rounded-l-none text-sm">
            Send Invite
          </Button>
          <small className="font-medium text-gray-600 dark:text-gray-400 underline cursor-pointer text-xs">
            Sharing Preferences
          </small>
        </div>

        <section>
          <h3 className="my-4 text-sm font-semibold text-gray-600 dark:text-gray-400">
            MEMBERS
          </h3>
          {members.map((member: MembersProps) => (
            <CardRoot
              key={member.name}
              className="py-4 px-0 border-0 border-t rounded-none text-sm font-normal text-gray-800 dark:text-gray-100 flex flex-wrap md:flex-nowrap gap-2 items-center justify-between"
              showShadow={false}
            >
              <div className="flex gap-4 items-center">
                <AvatarRoot className="w-10 h-10">
                  <AvatarImage
                    className="w-full h-full"
                    imgUrl={member.image}
                  />
                  <AvatarFallback className="w-full h-full">SW</AvatarFallback>
                </AvatarRoot>
                <div>
                  <p className="font-semibold text-gray-700 dark:text-gray-300 text-sm">
                    {member.name}
                  </p>
                  <small className="text-xs text-gray-600 dark:text-gray-400">
                    {member.email}
                  </small>
                </div>
              </div>
              {member.badge && (
                <span className="text-xs border text-gray-600 dark:text-gray-400 border-gray-400 dark:border-gray-600 px-4 py-1 rounded-full bg-gray-100 dark:bg-gray-800">
                  {member.badge}
                </span>
              )}
            </CardRoot>
          ))}
        </section>
      </CardDescription>
    </CardRoot>
  );
}

export default InviteCard;
