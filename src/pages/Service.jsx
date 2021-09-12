import React from 'react';
import { useHistory } from 'react-router-dom';
import { FormattedMessage as Text } from 'react-intl';
import {
	imgServiceWebDesign2,
	imgServiceWebDevelopment,
	imgServiceSSLCertificate3
} from '../assets/images/service-page/index';

const middleSectionDatas = [
	{
		title: 'service.web_design',
		text: `service.go_to_where_your_`,
		imageUrl: imgServiceWebDesign2
	},
	{
		title: 'service.web_development',
		text: `service.build_on_a_platform_`,
		imageUrl: imgServiceWebDevelopment
	},
	{
		title: 'service.ssl_certificated',
		text: `service.an_ssl_certificate_lets_`,
		imageUrl: imgServiceSSLCertificate3
	}
];

const bottomSectionDatas = [
	{
		title: 'service.branding',
		text: `service.a_strong_brand_produces_`
	},
	{
		title: 'service.website_optimization',
		text: `service.effective_websites_get_visitors_`
	},
	{
		title: 'service.website_support',
		text: `service.every_site_needs_some_`
	}
];

const Service = () => {
	const history = useHistory();

	const middleSection = middleSectionDatas.map((item, index) => {
		return (
			<div key={index}
				className={(index === 0 ? 'lg:pt-24 xl:pt-40' : 'lg:pt-20 xl:pt-32') + ' w-10/12 my-0 mx-auto pt-16 pb-5 md:w-full md:px-6 lg:px-12 xl:px-16 container'}
				data-aos={(index % 2 === 0 ? 'fade-right' : 'fade-left')}>
				<img src={item.imageUrl} alt={"imgWebDesign"}
					className="my-0 mx-auto rounded-lg shadow-xl w-full h-84 md:hidden object-cover" />

				<div className="flex">
					{index % 2 === 0 ? (
						<>
							<div className="w-full md:w-1/2 md:pr-6">
								<div
									className="text-xl text-gray-1000 font-bold mb-5 mt-6 sm:text-xl sm:mt-6 md:text-2xl xl:text-3xl">
									<Text id={item.title} /></div>

								<p className="whitespace-pre-wrap text-gray-900 sm:text-base lg:text-lg xl:text-xl">
									<Text id={item.text} />
								</p>

								<button
									className="mt-4 text-base sm:text-base lg:text-lg xl:text-xl bg-silver_tree hover:bg-viridian text-white py-2 px-4 border-b-4 border-green-700 hover:border-green-900 rounded"
									onClick={() => history.push('/client')}>
									<Text id="service.learn_more" />
								</button>
							</div>

							<div className="hidden md:block md:w-1/2 md:relative md:pl-4">
								<div
									className="hidden w-full top-1/2 h-72 -mt-36 md:block md:relative md:h-64 md:-mt-32 lg:h-72 lg:-mt-36 xl:h-96 xl:-mt-48">
									<img src={item.imageUrl} alt={"imgWebDesign"}
										className="rounded-lg shadow-xl absolute h-72 md:h-64 lg:h-72 xl:h-96 object-cover" />
								</div>
							</div>
						</>
					) : (
						<>
							<div className="hidden md:block md:w-1/2 md:relative md:pr-4">
								<div
									className="hidden w-full top-1/2 h-72 -mt-36 md:block md:relative md:h-64 md:-mt-32 lg:h-72 lg:-mt-36 xl:h-96 xl:-mt-48">
									<img src={item.imageUrl} alt={"imgWebDesign"}
										className="rounded-lg shadow-xl absolute h-72 md:h-64 lg:h-72 xl:h-96 object-cover" />
								</div>
							</div>

							<div className="w-full md:w-1/2 md:pl-6">
								<div
									className="text-xl text-gray-1000 font-bold mb-5 mt-6 sm:text-xl sm:mt-6 md:text-2xl xl:text-3xl">
									<Text id={item.title} /></div>

								<p className="whitespace-pre-wrap text-gray-900 sm:text-base lg:text-lg xl:text-xl">
									<Text id={item.text} />
								</p>

								<button
									className="mt-4 text-base sm:text-base lg:text-lg xl:text-xl bg-silver_tree hover:bg-viridian text-white py-2 px-4 border-b-4 border-green-700 hover:border-green-900 rounded">
									<Text id="service.learn_more" />
								</button>
							</div>
						</>
					)
					}
				</div>
			</div>
		);
	});

	const bottomSection = bottomSectionDatas.map((item, index) => {
		return (
			<div key={index} className="my-6 xl:mx-2">
				<div className="font-bold text-gray-800 sm:text-xl md:text-2xl xl:text-3xl"><Text id={item.title} /></div>
				<div className="whitespace-pre-wrap text-gray-700 text-base sm:text-base lg:text-lg xl:text-xl">
					<Text id={item.text} />
				</div>
			</div>
		);
	});

	return (
		<div className="w-full pt-12">
			<div className="text-center text-gray-1000">
				<div className="font-bold text-3xl sm:text-3xl md:text-4xl xl:text-5xl">
					<Text id="service.everything_we_do_help_you_grow" />
				</div>
				<div className="mt-2 sm:text-lg md:text-xl xl:text-2xl">
					<Text id="service.we_provide_the_best_solution_for_your_business_problem" />
				</div>
			</div>

			{middleSection}

			<div className="my-8 mx-auto bg-gray-200 py-6 px-10 w-full xl:flex">
				{bottomSection}
			</div>
		</div>
	);
}

export default Service;
