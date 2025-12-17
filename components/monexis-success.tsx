'use client'

import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { useState } from 'react'

export function MonexisSuccess() {
	const [currentTestimonialPage, setCurrentTestimonialPage] = useState(0)

	const testimonials = [
		{
			name: 'John Anderson',
			date: '2 days ago',
			rating: 5,
			text: 'Monexis has completely transformed my crypto investment strategy. The personalized portfolio recommendations helped me achieve 8X growth in just 6 months. The team is incredibly knowledgeable and always available to answer questions.',
		},
		{
			name: 'Sarah Mitchell',
			date: '5 days ago',
			rating: 5,
			text: 'I was skeptical at first, but after my initial consultation with the team, I knew I was in good hands. They identified several undervalued assets that have since doubled in value. Highly recommended!',
		},
		{
			name: 'Michael Chen',
			date: '1 week ago',
			rating: 5,
			text: "The level of research and analysis that Monexis provides is unmatched. They don't just recommend coins—they explain the fundamentals, risks, and growth potential in detail. Worth every penny.",
		},
		{
			name: 'Emma Rodriguez',
			date: '1 week ago',
			rating: 5,
			text: 'Professional, transparent, and results-driven. The exclusive assets they shared with me were game-changers. My portfolio has grown 10X in less than a year.',
		},
		{
			name: 'David Thompson',
			date: '2 weeks ago',
			rating: 5,
			text: 'After losing money on bad investments, I found Monexis. Their audit of my portfolio was eye-opening, and their restructuring advice saved me from further losses. Now I&apos;m finally profitable.',
		},
		{
			name: 'Lisa Wong',
			date: '2 weeks ago',
			rating: 5,
			text: 'The monthly strategy calls keep me informed and confident in my investments. The team genuinely cares about their clients success. Best investment decision I ever made.',
		},
	]

	const testimonialsPerPage = 3
	const totalPages = Math.ceil(testimonials.length / testimonialsPerPage)

	const currentTestimonials = testimonials.slice(
		currentTestimonialPage * testimonialsPerPage,
		(currentTestimonialPage + 1) * testimonialsPerPage
	)

	return (
		<div className='min-h-screen bg-black text-white overflow-hidden relative'>
			<div className='absolute top-0 left-0 w-[400px] h-[400px] pointer-events-none'>
				<svg
					className='w-full h-full'
					viewBox='0 0 400 400'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M 50 0 Q 0 0 0 50 Q 0 200 150 300'
						stroke='url(#glowGradient1)'
						strokeWidth='3'
						fill='none'
						style={{
							filter: 'drop-shadow(0 0 20px rgba(34, 197, 94, 0.6))',
						}}
					/>
					<defs>
						<linearGradient
							id='glowGradient1'
							x1='0%'
							y1='0%'
							x2='100%'
							y2='100%'
						>
							<stop offset='0%' stopColor='rgba(34, 197, 94, 0.8)' />
							<stop offset='100%' stopColor='rgba(34, 197, 94, 0.2)' />
						</linearGradient>
					</defs>
				</svg>
			</div>

			<div className='absolute bottom-0 right-0 w-[500px] h-[500px] pointer-events-none'>
				<svg
					className='w-full h-full'
					viewBox='0 0 500 500'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M 500 450 Q 500 500 450 500 Q 300 500 150 350'
						stroke='url(#glowGradient2)'
						strokeWidth='3'
						fill='none'
						style={{
							filter: 'drop-shadow(0 0 20px rgba(34, 197, 94, 0.6))',
						}}
					/>
					<defs>
						<linearGradient
							id='glowGradient2'
							x1='0%'
							y1='0%'
							x2='100%'
							y2='100%'
						>
							<stop offset='0%' stopColor='rgba(34, 197, 94, 0.2)' />
							<stop offset='100%' stopColor='rgba(34, 197, 94, 0.8)' />
						</linearGradient>
					</defs>
				</svg>
			</div>

			<div className='relative z-10 max-w-6xl mx-auto px-6 py-16'>
				<section className='mb-24 text-center'>
					<div className='inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6'>
						<span className='rounded-full bg-gradient-to-r from-[rgba(25,251,155,1)] to-[rgba(140,1,250,1)] px-[24px] py-[5px] text-5xl font-medium text-white font-bai font-semibold'>
							Step 1
						</span>
					</div>

					<h1 className='text-4xl md:text-5xl font-bold mb-4 text-balance'>
						<span className='text-white'>Thank you</span>
						<span className='text-[#8B5CF6]'> for registering,</span>
					</h1>
					<p className='text-xl text-white mb-2'>
						<span className='text-[#8B5CF6]'>now</span> watch the short video
					</p>
					<p className='text-gray-400 mb-12'>
						This is an important step in our investment strategy.
					</p>

					<div className='relative max-w-3xl mx-auto rounded-2xl overflow-hidden'>
						<video
							src='/mo2_2.mp4'
							controls
							className='w-full aspect-video object-cover'
						>
							Your browser does not support the video tag.
						</video>
					</div>
				</section>

				<section className='mb-24 text-center'>
					<div className='inline-flex items-center gap-2 px-4 py-2 mb-6'>
						<span className='rounded-full bg-gradient-to-r from-[rgba(25,251,155,1)] to-[rgba(140,1,250,1)] px-[24px] py-[5px] text-5xl font-medium text-white font-bai font-semibold'>
							Step 2
						</span>
					</div>

					<h2 className='text-3xl md:text-4xl font-bold mb-12 text-center'>
						Add the meeting to your calendar
					</h2>

					<img
						src='/add-meet.jpg'
						alt='Add meeting to your calendar'
						className='w-4xl h-4xl mx-auto'
					/>
				</section>

				<section className='mb-24 text-center'>
					<div className='inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6'>
						<span className='rounded-full bg-gradient-to-r from-[rgba(25,251,155,1)] to-[rgba(140,1,250,1)] px-[24px] py-[5px] text-5xl font-medium text-white font-bai font-semibold'>
							Step 3
						</span>
					</div>

					<h2 className='text-3xl md:text-4xl font-bold mb-4'>
						Please note that{' '}
						<span className='text-[#8B5CF6]'>your message is</span>
					</h2>
					<h2 className='text-3xl md:text-4xl font-bold mb-12'>
						<span className='text-[#8B5CF6]'>being sent</span>
					</h2>

					<div className='relative max-w-2xl mx-auto rounded-2xl overflow-hidden mb-12'>
						<img
							src='/preview.png'
							alt='Messaging video'
							className='w-full aspect-video object-cover'
						/>
						<div className='absolute inset-0 flex items-center justify-center'>
							<div className='w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center'>
								<span className='text-2xl'>💬</span>
							</div>
						</div>
					</div>

					<div className='max-w-2xl mx-auto space-y-4 text-left'>
						<div className='flex items-start gap-3'>
							<div className='mt-1 w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center flex-shrink-0 text-sm font-bold'>
								1
							</div>
							<p className='text-gray-300'>
								When we call, you&apos;ll have the opportunity to ask any
								questions about crypto investing
							</p>
						</div>

						<div className='flex items-start gap-3'>
							<div className='mt-1 w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center flex-shrink-0 text-sm font-bold'>
								2
							</div>
							<p className='text-gray-300'>
								We&apos;ll walk you through our research findings and exclusive
								opportunities
							</p>
						</div>

						<div className='flex items-start gap-3'>
							<div className='mt-1 w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center flex-shrink-0 text-sm font-bold'>
								3
							</div>
							<p className='text-gray-300'>
								After the call, you&apos;ll receive detailed reports on your
								personalized strategy
							</p>
						</div>

						<div className='flex items-start gap-3'>
							<div className='mt-1 w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center flex-shrink-0 text-sm font-bold'>
								4
							</div>
							<p className='text-gray-300'>
								We provide ongoing support to ensure your portfolio reaches its
								growth potential
							</p>
						</div>
					</div>

					<Button
						className='mt-12 px-12 py-6 text-lg font-semibold rounded-full'
						style={{
							background: 'linear-gradient(90deg, #8B5CF6 0%, #06B6D4 100%)',
						}}
					>
						Want to learn more about us? Read our FAQs
					</Button>
				</section>

				<section className='mb-24'>
					<h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>
						Read what our clients say about us on
					</h2>
					<div className='flex items-center justify-center gap-2 mb-12'>
						<span className='text-3xl md:text-4xl font-bold text-[#00B67A]'>
							Trustpilot
						</span>
						<div className='flex gap-1'>
							{[...Array(5)].map((_, i) => (
								<Star
									key={i}
									className='w-8 h-8 fill-[#00B67A] text-[#00B67A]'
								/>
							))}
						</div>
					</div>

					<div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-8'>
						{currentTestimonials.map((testimonial, index) => (
							<div
								key={index}
								className='bg-white text-gray-900 rounded-2xl p-6 shadow-lg'
							>
								<div className='flex items-center gap-3 mb-4'>
									<div className='w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500' />
									<div>
										<p className='font-semibold'>{testimonial.name}</p>
										<p className='text-sm text-gray-600'>{testimonial.date}</p>
									</div>
								</div>

								<div className='flex gap-1 mb-4'>
									{[...Array(testimonial.rating)].map((_, i) => (
										<Star
											key={i}
											className='w-5 h-5 fill-[#00B67A] text-[#00B67A]'
										/>
									))}
								</div>

								<p className='text-sm leading-relaxed text-gray-700'>
									{testimonial.text}
								</p>
							</div>
						))}
					</div>

					<div className='flex items-center justify-center gap-4'>
						<button
							onClick={() =>
								setCurrentTestimonialPage(prev => Math.max(0, prev - 1))
							}
							disabled={currentTestimonialPage === 0}
							className='p-2 rounded-full bg-[#1a1a1a] border border-[#22c55e] disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#22c55e]/10 transition-colors'
						>
							<ChevronLeft className='w-6 h-6 text-[#22c55e]' />
						</button>

						<div className='flex gap-2'>
							{[...Array(totalPages)].map((_, i) => (
								<button
									key={i}
									onClick={() => setCurrentTestimonialPage(i)}
									className={`w-3 h-3 rounded-full transition-all ${
										i === currentTestimonialPage
											? 'bg-[#22c55e] w-8'
											: 'bg-gray-600'
									}`}
								/>
							))}
						</div>

						<button
							onClick={() =>
								setCurrentTestimonialPage(prev =>
									Math.min(totalPages - 1, prev + 1)
								)
							}
							disabled={currentTestimonialPage === totalPages - 1}
							className='p-2 rounded-full bg-[#1a1a1a] border border-[#22c55e] disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#22c55e]/10 transition-colors'
						>
							<ChevronRight className='w-6 h-6 text-[#22c55e]' />
						</button>
					</div>
				</section>

				<footer className='border-t border-gray-800 pt-12 text-center text-sm text-gray-500'>
					<div className='mb-6'>
						<h3 className='mb-2 text-xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text'>
							Monexis
						</h3>
					</div>
					<div className='mb-4 space-y-1'>
						<p>418 Broadway STE N, Albany, NY 12207, USA</p>
						<p>Copyright © 2025 | All Rights Reserved</p>
					</div>
					<div className='flex flex-wrap justify-center gap-4 text-xs'>
						<a
							href='/privacy-policy'
							className='hover:text-purple-400 transition-colors'
						>
							PRIVACY POLICY
						</a>
						<a
							href='/terms-and-conditions'
							className='hover:text-purple-400 transition-colors'
						>
							TERMS AND CONDITIONS
						</a>
					</div>
				</footer>
			</div>
		</div>
	)
}
