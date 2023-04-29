import Link from "next/link";

export const Socials = ({ href, children }) => {
  return (
    <Link href={href} target="_blank" rel="noopener nofollow">
      {children}
    </Link>
  );
};
