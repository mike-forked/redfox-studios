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
    <div className="container py-12 md:py-16">
      <div className="mb-12">
        <h1 className="mb-4 text-4xl font-bold tracking-tight">Blog</h1>
        <p className="text-lg text-muted-foreground">
          Insights, tutorials, and stories from our team
        </p>
      </div>

      <BlogListClient allPosts={allPosts} allTags={allTags} />
    </div>
  )
}
