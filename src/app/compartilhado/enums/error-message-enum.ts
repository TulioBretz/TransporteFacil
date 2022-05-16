export enum ErrorMessageEnum {
    camposObrigatorios = 'Preencha todos os campos obrigatórios',
    emailDivergente = 'E-mail de confirmação divergente do informado',
    senhaDivergente = 'Senha de confirmação divergente da informada',
    senhaFormatoIncorreto = 'A senha não atende aos requisitos',
    horariosPreenchimentoIncorreto = 'Preencha corretamente os horários',
    horariosFinalMaiorQueFinal = 'O horário final deve ser maior que o inicial',
    loginSenhaInvalidos = 'Login ou Senha inválidos'
}

export enum TipoUsuarioEnum {
    aluno = 1,
    motorista = 2
}
