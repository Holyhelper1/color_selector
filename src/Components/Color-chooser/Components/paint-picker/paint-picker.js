import tinycolor from 'tinycolor2';

export const getUpdatedColor = (initialColor, targetColor) => {
    const initialHsv = tinycolor(initialColor).toHsv();
    const targetHsv = tinycolor(targetColor).toHsv();

    // Пример изменения цвета: изменяем оттенок, насыщенность и яркость
    // здесь можно изменять формулу по желанию
    const newH = (initialHsv.h + (targetHsv.h - initialHsv.h)) % 360;
    const newS = Math.min(1, initialHsv.s + (targetHsv.s - initialHsv.s));
    const newV = Math.min(1, initialHsv.v + (targetHsv.v - initialHsv.v));

    return tinycolor({ h: newH, s: newS, v: newV }).toHslString(); // Возвращаем в формате HSL
};
