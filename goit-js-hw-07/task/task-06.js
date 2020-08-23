const inputRef = document.querySelector("#validation-input");

inputRef.addEventListener("change", () => {
    inputRef.classList.add("validation-input", "valid", "invalid"); // invalid by default

    const inputLentgh = [...inputRef.attributes].find(
        (attribute) => attribute.name === "data-length"
    ).value;

    if (inputRef.value.length === parseInt(inputLentgh)) {
        inputRef.classList.replace("invalid", "valid"); // invalid replace with valid
    } else {
        inputRef.classList.replace("valid", "invalid");
    }
});