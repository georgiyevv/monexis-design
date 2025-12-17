'use client'

import Link from 'next/link'

export default function PrivacyPolicyPage() {
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
					Privacy Policy
				</h1>

				<div className='space-y-6 text-gray-300 leading-relaxed'>
					<section>
						<h2 className='mb-4 text-2xl font-semibold text-white'>
							1. Information We Collect
						</h2>
						<p>
							We collect information that you provide directly to us, including
							your name, email address, phone number, and any other information
							you choose to provide when booking a meeting or using our
							services.
						</p>
					</section>

					<section>
						<h2 className='mb-4 text-2xl font-semibold text-white'>
							2. How We Use Your Information
						</h2>
						<p>
							We use the information we collect to provide, maintain, and
							improve our services, process your bookings, communicate with you,
							and send you marketing communications (with your consent).
						</p>
					</section>

					<section>
						<h2 className='mb-4 text-2xl font-semibold text-white'>
							3. Information Sharing
						</h2>
						<p>
							We do not sell, trade, or rent your personal information to third
							parties. We may share your information only with service providers
							who assist us in operating our business, subject to
							confidentiality agreements.
						</p>
					</section>

					<section>
						<h2 className='mb-4 text-2xl font-semibold text-white'>
							4. Data Security
						</h2>
						<p>
							We implement appropriate technical and organizational measures to
							protect your personal information against unauthorized access,
							alteration, disclosure, or destruction.
						</p>
					</section>

					<section>
						<h2 className='mb-4 text-2xl font-semibold text-white'>
							5. Your Rights
						</h2>
						<p>
							You have the right to access, update, or delete your personal
							information. You may also opt-out of marketing communications at
							any time by contacting us.
						</p>
					</section>

					<section>
						<h2 className='mb-4 text-2xl font-semibold text-white'>
							6. Cookies and Tracking
						</h2>
						<p>
							We use cookies and similar tracking technologies to collect and
							use personal information about you. You can control cookies
							through your browser settings.
						</p>
					</section>

					<section>
						<h2 className='mb-4 text-2xl font-semibold text-white'>
							7. Changes to This Policy
						</h2>
						<p>
							We may update this Privacy Policy from time to time. We will
							notify you of any changes by posting the new Privacy Policy on
							this page.
						</p>
					</section>

					<section>
						<h2 className='mb-4 text-2xl font-semibold text-white'>
							8. Contact Us
						</h2>
						<p>
							If you have any questions about this Privacy Policy, please
							contact us at the address provided in our Terms and Conditions.
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
