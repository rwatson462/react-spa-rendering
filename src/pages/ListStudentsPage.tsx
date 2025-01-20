import {PermissionGuard} from "../components/permissions/PermissionGuard.tsx";
import {AccessDeniedPage} from "./AccessDeniedPage.tsx";
import {PermissionsLayer} from "../components/permissions/PermissionsLayer.tsx";
import {AuthenticatedLayout} from "../components/layouts/AuthenticatedLayout.tsx";
import {useRouter} from "../components/router/useRouter.ts";

export function ListStudentsPage() {
  const { navigateTo } = useRouter()

  return (
    <AuthenticatedLayout>
      <PermissionsLayer>
        <PermissionGuard permission={'listStudents'} accessDeniedView={<AccessDeniedPage/>}>
          <main className={'p-2'}>
            <p>List students page</p>
            <p><button onClick={() => navigateTo('/students/create')}>Create student</button></p>
          </main>
        </PermissionGuard>
      </PermissionsLayer>
    </AuthenticatedLayout>
  )
}
