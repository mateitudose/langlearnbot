import {Button, ScrollShadow, Spacer, Spinner} from "@nextui-org/react";
import {useLocation, useRoute} from "wouter";
import React, {useEffect, useState} from "react";
import Question from "../components/Question.tsx";
import ReadingTestType from "../../../types/ReadingTestType.ts";
import {fetchReadingTest} from "../functions/fetchReadingTest.ts";

export default function Reading() {
    const [matched, params] = useRoute("/reading/:level");
    const [_, setLocation] = useLocation();
    const [loading, setLoading] = useState(true);
    const [readingTest, setReadingTest] = useState<ReadingTestType | null>(null);
    const [finishedTest, setFinishedTest] = useState(false);

    useEffect(() => {
        setLoading(true);
        if (!params?.level) {
            console.error('Missing level parameter');
            setLocation("/");
            return;
        }
        fetchReadingTest(params.level)
            .then((test) => {
                setReadingTest(test);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Failed to generate test: ' + error.message);
                setLocation("/");
            });
    }, []);

    if (!matched) {
        console.error('Invalid route');
        setLocation("/");
        return null;
    }

    if (loading) {
        return (
            <div className="flex flex-col px-3 h-screen bg-neutral-200">
                <div
                    className="flex flex-col justify-center items-center bg-gray-100 h-screen rounded-xl mt-4 mb-4 p-4">
                    <Spinner size={"lg"} color={"primary"}/>
                    <Spacer y={8}/>
                    <p>Generating reading test using AI...</p>
                    <Spacer y={1}/>
                    <p>This may take a few seconds, depending on your internet connection</p>
                </div>
            </div>);
    }

    return (
        <div className="grid grid-cols-2 px-3 h-screen bg-neutral-200 overflow-auto">
            <div className="flex flex-col bg-gray-100 rounded-l-xl rounded-r-none mt-4 mb-4">
                <div className="flex flex-col flex-grow m-4">
                    <h1 className="text-xl font-bold">Test: Reading Comprehension</h1>
                    <h2 className="text-lg font-bold">CEFR level: {params?.level}</h2>
                    <Spacer y={2}/>
                    <p>Read the text below and select the correct answer for each question:</p>
                    <Spacer y={2}/>
                    <ScrollShadow className={"flex-grow w-full h-96 bg-neutral-200 rounded p-2"} isEnabled={false}>
                        {readingTest?.text.map((generatedParagraph, index) => {
                            return (
                                <React.Fragment key={index}>
                                    <p>{generatedParagraph.paragraph}</p>
                                    <Spacer y={2}/>
                                </React.Fragment>
                            );
                        })}
                    </ScrollShadow>
                </div>
            </div>
            <div className="flex flex-col bg-gray-100 rounded-r-xl rounded-l-none mt-4 mb-4 overflow-scroll">
                <div className="flex flex-col flex-grow m-4">
                    {readingTest?.questions.map((question, index) => (
                        <Question key={index} questionData={question} correctOption={question.correct_answer}
                                  finishedTest={finishedTest} index={index}/>
                    ))}
                    <Spacer y={4}/>
                    {finishedTest ? (
                        <Button color={"primary"} onClick={() => setLocation("/")}>Return to home</Button>
                    ) : (
                        <Button color={"primary"} onClick={() => setFinishedTest(true)}>Check answers</Button>
                    )}
                </div>
            </div>
        </div>
    );
}
