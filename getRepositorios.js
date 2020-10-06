
//funcao que busca repositorios no github
function buscar() {
    var user = document.querySelector('input').value;
    var listas = document.querySelector('ul');
    listas.innerHTML = '';
    var carregando = document.createElement('li');
    var carregandoText = document.createTextNode('Carregando...');
    carregando.appendChild(carregandoText);
    listas.appendChild(carregando);
    axios.get('http://api.github.com/users/'+ user +'/repos')
    .then(function(response){       
        listas.innerHTML = '';
        response.data.forEach(element => {
            var newList = document.createElement('li');
            var conteudo = element.name + '. Url do repositório: ' + element.html_url;
            var repoName = document.createTextNode(conteudo);
            newList.appendChild(repoName);
            listas.appendChild(newList);
            
        });
    })
    .catch(function(error){
        listas.innerHTML = '';
        alert(error + ': Usuário não encontrado.');
    });
    
}



