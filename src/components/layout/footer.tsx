import Link from "next/link";
import Logo from "@/components/logo";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  Dribbble,
  Phone,
  Mail,
} from "lucide-react";
import { footerData } from "@/lib/data";

const BehanceIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M8.56 2.75a3.37 3.37 0 0 0-2.18 1h0a3.37 3.37 0 0 0-1.44 2.32A3.37 3.37 0 0 0 8.56 9h4.88a3.37 3.37 0 0 0 3.37-3.37A3.37 3.37 0 0 0 13.44 2a3.37 3.37 0 0 0-3.37 3.37h-1.51A3.37 3.37 0 0 0 8.56 2.75Z"></path><path d="M8.56 15a3.37 3.37 0 0 0 3.37 3.37h1.51a3.37 3.37 0 0 0 0-6.74h-1.51A3.37 3.37 0 0 0 8.56 15Z"></path><path d="M2 18h2.88"></path>
    </svg>
);


const socialIcons = {
  Facebook: Facebook,
  Twitter: Twitter,
  LinkedIn: Linkedin,
  Instagram: Instagram,
  YouTube: Youtube,
  Dribbble: Dribbble,
  Behance: BehanceIcon,
};

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {footerData.columns.map((column, index) => (
            <div key={index}>
              <h3 className="font-semibold text-lg mb-4 text-primary">{column.title}</h3>
              <ul>
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex} className="mb-2">
                    <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mb-8">
            <h3 className="font-semibold text-lg mb-4 text-primary">Our Global Presence</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {footerData.locations.map((location, index) => (
                    <div key={index}>
                        <h4 className="font-medium text-foreground">{location.city}</h4>
                        <p className="text-muted-foreground text-sm">{location.address}</p>
                    </div>
                ))}
            </div>
        </div>

        <div className="border-t border-border pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
            <div className="flex flex-col gap-2">
                <a href={`tel:${footerData.contact.phone1.replace(/\s/g, '')}`} className="flex items-center justify-center md:justify-start gap-2 text-muted-foreground hover:text-primary transition-colors">
                    <Phone size={16} />
                    <span>{footerData.contact.phone1}</span>
                </a>
                 <a href={`tel:${footerData.contact.phone2.replace(/\s/g, '')}`} className="flex items-center justify-center md:justify-start gap-2 text-muted-foreground hover:text-primary transition-colors">
                    <Phone size={16} />
                    <span>{footerData.contact.phone2}</span>
                </a>
                <a href={`mailto:${footerData.contact.email}`} className="flex items-center justify-center md:justify-start gap-2 text-muted-foreground hover:text-primary transition-colors">
                    <Mail size={16} />
                    <span>{footerData.contact.email}</span>
                </a>
            </div>

            <div className="flex flex-col items-center gap-2">
              <Logo />
              <p className="text-sm text-muted-foreground">
                Copyright ©{new Date().getFullYear()}. All Rights Reserved
              </p>
            </div>

            <div className="flex flex-col items-center md:items-end gap-4">
              <div className="flex space-x-4">
                {footerData.socials.map((social, index) => {
                  const Icon = socialIcons[social.name as keyof typeof socialIcons];
                  return (
                    <Link key={index} href={social.href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                      {Icon && <Icon size={20} />}
                    </Link>
                  );
                })}
              </div>
              <div className="flex space-x-4 text-sm">
                {footerData.legalLinks.map((link, index) => (
                   <Link key={index} href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                     {link.label}
                   </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
