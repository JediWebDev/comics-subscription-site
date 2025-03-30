import Link from "next/link";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-4 px-4 border-b">
      <Link href="/" className="text-xl font-bold">MyGallery</Link>
      <div className="flex gap-4 items-center">
        <Link href="/gallery">Gallery</Link>
        <Link href="/subscribe">Subscribe</Link>
        <Link href="/account">
          <Avatar>
            <AvatarImage src="@/public/avatar-icon.png" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
        </Link>
      </div>
    </nav>
  );
}