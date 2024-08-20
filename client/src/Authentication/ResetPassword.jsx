import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ResetPassword() {
  let componentInfo = {
    title: "Forget Password",
    description:
      "If your account is associated with this email, we'll send you a link to reset your password.",
    isSentMail: false,
  };
  const path = useLocation();
  if (path.search.startsWith("?token=")) {
    componentInfo = {
      title: "Reset Password",
      description: "Please enter your new password below.",
      isSentMail: true,
    };
  }

  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">{componentInfo.title}</CardTitle>
        <CardDescription>{componentInfo.description}</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <section className={`${componentInfo.isSentMail ? "hidden" : ""}`}>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
            />
          </div>
          <Button className="w-full mt-3">Next</Button>
        </section>
        <section className={`${componentInfo.isSentMail ? "" : "hidden"}`}>
          <div className="grid gap-2">
            <Label className="mb-4">
              <span className="text-primary">Email:</span>{" "}
              nayaksahil992003@gmail.com
            </Label>
            <Label htmlFor="password">New Password</Label>
            <Input id="password" type="password" placeholder="" required />
          </div>
          <Button className="w-full mt-3">Update Password</Button>
        </section>
      </CardContent>
      <CardFooter>
        <div className="w-full text-sm underline flex justify-between items-center">
          <Link to="/auth/register">Create an account</Link>
          <Link to="/auth/login">Log in</Link>
        </div>
      </CardFooter>
    </Card>
  );
}
