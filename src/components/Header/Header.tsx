import { ReactNode } from 'react';

interface HeaderProps {
  children: ReactNode;
}

export default function Header({ children }: HeaderProps) {
  return (
    <header className="bg-[url(/img/hero-image.webp)] bg-center bg-cover h-screen">
      <div className="relative bg-gradient-to-b from-slate-950/75 from-30% to-blue-950/75 h-full flex flex-col">
        {children}
      </div>
    </header>
  );
}