import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useState } from "react";
import AccountWithEmail from "./AccountWithEmail";

export function AuthOptions() {
  const [wantToContinueWithEmail, setCotinueWithEmail] = useState(false);

  function continueWithEmail() {
    setCotinueWithEmail(true);
  }

  function goBackToOptions() {
    console.log("clicked");
    setCotinueWithEmail(false);
  }

  function continueWithGoogle(){
    
  }

  return (
    <Card className="mx-auto w-[350px]">
      <CardHeader>
        <CardTitle>Authentication</CardTitle>
        <CardDescription className="pt-2">
          Choose an option to{" "}
          <span className="text-foreground font-medium">log in</span> or{" "}
          <span className="text-foreground font-medium">
            create a new account
          </span>
          .
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Button
          variant="outline"
          className={`${wantToContinueWithEmail ? "hidden" : ""} w-full`}
        >
          Continue with Google
        </Button>
        
        <Button
          onClick={goBackToOptions}
          variant="outline"
          className={`${wantToContinueWithEmail ? "" : "hidden"} w-full`}
        >
          Go back
        </Button>
        
        <Button
          onClick={continueWithEmail}
          type="submit"
          className={`${wantToContinueWithEmail ? "hidden" : ""} w-full mt-2`}
        >
          Continue with Email
        </Button>

        {wantToContinueWithEmail ? <AccountWithEmail /> : ""}
      </CardContent>
    </Card>
  );
}
