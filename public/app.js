const getData = {
 btn: document.querySelector('.get__btn'),
 field: document.querySelector('.get__mes'),
};

async function test() {
 const resp = await fetch(`${location.href}test`, {
  method: 'POST',
  headers: {
   'Content-Type': 'application/json',
  },
  body: JSON.stringify({ message: 'Hello Client' }),
 });
 if (resp.ok) {
  const json = await resp.json();
  getData.field.textContent = json;
 }
}

getData.btn.addEventListener('click', test);
