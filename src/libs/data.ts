export const signUpFields = [
	{
		label: "Full Name",
		name: "fullName",
		type: "text",
		placeholder: "Full Name",
	},
	{
		label: "Birthday",
		name: "birthday",
		type: "date",
		placeholder: "Birthday",
	},
	{
		label: "Email",
		name: "email",
		type: "text",
		placeholder: "Email",
	},
	{
		label: "Password",
		name: "password",
		type: "password",
		placeholder: "Password",
	},
	{
		label: "Confirm Password",
		name: "confirmPassword",
		type: "password",
		placeholder: "Confirm Password",
	},
];

export const signInFields = [
	{
		label: "Email",
		name: "email",
		type: "email",
		placeholder: "Email",
	},
	{
		label: "Password",
		name: "password",
		type: "password",
		placeholder: "Password",
	},
];
export const bannerData = [
	"/assets/banners/banner_1.jpg",
	"/assets/banners/banner2.jpg",
	"/assets/banners/flashsale_1.jpg",
	"/assets/banners/flashsale_2.jpg",
	"/assets/banners/banner5.jfif",
];

const categories = [
	{
		name: "Health",
		attributes: [
			{ name: "brand", placeholder: "Brand", type: "text" },
			{ name: "dosage", placeholder: "Dosage", type: "text" },
			{ name: "ingredients", placeholder: "Ingredients", type: "text" },
			{ name: "expiryDate", placeholder: "Expiry Date", type: "date" },
			{ name: "volume", placeholder: "Volume", type: "number" },
			{ name: "form", placeholder: "Form", type: "text" },
		],
	},
	{
		name: "Fashion Accessories",
		attributes: [
			{ name: "brand", placeholder: "Brand", type: "text" },
			{ name: "material", placeholder: "Material", type: "text" },
			{ name: "color", placeholder: "Color", type: "text" },
			{ name: "size", placeholder: "Size", type: "text" },
			{ name: "gender", placeholder: "Gender", type: "text" },
			{ name: "style", placeholder: "Style", type: "text" },
		],
	},
	{
		name: "Household Appliances",
		attributes: [
			{ name: "brand", placeholder: "Brand", type: "text" },
			{ name: "energyRating", placeholder: "Energy Rating", type: "text" },
			{ name: "capacity", placeholder: "Capacity", type: "number" },
			{ name: "dimensions", placeholder: "Dimensions", type: "text" },
			{ name: "color", placeholder: "Color", type: "text" },
			{ name: "features", placeholder: "Features", type: "text" },
		],
	},
	{
		name: "Men's Fashion",
		attributes: [
			{ name: "size", placeholder: "Size", type: "text" },
			{ name: "color", placeholder: "Color", type: "text" },
			{ name: "material", placeholder: "Material", type: "text" },
			{ name: "brand", placeholder: "Brand", type: "text" },
			{ name: "fit", placeholder: "Fit", type: "text" },
			{ name: "style", placeholder: "Style", type: "text" },
		],
	},
	{
		name: "Men's Shoes",
		attributes: [
			{ name: "size", placeholder: "Size", type: "text" },
			{ name: "color", placeholder: "Color", type: "text" },
			{ name: "material", placeholder: "Material", type: "text" },
			{ name: "brand", placeholder: "Brand", type: "text" },
			{ name: "style", placeholder: "Style", type: "text" },
		],
	},
	{
		name: "Phones & Accessories",
		attributes: [
			{ name: "brand", placeholder: "Brand", type: "text" },
			{ name: "model", placeholder: "Model", type: "text" },
			{ name: "storageCapacity", placeholder: "Storage Capacity", type: "text" },
			{ name: "color", placeholder: "Color", type: "text" },
			{ name: "batteryLife", placeholder: "Battery Life", type: "text" },
			{ name: "features", placeholder: "Features", type: "text" },
		],
	},
	{
		name: "Travel & Luggage",
		attributes: [
			{ name: "brand", placeholder: "Brand", type: "text" },
			{ name: "size", placeholder: "Size", type: "text" },
			{ name: "material", placeholder: "Material", type: "text" },
			{ name: "color", placeholder: "Color", type: "text" },
			{ name: "weight", placeholder: "Weight", type: "number" },
			{ name: "features", placeholder: "Features", type: "text" },
		],
	},
	{
		name: "Women's Bags",
		attributes: [
			{ name: "brand", placeholder: "Brand", type: "text" },
			{ name: "material", placeholder: "Material", type: "text" },
			{ name: "color", placeholder: "Color", type: "text" },
			{ name: "size", placeholder: "Size", type: "text" },
			{ name: "style", placeholder: "Style", type: "text" },
		],
	},
	{
		name: "Women's Fashion",
		attributes: [
			{ name: "size", placeholder: "Size", type: "text" },
			{ name: "color", placeholder: "Color", type: "text" },
			{ name: "material", placeholder: "Material", type: "text" },
			{ name: "brand", placeholder: "Brand", type: "text" },
			{ name: "fit", placeholder: "Fit", type: "text" },
			{ name: "style", placeholder: "Style", type: "text" },
		],
	},
	{
		name: "Women's Shoes",
		attributes: [
			{ name: "size", placeholder: "Size", type: "text" },
			{ name: "color", placeholder: "Color", type: "text" },
			{ name: "material", placeholder: "Material", type: "text" },
			{ name: "brand", placeholder: "Brand", type: "text" },
			{ name: "style", placeholder: "Style", type: "text" },
		],
	},
	{
		name: "Men's Bags",
		attributes: [
			{ name: "brand", placeholder: "Brand", type: "text" },
			{ name: "material", placeholder: "Material", type: "text" },
			{ name: "color", placeholder: "Color", type: "text" },
			{ name: "size", placeholder: "Size", type: "text" },
			{ name: "style", placeholder: "Style", type: "text" },
		],
	},
	{
		name: "Watches",
		attributes: [
			{ name: "brand", placeholder: "Brand", type: "text" },
			{ name: "material", placeholder: "Material", type: "text" },
			{ name: "color", placeholder: "Color", type: "text" },
			{ name: "features", placeholder: "Features", type: "text" },
			{ name: "waterResistance", placeholder: "Water Resistance", type: "text" },
		],
	},
	{
		name: "Audio Equipment",
		attributes: [
			{ name: "brand", placeholder: "Brand", type: "text" },
			{ name: "type", placeholder: "Type", type: "text" },
			{ name: "connectivity", placeholder: "Connectivity", type: "text" },
			{ name: "batteryLife", placeholder: "Battery Life", type: "text" },
			{ name: "features", placeholder: "Features", type: "text" },
		],
	},
	{
		name: "Food & Beverages",
		attributes: [
			{ name: "brand", placeholder: "Brand", type: "text" },
			{ name: "weight", placeholder: "Weight", type: "number" },
			{ name: "ingredients", placeholder: "Ingredients", type: "text" },
			{ name: "expiryDate", placeholder: "Expiry Date", type: "date" },
			{ name: "packagingType", placeholder: "Packaging Type", type: "text" },
		],
	},
	{
		name: "Beauty",
		attributes: [
			{ name: "brand", placeholder: "Brand", type: "text" },
			{ name: "skinType", placeholder: "Skin Type", type: "text" },
			{ name: "ingredients", placeholder: "Ingredients", type: "text" },
			{ name: "volume", placeholder: "Volume", type: "number" },
			{ name: "scent", placeholder: "Scent", type: "text" },
			{ name: "color", placeholder: "Color", type: "text" },
		],
	},
	{
		name: "Pet Care",
		attributes: [
			{ name: "brand", placeholder: "Brand", type: "text" },
			{ name: "type", placeholder: "Type", type: "text" },
			{ name: "ingredients", placeholder: "Ingredients", type: "text" },
			{ name: "size", placeholder: "Size", type: "text" },
			{ name: "breedSuitability", placeholder: "Breed Suitability", type: "text" },
		],
	},
	{
		name: "Mom & Baby",
		attributes: [
			{ name: "brand", placeholder: "Brand", type: "text" },
			{ name: "size", placeholder: "Size", type: "text" },
			{ name: "material", placeholder: "Material", type: "text" },
			{ name: "ageSuitability", placeholder: "Age Suitability", type: "text" },
			{ name: "features", placeholder: "Features", type: "text" },
		],
	},
	{
		name: "Children's & Infant's Fashion",
		attributes: [
			{ name: "size", placeholder: "Size", type: "text" },
			{ name: "color", placeholder: "Color", type: "text" },
			{ name: "material", placeholder: "Material", type: "text" },
			{ name: "brand", placeholder: "Brand", type: "text" },
			{ name: "ageSuitability", placeholder: "Age Suitability", type: "text" },
		],
	},
	{
		name: "Gaming & Console",
		attributes: [
			{ name: "brand", placeholder: "Brand", type: "text" },
			{ name: "platform", placeholder: "Platform", type: "text" },
			{ name: "genre", placeholder: "Genre", type: "text" },
			{ name: "releaseDate", placeholder: "Release Date", type: "date" },
			{ name: "features", placeholder: "Features", type: "text" },
		],
	},
	{
		name: "Cameras & Drones",
		attributes: [
			{ name: "brand", placeholder: "Brand", type: "text" },
			{ name: "resolution", placeholder: "Resolution", type: "text" },
			{ name: "features", placeholder: "Features", type: "text" },
			{ name: "batteryLife", placeholder: "Battery Life", type: "text" },
			{ name: "weight", placeholder: "Weight", type: "number" },
		],
	},
	{
		name: "Home & Living",
		attributes: [
			{ name: "material", placeholder: "Material", type: "text" },
			{ name: "dimensions", placeholder: "Dimensions", type: "text" },
			{ name: "color", placeholder: "Color", type: "text" },
			{ name: "brand", placeholder: "Brand", type: "text" },
			{ name: "style", placeholder: "Style", type: "text" },
		],
	},
	{
		name: "Sports & Outdoors",
		attributes: [
			{ name: "brand", placeholder: "Brand", type: "text" },
			{ name: "material", placeholder: "Material", type: "text" },
			{ name: "weight", placeholder: "Weight", type: "number" },
			{ name: "dimensions", placeholder: "Dimensions", type: "text" },
			{ name: "suitableFor", placeholder: "Suitable For", type: "text" },
		],
	},
	{
		name: "Stationery",
		attributes: [
			{ name: "brand", placeholder: "Brand", type: "text" },
			{ name: "type", placeholder: "Type", type: "text" },
			{ name: "material", placeholder: "Material", type: "text" },
			{ name: "color", placeholder: "Color", type: "text" },
			{ name: "size", placeholder: "Size", type: "text" },
		],
	},
	{
		name: "Hobbies & Collectibles",
		attributes: [
			{ name: "brand", placeholder: "Brand", type: "text" },
			{ name: "material", placeholder: "Material", type: "text" },
			{ name: "dimensions", placeholder: "Dimensions", type: "text" },
			{ name: "theme", placeholder: "Theme", type: "text" },
		],
	},
	{
		name: "Cars",
		attributes: [
			{ name: "brand", placeholder: "Brand", type: "text" },
			{ name: "model", placeholder: "Model", type: "text" },
			{ name: "year", placeholder: "Year", type: "number" },
			{ name: "engineType", placeholder: "Engine Type", type: "text" },
			{ name: "features", placeholder: "Features", type: "text" },
		],
	},
	{
		name: "Motorcycles & Scooters",
		attributes: [
			{ name: "brand", placeholder: "Brand", type: "text" },
			{ name: "model", placeholder: "Model", type: "text" },
			{ name: "engineCapacity", placeholder: "Engine Capacity", type: "text" },
			{ name: "year", placeholder: "Year", type: "number" },
			{ name: "features", placeholder: "Features", type: "text" },
		],
	},
	{
		name: "Books & Magazines",
		attributes: [
			{ name: "author", placeholder: "Author", type: "text" },
			{ name: "publisher", placeholder: "Publisher", type: "text" },
			{ name: "isbn", placeholder: "ISBN", type: "text" },
			{ name: "language", placeholder: "Language", type: "text" },
			{ name: "genre", placeholder: "Genre", type: "text" },
		],
	},
	{
		id:'.....',
		name: "Computers & Laptops",
		attributes: [
			{ name: "brand", placeholder: "Brand", type: "text" },
			{ name: "model", placeholder: "Model", type: "text" },
			{ name: "processor", placeholder: "Processor", type: "text" },
			{ name: "ram", placeholder: "RAM", type: "text" },
			{ name: "storageCapacity", placeholder: "Storage Capacity", type: "text" },
			{ name: "screenSize", placeholder: "Screen Size", type: "text" },
		],
	},
];
