import { Button } from "@/library/components/ui/button";
import {
  AvatarFallback,
  AvatarImage,
  AvatarRoot,
} from "@/library/components/ui/avatar";
import {
  CardRoot,
  CardTitle,
  CardDescription,
} from "@/library/components/ui/card";
import {
  PopoverRoot,
  PopoverTrigger,
  PopoverPortal,
  PopoverContent,
} from "@/library/components/ui/popover";
import { SwitchRoot, SwitchThumb } from "@/library/components/ui/switch";
import {
  TableView,
  LineChart,
  BarChart,
  KpiCardView,
  TopProducts,
} from "@/components/showcase";
import {
  GridRoot,
  GridContent,
  Grid1,
  Grid2,
  Grid3,
  Grid4,
} from "@/library/blocks/bentoGrid";
import { ProfilePopoverContent } from "@/library/blocks/profileCard";
import InviteCard from "@/library/blocks/inviteCard";
import {
  Sheet,
  SheetBody,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/library/components/ui/sheet";

function Avatar() {
  return (
    <CardRoot className="flex item-center justify-center not-prose">
      <div className="flex items-center">
        <AvatarRoot>
          <AvatarImage imgUrl="https://avatars.githubusercontent.com/u/44374494" />
          <AvatarFallback>SW</AvatarFallback>
        </AvatarRoot>
        <AvatarRoot className="relative right-2">
          <AvatarImage imgUrl="https://avatars.githubusercontent.com/u/44374495" />
          <AvatarFallback>SW</AvatarFallback>
        </AvatarRoot>
        <AvatarRoot className="relative right-4">
          <AvatarImage imgUrl="https://avatars.githubusercontent.com/u/44378498" />
          <AvatarFallback>SW</AvatarFallback>
        </AvatarRoot>
        <AvatarRoot className="relative right-6">
          <AvatarImage imgUrl="https://avatars.githubusercontent.com/u/44372499" />
          <AvatarFallback>SW</AvatarFallback>
        </AvatarRoot>
        <AvatarRoot className="relative right-8">
          <AvatarImage imgUrl="https://avatars.githubusercontent.com/u/24374498" />
          <AvatarFallback>SW</AvatarFallback>
        </AvatarRoot>
      </div>
    </CardRoot>
  );
}

function ButtonSet() {
  return (
    <CardRoot className="flex gap-4 flex-wrap not-prose">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Destructive</Button>
    </CardRoot>
  );
}

function Card() {
  return (
    <CardRoot className="not-prose">
      <CardTitle className="text-xl">Card Title</CardTitle>
      <CardDescription>
        <p className="text-lg font-normal">This is a card description</p>
      </CardDescription>
    </CardRoot>
  );
}

function Popover() {
  return (
    <CardRoot className="not-prose">
      <PopoverRoot>
        <PopoverTrigger>
          <Button>Popover Trigger</Button>
        </PopoverTrigger>
        <PopoverPortal>
          <PopoverContent>
            <div className="border border-gray-200 rounded bg-white shadow-xs text-center p-6">
              This is a content inside popover.
            </div>
          </PopoverContent>
        </PopoverPortal>
      </PopoverRoot>
    </CardRoot>
  );
}

function Switch() {
  return (
    <CardRoot className="not-prose">
      <SwitchRoot>
        <SwitchThumb></SwitchThumb>
      </SwitchRoot>
    </CardRoot>
  );
}

function LineChartView() {
  return (
    <CardRoot className="h-80 not-prose">
      <LineChart />
    </CardRoot>
  );
}

function BarChartView() {
  return (
    <CardRoot className="h-80 not-prose">
      <BarChart />
    </CardRoot>
  );
}

function BentoGrid() {
  return (
    <CardRoot className="not-prose">
      <GridRoot>
        <GridContent>
          <Grid1>
            <CardRoot className="h-40">1</CardRoot>
          </Grid1>
          <Grid2>
            <CardRoot className="h-60">2</CardRoot>
          </Grid2>
          <Grid3>
            <CardRoot className="h-40">3</CardRoot>
          </Grid3>
          <Grid4>
            <CardRoot>4</CardRoot>
          </Grid4>
        </GridContent>
      </GridRoot>
    </CardRoot>
  );
}

function KpiCard() {
  return (
    <CardRoot className="not-prose">
      <KpiCardView />
    </CardRoot>
  );
}

function ProfileSettingsCard() {
  return (
    <CardRoot className="not-prose">
      <ProfilePopoverContent />
    </CardRoot>
  );
}

function TopProductsView() {
  return (
    <CardRoot className="not-prose">
      <TopProducts />
    </CardRoot>
  );
}

const membersList = [
  {
    image: "https://avatars.githubusercontent.com/u/44374494",
    name: "Swastik Yadav",
    email: "s.yadav@gmail.com",
    badge: "owner",
  },
  {
    image: "https://avatars.githubusercontent.com/u/44373494",
    name: "Jon Tony",
    email: "j.tony@gmail.com",
    badge: "",
  },
  {
    image: "https://avatars.githubusercontent.com/u/44474494",
    name: "Tina Wong",
    email: "t.wong@gmail.com",
    badge: "",
  },
];

function InviteCardView() {
  return (
    <CardRoot className="not-prose">
      <InviteCard members={membersList} className="w-full" />
    </CardRoot>
  );
}

function SheetView() {
  return (
    <CardRoot className="flex justify-center not-prose">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="secondary" className="cursor-pointer">
            Open Sheet
          </Button>
        </SheetTrigger>
        <SheetContent className="sm:max-w-lg z-100">
          <SheetHeader>
            <SheetTitle>Account Created Successfully</SheetTitle>
            <SheetDescription className="mt-1 text-sm">
              Your account has been created successfully. You can now login to
              your account. For more information, please contact us.
            </SheetDescription>
          </SheetHeader>
          <SheetBody>
            This is they body of the Sheet, content goes here.
          </SheetBody>
          <SheetFooter className="mt-6">
            <SheetClose asChild>
              <Button
                className="mt-2 w-full sm:mt-0 sm:w-fit"
                variant="secondary"
              >
                Go back
              </Button>
            </SheetClose>
            <SheetClose asChild>
              <Button className="w-full sm:w-fit">Ok, got it!</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </CardRoot>
  );
}

export const mdxComponents = {
  Avatar,
  ButtonSet,
  Card,
  Popover,
  Switch,
  TableView,
  LineChartView,
  BarChartView,
  BentoGrid,
  KpiCard,
  ProfileSettingsCard,
  TopProductsView,
  InviteCardView,
  SheetView,
};
