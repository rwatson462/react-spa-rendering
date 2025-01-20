import {User} from "../types";
import {permissionsForUsers} from "../../data/permissionsForUsers.ts";
import {permissions} from "../../data/permissions.ts";

export function findPermissionsForUser(user: User) {
  const permissionIds = permissionsForUsers
    .filter(permission => permission.userId === user.id)
    .map(permission => permission.permissionId)

  return permissions.filter(permission => permissionIds.includes(permission.id))
}
