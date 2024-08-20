import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function WriterSwitch() {
  return (
    <Card className="w-[350px] mt-5">
      <CardHeader>
        <CardTitle>Want to become writer?</CardTitle>
        <CardDescription>
           You can post your articles after switching to writer mode.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Button>Switch to writer</Button>
      </CardContent>
    </Card>
  );
}
