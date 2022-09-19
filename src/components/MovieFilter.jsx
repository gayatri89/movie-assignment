import Input from "@mui/material/Input";

export const MovieFilter = ({ setInputValue, value }) => {
  return (
    <Input
      type="text"
      onChange={(event) => {
        setInputValue(event.target.value);
      }}
      value={value}
      placeholder="Search..."
      className="search"
    />
  );
};
