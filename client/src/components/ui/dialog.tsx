import cn from "@/utils/cn";
import React, { ReactNode, forwardRef, useEffect } from "react";

interface DialogProps {
  children: ReactNode;
  className?: string;
}

export const Dialog = forwardRef<HTMLDialogElement, DialogProps>(
  ({ children, className, ...props }, ref) => {
    useEffect(() => {
      // console.log(ref)
    }, [ref]);
    return (
      <dialog
        ref={ref}
        className={cn("bg-s1 p-4 rounded-md", className)}
        {...props}
      >
        {children}
      </dialog>
    );
  },
);

export const DialogContent = ({
  children,
  className,
  ...props
}: {
  children?: ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("bg-transparent", className)} {...props}>
      {children}
    </div>
  );
};
export const DialogHeader = ({
  children,
  className,
  ...props
}: {
  children?: ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("bg-transparent", className)} {...props}>
      {children}
    </div>
  );
};
export const DialogTitle = ({
  children,
  className,
  ...props
}: {
  children?: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn("bg-transparent font-bold text-xl", className)}
      {...props}
    >
      {children}
    </div>
  );
};
export const DialogDescription = ({
  children,
  className,
  ...props
}: {
  children?: ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("bg-transparent", className)} {...props}>
      {children}
    </div>
  );
};
export const DialogFooter = ({
  children,
  className,
  ...props
}: {
  children?: ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("bg-transparent", className)} {...props}>
      {children}
    </div>
  );
};
Dialog.displayName = "Dialog";
