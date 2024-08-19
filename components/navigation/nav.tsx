import { auth } from "@/server/auth";
import Logo from "./logo";
import ProfileButton from "./profile-button";
import { Button } from "../ui/button";
import Link from "next/link";
import { LogIn } from "lucide-react";
// import { Link } from "lucide-react";

export default async function Nav() {
  const session = await auth();

  return (
    <header className="py-4 px-4">
      <nav>
        <ul className="flex justify-between items-center">
          <li>
            <Link href="/"><Logo /></Link>
          </li>
          {!session ? (
            <li>
              <Button asChild>
                <Link className="flex gap-2" href="/auth/login"><LogIn size={16} /><span>Login</span></Link>
              </Button>
            </li>
          ) : (
            <li>
              <ProfileButton expires={session?.expires!} user={session?.user} />
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}