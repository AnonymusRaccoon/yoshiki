//
// Copyright (c) Zoe Roux and contributors. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for details.
//

import Head from "next/head";
import Image from "next/image";
import { useYoshiki, Stylable, md } from "yoshiki/web";
import { ReactNode } from "react";

const Box = ({ children, ...props }: { children?: ReactNode } & Stylable) => {
	const { css } = useYoshiki();

	return (
		<div {...css({ width: "5rem", height: "5rem", background: "red" }, props)}>{children}</div>
	);
};

export default function Home(props: Stylable) {
	const { css } = useYoshiki();

	return (
		<div
			{...css(
				[
					{
						display: "flex",
						paddingLeft: "2rem",
						paddingRight: "2rem",
						paddingTop: (theme) => theme.background,
						bg: (theme) => theme.background,
					},
					md({
						flexGrow: 1,
						margin: undefined,
					}),
				],
				props,
			)}
		>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<h1>
					Welcome to <a href="https://nextjs.org">Next.js!</a>
				</h1>

				<Box />
				<Box {...css({ bg: "blue", padding: "12px" })} />

				<p>
					Get started by editing <code>pages/index.tsx</code>
				</p>

				<div
					{...css({
						backgroundColor: "green",
						press: {
							self: {
								bg: "red",
							},
							text: {
								color: "white",
							},
						},
						hover: {
							text: {
								color: "blue",
							},
						},
						focus: {
							self: {
								bg: "yellow",
							},
							text: {
								color: "green",
							},
						},
					})}
					tabIndex={0}
				>
					<a href="https://nextjs.org/docs" {...css([{ color: "red" }, "text"])}>
						<h2>Documentation &rarr;</h2>
						<p>Find in-depth information about Next.js features and API.</p>
					</a>
				</div>

				<div
					{...css({
						background: { xs: "red", sm: "blue", md: "green" },
					})}
				>
					<a href="https://nextjs.org/learn">
						<h2>Learn &rarr;</h2>
						<p>Learn about Next.js in an interactive course with quizzes!</p>
					</a>
				</div>
				<div
					{...css({
						hover: {
							self: { background: { xs: "red", sm: "blue", md: "green" } },
						},
					})}
				>
					<a href="https://github.com/vercel/next.js/tree/canary/examples">
						<h2>Examples &rarr;</h2>
						<p>Discover and deploy boilerplate example Next.js projects.</p>
					</a>

					<a
						href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
						target="_blank"
						rel="noopener noreferrer"
					>
						<h2>Deploy &rarr;</h2>
						<p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
					</a>
				</div>
			</main>

			<footer>
				<a
					href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer"
				>
					Powered by{" "}
					<span>
						<Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
					</span>
				</a>
			</footer>
		</div>
	);
}
