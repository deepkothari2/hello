npm install react-icons --save



import React, { useState } from "react"
import { FaStar } from "react-icons/fa"

interface Testimonial {
	name: string
	rating: number
	message: string
}

const App: React.FC = () => {
	const [formData, setFormData] = useState({
		name: "",
		rating: 5,
		message: "",
	})

	const [testimonials, setTestimonials] = useState<Array<Testimonial>>([])

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target
		setFormData({ ...formData, [name]: value })
	}

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		const newTestimonial: Testimonial = {
			name: formData.name,
			rating: formData.rating,
			message: formData.message,
		}

		if (!formData.name || !formData.message || formData.rating === undefined) {
			alert("Please fill in all required fields (Name, Rating, and Message).")
			return
		}

		setTestimonials([...testimonials, newTestimonial])

		setFormData({ name: "", rating: 0, message: "" })
	}

	return (
		<>
			<div className="container mx-auto">
				<h1 className="text-2xl py-5 text-center font-semibold text-indigo-600">Send us Feedback</h1>
				<div className="flex flex-wrap">
					<form className="w-full lg:w-1/2 p-5" onSubmit={handleSubmit}>
						<h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Feedback</h2>
						<div className="relative mb-4">
							<label className="leading-7 text-sm text-gray-600">Name</label>
							<input
								type="text"
								id="name"
								name="name"
								className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
								onChange={handleInputChange}
								value={formData.name}
							/>
						</div>
						<div className="relative mb-4">
							<label className="leading-7 text-sm text-gray-600">Rating</label>
							<select
								id="rating"
								name="rating"
								value={formData.rating}
								onChange={handleInputChange}
								className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
							>
								{[1, 2, 3, 4, 5].map((index) => (
									<option key={index} value={index}>
										{index} Stars
									</option>
								))}
							</select>
						</div>
						<div className="relative mb-4">
							<label className="leading-7 text-sm text-gray-600">Message</label>
							<textarea
								id="message"
								name="message"
								className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
								onChange={handleInputChange}
								value={formData.message}
							/>
						</div>
						<button type="submit" className="w-full text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
							Submit
						</button>
						<p className="text-xs text-gray-500 mt-3">Thank you for your response, we will contact you as soon as possible if you have any queries.</p>
					</form>
					<div className="w-full lg:w-1/2 p-5">
						{testimonials.map((testimonial, index) => (
							<div key={index} className="bg-gray-100 p-8 my-4 rounded">
								<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
									<path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
								</svg>
								<p className="leading-relaxed mb-6">{testimonial.message}</p>
								<div className="inline-flex items-center">
									<img alt="testimonial" src="https://dummyimage.com/107x107" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
									<p className="flex flex-col pl-4">
										<span className="title-font font-medium text-gray-900">{testimonial.name}</span>
										<span className="text-gray-500 text-sm flex pt-1">{testimonial.rating} Stars</span>
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	)
}

export default App
