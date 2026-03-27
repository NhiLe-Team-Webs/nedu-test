"use client";

import React, { useState, useCallback } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { WelcomeScreen } from '@/components/quiz/WelcomeScreen';
import { StageSelectionScreen } from '@/components/quiz/StageSelectionScreen';
import { MaxDiffSetScreen } from '@/components/quiz/MaxDiffSetScreen';
import { AnalyzingScreen } from '@/components/quiz/AnalyzingScreen';
import { ResultScreen } from '@/components/quiz/ResultScreen';
import { ProgressBar } from '@/components/ui/ProgressBar';
import { PERSONAS } from '@/data/maxdiff-data';
import { calculateMaxDiffScores } from '@/lib/scoring';
import type { SetAnswer, AssessmentResult, Persona } from '@/types/assessment';

import { AdvancedTestScreen } from '@/components/quiz/AdvancedTestScreen';

type StepType = 'welcome' | 'personaSelect' | 'maxdiff' | 'analyzing' | 'result' | 'flowerTest';

export default function Home() {
  const [step, setStep] = useState<StepType>('welcome');
  const [personaId, setPersonaId] = useState<string>('');
  const [currentSetIndex, setCurrentSetIndex] = useState(0);
  const [setAnswers, setSetAnswers] = useState<SetAnswer[]>([]);
  const [assessmentResult, setAssessmentResult] = useState<AssessmentResult | null>(null);

  const persona: Persona | undefined = personaId ? PERSONAS[personaId] : undefined;
  const totalSets = persona?.sets.length ?? 0;

  // Handle persona selection
  const handlePersonaSelect = useCallback((id: string) => {
    setPersonaId(id);
    setCurrentSetIndex(0);
    setSetAnswers([]);
    setStep('maxdiff');
  }, []);

  // Handle MaxDiff set answer
  const handleSetAnswer = useCallback((answer: SetAnswer) => {
    const newAnswers = [...setAnswers, answer];
    setSetAnswers(newAnswers);

    if (currentSetIndex >= totalSets - 1) {
      // All sets answered → calculate & show result
      setStep('analyzing');
      const result = calculateMaxDiffScores(persona!, newAnswers);
      setAssessmentResult(result);
      setTimeout(() => setStep('result'), 2500);
    } else {
      setCurrentSetIndex(prev => prev + 1);
    }
  }, [setAnswers, currentSetIndex, totalSets, persona]);


  // Handle restart
  const handleRestart = useCallback(() => {
    setStep('welcome');
    setPersonaId('');
    setCurrentSetIndex(0);
    setSetAnswers([]);
    setAssessmentResult(null);
  }, []);

  // Handle back navigation from MaxDiff
  const handleMaxDiffBack = useCallback(() => {
    if (currentSetIndex > 0) {
      // Go back to previous set, remove last answer
      setCurrentSetIndex(prev => prev - 1);
      setSetAnswers(prev => prev.slice(0, -1));
    } else {
      setStep('personaSelect');
    }
  }, [currentSetIndex]);

  // Handle advanced test start
  const handleAdvancedTestStart = () => {
    setStep('flowerTest');
  };

  // Handle back to result
  const handleBackToResult = () => {
    setStep('result');
  };

  // Calculate progress
  const getProgress = () => {
    switch (step) {
      case 'welcome': return 0;
      case 'personaSelect': return 10;
      case 'maxdiff': return 10 + ((currentSetIndex / totalSets) * 80);
      case 'analyzing': return 95;
      case 'result': return 100;
      case 'flowerTest': return 100;
      default: return 0;
    }
  };

  const renderCurrentStep = () => {
    switch (step) {
      case 'welcome':
        return <WelcomeScreen onStart={() => setStep('personaSelect')} />;

      case 'personaSelect':
        return <StageSelectionScreen onSelect={handlePersonaSelect} />;

      case 'maxdiff':
        if (!persona) return null;
        return (
          <MaxDiffSetScreen
            persona={persona}
            currentSetIndex={currentSetIndex}
            totalSets={totalSets}
            onAnswer={handleSetAnswer}
            onBack={handleMaxDiffBack}
          />
        );

      case 'analyzing':
        return <AnalyzingScreen />;

      case 'result':
        if (!assessmentResult || !persona) return null;
        return (
          <ResultScreen
            result={assessmentResult}
            persona={persona}
            onRestart={handleRestart}
            onAdvancedTestStart={handleAdvancedTestStart}
          />
        );
        
      case 'flowerTest':
        if (!persona) return null;
        return (
          <AdvancedTestScreen 
            onBackToResult={handleBackToResult}
            persona={persona}
          />
        );
    }
  };

  return (
    <main className="flex-1 flex flex-col items-center justify-center relative w-full min-h-[100dvh] bg-[#FDFCFB] md:py-12">
      <ProgressBar progress={getProgress()} />

      <div className="w-full max-w-xl flex flex-col justify-center bg-white min-h-[100dvh] md:min-h-[auto] md:rounded-3xl md:shadow-lg md:border border-[#F0EBE5] overflow-x-hidden p-6 md:p-12 relative z-10 transition-all duration-300">
        {renderCurrentStep()}

        <footer className="hidden md:flex mt-12 text-[#A39A92] items-center justify-center gap-2 opacity-60">
          <CheckCircle2 size={14} />
          <span className="text-xs tracking-widest uppercase font-medium">N-Education Ecosystem | 2026</span>
        </footer>
      </div>
    </main>
  );
}
