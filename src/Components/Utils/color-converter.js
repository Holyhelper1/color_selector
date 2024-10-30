export function hexToFilter(hex) {
    // Преобразование HEX в RGB
    let r = parseInt(hex.slice(1, 3), 16);
    let g = parseInt(hex.slice(3, 5), 16);
    let b = parseInt(hex.slice(5, 7), 16);
    
    // Преобразование RGB в HSL
    r /= 255; g /= 255; b /= 255;
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;

    if (max === min) {
        h = s = 0; // Значение цвета если он серый
    } else {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }

    // Преобразование HSL в значения фильтров
    // Нормализуем H в градусы
    h = h * 360;

    // Настройки насыщенности и яркости
    const saturation = s + 1; // Увеличиваем насыщенность
    const brightness = l; // Используем яркость в формате [0, 1]

    // Форматируем фильтры
    const filter = `filter: hue-rotate(${h.toFixed(2)}deg) saturate(${saturation.toFixed(5)}) brightness(${brightness.toFixed(6)});`;

    return   console.log(filter)
}

// Пример использования
// console.log(hexToFilter("#FFFFFF")); 
// Должен вернуть фильтры для белого цвета