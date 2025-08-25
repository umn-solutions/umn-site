"use client";
import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import {
	PrevButton,
	NextButton,
	usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import useEmblaCarousel from "embla-carousel-react";
import CarrouselItem, { CarrouselItemProps } from "../CarrouselItem";

type PropType = {
	slides: CarrouselItemProps[];
	options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
	const { slides, options } = props;
	const [emblaRef, emblaApi] = useEmblaCarousel(options);

	const { selectedIndex, scrollSnaps, onDotButtonClick } =
		useDotButton(emblaApi);

	const {
		prevBtnDisabled,
		nextBtnDisabled,
		onPrevButtonClick,
		onNextButtonClick,
	} = usePrevNextButtons(emblaApi);

	return (
		<section className="embla carousel">
			<div
				className="embla__viewport"
				ref={emblaRef}
			>
				<div className="embla__container">
					{slides.map((data, i) => (
						<div
							className="embla__slide"
							key={"carousel-item" + i}
						>
							{/* <<div className="embla__slide__number">{i + 1}</div>> */}
							<CarrouselItem {...data} />
						</div>
					))}
				</div>
			</div>

			<PrevButton
				onClick={onPrevButtonClick}
				disabled={prevBtnDisabled}
			/>
			<NextButton
				onClick={onNextButtonClick}
				disabled={nextBtnDisabled}
			/>

			<div className="embla__dots">
				{scrollSnaps.map((_, index) => (
					<DotButton
						key={index}
						onClick={() => onDotButtonClick(index)}
						className={"embla__dot".concat(
							index === selectedIndex
								? " embla__dot--selected"
								: ""
						)}
					/>
				))}
			</div>
		</section>
	);
};

export default EmblaCarousel;
