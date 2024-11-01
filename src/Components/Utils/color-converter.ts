export function calculateColorChange(targetHSL: string) {
  const originalColor = "hsl(120, 67%, 54%)";

  const regex = /hsl\(\s*([0-9]+)\s*,\s*([0-9]+)%\s*,\s*([0-9]+)%\s*\)/;

  const originalMatch = originalColor.match(regex);
  const targetMatch = targetHSL.match(regex);

  if (!originalMatch || !targetMatch) {
    throw new Error("Invalid HSL input");
  }

  const originalHue = parseFloat(originalMatch[1]);
  const originalSaturation = parseFloat(originalMatch[2]);
  const originalLightness = parseFloat(originalMatch[3]);

  const targetHue = parseFloat(targetMatch[1]);
  const targetSaturation = parseFloat(targetMatch[2]);
  const targetLightness = parseFloat(targetMatch[3]);

  const hueToWhite = 0 - originalHue;
  const saturationToWhite = 0 - originalSaturation;
  const lightnessToWhite = 100 - originalLightness;

  const finalHueChange = targetHue;
  const finalSaturation = targetSaturation;
  const finalLightness = targetLightness;

  return `hue-rotate(${
    hueToWhite + finalHueChange
  }deg) saturate(${finalSaturation}%) brightness(${finalLightness}%)`;
}
