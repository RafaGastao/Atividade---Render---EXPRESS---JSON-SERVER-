document.getElementById('deletar').addEventListener('click', async () => { 
    const id = document.getElementById('id').value; 
    const msg = document.getElementById('mensagem'); 
    if (!id) { msg.textContent = 'Informe um ID.'; return } 
    if (!confirm(`Deseja realmente excluir o registro ${id}?`)) 
        return; 
    try { const r = await fetch(`/pessoas/${id}`, { method: 'DELETE' }); 
    if (!r.ok) 
        throw new Error(); document.getElementById('id').value = ''; msg.textContent = 'Registro excluído com sucesso!' } 
    catch { 
        msg.textContent = 'Registro não encontrado ou erro ao excluir.' } 
    });
