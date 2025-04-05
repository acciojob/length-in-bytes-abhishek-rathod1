const byteSize = (str) => {
  // write your code here
	return new TextEncoder().encode(str).length;
};

// Do not change the code belowldd
const str = prompt("Enter some string.");
alert(byteSize(str));
