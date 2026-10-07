const form = document.getElementById('formCadastro');
const ids = ['nome','sobrenome','email','cpf','idade','telefone','rua','bairro','cidade','estado','rg'];
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const pessoa = Object.fromEntries(ids.map(id => [id, document.getElementById(id).value.trim()]));
  pessoa.idade = Number(pessoa.idade);
  try {
    const resposta = await fetch('/pessoas', {method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(pessoa)});
    if (!resposta.ok) throw new Error();
    form.reset(); document.getElementById('mensagem').textContent = 'Cadastro realizado com sucesso!';
  } catch { document.getElementById('mensagem').textContent = 'Erro ao cadastrar.'; }
});
