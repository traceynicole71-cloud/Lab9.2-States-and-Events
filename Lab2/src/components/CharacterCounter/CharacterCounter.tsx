import React, { useState, useEffect } from 'react';
import { TextInput } from '../TextInput/TextInput';
import { StatsDisplay } from '../StatsDisplay/StatsDisplay';

interface CharacterCounterProps {
    minWords?: number;
    maxWords?: number;
}

interface TextStats {
    characterCount: number;
    wordCount: number;
    readingTime: number;
}

export const CharacterCounter: React.FC<CharacterCounterProps> = ({
    minWords = 25,
    maxWords = 100
}) => {

    //State Management track current input
    const [text, setText] = useState('');

    //State Management calculate and update statistics
    const [stats, setStats] = useState<TextStats>({
        characterCount: 0,
        wordCount: 0,
        readingTime: 0,
    });
    //Component Implementation calculate statistics in real time
    //State Management handle edge cases empty input and long text
    useEffect(() => {
        const trimmedText = text.trim();
        const words = trimmedText ? trimmedText.split(/\s+/).length : 0;
        const chars = text.length;

        const readingMinutes = words / 200;

        setStats({
            characterCount: chars,
            wordCount: words,
            readingTime: readingMinutes,
        });
    }, [text]);

    return (
        <div className="max-w-2xl mx-auto p-8">
            <header className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900">Character Counter</h1>
                <p className="text-gray-600">Analyze your text metrics in real-time.</p>
            </header>
            {/* passing data via props*/}
            <StatsDisplay
            stats={stats}
            />
{/*Component Implementation event handler for text changes*/}
            <TextInput onTextChange={setText} />

        {text.length > 0 && stats.wordCount < minWords && (
            <p className="mt-4 text-amber-600 text-sm italics">
                Keep Writing! You need {minWords - stats.wordCount} more words to hit the minimum requirement.
            </p>
        )}
        {text.length > 0 && stats.wordCount > maxWords && (
            <p className="mt-4 text-red-600 text-sm italics">
                You have exceeded the maximum word limit by {stats.wordCount - maxWords} words.
            </p>
        )}
        </div>
    );
};
