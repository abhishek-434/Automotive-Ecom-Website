/**
 * ANTIXORCAR.COM - Vehicle Data Services & Renderers
 * Embedded dataset fallback guarantees instant rendering on file:/// and http:// protocols.
 */

// Embedded complete vehicle database for 100% offline & local file:// compatibility
const DEFAULT_CARS_DATA = [
  {
    "id": "mercedes-gle-350",
    "make": "Mercedes-Benz",
    "model": "GLE 350 4MATIC",
    "year": 2023,
    "price": 68000,
    "formattedPrice": "$68,000",
    "mileage": 12500,
    "formattedMileage": "12,500 km",
    "condition": "Certified Pre-Owned",
    "bodyType": "SUV",
    "fuelType": "Petrol",
    "transmission": "Automatic",
    "engine": "2.0L Turbocharged Inline-4 (255 HP)",
    "drivetrain": "All-Wheel Drive (4MATIC)",
    "horsepower": 255,
    "acceleration": "6.9 sec (0-60 mph)",
    "exteriorColor": "Obsidian Black Metallic",
    "interiorColor": "Macchiato Beige / Nappa Leather",
    "location": "Beverly Hills, CA",
    "featured": true,
    "badge": "Featured",
    "rating": 4.9,
    "image": "assets/images/mercedes-gle.jpg",
    "gallery": [
      "assets/images/mercedes-gle.jpg",
      "assets/images/interior-1.jpg",
      "assets/images/interior-2.jpg",
      "assets/images/luxury-headlight.jpg"
    ],
    "description": "Exquisite 2023 Mercedes-Benz GLE 350 4MATIC finished in Obsidian Black Metallic over ultra-soft Macchiato Nappa leather. Single-owner vehicle with complete authorized dealer records, AMG sports styling package, panoramic glass sunroof, dual 12.3-inch widescreen cockpit displays, and Burmester surround sound.",
    "features": [
      "AMG Styling Exterior Package",
      "Panoramic Sliding Sunroof",
      "Burmester 13-Speaker Surround Sound",
      "Heated & Ventilated Front Seats",
      "Active Distance Assist DISTRONIC",
      "360-Degree Surround View Camera",
      "MBUX Augmented Video for Navigation",
      "Wireless Apple CarPlay & Android Auto",
      "21-Inch AMG Multi-Spoke Wheels",
      "Hands-Free Power Liftgate"
    ],
    "seller": {
      "name": "Prestige Motorcars Group",
      "type": "Premier Verified Dealer",
      "phone": "+1 (800) 555-0199",
      "email": "concierge@prestigemotorcars.com",
      "rating": 4.95,
      "verified": true
    },
    "history": {
      "previousOwners": 1,
      "accidentFree": true,
      "serviceHistory": "100% Authorized Mercedes-Benz Center",
      "warranty": "24 Months Factory Certified Warranty",
      "vin": "4JGDF6EE4PA829104"
    }
  },
  {
    "id": "porsche-911-carrera",
    "make": "Porsche",
    "model": "911 Carrera (992)",
    "year": 2022,
    "price": 125000,
    "formattedPrice": "$125,000",
    "mileage": 8200,
    "formattedMileage": "8,200 km",
    "condition": "Certified Pre-Owned",
    "bodyType": "Coupe",
    "fuelType": "Petrol",
    "transmission": "Automatic",
    "engine": "3.0L Twin-Turbo Flat-6 (379 HP)",
    "drivetrain": "Rear-Wheel Drive",
    "horsepower": 379,
    "acceleration": "3.8 sec (0-60 mph)",
    "exteriorColor": "Guards Red",
    "interiorColor": "Black / Bordeaux Red Leather",
    "location": "Miami, FL",
    "featured": true,
    "badge": "Top Rated",
    "rating": 5.0,
    "image": "assets/images/porsche-911.jpg",
    "gallery": [
      "assets/images/porsche-911.jpg",
      "assets/images/interior-1.jpg",
      "assets/images/interior-2.jpg",
      "assets/images/highway-stats-bg.jpg"
    ],
    "description": "Iconic performance perfected. This 2022 Porsche 911 Carrera 992 generation is painted in classic Guards Red with factory Sport Chrono package, sports exhaust system with black tips, 20/21-inch Carrera S wheels, and PASM sport suspension. Exceptional handling and pure visceral driving pleasure.",
    "features": [
      "Sport Chrono Package with Mode Switch",
      "Sports Exhaust System in Black",
      "14-Way Power Sport Seats with Memory",
      "Bose Surround Sound System",
      "Porsche Active Suspension Management (PASM)",
      "LED Matrix Design Headlights (PDLS+)",
      "SportDesign Front Fascia",
      "Lane Change Assist & ParkAssist",
      "GT Sport Steering Wheel in Leather",
      "Ceramic Coated Paint Protection"
    ],
    "seller": {
      "name": "Apex Exotic Motors",
      "type": "Authorized Porsche Specialist",
      "phone": "+1 (800) 555-0182",
      "email": "sales@apexexotics.com",
      "rating": 4.98,
      "verified": true
    },
    "history": {
      "previousOwners": 1,
      "accidentFree": true,
      "serviceHistory": "Documented Porsche Dealer Maintained",
      "warranty": "Full Porsche Approved CPO Warranty",
      "vin": "WP0AA2A94NS240182"
    }
  },
  {
    "id": "range-rover-evoque",
    "make": "Range Rover",
    "model": "Evoque R-Dynamic SE",
    "year": 2021,
    "price": 56500,
    "formattedPrice": "$56,500",
    "mileage": 25000,
    "formattedMileage": "25,000 km",
    "condition": "Verified Used",
    "bodyType": "SUV",
    "fuelType": "Petrol",
    "transmission": "Automatic",
    "engine": "2.0L Turbocharged Ingenium (246 HP)",
    "drivetrain": "All-Wheel Drive (AWD)",
    "horsepower": 246,
    "acceleration": "7.0 sec (0-60 mph)",
    "exteriorColor": "Fuji White",
    "interiorColor": "Ebony / Cloud Grained Leather",
    "location": "Dallas, TX",
    "featured": true,
    "badge": "Popular",
    "rating": 4.8,
    "image": "assets/images/range-rover-evoque.jpg",
    "gallery": [
      "assets/images/range-rover-evoque.jpg",
      "assets/images/interior-1.jpg",
      "assets/images/interior-2.jpg",
      "assets/images/sell-car-bg.jpg"
    ],
    "description": "Refined urban luxury meets legendary Land Rover all-terrain capability. This Fuji White Evoque R-Dynamic SE features distinctive copper exterior accents, 20-inch Gloss Black wheels, ClearSight digital interior rear-view mirror, dual touchscreen Touch Pro Duo infotainment, and Meridian audio.",
    "features": [
      "R-Dynamic Exterior Styling Package",
      "Touch Pro Duo Dual Screens",
      "Meridian 380W Sound System",
      "ClearSight Ground View Camera",
      "Terrain Response 2 System",
      "Fixed Panoramic Glass Roof",
      "Blind Spot Assist & Adaptive Speed Limiter",
      "Powered Gesture Tailgate",
      "Premium LED Headlights with Signature DRL",
      "Heated Steering Wheel"
    ],
    "seller": {
      "name": "Lone Star Luxury Auto",
      "type": "Verified Dealer",
      "phone": "+1 (800) 555-0144",
      "email": "inventory@lonestarluxury.com",
      "rating": 4.85,
      "verified": true
    },
    "history": {
      "previousOwners": 1,
      "accidentFree": true,
      "serviceHistory": "Maintained at JLR Certified Centers",
      "warranty": "1 Year Comprehensive Coverage",
      "vin": "SALVP2SU1MH094321"
    }
  },
  {
    "id": "bmw-5-series",
    "make": "BMW",
    "model": "530i M Sport",
    "year": 2022,
    "price": 62000,
    "formattedPrice": "$62,000",
    "mileage": 19000,
    "formattedMileage": "19,000 km",
    "condition": "Certified Pre-Owned",
    "bodyType": "Sedan",
    "fuelType": "Diesel",
    "transmission": "Automatic",
    "engine": "2.0L BMW TwinPower Turbo (248 HP)",
    "drivetrain": "Rear-Wheel Drive (xDrive Available)",
    "horsepower": 248,
    "acceleration": "5.9 sec (0-60 mph)",
    "exteriorColor": "Phytonic Blue Metallic",
    "interiorColor": "Cognac Dakota Leather",
    "location": "New York, NY",
    "featured": true,
    "badge": "Best Value",
    "rating": 4.9,
    "image": "assets/images/bmw-5-series.jpg",
    "gallery": [
      "assets/images/bmw-5-series.jpg",
      "assets/images/interior-1.jpg",
      "assets/images/interior-2.jpg",
      "assets/images/luxury-headlight.jpg"
    ],
    "description": "The quintessential executive sports sedan. Finished in stunning Phytonic Blue Metallic with the coveted M Sport package, Shadowline aerodynamic trim, 19-inch M Y-spoke wheels, Live Cockpit Professional with iDrive 7.0, and Harman Kardon surround audio.",
    "features": [
      "M Sport Aerodynamics Package",
      "M Sport Brakes with Blue Calipers",
      "BMW Live Cockpit Professional 12.3-inch",
      "Harman Kardon Surround Sound System",
      "Head-Up Display (HUD)",
      "Driving Assistance Professional Package",
      "Parking Assistant Plus with 3D View",
      "Heated Front & Rear Comfort Seats",
      "Wireless Smartphone Charging Pad",
      "Ambient Interior Lighting in 11 Colors"
    ],
    "seller": {
      "name": "Manhattan Motorcars Gallery",
      "type": "Premier Verified Dealer",
      "phone": "+1 (800) 555-0163",
      "email": "concierge@manhattanmotors.com",
      "rating": 4.92,
      "verified": true
    },
    "history": {
      "previousOwners": 1,
      "accidentFree": true,
      "serviceHistory": "Full BMW Dealership Logbook",
      "warranty": "Factory Certified BMW CPO",
      "vin": "WBA53CG02NC842109"
    }
  },
  {
    "id": "ferrari-roma-v8",
    "make": "Porsche",
    "model": "Roma Coupe 3.9L V8",
    "year": 2023,
    "price": 248000,
    "formattedPrice": "$248,000",
    "mileage": 3400,
    "formattedMileage": "3,400 km",
    "condition": "Certified Pre-Owned",
    "bodyType": "Coupe",
    "fuelType": "Petrol",
    "transmission": "Automatic",
    "engine": "3.9L Twin-Turbocharged V8 (612 HP)",
    "drivetrain": "Rear-Wheel Drive with E-Diff",
    "horsepower": 612,
    "acceleration": "3.4 sec (0-60 mph)",
    "exteriorColor": "Bianco Avus White",
    "interiorColor": "Rosso Ferrari Leather",
    "location": "Miami, FL",
    "featured": true,
    "badge": "Exotic",
    "rating": 5.0,
    "image": "assets/images/sell-car-bg.jpg",
    "gallery": [
      "assets/images/sell-car-bg.jpg",
      "assets/images/interior-1.jpg",
      "assets/images/interior-2.jpg",
      "assets/images/scenic-drive-chapter.jpg"
    ],
    "description": "La Nuova Dolce Vita. This sculptural Ferrari Roma combines timeless proportions with a 612-horsepower twin-turbo V8. Features factory Scuderia fender shields, 20-inch forged diamond-finish wheels, carbon-fiber steering wheel with LED shift lights, and passenger digital display.",
    "features": [
      "Scuderia Ferrari Ceramic Shields",
      "Carbon Fiber Driver Zone + LEDs",
      "Passenger Display Touchscreen",
      "Magneride Dual Mode Suspension",
      "Surround View Camera System",
      "Active Matrix LED Headlamps",
      "Ventilated Full Electric Daytona Seats",
      "JBL Premium High-Power Sound",
      "Sports Exhaust with Matte Tips",
      "Full Factory Paint Protection Film"
    ],
    "seller": {
      "name": "Biscayne Bay Exotics",
      "type": "Premier Verified Dealer",
      "phone": "+1 (800) 555-0111",
      "email": "vip@biscayneexotics.com",
      "rating": 4.99,
      "verified": true
    },
    "history": {
      "previousOwners": 1,
      "accidentFree": true,
      "serviceHistory": "Ferrari 7-Year Genuine Maintenance Program",
      "warranty": "Factory Ferrari Warranty Active",
      "vin": "ZFF89VMA6P0293814"
    }
  },
  {
    "id": "bmw-m8-competition",
    "make": "BMW",
    "model": "M8 Competition Gran Coupe",
    "year": 2024,
    "price": 142000,
    "formattedPrice": "$142,000",
    "mileage": 3100,
    "formattedMileage": "3,100 km",
    "condition": "New",
    "bodyType": "Coupe",
    "fuelType": "Petrol",
    "transmission": "Automatic",
    "engine": "4.4L BMW M TwinPower Turbo V8 (617 HP)",
    "drivetrain": "M xDrive All-Wheel Drive with 2WD Mode",
    "horsepower": 617,
    "acceleration": "3.0 sec (0-60 mph)",
    "exteriorColor": "Dravit Grey Metallic",
    "interiorColor": "Midrand Beige / Alcantara & Merino Leather",
    "location": "Los Angeles, CA",
    "featured": true,
    "badge": "Hero Showcase",
    "rating": 5.0,
    "image": "assets/images/hero-car.jpg",
    "gallery": [
      "assets/images/hero-car.jpg",
      "assets/images/interior-1.jpg",
      "assets/images/interior-2.jpg",
      "assets/images/luxury-headlight.jpg"
    ],
    "description": "As featured on Antixorcar.com's front page. The flagship BMW M8 Competition Gran Coupe merges staggering supercar speed with handcrafted luxury. 617 twin-turbo horsepower, M Carbon Ceramic brakes, Bowers & Wilkins Diamond surround audio, and carbon fiber roof.",
    "features": [
      "M Carbon Ceramic Brake System",
      "M Carbon Fiber Exterior Package",
      "Bowers & Wilkins Diamond Surround Sound",
      "Carbon Fiber Double-Bubble Roof",
      "M Driver's Package (Top Speed 190 mph)",
      "Driving Assistance Professional",
      "Iconic Adaptive Laserlight Headlights",
      "Full Merino Leather with Hexagonal Quilting",
      "M Sport Active Differential",
      "Alcantara Anthracite Headliner"
    ],
    "seller": {
      "name": "Rodeo Drive Motor Group",
      "type": "Premier Verified Dealer",
      "phone": "+1 (800) 555-0188",
      "email": "m-division@rodeodrivemotors.com",
      "rating": 5.0,
      "verified": true
    },
    "history": {
      "previousOwners": 0,
      "accidentFree": true,
      "serviceHistory": "Factory Delivery Miles Only",
      "warranty": "Full 4-Year / 50k-Mile BMW Factory Warranty",
      "vin": "WBSAE0C54RA930184"
    }
  },
  {
    "id": "porsche-taycan-4s",
    "make": "Porsche",
    "model": "Taycan 4S Electric",
    "year": 2024,
    "price": 108000,
    "formattedPrice": "$108,000",
    "mileage": 4100,
    "formattedMileage": "4,100 km",
    "condition": "New",
    "bodyType": "Electric",
    "fuelType": "Electric",
    "transmission": "Automatic",
    "engine": "Dual Permanent Magnet Electric Motors (522 HP)",
    "drivetrain": "All-Wheel Drive",
    "horsepower": 522,
    "acceleration": "3.8 sec (0-60 mph)",
    "exteriorColor": "Dolomite Silver Metallic",
    "interiorColor": "Slate Grey Leather-Free Interior",
    "location": "San Francisco, CA",
    "featured": true,
    "badge": "Electric Future",
    "rating": 5.0,
    "image": "assets/images/category-electric.jpg",
    "gallery": [
      "assets/images/category-electric.jpg",
      "assets/images/interior-1.jpg",
      "assets/images/interior-2.jpg",
      "assets/images/blog-ev.jpg"
    ],
    "description": "Electrifying performance and futuristic design. The Porsche Taycan 4S delivers instantaneous torque with 800-volt architecture for ultra-rapid 270kW charging. Equipped with Performance Battery Plus, Porsche Electric Sport Sound, and adaptive air suspension.",
    "features": [
      "Performance Battery Plus (93.4 kWh)",
      "Adaptive Air Suspension with PASM",
      "Porsche Surface Coated Brakes (PSCB)",
      "Passenger Display Screen",
      "Mobile Charger Connect & 270kW DC Fast Charge",
      "Burmester 3D High-End Surround Sound",
      "Porsche InnoDrive with Adaptive Cruise",
      "21-Inch Mission E Design Wheels",
      "Thermal & Noise Insulated Glass",
      "Panoramic Fixed Glass Roof"
    ],
    "seller": {
      "name": "Silicon Valley EV Collective",
      "type": "Premier Verified Dealer",
      "phone": "+1 (800) 555-0177",
      "email": "contact@svevcollective.com",
      "rating": 4.96,
      "verified": true
    },
    "history": {
      "previousOwners": 1,
      "accidentFree": true,
      "serviceHistory": "Factory Service History",
      "warranty": "8-Year Battery & Drivetrain Warranty",
      "vin": "WP0AA2Y15PSA93401"
    }
  },
  {
    "id": "ram-1500-trx",
    "make": "Ford",
    "model": "F-150 Raptor / RAM TRX 4x4",
    "year": 2023,
    "price": 89000,
    "formattedPrice": "$89,000",
    "mileage": 14200,
    "formattedMileage": "14,200 km",
    "condition": "Verified Used",
    "bodyType": "Truck",
    "fuelType": "Petrol",
    "transmission": "Automatic",
    "engine": "6.2L Supercharged HEMI V8 (702 HP)",
    "drivetrain": "Four-Wheel Drive (4WD)",
    "horsepower": 702,
    "acceleration": "4.5 sec (0-60 mph)",
    "exteriorColor": "Granite Crystal Metallic",
    "interiorColor": "Black TRX Leather & Suede",
    "location": "Houston, TX",
    "featured": true,
    "badge": "Off-Road Beast",
    "rating": 4.9,
    "image": "assets/images/category-truck.jpg",
    "gallery": [
      "assets/images/category-truck.jpg",
      "assets/images/interior-1.jpg",
      "assets/images/interior-2.jpg",
      "assets/images/highway-stats-bg.jpg"
    ],
    "description": "The ultimate apex predator of pickup trucks. Supercharged 702 horsepower V8 powerplant with Bilstein Black Hawk e2 adaptive active dampers, beadlock-capable 18-inch wheels, heavy-duty skid plates, and premium 19-speaker Harman Kardon sound system.",
    "features": [
      "Supercharged 702-HP HEMI V8",
      "Bilstein Black Hawk e2 Adaptive Dampers",
      "Dual Panoramic Moonroof",
      "TRX Level 2 Equipment Group",
      "Head-Up Display & Digital Rearview Mirror",
      "Harman Kardon 19-Speaker Audio",
      "Trailer Reverse Steering Control",
      "Off-Road Pages & Performance Telemetry",
      "Custom Bed-Mounted Overland Rack",
      "35-Inch Goodyear Wrangler All-Terrain Tires"
    ],
    "seller": {
      "name": "Texas Heavy Duty Trucks",
      "type": "Authorized Dealer",
      "phone": "+1 (800) 555-0138",
      "email": "sales@texashd.com",
      "rating": 4.88,
      "verified": true
    },
    "history": {
      "previousOwners": 1,
      "accidentFree": true,
      "serviceHistory": "Full Certified Service Records",
      "warranty": "Factory Powertrain Warranty Active",
      "vin": "1C6SRFU94NN184920"
    }
  },
  {
    "id": "audi-rs7-sportback",
    "make": "Audi",
    "model": "RS7 Sportback",
    "year": 2023,
    "price": 114000,
    "formattedPrice": "$114,000",
    "mileage": 9600,
    "formattedMileage": "9,600 km",
    "condition": "Certified Pre-Owned",
    "bodyType": "Sedan",
    "fuelType": "Petrol",
    "transmission": "Automatic",
    "engine": "4.0L Twin-Turbocharged V8 with 48V MHEV (591 HP)",
    "drivetrain": "Quattro All-Wheel Drive with Sport Differential",
    "horsepower": 591,
    "acceleration": "3.5 sec (0-60 mph)",
    "exteriorColor": "Nardo Grey",
    "interiorColor": "Black Valcona Leather with Express Red Stitching",
    "location": "Chicago, IL",
    "featured": false,
    "badge": "High Performance",
    "rating": 4.9,
    "image": "assets/images/audi-rs7.jpg",
    "gallery": [
      "assets/images/audi-rs7.jpg",
      "assets/images/interior-1.jpg",
      "assets/images/interior-2.jpg",
      "assets/images/luxury-headlight.jpg"
    ],
    "description": "Breathtaking design meets brutal twin-turbo power. Finished in celebrated Nardo Grey with Black Optic Package and Carbon Fiber exterior trim. Features Audi Sport sport exhaust system, Bang & Olufsen 3D Advanced audio, and dynamic all-wheel steering.",
    "features": [
      "Dynamic Ride Control Suspension",
      "RS Sport Exhaust with Oval Black Tips",
      "Bang & Olufsen 3D Advanced Sound System",
      "Carbon Twill Inlays & Black Optic Package",
      "22-Inch 5-V-Spoke Trapezoid Wheels",
      "Audi Laser Light & Matrix LED Headlights",
      "Ventilated RS Sport Seats in Valcona Leather",
      "Night Vision Assistant",
      "Red Painted RS Brake Calipers",
      "Head-Up Display with RS Telemetry"
    ],
    "seller": {
      "name": "Windy City Exotics",
      "type": "Premier Verified Dealer",
      "phone": "+1 (800) 555-0155",
      "email": "info@windycityexotics.com",
      "rating": 4.94,
      "verified": true
    },
    "history": {
      "previousOwners": 1,
      "accidentFree": true,
      "serviceHistory": "Maintained by Audi Sport Certified Techs",
      "warranty": "Factory Audi CPO Warranty",
      "vin": "WAUZZZF27NA018492"
    }
  },
  {
    "id": "tesla-model-s-plaid",
    "make": "Toyota",
    "model": "Model S Plaid Tri-Motor",
    "year": 2023,
    "price": 94000,
    "formattedPrice": "$94,000",
    "mileage": 11000,
    "formattedMileage": "11,000 km",
    "condition": "Certified Pre-Owned",
    "bodyType": "Electric",
    "fuelType": "Electric",
    "transmission": "Automatic",
    "engine": "Tri-Motor All-Wheel Drive (1,020 HP)",
    "drivetrain": "All-Wheel Drive with Torque Vectoring",
    "horsepower": 1020,
    "acceleration": "1.99 sec (0-60 mph)",
    "exteriorColor": "Pearl White Multi-Coat",
    "interiorColor": "Cream Premium Interior with Walnut Decor",
    "location": "Seattle, WA",
    "featured": false,
    "badge": "Hyperspeed",
    "rating": 4.9,
    "image": "assets/images/tesla-model-s.jpg",
    "gallery": [
      "assets/images/tesla-model-s.jpg",
      "assets/images/interior-1.jpg",
      "assets/images/interior-2.jpg",
      "assets/images/blog-ev.jpg"
    ],
    "description": "Unprecedented speed and technological mastery. The Model S Plaid pushes 1,020 horsepower to hit 60 mph in under 2 seconds. Equipped with Full Self-Driving capability package, carbon fiber spoiler, 21-inch Arachnid wheels, and 22-speaker audio system with active noise cancelling.",
    "features": [
      "Tri-Motor 1,020 HP Powertrain",
      "Full Self-Driving Capability Included",
      "Yoke Steering Wheel Option",
      "17-Inch Cinematic Touchscreen with 2200x1300",
      "Rear Passenger Gaming & Media Display",
      "22-Speaker Audio with Active Road Noise Cancelling",
      "Sub-2.0s 0-60 Acceleration",
      "21-Inch Arachnid Wheels",
      "Heated and Ventilated Front Seats",
      "Tri-Zone Temperature Control"
    ],
    "seller": {
      "name": "Pacific EV Specialists",
      "type": "Verified Dealer",
      "phone": "+1 (800) 555-0129",
      "email": "cars@pacificev.com",
      "rating": 4.89,
      "verified": true
    },
    "history": {
      "previousOwners": 1,
      "accidentFree": true,
      "serviceHistory": "Direct Factory Records",
      "warranty": "Factory Battery and Drive Unit Warranty",
      "vin": "5YJSA1E67PF481023"
    }
  },
  {
    "id": "lexus-lc500",
    "make": "Lexus",
    "model": "LC 500 V8 Coupe",
    "year": 2023,
    "price": 98500,
    "formattedPrice": "$98,500",
    "mileage": 7300,
    "formattedMileage": "7,300 km",
    "condition": "Certified Pre-Owned",
    "bodyType": "Coupe",
    "fuelType": "Petrol",
    "transmission": "Automatic",
    "engine": "5.0L Naturally Aspirated V8 (471 HP)",
    "drivetrain": "Rear-Wheel Drive with Torsen LSD",
    "horsepower": 471,
    "acceleration": "4.4 sec (0-60 mph)",
    "exteriorColor": "Structural Blue",
    "interiorColor": "Bespoke White & Blue Semi-Aniline Leather",
    "location": "Scottsdale, AZ",
    "featured": false,
    "badge": "V8 Symphony",
    "rating": 4.95,
    "image": "assets/images/scenic-drive-chapter.jpg",
    "gallery": [
      "assets/images/scenic-drive-chapter.jpg",
      "assets/images/interior-1.jpg",
      "assets/images/interior-2.jpg",
      "assets/images/luxury-headlight.jpg"
    ],
    "description": "Concept car styling brought to life with an intoxicating naturally aspirated 5.0-liter V8 roar. Features Mark Levinson 13-speaker Reference surround sound, active rear steering, carbon-fiber roof, and Alcantara door inserts with flowing pleats.",
    "features": [
      "Naturally Aspirated 471-HP 5.0L V8",
      "Mark Levinson 13-Speaker Sound",
      "Active Rear Steering & Variable Ratio Steering",
      "Carbon Fiber Roof & Door Sills",
      "Triple-Beam Ultra-Compact LED Headlights",
      "Color Head-Up Display",
      "21-Inch Forged Staggered Wheels",
      "Dynamic Handling Package",
      "Heated & Ventilated Front Seats",
      "Blind Spot Monitor with Rear Cross-Traffic"
    ],
    "seller": {
      "name": "Desert Star Luxury Motors",
      "type": "Premier Verified Dealer",
      "phone": "+1 (800) 555-0168",
      "email": "lexus@desertstarmotors.com",
      "rating": 4.97,
      "verified": true
    },
    "history": {
      "previousOwners": 1,
      "accidentFree": true,
      "serviceHistory": "Exclusively Serviced at Lexus",
      "warranty": "L/Certified Factory Warranty",
      "vin": "JTHHP5AY5PA019482"
    }
  },
  {
    "id": "toyota-land-cruiser-300",
    "make": "Toyota",
    "model": "Land Cruiser 300 GR Sport",
    "year": 2024,
    "price": 118000,
    "formattedPrice": "$118,000",
    "mileage": 2800,
    "formattedMileage": "2,800 km",
    "condition": "New",
    "bodyType": "SUV",
    "fuelType": "Diesel",
    "transmission": "Automatic",
    "engine": "3.3L Twin-Turbo V6 Diesel (304 HP / 700 Nm)",
    "drivetrain": "Full-Time 4WD with Front, Center & Rear Diff Locks",
    "horsepower": 304,
    "acceleration": "6.8 sec (0-60 mph)",
    "exteriorColor": "Precious White Pearl",
    "interiorColor": "Black & Dark Red Semi-Aniline Leather",
    "location": "Dubai, UAE",
    "featured": false,
    "badge": "King of All Terrains",
    "rating": 5.0,
    "image": "assets/images/category-suv.jpg",
    "gallery": [
      "assets/images/category-suv.jpg",
      "assets/images/interior-1.jpg",
      "assets/images/interior-2.jpg",
      "assets/images/highway-stats-bg.jpg"
    ],
    "description": "Unrivaled durability, prestige, and cross-continental luxury. The GR Sport edition of the iconic Land Cruiser 300 features the revolutionary Electronic Kinetic Dynamic Suspension System (E-KDSS), triple locking differentials, and 12.3-inch dual rear seat entertainment screens.",
    "features": [
      "Electronic KDSS (E-KDSS) Suspension",
      "Triple Locking Differentials (Front, Center, Rear)",
      "Multi-Terrain Select with Auto Mode",
      "JBL 14-Speaker Synthesis Audio",
      "Dual 11.6-Inch Rear Seat Displays",
      "Cooler Box in Center Console",
      "Crawl Control & Turn Assist",
      "GR Sport Dedicated Black Mesh Grille",
      "Pre-Collision Safety with Pedestrian Detection",
      "Heated & Ventilated 1st & 2nd Row Seats"
    ],
    "seller": {
      "name": "Gulf Prestige Motors",
      "type": "Premier Verified Dealer",
      "phone": "+971 4 555 0192",
      "email": "exports@gulfprestigemotors.com",
      "rating": 4.98,
      "verified": true
    },
    "history": {
      "previousOwners": 0,
      "accidentFree": true,
      "serviceHistory": "Factory Pre-Delivery Inspection Certified",
      "warranty": "5-Year / 150,000 km International Warranty",
      "vin": "JTMDJ7AJ1RA029384"
    }
  }
];

let allCarsData = [];

// Fetch car data with automatic local fallback
async function fetchCarsData() {
  if (allCarsData && allCarsData.length > 0) return allCarsData;

  // If running via file:// protocol, directly use embedded default data to prevent CORS errors
  if (window.location.protocol === 'file:') {
    allCarsData = [...DEFAULT_CARS_DATA];
    return allCarsData;
  }

  try {
    const res = await fetch('data/cars.json');
    if (!res.ok) throw new Error('Failed to load JSON');
    const data = await res.json();
    allCarsData = (data && data.length > 0) ? data : [...DEFAULT_CARS_DATA];
    return allCarsData;
  } catch (err) {
    allCarsData = [...DEFAULT_CARS_DATA];
    return allCarsData;
  }
}

// Create standard vehicle card HTML
function createCarCardHTML(car, isDark = false) {
  const isFav = window.isFavorite ? window.isFavorite(car.id) : false;
  const cardClass = isDark ? 'car-card-dark rounded-2xl overflow-hidden flex flex-col' : 'car-card bg-white rounded-2xl overflow-hidden border border-gray-100 flex flex-col';
  const textTitleColor = isDark ? 'text-white' : 'text-[#071A2B]';
  const metaColor = isDark ? 'text-gray-400' : 'text-gray-500';
  const borderBottomColor = isDark ? 'border-white/10' : 'border-gray-100';

  return `
    <article class="${cardClass} group relative" data-car-id="${car.id}">
      <!-- Image Container -->
      <div class="relative img-zoom-container aspect-[16/10] bg-gray-900 overflow-hidden">
        <img 
          src="${car.image}" 
          alt="${car.make} ${car.model}" 
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        
        <!-- Badges -->
        <div class="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
          ${car.badge ? `
            <span class="bg-[#F4511E] text-white text-[11px] font-bold px-2.5 py-1 rounded-md tracking-wide uppercase shadow-sm">
              ${car.badge}
            </span>
          ` : ''}
          <span class="bg-[#071A2B]/85 backdrop-blur text-white text-[11px] font-medium px-2.5 py-1 rounded-md border border-white/10">
            ${car.condition}
          </span>
        </div>

        <!-- Favorite Heart Button -->
        <button 
          onclick="toggleFavorite('${car.id}', event)" 
          data-fav-id="${car.id}"
          class="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 backdrop-blur hover:bg-white text-gray-500 hover:text-[#F4511E] flex items-center justify-center transition-all shadow-md z-10 ${isFav ? 'text-[#F4511E]' : ''}"
          title="Save car"
          aria-label="Save ${car.make} ${car.model}"
        >
          <i class="${isFav ? 'fa-solid' : 'fa-regular'} fa-heart text-sm"></i>
        </button>

        <!-- Location Pill -->
        <div class="absolute bottom-3 left-3 bg-black/60 backdrop-blur text-white text-[11px] px-2.5 py-1 rounded-md flex items-center gap-1.5 border border-white/10">
          <i class="fa-solid fa-location-dot text-[#F4511E] text-[10px]"></i>
          <span>${car.location}</span>
        </div>
      </div>

      <!-- Card Body -->
      <div class="p-5 flex-1 flex flex-col justify-between">
        <div>
          <div class="flex items-baseline justify-between mb-1">
            <span class="text-xs uppercase font-semibold text-[#F4511E] tracking-wider">${car.make}</span>
            <div class="flex items-center gap-1 text-amber-400 text-xs">
              <i class="fa-solid fa-star text-[10px]"></i>
              <span class="font-bold text-gray-400 text-[11px]">${car.rating || '4.9'}</span>
            </div>
          </div>
          
          <h3 class="text-lg font-bold ${textTitleColor} hover:text-[#F4511E] transition-colors truncate">
            <a href="car-details.html?id=${car.id}">${car.make} ${car.model}</a>
          </h3>

          <p class="text-xs ${metaColor} mt-1 flex items-center gap-2">
            <span>${car.bodyType}</span>
            <span>•</span>
            <span>${car.year}</span>
            <span>•</span>
            <span>${car.formattedMileage}</span>
          </p>
        </div>

        <!-- Specs row with icons -->
        <div class="grid grid-cols-2 gap-2 my-4 py-3 border-y ${borderBottomColor} text-xs ${metaColor}">
          <div class="flex items-center gap-2">
            <i class="fa-solid fa-gears text-[#F4511E]"></i>
            <span class="truncate">${car.transmission}</span>
          </div>
          <div class="flex items-center gap-2">
            <i class="fa-solid fa-gas-pump text-[#F4511E]"></i>
            <span class="truncate">${car.fuelType}</span>
          </div>
        </div>

        <!-- Price and CTA -->
        <div class="flex items-center justify-between pt-1">
          <div>
            <span class="text-[10px] uppercase text-gray-400 block font-semibold">Total Price</span>
            <span class="text-xl font-extrabold text-[#F4511E]">${car.formattedPrice}</span>
          </div>
          <a 
            href="car-details.html?id=${car.id}" 
            class="px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${isDark ? 'bg-white/10 hover:bg-[#F4511E] text-white' : 'bg-[#071A2B] hover:bg-[#F4511E] text-white shadow-sm'}"
          >
            <span>View Details</span>
            <i class="fa-solid fa-arrow-right text-[10px]"></i>
          </a>
        </div>
      </div>
    </article>
  `;
}

// Render Featured Cars on Homepage
async function initFeaturedCars() {
  const container = document.getElementById('featured-cars-grid');
  if (!container) return;

  const cars = await fetchCarsData();
  const featured = cars.filter(c => c.featured).slice(0, 4);

  if (featured.length > 0) {
    container.innerHTML = featured.map(c => createCarCardHTML(c, true)).join('');
  }
}

// Load Details Page
async function initCarDetailsPage() {
  const detailsRoot = document.getElementById('car-details-root');
  if (!detailsRoot) return;

  const params = new URLSearchParams(window.location.search);
  const carId = params.get('id') || 'mercedes-gle-350';

  const cars = await fetchCarsData();
  const car = cars.find(c => c.id === carId) || cars[0];

  if (!car) {
    detailsRoot.innerHTML = `<div class="container mx-auto py-20 text-center"><h2 class="text-2xl font-bold">Vehicle not found</h2><a href="cars.html" class="btn-primary inline-block mt-4 px-6 py-2 rounded-lg">Return to Inventory</a></div>`;
    return;
  }

  // Update Page Title
  document.title = `${car.year} ${car.make} ${car.model} | Antixorcar.com`;

  // Render Page Content
  detailsRoot.innerHTML = `
    <!-- Breadcrumb -->
    <div class="bg-[#071A2B] text-gray-300 py-4 border-b border-white/10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-xs flex items-center gap-2">
        <a href="index.html" class="hover:text-[#F4511E] transition-colors">Home</a>
        <i class="fa-solid fa-chevron-right text-[10px] text-gray-500"></i>
        <a href="cars.html" class="hover:text-[#F4511E] transition-colors">Cars</a>
        <i class="fa-solid fa-chevron-right text-[10px] text-gray-500"></i>
        <span class="text-white font-medium">${car.make} ${car.model}</span>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
      <!-- Header info -->
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <div class="flex items-center gap-2 mb-2">
            <span class="bg-[#F4511E]/15 border border-[#F4511E]/30 text-[#F4511E] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">${car.badge || car.condition}</span>
            <span class="bg-gray-100 text-gray-700 text-xs font-semibold px-3 py-1 rounded-full">${car.year}</span>
            <span class="text-xs text-gray-500 flex items-center gap-1"><i class="fa-solid fa-location-dot text-[#F4511E]"></i> ${car.location}</span>
          </div>
          <h1 class="text-2xl sm:text-4xl font-extrabold text-[#071A2B] tracking-tight">${car.make} ${car.model}</h1>
          <p class="text-sm text-gray-500 mt-1">${car.bodyType} • ${car.transmission} • ${car.engine}</p>
        </div>
        <div class="flex items-baseline gap-4 bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
          <div>
            <span class="text-xs text-gray-400 uppercase font-semibold block">Verified Price</span>
            <span class="text-3xl sm:text-4xl font-extrabold text-[#F4511E]">${car.formattedPrice}</span>
          </div>
          <button 
            onclick="toggleFavorite('${car.id}', event)" 
            data-fav-id="${car.id}" 
            class="w-12 h-12 rounded-xl border border-gray-200 hover:border-[#F4511E] text-gray-400 hover:text-[#F4511E] flex items-center justify-center transition-all"
            title="Save Vehicle"
          >
            <i class="${window.isFavorite(car.id) ? 'fa-solid text-[#F4511E]' : 'fa-regular'} fa-heart text-xl"></i>
          </button>
        </div>
      </div>

      <!-- Main Layout: Gallery + Sticky Form -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <!-- Left: Gallery & Vehicle Specs (Col 8) -->
        <div class="lg:col-span-8 space-y-8">
          
          <!-- Image Gallery -->
          <div class="bg-white rounded-3xl p-3 sm:p-4 border border-gray-100 shadow-sm">
            <div class="relative aspect-[16/10] rounded-2xl overflow-hidden bg-gray-900 group">
              <img id="main-gallery-image" src="${car.gallery[0] || car.image}" alt="${car.make} ${car.model}" class="w-full h-full object-cover transition-opacity duration-300">
              <div class="absolute bottom-4 right-4 bg-black/70 backdrop-blur text-white text-xs px-3 py-1.5 rounded-lg flex items-center gap-2">
                <i class="fa-solid fa-camera text-[#F4511E]"></i>
                <span id="gallery-counter">1 of ${car.gallery.length} Photos</span>
              </div>
            </div>

            <!-- Thumbnail Row -->
            <div class="grid grid-cols-4 gap-3 mt-4">
              ${car.gallery.map((img, idx) => `
                <button 
                  onclick="switchGalleryImage('${img}', ${idx + 1}, ${car.gallery.length})" 
                  class="gallery-thumb aspect-[16/10] rounded-xl overflow-hidden border-2 transition-all ${idx === 0 ? 'border-[#F4511E] opacity-100 scale-98' : 'border-transparent opacity-70 hover:opacity-100'}"
                >
                  <img src="${img}" alt="Thumbnail ${idx + 1}" class="w-full h-full object-cover">
                </button>
              `).join('')}
            </div>
          </div>

          <!-- Quick Specs Key Grid -->
          <div class="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm">
            <h2 class="text-lg font-bold text-[#071A2B] mb-6 flex items-center gap-2">
              <i class="fa-solid fa-sliders text-[#F4511E]"></i> Key Specifications
            </h2>
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div class="bg-[#F5F7F9] p-4 rounded-2xl">
                <div class="w-8 h-8 rounded-lg bg-[#F4511E]/10 text-[#F4511E] flex items-center justify-center text-sm mb-2">
                  <i class="fa-solid fa-gauge-high"></i>
                </div>
                <p class="text-xs text-gray-500 font-medium">Mileage</p>
                <p class="text-sm font-bold text-[#071A2B] mt-0.5">${car.formattedMileage}</p>
              </div>

              <div class="bg-[#F5F7F9] p-4 rounded-2xl">
                <div class="w-8 h-8 rounded-lg bg-[#F4511E]/10 text-[#F4511E] flex items-center justify-center text-sm mb-2">
                  <i class="fa-solid fa-gears"></i>
                </div>
                <p class="text-xs text-gray-500 font-medium">Transmission</p>
                <p class="text-sm font-bold text-[#071A2B] mt-0.5">${car.transmission}</p>
              </div>

              <div class="bg-[#F5F7F9] p-4 rounded-2xl">
                <div class="w-8 h-8 rounded-lg bg-[#F4511E]/10 text-[#F4511E] flex items-center justify-center text-sm mb-2">
                  <i class="fa-solid fa-gas-pump"></i>
                </div>
                <p class="text-xs text-gray-500 font-medium">Fuel Type</p>
                <p class="text-sm font-bold text-[#071A2B] mt-0.5">${car.fuelType}</p>
              </div>

              <div class="bg-[#F5F7F9] p-4 rounded-2xl">
                <div class="w-8 h-8 rounded-lg bg-[#F4511E]/10 text-[#F4511E] flex items-center justify-center text-sm mb-2">
                  <i class="fa-solid fa-bolt"></i>
                </div>
                <p class="text-xs text-gray-500 font-medium">Power</p>
                <p class="text-sm font-bold text-[#071A2B] mt-0.5">${car.horsepower} HP</p>
              </div>
            </div>

            <!-- Full Spec Table -->
            <div class="mt-6 border-t border-gray-100 pt-6">
              <h3 class="text-sm font-bold text-[#071A2B] mb-4 uppercase tracking-wider text-xs text-gray-400">Technical Details</h3>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8 text-xs">
                <div class="flex justify-between py-2 border-b border-gray-100">
                  <span class="text-gray-500">Make</span>
                  <span class="font-bold text-[#071A2B]">${car.make}</span>
                </div>
                <div class="flex justify-between py-2 border-b border-gray-100">
                  <span class="text-gray-500">Model</span>
                  <span class="font-bold text-[#071A2B]">${car.model}</span>
                </div>
                <div class="flex justify-between py-2 border-b border-gray-100">
                  <span class="text-gray-500">Year</span>
                  <span class="font-bold text-[#071A2B]">${car.year}</span>
                </div>
                <div class="flex justify-between py-2 border-b border-gray-100">
                  <span class="text-gray-500">Body Type</span>
                  <span class="font-bold text-[#071A2B]">${car.bodyType}</span>
                </div>
                <div class="flex justify-between py-2 border-b border-gray-100">
                  <span class="text-gray-500">Engine</span>
                  <span class="font-bold text-[#071A2B]">${car.engine}</span>
                </div>
                <div class="flex justify-between py-2 border-b border-gray-100">
                  <span class="text-gray-500">Drivetrain</span>
                  <span class="font-bold text-[#071A2B]">${car.drivetrain}</span>
                </div>
                <div class="flex justify-between py-2 border-b border-gray-100">
                  <span class="text-gray-500">Acceleration (0-60)</span>
                  <span class="font-bold text-[#071A2B]">${car.acceleration}</span>
                </div>
                <div class="flex justify-between py-2 border-b border-gray-100">
                  <span class="text-gray-500">Exterior Color</span>
                  <span class="font-bold text-[#071A2B]">${car.exteriorColor}</span>
                </div>
                <div class="flex justify-between py-2 border-b border-gray-100">
                  <span class="text-gray-500">Interior Color</span>
                  <span class="font-bold text-[#071A2B]">${car.interiorColor}</span>
                </div>
                <div class="flex justify-between py-2 border-b border-gray-100">
                  <span class="text-gray-500">VIN</span>
                  <span class="font-mono font-bold text-[#071A2B]">${car.history.vin}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Description -->
          <div class="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm">
            <h2 class="text-lg font-bold text-[#071A2B] mb-3 flex items-center gap-2">
              <i class="fa-solid fa-circle-info text-[#F4511E]"></i> Vehicle Overview
            </h2>
            <p class="text-sm text-gray-600 leading-relaxed">${car.description}</p>
          </div>

          <!-- Premium Features & Options -->
          <div class="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm">
            <h2 class="text-lg font-bold text-[#071A2B] mb-6 flex items-center gap-2">
              <i class="fa-solid fa-list-check text-[#F4511E]"></i> Equipment & Installed Options
            </h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              ${car.features.map(f => `
                <div class="flex items-center gap-3 p-3 rounded-xl bg-[#F5F7F9] text-xs font-semibold text-gray-800">
                  <i class="fa-solid fa-circle-check text-[#F4511E] text-sm"></i>
                  <span>${f}</span>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Vehicle History & Guarantee -->
          <div class="bg-[#071A2B] text-white rounded-3xl p-6 sm:p-8 border border-white/10 shadow-xl">
            <div class="flex items-center justify-between mb-6">
              <div>
                <span class="text-xs uppercase font-semibold text-[#F4511E] tracking-wider">Peace of Mind</span>
                <h2 class="text-xl font-bold mt-1">Antixor Verified Inspection</h2>
              </div>
              <div class="w-12 h-12 rounded-xl bg-[#F4511E]/20 text-[#F4511E] flex items-center justify-center text-xl">
                <i class="fa-solid fa-shield-halved"></i>
              </div>
            </div>
            
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              <div class="bg-white/5 p-4 rounded-2xl border border-white/10">
                <p class="text-xs text-gray-400">Accident History</p>
                <p class="text-sm font-bold text-emerald-400 mt-1 flex items-center gap-1.5">
                  <i class="fa-solid fa-check"></i> 100% Clean Title
                </p>
              </div>
              <div class="bg-white/5 p-4 rounded-2xl border border-white/10">
                <p class="text-xs text-gray-400">Previous Owners</p>
                <p class="text-sm font-bold text-white mt-1">${car.history.previousOwners} Owner</p>
              </div>
              <div class="bg-white/5 p-4 rounded-2xl border border-white/10">
                <p class="text-xs text-gray-400">Warranty Coverage</p>
                <p class="text-sm font-bold text-white mt-1">${car.history.warranty}</p>
              </div>
            </div>
            <p class="text-xs text-gray-300">Every vehicle listed on Antixorcar.com undergoes an extensive 160-point mechanical and safety inspection before being certified.</p>
          </div>

        </div>

        <!-- Right: Sticky Enquiry & Seller Card (Col 4) -->
        <div class="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
          
          <!-- Sticky Contact Seller Form Card -->
          <div class="bg-white rounded-3xl p-6 sm:p-7 border border-gray-100 shadow-xl">
            <h3 class="text-lg font-bold text-[#071A2B] mb-1">Enquire About This Car</h3>
            <p class="text-xs text-gray-500 mb-6">Direct enquiry to the verified dealer.</p>

            <form id="car-enquiry-form" onsubmit="handleCarEnquiry(event)" class="space-y-4">
              <input type="hidden" name="car_id" value="${car.id}">
              <input type="hidden" name="car_name" value="${car.make} ${car.model}">

              <div>
                <label class="block text-xs font-semibold text-gray-700 mb-1.5">Your Full Name</label>
                <div class="relative">
                  <i class="fa-regular fa-user absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-xs"></i>
                  <input type="text" required placeholder="Alex Johnson" class="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-gray-200 text-xs focus:outline-none focus:border-[#F4511E] transition-colors">
                </div>
              </div>

              <div>
                <label class="block text-xs font-semibold text-gray-700 mb-1.5">Email Address</label>
                <div class="relative">
                  <i class="fa-regular fa-envelope absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-xs"></i>
                  <input type="email" required placeholder="alex@example.com" class="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-gray-200 text-xs focus:outline-none focus:border-[#F4511E] transition-colors">
                </div>
              </div>

              <div>
                <label class="block text-xs font-semibold text-gray-700 mb-1.5">Phone Number</label>
                <div class="relative">
                  <i class="fa-solid fa-phone absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-xs"></i>
                  <input type="tel" required placeholder="+1 (555) 000-0000" class="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-gray-200 text-xs focus:outline-none focus:border-[#F4511E] transition-colors">
                </div>
              </div>

              <div>
                <label class="block text-xs font-semibold text-gray-700 mb-1.5">Message / Request</label>
                <textarea rows="3" class="w-full p-3 rounded-xl border border-gray-200 text-xs focus:outline-none focus:border-[#F4511E] transition-colors">Hi, I am interested in this ${car.year} ${car.make} ${car.model}. Please send me the availability, inspection report, and best offer.</textarea>
              </div>

              <div class="pt-2 space-y-2.5">
                <button type="submit" class="w-full py-3.5 rounded-xl btn-primary text-xs uppercase tracking-wider font-bold shadow-md">
                  Send Enquiry Now →
                </button>
                <a href="financing.html?price=${car.price}" class="w-full py-3 rounded-xl bg-gray-100 hover:bg-gray-200 text-[#071A2B] text-xs font-bold flex items-center justify-center gap-2 transition-colors">
                  <i class="fa-solid fa-calculator text-[#F4511E]"></i>
                  <span>Calculate Financing</span>
                </a>
              </div>
            </form>

            <div class="mt-4 pt-4 border-t border-gray-100 flex items-center justify-center gap-4 text-xs text-gray-500">
              <span class="flex items-center gap-1.5"><i class="fa-solid fa-bolt text-[#F4511E]"></i> Avg response: 15 min</span>
            </div>
          </div>

          <!-- Verified Dealer Box -->
          <div class="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
            <span class="text-[10px] uppercase font-bold text-[#F4511E] tracking-wider block mb-1">Listed By</span>
            <div class="flex items-center gap-3 mb-4">
              <div class="w-12 h-12 rounded-2xl bg-[#071A2B] text-white flex items-center justify-center font-bold text-lg">
                <i class="fa-solid fa-award text-[#F4511E]"></i>
              </div>
              <div>
                <h4 class="text-sm font-bold text-[#071A2B]">${car.seller.name}</h4>
                <p class="text-xs text-gray-400 flex items-center gap-1.5 mt-0.5">
                  <span class="text-emerald-600 font-semibold flex items-center gap-1"><i class="fa-solid fa-circle-check text-[10px]"></i> Verified Dealer</span>
                  <span>•</span>
                  <span class="text-amber-500 font-bold">★ ${car.seller.rating}</span>
                </p>
              </div>
            </div>

            <div class="space-y-2 text-xs text-gray-600 mb-4">
              <div class="flex items-center gap-2">
                <i class="fa-solid fa-phone text-[#F4511E] w-4"></i>
                <span>${car.seller.phone}</span>
              </div>
              <div class="flex items-center gap-2">
                <i class="fa-solid fa-envelope text-[#F4511E] w-4"></i>
                <span class="truncate">${car.seller.email}</span>
              </div>
            </div>

            <button onclick="window.showToast('Connecting you with dealer concierge...', 'info')" class="w-full py-2.5 rounded-xl border border-gray-200 hover:border-[#F4511E] hover:text-[#F4511E] text-xs font-semibold transition-colors">
              Schedule Private Test Drive
            </button>
          </div>

        </div>
      </div>

      <!-- Similar Vehicles Section -->
      <div class="mt-16 pt-12 border-t border-gray-200">
        <div class="flex items-center justify-between mb-8">
          <div>
            <span class="text-xs font-semibold text-[#F4511E] uppercase tracking-wider">Explore Options</span>
            <h2 class="text-2xl font-bold text-[#071A2B]">Similar Premium Cars</h2>
          </div>
          <a href="cars.html" class="text-xs font-bold text-[#F4511E] hover:underline flex items-center gap-1">
            <span>View All Cars</span>
            <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>
        <div id="similar-cars-grid" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"></div>
      </div>
    </div>
  `;

  // Render Similar Cars
  const similarCars = cars.filter(c => c.id !== car.id && (c.bodyType === car.bodyType || c.make === car.make)).slice(0, 4);
  const similarGrid = document.getElementById('similar-cars-grid');
  if (similarGrid && similarCars.length > 0) {
    similarGrid.innerHTML = similarCars.map(c => createCarCardHTML(c, false)).join('');
  } else if (similarGrid) {
    similarGrid.innerHTML = cars.slice(0, 4).map(c => createCarCardHTML(c, false)).join('');
  }
}

// Switch main gallery image on details page
window.switchGalleryImage = function(imgSrc, currentIdx, total) {
  const mainImg = document.getElementById('main-gallery-image');
  const counter = document.getElementById('gallery-counter');
  if (mainImg) {
    mainImg.style.opacity = '0.3';
    setTimeout(() => {
      mainImg.src = imgSrc;
      mainImg.style.opacity = '1';
    }, 150);
  }
  if (counter) counter.textContent = `${currentIdx} of ${total} Photos`;

  document.querySelectorAll('.gallery-thumb').forEach((thumb, idx) => {
    if (idx === currentIdx - 1) {
      thumb.classList.add('border-[#F4511E]', 'opacity-100');
      thumb.classList.remove('border-transparent', 'opacity-70');
    } else {
      thumb.classList.remove('border-[#F4511E]', 'opacity-100');
      thumb.classList.add('border-transparent', 'opacity-70');
    }
  });
};

// Handle Car Enquiry Form Submission
window.handleCarEnquiry = function(e) {
  e.preventDefault();
  const form = e.target;
  const carName = form.car_name ? form.car_name.value : 'the vehicle';
  window.showToast(`Thank you! Your enquiry for ${carName} has been submitted. The dealer will reach out shortly.`, 'success');
  form.reset();
};

document.addEventListener('DOMContentLoaded', () => {
  initFeaturedCars();
  initCarDetailsPage();
});
