angular.module('angularNivel1App')
.controller('AppCtrl',function($scope){
    var aluno = {}; // objeto vazio
    // var aluno = new Object();

    var aluno2 = {
        nome: null,
        idade: null,
        sexo: null
    }

    aluno.nome = 'Alessandro';
    console.log(aluno.nome);
    aluno2.telefone = '999613451';
    console.log(aluno2.telefone);

    $scope.alunos = [];// array vazio
    // var alunos = new Array();

    $scope.alunos[0] = aluno2;
    $scope.alunos.push(aluno2);
    var arrayPopulado = ['string1','string2','string3'];

    $scope.alunos = [
        {nome: 'João',idade: 25},
        {nome: 'Maria',idade: 13},
        {nome: 'Josué',idade: 30},
        {nome: 'Anastácia',idade: 32}
    ]



});