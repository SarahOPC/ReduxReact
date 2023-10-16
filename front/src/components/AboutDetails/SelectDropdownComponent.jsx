function SelectDropdown({ selectedValue, onChange }) {
    const categoryOptions = [
        { label: 'Food', value: 'Food'},
        { label: 'Electronics', value: 'Electronics'},
        { label: 'Wellness', value: 'Wellness'},
        { label: 'Jewelry', value: 'Jewelry'},
        { label: 'Cosmetics', value: 'Cosmetics'},
    ];

    return (
        <select value={selectedValue} onChange={(e) => onChange(e.target.value)}>
            {categoryOptions.map((option, index) => (
                <option key={index} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
}

export {SelectDropdown};
