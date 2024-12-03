import React from 'react'
import Link from 'next/link'

const PastWorkHero = () => {
  return (
    <div className="flex flex-col items-center m-4">
      <Link href="/gallery">
        <button className="bg-yellow-400 text-black px-8 py-4 rounded-sm text-xl tracking-tight font-bold hover:bg-yellow-400 transition-colors">
          Check out our past work
        </button>
      </Link>
    </div>
  )
}

export default PastWorkHero