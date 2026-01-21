import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { BlogPostMetadata } from "@/lib/blog"

interface BlogCardProps {
  post: BlogPostMetadata
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <Card className="group h-full transition-all hover:shadow-lg">
        <CardHeader>
          <div className="flex items-start justify-between gap-4">
            <CardTitle className="group-hover:text-primary">{post.title}</CardTitle>
            <time className="text-xs text-muted-foreground whitespace-nowrap">
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </time>
          </div>
          <CardDescription className="line-clamp-2">{post.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
