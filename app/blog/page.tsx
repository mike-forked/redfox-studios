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
    <div className="container px-6 py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10">
          <h1 className="mb-2 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">Blog</h1>
          <p className="text-sm text-muted-foreground sm:text-base">
            Insights, tutorials, and stories from our team
          </p>
        </div>

        <BlogListClient allPosts={allPosts} allTags={allTags} />
      </div>
    </div>
  )
}
