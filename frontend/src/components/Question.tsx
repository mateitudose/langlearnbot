import {Radio, RadioGroup, Spacer} from "@nextui-org/react";
import type QuestionType from "../../../types/QuestionType.ts";
import {useState} from "react";

export default function Question({questionData, index, finishedTest, correctOption}: {
    questionData: QuestionType,
    index: number,
    finishedTest: boolean,
    correctOption: string
}) {
    const [chosenOption, setChosenOption] = useState<string>("");

    const handleOptionChange = (option: string) => {
        setChosenOption(option);
    };

    return (
        <div className="flex flex-col">
            <p className="font-bold">Question {index + 1}</p>
            <Spacer y={1}/>
            <p>{questionData.question}</p>
            <Spacer y={1}/>
            <RadioGroup value={chosenOption} onValueChange={handleOptionChange}>
                {questionData.answers.map((answer, index) => {
                    const isCorrect = answer.option === correctOption;
                    const isChosen = answer.option === chosenOption;
                    return (
                        <Radio
                            value={answer.option}
                            key={index}
                            classNames={finishedTest
                                ? isCorrect
                                    ? {label: "text-green-500"}
                                    : isChosen
                                        ? {label: "text-red-500"}
                                        : {}
                                : {}}
                        >
                            {answer.text}
                        </Radio>
                    );
                })}
            </RadioGroup>
            <Spacer y={2}/>
        </div>
    );
}
