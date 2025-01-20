import {LandingPage} from "../pages/LandingPage.tsx";
import {ListStudentsPage} from "../pages/ListStudentsPage.tsx";
import {CreateStudentPage} from "../pages/CreateStudentPage.tsx";

export const routes = [
  {
    path: '/',
    view: LandingPage
  },
  {
    path: '/students',
    view: ListStudentsPage
  },
  {
    path: '/students/create',
    view: CreateStudentPage,
  }
]
