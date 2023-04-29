import Link from "next/link";

export const Socials = ({ href, children }) => {
  return (
    <nav>
      <Link href={href} target="_blank" rel="noopener nofollow">
        {children}
      </Link>
    </nav>
  );
};
