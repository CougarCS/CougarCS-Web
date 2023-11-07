import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  href: string;
  name: string;
}

export default function NavLink({ href, name }: NavLinkProps) {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={pathname == href ? "text-red-700 font-medium" : ""}
    >
      {name}
    </Link>
  );
}
