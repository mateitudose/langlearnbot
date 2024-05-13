import {Button, Radio, RadioGroup, ScrollShadow, Spacer, Spinner} from "@nextui-org/react";
import {useLocation, useRoute} from "wouter";
import {useEffect, useState} from "react";

export default function Reading() {
    const [matched, params] = useRoute("/reading/:level");
    const [_, setLocation] = useLocation();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    if (!matched) {
        setLocation("/");
        return null;
    }

    if (loading) {
        return (
            <div className="flex flex-col px-3 h-screen bg-neutral-200">
                <div className="flex flex-col justify-center items-center bg-gray-100 h-screen rounded-xl mt-4 mb-4 p-4">
                    <Spinner size={"lg"} color={"primary"}/>
                    <Spacer y={2}/>
                    <p>Generating test...</p>
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
                        <p>
                            Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id
                            consequat veniam incididunt duis in sint irure nisi. Mollit officia cillum Lorem ullamco
                            minim nostrud elit officia tempor esse quis.
                        </p>
                        <Spacer y={2}/>
                        <p>
                            Sunt ad dolore quis aute consequat. Magna exercitation reprehenderit magna aute tempor
                            cupidatat consequat elit dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum
                            quis. Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. Et mollit
                            incididunt nisi consectetur esse laborum eiusmod pariatur proident Lorem eiusmod et. Culpa
                            deserunt nostrud ad veniam.
                        </p>
                        <Spacer y={2}/>
                        <p>
                            Est velit labore esse esse cupidatat. Velit id elit consequat minim. Mollit enim excepteur
                            ea laboris adipisicing aliqua proident occaecat do do adipisicing adipisicing ut fugiat.
                            Consequat pariatur ullamco aute sunt esse. Irure excepteur eu non eiusmod. Commodo commodo
                            et ad ipsum elit esse pariatur sit adipisicing sunt excepteur enim.
                        </p>
                        <Spacer y={2}/>
                        <p>
                            Incididunt duis commodo mollit esse veniam non exercitation dolore occaecat ea nostrud
                            laboris. Adipisicing occaecat fugiat fugiat irure fugiat in magna non consectetur proident
                            fugiat. Commodo magna et aliqua elit sint cupidatat. Sint aute ullamco enim cillum anim ex.
                            Est eiusmod commodo occaecat consequat laboris est do duis. Enim incididunt non culpa velit
                            quis aute in elit magna ullamco in consequat ex proident.
                        </p>
                        <Spacer y={2}/>
                        <p>
                            Dolore incididunt mollit fugiat pariatur cupidatat ipsum laborum cillum. Commodo consequat
                            velit cupidatat duis ex nisi non aliquip ad ea pariatur do culpa. Eiusmod proident
                            adipisicing tempor tempor qui pariatur voluptate dolor do ea commodo. Veniam voluptate
                            cupidatat ex nisi do ullamco in quis elit.
                        </p>
                        <Spacer y={2}/>
                        <p>
                            Cillum proident veniam cupidatat pariatur laborum tempor cupidatat anim eiusmod id nostrud
                            pariatur tempor reprehenderit. Do esse ullamco laboris sunt proident est ea exercitation
                            cupidatat. Do Lorem eiusmod aliqua culpa ullamco consectetur veniam voluptate cillum. Dolor
                            consequat cillum tempor laboris mollit laborum reprehenderit reprehenderit veniam aliqua
                            deserunt cupidatat consequat id.
                        </p>
                        <Spacer y={2}/>
                        <p>
                            Est id tempor excepteur enim labore sint aliquip consequat duis minim tempor proident. Dolor
                            incididunt aliquip minim elit ea. Exercitation non officia eu id.
                        </p>
                        <Spacer y={2}/>
                        <p>
                            Ipsum ipsum consequat incididunt do aliquip pariatur nostrud. Qui ut sint culpa labore
                            Lorem. Magna deserunt aliquip aute duis consectetur magna amet anim. Magna fugiat est
                            nostrud veniam. Officia duis ea sunt aliqua.
                        </p>
                        <Spacer y={2}/>
                        <p>
                            Ipsum minim officia aute anim minim aute aliquip aute non in non. Ipsum aliquip proident ut
                            dolore eiusmod ad fugiat fugiat ut ex. Ea velit Lorem ut et commodo nulla voluptate veniam
                            ea et aliqua esse id. Pariatur dolor et adipisicing ea mollit. Ipsum non irure proident
                            ipsum dolore aliquip adipisicing laborum irure dolor nostrud occaecat exercitation.
                        </p>
                        <Spacer y={2}/>
                        <p>
                            Culpa qui reprehenderit nostrud aliqua reprehenderit et ullamco proident nisi commodo non
                            ut. Ipsum quis irure nisi sint do qui velit nisi. Sunt voluptate eu reprehenderit tempor
                            consequat eiusmod Lorem irure velit duis Lorem laboris ipsum cupidatat. Pariatur excepteur
                            tempor veniam cillum et nulla ipsum veniam ad ipsum ad aute. Est officia duis pariatur ad
                            eiusmod id voluptate.
                        </p>
                    </ScrollShadow>
                </div>
            </div>
            <div className="flex flex-col bg-gray-100 rounded-r-xl rounded-l-none mt-4 mb-4 overflow-scroll">
                <div className="flex flex-col flex-grow m-4">
                    <p className="font-bold">Question 1</p>
                    <Spacer y={1}/>
                    <p>What is the main topic of the text?</p>
                    <Spacer y={1}/>
                    <RadioGroup>
                        <Radio value="A">Buenos Aires</Radio>
                        <Radio value="B">Sydney</Radio>
                        <Radio value="C">San Francisco</Radio>
                        <Radio value="D">London</Radio>
                    </RadioGroup>
                    <Spacer y={2}/>
                    <p className="font-bold">Question 2</p>
                    <Spacer y={1}/>
                    <p>What is the main topic of the text?</p>
                    <Spacer y={1}/>
                    <RadioGroup>
                        <Radio value="A">Buenos Aires</Radio>
                        <Radio value="B">Sydney</Radio>
                        <Radio value="C">San Francisco</Radio>
                        <Radio value="D">London</Radio>
                    </RadioGroup>
                    <Spacer y={2}/>
                    <p className="font-bold">Question 2</p>
                    <Spacer y={1}/>
                    <p>What is the main topic of the text?</p>
                    <Spacer y={1}/>
                    <RadioGroup>
                        <Radio value="A">Buenos Aires</Radio>
                        <Radio value="B">Sydney</Radio>
                        <Radio value="C">San Francisco</Radio>
                        <Radio value="D">London</Radio>
                    </RadioGroup>
                    <Spacer y={2}/>
                    <p className="font-bold">Question 2</p>
                    <Spacer y={1}/>
                    <p>What is the main topic of the text?</p>
                    <Spacer y={1}/>
                    <RadioGroup>
                        <Radio value="A">Buenos Aires</Radio>
                        <Radio value="B">Sydney</Radio>
                        <Radio value="C">San Francisco</Radio>
                        <Radio value="D">London</Radio>
                    </RadioGroup>
                    <Spacer y={2}/>
                    <p className="font-bold">Question 2</p>
                    <Spacer y={1}/>
                    <p>What is the main topic of the text?</p>
                    <Spacer y={1}/>
                    <RadioGroup>
                        <Radio value="A">Buenos Aires</Radio>
                        <Radio value="B">Sydney</Radio>
                        <Radio value="C">San Francisco</Radio>
                        <Radio value="D">London</Radio>
                    </RadioGroup>
                    <Spacer y={4}/>
                    <Button color={"primary"}>Check answers</Button>
                </div>
            </div>
        </div>
    );
}
