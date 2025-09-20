'use client';

import { Button, type ButtonProps } from "@/components/ui/button";
import { useContactSheet } from "@/hooks/use-contact-sheet";
import { User } from "lucide-react";

export function ContactButton({ children, ...props }: ButtonProps) {
    const { setOpen } = useContactSheet();

    return (
        <Button onClick={() => setOpen(true)} {...props}>
            <User className="mr-2 h-4 w-4" />
            {children || 'Get In Touch'}
        </Button>
    )
}
