import{
  BrowserRouter,
  Routes,
  Route,
}from "react-router-dom";
import AdminPage from "./pages/admin-page/adminPage";
import Login from "./pages/Login";
import LecturerPage from "./pages/lecturer-page/lecturerPage";
import StudentPage from "./pages/student-page/studentPage";
import StudentList from "./pages/admin-page/studentList";
import LecturersList from "./pages/admin-page/lecturerList";
import AttendanceAdminPage from "./pages/admin-page/attendanceAdmin";
import StudentListAdmin from "./pages/admin-page/studentListAdmin";
import AttendanceLecturer from "./pages/lecturer-page/attendanceLecturer";
import StudentListLecturer from "./pages/lecturer-page/studentListLecturer";
import ModulPageLecturer from "./pages/lecturer-page/modulePageLecturer";
import AttendanceStudent from "./pages/student-page/attendanceStudent";
import ModulePageStudent from "./pages/student-page/modulePageStudent";
import AttendanceStudentOverview from "./pages/student-page/attendanceStudentOverview";
import Setting from "./pages/setting";
import QrCode from "./pages/qrcode";
import QRscanner from "./pages/scanner";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}></Route>
          <Route path='/student' element={<StudentPage/>}></Route>
          <Route path='/student/attendance' element={<AttendanceStudent/>}></Route>
          <Route path='/student/attendance/studentoverview' element={<AttendanceStudentOverview/>}></Route>
          <Route path='/student/module' element={<ModulePageStudent/>}></Route>
          <Route path='/student/qrcode' element={<QrCode/>}></Route>
          <Route path='/lecturer' element={<LecturerPage/>}></Route>
          <Route path='/lecturer/scanner' element={<QRscanner/>}></Route>
          <Route path='/lecturer/attendancelecturer' element={<AttendanceLecturer/>}></Route>
          <Route path='/lecturer/attendancelecturer/studentlist' element={<StudentListLecturer/>}></Route>
          <Route path='/lecturer/modulPageLecturer' element={<ModulPageLecturer/>}></Route>
          <Route path='/admin' element={<AdminPage/>}></Route> 
          <Route path='/admin/studentlist' element={<StudentList/>}></Route>
          <Route path='/admin/lecturerlist' element={<LecturersList/>}></Route>
          <Route path='/admin/attendanceadmin' element={<AttendanceAdminPage/>}></Route>
          <Route path='/admin/attendanceadmin/studentlistadmin' element={<StudentListAdmin/>}></Route>
          <Route path='/setting' element={<Setting/>}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
