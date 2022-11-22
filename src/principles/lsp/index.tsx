import React, { useState } from "react";
import { SearchInput } from "./SearchInput";

export function LSP() {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <SearchInput value={value} onChange={handleChange} isLarge />
  );
}