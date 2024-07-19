import React from "react";

interface SliderProps {
  min: number;
  max: number;
  step: number;
  value: [number, number];
  onChange: (value: [number, number]) => void;
}

const Slider: React.FC<SliderProps> = ({ min, max, step, value, onChange }) => {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    const newValue = [...value];
    newValue[index] = parseInt(e.target.value, 10);
    onChange(newValue as [number, number]);
  };

  return (
    <div className="relative flex items-center">
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value[0]}
        onChange={(e) => handleChange(e, 0)}
        className="absolute w-full appearance-none bg-transparent"
      />
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value[1]}
        onChange={(e) => handleChange(e, 1)}
        className="absolute w-full appearance-none bg-transparent"
      />
      <div className="relative h-2 w-full rounded-md bg-gray-300">
        <div
          className="absolute h-2 rounded-md bg-blue-500"
          style={{
            left: `${((value[0] - min) / (max - min)) * 100}%`,
            right: `${100 - ((value[1] - min) / (max - min)) * 100}%`,
          }}
        />
      </div>
      <div className="mt-2 flex justify-between">
        <span>{value[0]}</span>
        <span>{value[1]}</span>
      </div>
    </div>
  );
};

export default Slider;
