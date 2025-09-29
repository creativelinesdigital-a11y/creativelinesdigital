
"use client";

import * as React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { ContactSheetContext } from "@/hooks/use-contact-sheet";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const interests = [
  { id: "mobile-app", label: "Mobile App" },
  { id: "game-dev", label: "Game Development" },
  { id: "ai-ml", label: "AI/ML" },
  { id: "custom-software", label: "Custom Software" },
  { id: "ui-ux", label: "UI/UX" },
  { id: "web-dev", label: "Web Development" },
];

export function ContactSheetProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = React.useState(false);

  return (
    <ContactSheetContext.Provider value={{ open, setOpen }}>
      {children}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent className="overflow-y-auto">
          <SheetHeader>
            <SheetTitle>Have an <span className="text-accent">Idea?</span></SheetTitle>
            <SheetDescription>
              Don't let your project go into the wrong hands; trust us to deliver you the right digital solution, share your project details and let us do the job!
            </SheetDescription>
          </SheetHeader>
          <div className="py-8">
            <form action="https://formspree.io/f/mvgnqjzj" method="POST" className="space-y-8">
              <div className="space-y-4">
                <p className="font-medium">I'm interested in</p>
                <div className="grid grid-cols-2 gap-4">
                    {interests.map((item) => (
                      <div key={item.id} className="flex items-center space-x-2">
                        <Checkbox id={item.id} name="interest" value={item.label} />
                        <Label htmlFor={item.id} className="font-normal">{item.label}</Label>
                      </div>
                    ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2 sm:col-span-1 space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input type="text" id="name" name="name" placeholder="Your Name" required />
                </div>
                <div className="col-span-2 sm:col-span-1 space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input type="email" id="email" name="email" placeholder="your@email.com" required />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2 sm:col-span-1 space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input type="tel" id="phone" name="phone" placeholder="Phone Number" />
                </div>
                <div className="col-span-2 sm:col-span-1 space-y-2">
                    <Label htmlFor="zipcode">Zip Code</Label>
                    <Input type="text" id="zipcode" name="zipcode" placeholder="Your Zip Code" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" name="message" placeholder="Tell us about your project" required />
              </div>

              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </SheetContent>
      </Sheet>
    </ContactSheetContext.Provider>
  );
}
