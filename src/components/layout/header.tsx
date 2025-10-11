'use client';
import Link from "next/link";
import { useState } from "react";
import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { navLinks } from "@/lib/data";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { ContactButton } from "../contact-button";
import { useSidebar } from "./sidebar";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { setOpen: setSidebarOpen } = useSidebar();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center">
            <Logo />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) =>
              link.megaMenu ? (
                <Popover key={link.title}>
                  <PopoverTrigger asChild>
                    <Button variant="ghost" className="text-sm font-medium">
                      {link.title}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-screen max-w-4xl mt-2" align="start">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-6">
                      {link.megaMenu.map((section, index) => (
                        <div key={index}>
                          <h3 className="font-bold text-lg mb-4 text-primary">
                            <Link href={section.href || '#'} className="hover:underline">{section.title}</Link>
                          </h3>
                          <ul className="space-y-3">
                            {section.links.map((item) => (
                              <li key={item.title}>
                                <Link
                                  href={item.href}
                                  className="flex items-start gap-3 text-muted-foreground hover:text-foreground"
                                >
                                  {/* Placeholder for icon */}
                                  <div className="w-4 h-4 mt-1 bg-primary/20 rounded-sm shrink-0"></div>
                                  <span>{item.title}</span>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </PopoverContent>
                </Popover>
              ) : (
                <Button asChild variant="ghost" key={link.title} className="text-sm font-medium">
                  <Link href={link.href || "#"}>{link.title}</Link>
                </Button>
              )
            )}
          </nav>
          
          <div className="hidden lg:flex items-center space-x-4">
            <ContactButton />
            <Button variant="outline" size="icon" onClick={() => setSidebarOpen(true)}>
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open sidebar</span>
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="lg:hidden flex items-center gap-2">
            <Button variant="outline" size="icon" onClick={() => setSidebarOpen(true)}>
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open sidebar</span>
            </Button>
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-full max-w-sm p-0 overflow-y-auto">
                  <div className="p-4 border-b">
                    <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                        <Logo />
                    </Link>
                  </div>
                  <nav className="p-4">
                    <Accordion type="single" collapsible className="w-full">
                        {navLinks.map((link) =>
                        link.megaMenu ? (
                            <AccordionItem value={link.title} key={link.title}>
                                <AccordionTrigger className="text-lg font-medium">{link.title}</AccordionTrigger>
                                <AccordionContent>
                                    <div className="space-y-4 pl-4">
                                    {link.megaMenu.map((section) => (
                                        <div key={section.title}>
                                            <h4 className="font-semibold mb-2 text-primary">
                                                <Link href={section.href || '#'} onClick={() => setMobileMenuOpen(false)}>{section.title}</Link>
                                            </h4>
                                            <ul className="space-y-2">
                                                {section.links.map((item) => (
                                                    <li key={item.title}>
                                                        <Link
                                                            href={item.href}
                                                            onClick={() => setMobileMenuOpen(false)}
                                                            className="block text-muted-foreground hover:text-foreground py-1"
                                                        >
                                                            {item.title}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        ) : (
                            <Link
                                key={link.title}
                                href={link.href || "#"}
                                onClick={() => setMobileMenuOpen(false)}
                                className="block py-4 text-lg font-medium border-b"
                            >
                                {link.title}
                            </Link>
                        )
                        )}
                    </Accordion>
                  </nav>
                  <div className="p-4 space-y-4 border-t">
                     <ContactButton className="w-full" />
                  </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
