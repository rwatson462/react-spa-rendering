import {FC, ReactNode} from "react";

export interface User {
  id: string
  name: string
  email: string
  password: string
}

type AccountRole = 'family'|'staff'

export interface Account {
  id: string
  userId: string
  companyId: string
  role: AccountRole
}

export interface Company {
  id: string
  name: string
}

export interface Permission {
  id: string
  name: string
}

export interface PermissionForUser {
  userId: string
  permissionId: string
}

export interface Route {
  path: string
  view: FC
}