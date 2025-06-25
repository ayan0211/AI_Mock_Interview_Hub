import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { dummyInterviews } from '../../constants'
import { Inter } from 'next/font/google'
import InterviewCard from '@/components/InterviewCard'

const page = () => {
  return (
    <>
      <section className="card cta flex flex-row items-center justify-between max-sm:flex-col p-6 max-w-3xl mx-auto">
        <div className="flex flex-col gap-4 max-w-md">
          <h2 className="text-xl">Get Interview ready with AI power and feedback!!</h2>
          <p className="text-base">
        Leverage the power of AI to enhance your interview skills and receive personalized feedback.
          </p>
          <Button asChild className="btn-primary max-sm:w-full">
        <Link href="/interview" className="text-white">
          Start Interview
        </Link>
          </Button>
        </div>
        <div className="flex-1 flex justify-end max-sm:justify-center">
          <Image
        src="/robot.png"
        alt="robot"
        width={320}
        height={320}
        className="max-sm:hidden"
          />
        </div>
      </section>
      <section className="flex flex-col gap-4 mt-6">
        <h2 className="text-lg">Your Interviews</h2>
        <div className="interview-section flex flex-wrap gap-3">
          {dummyInterviews.map((interview) => (
        <InterviewCard key={interview.id} {...interview} />
          ))}
        </div>
      </section>
      <section className="flex flex-col gap-4 mt-6">
        <h2 className="text-lg">Take an Interview</h2>
        <div className="interview-section flex flex-wrap gap-3">
          {dummyInterviews.map((interview) => (
        <InterviewCard key={interview.id} {...interview} />
          ))}
        </div>
        {/* <p> You havent taken any interviews yet.</p> */}
      </section>
    </>
  )
}

export default page
