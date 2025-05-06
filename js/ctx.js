
// Dados de exemplo
const contacts = [
  {
    date: '2024-01-15',
    name: 'João Silva',
    email: 'joao.silva@email.com',
    phone: '(11) 98765-4321',
    company: 'Tech Solutions',
    message: 'Gostaria de agendar uma reunião para discutir uma possível parceria. Precisamos avaliar diversos aspectos do projeto e alinhar expectativas para uma colaboração efetiva.'
  },
  {
    date: '2024-01-14',
    name: 'Maria Santos',
    email: 'maria.santos@email.com',
    phone: '(11) 91234-5678',
    company: 'Digital Innovation',
    message: 'Preciso de mais informações sobre os serviços oferecidos. Estamos buscando uma solução completa que atenda às necessidades específicas da nossa empresa.'
  },
  {
    date: '2024-01-13',
    name: 'Pedro Oliveira',
    email: 'pedro.oliveira@email.com',
    phone: '(11) 97777-8888',
    company: 'Creative Design',
    message: 'Interessado em um orçamento para projeto web. Temos um escopo detalhado e gostaríamos de discutir as possibilidades de implementação e prazos.'
  }
];

// Função para renderizar os contatos
function renderContacts(contactsList) {
  const tableBody = document.getElementById('contactsTableBody');
  tableBody.innerHTML = '';

  contactsList.forEach(contact => {
    const message = contact.message.length > 400 ? 
      contact.message.substring(0, 400) + '...' : 
      contact.message;
      
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${formatDate(contact.date)}</td>
      <td>${contact.company}</td>
      <td>${contact.name}</td>
      <td>${contact.email}</td>
      <td>${contact.phone}</td>
      <td class="message-cell">${message}</td>
      <td class="actions">
        <button class="btn btn-delete" onclick="deleteContact('${contact.email}')">Excluir</button>
      </td>
    `;
    tableBody.appendChild(row);
  });
}

// Função para formatar a data
function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('pt-BR');
}

// Função para excluir contato
function deleteContact(email) {
  if (confirm('Tem certeza que deseja excluir este contato?')) {
    alert(`Contato excluído: ${email}`);
  }
}

// Função para mudar de página
function changePage(page) {
  const buttons = document.querySelectorAll('.pagination button');
  buttons.forEach(btn => btn.classList.remove('active'));
  buttons[page-1].classList.add('active');
  // Aqui você implementaria a lógica real de paginação
}

// Implementação da busca
document.getElementById('searchInput').addEventListener('input', function(e) {
  const searchTerm = e.target.value.toLowerCase();
  const filteredContacts = contacts.filter(contact => 
    contact.name.toLowerCase().includes(searchTerm) ||
    contact.email.toLowerCase().includes(searchTerm) ||
    contact.phone.toLowerCase().includes(searchTerm) ||
    contact.company.toLowerCase().includes(searchTerm)
  );
  renderContacts(filteredContacts);
});

// Renderizar contatos iniciais
renderContacts(contacts);

// Ativar primeira página
document.querySelector('.pagination button').classList.add('active');