'use client'

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

const QUESTIONNAIRE_STEPS = [
	{
		id: 'commitment',
		question: 'Are you serious about building a 5-10X crypto portfolio?',
		options: [
			{ value: 'yes', label: 'Yes, I am committed to growing my wealth' },
			{ value: 'no', label: 'No, I am not serious — I will leave now' },
		],
	},
	{
		id: 'experience',
		question: 'What is your experience with crypto investments?',
		options: [
			{ value: 'beginner', label: 'Beginner - Just starting out' },
			{ value: 'intermediate', label: 'Intermediate - Some experience' },
			{ value: 'advanced', label: 'Advanced - Experienced investor' },
		],
	},
	{
		id: 'investment',
		question: 'What is your investment timeframe?',
		options: [
			{ value: 'short', label: 'Short-term (3-6 months)' },
			{ value: 'medium', label: 'Medium-term (6-12 months)' },
			{ value: 'long', label: 'Long-term (12+ months)' },
		],
	},
] as const

export function MonexisLanding() {
	const router = useRouter()
	const [currentStep, setCurrentStep] = useState(0)
	const [answers, setAnswers] = useState<
		Record<string, { value: string; label: string }>
	>({})

	useEffect(() => {
		if (typeof window !== 'undefined') {
			localStorage.removeItem('questionnaire_completed')
			localStorage.removeItem('booking_completed')
		}
	}, [])

	return (
		<div className='relative min-h-screen overflow-hidden bg-black text-white'>
			<div className='pointer-events-none absolute inset-0 overflow-hidden'>
				<div className='absolute left-0 top-0 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2'>
					<div className='absolute inset-0 rounded-full bg-[#00ff88]/20 blur-[120px]' />
					<svg
						className='absolute inset-0'
						viewBox='0 0 600 600'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M100 100Q150 50 200 100T300 100Q350 150 400 100'
							stroke='#00ff88'
							strokeWidth='3'
							fill='none'
							opacity='0.6'
						/>
					</svg>
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

				<div className='absolute left-1/4 top-1/3 h-[400px] w-[400px]'>
					<svg
						className='absolute inset-0'
						viewBox='0 0 400 400'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M50 200Q100 100 200 150T350 200'
							stroke='#00ff88'
							strokeWidth='2'
							fill='none'
							opacity='0.5'
						/>
					</svg>
				</div>
			</div>

			<main className='relative z-10 mx-auto max-w-4xl px-6 py-16'>
				<section className='mb-24 text-center'>
					<div className='mb-8 inline-block'>
						<span className='rounded-full bg-gradient-to-r from-[rgba(25,251,155,1)] to-[rgba(140,1,250,1)] px-[24px] py-[5px] text-5xl font-medium text-white font-bai font-semibold'>
							Step 1
						</span>
					</div>

					<h2 className='mb-6 text-balance text-4xl font-bold leading-tight md:text-5xl lg:text-6xl'>
						Watch the video before you scroll further
					</h2>

					<p className='mb-4 text-gray-300 text-center font-normal text-[32px] leading-[134%] font-inter'>
						Stay up-to-date with the latest news and trends in the crypto space.
						Follow our market insights to make informed decisions.
					</p>

					<div className='mb-8 rounded-md border border-[rgba(255,255,255,0.58)] px-[57px] py-[15px] text-[22px] text-white font-bai font-medium text-center leading-[100%] tracking-normal'>
						<span className='font-bold text-[#19FB9B]'>Only 0.2%</span> of
						investors have access to this closed strategy and earn returns of
						X5–X10 per year
					</div>

					<div className='relative max-w-3xl mx-auto rounded-2xl overflow-hidden'>
						<video
							src='/mon 1_4.mp4'
							controls
							className='w-full aspect-video object-cover'
						>
							Your browser does not support the video tag.
						</video>
					</div>
				</section>

				<section className='mb-24 text-center'>
					<div className='mb-8 inline-block'>
						<span className='rounded-full bg-gradient-to-r from-[rgba(25,251,155,1)] to-[rgba(140,1,250,1)] px-[24px] py-[5px] text-5xl font-medium text-white font-bai font-semibold'>
							Step 2
						</span>
					</div>

					<h2 className='mb-12 text-balance text-3xl font-bold leading-tight md:text-4xl lg:text-5xl'>
						After watching the video, fill out the questionnaire to find out if
						you can join our private investors' club
					</h2>

					<div className='mb-6 flex justify-center'>
						<div className='flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-orange-400 to-orange-600 shadow-lg shadow-orange-500/50'>
							<span className='text-3xl font-bold text-white'>₿</span>
						</div>
					</div>

					<p className='mb-16 text-lg text-gray-300'>
						We help investors build crypto portfolios with{' '}
						<span className='font-bold text-orange-400'>5-10X</span> potential{' '}
						<span className='font-bold text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text'>
							within 12 months
						</span>
						.
					</p>

					<div className='mx-auto max-w-2xl rounded-2xl border border-gray-800 bg-black/60 p-8 text-left backdrop-blur-sm'>
						<div className='mb-6'>
							<div className='flex items-center justify-between mb-2'>
								<span className='text-sm text-gray-400'>
									Question {currentStep + 1} of {QUESTIONNAIRE_STEPS.length}
								</span>
							</div>
							<div className='w-full h-2 bg-gray-800 rounded-full overflow-hidden'>
								<div
									className='h-full bg-gradient-to-r from-cyan-500 to-purple-600 transition-all duration-300'
									style={{
										width: `${
											((currentStep + 1) / QUESTIONNAIRE_STEPS.length) * 100
										}%`,
									}}
								/>
							</div>
						</div>

						{currentStep < QUESTIONNAIRE_STEPS.length && (
							<>
								<div className='mb-6'>
									<h3 className='mb-6 text-xl font-semibold text-white'>
										{QUESTIONNAIRE_STEPS[currentStep].question}
									</h3>

									<div className='space-y-3'>
										{QUESTIONNAIRE_STEPS[currentStep].options.map(option => (
											<label
												key={option.value}
												className='flex items-center gap-3 rounded-lg border border-gray-700 bg-black/40 p-4 cursor-pointer transition-all hover:border-purple-500 hover:bg-black/60'
											>
												<Checkbox
													id={option.value}
													checked={
														answers[QUESTIONNAIRE_STEPS[currentStep].id]
															?.value === option.value
													}
													onCheckedChange={checked => {
														if (checked) {
															setAnswers({
																...answers,
																[QUESTIONNAIRE_STEPS[currentStep].id]: {
																	value: option.value,
																	label: option.label,
																},
															})
														}
													}}
													className='data-[state=checked]:bg-purple-600 data-[state=checked]:border-purple-600'
												/>
												<span className='text-white flex-1'>
													{option.label}
												</span>
											</label>
										))}
									</div>
								</div>

								<div className='flex gap-4'>
									{currentStep > 0 && (
										<Button
											onClick={() => setCurrentStep(currentStep - 1)}
											variant='outline'
											className='flex-1 rounded-full border-gray-700 text-white hover:bg-gray-800'
										>
											Back
										</Button>
									)}
									<Button
										disabled={!answers[QUESTIONNAIRE_STEPS[currentStep].id]}
										onClick={() => {
											if (
												currentStep === 0 &&
												answers[QUESTIONNAIRE_STEPS[0].id]?.value === 'no'
											) {
												router.push('/')
												setAnswers({})
												return
											}

											if (currentStep === QUESTIONNAIRE_STEPS.length - 1) {
												if (typeof window !== 'undefined') {
													const allAnswersFilled = QUESTIONNAIRE_STEPS.every(
														step => answers[step.id]
													)

													if (allAnswersFilled) {
														localStorage.setItem(
															'questionnaire_completed',
															'true'
														)
														localStorage.setItem(
															'questionnaire_answers',
															JSON.stringify(answers)
														)
														router.push('/booking')
													}
												}
											} else {
												setCurrentStep(currentStep + 1)
											}
										}}
										className='flex-1 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 py-6 text-base font-semibold text-white shadow-lg shadow-purple-500/30 transition-transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed'
									>
										{currentStep === QUESTIONNAIRE_STEPS.length - 1
											? 'Continue to Booking'
											: 'Next'}
									</Button>
								</div>
							</>
						)}
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
			</main>
		</div>
	)
}
