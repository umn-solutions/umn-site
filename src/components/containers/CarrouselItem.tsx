export interface CarrouselItemProps {
	title: string;
	text: string;
	data: { title: string; text: string; icon: string }[];
}

export default function CarrouselItem({
	title,
	text,
	data,
}: CarrouselItemProps) {
	return (
		<div className="carrousel-item">
			<h3 className="carrousel-item__title">{title}</h3>
			<p className="carrousel-item__text">{text}</p>

			<div className="carrousel-item__data">
				{data.map((e, i) => (
					<div
						className="carrousel-item__data-item"
						key={"carrousel-item__data-item-" + i}
					>
						<h4 className="carrousel-item__data-item__title">
							{e.title}
						</h4>
						<ul className="carrousel-item__data-item__text">
							{e.text.split("\n").map((e, i) => (
								<li key={"carrousel-item__li-" + i}>{e}</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</div>
	);
}
