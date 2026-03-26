"use client";

import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { WelcomeScreen } from '@/components/quiz/WelcomeScreen';
import { QuestionScreen } from '@/components/quiz/QuestionScreen';
import { AnalyzingScreen } from '@/components/quiz/AnalyzingScreen';
import { ResultScreen } from '@/components/quiz/ResultScreen';
import { ProgressBar } from '@/components/ui/ProgressBar';

type StepType = 'welcome' | 'q1' | 'q2' | 'q3' | 'analyzing' | 'result';

export default function Home() {
  const [step, setStep] = useState<StepType>('welcome');
  const [answers, setAnswers] = useState({
    pressure: 50,
    awareness: 50,
    connection: 50
  });

  const handleAnalyze = () => {
    setStep('analyzing');
    setTimeout(() => {
      setStep('result');
    }, 3000);
  };

  const progress = 
    step === 'welcome' ? 0 : 
    step === 'q1' ? 33 : 
    step === 'q2' ? 66 : 
    100;

  const renderCurrentStep = () => {
    switch (step) {
      case 'welcome':
        return <WelcomeScreen onStart={() => setStep('q1')} />;
        
      case 'q1':
        return (
          <QuestionScreen 
            step="q1"
            value={answers.pressure}
            onChange={(val) => setAnswers({ ...answers, pressure: val })}
            onBack={() => setStep('welcome')}
            onNext={() => setStep('q2')}
          />
        );
        
      case 'q2':
        return (
          <QuestionScreen 
            step="q2"
            value={answers.awareness}
            onChange={(val) => setAnswers({ ...answers, awareness: val })}
            onBack={() => setStep('q1')}
            onNext={() => setStep('q3')}
          />
        );
        
      case 'q3':
        return (
          <QuestionScreen 
            step="q3"
            value={answers.connection}
            onChange={(val) => setAnswers({ ...answers, connection: val })}
            onBack={() => setStep('q2')}
            onNext={handleAnalyze}
          />
        );

      case 'analyzing':
        return <AnalyzingScreen />;

      case 'result':
        return <ResultScreen onRestart={() => {
          setAnswers({ pressure: 50, awareness: 50, connection: 50 });
          setStep('welcome');
        }} />;
    }
  };

  return (
    <main className="flex-1 flex flex-col items-center justify-center p-4 relative w-full h-full min-h-screen">
      <ProgressBar progress={progress} />

      <div className="max-w-xl w-full bg-white rounded-3xl shadow-sm border border-[#F0EBE5] overflow-hidden p-8 md:p-12 relative z-10 transition-all duration-300">
        {renderCurrentStep()}
      </div>

      <footer className="mt-8 text-[#A39A92] flex items-center gap-2 opacity-60 z-10">
        <CheckCircle2 size={14} />
        <span className="text-xs tracking-widest uppercase font-medium">N-Education Ecosystem | 2026</span>
      </footer>
    </main>
  );
}
