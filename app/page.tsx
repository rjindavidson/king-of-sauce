"use client"

import { useEffect, useState } from "react";
import Background from "./components/background";
import Gallery from "./components/gallery";

export default function Home() {
  const [favorites, setFavorites] = useState(false)
  const [quick, setQuick] = useState(false)
  const [light, setLight] = useState(false)
  const [special, setSpecial] = useState(false)


  return (
    <main className="">
      <Background />
      <div className="pt-16">
        <div className="flex align-middle justify-center">
          <h1 className="text-3xl font-bold text-orange-600">Recipes</h1>
        </div>
        <div className="flex align-middle justify-center pt-8 gap-2">
            <button className={`border-2 border-black rounded p-1 text-white hover:bg-slate-400 ${favorites ? 'bg-slate-400' : 'bg-slate-600'}`}
              onClick={() => setFavorites(!favorites)}
            >
              Favorite
            </button>
            <button className={`border-2 border-black rounded p-1 text-white hover:bg-slate-400 ${quick ? 'bg-slate-400' : 'bg-slate-600'}`}
              onClick={() => setQuick(!quick)}
            >
              Quick
            </button>
            <button className={`border-2 border-black rounded p-1 text-white hover:bg-slate-400 ${light ? 'bg-slate-400' : 'bg-slate-600'}`}
              onClick={() => setLight(!light)}
            >
              Light
            </button>
            <button className={`border-2 border-black rounded p-1 text-white hover:bg-slate-400 ${special ? 'bg-slate-400' : 'bg-slate-600'}`}
              onClick={() => setSpecial(!special)}
            >
              Special
            </button>
        </div>
      </div>
      <div className="m-auto mt-16 p-4 w-9/12 border-4 rounded-lg border-amber-500">
        <Gallery favorites={favorites} quick={quick} light={light} special={special}/>
      </div>
    </main>
  );
}
