import React, { Component } from "react";
import {
	CollapsibleComponent,
	CollapsibleHead,
	CollapsibleContent
} from "react-collapsible-component";
import * as $ from "jquery";

class FAQ extends Component {
	componentDidMount() {
		var flag1 = false;
		$(".additionalClassForHead1").click(function() {
			if (!flag1) {
				flag1 = true;
				this.childNodes[1].innerHTML =
					'<img alt="faq_arrow" className="faq-arrow" src="https://img.icons8.com/metro/26/627df7/collapse-arrow.png" />';
			} else {
				flag1 = false;
				this.childNodes[1].innerHTML =
					'<img alt="faq_arrow" className="faq-arrow" src="https://img.icons8.com/metro/26/000000/expand-arrow.png" />';
			}
		});
		var flag2 = false;
		$(".additionalClassForHead2").click(function() {
			if (!flag2) {
				flag2 = true;
				this.childNodes[1].innerHTML =
					'<img alt="faq_arrow" className="faq-arrow" src="https://img.icons8.com/metro/26/627df7/collapse-arrow.png" />';
			} else {
				flag2 = false;
				this.childNodes[1].innerHTML =
					'<img alt="faq_arrow" className="faq-arrow" src="https://img.icons8.com/metro/26/000000/expand-arrow.png" />';
			}
		});
		var flag3 = false;
		$(".additionalClassForHead3").click(function() {
			if (!flag3) {
				flag3 = true;
				this.childNodes[1].innerHTML =
					'<img alt="faq_arrow" className="faq-arrow" src="https://img.icons8.com/metro/26/627df7/collapse-arrow.png" />';
			} else {
				flag3 = false;
				this.childNodes[1].innerHTML =
					'<img alt="faq_arrow" className="faq-arrow" src="https://img.icons8.com/metro/26/000000/expand-arrow.png" />';
			}
		});
		var flag4 = false;
		$(".additionalClassForHead4").click(function() {
			if (!flag4) {
				flag4 = true;
				this.childNodes[1].innerHTML =
					'<img alt="faq_arrow" className="faq-arrow" src="https://img.icons8.com/metro/26/627df7/collapse-arrow.png" />';
			} else {
				flag4 = false;
				this.childNodes[1].innerHTML =
					'<img alt="faq_arrow" className="faq-arrow" src="https://img.icons8.com/metro/26/000000/expand-arrow.png" />';
			}
		});
		var flag5 = false;
		$(".additionalClassForHead5").click(function() {
			if (!flag5) {
				flag5 = true;
				this.childNodes[1].innerHTML =
					'<img alt="faq_arrow" className="faq-arrow" src="https://img.icons8.com/metro/26/627df7/collapse-arrow.png" />';
			} else {
				flag5 = false;
				this.childNodes[1].innerHTML =
					'<img alt="faq_arrow" className="faq-arrow" src="https://img.icons8.com/metro/26/000000/expand-arrow.png" />';
			}
		});
		var flag6 = false;
		$(".additionalClassForHead6").click(function() {
			if (!flag6) {
				flag6 = true;
				this.childNodes[1].innerHTML =
					'<img alt="faq_arrow" className="faq-arrow" src="https://img.icons8.com/metro/26/627df7/collapse-arrow.png" />';
			} else {
				flag6 = false;
				this.childNodes[1].innerHTML =
					'<img alt="faq_arrow" className="faq-arrow" src="https://img.icons8.com/metro/26/000000/expand-arrow.png" />';
			}
		});
		var flag7 = false;
		$(".additionalClassForHead7").click(function() {
			if (!flag7) {
				flag7 = true;
				this.childNodes[1].innerHTML =
					'<img alt="faq_arrow" className="faq-arrow" src="https://img.icons8.com/metro/26/627df7/collapse-arrow.png" />';
			} else {
				flag7 = false;
				this.childNodes[1].innerHTML =
					'<img alt="faq_arrow" className="faq-arrow" src="https://img.icons8.com/metro/26/000000/expand-arrow.png" />';
			}
		});
		var flag8 = false;
		$(".additionalClassForHead8").click(function() {
			if (!flag8) {
				flag8 = true;
				this.childNodes[1].innerHTML =
					'<img alt="faq_arrow" className="faq-arrow" src="https://img.icons8.com/metro/26/627df7/collapse-arrow.png" />';
			} else {
				flag8 = false;
				this.childNodes[1].innerHTML =
					'<img alt="faq_arrow" className="faq-arrow" src="https://img.icons8.com/metro/26/000000/expand-arrow.png" />';
			}
		});
		var flag9 = false;
		$(".additionalClassForHead9").click(function() {
			if (!flag9) {
				flag9 = true;
				this.childNodes[1].innerHTML =
					'<img alt="faq_arrow" className="faq-arrow" src="https://img.icons8.com/metro/26/627df7/collapse-arrow.png" />';
			} else {
				flag9 = false;
				this.childNodes[1].innerHTML =
					'<img alt="faq_arrow" className="faq-arrow" src="https://img.icons8.com/metro/26/000000/expand-arrow.png" />';
			}
		});
		var flag10 = false;
		$(".additionalClassForHead10").click(function() {
			if (!flag10) {
				flag10 = true;
				this.childNodes[1].innerHTML =
					'<img alt="faq_arrow" className="faq-arrow" src="https://img.icons8.com/metro/26/627df7/collapse-arrow.png" />';
			} else {
				flag10 = false;
				this.childNodes[1].innerHTML =
					'<img alt="faq_arrow" className="faq-arrow" src="https://img.icons8.com/metro/26/000000/expand-arrow.png" />';
			}
		});
		var flag11 = false;
		$(".additionalClassForHead11").click(function() {
			if (!flag11) {
				flag11 = true;
				this.childNodes[1].innerHTML =
					'<img alt="faq_arrow" className="faq-arrow" src="https://img.icons8.com/metro/26/627df7/collapse-arrow.png" />';
			} else {
				flag11 = false;
				this.childNodes[1].innerHTML =
					'<img alt="faq_arrow" className="faq-arrow" src="https://img.icons8.com/metro/26/000000/expand-arrow.png" />';
			}
		});

		var flag12 = false;
		$(".additionalClassForHead12").click(function() {
			if (!flag12) {
				flag12 = true;
				this.childNodes[1].innerHTML =
					'<img alt="faq_arrow" className="faq-arrow" src="https://img.icons8.com/metro/26/627df7/collapse-arrow.png" />';
			} else {
				flag12 = false;
				this.childNodes[1].innerHTML =
					'<img alt="faq_arrow" className="faq-arrow" src="https://img.icons8.com/metro/26/000000/expand-arrow.png" />';
			}
		});
	}
	render() {
		return (
			<div className="container">
				<div className="faq" id="faq">
					<br />
					<h1>Frequently Asked Questions</h1>
					<div className="faq-container">
						<h3>Auto Insurance Reform</h3>
						<CollapsibleComponent name="michauto">
							<CollapsibleHead className="additionalClassForHead1">
								<span>What is Michigan’s new auto insurance reform?</span>
								<div className="close-faq">
									<img
										alt="faq_arrow"
										className="faq-arrow"
										src="https://img.icons8.com/metro/26/000000/expand-arrow.png"
									/>
								</div>
							</CollapsibleHead>
							<CollapsibleContent className="additionalClassForContent">
								<p>
									Today, Michigan drivers are required by law to have a No-Fault
									automobile insurance policy that includes Personal Injury
									Protection (PIP) benefits. While several states in the U.S.
									also have No-Fault requirements, Michigan’s No-Fault law is
									unique in that the PIP coverage provides for unlimited medical
									benefits for the lifetime of the injured person when those
									injuries result from an auto accident. On July 2, 2020, many
									changes to the existing no-fault auto insurance law will take
									effect, including giving Michigan drivers a choice in their
									level of PIP coverage. Under the new plan, drivers will be
									able to choose from up to six options for Personal Injury
									Protection coverage.
								</p>
							</CollapsibleContent>
							<CollapsibleHead className="additionalClassForHead2">
								<span>Why is Michigan changing the law?</span>
								<div className="close-faq">
									<img
										alt="faq_arrow"
										className="faq-arrow"
										src="https://img.icons8.com/metro/26/000000/expand-arrow.png"
									/>
								</div>
							</CollapsibleHead>
							<CollapsibleContent>
								<p>
									Since 1973, all Michigan automobile insurance policies have
									had to provide unlimited Personal Injury Protection benefits.
									If you qualified for PIP benefits because you were injured in
									an automobile accident, you could get lifetime medical
									benefits for treatment related to your care, recovery or
									rehabilitation. It sounded like a great idea at the time — but
									as health care costs and the frequency of lawsuits continued
									to rise, it meant that auto insurance costs rose
									significantly, too. Today, Michigan has the 4th most expensive
									auto insurance in the country Unsurprisingly, it is also
									ranked 4th in the U.S. with about 20% of drivers uninsured.
								</p>
							</CollapsibleContent>
							<CollapsibleHead className="additionalClassForHead3">
								<span>When will auto insurance reform happen?</span>
								<div className="close-faq">
									<img
										alt="faq_arrow"
										className="faq-arrow"
										src="https://img.icons8.com/metro/26/000000/expand-arrow.png"
									/>
								</div>
							</CollapsibleHead>
							<CollapsibleContent>
								<p>
									While some parts of the law are already active, the parts that
									impact your selection options for PIP coverage go into effect
									on July 2, 2020. MI Coverage Guru is committed to making the
									transition easy and saving money for you and your family.
								</p>
							</CollapsibleContent>
							<CollapsibleHead className="additionalClassForHead4">
								<span>
									How will the new law impact my auto insurance policy?
								</span>
								<div className="close-faq">
									<img
										alt="faq_arrow"
										className="faq-arrow"
										src="https://img.icons8.com/metro/26/000000/expand-arrow.png"
									/>
								</div>
							</CollapsibleHead>
							<CollapsibleContent>
								<p>
									The short answer is that it means you have a choice to make.
									When you renew your policy after July 2, 2020, you can keep
									your unlimited Personal Injury Protection coverage(PIP) limit,
									which is the same coverage you have today, or you can choose
									to reduce your PIP coverage limit based on your own personal
									risk tolerance and financial situation. Regardless of the
									option you choose, you’ll still save money on your auto
									insurance. <br /> <br />
									PIP Coverage Options: <br />
									<br />
									1. Unlimited Coverage: Average 10% reduction in premium <br />
									2. $500,000: Average 20% reduction in premium <br />
									3. $250,000: Average 35% reduction in premium <br />
									4. $50,000: Average 45% reduction in premium <br />
									<br />
									The good news is that our licensed insurance agents are here
									to help provide you information and prevent you from
									overpaying for auto insurance.
								</p>
							</CollapsibleContent>
							<CollapsibleHead className="additionalClassForHead5">
								<span>Is my information kept confidential?</span>
								<div className="close-faq">
									<img
										alt="faq_arrow"
										className="faq-arrow"
										src="https://img.icons8.com/metro/26/000000/expand-arrow.png"
									/>
								</div>
							</CollapsibleHead>
							<CollapsibleContent>
								<p>
									We highly value and respect your privacy. We will not share or
									sell your information for marketing purposes to any 3rd
									parties. We also hate SPAM, and unnecessary phone calls.
								</p>
							</CollapsibleContent>
						</CollapsibleComponent>
						<h3>Introduction to Auto Insurance</h3>
						<CollapsibleComponent name="intro">
							<CollapsibleHead className="additionalClassForHead6">
								<span>
									Automobile Insurance: What is it and what does it cover?
								</span>
								<div className="close-faq">
									<img
										alt="faq_arrow"
										className="faq-arrow"
										src="https://img.icons8.com/metro/26/000000/expand-arrow.png"
									/>
								</div>
							</CollapsibleHead>
							<CollapsibleContent className="additionalClassForContent">
								<p>
									Automobile insurance can be broken down into 3 parts.
									<br />
									<br />
									<b>Automobile Liability:</b> Coverage for property damage and
									bodily injury you cause to third parties in an automobile
									accident.
									<br />
									<br />
									<b>Automobile Physical Damage:</b> Coverage for damage to your
									vehicle itself. This can be broken down into collision
									coverage and comprehensive coverage. Comprehensive coverage is
									for when your vehicle is damaged in a non-collision incident
									(while stored in your garage, while parked, if the vehicle is
									stolenor vandalized, etc.).
									<br />
									<br /> <b>Personal Injury Protection (PIP):</b> PIP is also
									referred to as “No-Fault” insurance and is a required coverage
									in Michigan if you own a vehicle. It is intended to provide
									coverage for medical expenses, lost wages and other expenses
									for both you and passengers in your vehicle.
								</p>
							</CollapsibleContent>
							<CollapsibleHead className="additionalClassForHead7">
								<span>Do I need to buy auto insurance?</span>
								<div className="close-faq">
									<img
										alt="faq_arrow"
										className="faq-arrow"
										src="https://img.icons8.com/metro/26/000000/expand-arrow.png"
									/>
								</div>
							</CollapsibleHead>
							<CollapsibleContent>
								<p>
									If you own a vehicle in Michigan, the answer is yes. Our
									experts can help you navigate through different coverage
									options and choose a plan that is tailored to your needs. We
									can offer quotes from several top-rated insurance companies
									and can help you save money.
								</p>
							</CollapsibleContent>
							<CollapsibleHead className="additionalClassForHead8">
								<span>What happens if I don’t purchase auto insurance?</span>
								<div className="close-faq">
									<img
										alt="faq_arrow"
										className="faq-arrow"
										src="https://img.icons8.com/metro/26/000000/expand-arrow.png"
									/>
								</div>
							</CollapsibleHead>
							<CollapsibleContent>
								<p>
									It is illegal to drive in Michigan without auto insurance on
									your vehicle. Besides the potential legal consequences, if you
									were to get in an accident and you’re uninsured, you could
									potentially be sued and lose your life’s savings.
								</p>
							</CollapsibleContent>
							<CollapsibleHead className="additionalClassForHead9">
								<span>Who can I include on my auto policy?</span>
								<div className="close-faq">
									<img
										alt="faq_arrow"
										className="faq-arrow"
										src="https://img.icons8.com/metro/26/000000/expand-arrow.png"
									/>
								</div>
							</CollapsibleHead>
							<CollapsibleContent>
								<p>
									Most auto policies allow for all members of the household that
									are licensed to drive to be included on your policy, as long
									as they live in the same house. This would include immediate
									or extended family members. Even a non-family member, such as
									a roommate, may be included if they do not have a policy of
									their own and are a licensed driver.
								</p>
							</CollapsibleContent>
							<CollapsibleHead className="additionalClassForHead10">
								<span>
									How does a comprehensive or collision deductible work?
								</span>
								<div className="close-faq">
									<img
										alt="faq_arrow"
										className="faq-arrow"
										src="https://img.icons8.com/metro/26/000000/expand-arrow.png"
									/>
								</div>
							</CollapsibleHead>
							<CollapsibleContent>
								<p>
									A deductible is the amount of money you must pay on a claim
									before your insurance company pays for the remaining amount.
									In Michigan, Broad Form Collision is preferred as your
									deductible would be waived if you are deemed to be less than
									50% at fault for an accident.
								</p>
							</CollapsibleContent>
							<CollapsibleHead className="additionalClassForHead11">
								<span>What type of payment options are available?</span>
								<div className="close-faq">
									<img
										alt="faq_arrow"
										className="faq-arrow"
										src="https://img.icons8.com/metro/26/000000/expand-arrow.png"
									/>
								</div>
							</CollapsibleHead>
							<CollapsibleContent>
								<p>
									Most carriers provide a monthly payment option, while also
									providing discounts if you pay in full for a six-month or
									annual term policy.
								</p>
							</CollapsibleContent>
							<CollapsibleHead className="additionalClassForHead12">
								<span>Will my automobile policy cover a rental vehicle?</span>
								<div className="close-faq">
									<img
										alt="faq_arrow"
										className="faq-arrow"
										src="https://img.icons8.com/metro/26/000000/expand-arrow.png"
									/>
								</div>
							</CollapsibleHead>
							<CollapsibleContent>
								<p>
									In most cases, yes; however, if you know you will be renting a
									vehicle, it is always a good idea to contact your agent to
									ensure your policy would extend coverage for the rental
									vehicle.
								</p>
							</CollapsibleContent>
						</CollapsibleComponent>
					</div>
				</div>
			</div>
		);
	}
}
export default FAQ;
