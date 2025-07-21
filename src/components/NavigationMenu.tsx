import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";

interface NavigationMenuProps {
  logo?: string;
}

const MainNavigationMenu = ({
  logo = "https://api.dicebear.com/7.x/avataaars/svg?seed=toastmasters",
}: NavigationMenuProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const resourcesItems = [
    { title: "Meeting Roles", href: "/resources/meeting-roles" },
    { title: "Speech Resources", href: "/resources/speech-resources" },
    { title: "Leadership Resources", href: "/resources/leadership" },
    { title: "Club Documents", href: "/resources/documents" },
  ];

  const eventsItems = [
    { title: "Upcoming Meetings", href: "/events/meetings" },
    { title: "Special Events", href: "/events/special" },
    { title: "Contests", href: "/events/contests" },
    { title: "Calendar", href: "/events/calendar" },
  ];

  const memberItems = [
    { title: "Member Login", href: "/member/login" },
    { title: "Member Directory", href: "/member/directory" },
    { title: "Educational Progress", href: "/member/progress" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center space-x-2">
            <img src={logo} alt="Toastmasters Logo" className="h-10 w-10" />
            <span className="hidden font-bold text-xl text-primary sm:inline-block">
              Hurstville Weekend Toastmasters
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {resourcesItems.map((item) => (
                      <li key={item.title}>
                        <NavigationMenuLink asChild>
                          <Link
                            to={item.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">
                              {item.title}
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Events</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {eventsItems.map((item) => (
                      <li key={item.title}>
                        <NavigationMenuLink asChild>
                          <Link
                            to={item.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">
                              {item.title}
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Member Area</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {memberItems.map((item) => (
                      <li key={item.title}>
                        <NavigationMenuLink asChild>
                          <Link
                            to={item.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">
                              {item.title}
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/about">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    About Us
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <a href="tel:0414889018">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Contact: 0414 889 018
                  </NavigationMenuLink>
                </a>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <Button asChild className="ml-4 bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-700 hover:to-blue-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <Link to="/join">Join Us</Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" aria-label="Menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col gap-6 py-6">
                <div className="flex items-center justify-between">
                                      <Link
                      to="/"
                      className="flex items-center space-x-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <img
                        src={logo}
                        alt="Toastmasters Logo"
                        className="h-8 w-8"
                      />
                      <span className="font-bold text-lg text-primary">
                        Hurstville Weekend Toastmasters
                      </span>
                    </Link>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>

                <div className="flex flex-col space-y-4">
                  <div className="border-b pb-2">
                    <h3 className="mb-2 font-medium text-sm text-muted-foreground">
                      Resources
                    </h3>
                    <div className="flex flex-col space-y-2">
                      {resourcesItems.map((item) => (
                        <Link
                          key={item.title}
                          to={item.href}
                          className="text-sm hover:text-primary"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div className="border-b pb-2">
                    <h3 className="mb-2 font-medium text-sm text-muted-foreground">
                      Events
                    </h3>
                    <div className="flex flex-col space-y-2">
                      {eventsItems.map((item) => (
                        <Link
                          key={item.title}
                          to={item.href}
                          className="text-sm hover:text-primary"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div className="border-b pb-2">
                    <h3 className="mb-2 font-medium text-sm text-muted-foreground">
                      Member Area
                    </h3>
                    <div className="flex flex-col space-y-2">
                      {memberItems.map((item) => (
                        <Link
                          key={item.title}
                          to={item.href}
                          className="text-sm hover:text-primary"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  </div>

                  <Link
                    to="/about"
                    className="text-sm font-medium hover:text-primary"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    About Us
                  </Link>

                  <a
                    href="tel:0414889018"
                    className="text-sm font-medium hover:text-primary"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contact: 0414 889 018
                  </a>
                </div>

                <Button
                  asChild
                  className="w-full bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-700 hover:to-blue-700 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Link to="/join" onClick={() => setIsMenuOpen(false)}>
                    Join Us
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default MainNavigationMenu;
