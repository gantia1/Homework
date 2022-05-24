function is_string(x) {
    if (typeof (x) === "string" && x.includes("?")) {
        return true;
    } else {
        throw new Error("333");
    }
}

console.log(is_string("12"));

