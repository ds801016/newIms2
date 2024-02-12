import { items } from "@/components/layout/navigation/top/menuItems";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

import { cn } from "@/utils/utils";
import React from "react";
import { ChevronDown } from "lucide-react";
const MenuBar = () => {
  return (
    <div className="flex justify-center">
      <NavigationMenu>
        <NavigationMenuList>
          {items.map((item) => (
            <NavigationMenuItem>
              {!item.components && (
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {item.label}
                </NavigationMenuLink>
              )}
              {item.components && (
                <>
                  <NavigationMenuTrigger>{item.label}</NavigationMenuTrigger>

                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                      {item.components &&
                        item.components.map((component) => (
                          <ListItem
                            key={component.title}
                            title={component.title}
                            href={component.href}
                            subMenus={component.children}
                          >
                            {component.description && component.description}
                          </ListItem>
                        ))}
                    </ul>
                  </NavigationMenuContent>
                </>
              )}
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, subMenus, ...props }, ref) => {
  if (!subMenus)
    return (
      <li className="group">
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    );

  if (subMenus)
    return (
      <li className="group">
        <div
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <HoverCard openDelay={0}>
            <HoverCardTrigger className="flex gap-2">
              <div>
                <div className="text-sm font-medium leading-none">{title}</div>
                <div className="flex gap-2">
                  <p className="line-clamp-2 flex gap-2 text-sm leading-snug text-muted-foreground">
                    {children}
                  </p>
                </div>
              </div>
              <ChevronDown />
            </HoverCardTrigger>
            <HoverCardContent className="w-auto p-2">
              <div className="grid grid-cols-2 gap-2">
                {subMenus.map((row) => (
                  <ListItem
                    key={row.title}
                    title={row.title}
                    href={row.href}
                    subMenus={row.children}
                  >
                    {row.description}
                  </ListItem>
                ))}
              </div>
            </HoverCardContent>
          </HoverCard>
        </div>
      </li>
    );
});
ListItem.displayName = "ListItem";
export default MenuBar;
{
  /* <HoverCard>
  <HoverCardTrigger>Hover</HoverCardTrigger>
  <HoverCardContent>
    The React Framework – created and maintained by @vercel.
  </HoverCardContent>
</HoverCard> */
}
