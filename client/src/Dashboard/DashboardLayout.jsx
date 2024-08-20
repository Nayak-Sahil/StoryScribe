import { Link, Outlet } from "react-router-dom";
import {
  Bell,
  Bookmark,
  CircleUser,
  CircleUserRound,
  FileStack,
  FileText,
  Home,
  Menu,
  Search,
  UserCircle,
  UserRound,
  UserRoundCog,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Logo from "@/Landing/Logo";
import DashboardNav from "./DashboardNav";
import NavFooter from "./NavFooter";

const navListArr = [
  {
    title: "Dashboard",
    icon: <Home className="h-4 w-4" />,
    link: "/dashboard",
  },
  {
    title: "Manage Blogs",
    icon: <FileStack className="h-4 w-4" />,
    link: "/dashboard/manage-blogs",
  },
  {
    title: "My Drafts",
    icon: <FileText className="h-4 w-4" />,
    link: "/dashboard/my-drafts",
  },
  {
    title: "Bookmark",
    icon: <Bookmark className="h-4 w-4" />,
    link: "/dashboard/bookmark",
  },
  {
    title: "Account Settings",
    icon: <UserRoundCog className="h-4 w-4" />,
    link: "/dashboard/account-settings",
  },
];

export default function DashboardLayout() {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[260px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <Logo />
            </Link>
            <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
              <Bell className="h-4 w-4" />
              <span className="sr-only">Toggle notifications</span>
            </Button>
          </div>
          <div className="flex-1 mt-3">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              {navListArr.map((list, index) => {
                return <DashboardNav key={index} listData={list} />;
              })}
            </nav>
          </div>
          <div className="mt-auto p-4">
            <NavFooter />
          </div>
        </div>
      </div>
      <div className="h-screen flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col">
              <nav className="grid gap-2 text-lg font-medium">
                <Link
                  href="#"
                  className="flex items-center gap-2 text-lg font-semibold mb-5"
                >
                  <Logo />
                </Link>
                {navListArr.map((list, index) => {
                  return <DashboardNav isMobileNav={true} key={index} listData={list} />;
                })}
              </nav>
              <div className="mt-auto">
                <NavFooter />
              </div>
            </SheetContent>
          </Sheet>
          <div className="w-full flex-1">
            <form>
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search products..."
                  className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
                />
              </div>
            </form>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" className="rounded-full">
                <UserRound className="text-card-foreground h-4 w-4" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>nayaksahil992003@gmail.com</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <main className="h-screen flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-4 overflow-y-scroll">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
