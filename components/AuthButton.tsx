import Link from "next/link";
import { Button } from "./ui/button";
import { createClient } from "@/lib/supabase/server";
import { LogoutButton } from "./LogoutButton";

export async function AuthButton() {
  const supabase = await createClient();

  // You can also use getUser() which will be slower.
  const { data } = await supabase.auth.getClaims();

  const user = data?.claims;

  return user ? (
    <div className="flex items-center gap-4">
      <LogoutButton />
    </div>
  ) : (
    <div className="flex gap-6 items-center">
        <Link href="/login" className="hover:text-amber-500 transition-all text-xs tracking-wider uppercase text-stone-500 cursor-pointer">Sign in</Link>
        <Button asChild size="sm" variant={"default"}>
            <Link href="/signup" className="uppercase px-4 py-1 hover:bg-amber-500 transition-all text-xs font-semibold cursor-pointer">Start</Link>
        </Button>
    </div>
  );
}
