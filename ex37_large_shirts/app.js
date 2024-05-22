function makeshirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I love Typescript ."; }
    console.log("Making a ".concat(size, " t-shirt with the meassge \" ").concat(message, "\" printed on it. "));
}
makeshirt(); //default large and message
makeshirt("medium"); //default meaasge, medium size
makeshirt("small", "Dive into coding"); //custom message, small size
