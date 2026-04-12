import type { BlogPostSummary } from '@/lib/blog/types'
import { Badge, Button } from '@/components/ui'
import BlogCard from '@/components/blog/BlogCard'

interface RelatedPostsSectionProps {
  relatedPosts: BlogPostSummary[];
}

export default function RelatedPostsSection({ relatedPosts }: RelatedPostsSectionProps) {
  return (
    <section className="px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24">
      <div className="mx-auto w-full max-w-[1216px]">
        <div className="mb-6 flex items-center justify-between gap-4">
          <div>
            <Badge variant="primary" className="mb-3">
              Đọc tiếp
            </Badge>
            <h2 className="text-[28px] font-normal tracking-tight leading-[1.15] text-slate-900 dark:text-white">
              Bài viết liên quan
            </h2>
          </div>
          <Button to="/blog" variant="primary" size="md">
            Xem tất cả
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {relatedPosts.map((relatedPost) => (
            <BlogCard key={relatedPost.slug} post={relatedPost} />
          ))}
        </div>
      </div>
    </section>
  )
}
