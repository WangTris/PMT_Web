import React from "react";

const ContactUs = () => {
  return (
    <section className="flex flex-col items-center justify-center">
      <form class="container max-w-5xl space-y-2 rounded-xl border-2 p-10">
        <h1 className="pb-5 text-center font-primary text-6xl font-bold text-primary">
          How can we help you?
        </h1>
        <div className="pb-5 text-left font-primary text-2xl font-medium text-accent">
          Thank you for your interest in PHUONG MANH TU TECHNOLOGY Co. LTD.
          Please fill out the form below and we will get back to you as soon as
          possible.
        </div>
        {/* Name */}
        <div class="grid md:grid-cols-2 md:gap-6">
          <div class="group relative z-0 w-full">
            <label
              for="first-name"
              class="mb-2 block text-2xl font-medium text-accent"
            >
              First Name
            </label>
            <input
              type="first-name"
              id="first-name"
              class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-2xl text-gray-900 "
              placeholder="Required"
              required
            />
          </div>
          <div class="group relative z-0 w-full">
            <label
              for="last-name"
              class="mb-2 block text-2xl font-medium text-accent"
            >
              Last Name
            </label>
            <input
              type="last-name"
              id="last-name"
              class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-2xl text-gray-900 "
              placeholder="Required"
              required
            />
          </div>
        </div>
        {/* Email */}
        <div class="mb-5">
          <label
            for="email"
            class="mb-2 block text-2xl font-medium text-accent"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-2xl text-gray-900 "
            placeholder="Required"
            required
          />
        </div>
        {/* Phone */}
        <div class="mb-5">
          <label
            for="phone"
            class="mb-2 block text-2xl font-medium text-accent"
          >
            Business Phone
          </label>
          <input
            type="phone"
            id="phone"
            class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-2xl text-gray-900 "
            placeholder="Required"
            required
          />
        </div>
        {/* Company */}
        <div class="mb-5">
          <label
            for="company"
            class="mb-2 block text-2xl font-medium text-accent"
          >
            Company
          </label>
          <input
            type="company"
            id="company"
            class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-2xl text-gray-900 "
            placeholder="Required"
            required
          />
        </div>
        {/* Job Title */}
        <div class="mb-5">
          <label
            for="job-title"
            class="mb-2 block text-2xl font-medium text-accent"
          >
            Job Title
          </label>
          <input
            type="job-title"
            id="job-title"
            class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-2xl text-gray-900 "
            placeholder=""
          />
        </div>
        {/* City and Address */}
        <div class="grid md:grid-cols-2 md:gap-6">
          <div class="group relative z-0 w-full">
            <label
              for="address"
              class="mb-2 block text-2xl font-medium text-accent"
            >
              Address
            </label>
            <input
              type="address"
              id="address"
              class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-2xl text-gray-900 "
              placeholder="Note: Pick your company addresses."
            />
          </div>
          <div class="group relative z-0 w-full">
            <label
              for="city"
              class="mb-2 block text-2xl font-medium text-accent"
            >
              City
            </label>
            <input
              type="city"
              id="city"
              class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-2xl text-gray-900 "
              placeholder=""
            />
          </div>
        </div>
        {/* Country and ZIP */}
        <div class="grid md:grid-cols-2 md:gap-6">
          <div class="group relative z-0 w-full">
            <label
              for="country"
              class="mb-2 block text-2xl font-medium text-accent"
            >
              Country
            </label>
            <input
              type="country"
              id="country"
              class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-2xl text-gray-900 "
              placeholder=""
            />
          </div>
          <div class="group relative z-0 w-full">
            <label
              for="zip"
              class="mb-2 block text-2xl font-medium text-accent"
            >
              Zip or Postal Code
            </label>
            <input
              type="zip"
              id="zip"
              class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-2xl text-gray-900 "
              placeholder=""
            />
          </div>
        </div>
        {/* Industry */}
        <div class="mb-5">
          <label
            for="industry"
            class="mb-2 block text-2xl font-medium text-accent"
          >
            Industry
          </label>
          <input
            type="industry"
            id="industry"
            class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-2xl text-gray-900 "
            placeholder=""
          />
        </div>
        {/* I'm contacting u because */}
        <div className="mb-5">
          <label
            for="why-contact"
            class="mb-2 block text-2xl font-medium text-accent"
          >
            I am contacting you because
          </label>
          <select
            id="why-contact"
            class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-2xl text-gray-900 "
            required
          >
            <option>-- Please Select --</option>
            <option>Equipment Sales</option>
            <option>Replacement Parts</option>
            <option>Service Requests</option>
            <option>Rental Solution</option>
            <option>Technical Support or Others</option>
          </select>
        </div>
        {/* Product Categories */}
        <div className="mb-5">
          <label
            for="categories"
            class="mb-2 block text-2xl font-medium text-accent"
          >
            Product Categories
          </label>
          <select
            id="categories"
            class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-2xl text-gray-900 "
            required
          >
            <option>-- Please Select --</option>
            <option>Centrifugal Compressor</option>
          </select>
        </div>
        {/* Message */}
        <div className="mb-5 pb-8">
          <label
            for="additional-info"
            class="mb-2 block text-2xl font-medium text-accent"
          >
            Additional Information
          </label>
          <textarea
            id="additional-info"
            rows="4"
            class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-2xl text-gray-900"
            placeholder="Please describe what you are looking for."
          ></textarea>
        </div>
        <button
          type="submit"
          className="flex h-20 w-full items-center justify-center rounded-2xl bg-[#5cb85c] px-4 py-2 transition-colors hover:bg-[#5cb85c]/60"
        >
          <span className="font-primary text-2xl font-bold text-white">
            Submit
          </span>
        </button>
        <div className="text-left font-primary text-xl text-accent">
          Your request will be forwarded to the relevant individuals to assist
          with your request. By clicking 'Send' you are authorizing Phuong Manh
          Tu Technology Co. LTD to contact you so that we may fulfill your
          request, as well as to communicate with you regarding our products and
          services.
        </div>
        <a
          href="/term"
          className="font-primary text-xl font-bold italic text-accent hover:underline"
        >
          Terms of service
        </a>
      </form>
    </section>
  );
};

export default ContactUs;
