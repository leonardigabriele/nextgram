import { NextIntlClientProvider } from "next-intl";
import "./global.css";

export const metadata = {
  title: "NextGram",
  description: "A sample Next.js app showing dynamic routing with modals as a route.",
};

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <NextIntlClientProvider>
          {props.children}
          {/* {props.modal} */}
          <div id="modal-root" />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
