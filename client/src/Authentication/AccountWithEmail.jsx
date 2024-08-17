import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function AccountWithEmail() {
  return (
    <div id="AccountWithEmail" className="grid gap-2 mt-5">
      <Label htmlFor="email">Email</Label>
      <Input id="email" type="email" placeholder="john@example.com" required />
      <Button type="submit" className="w-full">
        Continue
      </Button>
    </div>
  );
}
