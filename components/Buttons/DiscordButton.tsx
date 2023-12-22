import Link from "next/link";

interface DiscordButtonProps {
  url: string;
  desc?: string;
}

export default function DiscordButton({ url, desc }: DiscordButtonProps) {
  return (
    <div className="w-[199.95px]">
      <Link
        href={url}
        target="_blank"
        className="bg-[#7289da] h-[51]
                  shadow-lg rounded-[7px] border-none outline-none
                  flex items-center gap-[15px]
                  px-[25px] py-[13px]
                  font-poppins text-white font-semibold
                  hover:bg-[#627ee2] active:bg-[#627ee2] focus:bg-[#627ee2]"
      >
        <img src="/icons/discord-icon.webp" alt="Discord Button Logo" />
        Join Discord
      </Link>
      <p className="h-6 py-1 font-poppins text-[11px] text-[#777]">{desc}</p>
    </div>
  );
}
