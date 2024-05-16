import {Radio, RadioGroup, Spacer} from "@nextui-org/react";

export default function Question({questionData, index} : {questionData : Question, index: number}) {
    return (
        <div className={"flex flex-col"}>
            <p className="font-bold">Question {index + 1}</p>
            <Spacer y={1}/>
            <p>{questionData.question}</p>
            <Spacer y={1}/>
            <RadioGroup>
                {questionData.answers.map((answer, index) => (
                    <Radio value={answer.option} key={index}>{answer.text}</Radio>
                ))}
            </RadioGroup>
            <Spacer y={2}/>
        </div>
    );
}
