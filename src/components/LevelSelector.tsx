import { useState } from 'react';
import { Button } from "@nextui-org/react";

export default function LevelSelector() {
    const [selectedButton, setSelectedButton] = useState("");

    const buttonData = [
        { level: 'A1', color: 'success' as const },
        { level: 'A2', color: 'success' as const },
        { level: 'B1', color: 'warning' as const },
        { level: 'B2', color: 'warning' as const },
        { level: 'C1', color: 'danger' as const },
        { level: 'C2', color: 'danger' as const },
    ];

    const handleButtonClick = (level: string) => {
        setSelectedButton(level);
    };

    return (
        <div className="flex flex-row justify-center">
            {buttonData.map(({ level, color }) => (
                <Button
                    key={level}
                    color={selectedButton ? (level === selectedButton ? color : 'default') : color}
                    radius="none"
                    onClick={() => handleButtonClick(level)}
                >
                    {level}
                </Button>
            ))}
        </div>
    );
}
