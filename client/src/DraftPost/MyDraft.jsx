import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FilePenLine } from "lucide-react";
import DraftPostTable from "./DraftPostTable";

export default function MyDraft() {
  return (
    <main className="flex flex-col gap-4 p-2 lg:gap-6">
      <Card className="relative sm:col-span-2 flex items-center justify-between rounded-lg border border-dashed shadow-sm">
        <Badge className="absolute right-8 -top-3 w-max -ml-1">Recent</Badge>
        <CardHeader>
          <Badge className="w-max -ml-1 mb-2 text-[11px]" variant="secondary">
            <span className="text-primary mr-2">Draft On: </span> 24 - May 2025
          </Badge>
          <CardTitle className="text-xl">Your last draft blog</CardTitle>
          <CardDescription className="hidden sm:block max-w-2xl text-balance leading-relaxed">
            Transform your thoughts into engaging articles,{" "}
            <span className="text-primary font-semibold">
              Publish your thoughtful blog post
            </span>
            .
          </CardDescription>
        </CardHeader>
        <Button variant="outline" className="mr-5">
          <FilePenLine className="h-4 w-4 mr-2" /> Edit Post
        </Button>
      </Card>
      <DraftPostTable />
    </main>
  );
}
