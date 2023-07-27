// Función para agregar un miembro
function addMember(event) {
    event.preventDefault();
  
    const name = document.getElementById('name').value;
  
    const memberItem = document.createElement('div');
    memberItem.classList.add('member');
  
    // Obtenemos la fecha actual
    const currentDate = new Date();
  
    // Creamos una nueva fecha aumentando 30 días a la fecha actual
    const expirationDate = new Date();
    expirationDate.setDate(currentDate.getDate() + 30);
  
    // Comparamos si la membresía está vigente o vencida
    if (expirationDate > currentDate) {
      memberItem.classList.add('active');
    } else {
      memberItem.classList.add('expired');
    }
  
    memberItem.innerHTML = `
      <span>${name}</span>
      <span>${expirationDate.toDateString()}</span>
      <span class="delete-button" onclick="removeMember(this)">Eliminar</span>
    `;
  
    document.getElementById('members-list').appendChild(memberItem);
    document.getElementById('name').value = '';
  }
  
  // Función para eliminar un miembro
  function removeMember(button) {
    const memberItem = button.parentElement;
    memberItem.remove();
  }
  
  // Función para actualizar el estado de la membresía de todos los miembros
  function updateMembershipStatus() {
    const members = document.getElementsByClassName('member');
  
    // Recorremos todos los miembros y actualizamos su estado
    for (const member of members) {
      const expirationDateText = member.querySelector('span:nth-child(2)').textContent;
      const expirationDate = new Date(expirationDateText);
  
      // Obtenemos la fecha actual
      const currentDate = new Date();
  
      if (expirationDate > currentDate) {
        member.classList.remove('expired');
        member.classList.add('active');
      } else {
        member.classList.remove('active');
        member.classList.add('expired');
      }
    }
  }
  
  // Actualizamos el estado de la membresía al cargar la página
  document.addEventListener('DOMContentLoaded', updateMembershipStatus);
  
  document.getElementById('membership-form').addEventListener('submit', function (event) {
    addMember(event);
    updateMembershipStatus();
  });
  