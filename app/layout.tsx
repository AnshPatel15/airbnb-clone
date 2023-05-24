import "./globals.css";
import { Nunito } from "next/font/google";
import Navbar from "./components/Navbar/Navbar";
import ClientOnly from "./components/ClientOnly";
import ToasterProvider from "./providers/ToasterProvider";
import getCurrentUser from "./actions/getCurrentUser";

import LoginModal from "./components/Modals/LoginModal";
import RegisterModal from "./components/Modals/RegisterModal";
import RentModal from "./components/Modals/RentModal";

const font = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "Airbnb",
  description: "Airbnb Clone",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <RentModal />
          <LoginModal />
          <RegisterModal />
          <Navbar currentUser={currentUser} />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}
