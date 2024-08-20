import { ArrowUpRight } from "lucide-react";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function RecentPostList({
  type,
  title,
  description,
  viewMoreLink,
  chunkNo,
}) {
  return (
    <Card x-chunk={`dashboard-01-chunk-${chunkNo}`}>
      <CardHeader className="flex flex-row items-center">
        <div className="grid gap-1">
          <CardTitle className="text-xl">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </div>
        <Button asChild size="sm" className="ml-auto gap-1">
          <Link to={viewMoreLink}>
            View All
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </Button>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Blog Post</TableHead>
              <TableHead className="text-right">Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <BlogPostList title="First Sample blog post" blogId="234fsfsf-vbfdg45-sgfdfh" date="2024-sep-20" />
            <BlogPostList title="First Sample blog post" blogId="234fsfsf-vbfdg45-sgfdfh" date="2024-sep-20" />
            <BlogPostList title="First Sample blog post" blogId="234fsfsf-vbfdg45-sgfdfh" date="2024-sep-20" />
            <BlogPostList title="First Sample blog post" blogId="234fsfsf-vbfdg45-sgfdfh" date="2024-sep-20" />
            <BlogPostList title="First Sample blog post" blogId="234fsfsf-vbfdg45-sgfdfh" date="2024-sep-20" />
            <BlogPostList title="First Sample blog post" blogId="234fsfsf-vbfdg45-sgfdfh" date="2024-sep-20" />
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

const BlogPostList = ({title, blogId, date}) => {
  const redirectUrl = "/blog/" + blogId;
  return (
    <TableRow className="cursor-pointer" onClick={()=>{window.location.href = redirectUrl}}>
        <TableCell>
          <div className="font-medium w-[250px] truncate">{title}</div>
          <div className="hidden text-sm text-muted-foreground md:inline">
            <p className="mt-1 text-[11px] text-card-foreground" variant="outline"> {blogId}</p>
          </div>
        </TableCell>
        <TableCell className="text-right">{date}</TableCell>
    </TableRow>
  );
};
