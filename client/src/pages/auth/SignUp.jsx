import React, { useState } from "react";
import "./signUpStyle.css"; // Import the CSS file for styling
import { Link, useNavigate } from "react-router-dom";
import { signUp } from "../../api/auth";

const SignUp = () => {
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [errors, setErrors] = useState({
        email: "",
        password: "",
        confirmPassword: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });

        // Clear previous errors when the user starts typing
        setErrors({
            ...errors,
            [name]: "",
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Email validation using regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setErrors({
                ...errors,
                email: "Invalid email address",
            });
            return;
        }

        // Password validation
        if (formData.password.length < 6) {
            setErrors({
                ...errors,
                password: "Password must be at least 6 characters long",
            });
            return;
        }

        if (formData.password !== formData.confirmPassword) {
            setErrors({
                ...errors,
                confirmPassword: "Passwords do not match",
            });
            return;
        }

        // Add your sign-up logic here
        console.log("Form submitted:", formData);
        signUp({ body: formData, navigate })
    };

    return (
        <div className="signup-container">
            <form onSubmit={handleSubmit} className="signup-form">
                <h2>Sign Up</h2>
                <label>
                    Username
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Email Address
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    {errors.email && <p className="error-message">{errors.email}</p>}
                </label>
                <label>
                    Password
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                    {errors.password && <p className="error-message">{errors.password}</p>}
                </label>
                <label>
                    Confirm Password
                    <input
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                    />
                    {errors.confirmPassword && (
                        <p className="error-message">{errors.confirmPassword}</p>
                    )}
                </label>
                <button type="submit">Sign Up</button>
                <p>
                    Already have an account? <Link to="/signin">Sign In</Link>
                </p>
            </form>
        </div>
    );
};

export default SignUp;
