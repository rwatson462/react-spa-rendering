import {User} from "../types";
import {accounts} from "../../data/accounts.ts";

export function listAccountsForUser(user: User) {
  return accounts.filter(account => account.userId === user.id)
}
