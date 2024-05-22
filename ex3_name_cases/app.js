var personName = "Rahila";
console.log("lowercase:", personName.toLowerCase());
console.log("uppercase:", personName.toLocaleUpperCase());
console.log("tiltlecase:", personName.replace(/\bw/g, function (c) { return c.toUpperCase(); }));
