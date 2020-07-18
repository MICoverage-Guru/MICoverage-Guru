import React, { Component } from "react";
import auto_illustration from "../auto.png";
import Navbar from "./Navbar";
import Partners from "./Partners";
import HowItWorks from "./HowItWorks";
import SubscribeSection from "./SubscribeSection";
import WhyUs from "./WhyUs";
import FAQ from "./FAQ";
import Media from "./Media";
import Footer from "./Footer";
import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";
import $ from "jquery";

class Home extends Component {
	constructor() {
		super();
		this.state = {
			isOpen: false
		};
		this.openModal = this.openModal.bind(this);
	}

	openModal() {
		this.setState({ isOpen: true });
	}

	getStarted = e => {
		e.preventDefault();
		if (!isNaN(document.getElementById("zip").value)) {
			localStorage.setItem("zip_code", document.getElementById("zip").value);
			if (window.innerHeight < 690)
				document.getElementsByClassName("extra-space")[0].style.paddingBottom =
					"20vh";
			else
				document.getElementsByClassName("extra-space")[0].style.paddingBottom =
					"10vh";
			document.getElementsByClassName("landing-home")[0].style.display = "none";
			document.getElementsByClassName("question-form")[0].style.display =
				"flex";
			setTimeout(function() {
				document.getElementsByClassName("question-form")[0].style.opacity = 1;
			}, 100);
			window.scroll({
				top: 0,
				behavior: "smooth"
			});
		} else {
			alert("Please enter a valid zip code!");
		}
	};

	submitForm(insurance) {
		localStorage.setItem(
			"uid",
			Math.random()
				.toString(36)
				.substring(2, 15)
		);
		localStorage.setItem("insurance_type", insurance);
		window.location.href = "/form/1";
	}

	componentWillMount() {
		localStorage.clear();
	}

	componentDidMount() {
		var text = [
			"Michigan residents pay <span>100% more</span> for car insurance than the rest of the U.S.",
			"Get the most affordable <span>auto</span> and <span>home</span> insurance in Michigan!",
			"Right now is the best time to <span>switch insurance</span> in Michigan.",
			"Save up to <span>$1000</span> on auto insurance from Michigan’s new insurance reform."
		];
		var counter = 0;
		var elem = $("#greeting");
		setInterval(change, 4000);
		function change() {
			elem.fadeOut(function() {
				elem.html(text[counter]);
				counter++;
				if (counter >= text.length) {
					counter = 0;
				}
				elem.fadeIn();
			});
		}
	}

	render() {
		return (
			<div className="container">
				<Navbar />
				<div className="home-contents">
					<div className="landing-home">
						<div className="left-home">
							<div className="fixed-height">
								<h1 id="greeting">
									Save up to <span>$1000</span> on auto insurance from
									Michigan’s new insurance reform.
								</h1>
							</div>
							<form onSubmit={this.getStarted}>
								<div className="zip-container">
									<input
										type="tel"
										className="input"
										placeholder="ZIP CODE"
										name="zip"
										id="zip"
										maxLength="5"
										required
									/>
									<input
										type="submit"
										className="input-submit"
										value="Get Quote &rarr;"
									/>
								</div>
							</form>
							<br />
							<div className="watch-video" onClick={this.openModal}>
								<img
									alt="watch_video"
									src="https://img.icons8.com/material-rounded/48/627df7/circled-play.png"
								/>
								<span>Watch Video</span>
							</div>
							<ModalVideo
								channel="youtube"
								isOpen={this.state.isOpen}
								videoId="oMntOnJK7s8"
								allowFullScreen={true}
								onClose={() => this.setState({ isOpen: false })}
							/>
							{/* <div className="home-info">
								<a
									className="span-width"
									data-for="custom-color-no-arrow"
									data-tip="Michiganders have been overpaying for auto insurance: 100% more than the national average. Due to a state-wide policy reform on July 2nd, 2020, every resident is eligible for savings of 30-50% on their auto insurance. For the first time since 1972, you can decide your medical coverage amount in the case of an accident."
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										x="0px"
										y="0px"
										width="43"
										height="43"
										viewBox="0 0 172 172"
										style={{ fill: "#000000" }}
									>
										<g
											fill="none"
											fill-rule="nonzero"
											stroke="none"
											stroke-width="1"
											stroke-linecap="butt"
											stroke-linejoin="miter"
											stroke-miterlimit="10"
											stroke-dasharray=""
											stroke-dashoffset="0"
											font-family="none"
											font-weight="none"
											font-size="none"
											text-anchor="none"
											style={{ mixBlendMode: "normal" }}
										>
											<path d="M0,172v-172h172v172z" fill="none"></path>
											<g fill="#282c34">
												<path d="M137.6,22.93333h-103.2c-6.33533,0 -11.46667,5.13133 -11.46667,11.46667v103.2c0,6.33533 5.13133,11.46667 11.46667,11.46667h103.2c6.33533,0 11.46667,-5.13133 11.46667,-11.46667v-103.2c0,-6.33533 -5.13133,-11.46667 -11.46667,-11.46667zM91.73333,120.4h-11.46667v-40.13333h11.46667zM86,65.93333c-4.7472,0 -8.6,-3.8528 -8.6,-8.6c0,-4.7472 3.8528,-8.6 8.6,-8.6c4.7472,0 8.6,3.8528 8.6,8.6c0,4.7472 -3.8528,8.6 -8.6,8.6z"></path>
											</g>
										</g>
									</svg>
								</a>
								<ReactTooltip
									id="custom-color-no-arrow"
									className="custom-color-no-arrow"
									textColor="#282c34"
									backgroundColor="#fafafa"
									effect="solid"
								/> 
							</div>*/}
						</div>
						<div className="right-home">
							<img alt="illustration" src={auto_illustration} />
						</div>
					</div>
					<div className="question-form">
						<p className="question">
							Welcome to MICoverage Guru! Which insurance would you like to
							purchase?
						</p>
						<div className="insurance-wrapper">
							<div
								className="insurance"
								onClick={() => this.submitForm("auto_home")}
							>
								<div className="savings-sticker">Extra Savings</div>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									x="0px"
									y="0px"
									width="100"
									height="100"
									viewBox="0 0 172 172"
									style={{ fill: "#000000", marginTop: "-3vh" }}
								>
									<g
										fill="none"
										fillRule="nonzero"
										stroke="none"
										strokeWidth="1"
										strokeLinecap="butt"
										strokeLinejoin="miter"
										strokeMiterlimit="10"
										strokeDasharray=""
										strokeDashoffset="0"
										fontFamily="none"
										fontWeight="none"
										fontSize="none"
										textAnchor="none"
										style={{ mixBlendMode: "normal" }}
									>
										<path d="M0,172v-172h172v172z" fill="none"></path>
										<g fill="#627df7">
											<path d="M83.302,16.16699c-0.16797,0 -0.32544,0.0105 -0.49341,0.04199c-0.16797,0.04199 -0.33594,0.08398 -0.50391,0.14697c-0.15747,0.07348 -0.30444,0.15747 -0.46191,0.25195c-0.07349,0.05249 -0.17847,0.07348 -0.25195,0.13647l-33.21582,27.49439v-9.1438c0,-1.49072 -1.19678,-2.6875 -2.6875,-2.6875c-1.49072,0 -2.6875,1.19678 -2.6875,2.6875v13.4375c0,0.04199 0.021,0.08398 0.03149,0.13647l-5.40649,4.46167v-28.79614c0,-1.48023 -1.19678,-2.6875 -2.6875,-2.6875c-1.49072,0 -2.6875,1.20727 -2.6875,2.6875v32.2605c0,0.29395 0.08398,0.57739 0.16797,0.85034l-28.76465,23.79907c-1.14429,0.94482 -1.29126,2.63501 -0.35693,3.7793c0.5354,0.64038 1.31226,0.97632 2.07861,0.97632c0.60889,0 1.21777,-0.19946 1.72168,-0.61939l9.02832,-7.47461v67.21899h-8.0625c-1.49072,0 -2.6875,1.20728 -2.6875,2.6875c0,1.48022 1.19678,2.6875 2.6875,2.6875h150.5c1.49072,0 2.6875,-1.20728 2.6875,-2.6875c0,-1.48022 -1.19678,-2.6875 -2.6875,-2.6875h-8.0625v-67.21899l9.02832,7.47461c0.50391,0.41992 1.11279,0.61939 1.72168,0.61939c0.76636,0 1.53272,-0.33594 2.06811,-0.96582c0.94483,-1.15478 0.78735,-2.84497 -0.35693,-3.78979l-77.9375,-64.5c-0.07349,-0.06299 -0.16797,-0.08398 -0.25195,-0.13647c-0.15747,-0.10498 -0.30444,-0.18897 -0.48291,-0.25195c-0.15747,-0.06299 -0.30444,-0.10498 -0.47241,-0.14697c-0.16797,-0.03149 -0.33594,-0.04199 -0.5144,-0.04199zM83.3125,22.29785l61.8125,51.15698v44.79517h-43v-21.5c0,-2.96045 -2.41455,-5.375 -5.375,-5.375h-26.875c-2.96045,0 -5.375,2.41455 -5.375,5.375v21.5h-43v-44.79517zM83.3125,48.375c-7.41162,0 -13.4375,6.02588 -13.4375,13.4375c0,7.41162 6.02588,13.4375 13.4375,13.4375c7.41162,0 13.4375,-6.02588 13.4375,-13.4375c0,-7.41162 -6.02588,-13.4375 -13.4375,-13.4375zM83.3125,53.1936c4.75561,0 8.6189,3.86328 8.6189,8.6189c0,4.75561 -3.86328,8.6189 -8.6189,8.6189c-4.75561,0 -8.6189,-3.86328 -8.6189,-8.6189c0,-4.75561 3.86328,-8.6189 8.6189,-8.6189zM69.875,96.75h26.875v48.23853h-26.875zM88.6875,115.5625c-1.49072,0 -2.6875,1.20728 -2.6875,2.6875v5.375c0,1.48022 1.19678,2.6875 2.6875,2.6875c1.49072,0 2.6875,-1.20728 2.6875,-2.6875v-5.375c0,-1.48022 -1.19678,-2.6875 -2.6875,-2.6875zM21.5,123.625h43v21.5h-43zM102.125,123.625h43v21.5h-43zM29.5625,129c-1.49072,0 -2.6875,1.20728 -2.6875,2.6875v5.375c0,1.48022 1.19678,2.6875 2.6875,2.6875c1.49072,0 2.6875,-1.20728 2.6875,-2.6875v-5.375c0,-1.48022 -1.19678,-2.6875 -2.6875,-2.6875zM43,129c-1.49072,0 -2.6875,1.20728 -2.6875,2.6875v5.375c0,1.48022 1.19678,2.6875 2.6875,2.6875c1.49072,0 2.6875,-1.20728 2.6875,-2.6875v-5.375c0,-1.48022 -1.19678,-2.6875 -2.6875,-2.6875zM56.4375,129c-1.49072,0 -2.6875,1.20728 -2.6875,2.6875v5.375c0,1.48022 1.19678,2.6875 2.6875,2.6875c1.49072,0 2.6875,-1.20728 2.6875,-2.6875v-5.375c0,-1.48022 -1.19678,-2.6875 -2.6875,-2.6875zM110.1875,129c-1.49072,0 -2.6875,1.20728 -2.6875,2.6875v5.375c0,1.48022 1.19678,2.6875 2.6875,2.6875c1.49072,0 2.6875,-1.20728 2.6875,-2.6875v-5.375c0,-1.48022 -1.19678,-2.6875 -2.6875,-2.6875zM123.625,129c-1.49072,0 -2.6875,1.20728 -2.6875,2.6875v5.375c0,1.48022 1.19678,2.6875 2.6875,2.6875c1.49072,0 2.6875,-1.20728 2.6875,-2.6875v-5.375c0,-1.48022 -1.19678,-2.6875 -2.6875,-2.6875zM137.0625,129c-1.49072,0 -2.6875,1.20728 -2.6875,2.6875v5.375c0,1.48022 1.19678,2.6875 2.6875,2.6875c1.49072,0 2.6875,-1.20728 2.6875,-2.6875v-5.375c0,-1.48022 -1.19678,-2.6875 -2.6875,-2.6875z"></path>
										</g>
									</g>
								</svg>
								<p>Auto + Home Insurance</p>
								<p className="insurance_description">
									People save 20% on average by bundling auto & home insurance
								</p>
							</div>
							<div
								className="insurance"
								onClick={() => this.submitForm("auto")}
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									x="0px"
									y="0px"
									width="100"
									height="100"
									viewBox="0 0 172 172"
									style={{ fill: "#000000" }}
								>
									<g
										fill="none"
										fillRule="nonzero"
										stroke="none"
										strokeWidth="1"
										strokeLinecap="butt"
										strokeLinejoin="miter"
										strokeMiterlimit="10"
										strokeDasharray=""
										strokeDashoffset="0"
										fontFamily="none"
										fontWeight="none"
										fontSize="none"
										textAnchor="none"
										style={{ mixBlendMode: "normal" }}
									>
										<path d="M0,172v-172h172v172z" fill="none"></path>
										<g fill="#627df7">
											<path d="M56.82593,16.125c-10.92847,0 -20.54468,7.38013 -23.36865,17.96216l-5.23853,19.66284h-14.78125c-4.44067,0 -8.0625,3.62183 -8.0625,8.0625v5.375c0,4.44067 3.62183,8.0625 8.0625,8.0625h1.27026c-2.57202,4.95508 -3.95776,10.51904 -3.95776,16.125v29.5625c0,4.37768 2.1311,8.23047 5.375,10.67651v13.51099c0,1.96314 0.5669,3.78979 1.49072,5.375h-14.92822c-1.49072,0 -2.6875,1.20728 -2.6875,2.6875c0,1.48022 1.19678,2.6875 2.6875,2.6875h166.625c1.49072,0 2.6875,-1.20728 2.6875,-2.6875c0,-1.48022 -1.19678,-2.6875 -2.6875,-2.6875h-14.93872c0.93433,-1.58521 1.50122,-3.41186 1.50122,-5.375v-13.51099c3.2439,-2.44604 5.375,-6.30933 5.375,-10.67651v-29.5625c0,-5.60596 -1.38574,-11.16992 -3.95776,-16.125h1.27026c4.44067,0 8.0625,-3.62183 8.0625,-8.0625v-5.375c0,-4.44067 -3.62183,-8.0625 -8.0625,-8.0625h-14.78125l-5.24902,-19.66284c-2.81348,-10.58203 -12.42969,-17.96216 -23.35815,-17.96216zM56.82593,21.5h58.34815c8.50342,0 15.97803,5.74243 18.17212,13.9624l5.42749,20.33472c0.79785,3.00244 2.1521,5.78442 4.01025,8.28296l1.6062,2.1311l-4.70312,2.28857c-1.82666,0.90283 -3.87378,1.37524 -5.9104,1.37524h-2.33057c-1.28076,-7.61108 -7.90503,-13.4375 -15.88354,-13.4375c-7.97852,0 -14.59228,5.82642 -15.88354,13.4375h-61.20361c-2.04712,0 -4.10473,-0.48291 -5.95239,-1.39624l-4.8291,-2.38306l1.52222,-2.01562c1.85815,-2.48804 3.2124,-5.28052 4.01025,-8.28296l5.42749,-20.33472c2.19409,-8.21997 9.6687,-13.9624 18.17212,-13.9624zM80.40454,32.25c-1.49072,0 -2.6875,1.20728 -2.6875,2.6875c0,1.48022 1.19678,2.6875 2.6875,2.6875h11.42188c1.49072,0 2.6875,-1.20728 2.6875,-2.6875c0,-1.48022 -1.19678,-2.6875 -2.6875,-2.6875zM13.4375,59.125h12.61865c-0.35693,0.58789 -0.72437,1.16528 -1.14429,1.72168l-6.77124,9.02832h-4.70312c-1.48022,0 -2.6875,-1.20728 -2.6875,-2.6875v-5.375c0,-1.48022 1.20728,-2.6875 2.6875,-2.6875zM145.95435,59.125h12.60815c1.48022,0 2.6875,1.20728 2.6875,2.6875v5.375c0,1.48022 -1.20728,2.6875 -2.6875,2.6875h-4.70312l-6.77124,-9.02832c-0.41992,-0.5564 -0.78735,-1.13379 -1.13379,-1.72168zM115.5625,61.8125c4.99707,0 9.16479,3.44336 10.37207,8.0625h-20.74414c1.20728,-4.61914 5.375,-8.0625 10.37207,-8.0625zM24.41846,70.46289l5.73193,2.84497c2.57202,1.27026 5.45898,1.94214 8.32495,1.94214h95.30127c2.85547,0 5.71094,-0.66138 8.27246,-1.92114l5.62695,-2.73999l2.28857,3.05493c2.83447,3.7793 4.72412,8.23047 5.50098,12.8916c-0.15747,0.0105 -0.31494,-0.0105 -0.47241,0.02099l-22.38184,3.72681c-5.20703,0.87134 -8.98633,5.33301 -8.98633,10.61353v1.22827c0,2.96045 2.41455,5.375 5.375,5.375h26.875v13.4375c0,4.44067 -3.62183,8.0625 -8.0625,8.0625h-123.625c-4.44067,0 -8.0625,-3.62183 -8.0625,-8.0625v-13.4375h26.875c2.96045,0 5.375,-2.41455 5.375,-5.375v-1.22827c0,-5.28052 -3.7793,-9.74219 -8.98633,-10.61353l-22.38184,-3.72681c-0.15747,-0.03149 -0.31494,-0.0105 -0.47241,-0.02099c0.77685,-4.66113 2.6665,-9.1123 5.50098,-12.8916zM16.125,91.85791l22.38184,3.7268c2.60352,0.44092 4.49316,2.677 4.49316,5.31201v1.22827h-26.875zM155.875,91.86841v10.25659h-26.875v-1.22827c0,-2.63501 1.88965,-4.87109 4.49316,-5.31201zM59.125,96.75c-1.49072,0 -2.6875,1.20728 -2.6875,2.6875v5.375c0,1.48022 1.19678,2.6875 2.6875,2.6875c1.49072,0 2.6875,-1.20728 2.6875,-2.6875v-5.375c0,-1.48022 -1.19678,-2.6875 -2.6875,-2.6875zM72.5625,96.75c-1.49072,0 -2.6875,1.20728 -2.6875,2.6875v5.375c0,1.48022 1.19678,2.6875 2.6875,2.6875c1.49072,0 2.6875,-1.20728 2.6875,-2.6875v-5.375c0,-1.48022 -1.19678,-2.6875 -2.6875,-2.6875zM86,96.75c-1.49072,0 -2.6875,1.20728 -2.6875,2.6875v5.375c0,1.48022 1.19678,2.6875 2.6875,2.6875c1.49072,0 2.6875,-1.20728 2.6875,-2.6875v-5.375c0,-1.48022 -1.19678,-2.6875 -2.6875,-2.6875zM99.4375,96.75c-1.49072,0 -2.6875,1.20728 -2.6875,2.6875v5.375c0,1.48022 1.19678,2.6875 2.6875,2.6875c1.49072,0 2.6875,-1.20728 2.6875,-2.6875v-5.375c0,-1.48022 -1.19678,-2.6875 -2.6875,-2.6875zM112.875,96.75c-1.49072,0 -2.6875,1.20728 -2.6875,2.6875v5.375c0,1.48022 1.19678,2.6875 2.6875,2.6875c1.49072,0 2.6875,-1.20728 2.6875,-2.6875v-5.375c0,-1.48022 -1.19678,-2.6875 -2.6875,-2.6875zM23.96704,112.875c-1.49072,0 -2.6875,1.20728 -2.6875,2.6875c0,1.48022 1.19678,2.6875 2.6875,2.6875h11.42188c1.49072,0 2.6875,-1.20728 2.6875,-2.6875c0,-1.48022 -1.19678,-2.6875 -2.6875,-2.6875zM45.46704,112.875c-1.49072,0 -2.6875,1.20728 -2.6875,2.6875c0,1.48022 1.19678,2.6875 2.6875,2.6875h81.29688c1.49072,0 2.6875,-1.20728 2.6875,-2.6875c0,-1.48022 -1.19678,-2.6875 -2.6875,-2.6875zM136.84204,112.875c-1.49072,0 -2.6875,1.20728 -2.6875,2.6875c0,1.48022 1.19678,2.6875 2.6875,2.6875h11.42188c1.49072,0 2.6875,-1.20728 2.6875,-2.6875c0,-1.48022 -1.19678,-2.6875 -2.6875,-2.6875zM21.5,134.375h16.125v10.75c0,2.96045 -2.41455,5.375 -5.375,5.375h-5.375c-2.96045,0 -5.375,-2.41455 -5.375,-5.375zM43,134.375h86v10.75c0,1.96314 0.5669,3.78979 1.50122,5.375h-89.00244c0.93433,-1.58521 1.50122,-3.41186 1.50122,-5.375zM134.375,134.375h16.125v10.75c0,2.96045 -2.41455,5.375 -5.375,5.375h-5.375c-2.96045,0 -5.375,-2.41455 -5.375,-5.375z"></path>
										</g>
									</g>
								</svg>
								<p>Auto Insurance</p>
								<p className="insurance_description">
									I just need auto insurance quotes
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="extra-space"></div>
				<Partners />
				<HowItWorks />
				<WhyUs />
				<Media />
				<FAQ />
				<SubscribeSection />
				<Footer />
			</div>
		);
	}
}
export default Home;
