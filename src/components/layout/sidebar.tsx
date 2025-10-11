"use client";

import * as React from "react";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/lib/data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Logo from "../logo";
import { ContactButton } from "../contact-button";

interface SidebarContextType {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SidebarContext = React.createContext<SidebarContextType | undefined>(
  undefined
);

export function useSidebar() {
  const context = React.useContext(SidebarContext);
  if (context === undefined) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
}

export function SidebarProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = React.useState(false);

  return (
    <SidebarContext.Provider value={{ open, setOpen }}>
      {children}
      <Sidebar />
    </SidebarContext.Provider>
  );
}

function Sidebar() {
  const { open, setOpen } = useSidebar();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent
        side="right"
        className="w-full md:w-3/4 lg:w-1/3 p-0 overflow-y-auto"
      >
        <SheetHeader className="p-4 border-b text-left">
          <SheetTitle>
            <Link href="/" onClick={() => setOpen(false)}>
              <Logo />
            </Link>
          </SheetTitle>
        </SheetHeader>
        <nav className="p-4">
          <Accordion type="multiple" className="w-full">
            {navLinks.map((link) =>
              link.megaMenu ? (
                <AccordionItem value={link.title} key={link.title}>
                  <AccordionTrigger className="text-lg font-medium">
                    {link.title}
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4 pl-4">
                      {link.megaMenu.map((section) => (
                        <div key={section.title}>
                          <h4 className="font-semibold mb-2 text-primary">
                            <Link
                              href={section.href || "#"}
                              onClick={() => setOpen(false)}
                            >
                              {section.title}
                            </Link>
                          </h4>
                          <ul className="space-y-2">
                            {section.links.map((item) => (
                              <li key={item.title}>
                                <Link
                                  href={item.href}
                                  onClick={() => setOpen(false)}
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
                  onClick={() => setOpen(false)}
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
  );
}
