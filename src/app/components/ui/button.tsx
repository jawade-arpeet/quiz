import cn from "@/app/utils/cn";

function Button({
  children,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(
        "inline-block text-sm px-6 py-3 h-12 bg-primary font-semibold text-white rounded-full",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
