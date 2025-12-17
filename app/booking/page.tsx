'use client'

import { MonexisBooking } from '@/components/monexis-booking'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function BookingPage() {
	const router = useRouter()

	useEffect(() => {
		if (typeof window !== 'undefined') {
			const questionnaireCompleted = localStorage.getItem(
				'questionnaire_completed'
			)
			if (!questionnaireCompleted) {
				router.push('/')
			}
		}
	}, [router])

	return <MonexisBooking />
}
