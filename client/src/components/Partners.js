import React, { Component } from "react";
import ItemsCarousel from "react-items-carousel";

class Partners extends Component {
	constructor() {
		super();
		this.state = {
			activeItemIndex: 0,
			no_of_cards: 6,
			slides_to_scroll: 2
		};
	}

	componentWillMount() {
		if (window.innerWidth < 600) {
			this.setState({ no_of_cards: 2 });
		}
	}

	componentDidMount() {
		this.interval = setInterval(this.tick, 2000);
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}

	tick = () =>
		this.setState(prevState => ({
			activeItemIndex: (prevState.activeItemIndex + 1) % (28 - 6 + 1)
		}));

	onChange = value => this.setState({ activeItemIndex: value });

	render() {
		return (
			<div className="partners-container">
				<div className="partners-section">
					<br />
					<p>
						We can provide quotes from several top-rated national and local
						insurance companies in the United States.
					</p>
					<div className="partners-carousel-background">
						<div className="partners-carousel">
							<ItemsCarousel
								infiniteLoop={false}
								gutter={12}
								activePosition={"center"}
								chevronWidth={20}
								disableSwipe={false}
								alwaysShowChevrons={false}
								numberOfCards={this.state.no_of_cards}
								slidesToScroll={this.state.slides_to_scroll}
								outsideChevron={false}
								showSlither={false}
								firstAndLastGutter={false}
								activeItemIndex={this.state.activeItemIndex}
								requestToChangeActive={value =>
									this.setState({ activeItemIndex: value })
								}
								rightChevron={
									<svg
										className="partners-right-arrow"
										xmlns="http://www.w3.org/2000/svg"
										x="0px"
										y="0px"
										width="48"
										height="48"
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
											<g fill="#edf0fe">
												<path d="M86,6.88c-43.65844,0 -79.12,35.46156 -79.12,79.12c0,43.65844 35.46156,79.12 79.12,79.12c43.65844,0 79.12,-35.46156 79.12,-79.12c0,-43.65844 -35.46156,-79.12 -79.12,-79.12zM86,13.76c39.93625,0 72.24,32.30375 72.24,72.24c0,39.93625 -32.30375,72.24 -72.24,72.24c-39.93625,0 -72.24,-32.30375 -72.24,-72.24c0,-39.93625 32.30375,-72.24 72.24,-72.24zM75.3575,48.0525c-0.14781,0.02688 -0.29562,0.06719 -0.43,0.1075c-1.29,0.22844 -2.32469,1.16906 -2.6875,2.41875c-0.36281,1.26313 0.01344,2.60688 0.9675,3.49375l31.9275,31.9275l-31.9275,31.9275c-1.37062,1.37063 -1.37062,3.57438 0,4.945c1.37063,1.37063 3.57438,1.37063 4.945,0l34.4,-34.4c0.67188,-0.645 1.04813,-1.54531 1.04813,-2.4725c0,-0.92719 -0.37625,-1.8275 -1.04813,-2.4725l-34.4,-34.4c-0.71219,-0.76594 -1.74687,-1.15562 -2.795,-1.075z"></path>
											</g>
										</g>
									</svg>
								}
								leftChevron={
									<svg
										className="partners-left-arrow"
										xmlns="http://www.w3.org/2000/svg"
										x="0px"
										y="0px"
										width="48"
										height="48"
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
											<g fill="#edf0fe">
												<path d="M86,6.88c-43.65844,0 -79.12,35.46156 -79.12,79.12c0,43.65844 35.46156,79.12 79.12,79.12c43.65844,0 79.12,-35.46156 79.12,-79.12c0,-43.65844 -35.46156,-79.12 -79.12,-79.12zM86,13.76c39.93625,0 72.24,32.30375 72.24,72.24c0,39.93625 -32.30375,72.24 -72.24,72.24c-39.93625,0 -72.24,-32.30375 -72.24,-72.24c0,-39.93625 32.30375,-72.24 72.24,-72.24zM95.89,48.16c-0.76594,0.08063 -1.49156,0.43 -2.0425,0.9675l-34.4,34.4c-0.67187,0.645 -1.04812,1.54531 -1.04812,2.4725c0,0.92719 0.37625,1.8275 1.04812,2.4725l34.4,34.4c1.37063,1.37063 3.57438,1.37063 4.945,0c1.37063,-1.37062 1.37063,-3.57437 0,-4.945l-31.9275,-31.9275l31.9275,-31.9275c1.11531,-1.03469 1.41094,-2.67406 0.73906,-4.03125c-0.65844,-1.37062 -2.15,-2.12312 -3.64156,-1.88125z"></path>
											</g>
										</g>
									</svg>
								}
							>
								<div className="partner-logo">
									<img
										alt="partner_logo"
										src="https://res.cloudinary.com/dldeixhrp/image/upload/v1594414641/1b_sxx1uh.png"
									/>
								</div>
								<div className="partner-logo">
									<img
										alt="partner_logo"
										src="https://res.cloudinary.com/dldeixhrp/image/upload/v1594414641/2b_gquxge.png"
									/>
								</div>
								<div className="partner-logo">
									<img
										alt="partner_logo"
										src="https://res.cloudinary.com/dldeixhrp/image/upload/v1594414642/3b_bhaayq.png"
									/>
								</div>
								<div className="partner-logo">
									<img
										alt="partner_logo"
										src="https://res.cloudinary.com/dldeixhrp/image/upload/v1594414642/4b_axpy8y.png"
									/>
								</div>
								<div className="partner-logo">
									<img
										alt="partner_logo"
										src="https://res.cloudinary.com/dldeixhrp/image/upload/v1594414642/5b_hrtyd4.png"
									/>
								</div>
								<div className="partner-logo">
									<img
										alt="partner_logo"
										src="https://res.cloudinary.com/dldeixhrp/image/upload/v1594414642/6b_gamyt7.png"
									/>
								</div>
								<div className="partner-logo">
									<img
										alt="partner_logo"
										src="https://res.cloudinary.com/dldeixhrp/image/upload/v1594414642/7b_mzxxf1.png"
									/>
								</div>
								<div className="partner-logo">
									<img
										alt="partner_logo"
										src="https://res.cloudinary.com/dldeixhrp/image/upload/v1594414642/8b_xlcapk.png"
									/>
								</div>
								<div className="partner-logo">
									<img
										alt="partner_logo"
										src="https://res.cloudinary.com/dldeixhrp/image/upload/v1594414642/9b_mksfgs.png"
									/>
								</div>
								<div className="partner-logo">
									<img
										alt="partner_logo"
										src="https://res.cloudinary.com/dldeixhrp/image/upload/v1594414642/10b_yromsl.png"
									/>
								</div>
								<div className="partner-logo">
									<img
										alt="partner_logo"
										src="https://res.cloudinary.com/dldeixhrp/image/upload/v1594414642/11b_ogqpi5.png"
									/>
								</div>
								<div className="partner-logo">
									<img
										alt="partner_logo"
										src="https://res.cloudinary.com/dldeixhrp/image/upload/v1594414642/12b_k06wym.png"
									/>
								</div>
								<div className="partner-logo">
									<img
										alt="partner_logo"
										src="https://res.cloudinary.com/dldeixhrp/image/upload/v1594414643/13b_speham.png"
									/>
								</div>
								<div className="partner-logo">
									<img
										alt="partner_logo"
										src="https://res.cloudinary.com/dldeixhrp/image/upload/v1594414643/14b_pm1ygp.png"
									/>
								</div>
								<div className="partner-logo">
									<img
										alt="partner_logo"
										src="https://res.cloudinary.com/dldeixhrp/image/upload/v1594414643/15b_qzm2so.png"
									/>
								</div>
								<div className="partner-logo">
									<img
										alt="partner_logo"
										src="https://res.cloudinary.com/dldeixhrp/image/upload/v1594414643/16b_hm56qc.png"
									/>
								</div>
								<div className="partner-logo">
									<img
										alt="partner_logo"
										src="https://res.cloudinary.com/dldeixhrp/image/upload/v1594414643/17b_rled8v.png"
									/>
								</div>
								<div className="partner-logo">
									<img
										alt="partner_logo"
										src="https://res.cloudinary.com/dldeixhrp/image/upload/v1594414643/18b_xscarn.png"
									/>
								</div>
								<div className="partner-logo">
									<img
										alt="partner_logo"
										src="https://res.cloudinary.com/dldeixhrp/image/upload/v1594414643/19b_lzaten.png"
									/>
								</div>
								<div className="partner-logo">
									<img
										alt="partner_logo"
										src="https://res.cloudinary.com/dldeixhrp/image/upload/v1594414643/20b_kgyik5.png"
									/>
								</div>
								<div className="partner-logo">
									<img
										alt="partner_logo"
										src="https://res.cloudinary.com/dldeixhrp/image/upload/v1594414643/21b_zkcepb.png"
									/>
								</div>
								<div className="partner-logo">
									<img
										alt="partner_logo"
										src="https://res.cloudinary.com/dldeixhrp/image/upload/v1594414643/22b_eqabby.png"
									/>
								</div>
								<div className="partner-logo">
									<img
										alt="partner_logo"
										src="https://res.cloudinary.com/dldeixhrp/image/upload/v1594414643/23b_maq6ou.png"
									/>
								</div>
								<div className="partner-logo">
									<img
										alt="partner_logo"
										src="https://res.cloudinary.com/dldeixhrp/image/upload/v1594414643/24b_xt1k8s.png"
									/>
								</div>
								<div className="partner-logo">
									<img
										alt="partner_logo"
										src="https://res.cloudinary.com/dldeixhrp/image/upload/v1594414644/25b_zebgii.png"
									/>
								</div>
								<div className="partner-logo">
									<img
										alt="partner_logo"
										src="https://res.cloudinary.com/dldeixhrp/image/upload/v1594414644/26b_zzmekr.png"
									/>
								</div>
								<div className="partner-logo">
									<img
										alt="partner_logo"
										src="https://res.cloudinary.com/dldeixhrp/image/upload/v1594414644/27b_relnkg.png"
									/>
								</div>
								<div className="partner-logo">
									<img
										alt="partner_logo"
										src="https://res.cloudinary.com/dldeixhrp/image/upload/v1594414644/28b_mtbxzu.png"
									/>
								</div>
							</ItemsCarousel>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default Partners;
