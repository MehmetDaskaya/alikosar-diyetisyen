import Icon from "./Icon";
import { whatsappUrl } from "../lib/site";
import styles from "./WhatsAppWidget.module.css";

interface WhatsAppWidgetProps {
  message?: string;
}

export default function WhatsAppWidget({
  message = "Merhaba Ali Bey, beslenme danışmanlığı hakkında bilgi almak istiyorum.",
}: WhatsAppWidgetProps) {
  const href = `${whatsappUrl}?text=${encodeURIComponent(message)}`;

  return (
    <aside className={styles.widgetContainer} aria-label="Hızlı İletişim">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.buttonWrapper}
        aria-label="WhatsApp üzerinden Ali Koşar ile iletişime geçin"
      >
        <div className={styles.tooltip} aria-hidden="true">
          <span className={styles.onlineDot} />
          <span>WhatsApp&apos;tan Danışın</span>
        </div>
        <div className={styles.pulseRing} aria-hidden="true" />
        <div className={styles.button}>
          <Icon name="whatsapp" size={30} className={styles.icon} />
        </div>
      </a>
    </aside>
  );
}
