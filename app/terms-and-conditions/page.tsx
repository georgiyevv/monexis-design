'use client'

import Link from 'next/link'

export default function TermsAndConditionsPage() {
	return (
		<div className='min-h-screen bg-black text-white'>
			<div className='mx-auto max-w-4xl px-6 py-16'>
				<Link
					href='/'
					className='mb-8 inline-block text-purple-400 hover:text-purple-300 transition-colors'
				>
					← Back to Home
				</Link>

				<h1 className='mb-8 text-4xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text'>
					Terms and Conditions
				</h1>

				<div className='space-y-6 text-gray-300 leading-relaxed'>
					<section>
						<h2 className='mb-4 text-2xl font-semibold text-white'>
							1. Acceptance of Terms
						</h2>
						<p>
							By accessing and using this website and our services, you accept
							and agree to be bound by the terms and provision of this
							agreement. If you do not agree to these terms, please do not use
							our services.
						</p>
					</section>

					<section>
						<h2 className='mb-4 text-2xl font-semibold text-white'>
							2. Investment Services
						</h2>
						<p>
							Monexis provides investment advisory services related to
							cryptocurrency portfolios. All investments carry risk, and past
							performance does not guarantee future results. You should
							carefully consider your investment objectives and risk tolerance
							before making any investment decisions.
						</p>
					</section>

					<section>
						<h2 className='mb-4 text-2xl font-semibold text-white'>
							3. No Guarantee of Returns
						</h2>
						<p>
							We do not guarantee any specific investment returns. All
							investment strategies involve risk, including the potential loss
							of principal. The performance figures mentioned are for
							illustrative purposes only and are not guarantees of future
							performance.
						</p>
					</section>

					<section>
						<h2 className='mb-4 text-2xl font-semibold text-white'>
							4. User Responsibilities
						</h2>
						<p>
							You are responsible for maintaining the confidentiality of your
							account information and for all activities that occur under your
							account. You agree to provide accurate and complete information
							when using our services.
						</p>
					</section>

					<section>
						<h2 className='mb-4 text-2xl font-semibold text-white'>
							5. Prohibited Activities
						</h2>
						<p>
							You agree not to use our services for any unlawful purpose or in
							any way that could damage, disable, or impair the website or
							interfere with any other party's use of the website.
						</p>
					</section>

					<section>
						<h2 className='mb-4 text-2xl font-semibold text-white'>
							6. Intellectual Property
						</h2>
						<p>
							All content on this website, including text, graphics, logos, and
							software, is the property of Monexis and is protected by copyright
							and other intellectual property laws.
						</p>
					</section>

					<section>
						<h2 className='mb-4 text-2xl font-semibold text-white'>
							7. Limitation of Liability
						</h2>
						<p>
							Monexis shall not be liable for any indirect, incidental, special,
							or consequential damages arising out of or in connection with the
							use of our services or this website.
						</p>
					</section>

					<section>
						<h2 className='mb-4 text-2xl font-semibold text-white'>
							8. Modifications to Terms
						</h2>
						<p>
							We reserve the right to modify these terms at any time. Your
							continued use of our services after any such changes constitutes
							your acceptance of the new terms.
						</p>
					</section>

					<section>
						<h2 className='mb-4 text-2xl font-semibold text-white'>
							9. Governing Law
						</h2>
						<p>
							These terms shall be governed by and construed in accordance with
							the laws of the State of New York, United States, without regard
							to its conflict of law provisions.
						</p>
					</section>
					<section>
						<h2 className='mb-4 text-2xl font-semibold text-white'>
							10. Contact Us
						</h2>
						<p>
							If you have any questions about this Terms and Conditions, please
							contact us at the address provided in our Terms and Conditions
							Policy.
						</p>
					</section>
				</div>

				<div className='mt-12 pt-8 border-t border-gray-800'>
					<p className='text-sm text-gray-500'>
						418 Broadway STE N, Albany, NY 12207, USA
					</p>
					<p className='mt-2 text-sm text-gray-500'>
						Copyright © 2025 | All Rights Reserved
					</p>
				</div>
			</div>
		</div>
	)
}
