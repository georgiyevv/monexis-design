import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Bai_Jamjuree, Geist, Geist_Mono, Inter } from 'next/font/google'
import './globals.css'

const _geist = Geist({ subsets: ['latin'] })
const _geistMono = Geist_Mono({ subsets: ['latin'] })
const baiJamjuree = Bai_Jamjuree({
	subsets: ['latin'],
	weight: ['200', '300', '400', '500', '600', '700'],
	variable: '--font-bai-jamjuree',
})
const inter = Inter({
	subsets: ['latin'],
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	variable: '--font-inter',
})

export const metadata: Metadata = {
	title: 'Monexis - Premium Crypto Investment Club',
	description:
		'Join our exclusive investors club and build crypto portfolios with 5-10X potential within 12 months',
	generator: 'v0.app',
	icons: {
		icon: [
			{
				url: '/icon-light-32x32.png',
				media: '(prefers-color-scheme: light)',
			},
			{
				url: '/icon-dark-32x32.png',
				media: '(prefers-color-scheme: dark)',
			},
			{
				url: '/icon.svg',
				type: 'image/svg+xml',
			},
		],
		apple: '/apple-icon.png',
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body
				className={`${baiJamjuree.variable} ${inter.variable} font-sans antialiased`}
			>
				{children}
				<Analytics />
			</body>
		</html>
	)
}
