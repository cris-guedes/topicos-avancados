/*import { prisma } from '../prisma'

export type Registers = Register[]

export interface Register {
  ANO_BO: number
  NUM_BO: number
  NUMERO_BOLETIM: string
  BO_INICIADO: string
  BO_EMITIDO: string
  DATAOCORRENCIA: string
  HORAOCORRENCIA: string
  PERIDOOCORRENCIA: string
  DATACOMUNICACAO: string
  DATAELABORACAO: string
  BO_AUTORIA: string
  FLAGRANTE: string
  NUMERO_BOLETIM_PRINCIPAL: string
  LOGRADOURO: string
  NUMERO: number
  BAIRRO: string
  CIDADE: string
  UF: string
  LATITUDE: string
  LONGITUDE: string
  DESCRICAOLOCAL: string
  EXAME: string
  SOLUCAO: string
  DELEGACIA_NOME: string
  DELEGACIA_CIRCUNSCRICAO: string
  ESPECIE: string
  RUBRICA: string
  DESDOBRAMENTO: string
  STATUS: string
  TIPOPESSOA: string
  VITIMAFATAL: string
  NATURALIDADE: string
  NACIONALIDADE: string
  SEXO: string
  DATANASCIMENTO: string
  IDADE: any
  ESTADOCIVIL: string
  PROFISSAO: string
  GRAUINSTRUCAO: string
  CORCUTIS: string
  NATUREZAVINCULADA: string
  TIPOVINCULO: string
  RELACIONAMENTO: string
  PARENTESCO: string
  PLACA_VEICULO: any
  UF_VEICULO: string
  CIDADE_VEICULO: string
  DESCR_COR_VEICULO: string
  DESCR_MARCA_VEICULO: string
  ANO_FABRICACAO: any
  ANO_MODELO: any
  DESCR_TIPO_VEICULO: string
  QUANT_CELULAR: string
  MARCA_CELULAR: string
}
const register:any = data
const reportApiAdress = 'https://app-topicos.herokuapp.com'

let count =0
register.map((data:Register)=>{

  const{ANO_BO,ANO_FABRICACAO,ANO_MODELO,BAIRRO,BO_AUTORIA,BO_EMITIDO,BO_INICIADO,CIDADE,CIDADE_VEICULO,CORCUTIS,DATACOMUNICACAO,DATAELABORACAO,DATANASCIMENTO,DATAOCORRENCIA,DELEGACIA_CIRCUNSCRICAO,DELEGACIA_NOME,DESCRICAOLOCAL,DESCR_COR_VEICULO,DESCR_MARCA_VEICULO,DESCR_TIPO_VEICULO,DESDOBRAMENTO,ESPECIE,ESTADOCIVIL,EXAME,FLAGRANTE,GRAUINSTRUCAO,HORAOCORRENCIA,IDADE,LATITUDE,LOGRADOURO,LONGITUDE,MARCA_CELULAR,NACIONALIDADE,NATURALIDADE,NATUREZAVINCULADA,NUMERO,NUMERO_BOLETIM,NUMERO_BOLETIM_PRINCIPAL,NUM_BO,PARENTESCO,PERIDOOCORRENCIA,PLACA_VEICULO,PROFISSAO,QUANT_CELULAR,RELACIONAMENTO,RUBRICA,SEXO,SOLUCAO,STATUS,TIPOPESSOA,TIPOVINCULO,UF,UF_VEICULO,VITIMAFATAL}= data


const adress = prisma.address.create({data:{id:count.toString(),city:CIDADE,neighborhood:BAIRRO,number:NUMERO.toString(),report:`${reportApiAdress}/boletim/${NUM_BO}`,publicPlace:LOGRADOURO,state:UF}})
const carRegistration = prisma.carRegistration.create({data:{id:count.toString(), city:CIDADE_VEICULO,plate:PLACA_VEICULO,state:UF_VEICULO,vehicle:`${reportApiAdress}/veiculo/${PLACA_VEICULO}`}})

count = count +1



})
*/