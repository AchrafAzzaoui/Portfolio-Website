import { ReactNode } from "react";

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <main className="w-full max-w-[100rem] mx-auto px-4 sm:px-6 md:px-12 lg:px-28">
      {children}
    </main>
  );
}
