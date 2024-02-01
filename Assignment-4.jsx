🚀🚀🚀🚀npm install react-icons --save
🚀🚀🚀🚀  CHANGE DESIGN 

import React, { useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
// import "./style.css" // Import your custom styles

const App = () => {
	const [formData, setFormData] = useState({
		name: "",
		rating: 5,
		message: "",
	})

	const [testimonials, setTestimonials] = useState([])

	const handleInputChange = (e) => {
		const { name, value } = e.target
		setFormData({ ...formData, [name]: value })
	}

	const handleSubmit = (e) => {
		e.preventDefault()

		const newTestimonial = {
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
			<div className="container-fluid p-0">
				<div className="d-flex flex-wrap">
					<form className="col-12 col-sm-6 mx-auto p-4 bg-light rounded" onSubmit={handleSubmit}>
						<h2 className="text-gray-900 text-lg mb-4 font-medium title-font">Review Comment</h2>
						<div className="mb-4">
							<label htmlFor="name" className="form-label">
								Name
							</label>
							<input type="text" id="name" name="name" className="form-control" onChange={handleInputChange} value={formData.name} />
						</div>
						<div className="mb-4">
							<label htmlFor="rating" className="form-label">
								Rating
							</label>
							<select id="rating" name="rating" value={formData.rating} onChange={handleInputChange} className="form-select">
								{[1, 2, 3, 4, 5].map((index) => (
									<option key={index} value={index}>
										{index} Stars
									</option>
								))}
							</select>
						</div>
						<div className="mb-4">
							<label htmlFor="message" className="form-label">
								Message
							</label>
							<textarea id="message" name="message" className="form-control" onChange={handleInputChange} value={formData.message} />
						</div>
						<button type="submit" className="btn btn-primary">
							Submit
						</button>
					</form>
					<div className="col-12 col-sm-6 mx-auto">
						{testimonials.map((testimonial, index) => (
							<div key={index} className="text-white p-4 my-4 rounded bg-primary">
								<div key={index} className="p-3">
									<p className="leading-relaxed h4 mb-3">Message: {testimonial.message}</p>
									<p className="">
										<span className="title-font h2 font-medium text-gray-900">Name: {testimonial.name}</span>
										<br />
										<span className="text-gray-500 h5 text-sm flex pt-1">Rating: {testimonial.rating} Stars</span>
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
