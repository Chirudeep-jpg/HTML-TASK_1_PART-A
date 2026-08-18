// Global Objects
global.StudentName = "Alex";

function Greet() {
  const msg = `Hello!! ${global.StudentName}`;
  console.log(msg);
  return msg;
}

const greetingMessage = Greet();

//buffer
const buf = Buffer.from(greetingMessage);
console.log("Buffer Length: ", buf.length);
console.log("Buffer Content: ", buf);
console.log("Buffer as string: ", buf.toString());

//process
console.log("Process ID:", process.pid);
console.log("Node Version:", process.version);
console.log("Platform:", process.platform);

//__dirname,__filename
console.log("Directory name:", __dirname);
console.log("File name:", __filename);

//setTimeout
setTimeout(() => {
  console.log(`Delayed for 3 seconds`);
}, 3000);

//setInterval,clearInterval
let count = 0;
const intervalId = setInterval(() => {
  console.log(`Tick ${count}`);
  
  if (count === 5) {
    clearInterval(intervalId);
    console.log("✅ Done!");
    console.warn("This is a warning");
    console.error("This is an error");
  }
  
  count++;
}, 1000);
