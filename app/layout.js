import "./globals.css";

export const metadata = {
  title: "Accident Andy | Find a Car Accident Lawyer",
  description:
    "Answer a few quick questions and get connected with a car accident attorney who may be able to review your case.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
