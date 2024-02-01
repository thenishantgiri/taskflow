import { Plus } from "lucide-react";
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";

import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  return (
    <nav className="fixed z-50 t-0 px-4 w-full h-14 border-b shadow-sm bg-white flex items-center">
      {/* TODO: Mobile Sidebar */}
      <div className="flex items-center gap-x-4">
        <div className="hidden md:flex">
          <Logo />
        </div>

        {/* For Large Devices */}
        <Button
          variant={"primary"}
          size={"sm"}
          className="rounded-sm hidden md:block h-auto py-1.5 px-2"
        >
          Create
        </Button>

        {/* For Medium Devices */}
        <Button
          variant={"primary"}
          size={"sm"}
          className="rounded-sm block md:hidden"
        >
          <Plus className="h-4 w-4" />
        </Button>
      </div>

      {/* Organizational Switcher */}
      <div className="ml-auto flex items-center gap-x-2">
        <OrganizationSwitcher
          hidePersonal
          afterCreateOrganizationUrl={"/organization/:id"}
          afterSelectOrganizationUrl={"/organization/:id"}
          afterLeaveOrganizationUrl="/select-org"
          appearance={{
            elements: {
              rootBox: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              },
            },
          }}
        />

        {/* User Button */}
        <UserButton
          afterSignOutUrl="/"
          appearance={{
            elements: {
              avatarBox: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              },
            },
          }}
        />
      </div>
    </nav>
  );
};
