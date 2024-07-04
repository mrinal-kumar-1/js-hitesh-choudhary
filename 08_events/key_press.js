let insert = document.querySelector("#insert");

window.addEventListener("keypress", (e) => {
  insert.innerHTML = `
  
  <div class="color">
   <table>
   <tr>
   <th>Key</th>
   <th>Key Code</th>
   <th>Code</th>
   </tr>
   <tr>
   <th>${e.key === ' ' ? "Space": e.key}</th>
   <th>${e.keyCode}</th>
   <th>${e.code}</th>
   </tr>
   </table>
  </div>
  
  
  `;
});
