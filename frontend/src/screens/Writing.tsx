import {Button, Modal, ModalContent, Spacer, Spinner, Textarea} from "@nextui-org/react";
import {useLocation, useRoute} from "wouter";
import {useEffect, useState} from "react";
import WritingTestType from "../../../types/WritingTaskType.ts";
import {fetchWritingTask} from "../functions/fetchWritingTask.ts";
import {fetchWritingEvaluation} from "../functions/fetchWritingEvaluation.ts";

export default function Writing() {
    const [matched, params] = useRoute("/writing/:level");
    const [_, setLocation] = useLocation();
    const [loading, setLoading] = useState(true);
    const [writingTask, setWritingTask] = useState<WritingTestType | null>(null);
    const [essay, setEssay] = useState<string>("");
    const [score, setScore] = useState<number | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        setLoading(true);
        if (!params?.level) {
            console.error('Missing level parameter');
            setLocation("/");
            return;
        }
        fetchWritingTask(params.level)
            .then((task) => {
                setWritingTask(task);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Failed to generate task: ' + error.message);
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
                    <p>Generating writing test using AI...</p>
                    <Spacer y={1}/>
                    <p>This may take a few seconds, depending on your internet connection</p>
                </div>
            </div>);
    }

    const handleSubmit = async () => {
        setIsModalOpen(true);
        if (writingTask) {
            const result = await fetchWritingEvaluation({level: params.level, essay, task: writingTask.task});
            console.log(result);
            setScore(result.score);
        }
    };

    return (
        <div className="grid grid-cols-2 px-3 h-screen bg-neutral-200 overflow-auto">
            <div className="flex flex-col bg-gray-100 rounded-l-xl rounded-r-none mt-4 mb-4">
                <div className="flex flex-col flex-grow m-4">
                    <h1 className="text-xl font-bold">Test: Writing capabilities</h1>
                    <h2 className="text-lg font-bold">CEFR level: {params?.level}</h2>
                    <Spacer y={2}/>
                    <Textarea
                        label="Your essay:"
                        placeholder="Write your essay here..."
                        className={"flex flex-col flex-grow w-full h-full"}
                        maxLength={2500}
                        classNames={{inputWrapper: ["!h-full bg-neutral-200"], input: ["!h-full"]}}
                        minRows={10}
                        maxRows={50}
                        disableAutosize
                        value={essay}
                        onChange={(e) => setEssay(e.target.value)}
                    />
                </div>
            </div>
            <div className="flex flex-col bg-gray-100 rounded-r-xl rounded-l-none mt-4 mb-4 overflow-scroll">
                {/* TODO: Simplify this to use less manual Spacers */}
                <div className="flex flex-col flex-grow m-4">
                    <h1 className={"text-xl font-bold"}>Writing Task</h1>
                    <Spacer y={2}/>
                    <p>{writingTask?.task}</p>
                    <Spacer y={4}/>
                    <h1 className="text-xl font-bold">Instructions</h1>
                    <Spacer y={2}/>
                    <p>Write an essay of at least 150 words on the topic above.</p>
                    <Spacer y={2}/>
                    <p>Use the text editor to write your essay.</p>
                    <Spacer y={2}/>
                    <p>When you are finished, click the "Submit" button to submit your essay for evaluation.</p>
                    <Spacer y={4}/>
                    <h1 className="text-xl font-bold">Writing advice</h1>
                    <Spacer y={2}/>
                    <p>1. Plan your essay before you start writing.</p>
                    <Spacer y={1}/>
                    <p>2. Use paragraphs to separate your ideas.</p>
                    <Spacer y={1}/>
                    <p>3. Use linking words to connect your ideas.</p>
                    <Spacer y={1}/>
                    <p>4. Use a variety of vocabulary and grammar.</p>
                    <Spacer y={1}/>
                    <p>5. Check your essay for spelling and grammar mistakes.</p>
                    <Spacer y={4}/>
                    <h1 className="text-xl font-bold">Evaluation criteria</h1>
                    <Spacer y={2}/>
                    <p>Your essay will be automatically evaluated based on the following criteria:</p>
                    <Spacer y={2}/>
                    <p>1. Task achievement (25 points)</p>
                    <Spacer y={1}/>
                    <p>2. Coherence and cohesion (25 points)</p>
                    <Spacer y={1}/>
                    <p>3. Lexical resource (25 points)</p>
                    <Spacer y={1}/>
                    <p>4. Grammatical range and accuracy (25 points)</p>
                    <Spacer y={4}/>
                    <div className={"flex flex-col flex-grow justify-end"}>
                        <Button color={"primary"} onClick={handleSubmit}>Submit</Button>
                    </div>
                    <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                        <ModalContent>
                            {score === null ?
                                <div className={"flex flex-col p-4 items-center justify-center"}>
                                    <Spinner size={"lg"} color={"primary"}/>
                                </div> :
                                <div className={"flex flex-col p-4"}>
                                    <h1 className="text-xl font-bold">Your score: {score}/100</h1>
                                    <Spacer y={2}/>
                                    <p>Your essay has been evaluated. You can close this dialog now.</p>
                                    <Spacer y={4}/>
                                    <Button color={"primary"} onClick={() => setLocation("/")}>Return home</Button>
                                </div>
                            }
                        </ModalContent>
                    </Modal>
                </div>
            </div>
        </div>
    );
}
