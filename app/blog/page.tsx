import { BlogListClient } from "@/components/blog-list-client"
import { getAllPosts, getAllTags } from "@/lib/blog"

export const metadata = {
  title: "Blog | RedFox Studios",
  description: "Insights, tutorials, and stories from the RedFox Studios team. Learn about game development, Unreal Engine, and cutting-edge technologies.",
}

export default function BlogPage() {
  const allPosts = getAllPosts()
  const allTags = getAllTags()

  return (
    <div className="container px-6 py-16 sm:py-20 lg:py-24">
      <div className="mb-12">
        <h1 className="mb-3 text-4xl font-bold tracking-tight">Blog</h1>
        <p className="text-base text-muted-foreground sm:text-lg">
          Insights, tutorials, and stories from our team
        </p>
      </div>

      <BlogListClient allPosts={allPosts} allTags={allTags} />
    </div>
  )
}
