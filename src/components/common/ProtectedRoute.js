// import React from "react";
// import { Route, Redirect } from "react-router-dom";
// import { getAuth } from "../../App";

// export default function ProtectedRoute({ component: Component, roles, ...rest }) {
//   return (
//     <Route
//       {...rest}
//       render={(props) => {
//         const { token, role } = getAuth();
//         if (!token) {
//           return <Redirect to="/login" />;
//         }
//         if (roles && !roles.includes(role)) {
//           return (
//             <Redirect
//               to={role === "admin" ? "/admin/dashboard" : "/user/dashboard"}
//             />
//           );
//         }
//         return <Component {...props} />;
//       }}
//     />
//   );
// }
