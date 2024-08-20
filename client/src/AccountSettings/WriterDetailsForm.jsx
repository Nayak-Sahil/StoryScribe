import * as React from "react"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function WriterDetailsForm() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Writer Profile</CardTitle>
        <CardDescription>This information will be visible publicly.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Username</Label>
              <Input id="name" placeholder="Enter Username." />
              <p className="text-sm">www.storyscribe.com/<b>user_name</b></p>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Tagline</Label>
              <Input id="name" placeholder="Enter your tagline." />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Bio</Label>
              <Textarea className="h-[140px]" placeholder="Write your bio here." />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Save</Button>
      </CardFooter>
    </Card>
  )
}
