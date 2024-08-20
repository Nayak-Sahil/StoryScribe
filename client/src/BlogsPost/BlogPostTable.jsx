import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import SearchPostInput from "./SearchPostInput";

export default function BlogPostTable() {
  return (
    <Card>
      <CardHeader className="w-full flex sm:flex-row sm:items-center flex-col items-start justify-between">
        <div className="sm:mb-0 mb-3">
            <CardTitle className="text-xl">Your Articles</CardTitle>
            <CardDescription>Manage your article post from here.</CardDescription>
        </div>
        <SearchPostInput />
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="hidden md:table-cell">Views</TableHead>
              <TableHead className="hidden md:table-cell">
                Total Comments
              </TableHead>
              <TableHead className="hidden md:table-cell">Last Update</TableHead>
              <TableHead>
                <span>Actions</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <PostList />
            <PostList />
          </TableBody>
        </Table>
      </CardContent>
      <CardFooter className="justify-between">
        <div className="text-xs text-muted-foreground">
          Showing <strong>1-10</strong> of <strong>32</strong> products
        </div>
        <div className="text-xs flex text-muted-foreground">
          <Button className="px-3 py-0 ml-5" variant="outline"><ChevronLeft className="h-4 w-4" /> Previous</Button>
          <Button className="px-3 py-0 ml-5" variant="outline">Next <ChevronRight className="h-4 w-4" /></Button>
        </div>
      </CardFooter>
    </Card>
  );
}

const PostList = ({title, status, ttlViews, ttlComments, lastUpdate, blogId}) => {
  return (
    <TableRow>
      <TableCell className="block w-[250px] pt-6 font-medium truncate">Laser Lemonade Lemonade Lemonade Lemonade Machine</TableCell>
      <TableCell>
        <Badge variant="outline">Draft</Badge>
      </TableCell>
      <TableCell className="hidden md:table-cell">150</TableCell>
      <TableCell className="hidden md:table-cell">25</TableCell>
      <TableCell className="hidden md:table-cell">
        2023-07-12 10:42 AM
      </TableCell>
      <TableCell>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button aria-haspopup="true" size="icon" variant="ghost">
              <MoreHorizontal className="h-4 w-4" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem>Edit</DropdownMenuItem>
            <DropdownMenuItem>Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </TableCell>
    </TableRow>
  );
};
