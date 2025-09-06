import { Button } from "@/components/ui/button";
import { LabradorLogo } from "./logo";
import { NavMenu } from "./nav-menu";
import { NavigationModal } from "./navigation-modal";

const Navbar = () => {
  return (
    <nav className="fixed z-50 top-6 inset-x-4 h-14 bg-background border dark:border-slate-700/70 max-w-screen-md mx-auto rounded-full">
      <div className="h-full flex items-center justify-between mx-auto px-3">
        <Button
          variant="outline"
          className="rounded-full shadow-none"
          size="icon"
        >
          <LabradorLogo className="h-5! w-5!" />
        </Button>

        {/* Desktop Menu */}
        <div className="flex items-center gap-2">
          <NavMenu className="hidden md:block" />
          {/* Mobile Fullscreen Modal */}
          <div className="md:hidden">
            <NavigationModal />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
