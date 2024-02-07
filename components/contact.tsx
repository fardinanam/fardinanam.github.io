'use client'

import { useSectionInView } from '@/lib/hooks'
import React from 'react'
import SectionHeading from './section-heading'
import { socialsData } from '@/lib/data'
import sendEmail from '@/actions/sendEmail'
import SubmitButton from './submit-btn'
import toast from 'react-hot-toast'

function Contact() {
  const { ref } = useSectionInView('Contact')

  return (
    <section
      id='contact'
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
    >
      <SectionHeading>Contact Me</SectionHeading>

      <p className="text-gray-700 -mt-6">
        Please contact me directly at{" "}
        <a className="underline" href={`mailto:${socialsData.email.address}`}>
          {socialsData.email.address}
        </a>{" "}
        or through this form.
      </p>

      <form 
        className="mt-10 flex flex-col"
        action={async formData => {
          const { data, error } = await sendEmail(formData)

          if (error) {
            toast.error(error)
            return
          }

          toast.success("Message sent successfully!")
        }}
      >
        <input
          className="h-12 px-4 rounded-lg borderBlack transition-all"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-3.5 transition-all"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <SubmitButton />
      </form>
    </section>
  )
}

export default Contact