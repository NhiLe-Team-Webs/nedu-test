/**
 * Rút gọn một số về 1 chữ số, ngoại trừ các Master Numbers.
 */
function digitalRoot(n: number, masterNumbers = [11, 22, 33]): number {
  while (n > 9 && !masterNumbers.includes(n)) {
    n = String(n)
      .split('')
      .reduce((s, d) => s + +d, 0);
  }
  return n;
}

/**
 * Tính Số Đường Đời (Life Path Number) dựa vào ngày tháng năm sinh dương lịch.
 * @param dob Ngày sinh định dạng YYYY-MM-DD
 */
export function calculateLifePath(dob: string): number | null {
  if (!dob) return null;
  const digits = dob.replace(/\D/g, '').split('');
  const total = digits.reduce((sum, d) => sum + parseInt(d, 10), 0);
  return digitalRoot(total);
}

// Bảng ánh xạ chữ cái Pythagorean
const PYTHAGOREAN_MAP: Record<string, number> = {
  a: 1, j: 1, s: 1,
  b: 2, k: 2, t: 2,
  c: 3, l: 3, u: 3,
  d: 4, m: 4, v: 4,
  e: 5, n: 5, w: 5,
  f: 6, o: 6, x: 6,
  g: 7, p: 7, y: 7,
  h: 8, q: 8, z: 8,
  i: 9, r: 9,
};

const VOWELS = ['a', 'e', 'i', 'o', 'u', 'y'];

function normalizeName(name: string): string {
  return name
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // remove accents
    .replace(/đ/g, 'd')
    .replace(/[^a-z]/g, ''); // chỉ giữ chữ cái
}

/**
 * Tính các chỉ số phụ từ tên.
 */
export function calculateNameNumbers(fullName: string) {
  const normalized = normalizeName(fullName);
  let destinySum = 0;
  let soulSum = 0;
  let personalitySum = 0;

  for (const char of normalized) {
    const val = PYTHAGOREAN_MAP[char] || 0;
    destinySum += val;
    if (VOWELS.includes(char)) {
      soulSum += val;
    } else {
      personalitySum += val;
    }
  }

  return {
    destiny: digitalRoot(destinySum), // Sứ mệnh
    soulUrge: digitalRoot(soulSum),   // Linh hồn
    personality: digitalRoot(personalitySum), // Nhân cách
  };
}

/**
 * Tính toán toàn bộ thông tin Thần Số Học.
 */
export function calculateFullNumerology(dob: string, fullName?: string) {
  const result: any = {
    lifePath: calculateLifePath(dob),
  };

  if (fullName && fullName.trim()) {
    const nameNumbers = calculateNameNumbers(fullName);
    result.destiny = nameNumbers.destiny;
    result.soulUrge = nameNumbers.soulUrge;
    result.personality = nameNumbers.personality;
  }

  return result;
}
