import React from 'react'
import Link from 'next/link'

type Props={
    pp:string|null,
    np:string|null,
    topic:string,
    page:string|undefined
}

export default function Footer({pp, np , topic , page}:Props){
    if (!pp && !np) return

    const pageNums: number[] = []
    if (pp && np) {
        for (let i = parseInt(pp) + 1; i < parseInt(np); i++) {
            pageNums.push(i)
        }
    }

    const npArea = np
        ? (
            <Link href={`/results/${topic}/${np}`} className={!pp ? "mx-auto" : ""} >
                {!pp ? "more" : null} &gt;&gt;&gt;
            </Link>
        )
        : null

    const ppArea = pp
        ? (
            <>
                <Link href={`/results/${topic}/${np}`} className={!np ? "mx-auto" : ""} >
                    &lt;&lt;&lt; {!np ? "back" : null}
                </Link>

                {pageNums.map((num, i) => (
                    page && num === parseInt(page)
                        ? <span key={i}>{num}</span>
                        : (
                            <Link key={i} href={`/results/${topic}/${num}`} className="underline"
                            >{num}</Link>
                        )
                ))}
            </>
        )
        : null

    return (
        <footer className= " text-bold mb-44 flex flex-row justify-between items-center px-2 py-4 font-bold w-60 mx-auto">
            {ppArea}
            {npArea}
            sampe
        </footer>
    )
}
