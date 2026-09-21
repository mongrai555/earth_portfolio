import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4d44b5] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95 cursor-pointer",
  {
    variants: {
      variant: {
        default: "bg-[#4d44b5] text-white hover:bg-[#6157d0] shadow-lg shadow-[#4d44b5]/30 hover:shadow-[#4d44b5]/50",
        destructive: "bg-red-600 text-white hover:bg-red-700",
        outline: "border border-white/20 bg-white/5 hover:bg-white/10 hover:border-[#4d44b5] text-white backdrop-blur-md",
        secondary: "bg-[#1f2333] text-white hover:bg-[#2a2f45] border border-white/10",
        ghost: "hover:bg-white/10 text-white",
        link: "text-[#7c73e6] underline-offset-4 hover:underline",
        purpleGlow: "bg-gradient-to-r from-[#4d44b5] to-[#7c73e6] text-white shadow-[0_0_20px_rgba(77,68,181,0.5)] hover:shadow-[0_0_30px_rgba(124,115,230,0.8)] border border-purple-400/30 font-semibold"
      },
      size: {
        default: "h-10 px-5 py-2",
        sm: "h-9 rounded-md px-3 text-xs",
        lg: "h-12 rounded-xl px-8 text-base",
        icon: "h-10 w-10 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"
  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  )
})
Button.displayName = "Button"

export { Button, buttonVariants }
