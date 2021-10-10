import React from "react";

export const Navbar = () => {
	return (
		<nav className="navbar fixed-top navbar-dark bg-dark navbar-expand-lg navbar-light bg-light">
			<div className="container">
				<a className="navbar-brand" href="#">
					Start Bootstrap
				</a>

				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>

				<div
					className="collapse navbar-collapse"
					id="navbarSupportedContent">
					<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<a
								className="nav-link active"
								aria-current="page"
								href="#">
								Home
							</a>
						</li>
						<li className="nav-item">
							<a
								className="nav-link active"
								aria-current="page"
								href="#">
								About
							</a>
						</li>
						<li className="nav-item">
							<a
								className="nav-link active"
								aria-current="page"
								href="#">
								Services
							</a>
						</li>
						<li className="nav-item">
							<a
								className="nav-link active"
								aria-current="page"
								href="#">
								Contact
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
