import React, { Component } from "react";
import ItemsCarousel from "react-items-carousel";
import mediaData from "../mediaData.json";

class Media extends Component {
	constructor() {
		super();
		this.state = {
			activeItemIndex: 0,
			no_of_cards: 3
		};
	}

	componentWillMount() {
		if (window.innerWidth < 600) {
			this.setState({ no_of_cards: 1 });
		}
	}
	render() {
		const divStyle = src => ({
			background: "url(" + src + ")"
		});
		const articles = mediaData.map(function(article) {
			return (
				<div className="media-block" key={article.article_id}>
					{/* <img alt="media_image" src={article.image} /> */}
					<div id="media-img" style={divStyle(article.image)}></div>
					<h1>{article.title}</h1>
					<p>{article.text}</p>
					<a target="_blank" rel="noopener noreferrer" href={article.link}>
						Read More &rarr;
					</a>
					<br />
					<p className="media-source">
						{article.link.split("/")[2].replace("www.", "")}
					</p>
				</div>
			);
		});
		return (
			<div className="media-container" id="media-container">
				<div className="media-section">
					<br />
					<h1>Media</h1>
					<div className="media-wrapper">
						<ItemsCarousel
							infiniteLoop={false}
							gutter={12}
							activePosition={"center"}
							chevronWidth={30}
							disableSwipe={false}
							alwaysShowChevrons={false}
							numberOfCards={this.state.no_of_cards}
							slidesToScroll={this.state.no_of_cards}
							outsideChevron={true}
							showSlither={false}
							firstAndLastGutter={false}
							activeItemIndex={this.state.activeItemIndex}
							requestToChangeActive={value =>
								this.setState({ activeItemIndex: value })
							}
							rightChevron={
								<img
									alt="right_arrow"
									src="https://img.icons8.com/ios/30/000000/forward--v1.png"
								/>
							}
							leftChevron={
								<img
									alt="left_arrow"
									src="https://img.icons8.com/ios/30/000000/back--v1.png"
								/>
							}
						>
							{articles}
						</ItemsCarousel>
					</div>
				</div>
			</div>
		);
	}
}
export default Media;
