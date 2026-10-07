const ids = ['nome', 'sobrenome', 'email', 'cpf', 'idade', 'telefone', 'rua', 'bairro', 'cidade', 'estado', 'rg']; 
const msg = document.getElementById('mensagem');
document.getElementById('buscar').addEventListener('click', async () => { 
    const id = document.getElementById('idBusca').value; 
    if (!id) { msg.textContent = 'Informe um ID.'; 
        return 
    } try { 
        const r = await fetch(`/pessoas/${id}`); 
        if (!r.ok) throw new Error(); 
        const p = await r.json(); document.getElementById('id').value = p.id; 
        ids.forEach(c => document.getElementById(c).value = p[c] ?? '');
        msg.textContent = 'Registro encontrado.' 
    } catch { 
        msg.textContent = 'Registro não encontrado.' 
    } });
document.getElementById('formAtualizar').addEventListener('submit', async e => { 
    e.preventDefault(); const id = document.getElementById('id').value; 
    if (!id) { 
        msg.textContent = 'Busque um registro antes de atualizar.'; 
        return 
    } 
        const p = Object.fromEntries(ids.map(c => [c, document.getElementById(c).value.trim()])); p.idade = Number(p.idade); 
        try { 
            const r = await fetch(`/pessoas/${id}`, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(p) }); 
            if (!r.ok) throw new Error(); msg.textContent = 'Registro atualizado com sucesso!' 
        } catch { 
            msg.textContent = 'Erro ao atualizar.' 
        } });
