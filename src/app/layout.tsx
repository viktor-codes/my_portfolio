import type { Metadata } from 'next'
import { Calistoga, Inter } from 'next/font/google'
import { twMerge } from 'tailwind-merge'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })

const calistoga = Calistoga({
	subsets: ['latin'],
	variable: '--font-serif',
	weight: ['400'],
})

export const metadata: Metadata = {
	title: 'Viktor Rura Portfolio',
	description: 'Viktor Rura Portfolio Website',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body
				className={twMerge(
					inter.variable,
					calistoga.variable,
					'bg-gray-900 text-white antialiased font-sans'
				)}
			>
				{children}
			</body>
		</html>
	)
}
