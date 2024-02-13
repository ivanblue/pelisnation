import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

type YearFilterProps = {
  year: string;
  setYear: React.Dispatch<React.SetStateAction<string>>;
};

const YearFilter = ({ year, setYear }: YearFilterProps) => {
  const years: number[] = [];

  for (let year = 2024; year >= 1924; year--) {
    years.push(year);
  }

  return (
    <Select
      value={year}
      onValueChange={(value: string) => {
        setYear(value);
      }}
    >
      <SelectTrigger className="w-36 h-[38px]">
        <SelectValue placeholder="Select a year" />
      </SelectTrigger>
      {/* note: hacky solution for event propagation on browser's mobile emulation
          mode causing a bug that selects what's beneath the selected item */}
      <SelectContent
        ref={(ref) => {
          if (!ref) return;
          ref.ontouchstart = (e) => e.preventDefault();
        }}
      >
        <SelectItem value="all">All</SelectItem>
        {years.map((year, index) => (
          <SelectItem key={index} value={year.toString()}>
            {year}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default YearFilter;
