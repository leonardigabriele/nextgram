import { NextIntlClientProvider } from "next-intl";
import "./global.css";

export const metadata = {
  title: "NextGram",
  description: "A sample Next.js app showing dynamic routing with modals as a route.",
};

export default function RootLayout(props: { children: React.ReactNode; overlay: React.ReactNode }) {
  return (
    <html>
      <body>
        <NextIntlClientProvider>
          {props.children}
          {props.overlay}
          <div id="modal-root" />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
