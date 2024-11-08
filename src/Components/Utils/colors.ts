interface Color {
  id: number;
  hsl: string;
  colorNum: string;
}

export const colors: Color[] = [
  { id: 4306, colorNum: "4306", hsl: "hsl(31, 53%, 42%)" },
  { id: 4303, colorNum: "4303", hsl: "hsl(47, 59%, 38%)" },
  { id: 4003, colorNum: "4003", hsl: "hsl(29, 85%, 74%)" },
  { id: 4002, colorNum: "4002", hsl: "hsl(72, 55%, 76%)" },
  { id: 4001, colorNum: "4001", hsl: "hsl(47, 51%, 68%)" },
  { id: 2596, colorNum: "2596", hsl: "hsl(49, 58%, 72%)" },
  { id: 1423, colorNum: "T1423", hsl: "hsl(173, 45%, 46%)" },
  { id: 1412, colorNum: "T1412", hsl: "hsl(109, 13%, 59%)" },
  { id: 3021, colorNum: "T3021", hsl: "hsl(30, 69%, 84%)" },
  { id: 5331, colorNum: "5331", hsl: "hsl(322, 25%, 26%)" },
  { id: 6576, colorNum: "6576", hsl: "hsl(227, 35%, 55%)" },

  // Добавляем новые цвета с заметными переходами
  { id: 2001, colorNum: "2001", hsl: "hsl(20, 70%, 50%)" }, 
  { id: 2002, colorNum: "2002", hsl: "hsl(40, 85%, 55%)" }, 
  { id: 2003, colorNum: "2003", hsl: "hsl(60, 70%, 60%)" }, 
  { id: 2004, colorNum: "2004", hsl: "hsl(120, 50%, 50%)" }, 
  { id: 2005, colorNum: "2005", hsl: "hsl(180, 40%, 55%)" }, 
  { id: 2006, colorNum: "2006", hsl: "hsl(240, 60%, 55%)" }, 
  { id: 2007, colorNum: "2007", hsl: "hsl(260, 50%, 55%)" }, 
  { id: 2008, colorNum: "2008", hsl: "hsl(300, 70%, 60%)" }, 
  { id: 2009, colorNum: "2009", hsl: "hsl(340, 80%, 50%)" }, 
  { id: 2010, colorNum: "2010", hsl: "hsl(0, 100%, 75%)" },
];
