async function buscarDados(url = '/pessoas'){
  const tabela=document.getElementById('tabela'); 
  const mensagem=document.getElementById('mensagem');

  tabela.innerHTML=''; mensagem.textContent='';

  try { 
    const r=await fetch(url); if(!r.ok) throw new Error(); 
    const dados=await r.json();
    const registros = Array.isArray(dados) ? dados : [dados];
    if(!registros.length){mensagem.textContent='Nenhum registro cadastrado.';
      return;
    }
    registros.forEach(p=>{
      const tr=document.createElement('tr'); ['id','nome','sobrenome','email','cpf','idade','telefone','rua','bairro','cidade','estado','rg'].forEach(c=>{
        const td=document.createElement('td');
        td.textContent=p[c]??'';
        tr.appendChild(td)});
        tabela.appendChild(tr)});
  } catch { 
    mensagem.textContent='Erro ao buscar os registros.'; 
  }
}
document.getElementById('buscar').addEventListener('click',buscarDados); buscarDados();
document.getElementById('buscarCpf').addEventListener('click', () => {
  const cpf = document.getElementById('cpfBusca').value.trim();
  if (!cpf) {
    document.getElementById('mensagem').textContent = 'Informe um CPF.';
    return;
  }
  buscarDados(`/buscar/cpf/${encodeURIComponent(cpf)}`);
});
