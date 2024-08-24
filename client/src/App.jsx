import { BlogCard } from "./Landing/BlogCard"
import Navbar from "./Landing/Navbar"
import SearchPostForm from "./Landing/SearchPostForm"

function App() {
  return (
    <>
      <Navbar />
      <div className="w-[95%] rounded-lg my-10 mx-auto bg-search_bg bg-center">
        <SearchPostForm />
      </div>
      <div className="w-[95%] my-10 mx-auto flex flex-wrap justify-evenly items-center gap-y-14">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </>
  )
}

export default App
