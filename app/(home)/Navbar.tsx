import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react'
import { SiGithub } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";
export const Navbar = ({className,mobNumber}:{className?: string;mobNumber?:string}) => {
    const socialAccounts = [
        {
            link: 'https://www.linkedin.com/in/asgar-/',
            label: 'Linkedin',
            Icon: SiLinkedin ,
        },
        {
            link: 'https://github.com/asgarsidd',
            label:'Github',
            Icon: SiGithub,
        },
       

    ]
  return (
    <nav className={cn('py-10 flex justify-between items-center', className)}>
        <h1 className='text-2xl font-bold underline underline-offset-8 decoration-green-500 -rotate-2'>「 ✦ Asgar🧑🏻‍💻 ✦ 」</h1>
        <div className='flex items-center gap-5'>
            <span>{mobNumber}</span>
            {socialAccounts.map((socialacc,index)=>{
                const Icon = socialacc.Icon;
                return <Link href={socialacc.link} key={index} aria-label={socialacc.label}>
                    <Icon className='w-5 h-5 hover:scale-125 transition-all' />
                </Link>
            })}
        </div>
    </nav>
  )
}
