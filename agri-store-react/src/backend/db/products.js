import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "Nexon EV ",
    price: 11110,
    inStock: true,
    description: `The electric version of the Nexon was revealed on 19 December 2019. The Nexon EV uses components from Tata Motors' electric vehicle technology brand Ziptron. The electric motor produces 94.7 kW (127 hp; 129 PS) and 245 N⋅m (181 lbf⋅ft) of torque and 0 - 100 under 9.9 seconds. It has a 30.2 kWh battery with an ARAI rated range of up to 312 km.[16]
The battery can be fully charged in under 8 hours using a complimentary AC charger. It can also be charged using a 15-ampere power cable that can be used at any place with the necessary power socket. DC 25 kW fast charging can be used to charge the battery from 0 to 80% in 1 hour.[17]
Tata started a subscription plan for the Nexon EV in August 2020. It was reported that Nexon EV was the best-selling electric vehicle in India in 2020.[18]`,
    categoryName: "ev",
    manufacturedBy: "Tata",
    image:
      "https://imgd-ct.aeplcdn.com/664x415/n/cw/ec/42611/nexon-ev-exterior-front-view.jpeg?q=75",
    rating: 5,
  },
  {
    _id: uuid(),
    title: " Mahindra Scorpio ",
    price: 11115,
    inStock: true,
    description: `The Mahindra Scorpio is a mid-size SUV manufactured by the Indian automaker Mahindra & Mahindra since 2002. It was Mahindra's first model to be built for the global market.
The Scorpio was conceptualized and designed by the in-house integrated design and manufacturing team of Mahindra & Mahindra. The car has been the recipient of three Indian awards, including the "Car of the Year" award from Business Standard Motoring as well as the "Best SUV of the Year" and the "Best Car of the Year" awards, both from BBC World's Wheels.[3]`,
    categoryName: "petrol",
    manufacturedBy: "Mahindra",
    image:
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/31883/scorpio-exterior-right-front-three-quarter-2.jpeg?q=75",
    rating: 3,
  },
  {
    _id: uuid(),
    title: "Creta",
    price: 10900,
    inStock: true,
    description: `The Hyundai Creta, also known as Hyundai ix25 in China, is an automobile produced by Hyundai since 2014 mainly for emerging markets, particularly BRICS. A subcompact crossover SUV, it is positioned below the Tucson in Hyundai's SUV line-up.
The first-generation model debuted as a near-production concept car in China in April 2014, while the second generation was first introduced in 2019. The second-generation model was also available in a longer derivative with three-row seating, which is known as the Hyundai Alcazar, Creta Grand or Grand Creta. The vehicle has been manufactured in China, India, Russia, Brazil, and Indonesia. For developed markets like South Korea, the United States, Canada, Europe and Australia, the Creta is not offered in favour of the smaller but more advanced Kona.[1][2]`,
    categoryName: " diesel",
    manufacturedBy: "Hyundai",
    image:
      "https://imgd.aeplcdn.com/1056x594/n/cw/ec/41564/hyundai-creta-right-front-three-quarter9.jpeg?q=75&wm=1",
    rating: 5,
  },

  {
    _id: uuid(),
    title: "Mahindra Thar",
    price: 10650,
    inStock: true,
    description: `The vehicle was launched in the Indian market on October 4, 2010[1] to fill the void left by its predecessor, the Mahindra MM540. The Thar has been voted one of the top-10 SUVs available in the Indian market. Three variants - DI 2WD, DI 4WD, and CRDe, are available with soft-top versions. The Thar also comes with a seven-seater option, though it can be converted into a two-seater.`,
    categoryName: "diesel",
    manufacturedBy: "Mahindra",
    image:
      "https://imgd-ct.aeplcdn.com/664x415/n/cw/ec/40087/thar-exterior-left-rear-three-quarter.jpeg?q=75",
    rating: 4,
  },

  {
    _id: uuid(),
    title: "Mahindra XUV700 ",
    price: 12790,
    inStock: true,
    description: `The vehicle was introduced on 14 August 2021.[2] The XUV700 was originally designed as the second-generation XUV500, however Mahindra decided to reposition the model nomenclature due to its plan of expanding its SUV portfolio. It is their first model to use the new Mahindra logo, which is reserved for their SUV products.[1]`,
    categoryName: " diesel",
    manufacturedBy: "Mahindra",
    image:
      "https://imgd-ct.aeplcdn.com/664x415/n/cw/ec/42355/xuv700-exterior-front-view-2.jpeg?isig=0&q=75",
    rating: 4,
  },
  {
    _id: uuid(),
    title: "Toyota Fortuner",
    price: 11870,
    inStock: true,
    description: `The Toyota Fortuner, also known as the Toyota SW4, is a mid-size SUV manufactured by the Japanese automaker Toyota since 2004. Built on the Hilux pickup truck platform, it features two/three rows of seats and is available in either rear-wheel drive or four-wheel drive configuration. It is a part of Toyota's IMV project for emerging markets, which also includes the Hilux and the Innova.
The name Fortuner is derived from the English word fortune.[1]`,
    categoryName: " diesel",
    manufacturedBy: "Toyota",
    image:
      "https://imgd-ct.aeplcdn.com/664x415/n/cw/ec/44709/fortuner-exterior-left-front-three-quarter.jpeg?q=75",
    rating: 1,
  },

  {
    _id: uuid(),
    title: "Nexon",
    price: 11150,
    inStock: true,
    description: `The Nexon made its debut as a prototype exhibited at the Auto Expo 2014.[2] The final model was presented in February 2016.
The Nexon is based on the revised Tata X1 platform debuted in 1998 with the Indica model and adopted by other Indian brand cars.[3] It uses independent MacPherson dual-path strut with coil spring front suspensions and rear twist-beam with coil spring and shock absorber. The wheelbase is measured at 2,498 mm (98.3 in). It is characterised by two-tone paint, LED headlamps and large chrome bands along the side.[4][5]
`,
    categoryName: "petrol",
    manufacturedBy: "Tata",
    image:
      "https://imgd-ct.aeplcdn.com/664x415/n/cw/ec/41645/nexon-exterior-left-front-three-quarter-2.jpeg?q=75",
    rating: 3,
  },

  {
    _id: uuid(),
    title: "Land Rover ",
    price: 10290,
    inStock: true,
    description: `Land Rover is a British brand of predominantly four-wheel drive, off-road capable vehicles, owned by multinational car manufacturer Jaguar Land Rover (JLR), since 2008 a subsidiary of India's Tata Motors.[4] JLR currently builds Land Rovers in Brazil, China, India, Slovakia, and the United Kingdom. The Land Rover name was created in 1948 by the Rover Company for a utilitarian 4WD off-roader; yet today Land Rover vehicles comprise solely upmarket and luxury sport utility cars.

`,
    categoryName: "diesel",
    manufacturedBy: "Tata",
    image:
      "https://imgd.aeplcdn.com/1056x594/cw/ec/28085/Land-Rover-Range-Rover-Velar-Exterior-114227.jpg?wm=1&q=75",
    rating: 5,
  },
  {
    _id: uuid(),
    title: "Innova Crysta ",
    price: 12980,
    inStock: false,
    description: `The Toyota Innova is a car manufactured by the Japanese carmaker Toyota since 2004. It is a compact MPV and mainly sold with three-row seating. It entered production in Indonesia under supervision by Toyota-Astra Motor in 2004 and has been manufactured in other emerging countries as well. Its official name in Indonesia is Toyota Kijang Innova, while for other countries it is simply called "Innova". For the second generation, it is known as Innova Crysta in India and Thailand.`,
    categoryName: "petrol",
    manufacturedBy: "Toyota",
    image:
      "https://imgd-ct.aeplcdn.com/664x415/n/cw/ec/51435/innova-crysta-exterior-left-front-three-quarter.jpeg?q=75",
    rating: 3,
  },
  {
    _id: uuid(),
    title: "Kia Carnival ",
    price: 13480,
    inStock: true,
    description: `The Kia Carnival (Korean: 기아 카니발) is a minivan manufactured by Kia since 1998. It is marketed globally under various nameplates — prominently as the Kia Sedona — which is now unused in favor of the Carnival.
The first generation Carnival was introduced in September 1998,[1] and was marketed in a single, short wheelbase version. Second generation models were marketed (2006–2014) in short and long wheelbase variants. A rebadged variant of the second generation was offered in North America as the Hyundai Entourage (2007–2009).[2] Beginning in 2010, the second generation model received updated equipment, including Kia's corporate Tiger Nose grille, as introduced by its then new design chief, Peter Schreyer. Kia introduced its third generation minivan in 2014, solely in a long wheelbase format. The fourth generation was introduced in 2020, when Kia also began using the Carnival nameplate worldwide.`,
    categoryName: "ev",
    manufacturedBy: "Kia",
    image:
      "https://imgd-ct.aeplcdn.com/664x415/n/cw/ec/41205/carnival-exterior-left-front-three-quarter.jpeg?q=75",
    rating: 1,
  },
  {
    _id: uuid(),
    title: "BMW M5 ",
    price: 15500,
    inStock: false,
    description: `The BMW 5 Series is an executive car manufactured and marketed by BMW since 1972, succeeding the New Class Sedans, and currently in its seventh generation.
The 5 Series was initially available as a sedan, with a wagon/estate body style (marketed as "Touring") added in 1991 and a 5-door fastback configuration (marketed as "Gran Turismo") available from 2009 to 2017. Each successive generation carries a distinct internal E- designation.
The first generation of 5 Series was powered by naturally aspirated four-cylinder and six-cylinder petrol engines. Following generations have been powered by four-cylinder, six-cylinder, V8 and V10 engines that are either naturally aspirated or turbocharged. Since 1982, diesel engines have been included in the 5 Series range.`,
    categoryName: "petrol",
    manufacturedBy: "BMW",
    image:
      "https://imgd-ct.aeplcdn.com/664x415/n/cw/ec/96443/5-series-exterior-left-front-three-quarter.jpeg?q=75",
    rating: 2,
  },
  {
    _id: uuid(),
    title: "Kia Sonet ",
    price: 16160,
    inStock: true,
    description: `The Sonet was previewed as the Sonet Concept in February 2020.[5] The production version made its global debut on 7 August 2020 and was sold starting from 18 September 2020 in India.[6][7][8] It is the third model from Kia in India after the Seltos and the Carnival.[9]
In the Indian market, the Sonet occupies the sub-4-metre SUV category with its 3,995 mm (157.3 in) length dimension, benefitting from the Indian tax benefits for cars shorter than 4 meters. For export markets, the Sonet is equipped with longer front and rear bumpers, increasing its length to 4,120 mm (162.2 in).[10][11]`,
    categoryName: "ev",
    manufacturedBy: "Kia",
    image:
      "https://imgd-ct.aeplcdn.com/664x415/n/cw/ec/115451/sonet-exterior-right-front-three-quarter.jpeg?isig=0&q=75",
    rating: 3,
  },
  {
    _id: uuid(),
    title: "Kia EV6",
    price: 10700,
    inStock: true,
    description: `The Kia EV6 is a battery electric compact crossover SUV produced by Kia.[6][7] Introduced in March 2021, it is the first Kia dedicated electric vehicle, and the first model developed on the Electric Global Modular Platform (E-GMP) similar to the Hyundai Ioniq 5.[8][9] It is also the first model to be named under the new nomenclature designated for a line of Kia electric cars, which will range from EV1 to EV9.[10] The EV6 is the 2022 European Car of the Year.`,
    categoryName: "ev",
    manufacturedBy: "Kia",
    image:
      "https://imgd-ct.aeplcdn.com/664x415/n/cw/ec/114971/ev6-exterior-right-front-three-quarter-3.jpeg?isig=0&q=75",
    rating: 2,
  },
  {
    _id: uuid(),
    title: "Safari",
    price: 18800,
    inStock: false,
    description: `The Tata Safari is a mid-size SUV produced by the Indian automobile manufacturer Tata Motors since 1998. The first-generation Safari has been designed as a seven-seater SUV with a foldable third row, roomy interior; on the market it has positioned itself as an alternative from the competitive price to other brands off-road vehicles.[citation needed]
Safari was re-introduced in 2021. Unlike the first-generation , the second-generation Safari is a front-wheel-drive, monocoque crossover SUV, sharing its underpinnings with the Tata Harrier.
`,
    categoryName: "petrol",
    manufacturedBy: "Tata",
    image:
      "https://imgd-ct.aeplcdn.com/664x415/n/cw/ec/40027/safari-exterior-left-front-three-quarter-9.jpeg?isig=0&q=75",
    rating: 3,
  },
  {
    _id: uuid(),
    title: "Bolaro ",
    price: 19600,
    inStock: false,
    description: `The basic design is based on the Mahindra Armada Grand. The first-generation Bolero was equipped with a Peugeot 2.5 L (150 in3) IDI engine which produced 76 PS (56 kW), although turbocharged versions with or without an intercooler were also available, raising power to 95 or 101 PS (70 or 74 kW) respectively.[3] The second generation was released with slightly modified exteriors (a larger grille being the most obvious change) and the major change was the engine, a 2.5 L (150 in3) in-house engine from Mahindra. It is powered by a 72 PS (53 kW) 2,523 cc (154.0 cu in) turbocharged direct injection diesel engine.[citation needed]
`,
    categoryName: "petrol",
    manufacturedBy: "Mahindra",
    image:
      "https://imgd-ct.aeplcdn.com/664x415/n/cw/ec/45933/mahindra-bolero-exterior10.jpeg?q=75",
    rating: 3,
  },
  {
    _id: uuid(),
    title: "Mahindra Bolero Neo ",
    price: 17000,
    inStock: false,
    description: `The TUV300 was first announced by Mahindra & Mahindra in August 2015, the microsite of the vehicle went live by the same month. The vehicle was officially launched on September 10, 2015 in Madhya Pradesh. The TUV300 is designed by Mahindra's Design Studio in Mumbai, with the product engineering being done at Mahindra Research Valley in Chennai. It is built on the same platform as the Mahindra Scorpio. The TUV300 also employs the same mHawk engine series as the XUV500 and Scorpio but with a smaller engine displacement resulting in a lower engine power and torque.`,
    categoryName: "petrol",
    manufacturedBy: "Mahindra",
    image:
      "https://imgd-ct.aeplcdn.com/664x415/n/cw/ec/97853/bolero-neo-exterior-left-front-three-quarter.jpeg?q=75",
    rating: 3,
  },
];
