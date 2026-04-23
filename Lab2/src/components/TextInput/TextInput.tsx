import React from 'react';
import type { TextInputProps } from '../../types/index.ts'

export const TextInput: React.FC<TextInputProps> = ({
    onTextChange,
    placeholder = 'Start typing...',
    initialValue = ''
}) => {
    return (
        <div className="w-full">
            <textarea
            className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all"
            placeholder={placeholder}
            defaultValue={initialValue}
            onChange={(e) => onTextChange(e.target.value)}
            rows={12}
            />
        </div>
    );
};