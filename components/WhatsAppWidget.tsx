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
    <aside className={styles.widgetContainer} aria-label="WhatsApp İletişim">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.whatsappButton}
        aria-label="WhatsApp ile Diyetisyen Ali Koşar'a yazın"
      >
        <div className={styles.tooltip} aria-hidden="true">
          <span className={styles.onlineDot} />
          <span>WhatsApp&apos;tan Danışın</span>
        </div>

        {/* Orijinal ve tam ortalanmış WhatsApp ikonu */}
        <svg
          className={styles.icon}
          viewBox="0 0 24 24"
          fill="#FFFFFF"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.978-.276-.1-.476-.15-.677.15-.201.3-.778 1-.954 1.202-.175.201-.351.226-.652.075-.301-.151-1.272-.469-2.423-1.496-.896-.799-1.501-1.786-1.677-2.087-.175-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.15-.175.2-.301.3-.501.101-.201.05-.376-.025-.527-.075-.15-.677-1.633-.928-2.235-.245-.586-.494-.506-.677-.515-.176-.009-.377-.01-.578-.01-.2 0-.527.075-.803.376s-1.054 1.03-1.054 2.512c0 1.482 1.079 2.913 1.23 3.114.15.201 2.124 3.243 5.145 4.545.719.31 1.28.495 1.719.634.723.23 1.381.197 1.902.12.58-.087 1.78-.727 2.03-1.428.25-.702.25-1.303.175-1.428-.075-.126-.276-.201-.577-.352zm-5.467 6.438c-1.802 0-3.57-.484-5.114-1.402l-.366-.218-3.799.996 1.014-3.704-.239-.38C2.553 14.498 2 12.766 2 10.976 2 5.476 6.477 1 11.976 1c2.665 0 5.17 1.038 7.051 2.919 1.88 1.881 2.918 4.386 2.918 7.057 0 5.5-4.477 9.844-9.94 9.844zm7.986-16.924C17.89 1.794 15.045.748 11.976.748 6.34.748 1.748 5.34 1.748 10.976c0 1.799.47 3.555 1.365 5.105L1.002 23.252l7.332-1.923c1.5 0.817 3.195 1.247 4.912 1.247 5.636 0 10.228-4.592 10.228-10.228 0-2.731-1.063-5.298-2.993-7.228z" />
        </svg>
      </a>
    </aside>
  );
}
