// components/card/Card.tsx
import React from "react";

interface CardProps {
  children: React.ReactNode;
}

export const Card = ({ children }: CardProps) => {
  return (
    <div className="rounded-sm bg-white p-4 shadow-md dark:bg-gray-800">
      {children}
    </div>
  );
};

interface CardHeaderProps {
  title: string;
}

export const CardHeader = ({ title }: CardHeaderProps) => {
  return (
    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
      {title}
    </h3>
  );
};

interface CardContentProps {
  children: React.ReactNode;
  className?: string;
}

export const CardContent = ({ children, className = "" }: CardContentProps) => {
  return <div className={`mt-2 ${className}`}>{children}</div>;
};
