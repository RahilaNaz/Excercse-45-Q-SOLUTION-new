function makeshirt(size: string = "large", message: string = "I love Typescript ."){
    console.log(`Making a ${size} t-shirt with the meassge " ${message}" printed on it. `);
}
makeshirt(); //default large and message
makeshirt("medium"); //default meaasge, medium size
makeshirt("small", "Dive into coding"); //custom message, small size
