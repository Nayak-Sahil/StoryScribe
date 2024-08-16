import { PenTool } from "lucide-react";

export default function Logo() {
  return (
    <>
        <PenTool className="h-5 w-5 -rotate-90 text-card-foreground" />
        <p><span className="text-card-foreground">Story</span>Scribe</p>
    </>
  )
}
