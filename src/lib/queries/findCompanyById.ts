import {companies} from "../../data/companies.ts";

export function findCompanyById(id: string) {
  return companies.find(company => company.id === id)
}
