import type { Persona, SetAnswer, ScoredItem, AssessmentResult, CourseMapping } from '@/types/assessment';

/**
 * MaxDiff Scoring Engine
 * Algorithm:
 *  1. Count most/least selections per item across all sets
 *  2. raw_score = most_count - least_count
 *  3. Normalize to 0-100
 *  4. Sort DESC, top 2 = primary problems
 *  5. Map to course recommendations
 *  Tie-breaking: higher most_count wins
 */
export function calculateMaxDiffScores(
  persona: Persona,
  answers: SetAnswer[]
): AssessmentResult {
  // Step 1: Count most/least per item
  const counts: Record<string, { most: number; least: number }> = {};

  for (const problem of persona.problem_pool) {
    counts[problem.id] = { most: 0, least: 0 };
  }

  for (const answer of answers) {
    if (counts[answer.most]) counts[answer.most].most += 1;
    if (counts[answer.least]) counts[answer.least].least += 1;
  }

  // Step 2: Calculate raw scores
  const rawScores: { item_id: string; raw: number; most_count: number; least_count: number }[] = [];
  for (const [item_id, c] of Object.entries(counts)) {
    rawScores.push({
      item_id,
      raw: c.most - c.least,
      most_count: c.most,
      least_count: c.least,
    });
  }

  // Step 3: Normalize to 0-100
  const minRaw = Math.min(...rawScores.map(s => s.raw));
  const maxRaw = Math.max(...rawScores.map(s => s.raw));
  const range = maxRaw - minRaw || 1; // avoid division by zero

  const scoredItems: ScoredItem[] = rawScores.map(s => {
    const problem = persona.problem_pool.find(p => p.id === s.item_id)!;
    return {
      item_id: s.item_id,
      label: problem.label,
      description: problem.description,
      most_count: s.most_count,
      least_count: s.least_count,
      raw_score: s.raw,
      normalized: Math.round(((s.raw - minRaw) / range) * 100),
    };
  });

  // Step 4: Sort DESC with tie-breaking (higher most_count wins)
  scoredItems.sort((a, b) => {
    if (b.normalized !== a.normalized) return b.normalized - a.normalized;
    return b.most_count - a.most_count;
  });

  // Step 5: Top 2 problems
  const topProblems = scoredItems.slice(0, 2);

  // Step 6: Map to course recommendations
  const topProblemIds = topProblems.map(p => p.item_id);
  const matchedCourses: CourseMapping[] = [];

  for (const mapping of persona.course_mapping) {
    const hasMatch = mapping.triggered_by.some(id => topProblemIds.includes(id));
    if (hasMatch) {
      matchedCourses.push(mapping);
    }
  }

  // If no match found (unlikely), fallback to first course
  const recommendedCourses = matchedCourses.length > 0
    ? matchedCourses
    : [persona.course_mapping[0]];

  return {
    persona_id: persona.id,
    persona_label: persona.label,
    scores: scoredItems,
    top_problems: topProblems,
    recommended_courses: recommendedCourses,
  };
}
