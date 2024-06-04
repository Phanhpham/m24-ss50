import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const Employee = () => {
  const [searchTerm, setSearchTerm1] = useState('');

  const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm1(event.target.value);
  };
  const [searchParams,setSearchTerm] = useSearchParams();
  const handleSearch = () => {
    setSearchTerm({studentName: searchTerm})
    console.log('Đã tk:', searchTerm);
  };
  const name = searchParams.get('studentName');
  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Nhập tu khoa tim kiem"
      />
      <button onClick={handleSearch}>Tìm kiếm</button>
      <p>ket qua la:{name}</p>
    </div>
  );
};

export default Employee;
