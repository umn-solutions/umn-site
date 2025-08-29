import Image from "next/image";
import bi from "@/media/bi.png";
import ci from "@/media/ci.png";
import corporateGov from "@/media/corporate-governance.png";
import customAI from "@/media/custom-ai.png";
import dataAnalysis from "@/media/data-analysis.png";
import dataVisualization from "@/media/data-visualization.png";
import digitalTransformation from "@/media/digital-transf.png";
import integrationServices from "@/media/integration-services.png";
import lightAutomation from "@/media/light-automation.png";
import ml from "@/media/ml.png";
import nlp from "@/media/nlp.png";
import predictiveAnalysis from "@/media/predictive-analysis.png";
import projectManagement from "@/media/project-management.png";
import rpa from "@/media/rpa.png";
import webdev from "@/media/webdev.png";
import workflowAutomation from "@/media/workflow-automation.png";

const ICONS = {
	bi,
	ci,
	corporateGov,
	customAI,
	dataAnalysis,
	dataVisualization,
	digitalTransformation,
	integrationServices,
	lightAutomation,
	ml,
	nlp,
	predictiveAnalysis,
	projectManagement,
	rpa,
	webdev,
	workflowAutomation,
};

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
						<Image
							src={ICONS[e.icon as keyof typeof ICONS]}
							alt=""
						/>
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
