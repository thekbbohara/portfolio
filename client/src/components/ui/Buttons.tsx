import cn from "@/utils/cn";

type btnAttributesType = React.ButtonHTMLAttributes<HTMLButtonElement>;
type btnTheme = "primary" | "default" | "ghost";

interface btnProps extends btnAttributesType {
  theme?: btnTheme;
  className?: string;
}

const Button = ({ children, className, theme, ...attributes }: btnProps) => {
  const btnDefault = "text-btn-d-text bg-btn-default hover:bg-btn-d-hover";
  const btnPrimary = "text-btn-p-text bg-btn-primary hover:bg-btn-p-hover";
  const btnGhost = "text-btn-ghost bg-transparent hover:border-btn-g-hover";
  const selectedThemeClass =
    theme == "primary" ? btnPrimary : theme == "ghost" ? btnGhost : btnDefault;
  return (
    <button
      className={cn(
        "rounded-[0.5em] flex justify-center items-center p-2 border border-transparent ",
        selectedThemeClass,
        className,
      )}
      {...attributes}
    >
      {children}
    </button>
  );
};

export default Button;
