import { useTheme } from "next-themes"
import { Toaster as Sonner, toast } from "sonner"

type ToasterProps = React.ComponentProps<typeof Sonner>

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-cream group-[.toaster]:text-olive-dark group-[.toaster]:border-olive-dark group-[.toaster]:border-2 group-[.toaster]:shadow-2xl group-[.toaster]:rounded-xl group-[.toaster]:p-6 group-[.toaster]:text-lg group-[.toaster]:font-semibold",
          description: "group-[.toast]:text-olive-medium group-[.toast]:text-base",
          actionButton:
            "group-[.toast]:bg-olive-dark group-[.toast]:text-cream",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      }}
      {...props}
    />
  )
}

export { Toaster, toast }
