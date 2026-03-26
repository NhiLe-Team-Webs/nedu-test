"use client";

import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { WelcomeScreen } from '@/components/quiz/WelcomeScreen';
import { StageSelectionScreen } from '@/components/quiz/StageSelectionScreen';
import { QuestionScreen } from '@/components/quiz/QuestionScreen';
import { AnalyzingScreen } from '@/components/quiz/AnalyzingScreen';
import { ResultScreen } from '@/components/quiz/ResultScreen';
import { ProgressBar } from '@/components/ui/ProgressBar';

type StepType = 'welcome' | 'stageSelection' | 'q1' | 'q2' | 'q3' | 'analyzing' | 'result';

export default function Home() {
  const [step, setStep] = useState<StepType>('welcome');
  const [stageId, setStageId] = useState<string>('');
  
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
    step === 'stageSelection' ? 10 :
    step === 'q1' ? 40 : 
    step === 'q2' ? 70 : 
    100;

  const renderCurrentStep = () => {
    switch (step) {
      case 'welcome':
        return <WelcomeScreen onStart={() => setStep('stageSelection')} />;
        
      case 'stageSelection':
        return (
          <StageSelectionScreen onSelect={(selectedStage) => {
            setStageId(selectedStage);
            setStep('q1');
          }} />
        );

      case 'q1':
        return (
          <QuestionScreen 
            step="q1"
            value={answers.pressure}
            onChange={(val) => setAnswers({ ...answers, pressure: val })}
            onBack={() => setStep('stageSelection')}
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
          setStageId('');
          setStep('welcome');
        }} />;
    }
  };

  return (
    <main className="flex-1 flex flex-col items-center justify-center relative w-full min-h-[100dvh] bg-[#FDFCFB] md:py-12">
      <ProgressBar progress={progress} />

      {/* Main Container - full screen on mobile, styled card on desktop */}
      <div className="w-full max-w-xl flex flex-col justify-center bg-white min-h-[100dvh] md:min-h-[auto] md:rounded-3xl md:shadow-lg md:border border-[#F0EBE5] overflow-x-hidden p-6 md:p-12 relative z-10 transition-all duration-300">
        {renderCurrentStep()}

        {/* Footer hidden on mobile to save space, visible on Desktop */}
        <footer className="hidden md:flex mt-12 text-[#A39A92] items-center justify-center gap-2 opacity-60">
          <CheckCircle2 size={14} />
          <span className="text-xs tracking-widest uppercase font-medium">N-Education Ecosystem | 2026</span>
        </footer>
      </div>
    </main>
  );
}
