import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export default function SearchPostForm() {
  return (
    <Card className="w-full bg-transparent h-52 bg-gray-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-5">
      <CardHeader className="gap-3 w-full h-full flex items-center justify-center text-center">
        <CardTitle className="text-white">Discover insightful blog posts and articles tailored to your interests.</CardTitle>
        <div className="flex w-full justify-center gap-2">
            <Input className="w-[40%] px-3" placeholder="Search for tags, keyword, article's title and more" />
            <Button className="text-primary" variant="outline"><Search className="mr-2 h-4 w-4" /> Find Post</Button>
        </div>
      </CardHeader>
    </Card>
  )
}
