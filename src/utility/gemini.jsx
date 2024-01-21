import React, { useState, useEffect } from 'react';

const GetTravelPlan = ({ location, age, interests, startDate, endDate }) => {

    const [streamData, setStreamData] = useState('');
    const [streamComplete, setStreamComplete] = useState(false); // New state variable

    var prompt = `
    Give me a travel itenery to greek.

    I am ` + age + ` year old.

    I am interested in ` + interests + `.

    I will be there from ` + startDate + ` to ` + endDate +`.

    Please give your response per day in the following format:

    [Day #] (Date) in bold
    [Time] Location - Description

    For example:
    Day 1: (March 8)
    - Morning: going to the art gallery.
    - Aftnoon: going to the fountain.
    - Night: going to the night market.

    Day 2: (March 9)
    - Morning: going to the church.
    - Aftnoon: going to the train station.
    - Night: going to the play.
    `

    console.log(prompt)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://strawberry.vercel.app/api/gemini?api_key=' + import.meta.env.VITE_STRAWBERRY_APIKEY + '&prompt=' + prompt, { method: 'GET' });

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const reader = response.body.getReader();
                const decoder = new TextDecoder('utf-8');

                while (true) {
                    const { value, done } = await reader.read();
                    if (done) {
                        setStreamComplete(true); // Update state when stream is complete
                        break;
                    }

                    const chunk = decoder.decode(value, { stream: true });
                    console.log(chunk);
                    setStreamData(prevData => prevData + chunk);
                }
            } catch (error) {
                console.error('Fetch error:', error);
            }
        };

        fetchData();
    }, []);

    const days = streamData.split('**').filter(entry => entry.trim() !== '');

    // Function to render text with newlines as <br />
    const renderTextWithLineBreaks = (text) => {
        return text.split('\n').map((line, index) => {
            // Only render non-empty lines
            return line.trim() !== '' ? (
                <span key={index}>
                    {line}
                    <br />
                </span>
            ) : null;
        });
    };

    return streamComplete ? (
        <div>
            {days.map((day, index) => (
                <div className='bg-slate-500 m-3' key={index}>
                    <h3>{day.split('\n')[0]}</h3> {/* Day title */}
                    <div>{renderTextWithLineBreaks(day.split('\n').slice(1).join('\n'))}</div> {/* Day's activities */}
                </div>
            ))}
        </div>
    ) : (
        <div>Loading...</div> // Or any other placeholder
    );
};

export default GetTravelPlan;