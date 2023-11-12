import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  href: string;
  name: string;
}

export default function NavLink({ href, name }: NavLinkProps) {
  const pathname = usePathname();

  return pathname === href ? (
    <Link href={href} className="text-red-700 font-medium">
      {name}
      <div
        className="w-0 h-0 mx-auto 
          border-l-[6px] border-l-transparent 
          border-b-[8px] border-b-red-600 
          border-r-[6px] border-r-transparent"
      ></div>
    </Link>
  ) : (
    <Link href={href}>{name}</Link>
  );
}
