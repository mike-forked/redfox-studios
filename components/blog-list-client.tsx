"use client"

import { useState, useMemo } from "react"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { BlogCard } from "@/components/blog-card"
import type { BlogPostMetadata } from "@/lib/blog"
import { Search } from "lucide-react"

interface BlogListClientProps {
  allPosts: BlogPostMetadata[]
  allTags: string[]
}

export function BlogListClient({ allPosts, allTags }: BlogListClientProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [sortBy, setSortBy] = useState<"date" | "title">("date")

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    )
  }

  const filteredPosts = useMemo(() => {
    let filtered = allPosts

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(
        (post) =>
          post.title.toLowerCase().includes(query) ||
          post.description.toLowerCase().includes(query) ||
          post.tags.some((tag) => tag.toLowerCase().includes(query))
      )
    }

    // Filter by selected tags
    if (selectedTags.length > 0) {
      filtered = filtered.filter((post) =>
        selectedTags.every((tag) => post.tags.includes(tag))
      )
    }

    // Sort posts
    if (sortBy === "title") {
      filtered = [...filtered].sort((a, b) => a.title.localeCompare(b.title))
    } else {
      filtered = [...filtered].sort((a, b) => {
        if (a.date < b.date) return 1
        if (a.date > b.date) return -1
        return 0
      })
    }

    return filtered
  }, [allPosts, searchQuery, selectedTags, sortBy])

  return (
    <>
      {/* Search and Filter */}
      <div className="mb-8 space-y-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search posts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>

        {/* Tags Filter */}
        {allTags.length > 0 && (
          <div className="space-y-2">
            <h3 className="text-sm font-medium">Filter by tags:</h3>
            <div className="flex flex-wrap gap-2">
              {allTags.map((tag) => (
                <Badge
                  key={tag}
                  variant={selectedTags.includes(tag) ? "default" : "outline"}
                  className="cursor-pointer"
                  onClick={() => toggleTag(tag)}
                >
                  {tag}
                </Badge>
              ))}
            </div>
            {selectedTags.length > 0 && (
              <button
                onClick={() => setSelectedTags([])}
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Clear filters
              </button>
            )}
          </div>
        )}

        {/* Sort */}
        <div className="flex items-center gap-4 text-sm">
          <span className="text-muted-foreground">Sort by:</span>
          <button
            onClick={() => setSortBy("date")}
            className={sortBy === "date" ? "font-medium" : "text-muted-foreground"}
          >
            Date
          </button>
          <button
            onClick={() => setSortBy("title")}
            className={sortBy === "title" ? "font-medium" : "text-muted-foreground"}
          >
            Title
          </button>
        </div>
      </div>

      {/* Posts Grid */}
      {filteredPosts.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <div className="py-12 text-center">
          <p className="text-muted-foreground">
            {allPosts.length === 0
              ? "No blog posts yet. Check back soon!"
              : "No posts found matching your criteria."}
          </p>
        </div>
      )}
    </>
  )
}
