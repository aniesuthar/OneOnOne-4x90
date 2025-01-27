"use client";

import * as React from "react";
import * as HoverCardPrimitive from "@radix-ui/react-hover-card";

import { cn } from "@/lib/utils";

const HoverCard = ({ children, ...props }) => {
  const [isopen, setIsOpen] = React.useState(false);

  const handletoggle = () => setIsOpen((prev) => !prev);
  const handleopen = () => setIsOpen(true);
  const handleclose = () => setIsOpen(false);

  return (
    <HoverCardPrimitive.Root open={isopen} onOpenChange={setIsOpen} {...props}>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, { handletoggle, handleopen, handleclose, isopen })
      )}
    </HoverCardPrimitive.Root>
  );
};

const HoverCardTrigger = React.forwardRef(
  ({ className, handletoggle, handleopen, handleclose, ...props }, ref) => {
    return (
      <HoverCardPrimitive.Trigger
        ref={ref}
        onClick={handletoggle}
        onMouseEnter={handleopen}
        onMouseLeave={handleclose}
        className={cn("cursor-pointer", className)}
        {...props} // Only pass valid props
      />
    );
  }
);
HoverCardTrigger.displayName = HoverCardPrimitive.Trigger.displayName;

const HoverCardContent = React.forwardRef(({ className, align = "start", sideOffset = 12, ...props }, ref) => {

  return (
    <>
      <HoverCardPrimitive.Content
        ref={ref}
        align={align}
        sideOffset={sideOffset}
        className={cn(
          "-ml-2 z-50 rounded-lg w-64 border-t-2 border-secondary bg-primary text-center px-4 py-1 text-primary-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
          className
        )}
        {...props}
      />
      <style>
        {`
    .hoverCard::after {
      content: "";
      position: absolute;
      transition: all 0.5s ease-out;
      top: 0;
      left: 10px;
      transform: translateY(-100%);
      box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
        var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
      border-width: 6px;
      border-style: solid;
      border-color: transparent transparent hsl(var(--secondary)) transparent;
    }
  `}
      </style>
    </>
  );
});
HoverCardContent.displayName = HoverCardPrimitive.Content.displayName;

export { HoverCard, HoverCardTrigger, HoverCardContent };