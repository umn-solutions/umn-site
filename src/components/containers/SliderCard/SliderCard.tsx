"use client";
import UMNTitle from "@/components/typography/UMNTitle";
import React, { useEffect, useRef, useState } from "react";

type SliderPaneProps = { title: string; items: string[] };

interface SliderCardProps {
	pane1: SliderPaneProps;
	pane2: SliderPaneProps;
}
export default function SliderCard({ pane1, pane2 }: SliderCardProps) {
	const cardRef = useRef<HTMLDivElement | null>(null);

	const [mousePos, setMousePos] = useState({ x: -1, y: -1 });

	useEffect(() => {
		if (cardRef.current) {
			//Initial setting
			if (mousePos.x < 0) {
				cardRef.current.style.width = `${40}%`;
				return;
			}
			const val =
				(((mousePos.x + Math.log(mousePos.y) * 10) * 1.2) /
					window.innerWidth) *
				100;

			const minWidth = window.innerWidth > 1000 ? 35 : 25,
				maxWidth = window.innerWidth > 1000 ? 70 : 95;
			cardRef.current.style.width = `${Math.max(minWidth, Math.min(val, maxWidth))}%`;
		}
	}, [mousePos]);

	return (
		<div
			className="slider-card"
			onMouseMove={(e) => setMousePos({ x: e.clientX, y: e.clientY })}
			onTouchMove={(e) =>
				setMousePos({
					x: e.touches[0].clientX,
					y: e.touches[0].clientY,
				})
			}
			autoFocus
		>
			<div
				ref={cardRef}
				className="slider-card__pane slider-card__pane--left"
			>
				<SliderPaneContent pane={pane1} />
			</div>
			<div className="slider-card__pane slider-card__pane--right">
				<SliderPaneContent
					pane={pane2}
					theme="light"
				/>
			</div>
		</div>
	);
}

const SliderPaneContent = ({
	pane,
	theme = "dark",
}: {
	pane: SliderPaneProps;
	theme?: "light" | "dark";
}) => (
	<div className="slider-card__content">
		{/* Title */}
		<UMNTitle variant={theme}>{pane.title}</UMNTitle>
		{/* N lines */}
		{pane.items.map((e, i) => (
			<p
				className="slider-card__content__item"
				key={`slider-card-pane-item-${i}`}
			>
				<span>{e}</span>
			</p>
		))}
	</div>
);
