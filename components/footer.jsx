import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { GithubLogo, EmailLogo, TelephoneLogo, FacebookLogo, LineLogo } from "./icons";

const footerLinks = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Projects",
    href: "/projects",
  },
];

const Footer = () => {
  return (
    <footer className="mt-20">
      <div className="max-w-screen-md mx-auto">
        <div className="py-12 flex flex-col justify-start items-center">

          <ul className="mt-6 flex items-center gap-4 flex-wrap">
            {footerLinks.map(({ title, href }) => (
              <li key={title}>
                <Link
                  href={href}
                  className="text-muted-foreground hover:text-foreground"
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Separator />
        <div className="py-6 flex flex-col-reverse sm:flex-row items-center justify-between gap-x-2 gap-y-5 px-6 xl:px-0">
          {/* Copyright */}
          <span className="text-muted-foreground">
            &copy; {new Date().getFullYear()} Pariya Singchalad.
          </span>

          <div className="flex items-center gap-5 text-muted-foreground">
            <p>Contact Me</p>
            <Link href="https://www.facebook.com/pryschl" target="_blank">
              <FacebookLogo className="h-5 w-5 hover:text-primary transition-colors" />
            </Link>
            <Link href="https://line.me/ti/p/HK6H5VJTOg" target="_blank">
              <LineLogo className="h-5 w-5 hover:text-primary transition-colors" />
            </Link>
            <Link href="https://github.com/pariya-dev/" target="_blank">
              <GithubLogo className="h-5 w-5 hover:text-primary transition-colors" />
            </Link>
            <Link href="mailto:pariyasingchalad@gmail.com">
              <EmailLogo className="h-5 w-5 hover:text-primary transition-colors" />
            </Link>
            <Link href="tel:+66955021922">
              <TelephoneLogo className="h-5 w-5 hover:text-primary transition-colors" />
            </Link>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;