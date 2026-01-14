import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug, getAllPosts, getRelatedPosts } from "../../../lib/blog-data";
import styles from "./page.module.css";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  
  if (!post) {
    return { title: "Yazı Bulunamadı" };
  }

  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.tags,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(slug, 3);

  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}></div>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <Link href="/blog" className={styles.backLink}>
              ← Blog'a Dön
            </Link>
            <div className={styles.postMeta}>
              <span className={styles.category}>{post.category}</span>
              <span className={styles.date}>{post.date}</span>
              <span className={styles.readTime}>{post.readTime}</span>
            </div>
            <h1 className={styles.title}>{post.title}</h1>
            <p className={styles.excerpt}>{post.excerpt}</p>
            <div className={styles.author}>
              <div className={styles.authorAvatar}>{post.emoji}</div>
              <div>
                <span className={styles.authorName}>{post.author}</span>
                <span className={styles.authorTitle}>Beslenme ve Diyet Uzmanı</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <article className={styles.article}>
        <div className={styles.container}>
          <div className={styles.contentWrapper}>
            <div 
              className={styles.content}
              dangerouslySetInnerHTML={{ __html: formatContent(post.content) }}
            />

            {/* Tags */}
            <div className={styles.tags}>
              <span className={styles.tagsLabel}>Etiketler:</span>
              <div className={styles.tagsList}>
                {post.tags.map((tag, index) => (
                  <span key={index} className={styles.tag}>#{tag}</span>
                ))}
              </div>
            </div>

            {/* Share */}
            <div className={styles.share}>
              <span className={styles.shareLabel}>Paylaş:</span>
              <div className={styles.shareButtons}>
                <a 
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://alikosar.com/blog/${post.slug}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.shareButton}
                >
                  𝕏 Twitter
                </a>
                <a 
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://alikosar.com/blog/${post.slug}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.shareButton}
                >
                  📘 Facebook
                </a>
                <a 
                  href={`https://wa.me/?text=${encodeURIComponent(`${post.title} - https://alikosar.com/blog/${post.slug}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.shareButton}
                >
                  💬 WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className={styles.relatedSection}>
          <div className={styles.container}>
            <h2 className={styles.relatedTitle}>İlgili Yazılar</h2>
            <div className={styles.relatedGrid}>
              {relatedPosts.map((relatedPost) => (
                <Link 
                  key={relatedPost.slug} 
                  href={`/blog/${relatedPost.slug}`}
                  className={styles.relatedCard}
                >
                  <div className={styles.relatedImage}>
                    <span className={styles.relatedEmoji}>{relatedPost.emoji}</span>
                  </div>
                  <div className={styles.relatedContent}>
                    <span className={styles.relatedCategory}>{relatedPost.category}</span>
                    <h3 className={styles.relatedCardTitle}>{relatedPost.title}</h3>
                    <span className={styles.relatedDate}>{relatedPost.date}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2>Kişiselleştirilmiş Beslenme Programı</h2>
            <p>Sağlık hedefinize özel bir program için randevu alın.</p>
            <Link href="/iletisim" className={styles.ctaButton}>
              Randevu Al
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

// Simple markdown-like content formatter
function formatContent(content: string): string {
  return content
    // Headers
    .replace(/^### (.*$)/gm, '<h3>$1</h3>')
    .replace(/^## (.*$)/gm, '<h2>$1</h2>')
    // Bold
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    // Italic
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    // Links
    .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>')
    // Blockquotes
    .replace(/^> (.*$)/gm, '<blockquote>$1</blockquote>')
    // Unordered lists
    .replace(/^- (.*$)/gm, '<li>$1</li>')
    .replace(/(<li>.*<\/li>\n?)+/g, '<ul>$&</ul>')
    // Ordered lists
    .replace(/^\d+\. (.*$)/gm, '<li>$1</li>')
    // Tables (basic)
    .replace(/\|(.+)\|/g, (match) => {
      const cells = match.split('|').filter(cell => cell.trim());
      if (cells.every(cell => cell.trim().match(/^-+$/))) {
        return '';
      }
      const row = cells.map(cell => `<td>${cell.trim()}</td>`).join('');
      return `<tr>${row}</tr>`;
    })
    // Code blocks
    .replace(/`(.*?)`/g, '<code>$1</code>')
    // Checkmarks
    .replace(/✅/g, '<span class="check">✅</span>')
    .replace(/❌/g, '<span class="cross">❌</span>')
    .replace(/⚠️/g, '<span class="warning">⚠️</span>')
    // Paragraphs
    .replace(/\n\n/g, '</p><p>')
    // Wrap in paragraph
    .replace(/^(.+)$/gm, (match) => {
      if (match.startsWith('<') || match.trim() === '') return match;
      return `<p>${match}</p>`;
    })
    // Clean up
    .replace(/<p><\/p>/g, '')
    .replace(/<p><h/g, '<h')
    .replace(/<\/h(\d)><\/p>/g, '</h$1>')
    .replace(/<p><ul>/g, '<ul>')
    .replace(/<\/ul><\/p>/g, '</ul>')
    .replace(/<p><blockquote>/g, '<blockquote>')
    .replace(/<\/blockquote><\/p>/g, '</blockquote>');
}
