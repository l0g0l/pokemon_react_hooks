import React, { useState, useEffect } from 'react';


export default function useDebounce(value, delay) {
  
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(
    () => {
      // Establecer a debouncedValue al valor (pasado) después del retraso especificado
      const getValue = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);

     // Devuelve una función de limpieza que será llamada cada vez que useEffect sea re-llamado. useEffect sólo será re-llamado si el valor cambia. Así evitamos que debouncedValue cambie si el valor es cambiado dentro del periodo de retardo. El tiempo de espera se borra y se reinicia. Si el usuario está escribiendo en la caja de búsqueda de nuestra aplicación, no queremos que el debouncedValue se actualice hasta que haya dejado de escribir durante más de 900ms.

      return () => {
        clearTimeout(getValue);
      };
    },
    // Sólo se puede volver a llamar al efecto si el valor cambia También se podría añadir la let "delay" si necesita ser capaz de cambiar eso dinámicamente.

    [value,delay] 
  );

  return debouncedValue;
}