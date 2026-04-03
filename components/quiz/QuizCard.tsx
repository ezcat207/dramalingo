'use client';

import { useState } from 'react';
import confetti from 'canvas-confetti';
import type { Quiz } from '@/lib/types';

interface QuizCardProps {
  quiz: Quiz;
  onAnswer: (isCorrect: boolean) => void;
  quizNumber: number;
  totalQuizzes: number;
}

export default function QuizCard({
  quiz,
  onAnswer,
  quizNumber,
  totalQuizzes,
}: QuizCardProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [hasAnswered, setHasAnswered] = useState(false);
  const [isShaking, setIsShaking] = useState(false);

  const handleAnswerSelect = (index: number) => {
    if (hasAnswered) return;

    setSelectedAnswer(index);
    setHasAnswered(true);

    const isCorrect = index === quiz.correctAnswer;

    if (isCorrect) {
      // Trigger confetti for correct answer
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#6366f1', '#8b5cf6', '#ec4899'],
      });
      onAnswer(true);
    } else {
      // Trigger shake animation for wrong answer
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 500);
      onAnswer(false);
    }
  };

  const getOptionClassName = (index: number) => {
    const baseClass =
      'w-full p-4 rounded-xl text-left transition-all cursor-pointer border-2';

    if (!hasAnswered) {
      return `${baseClass} border-gray-200 bg-white hover:border-indigo-500 hover:bg-indigo-50`;
    }

    if (index === quiz.correctAnswer) {
      return `${baseClass} border-green-500 bg-green-50 text-green-900`;
    }

    if (index === selectedAnswer && index !== quiz.correctAnswer) {
      return `${baseClass} border-red-500 bg-red-50 text-red-900`;
    }

    return `${baseClass} border-gray-200 bg-gray-50 text-gray-500 cursor-not-allowed`;
  };

  const getOptionIcon = (index: number) => {
    if (!hasAnswered) {
      return (
        <div className="w-6 h-6 rounded-full border-2 border-gray-300 flex items-center justify-center">
          <div className="w-3 h-3 rounded-full" />
        </div>
      );
    }

    if (index === quiz.correctAnswer) {
      return (
        <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
          <svg
            className="w-4 h-4 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
      );
    }

    if (index === selectedAnswer && index !== quiz.correctAnswer) {
      return (
        <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center">
          <svg
            className="w-4 h-4 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
      );
    }

    return (
      <div className="w-6 h-6 rounded-full border-2 border-gray-300 flex items-center justify-center opacity-50">
        <div className="w-3 h-3 rounded-full" />
      </div>
    );
  };

  return (
    <div
      className="bg-white rounded-2xl shadow-lg p-6 md:p-8"
      style={
        isShaking
          ? {
              animation: 'shake 0.5s ease-in-out',
            }
          : undefined
      }
    >
      {/* Progress */}
      <div className="flex items-center justify-between mb-4">
        <div className="text-sm font-medium text-gray-500">
          Question {quizNumber} of {totalQuizzes}
        </div>
        <div className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-semibold">
          {quiz.type
            .split('-')
            .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
            .join(' ')}
        </div>
      </div>

      {/* Question */}
      <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
        {quiz.question}
      </h3>

      {/* Options */}
      <div className="space-y-3 mb-6">
        {quiz.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswerSelect(index)}
            disabled={hasAnswered}
            className={getOptionClassName(index)}
          >
            <div className="flex items-center gap-3">
              {getOptionIcon(index)}
              <span className="flex-1 font-medium">{option}</span>
            </div>
          </button>
        ))}
      </div>

      {/* Explanation (shown after answering) */}
      {hasAnswered && (
        <div
          className={`p-4 rounded-lg ${
            selectedAnswer === quiz.correctAnswer
              ? 'bg-green-50 border border-green-200'
              : 'bg-blue-50 border border-blue-200'
          }`}
        >
          <div className="flex items-start gap-2">
            <div className="mt-0.5">
              {selectedAnswer === quiz.correctAnswer ? '✅' : 'ℹ️'}
            </div>
            <div>
              <p className="font-semibold text-gray-900 mb-1">
                {selectedAnswer === quiz.correctAnswer
                  ? 'Correct!'
                  : 'Not quite...'}
              </p>
              <p className="text-sm text-gray-700">{quiz.explanation}</p>
            </div>
          </div>
        </div>
      )}

      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes shake {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-10px); }
            75% { transform: translateX(10px); }
          }
        `
      }} />
    </div>
  );
}
