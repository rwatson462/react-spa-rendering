import {users} from "../../data/users.ts";

export function findUserById(id: string) {
  return users.find(user => user.id === id)
}
