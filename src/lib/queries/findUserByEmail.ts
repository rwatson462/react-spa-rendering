import {users} from "../../data/users.ts";

export function findUserByEmail(email: string) {
  return users.find(user => user.email === email)
}
