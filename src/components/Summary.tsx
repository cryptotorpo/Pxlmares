import React from 'react';
import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Project Overview',
    description:
      'PXLMARES is dedicated to producing short video animations with a humorous horror twist. Our aim is to create content that resonates with fans of the genre. These animations will be centered around witty and catchy horror parody jokes.',
    icon:  CloudArrowUpIcon,
  },
  {
    name: 'Tokenomics',
    description:
      `PXLMARES Distribution:
      33.4% of shares are reserved for the management team.
      66.6% of (6666 NFTs) will be sold to initial investors.`,
    icon: LockClosedIcon,
  },
  {
    name: 'Decentralized Autonomous Organization (DAO)',
    description:
      `PXLMARES is a DAO-based project, ensuring that our investors have a say in the project's direction. As an investor, you'll have the right to vote on crucial decisions.
      For instance, the management team may present several investment approaches, and you, the investors, will vote to determine the best course of action.`,
    icon: ArrowPathIcon,
  },
  {
    name: 'Legal and Compliance',
    description:
      `PXLMARES adheres to all relevant legal and compliance standards. We respect intellectual property rights and legal obligations.`,
    icon: FingerPrintIcon,
  },
]

function Summary() {
  return (
    <div className="bg-transparent py-24 sm:py-32 w-full">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            About PXLMARES
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Welcome to PXLMARES, a horror-themed NFT project designed to build a thriving community. We focus on creating small video animations featuring horror characters with parody jokes to engage and entertain our community.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

export default Summary;
