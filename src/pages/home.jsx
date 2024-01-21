import React from 'react'
import GetTravelPlan from '../utility/gemini'

export default function Home() {

    console.log("planning....")

    // age, interests, startDate, endDate
    return (
        <>
            <div>
               meow home
               <GetTravelPlan location={"rome"} age={"18"} interests={"architecture"} startDate={"february 8"} endDate={"february 11"} />
            </div>
        </>
    )
}