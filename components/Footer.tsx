import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="text-center pt-[45px] pb-[60px] mt-[50px] bg-[#f6f6f6]">
      <div className="max-w-[500px] mx-auto my-0">
        <Link href="/">
          <Image
            src="/images/logo.png"
            width={180}
            height={84.08}
            className="max-w-[180px] h-auto inline-block mb-[30px]"
            alt="CougarCS - Computer Science Organization in University of Houston"
          />
        </Link>
        <nav className="mb-[30px] justify-center flex flex-wrap">
          <div className="py-[0.5rem] px-[1rem]">
            <Link
              href="https://www.facebook.com/cougarcs"
              target="_blank"
              rel="nofollow noopener"
            >
              <Image 
                src="/icons/facebook.webp" 
                width={15}
                height={28} 
                alt="Facebook Icon" 
              />
            </Link>
          </div>
          <div className="py-[0.5rem] px-[1rem]">
            <Link
              href="https://www.linkedin.com/company/cougarcs-uh/"
              target="_blank"
              rel="nofollow noopener"
            >
              <Image 
                src="/icons/linkedin.webp" 
                width={26}
                height={26}
                alt="Linkedin Icon" 
              />
            </Link>
          </div>
          <div className="py-[0.5rem] px-[1rem]">
            <Link
              href="https://www.instagram.com/uh_cougarcs/"
              target="_blank"
              rel="nofollow noopener"
            >
              <Image 
                src="/icons/instagram.webp" 
                width={28}
                height={27}
                alt="Instagram Icon" 
              />
            </Link>
          </div>
          <div className="py-[0.5rem] px-[1rem]">
            <Link
              href="https://discord.gg/wEagwaXS7F"
              target="_blank"
              rel="nofollow noopener"
            >
              <Image 
                src="/icons/discord.webp" 
                width={25}
                height={29}
                alt="Discord Icon" 
              />
            </Link>
          </div>
          <div className="py-[0.5rem] px-[1rem]">
            <Link
              href="https://www.youtube.com/channel/UCmQNLzXBML0vaUbSEnHVbLA?view_as=subscriber"
              target="_blank"
              rel="nofollow noopener"
            >
              <Image 
                src="/icons/youtube.webp" 
                width={29}
                height={26}
                alt="Youtube Icon"
              />
            </Link>
          </div>
          <div className="py-[0.5rem] px-[1rem]">
            <Link
              href="https://github.com/CougarCS"
              target="_blank"
              rel="nofollow noopener"
            >
              <Image 
                src="/icons/github.webp" 
                width={24}
                height={24}
                alt="GitHub Icon"
              />
            </Link>
          </div>
          <div className="py-[0.5rem] px-[1rem]">
            <Link
              href="https://twitter.com/uhcougarcs"
              target="_blank"
              rel="nofollow noopener"
            >
              <Image 
                src="/icons/twitter.webp" 
                width={28}
                height={26}
                alt="Twitter Icon" 
              />
            </Link>
          </div>
        </nav>
        <nav className="p-0 justify-center text-on-background">
          <Link
            href="/privacy"
            className="hover:text-on-hover active:text-on-hover"
          >
            Privacy Policy
          </Link>
          <span className="inline-block px-[10px] py-0">|</span>
          &copy; Copyright {new Date().getFullYear()}
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
