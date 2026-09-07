import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Icon from "../../../components/Icon";
import Photo from "../../../components/Photo";
import { getPostBySlug, getAllPosts, getRelatedPosts, formatDate } from "../../../lib/blog-data";
import { site, absoluteUrl } from "../../../lib/site";
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
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `/blog/${post.slug}`,
      images: [{ url: post.image, width: 1200, height: 750, alt: post.title }],
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt ?? post.publishedAt,
      authors: [post.author],
      tags: [...post.tags],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
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
  const postUrl = absoluteUrl(`/blog/${post.slug}`);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${postUrl}#article`,
        headline: post.title,
        description: post.excerpt,
        image: absoluteUrl(post.image),
        datePublished: post.publishedAt,
        dateModified: post.updatedAt ?? post.publishedAt,
        inLanguage: "tr-TR",
        keywords: [...post.tags],
        articleSection: post.category,
        author: { "@id": `${site.url}/#alikosar` },
        publisher: { "@id": `${site.url}/#business` },
        mainEntityOfPage: { "@type": "WebPage", "@id": postUrl },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: site.url },
          { "@type": "ListItem", position: 2, name: "Blog", item: absoluteUrl("/blog") },
          { "@type": "ListItem", position: 3, name: post.title, item: postUrl },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}></div>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <Link href="/blog" className={styles.backLink}>
              <Icon name="arrowLeft" size={16} />
              Blog&apos;a Dön
            </Link>
            <div className={styles.postMeta}>
              <span className={styles.category}>{post.category}</span>
              <time className={styles.date} dateTime={post.publishedAt}>
                {formatDate(post.publishedAt)}
              </time>
              <span className={styles.readTime}>{post.readTime}</span>
            </div>
            <h1 className={styles.title}>{post.title}</h1>
            <p className={styles.excerpt}>{post.excerpt}</p>
            <div className={styles.author}>
              <Photo
                src="/images/ali-kosar-avatar.jpg"
                alt="Dyt. Ali Koşar"
                className={styles.authorAvatar}
                sizes="48px"
                showHint={false}
              />
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
            <Photo
              src={post.image}
              alt={post.title}
              className={styles.cover}
              sizes="(min-width: 768px) 700px, 90vw"
              priority
            />
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
                  href={`https://wa.me/?text=${encodeURIComponent(`${post.title} - ${postUrl}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.shareButton}
                >
                  <Icon name="whatsapp" size={16} />
                  WhatsApp
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
                  <Photo
                    src={relatedPost.image}
                    alt={relatedPost.title}
                    className={styles.relatedImage}
                    sizes="(min-width: 1024px) 300px, 90vw"
                  />
                  <div className={styles.relatedContent}>
                    <span className={styles.relatedCategory}>{relatedPost.category}</span>
                    <h3 className={styles.relatedCardTitle}>{relatedPost.title}</h3>
                    <time className={styles.relatedDate} dateTime={relatedPost.publishedAt}>
                      {formatDate(relatedPost.publishedAt)}
                    </time>
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
