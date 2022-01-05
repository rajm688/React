import * as React from "react";
import { useFormik } from "formik";
import * as yup from "yup"
const formvalidationSchema = yup.object({
    email: yup.string().min(5,"you are kidding").max(20,"no way this big is your email").matches((!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i),"patternn  not matching"),
    password: yup.string().min(5, "not so small").max(10,"not this big")
})
// const validateform = (values) => {
//   const errors = {};
//   console.log("validation ", values);
//   if (!values.email) {
//     errors.email = "Required";
//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//     errors.email = "Invalid email address";
//   }
//   if (values.password.length < 4) {
//     errors.password = "your password should be large";
//   } else if (values.password.length > 10) {
//     errors.password = "your password should be small";
//   }
//   console.log("error", errors);

//   return errors;
// };
const formsubmit = (values) => {
  console.log("onsubmit", values);
};
export function Forms() {
  const {handleSubmit,values,handleBlur,handleChange,touched,errors} = useFormik({
    initialValues: { email: "raj@gmail.com", password: "abc" },
    // validate: validateform,
    validationSchema: formvalidationSchema,
    onSubmit: formsubmit,
  });
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={values.email}
          id="email"
          onBlur={handleBlur}
          onChange={handleChange}
          type="email"
          placeholder="enter the email"
        />
        {touched.email && errors.email
          ? errors.email
          : ""}
        <input
          value={values.password}
          id="password"
          onBlur={handleBlur}
          onChange={handleChange}
          type="password"
          placeholder="enter the Password"
        />
        {touched.password && errors.password
          ? errors.password
          : ""}
        <button type="submit">submit</button>
      </form>
    </div>
  );
}
