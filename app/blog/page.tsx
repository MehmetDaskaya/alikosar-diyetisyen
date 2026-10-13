import type { Metadata } from "next";
import Link from "next/link";
import Icon from "../../components/Icon";
import Photo from "../../components/Photo";
import { getAllPosts, getAllCategories, formatDate } from "../../lib/blog-data";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Blog | Sporcu Beslenmesi, GLP-1 ve Longevity",
  description: "Sağlıklı beslenme, diyet ipuçları, sporcu beslenmesi ve Antalya'da sağlıklı yaşam hakkında güncel bilgiler. Diyetisyen Ali Koşar'ın blog yazıları.",
  keywords: ["beslenme blogu", "diyet ipuçları", "sağlıklı tarifler", "Antalya beslenme", "sporcu beslenmesi"],
  alternates: { canonical: "/blog" },
  openGraph: {
    type: "website",
    url: "/blog",
    title: "Blog | Diyetisyen Ali Koşar",
    description: "Beslenme, diyet ve sağlıklı yaşam üzerine bilimsel temelli, güncel yazılar.",
  },
};

export default function BlogPage() {
  const blogPosts = getAllPosts();
  const categories = getAllCategories();

  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}></div>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <span className={styles.badge}>Blog</span>
            <h1 className={styles.heroTitle}>
              Sağlıklı Yaşam <span className={styles.highlight}>İpuçları</span>
            </h1>
            <p className={styles.heroDescription}>
              Beslenme, diyet ve sağlıklı yaşam hakkında güncel bilgiler, 
              pratik öneriler ve bilimsel temelli makaleler.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className={styles.blogSection}>
        <div className={styles.container}>
          <div className={styles.blogLayout}>
            {/* Main Content */}
            <div className={styles.mainContent}>
              <div className={styles.postsGrid}>
                {blogPosts.map((post, index) => (
                  <Link 
                    href={`/blog/${post.slug}`} 
                    key={post.slug} 
                    className={styles.postCard}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <Photo
                      src={post.image}
                      alt={post.title}
                      className={styles.postImage}
                      sizes="(min-width: 1024px) 340px, 90vw"
                    />
                    <div className={styles.postContent}>
                      <div className={styles.postMeta}>
                        <span className={styles.postCategory}>{post.category}</span>
                        <time className={styles.postDate} dateTime={post.publishedAt}>
                          {formatDate(post.publishedAt)}
                        </time>
                      </div>
                      <h2 className={styles.postTitle}>{post.title}</h2>
                      <p className={styles.postExcerpt}>{post.excerpt}</p>
                      <div className={styles.postFooter}>
                        <span className={styles.readTime}>{post.readTime}</span>
                        <span className={styles.readMore}>
                          Devamını Oku
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M5 12h14M12 5l7 7-7 7"/>
                          </svg>
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <aside className={styles.sidebar}>
              {/* Categories */}
              <div className={styles.sidebarWidget}>
                <h3 className={styles.widgetTitle}>Kategoriler</h3>
                <ul className={styles.categoryList}>
                  {categories.map((category, index) => (
                    <li key={index}>
                      <button className={styles.categoryButton}>
                        <span>{category.name}</span>
                        <span className={styles.categoryCount}>{category.count}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Widget */}
              <div className={styles.ctaWidget}>
                <span className={styles.ctaIcon} aria-hidden="true">
                  <Icon name="phone" size={22} />
                </span>
                <h3>Danışmanlık İçin</h3>
                <p>Kişiselleştirilmiş beslenme programı için randevu alın.</p>
                <Link href="/iletisim" className={styles.ctaLink}>
                  Randevu Al
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
