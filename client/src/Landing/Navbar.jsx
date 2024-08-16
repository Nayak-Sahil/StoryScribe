import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Package2, PenTool } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [navActionBtnName, setNavActionBtnName] = useState("Login");

  useEffect(() => {
    let url = window.location.href;
    if (url.endsWith("/login")) {
      setNavActionBtnName("Get Started");
    }
  }, []);

  return (
    <header className="w-full justify-between sticky top-0 flex h-16 items-center gap-4 bg-background px-4 md:px-6 shadow-sm border border-gray-200">
      <div className="order-1 flex justify-center">
        <Link
          href="#"
          className="flex items-center gap-1 text-lg font-semibold md:text-base"
        >
          <PenTool className="h-5 w-5 -rotate-90" />
          <p className="">StoryScribe</p>
        </Link>
      </div>
      <nav className="order-2 w-full hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:justify-center md:gap-5 md:text-sm lg:gap-6">
        <Link
          href="#"
          className="text-foreground transition-colors hover:text-foreground"
        >
          Home
        </Link>
        <Link
          href="#"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          Features
        </Link>
        <Link
          href="#"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          About
        </Link>
      </nav>
      <Sheet className="order-1">
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="grid gap-3 text-base font-medium">
            <Link href="#" className="mt-3 hover:text-foreground">
              Home
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
            >
              Features
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
            >
              About
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
      <div className="order-3 flex w-max items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <Button variant="outline">{navActionBtnName}</Button>
      </div>
    </header>
  );
}
