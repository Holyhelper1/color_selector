export function parseCssColor(colorString: string) {
    const regex = /hue-rotate\(([^)]+)\)|saturate\(([^)]+)\)|brightness\(([^)]+)\)/g;
    let hue = 0;
    let saturation = 100;
    let brightness = 100;
    
    let match;
    
    while ((match = regex.exec(colorString)) !== null) {
      if (match[1] !== undefined) {
        hue += parseFloat(match[1]); // добавляем оттенок
      }
      if (match[2] !== undefined) {
        saturation *= parseFloat(match[2]) / 100; // умножаем на насыщенность
      }
      if (match[3] !== undefined) {
        brightness *= parseFloat(match[3]) / 100; // умножаем на яркость
      }
    }
    
    // Учитываем, что hue должен быть в диапазоне [0, 360]
    hue = (hue % 360 + 360) % 360;
    
    // Вычисляем lightness как (1 - brightness) * (100 - saturation)
    const lightness = (1 - (brightness / 100)) * (100 - saturation);
    
    // Преобразуем saturation и lightness в процентный формат
    return `hsl(${Math.round(hue)}, ${Math.round(saturation)}%, ${Math.round(lightness)}%)`;
  }
  
  // Пример использования
  const colorInput = "hue-rotate(-89deg) saturate(53%) brightness(42%)";
  const hslColor = parseCssColor(colorInput);
  console.log("hslColor test: ", hslColor); // Пример выводит: hsl(0, 51%, 68%"); // Пример выводит: hsl(xxx, yyy%, zzz%)
  