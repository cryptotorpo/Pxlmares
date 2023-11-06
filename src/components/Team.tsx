import React from 'react';
import { BsTwitter, BsLinkedin } from 'react-icons/bs';

const people = [
    {
        name: 'Leslie Alexander',
        role: 'Co-Founder / CEO',
        imageUrl:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    },
    {
        name: 'Leslie Alexander',
        role: 'Co-Founder / CEO',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'Leslie Alexander',
        role: 'Co-Founder / CEO',
        imageUrl:
            'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    },
    // More people...
]

function Team() {
    return (
        <div className="bg-transparent py-16 sm:py-16 max-w-5xl border rounded-2xl border-slate-300">
            <div className="mx-auto grid gap-x-8 gap-y-12 px-6 lg:px-8">
                <div className="w-full text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our leadership</h2>
                    <p className="mt-6 leading-8 text-gray-600">
                        We’re a dynamic group of individuals who are passionate about what we do.
                    </p>
                </div>
                <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
                    {people.map((person) => (
                        <li key={person.name}>
                            <div className="flex flex-col gap-y-6">
                                <img className="w-full rounded-2xl aspect-[3/2] object-cover" src={person.imageUrl} alt="" />
                                <div>
                                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                                    <p className="text-sm font-semibold leading-6 text-gray-400">{person.role}</p>
                                </div>
                                <div className='flex flex-row gap-x-6'>
                                    <BsTwitter color='#A0A0A0'/>
                                    <BsLinkedin  color='#A0A0A0'/>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Team;