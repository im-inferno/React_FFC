import React from 'react'

function Contact() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
  <div className="flex w-3/4 gap-6 items-stretch">
    
    <div className="flex-1 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-orange-700 hover:text-orange-800">Contact Us Page</h1>
      <p className="text-gray-700 font-semibold mt-4">
        Email: <a className="text-blue-500 hover:underline" href="mailto:abc@mail.com">abc@mail.com</a>
      </p>
      <p className="text-gray-700 font-semibold mt-4">Phone: +1234567890</p>
      <p className="text-gray-700 font-semibold mt-4">Address: 123, Main Street, City, Country</p>
    </div>

    {/* Contact Form Box */}
    <div className="flex-1 p-6 bg-white rounded-lg shadow-md flex items-center justify-center">
      <form className="w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-orange-700 hover:text-orange-800">Get in Touch</h2>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">Name</label>
          <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" type="text" id="name" name="name" required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">Email</label>
          <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" type="email" id="email" name="email" required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="message">Message</label>
          <textarea className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" id="message" name="message" rows="4" required></textarea>
        </div>
        <button className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500" type="submit">
          Submit
        </button>
      </form>
    </div>

  </div>
</div>
  )
}

export default Contact
