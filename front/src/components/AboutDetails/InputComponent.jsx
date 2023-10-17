function InputComponent({ value, onChange, onSubmit }) {
    const handleKeyDown = (event) => {
        if(event.key === "Enter") {
            onSubmit();
        }
    }
    return (
        <form onSubmit={(event) => event.preventDefault()}>
            <label htmlFor="notes">Notes:</label>
            <input type="text" id="notes" name="notes" value={value} onChange={onChange} onKeyDown={handleKeyDown} />
        </form>
    )
}

export {InputComponent};
