import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import axios from "axios";
function Signup() {
  let navigate = useNavigate();
  let {
    register,
    handleSubmit,
    formState: {},
  } = useForm();

  const onformsubmit = async (userobj) => {
    console.log(userobj);
    let res = await axios.post(
      "http://localhost:5000/user/createuser",
      userobj
    );
    let resobj = res.data;
    if (resobj.message === "user created") {
      navigate("/login");
    } else {
      alert(resobj.message);
    }
  };
  return (
    <div>
      <Form
        className="w-50 mx-auto mt-4 "
        onSubmit={handleSubmit(onformsubmit)}
      >
        <h2 className="mb-3 text-center">Sign Up</h2>
        <Form.Group className="mb-3 dxcee" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            className=""
            type="text"
            placeholder="Enter Full Name"
            {...register("name")}
          />
        </Form.Group>
        <Form.Group className="mb-3 dxcee" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="<name>@gmail.com"
            {...register("email")}
          />
        </Form.Group>
        <Form.Group className="mb-3 dxcee" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" {...register("password")} />
        </Form.Group>
        <Form.Group className="mb-3 dxcee" controlId="phoneno">
          <Form.Label>Phone No</Form.Label>
          <Form.Control type="number" {...register("phoneno")} />
        </Form.Group>
        <Form.Group className="mb-3 dxcee" controlId="location">
          <Form.Label>Location</Form.Label>
          <Form.Control type="text" {...register("location")} />
        </Form.Group>
        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label="I agree to BookZone's Terms of Service, Privacy Policy and Content Policies"
            className="text-success"
          />
        </Form.Group> */}
        <Button variant="success" type="submit" className="d-block mx-auto">
          Create
        </Button>
        <div className="mt-3 text-center">
          Already have a Account?
          <span
            className="text-success ms-2 login"
            onClick={() => navigate("/login")}
          >
            Login
          </span>
        </div>
      </Form>
    </div>
  );
}

export default Signup;
