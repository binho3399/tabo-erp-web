import React, { useState } from 'react';
import Icon from './Icon';

interface AccordionItemProps {
    question: string;
    answer: string;
    isOpen: boolean;
    onClick: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ question, answer, isOpen, onClick }) => {
    return (
        <div className={`group rounded-[20px] overflow-hidden transition-all duration-300 bg-white ${isOpen ? 'shadow-xl shadow-blue-500/5' : 'shadow-md hover:shadow-lg'}`}>
            <button
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                onClick={onClick}
            >
                <span className={`text-[20px] font-medium leading-snug transition-colors duration-300 ${isOpen ? 'text-blue-600' : 'text-slate-800'}`}>
                    {question}
                </span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${isOpen ? 'bg-blue-600 text-white rotate-180' : 'bg-white text-slate-400 group-hover:text-blue-500'}`}>
                    <Icon name="expand_more" className="text-xl" />
                </div>
            </button>
            <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
            >
                <div className="px-6 pb-6 pt-1 text-[16px] text-slate-500 font-light leading-relaxed">
                    {answer}
                </div>
            </div>
        </div>
    );
};

interface AccordionProps {
    items: { question: string; answer: string }[];
    allowMultiple?: boolean;
    className?: string;
    columns?: number;
}

const Accordion: React.FC<AccordionProps> = ({ items, allowMultiple = false, className = "", columns = 1 }) => {
    const [openIndexes, setOpenIndexes] = useState<number[]>([]);

    const toggleIndex = (index: number) => {
        if (allowMultiple) {
            setOpenIndexes(prev => 
                prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
            );
        } else {
            setOpenIndexes(prev => prev.includes(index) ? [] : [index]);
        }
    };

    if (columns === 2) {
        const midPoint = Math.ceil(items.length / 2);
        const leftItems = items.slice(0, midPoint);
        const rightItems = items.slice(midPoint);

        return (
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 ${className}`}>
                <div className="space-y-4">
                    {leftItems.map((item, i) => (
                        <AccordionItem
                            key={i}
                            question={item.question}
                            answer={item.answer}
                            isOpen={openIndexes.includes(i)}
                            onClick={() => toggleIndex(i)}
                        />
                    ))}
                </div>
                <div className="space-y-4">
                    {rightItems.map((item, i) => (
                        <AccordionItem
                            key={i + midPoint}
                            question={item.question}
                            answer={item.answer}
                            isOpen={openIndexes.includes(i + midPoint)}
                            onClick={() => toggleIndex(i + midPoint)}
                        />
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className={`space-y-4 ${className}`}>
            {items.map((item, i) => (
                <AccordionItem
                    key={i}
                    question={item.question}
                    answer={item.answer}
                    isOpen={openIndexes.includes(i)}
                    onClick={() => toggleIndex(i)}
                />
            ))}
        </div>
    );
};

export default Accordion;
