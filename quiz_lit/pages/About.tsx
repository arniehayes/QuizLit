import React from "react";

export interface API {
    category: string
    id: string
    correctAnswer: string
    incorrectAnswers: string[]
    question: string
    tags: string[]
    difficulty: string

}


const About = ({apiCall}: API) => {
    return (
        <div>
            {apiCall}
        </div>
    );
};

export default About;

export const getStaticProps = async () => {
    const apiCall: API = await fetch(
        "https://the-trivia-api.com/api/questions?categories=arts_and_literature&limit=20&difficulty=easy"
    ).then((response) => response.json());
    console.log(apiCall);
    return {
        props: {
            apiCall
        },
    };
};