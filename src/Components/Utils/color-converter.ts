// самый стабильный вариант 1.1 новая версия
type HSL = { h: number; s: number; l: number };

export function parseHsl(hslString: string): HSL {
  const hslRegex = /hsl\((\d+),\s*(\d+)%?,\s*(\d+)%?\)/;
  const match = hslString.match(hslRegex);

  if (!match) {
    throw new Error("Invalid HSL format");
  }

  const [, h, s, l] = match;
  return {
    h: parseInt(h, 10),
    s: parseInt(s, 10),
    l: parseInt(l, 10),
  };
}

/**
 * Вычисляет разницу в HSL между базовым цветом и новым цветом.
 * 
 * @param {string} newColorString - Строка нового цвета в формате HSL для filter:.
 * @param {boolean} [double] - Опциональный параметр, который определяет 
 *                               поведение функции. Если true, применяется 
 *                               другая логика вычисления.
 * @returns {string} - Условный CSS-код с изменениями по HSL.
 */
export function calculateHslDifference(
  newColorString: string,
  double?: boolean
): string {
  const baseColor: HSL = { h: 120, s: 67, l: 54 };
  const newColor = parseHsl(newColorString);

  const saturationX1 = double ? 0.48 : 0.29;
  const brightnessX1 = double ? 0.65 : 0.85;

  const hueDifference = (newColor.h - baseColor.h * 1.02).toFixed(5);
  const saturationDifference = ((newColor.s / baseColor.s) * saturationX1 ).toFixed(7); // С X1 корректировкой нормальное значение * 0.29)
  const brightnessDifference = ((newColor.l / baseColor.l) * brightnessX1).toFixed(6); // С X1 корректировкой нормальное значение * 0.85)

  const hueRotate = `hue-rotate(${hueDifference}deg)`;
  const saturate = `saturate(${saturationDifference})`;
  const brightness = `brightness(${brightnessDifference})`;

  return `${hueRotate} ${saturate} ${brightness}`;
}
