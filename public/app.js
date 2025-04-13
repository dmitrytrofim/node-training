async function test() {
 const resp = await fetch('http://localhost:3000/test', {
  method: 'POST',
  headers: {
   'Content-Type': 'application/json',
  },
  body: JSON.stringify({ message: 'Hello Client' }),
 });
 if (resp.ok) {
  const json = await resp.json();
  console.log(json);
 }
}

window.addEventListener('click', test);
