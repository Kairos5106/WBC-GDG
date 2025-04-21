import React, { FC } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
// import CompanyLogo from "./icons/CompanyLogo";
import { cn } from "@/lib/utils";

const components: {
  className?: string | undefined; title: string; href: string; description?: string 
}[] = [
  {
    title: "Category 1",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Category 2",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Category 3",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "All Resources",
    href: "/resources",
    className: "",
    description: undefined
  },
];

interface NavBarContentsProps {
  className?: string
}

const NavBarContents: FC<NavBarContentsProps> = ({
  className,
}) => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <div className={className}>
          <NavigationMenuItem>

            <NavigationMenuTrigger 
              className={`
                shadow-xl
                tablet:text-lg
            `}>
              Resources
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className={`
                grid grid-cols-1 max-w-[80vw] max-h-[65vh] overflow-scroll p-2
                md:w-50
              `}>
                {components.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                    className={component.className}
                  >
                    {component.description && (
                      <p>{component.description}</p>
                    )}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link href="/docs" legacyBehavior passHref>
              <NavigationMenuLink 
                className={
                  navigationMenuTriggerStyle() + `
                  tablet:text-lg 
              `}>
                Contact Us
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

        </div>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default NavBarContents;

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className={cn(
            "text-sm font-medium leading-none"
          )}>{title}</div>
          <p className={cn(
            "line-clamp-2 text-sm leading-snug text-muted-foreground"
          )}>
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"