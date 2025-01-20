import {PermissionGuard} from "../components/permissions/PermissionGuard.tsx";
import {AccessDeniedPage} from "./AccessDeniedPage.tsx";
import {PermissionsLayer} from "../components/permissions/PermissionsLayer.tsx";
import {AuthenticatedLayout} from "../components/layouts/AuthenticatedLayout.tsx";

export function CreateStudentPage() {
  return (
    <AuthenticatedLayout>
      <PermissionsLayer>
        <PermissionGuard permission={'createStudent'} accessDeniedView={<AccessDeniedPage/>}>
          <main className={'p-2'}>
            <p>Create student</p>
          </main>
        </PermissionGuard>
      </PermissionsLayer>
    </AuthenticatedLayout>
  )
}
