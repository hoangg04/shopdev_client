import { Facebook, Github, Instagram, Twitter } from '@geist-ui/icons'
import Link from 'next/link'
import React, { memo, ReactElement } from 'react'

type ItemSocial = {
	link: string,
	name: string,
	icon: ReactElement
}
// instagram, twitter, github, dribble
const socialsMedia: ItemSocial[] = [
	{
		name: "facebook",
		link: "https://www.facebook.com",
		icon: <Facebook />
	},
	{
		name: "instagram",
		link: "https://www.instagram.com",
		icon: <Instagram />
	},
	{
		name: "twitter",
		link: "https://www.twitter.com",
		icon: <Twitter />
	},
	{
		name: "github",
		link: "https://www.github.com",
		icon: <Github />
	},

]
export const SocialComponent: React.FC = memo(function SocialComponent() {
	return <>
		<ul className="mt-8 flex justify-start gap-6 sm:mt-0 sm:justify-end">
			{socialsMedia.map(social => (
				<li key={social.name}>
					<Link
						href={social.link}
						rel="noreferrer"
						target="_blank"
						className="text-gray-700 transition hover:opacity-75"
					>
						<span className="sr-only">{social.name}</span>

						{social.icon}
					</Link>
				</li>
			))}


		</ul>
	</>
})