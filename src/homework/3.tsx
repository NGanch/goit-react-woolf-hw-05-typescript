import React, { useState } from 'react';

type Props = {
  initialValue: string;
  onSave: (value: string) => void;
};

export function FormComponent({ initialValue, onSave }: Props) {
  const [value, setValue] = useState(initialValue);


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  return (
    <>
     <input type="text" value={value} onChange={handleChange} />
    </>
   
  );
}
