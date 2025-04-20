import ArrowUpIcon from '@/assets/icons/arrow-up-right.svg'
import CheckIcon from '@/assets/icons/check-circle.svg'
import aiStartupLandingPage from '@/assets/images/ai-startup-landing-page.png'
import darkSaasLandingPage from '@/assets/images/dark-saas-landing-page.png'
import lightSaasLandingPage from '@/assets/images/light-saas-landing-page.png'
import { Card } from '@/components/Card'
import { SectionHeader } from '@/components/SectionHeader'
import Image from 'next/image'

const portfolioProjects = [
	{
		company: 'Acme Corp',
		year: '2022',
		title: 'Dark Saas Landing Page',
		results: [
			{ title: 'Enhanced user experience by 40%' },
			{ title: 'Improved site speed by 50%' },
			{ title: 'Increased mobile traffic by 35%' },
		],
		link: 'https://youtu.be/4k7IdSLxh6w',
		image: darkSaasLandingPage,
	},
	{
		company: 'Innovative Co',
		year: '2021',
		title: 'Light Saas Landing Page',
		results: [
			{ title: 'Boosted sales by 20%' },
			{ title: 'Expanded customer reach by 35%' },
			{ title: 'Increased brand awareness by 15%' },
		],
		link: 'https://youtu.be/7hi5zwO75yc',
		image: lightSaasLandingPage,
	},
	{
		company: 'Quantum Dynamics',
		year: '2023',
		title: 'AI Startup Landing Page',
		results: [
			{ title: 'Enhanced user experience by 40%' },
			{ title: 'Improved site speed by 50%' },
			{ title: 'Increased mobile traffic by 35%' },
		],
		link: 'https://youtu.be/Z7I5uSRHMHg',
		image: aiStartupLandingPage,
	},
]

export const ProjectsSection = () => {
	return (
		<section className='pb-16 lg:py-24 '>
			<div className='container'>
				<SectionHeader
					eyebrow='Real-world Results'
					title='Featured Projects'
					description='See how I transformed concepts into engaging digital experiences.'
				/>

				<div className='flex flex-col mt-10 gap-20 md:mt-20 '>
					{portfolioProjects.map((project, projectIndex) => (
						<Card
							key={project.title}
							className='px-8 pt-8 md:pt-12 pb-0 md:px-10 lg:pt-16 lg:px-20 sticky'
							style={{
								top: `calc(64px + ${projectIndex * 40}px)`,
							}}
						>
							<div className='lg:grid lg:grid-cols-2 lg:gap-16'>
								<div className='lg:pb-16'>
									<div className='bg-gradient-to-r from-emerald-400 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text'>
										<span className=''>{project.company}</span>
										<span className=''>&bull;</span>
										<span className=''>{project.year}</span>
									</div>

									<h3 className='font-serif text-2xl md:text-4xl md:mt-5 mt-2'>
										{project.title}
									</h3>
									<hr className='border-t-2 border-white/5 mt-4 md:mt-5' />
									<ul className='flex flex-col gap-4 mt-4 md:mt-5'>
										{project.results.map(result => (
											<li
												className='flex gap-2 text-sm md:text-base text-white/50'
												key={result.title}
											>
												<CheckIcon className='size-5 md:size-6' />
												<span>{result.title}</span>
											</li>
										))}
									</ul>
									<a href={project.link}>
										<button className='bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8'>
											<span>Visit Live Site</span>
											<ArrowUpIcon className='size-4' />
										</button>
									</a>
								</div>
								<div className='relative'>
									<Image
										src={project.image}
										alt={project.title}
										className='mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none'
									/>
								</div>
							</div>
						</Card>
					))}
				</div>
			</div>
		</section>
	)
}
