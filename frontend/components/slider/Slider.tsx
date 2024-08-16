// components/SliderComponent.tsx
import { Slider as NextUISlider } from "@nextui-org/slider";
import { useId } from "react";

interface SliderComponentProps {
  value: number | number[];
  onChange: (value: number | number[]) => void;
  minValue?: number;
  maxValue?: number;
  step?: number;
  label?: string;
  trackColor?: string;
  thumbColor?: string;
  trackClasses?: string;
  thumbClasses?: string;
  id?: string;
}

const SliderComponent: React.FC<SliderComponentProps> = ({
  value,
  onChange,
  minValue = -100,
  maxValue = 100,
  step = 1,
  label,
  trackColor = "bg-gray-200",
  thumbColor = "bg-white",
  trackClasses = "",
  thumbClasses = "",
  id,
}) => {
  // Generate a unique ID if not provided
  const uniqueId = useId();

  return (
    <div className="mx-auto w-full max-w-md">
      <NextUISlider
        id={id ?? uniqueId} // Use the provided ID or fallback to the generated one
        label={label}
        size="sm"
        value={value}
        minValue={minValue}
        maxValue={maxValue}
        defaultValue={value}
        onChange={onChange}
        step={step}
        classNames={{
          base: `w-full ${trackClasses}`,
          track: `rounded-full ${trackColor}`,
          filler: `bg-gradient-to-r from-indigo-400 to-indigo-600 rounded-full`,
        }}
        renderThumb={(props) => (
          <div
            {...props}
            aria-label="Slider Thumb"
            className={`h-6 w-6 ${thumbColor} flex cursor-pointer items-center justify-center rounded-full border border-gray-300 shadow-md dark:border-gray-600 ${thumbClasses}`}
          >
            <span className="h-2.5 w-2.5 rounded-full bg-indigo-500" />
          </div>
        )}
      />
    </div>
  );
};

export default SliderComponent;
