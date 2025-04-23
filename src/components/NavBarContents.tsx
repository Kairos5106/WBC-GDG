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
import ComesInGoesOutUnderline from "@/fancy/components/text/underline-comes-in-goes-out";
import { resourceTypes } from "@/data/resources";

const components: {
  className?: string | undefined; 
  title: string; 
  href: string;
}[] = [
  ... resourceTypes.map((resourceType, index) => ({
      className: "",
      title: resourceTypes[index],
      href: `/resources?category=${resourceType.replace(/\s+/g, "+")}`
  }))
  ,
  {
    className: "font-bold",
    title: "All Resources",
    href: "/resources"
  }
];

interface NavBarContentsProps {
  className?: string
  buttonStyles?: string
}

const NavBarContents: FC<NavBarContentsProps> = ({
  className,
  buttonStyles
}) => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <div className={className}>
          <NavigationMenuItem>

            <NavigationMenuTrigger 
              className={`
                font-bold
                tablet:text-lg 
                laptop:p-8 laptop:text-2xl
                ${buttonStyles}
            `}>
              <ComesInGoesOutUnderline label="Resources" />
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
                  font-semibold
                  tablet:text-lg 
                  laptop:p-8 laptop:text-2xl
                  ${buttonStyles}
              `}>
                <ComesInGoesOutUnderline label="Contact Us" />
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
>(({ className, title, ...props }, ref) => {
  return (
    <li>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
          )}
          {...props}
        >
          <div className={cn(
            "text-sm font-medium leading-none",
            className
          )}>{title}</div>
        </a>
    </li>
  )
})
ListItem.displayName = "ListItem"