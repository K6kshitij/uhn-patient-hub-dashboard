
import * as React from "react"
import * as CollapsiblePrimitive from "@radix-ui/react-collapsible"
import { PanelLeft, PanelRight } from "lucide-react"
import { cn } from "@/lib/utils"

const Collapsible = CollapsiblePrimitive.Root

const CollapsibleTrigger = CollapsiblePrimitive.CollapsibleTrigger

const CollapsibleContent = CollapsiblePrimitive.CollapsibleContent

// Custom collapsible trigger with the specified icon
const IconCollapsibleTrigger = React.forwardRef<
  React.ElementRef<typeof CollapsiblePrimitive.CollapsibleTrigger>,
  React.ComponentPropsWithoutRef<typeof CollapsiblePrimitive.CollapsibleTrigger> & {
    isCollapsed?: boolean
  }
>(({ className, isCollapsed, children, ...props }, ref) => (
  <CollapsiblePrimitive.CollapsibleTrigger
    ref={ref}
    className={cn("flex items-center gap-2", className)}
    {...props}
  >
    {children}
    {isCollapsed ? <PanelRight size={18} /> : <PanelLeft size={18} />}
  </CollapsiblePrimitive.CollapsibleTrigger>
))
IconCollapsibleTrigger.displayName = "IconCollapsibleTrigger"

export { Collapsible, CollapsibleTrigger, CollapsibleContent, IconCollapsibleTrigger }
