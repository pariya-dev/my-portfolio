import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { LabradorLogo } from "./logo";
import { NavMenu } from "./nav-menu";
import { DialogTitle } from "@radix-ui/react-dialog"; // เพิ่ม
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"; // เพิ่ม

export const NavigationSheet = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="rounded-full">
          <Menu />
        </Button>
      </SheetTrigger>

      <SheetContent className="pt-3 px-6">
        {/* Title สำหรับ screen reader */}
        <DialogTitle>
          <VisuallyHidden>Navigation Menu</VisuallyHidden>
        </DialogTitle>

        <Button
          variant="outline"
          className="rounded-full shadow-none"
          size="icon"
        >
          <LabradorLogo className="h-5! w-5!" />
        </Button>
        <NavMenu orientation="vertical" className="mt-12" />
      </SheetContent>
    </Sheet>
  );
};
