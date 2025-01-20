import {permissions} from "../../data/permissions.ts";

export function PermissionsMessage({permission}: { permission: typeof permissions[number]['name']}) {
  return (
    <p className={'border-b border-green-500 bg-green-300 p-2'}>Permissions layer - {permission}</p>
  )
}
