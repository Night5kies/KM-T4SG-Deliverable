"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import type { Database } from "@/lib/schema";
import { supabase } from "@supabase/auth-ui-shared";
import { SupabaseClient } from "@supabase/supabase-js";
import { SupabaseAuthClient } from "@supabase/supabase-js/dist/module/lib/SupabaseAuthClient";
import Image from "next/image";
import { createServerSupabaseClient } from "@/lib/server-utils";
import { createClientComponentClient  } from "@/lib/server-utils";
import { UUID } from "crypto";

type Species = Database["public"]["Tables"]["species"]["Row"];


export default function LearnMoreDialog({ species }: { species: Species }) {
  //const supabase = createClientComponentClient()
  //const { data, error } = await supabase.auth.admin.getUserById(species.author)
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-cyan-600" variant="outline">Learn More</Button>
      </DialogTrigger>
      <DialogContent className="max-h-screen overflow-y-auto">
        {species.image && (
          <div className="relative h-40 w-full">
            <Image src={species.image} alt={species.scientific_name} fill style={{ objectFit: "contain" }} />
          </div>
        )}
        <DialogHeader>
          <DialogTitle className="text-2xl">{species.common_name}</DialogTitle>
          <DialogDescription className="text-white">
            <p className="text-xl"><i>{species.scientific_name}</i></p>
            <br></br>
            <p><b>Kingdom:</b> {species.kingdom}</p>
            <p><b>Population:</b> {species.total_population}</p>
            <br></br>
            <p>{species.description}</p>
            <br></br>
            {/*<p>Author: {userId}</p>*/}
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
