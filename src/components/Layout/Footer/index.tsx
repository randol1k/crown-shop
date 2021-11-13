import styles from "./Footer.module.scss";

interface AppProps {
  content: JSX.Element;
}

export const Footer = ({ content }: AppProps) => {
  return <div className={styles.footer}>{content}</div>;
};
