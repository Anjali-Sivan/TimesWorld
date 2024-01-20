import Form from "react-bootstrap/Form";
import { useState } from "react";
import { useNavigate } from "react-router";
import FbIcon from "../../Assets/Images/FbIcon";
import Twitter from "../../Assets/Images/Twitter";
import Linkedin from "../../Assets/Images/Linkedin";
import Youtube from "../../Assets/Images/Youtube";
import "./style.css";

function Forms() {

  const [validated, setValidated] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    else {
     navigate('/countries');
    }

    setValidated(true);
  };

  return (
    <>
       <h1 className="signin-heading" style={{ marginBottom: '29px' }}>
        {"Sign In"}
      </h1>
      <div className="sub-div" style={{ marginBottom: '29px' }}>
        <span className="sub-heading">{"New User ? "}</span>
        <span className="link">&nbsp;{"Create an account"}</span>
      </div>
      <Form style={{ marginBottom: '29px' }} noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control
            type="text"
            required
            placeholder="Username or Email"
            style={{
              border: '2px solid #3e3e3e',
              background: '#fff',
              height: '48px',
              width: '100%',
              padding: '12px',
            }}
          />
           <Form.Control.Feedback type="invalid">
              Please enter a username
            </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
          <Form.Control
            type="password"
            required
            placeholder="Password"
            style={{
              border: '2px solid #3e3e3e',
              background: '#fff',
              height: '48px',
              width: '100%',
              padding: '12px',
            }}
          />
           <Form.Control.Feedback type="invalid">
              Please enter a password
            </Form.Control.Feedback>
        </Form.Group>
        <Form.Check
          type={'checkbox'}
          id={`default-checkbox`}
          label={'Keep me signed in'}
          style={{ marginBottom: '29px' }}
        />
        <button type="submit" className="sign-in-button" style={{ marginBottom: '32px' }}>
          Sign In
        </button>
        <div class="horizontal-rule-container" style={{ marginBottom: '32px' }}>
          <div class="horizontal-rule"></div>
          <div class="text-center">Or Sign In With</div>
          <div class="horizontal-rule"></div>
        </div>
        <div className="icon-row">
       <FbIcon/>
        <Twitter/>
        <Linkedin/>
        <Youtube/>
      </div>
      </Form>
    </>
  );
}

export default Forms;
