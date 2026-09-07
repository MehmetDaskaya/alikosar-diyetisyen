import Image from "next/image";
import styles from "./Photo.module.css";

interface PhotoProps {
  /** /public altındaki görsel yolu, örn. "/images/ali-kosar-portre.jpg" */
  src: string;
  alt: string;
  className?: string;
  /** object-position karşılığı, örn. "center 30%" */
  position?: string;
  /**
   * Tarayıcıya görselin kaplayacağı genişliği bildirir; doğru boyutta
   * dosya indirilmesini sağlar. Ekranda büyük görünen her görsel için verin.
   */
  sizes?: string;
  /** Ekranın ilk görünen alanındaki (LCP) görsellerde true olmalı. */
  priority?: boolean;
  /** Küçük yuvalarda (avatar vb.) dosya yolu ipucunu gizler. */
  showHint?: boolean;
}

/**
 * Sabit oranlı görsel yuvası. next/image ile optimize edilir (WebP/AVIF,
 * responsive srcset, lazy-load). Görsel henüz eklenmemişse arkadaki nötr yer
 * tutucu ve beklenen dosya yolu görünür.
 */
export default function Photo({
  src,
  alt,
  className,
  position,
  sizes = "100vw",
  priority = false,
  showHint = true,
}: PhotoProps) {
  const classNames = [styles.slot, showHint ? "" : styles.bare, className].filter(Boolean).join(" ");

  return (
    <div className={classNames} data-hint={src}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className={styles.image}
        style={{ objectPosition: position }}
      />
    </div>
  );
}
