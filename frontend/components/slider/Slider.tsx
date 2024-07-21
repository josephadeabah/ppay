import React from "react";

interface SliderProps {
  min: number;
  max: number;
  step: number;
  value: number | [number, number];
  onChange: (value: number | [number, number]) => void;
  range?: boolean;
  tooltip?: boolean;
}

const Slider: React.FC<SliderProps> = ({
  min,
  max,
  step,
  value,
  onChange,
  range = false,
  tooltip = false,
}) => {
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index?: number,
  ) => {
    const newValue = parseInt(event.target.value);

    if (range) {
      const values = Array.isArray(value) ? [...value] : [0, 0];
      if (index === 0) {
        values[0] = newValue;
      } else {
        values[1] = newValue;
      }
      onChange(values as [number, number]);
    } else {
      onChange(newValue);
    }
  };

  return (
    <div className="relative flex items-center">
      {/* Render single slider if range is false */}
      {!range && (
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={typeof value === "number" ? value : value[0]}
          onChange={(e) => handleChange(e)}
          className="slider-thumb"
        />
      )}
      {/* Render range sliders if range is true */}
      {range && (
        <>
          <input
            type="range"
            min={min}
            max={max}
            step={step}
            value={Array.isArray(value) ? value[0] : min}
            onChange={(e) => handleChange(e, 0)}
            className="slider-thumb"
          />
          <input
            type="range"
            min={min}
            max={max}
            step={step}
            value={Array.isArray(value) ? value[1] : max}
            onChange={(e) => handleChange(e, 1)}
            className="slider-thumb absolute top-0"
          />
        </>
      )}
      {tooltip && (
        <div className="tooltip">
          {Array.isArray(value) ? `${value[0]} - ${value[1]}` : value}
        </div>
      )}
    </div>
  );
};

export default Slider;
