import { Company, Customer, Phone, Address } from './RJ4-Engine/engine.js';

let companyAddress = new Address("Rio de Janeiro", "Rio de Janeiro", "Avenida Atlântica", 500)
let companyPhone1 = new Phone(21, "2567-8901")
let companyPhone2 = new Phone(21, "9845-1234")
let company = new Company("Sistemas Brasileiros Ltda", "SisBras", "12345678000199", companyAddress)
company.phones.push(companyPhone1, companyPhone2)

let customerAddress1 = new Address("Minas Gerais", "Belo Horizonte", "Rua da Bahia", 789)
let customerPhone1_1 = new Phone(31, "3210-5678")
let customerPhone1_2 = new Phone(31, "9876-4321")
let customer1 = new Customer("Roberto Santos", "123.456.789-00", customerAddress1)
customer1.phones.push(customerPhone1_1, customerPhone1_2)

let customerAddress2 = new Address("Paraná", "Curitiba", "Rua XV de Novembro", 1520)
let customerPhone2_1 = new Phone(41, "3456-7890")
let customerPhone2_2 = new Phone(41, "9654-3210")
let customer2 = new Customer("Fernanda Lima", "987.654.321-00", customerAddress2);
customer2.phones.push(customerPhone2_1, customerPhone2_2)

let customerAddress3 = new Address("Bahia", "Salvador", "Avenida Sete de Setembro", 2000)
let customerPhone3_1 = new Phone(71, "3789-0123")
let customerPhone3_2 = new Phone(71, "9321-6547")
let customer3 = new Customer("Diego Pereira", "112.233.445-66", customerAddress3)
customer3.phones.push(customerPhone3_1, customerPhone3_2)

let customerAddress4 = new Address("Rio Grande do Sul", "Porto Alegre", "Rua dos Andradas", 850)
let customerPhone4_1 = new Phone(51, "3012-3456")
let customerPhone4_2 = new Phone(51, "9987-6543")
let customer4 = new Customer("Juliana Rodrigues", "321.654.987-00", customerAddress4)
customer4.phones.push(customerPhone4_1, customerPhone4_2)

let customerAddress5 = new Address("Pernambuco", "Recife", "Rua do Bom Jesus", 300)
let customerPhone5_1 = new Phone(81, "3345-6789")
let customerPhone5_2 = new Phone(81, "9123-4567")
let customer5 = new Customer("Rafael Almeida", "654.321.987-00", customerAddress5)
customer5.phones.push(customerPhone5_1, customerPhone5_2)

company.customers = [customer1, customer2, customer3, customer4, customer5]

console.log(company.companyDetails)

console.log(company.showCompanyDetailsUpper())

console.log(company.showCompanyDetailsLower())