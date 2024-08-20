import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import defaultUserProfile from "../assets/defaultUserProfile.png"

export default function ProfileForm() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Your Profile</CardTitle>
        <CardDescription>
          Upload your new profile image in one-click.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <img className="rounded-full mx-auto" src={defaultUserProfile} alt="Your_Profile" width={80} />
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Input id="picture" type="file" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Upload</Button>
      </CardFooter>
    </Card>
  );
}
