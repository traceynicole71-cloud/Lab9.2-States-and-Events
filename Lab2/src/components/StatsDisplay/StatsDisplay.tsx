import React from 'react';
import type { StatsDisplayProps } from '../../types/index.ts';

export const StatsDisplay: React.FC<StatsDisplayProps> = ({
    stats,
    showReadingTime = true
}) => {
    const minWords = 25;
    const maxWords = 100;
    //Handle edge case
    const wordsRemaining = Math.max(0, minWords - stats.wordCount);
    const progress = Math.min(stats.wordCount / maxWords * 100, 100);

    //User Interface create responsive layout
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {/*Character Card*/}
            <div className="p-4 bg-white shadow rounded-lg border-b-4 border-blue-500">
                <p className="text-gray-500 text-xs uppercase font-bold">Character</p>
                <p className="text-2xl font-mono">{stats.characterCount}</p>
            </div>
            {/*Word Card*/}
            <div className="p-4 bg-white shadow rounded-lg border-b-4 border-green-500">
                <p className="text-gray-500 text-xs uppercase font-bold">
                    {wordsRemaining > 0 ? "Words Remaining" : "Goal Met"}
                </p>
                <p className="text-2xl font-mono">
                    {wordsRemaining}
                </p>
                <div className="w-full bg-gray-200 h-1.5 rounded-full mt-2">
                    <div
                        className="h-1.5 rounded-full bg-green-500 transition-all"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>
                <p className="text-[10px] text-gray-400 mt-1">
                    Current: {stats.wordCount} | Min Required: {minWords}
                </p>
            </div>
            {/*Reading Time Card*/}
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
    );
}