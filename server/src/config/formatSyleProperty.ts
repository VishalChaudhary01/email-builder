
export const formatStyleProperty = (key: string, value: string | number): string => {
     // Convert camelCase to kebab-case
     const formatKey = key.replace(/([A-Z])/g, '-$1').toLowerCase();
     // Add units to numeric values where needed
     switch (formatKey) {
       case 'font-size':
         return `font-size: ${value}`;
       case 'width':
       case 'height':
         return `${formatKey}: ${value}px`;
       case 'text-align':
       case 'font-weight':
       case 'text-transform':
       case 'color':
         return `${formatKey}: ${value}`;
       default:
         return `${formatKey}: ${value}`;
     }
};