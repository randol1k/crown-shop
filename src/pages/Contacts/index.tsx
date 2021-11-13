import styles from "./Contacts.module.scss";

import { Footer } from "src/components/Layout/Footer";

export const Contacts = () => {
  const footerContent = (
    <>
      <p>
        Feel free to visit my{" "}
        <a href="https://github.com/randol1k">
          <u>GitHub page</u>
        </a>
      </p>
      <p>
        Have some questions? Don't hesitate to ping me via E-mail:{" "}
        <a href="mailto:randol1k@mail.ru">
          <u>randol1k@mail.ru</u>
        </a>
      </p>
    </>
  );

  return (
    <div className={styles.contacts}>
      <h2>Crown Shop</h2>
      <br />
      <p>This is my demo project of a small Internet shop</p>
      <p>Implemented with the following stack:</p>
      <br />
      <p>- SASS</p>
      <p>- TypeScript</p>
      <p>- React</p>
      <p>- Redux / Redux Saga</p>
      <p>- Google Firestore</p>
      <p>- Stripe</p>
      <Footer content={footerContent} />
    </div>
  );
};
