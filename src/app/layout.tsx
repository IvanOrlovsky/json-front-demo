import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import DataObjectProvider from "@/SDUI/contexts/dataObjectContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Демо",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<DataObjectProvider>{children}</DataObjectProvider>
			</body>
		</html>
	);
}
