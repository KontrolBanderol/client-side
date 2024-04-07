import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function Page({ children, ...props }: Props) {
  return (
    <div {...props} className="pt-[56px]">
      {children}
    </div>
  );
}
