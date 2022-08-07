import React from "react";
import { useState } from "react";
import "./Signup.css";
const Signup = () => {
	const [email, setEmail] = React.useState("");
	const [password, setPassword] = React.useState("");
	const [name, setName] = React.useState("");
	const [thumbnail, setThumbnail] = React.useState(null);
	const [error, setError] = React.useState(null);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (email.length === 0 || password.length === 0 || name.length === 0) {
			setError("All fields are required");
		} else {
			setError(null);
			console.log(email, password, name, thumbnail);
		}
	};

	const handleFileChange = (e) => {
		//resetting the thumbnail back to null in case the user selects anything
		setThumbnail(null);
		let selected = e.target.files[0]; //returns the file that is selected by the user
		console.log(selected);
		//putting checks so the user can enter only images
		if (!selected) {
			setError("Please select a file");
			return;
		}
		if (!selected.type.includes("image")) {
			setError("Please select only image files");
			return;
		}
		if (selected.size > 1000000) {
			setError("File size must be less than 1mb");
			return;
		}
		//if all checks passed
		setError(null); // no more errors
		setThumbnail(selected); //setting the thumbnail to the selected file
	};

	return (
		<>
			<form className="auth-form" onSubmit={handleSubmit}>
				<h2>Sign Up</h2>
				<label>
					<span>Email:</span>
					<input
						required
						type="email"
						onChange={(e) => setEmail(e.target.value)}
						value={email}
					/>
				</label>
				<label>
					<span>Password:</span>
					<input
						required
						type="password"
						onChange={(e) => setPassword(e.target.value)}
						value={password}
					/>
				</label>
				<label>
					<span>User Name:</span>
					<input
						required
						type="text"
						onChange={(e) => setName(e.target.value)}
						value={name}
					/>
				</label>
				<label>
					<span>Profile Image:</span>
					<input required type="file" onChange={handleFileChange} />
					{error && <div className="error">{error}</div>}
				</label>
				<button className="btn">Sign Up</button>
			</form>
		</>
	);
};

export default Signup;
