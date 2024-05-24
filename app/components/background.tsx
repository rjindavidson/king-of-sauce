"use client"

import Image from 'next/image';
import valley from "@/public/recipe-bg.png"

export default function Background() {
    return (
        <Image 
            className="-z-10"
            alt="Valley"
            src={valley}
            placeholder='blur'
            quality={100}
            fill
            sizes="100vw"
            style={{
                objectFit: 'cover',
            }}
        />
    )
}