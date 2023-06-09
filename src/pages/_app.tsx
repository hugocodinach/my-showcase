import NavBar from '@/components/NavBar/NavBar';
import '@/styles/globals.scss';
import type { AppProps } from 'next/app';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
	weight: ['400', '500', '600', '700'],
	style: ['normal'],
	subsets: ['latin'],
});

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<style jsx global>{`
				html {
				font-family: ${poppins.style.fontFamily};
				}
			`}</style>
			<NavBar />
			<Component {...pageProps} />
		</>
	);
}
