import React from 'react'

const FAQ = () => {
  return (
<section className="mb-[100px] w-10/12 mx-auto">

	<div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
        <div>
    <button className='flex items-center justify-center gap-2 border-2 border-[#343268] bg-transparent font-bold py-2 px-5 rounded-xl text-[#343268] mb-5'>
                    Faq
                </button>
                </div>
		<h2 className='text-[22px] md:text-[30px] lg:text-[36px] font-bold mb-5'>Frequently Asked Questions</h2>
		<div className="space-y-4">

			<details className="w-full border">
				<summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400 bg-[#FFFFF5]">What are your office hours?</summary>
				<p className="px-4 py-6 pt-6 ml-4 -mt-4 text-gray-400">Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours.</p>
			</details>

            <details className="w-full border">
				<summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400 bg-[#FFFFF5]">How can I schedule an appointment?</summary>
				<p className="px-4 py-6 pt-6 ml-4 -mt-4 text-gray-400">Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours.</p>
			</details>

            <details className="w-full border">
				<summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400 bg-[#FFFFF5]">Do you accept insurance?</summary>
				<p className="px-4 py-6 pt-6 ml-4 -mt-4 text-gray-400">Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours.</p>
			</details>

            <details className="w-full border">
				<summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400 bg-[#FFFFF5]">What should I bring to my appointment?</summary>
				<p className="px-4 py-6 pt-6 ml-4 -mt-4 text-gray-400">Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours.</p>
			</details>

            <details className="w-full border">
				<summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400 bg-[#FFFFF5]">Do you offer telemedicine appointments?</summary>
				<p className="px-4 py-6 pt-6 ml-4 -mt-4 text-gray-400">Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours.</p>
			</details>

		</div>
	</div>
</section>
  )
}

export default FAQ
