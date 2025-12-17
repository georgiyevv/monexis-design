'use client'

import { Bitcoin, Calendar, Mail } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { InlineWidget } from 'react-calendly'

const calendlyUrl = 'https://calendly.com/redblueyellow25/new-meeting'

export function MonexisBooking() {
	const router = useRouter()
	const [questionnaireAnswers, setQuestionnaireAnswers] = useState<Record<
		string,
		{ value: string; label: string }
	> | null>(null)

	useEffect(() => {
		if (typeof window !== 'undefined') {
			const savedAnswers = localStorage.getItem('questionnaire_answers')
			const parsed = JSON.parse(savedAnswers || '{}')
			setQuestionnaireAnswers(parsed)
		}

		const handleCalendlyEvent = (e: MessageEvent) => {
			if (e.data.event && e.data.event.indexOf('calendly') === 0) {
				if (e.data.event === 'calendly.event_scheduled') {
					if (typeof window !== 'undefined') {
						localStorage.setItem('booking_completed', 'true')
					}
					router.push('/success')
				}
			}
		}

		window.addEventListener('message', handleCalendlyEvent)

		return () => {
			window.removeEventListener('message', handleCalendlyEvent)
		}
	}, [router])

	return (
		<div className='relative min-h-screen overflow-hidden bg-black text-white'>
			<div className='pointer-events-none absolute inset-0 overflow-hidden'>
				<div className='absolute left-0 top-0 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2'>
					<div className='absolute inset-0 rounded-full bg-[#00ff88]/20 blur-[120px]' />
				</div>

				<div className='absolute bottom-0 right-0 h-[800px] w-[800px] translate-x-1/3 translate-y-1/3'>
					<div className='absolute inset-0 rounded-full bg-[#00ff88]/15 blur-[140px]' />
					<svg
						className='absolute inset-0'
						viewBox='0 0 800 800'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M400 200Q500 300 400 400T400 600'
							stroke='#00ff88'
							strokeWidth='3'
							fill='none'
							opacity='0.4'
						/>
					</svg>
				</div>
			</div>

			<div className='pointer-events-none absolute right-12 top-20 flex h-20 w-20 items-center justify-center rounded-full bg-purple-600/80 backdrop-blur-sm animate-float'>
				<Mail className='h-10 w-10 text-white' />
			</div>

			<div
				className='pointer-events-none absolute right-32 top-40 flex h-12 w-12 items-center justify-center rounded-full border-2 border-purple-400/50 bg-black/40 backdrop-blur-sm animate-float'
				style={{ animationDelay: '1s' }}
			>
				<Calendar className='h-6 w-6 text-purple-400' />
			</div>

			<div
				className='pointer-events-none absolute right-8 top-52 flex h-16 w-16 items-center justify-center rounded-full bg-cyan-500/80 backdrop-blur-sm animate-float'
				style={{ animationDelay: '2s' }}
			>
				<Bitcoin className='h-8 w-8 text-white' />
			</div>

			<main className='relative z-10 mx-auto max-w-6xl px-6 py-16'>
				<h1 className='mb-12 text-center text-balance text-4xl font-bold leading-tight md:text-5xl'>
					Book an online meeting with{' '}
					<span className='text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text'>
						Monexis
					</span>{' '}
					investment assistant
				</h1>

				<div className='mx-auto mb-24 grid max-w-5xl overflow-hidden rounded-2xl border border-gray-800 bg-black/60 backdrop-blur-sm lg:grid-cols-2'>
					<div className='border-b border-gray-800 p-8 lg:border-b-0 lg:border-r'>
						<h2 className='mb-2 text-xl font-semibold text-white'>
							Monexis Team
						</h2>
						<p className='mb-4 text-base text-gray-300'>
							(Priority) - Crypto Portfolio Planning
						</p>

						<div className='mb-6 inline-flex items-center gap-2 rounded-full border border-gray-700 bg-black/40 px-4 py-2'>
							<div className='h-3 w-3 rounded-full bg-gray-400' />
							<span className='text-sm font-medium text-white'>40 min</span>
						</div>

						<h3 className='mb-4 text-lg font-semibold text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text'>
							Zoom Meeting on Building a Crypto Portfolio with 5-10X Growth
						</h3>

						<div className='space-y-4'>
							<div className='flex gap-4'>
								<div className='flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cyan-500/80 text-sm font-semibold text-white'>
									A
								</div>
								<p className='text-sm leading-relaxed text-gray-300'>
									Conduct an audit of your crypto investment strategy to make
									sure you're not missing obvious profit opportunities.
								</p>
							</div>

							<div className='flex gap-4'>
								<div className='flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cyan-500/80 text-sm font-semibold text-white'>
									B
								</div>
								<p className='text-sm leading-relaxed text-gray-300'>
									We'll reveal the most optimal portfolio structure designed to
									maximize returns while considering risk.
								</p>
							</div>

							<div className='flex gap-4'>
								<div className='flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cyan-500/80 text-sm font-semibold text-white'>
									C
								</div>
								<p className='text-sm leading-relaxed text-gray-300'>
									We'll share exclusive, undervalued assets discovered by our
									research team — assets that most investors haven't found yet.
								</p>
							</div>
						</div>
					</div>

					<div className='p-4 min-h-[600px]'>
						<InlineWidget
							url={calendlyUrl}
							styles={{
								height: '100%',
								minHeight: '600px',
							}}
							pageSettings={{
								backgroundColor: 'ffffff',
								hideEventTypeDetails: false,
								hideLandingPageDetails: false,
								primaryColor: '00a2ff',
								textColor: '4d5055',
							}}
							prefill={{
								customAnswers: {
									a1: `${questionnaireAnswers?.commitment?.label} \n ${questionnaireAnswers?.experience?.label} \n ${questionnaireAnswers?.investment?.label}`,
								},
							}}
						/>
					</div>
				</div>

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
			</main>

			<style jsx>{`
				@keyframes float {
					0%,
					100% {
						transform: translateY(0px);
					}
					50% {
						transform: translateY(-20px);
					}
				}
				.animate-float {
					animation: float 3s ease-in-out infinite;
				}
			`}</style>
		</div>
	)
}
