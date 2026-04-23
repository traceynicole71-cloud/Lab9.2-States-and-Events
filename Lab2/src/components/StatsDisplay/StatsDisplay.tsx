import React from 'react';
import type { StatsDisplayProps } from '../../types/index.ts';

export const StatsDisplay: React.FC<StatsDisplayProps> = ({
stats,
showReadingTime = true,
minWords = 0,
maxWords = 100
}) => {
    //User Interface implement progress indicators
    const progress = Math.min((stats.wordCount / maxWords) * 100, 100);
    const isOverLimit = stats.wordCount > maxWords;

    //User Interface create responsive layout
    return (
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">

    <div className="p-4 bg-white shadow rounded-lg border-b-4 border-blue-500">
        <p className="text-gray-500 text-xs uppercase font-bold">Character</p>
        <p className="text-2xl font-mono">{stats.characterCount}</p>
    </div>

    <div className="p-4 bg-white shadow rounded-lg border-b-4 border-blue-500">
        <p className="text-gray-500 text-xs uppercase font-bold">Words</p>
        <p className={`text-2xl font-mono ${isOverLimit ? 'text-red-600' : 'text-black'}`}>
        {stats.wordCount}
        </p>
        {/*User Interface progress indicator*/}
        <div className="w-full bg-gray-200 h-1.5 rounded-full mt-2"> 
            <div className={`h-1.5 rounded-full transition-all ${isOverLimit ? 'bg-red-500' : 'bg-green-500'}`}
            style={{ width: `${progress}%` }}>
            </div>
        </div>
        <p className="text-[10px] text-gray-400 mt-1">Min: {minWords} | Max: {maxWords}</p>
    </div>

    {/*Component Communication handle optional props*/}
    {showReadingTime && (
        <div className="p-4 bg-white shadow rounded-lg border-b-4 border-purple-500">
            <p className="text-gray-500 text-xs uppercase font-bold">Reading Time</p>
            <p className="text-2xl font-mono">
                {Math.floor(stats.readingTime)}:
                {Math.round((stats.readingTime % 1) * 60).toString().padStart(2, '0')}
            </p>
        </div>
    )};
</div>
