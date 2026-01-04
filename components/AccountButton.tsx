import Link from "next/link";
import { Button } from "./ui/button";
import { createClient } from "@/lib/supabase/server";

export async function AccountButton() {
  const supabase = await createClient();

  // You can also use getUser() which will be slower.
  const { data } = await supabase.auth.getClaims();

  const user = data?.claims;

  return user ? (
    <div className="flex items-center gap-4">
        <span className="hover:text-amber-500 transition-all text-xs tracking-wider uppercase text-stone-500 cursor-pointer">Account</span>
    </div>
  ) : null;
}