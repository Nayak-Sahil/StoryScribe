import * as React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Bookmark, Calendar, Link, MessageSquare, PenTool, Tag } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export function BlogCard() {
  return (
    <Card className="relative w-[350px]">
      <Badge
        className="absolute right-5 -top-3 bg-white cursor-pointer"
        variant="outline"
      >
        <Bookmark className="h-3 w-3 mr-1" /> Save for later
      </Badge>
      <CardHeader>
        <CardTitle className="leading-6 text-base">
          Explaining Javascript Callbacks in 10 minutes
        </CardTitle>
        <CardDescription className="flex w-full justify-between">
          <LabelBlogCard
            icon={<PenTool className="h-3 w-3 mr-1 -rotate-90" />}
            text="Sahil Nayak"
          />
          <LabelBlogCard
            icon={<Calendar className="h-3 w-3 mr-1" />}
            text="2-Aug-2024"
          />
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="w-[300px]">
          <AspectRatio ratio={16 / 9}>
            <img
              src="https://cdn.hashnode.com/res/hashnode/image/upload/v1724317021849/2602756d-8ac7-4412-a985-fd10d5a7a975.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp"
              alt="Image"
              className="rounded-md object-cover"
            />
          </AspectRatio>
        </div>
        <p className="text-sm text-justify font-semibold text-gray-500 line-clamp-3">
          JavaScript callbacks are fundamental to understanding how the language
          handles asynchronous operations. This article will walk you through
          the basics, whether you're a beginner
        </p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <div className="flex gap-2">
            <Badge className="flex items-center text-card-foreground text-[11px]" variant="outline"><MessageSquare className="w-3 h-3 mr-1"/> 4</Badge>
            <Badge className="flex items-center text-card-foreground text-[11px]" variant="outline"><Tag className="w-3 h-3 mr-1"/> Javascript</Badge>
        </div>
        <Badge className="text-sm px-5 py-1 rounded-lg" variant="outline">Read More</Badge>
      </CardFooter>
    </Card>
  );
}

const LabelBlogCard = ({ icon, text }) => {
  return (
    <p className="flex items-center">
      {icon}
      {text}
    </p>
  );
};
