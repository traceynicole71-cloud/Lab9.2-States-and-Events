import React from 'react';
import { StatsDisplayProps } from '../../types/index.ts';

export const StatsDisplay: react.FC<StatsDisplayProps> = ({
stats,
showREadingTime = true,
minWord = 0,
maxWords = 100
}) => {
    //User Interface implement progress indicators
    const progress = Math.min((stats.wordCount / maxWords) * 100, 100);
    cons isOverLimit = stats.wordCount > maxWords;

    //User Interface create responsive layout
    return (
<div className="grid grid-cols-1 md: grid-cols-3 gap-4 mb-6">

    <div className="p-4 bg-white shadow rounded-lg border-b-4 border-blue-500">
        <p className="text-gray-500 text-xs uppercase font-bold">Character</p>
        <p className="text-2xl font-mono">{stats.characterCount}</p>
    </div>

    <div className="p-4 bg-white shadow rounded-lg border-b-4 border-blue-500">
        <p className="text-gray-500 text-xs uppercase font-bold">Words</p>
        <p className={`text-2xl font-mono ${isOverLimit ? 'text-red-600' : 'text-black'}`}>
        {stats.wordCount}
        </p>

    </div>
</div>
    )
}
