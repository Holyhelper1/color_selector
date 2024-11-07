// самый стабильный вариант 1.1 новая версия
type HSL = { h: number; s: number; l: number };


export function parseHsl(hslString: string): HSL {
    const hslRegex = /hsl\((\d+),\s*(\d+)%?,\s*(\d+)%?\)/;
    const match = hslString.match(hslRegex);
    
    if (!match) {
        throw new Error("Invalid HSL format");
    }

    const [_, h, s, l] = match;
    return {
        h: parseInt(h, 10),
        s: parseInt(s, 10),
        l: parseInt(l, 10),
    };
}

/**
 * @param newColorString 
 * @returns 
*/

// попробовать добавить значение х2 для кнопки окраска в 2 слоя
export function calculateHslDifference(newColorString: string): string { 
    const baseColor: HSL = { h: 120, s: 67, l: 54 };
    const newColor = parseHsl(newColorString);
    
    // Корректировка hue, saturation и lightness
    const hueDifference = (newColor.h - baseColor.h * 1.02).toFixed(5);
    const saturationDifference = (newColor.s / baseColor.s * 0.29).toFixed(7); // С X1 корректировкой нормальное значение * 0.29)
    const brightnessDifference = ((newColor.l / baseColor.l) * 0.85).toFixed(6); // С X1 корректировкой нормальное значение * 0.85)
    
    const hueRotate = `hue-rotate(${hueDifference}deg)`;
    const saturate = `saturate(${saturationDifference})`;
    const brightness = `brightness(${brightnessDifference})`;
    
    return `${hueRotate} ${saturate} ${brightness}`;
}


// // самый стабильный вариант 1.0
// export function calculateColorChange(targetHSL: string) {
//   const originalColor = "hsl(120, 67%, 54%)";// работает с этим обычно
//   // const originalColor = "hsl(0, 0%, 74%)";

//   const regex = /hsl\(\s*([0-9]+)\s*,\s*([0-9]+)%\s*,\s*([0-9]+)%\s*\)/;

//   const originalMatch = originalColor.match(regex);
//   const targetMatch = targetHSL.match(regex);

//   if (!originalMatch || !targetMatch) {
//     throw new Error("Invalid HSL input");
//   }

//   const originalHue = parseFloat(originalMatch[1]);
//   const originalSaturation = parseFloat(originalMatch[2]);
//   const originalLightness = parseFloat(originalMatch[3]);

//   const targetHue = parseFloat(targetMatch[1]);
//   const targetSaturation = parseFloat(targetMatch[2]);
//   const targetLightness = parseFloat(targetMatch[3]);

//   const hueToWhite = 0 - originalHue;
//   const saturationToWhite = 0 - originalSaturation;
//   const lightnessToWhite = 100 - originalLightness; // было значение 100

//   const finalHueChange = targetHue;
//   const finalSaturation = targetSaturation;
//   const finalLightness = targetLightness;

//   return `hue-rotate(${
//     hueToWhite + finalHueChange
//   }deg) saturate(${finalSaturation}%) brightness(${finalLightness}%)`;
// }
 