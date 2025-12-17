'use client'

import { MonexisSuccess } from '@/components/monexis-success'
import { useRouter } from 'next/navigation'

export default function SuccessPage() {
	const router = useRouter()

	// useEffect(() => {
	// 	if (typeof window !== 'undefined') {
	// 		const bookingCompleted = localStorage.getItem('booking_completed')
	// 		if (!bookingCompleted) {
	// 			router.push('/booking')
	// 		}
	// 	}
	// }, [router])

	return <MonexisSuccess />
}
