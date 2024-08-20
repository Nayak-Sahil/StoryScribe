import React from "react";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardHeader,
    CardDescription,
    CardTitle,
  } from "@/components/ui/card";
import BlogPostTable from "./BlogPostTable";

export default function ManageBlogs() {
  return (
    <main className="flex flex-col gap-4 p-2 lg:gap-6">
      <Card className="sm:col-span-2 flex items-center justify-between rounded-lg border border-dashed shadow-sm">
        <CardHeader>
          <CardTitle className="text-xl">Begin Your Writing Journey</CardTitle>
          <CardDescription className="hidden sm:block max-w-2xl text-balance leading-relaxed">
            Transform your thoughts into engaging articles, <span className="text-primary font-semibold">Publish your thoughtful blog post</span>.
          </CardDescription>
        </CardHeader>
        <Button className="mr-5">Create New Post</Button>
      </Card>
      <BlogPostTable />
    </main>
  );
}
