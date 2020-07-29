const state = {
    quote: {
        business: "",
        postCode: ""
    },
    dropdownMenu: [
        "Air Conditioning",
        "Arborists",
        "Architects",
        "Asbestos Removal",
        "Awnings",
        "Balustrades",
        "Bathroom Renovations",
        "Blind Suppliers",
        "Blinds",
        "Bricklayers",
        "Building Designers",
        "Building Inspections",
        "Cabinet Makers",
        "Carpenters",
        "Carpet Cleaning",
        "Carports",
        "Cladding",
        "Commercial Cleaning",
        "Concrete Resurfacing",
        "Concreting",
        "Curtains",
        "Decking",
        "Demolition",
        "Doors",
        "Drafting",
        "Excavation",
        "Extension Design",
        "Fencing",
        "Garges",
        "Garden Clean Up",
        "Gardeners",
        "Gas Fitters",
        "Gates",
        "Gazebo",
        "Glazier",
        "Gutter Cleaning",
        "Guttering",
        "Home Security",
        "Home Theatre",
        "Hot Water Systems",
        "Insulation",
        "Interior Decorators",
        "Interior Designers",
        "Irrigation Systems",
        "Kitchens",
        "Landscapers",
        "Lawn & Turf",
        "Lawn Mowing",
        "Lighting",
        "Patios",
        "Pavers",
        "Pergolas",
        "Pest Control",
        "Plastering",
        "Pool Fencing",
        "Pressure Cleaner",
        "Rain Water Tanks",
        "Removalists",
        "Render",
        "Rendering",
        "Retaining Walls",
        "Roof Repairs",
        "Roofing",
        "Rubbish Removal",
        "Security Screen Doors",
        "Shopfitters",
        "Shower Screens",
        "Skylights",
        "Solar Power",
        "Splashbacks",
        "Tilers",
        "Timber Flooring",
        "Tree Fellers",
        "Verandahs",
        "Wardrobes",
        "Waterproofing",
        "Window Cleaners",
        "Window Repair",
        "Window Tinting",
        "Windows"
    ],
    dropdownMenu2: [
        {
            title: "Air Conditioning",
            links: [
                "Air Conditioning Engineers",
                "Air Conditioning Installation",
                "Air Conditioning Maintenance"
            ]
        },
        {
            title: "Architect",
            links: [
                "Architects",
                "Architectural Plans/Drawings",
                "Builder Estimates",
                "Building Project Management",
                "Project Managers",
                "Refurbishments"
            ]
        },
        {
            title: "Bathroom Fitter",
            links: [
                "Bathroom Design and Installation",
                "Bathroom Designers",
                "Bathroom Fitters",
                "Bathroom Installation",
                "Bathroom Plumbers",
                "Bathroom Refurbishments",
                "Bathrooms",
                "Baths/Skins/Bides/Toilets"
            ]
        },
        {
            title: "Bricklayer | Stone Mason",
            links: [
                "Block Paving",
                "Blockwork",
                "Bricklayers",
                "Builder Estimates",
                "Cavity Wall Insulating",
                "Chimney Construction/Repair",
                "Concrete Contractors",
                "Concrete Flooring",
                "Concreting",
                "Driveway Walls",
                "Exterior Insulation",
                "Fireplace Installation/Repair",
                "Garden Walls",
                "General Masonry Works",
                "Granite Flooring",
                "Laying Flag Stones",
                "Marble Floors",
                "Partition Walls",
                "Patio Lay/Repair",
                "Pavers",
                "Pebble Dashing",
                "Renovation Companies",
                "Repointing",
                "Sandblasting",
                "Stone Work/Renovation",
                "Underpinning"
            ]
        },
        {
            title: "Builder",
            links: [
                "Asbestos Removal",
                "Barn Conversion",
                "Basement/Cellar Renovation",
                "Bathroom Design and Installation",
                "Bathroom Installation",
                "Bathroom Refurbishments",
                "Baths/Sinks/Bidets/Toilets",
                "Blockwork",
                "Bricklayers",
                "Builder Eestimates",
                "Car Ports",
                "Cavity Wall insulating",
                "Cavity Wall Insulation Removal",
                "Chimney Construction/Repair",
                "Cladding",
                "Concrete Contractors",
                "Concrete Flooring",
                "Concreting",
                "Conservatories",
                "Demolition Work",
                "Double Glazing",
                "Driveway Crazy Paving & Slabbing",
                "Driveway Gravel",
                "Driveway Pattern Imprinted",
                "Driveway Tarmac/Asphalt",
                "Driveways",
                "Excavators",
                "Extension Builders",
                "Extensions",
                "Exterior Insulation",
                "External Painters and Decorators",
                "Flashing",
                "Flat Roof Construction/Repair",
                "Floor Restoration",
                "Footings/Foundations",
                "Garage Builders",
                "Garage Construction",
                "Garage Conversions",
                "General Bathroom Works",
                "Greenhouse Installation",
                "Ground Workers",
                "House Builders",
                "Internal Renovation/Refurbishment",
                "Kitchen Design and Fit",
                "Kitchen Installers",
                "Loft Conversions",
                "Loft Insulating",
                "Metal Conservatories",
                "Metal Staircases",
                "New Build",
                "New Garage Build",
                "New Roof",
                "Outbuilding",
                "Partition Walls",
                "Pebble Dashing",
                "Porch Builders",
                "Property Renovation",
                "Rated Tradespeople",
                "Refurbishments",
                "Renovation Companies",
                "Roof Beams",
                "Roof Insulating",
                "Roofers",
                "Sash Windows",
                "Scaffolding",
                "Screeding",
                "Shop Fitters",
                "Skylight Windows",
                "Small Building Work/Maintenance",
                "Sports Facility Consturction and Maintenance Specialists",
                "Structural Work",
                "Stud Walls",
                "Suspended Ceilings",
                "Swimming Pool Builders",
                "Swimming Pool Enclosures",
                "Timber Framed Buildings",
                "Tradesman",
                "Tradesmen",
                "Tradespeople",
                "Underpinning",
                "uPVC Conservatories",
                "uPVC Windows",
                "Velux Windows",
                "Ventilation",
                "Wooden Conservatories",
                "Wooden Decking",
                "Wooden Staircases"
            ]
        },
        {
            title: "Building Project Management",
            links: [
                "Architectural Plans/Drawings",
                "Builder Estimates",
                "Builders Quotes",
                "Building Project Management",
                "Building Project Managers",
                "Project Managers",
                "Refurbishments"
            ]
        },
        {
            title: "Carpenter | Joiner",
            links: [
                "Awnings/Sunshades",
                "Banister Fitters",
                "Bay Windows",
                "Bedroom Fitters",
                "Bedroom Fitting",
                "Car Ports",
                "Carpenters",
                "Decking",
                "Door Fitters",
                "Doors",
                "External Wood Preservation",
                "External Wooden Doors",
                "Fencing",
                "Fire Doors",
                "Flat Pack Assembly",
                "Floor Boards",
                "Floor Restoration",
                "Floor Sanding and Finishing",
                "Flooring",
                "French Doors",
                "Furniture Restoration",
                "General Carpentry/Joinery Works",
                "General Fitters",
                "Internal Wood Preservation",
                "Internal Wooden Doors",
                "Joiners",
                "Kitchen Cupboards",
                "Kitchen Design and Fit",
                "Kitchen Fitters",
                "Kitchen Installers",
                "Kitchen Worktops",
                "Panelling",
                "Patio Doors",
                "Pergolas",
                "Rated Tradespeople",
                "Roof Beams",
                "Sash Windows",
                "Shelving/Bookcases",
                "Shop Fitters",
                "Solid Wood Floors",
                "Spiral Staircases",
                "Stairs",
                "Stud Walls",
                "Timber Framed Buildings",
                "Timber Restoration",
                "Timber Sandblasting",
                "Wardrobes Installation/Repair",
                "Windows",
                "Wooden Conservatories",
                "Wooden Decking",
                "Wooden Doors",
                "Wooden Floors",
                "Wooden Furniture",
                "Wooden Garage Doors",
                "Wooden Gates",
                "Wooden Sheds",
                "Wooden Shutters",
                "Wooden Staircases",
                "Wooden Windows"
            ]
        },
        {
            title: "Carpet Fitter",
            links: ["Carpet Cleaning", "Carpte Fitter"]
        },
        {
            title: "Cleaner",
            links: [
                "Car Cleaning/Valeting",
                "Carpet Cleaning",
                "Drain Cleaning/Unblocking",
                "Driveway Cleaning",
                "Garden Clearance",
                "Gutter Clearing",
                "House Cleaning",
                "Office Cleaning",
                "Patio Cleaning",
                "Pressure Cleaning",
                "Sandblasting",
                "Skip Hire",
                "Swimming Pool Cleaners",
                "Timber Sandblasting"
            ]
        },
        {
            title: "Damp Proofing | Dry Rot | Woodworm | Pest Control",
            links: [
                "Cavity Wall Insulation Removal",
                "Damp Proofing",
                "Dry Rot",
                "External Wood Preservation",
                "Internal Wood Preservation",
                "Waterproofing",
                "Woodworm"
            ]
        },
        {
            title: "Doors | Windows | Conservatories",
            links: [
                "Bay Windows",
                "Builder Estimates",
                "Composite Doors",
                "Conservatories",
                "Conservatory Blinds",
                "Conservatory Repairs",
                "Door Fitters",
                "Doors",
                "Double Glazing",
                "Double Glazing Fitters",
                "External uPVC Doors",
                "Fascias",
                "French Doors",
                "Garage Door Fitters",
                "Greenhouse Repair",
                "Metal Conservatories",
                "Patio Doors",
                "Skylight Windows",
                "Soffits",
                "Soffits and Fascias",
                "uPVC Conservatories",
                "uPVC Doors",
                "uPVC Windows",
                "Window Blinds",
                "Window Fitters",
                "Window Glazing",
                "Windows",
                "Wooden Conservatories",
                "Wooden Doors",
                "Wooden Windows"
            ]
        },
        {
            title: "Drainage",
            links: [
                "Drain Cleaning/Unblocking",
                "Drainage",
                "Land Drainage",
                "Leak Detection External",
                "Sewage Services",
                "Soakaways"
            ]
        },
        {
            title: "Electrician",
            links: [
                "Alarm Fitters",
                "Alarm Installation",
                "Alarms",
                "Audio Visual Installation/Repair",
                "Burglar Alarms",
                "CCTV",
                "Ceiling Fans",
                "Consumer Units",
                "Cooker Hoods",
                "Domestic Electricians",
                "Door Entry Systems",
                "Electric Boiler Engineers",
                "Electric Boilers",
                "Electric Fire Fitters",
                "Electric Fires",
                "Electric Under Floor Heating",
                "Electric Water Heating Engineers",
                "Electrical Inspectors",
                "Electrical Testers",
                "Electricians",
                "Emergency Electrical Work",
                "Extractors",
                "Fire/Smoke Alarms",
                "Fusebox Fitters",
                "Fuseboxes",
                "General Electrical/Wiring Works",
                "House Rewires",
                "Immersion Heaters",
                "Intercom and Entry Systems",
                "Intruder Alarms",
                "Lift Repair/Servicing",
                "Lighting",
                "Lighting and Power",
                "Power Specialists",
                "Rated Tradespeople",
                "Rewiring",
                "Satellite TV Installers",
                "Telephone Engineers",
                "Utilities Connection",
                "Video Surveillance",
                "White Goods"
            ]
        },
        {
            title: "Excavator | Ground Worker | Driveways | Demolition",
            links: [
                "Block Paving",
                "Builder Estimates",
                "Concrete Contractors",
                "Concrete Flooring",
                "Concreting",
                "Demolition Work",
                "Drainage",
                "Driveway Cleaning",
                "Driveway Crazy Paving & Slabbing",
                "Driveway Gravel",
                "Driveway Pattern Imprinted",
                "Driveway Tarmac/Asphalt",
                "Driveway Walls",
                "Driveways",
                "Excavators",
                "Footings/Foundations",
                "Ground Workers",
                "Pathways",
                "Patio Lay/Repair",
                "Plant Hire",
                "Soakaways",
                "Sports Facility Consturction and Maintenance Specialists"
            ]
        },
        {
            title: "Exterior Repair | Renovation",
            links: [
                "Blockwork",
                "Builder Estimates",
                "Cladding",
                "Exterior Insulation",
                "External Decorators",
                "External Painters",
                "External Painters and Decorators",
                "Guttering",
                "Insulators",
                "Renovation Companies"
            ]
        },
        {
            title: "Fireplace | Chimney",
            links: [
                "Chimney Caps",
                "Chimney Construction/Repair",
                "Chimney Sweeping",
                "Chimneys",
                "Electric Fires",
                "Fireplace Installation/Repair",
                "Fireplaces",
                "Flue Lining",
                "Gas Fires",
                "Oil Fires",
                "Wood Burners"
            ]
        },
        {
            title: "Flooring",
            links: [
                "Carpet Fitters",
                "Ceramic Tilers",
                "Concrete Flooring",
                "Engineered Wood Flooring",
                "Floor Boarding",
                "Floor Boards",
                "Floor Restoration",
                "Floor Sanding and Finishing",
                "Flooring",
                "General Flooring Works",
                "Granite Flooring",
                "Laminate Flooring",
                "Laminate Floors",
                "Linoleum Flooring",
                "Marble Floors",
                "Parquet Flooring",
                "Slate Tilers",
                "Solid Wood Floors",
                "Stone Flooring",
                "Vinyl Flooring",
                "Vinyl Floors",
                "Wooden Floors"
            ]
        },
        {
            title: "Garage Doors | Gates",
            links: [
                "Automatic Garage Doors",
                "Automatic Gate Fitters",
                "Garage Door Fitters",
                "Garage Doors",
                "Garden Gates",
                "Gate Fitters",
                "Gates",
                "Metal Garages Doors",
                "Metal Gate Fitters",
                "Metal Gates",
                "Security Gate Fitters",
                "Security Gate Installation/Repair",
                "Security Gates",
                "Wooden Garage Doors",
                "Wooden Gate Fitters",
                "Wooden Gates"
            ]
        },
        {
            title: "Gardener",
            links: [
                "Garden Clearance",
                "Garden Design",
                "Garden Maintenance",
                "Garden Ponds",
                "Garden Walls",
                "Gardeners",
                "General Gardening Works",
                "Greenhouse Repair",
                "Lawn Mowing",
                "Lawns",
                "Pergolas",
                "Pruning",
                "Sprinkler Systems",
                "Tree Planting",
                "Tree Surgeons",
                "Turfing"
            ]
        },
        {
            title: "Handyman | General Maintenance",
            links: [
                "Automatic Garage Doors",
                "Awnings/Sunshades",
                "Bathroom/Kitchen Leaks",
                "Bedroom Fitters",
                "Bedroom Refurbishment",
                "Carpet Cleaning",
                "Carpet Fitters",
                "Ceiling Fans",
                "Chimney Sweeping",
                "Composite Doors",
                "Conservatory Blinds",
                "Conservatory Repairs",
                "Cooker Hoods",
                "Damp Proofing",
                "Drain Cleaning/Unblocking",
                "Driveway Cleaning",
                "External Painters and Decorators",
                "External Wood Preservation",
                "External Wooden Doors",
                "Extractors",
                "Fire Doors",
                "Fire Extinguishers",
                "Fire/Smoke Alarms",
                "Flat Pack Assembly",
                "Furniture Restoration",
                "Garden Clearance",
                "Garden Maintenance",
                "Gas Hobs",
                "General Building Works",
                "General Carpentry/Joinery Works",
                "General Fitters",
                "General Flooring Works",
                "General Gardening Works",
                "General Kitchen Works",
                "General Maintenance",
                "General Masonry Works",
                "General Painting and Decorating Works",
                "General Plastering Works",
                "General Plumbing Works",
                "General Tiling Works",
                "Greenhouse Repair",
                "Gutter Clearing",
                "Handyman",
                "Insulators",
                "Internal Leak Detection",
                "Internal Wooden Doors",
                "Kitchen Cupboards",
                "Lawn Mowing",
                "Laying Flag Stones",
                "Lift Repair/Servicing",
                "Linoleum Flooring",
                "Metal Garages Doors",
                "Metal Gates",
                "Panelling",
                "Parquet Flooring",
                "Patio Cleaning",
                "Plaster Boarding",
                "Radiator Installation/Repair/Flushing",
                "Radiator Installers",
                "Rated Tradespeople",
                "Repointing",
                "Roller/Security Shutters",
                "Roofing Repairs/Leaks",
                "Satellite Dishes",
                "Shelving/Bookcases",
                "Shop Fitters",
                "Small Building Work/Maintenance",
                "Tap Replacement",
                "Taps",
                "TV Aerials",
                "Wardrobes Installation/Repair",
                "Washing Machines/Dishwashers",
                "White Goods",
                "Window Blinds",
                "Wooden Garage Doors",
                "Wooden Gates",
                "Wooden Sheds",
                "Wooden Shutters"
            ]
        },
        {
            title: "Heating",
            links: [
                "Boiler Engineers",
                "Boiler Servicing",
                "Central Heating Engineers",
                "Electric Boiler Engineers",
                "Electric Boilers",
                "Electric Fires",
                "Electric Under Floor Heating",
                "Electric Water Heating Engineers",
                "Gas Boiler Engineers",
                "Gas Boilers",
                "Gas Water Heating Engineers",
                "General Heating Works",
                "Immersion Heaters",
                "Oil Fired Central Heating",
                "Oil Fires",
                "Radiator Installation/Repair/Flushing",
                "Radiators",
                "Underfloor Heating"
            ]
        },
        {
            title: "Interior Designer",
            links: ["Interior Designers", "Refurbishments"]
        },
        {
            title: "Kitchen Fitter",
            links: [
                "Builder Estimates",
                "Cooker Hoods",
                "General Kitchen Works",
                "Kitchen Cupboard Fitters",
                "Kitchen Cupboards",
                "Kitchen Design and Fit",
                "Kitchen Designers",
                "Kitchen Fitters",
                "Kitchen Installers",
                "Kitchen Plumbers",
                "Kitchen Tilers",
                "Kitchen Worktop Fitters",
                "Kitchen Worktops"
            ]
        },
        {
            title: "Landscaper | Fencer",
            links: [
                "Block Paving",
                "Builder Estimates",
                "Decking",
                "Fencers",
                "Fencing",
                "Garden Clearance",
                "Garden Design",
                "Garden Fencers",
                "Garden Gates",
                "Garden Maintenance",
                "Garden Ponds",
                "Garden Walls",
                "Gardeners",
                "Gate Fitters",
                "General Landscaping Works",
                "Greenhouse Installation",
                "Hot Tubs",
                "Landscape Gardeners",
                "Landscapers",
                "Lawns",
                "Laying Flag Stones",
                "Metal Gate Fitters",
                "Pathways",
                "Patio Lay/Repair",
                "Pavers",
                "Pergolas",
                "Rated Tradespeople",
                "Sprinkler Systems",
                "Tree Planting",
                "Tree Surgeons",
                "Turfing",
                "Wooden Decking",
                "Wooden Gate Fitters"
            ]
        },
        {
            title: "Lifts | Stairs",
            links: [
                "Banister Fitters",
                "Lift Repair/Servicing",
                "Lifts",
                "Spiral Staircases",
                "Stairs",
                "Wooden Staircases"
            ]
        },
        {
            title: "Locksmith",
            links: ["Locksmiths"]
        },
        {
            title: "Painter | Decorator",
            links: [
                "Bathroom Tilers",
                "Bedroom Refurbishment",
                "Ceramic Tilers",
                "Coving",
                "Decorators",
                "Dry Wallers",
                "External Decorators",
                "External Painters",
                "External Painters and Decorators",
                "Floor Tilers",
                "General Painting and Decorating Works",
                "Kitchen Tilers",
                "Painters",
                "Painters and Decorators",
                "Panelling",
                "Plasterers",
                "Rated Tradespeople",
                "Renderers",
                "Sandblasting",
                "Screeding",
                "Skimming",
                "Tilers",
                "Timber Sandblasting",
                "Wall Tilers",
                "Wallpaperers",
                "Wallpapering"
            ]
        },
        {
            title: "Plasterer | Dry Waller",
            links: [
                "Artexing",
                "Cavity Wall Insulating",
                "Coving",
                "Dry Wallers",
                "General Plastering Works",
                "Insulators",
                "Panelling",
                "Pebble Dashing",
                "Plaster Boarding",
                "Plasterers",
                "Rated Tradespeople",
                "Renderers",
                "Screeding",
                "Skimming",
                "Stud Walls",
                "Suspended Ceilings"
            ]
        },
        {
            title: "Plumber | Gas Fitter",
            links: [
                "Air Conditioning Engineers",
                "Bathroom Fitters",
                "Bathroom Installation",
                "Bathroom Plumbers",
                "Bathroom Refurbishments",
                "Bathroom/Kitchen Leaks",
                "Bathrooms",
                "Baths/Sinks/Bidets/Toilets",
                "Boiler Engineers",
                "Boiler Servicing",
                "Central Heating Engineers",
                "Drain Cleaning/Unblocking",
                "Electric Boiler Engineers",
                "Electric Water Heating Engineers",
                "Emergency Gas Plumbing",
                "Emergency Plumbers",
                "Emergency Water Plumbing",
                "Fire Sprinkler Systems",
                "Gas Boiler Engineers",
                "Gas Boilers",
                "Gas Fires",
                "Gas Fitters",
                "Gas Hobs",
                "Gas Inspecting/Safety Checks",
                "Gas Water Heating Engineers",
                "General Bathroom Works",
                "General Plumbing Works",
                "Geothermal Energy",
                "Hot Tubs",
                "Immersion Heaters",
                "Internal Leak Detection",
                "Kitchen Plumbers",
                "Leak Detection External",
                "Oil Fired Central Heating",
                "Plumbers",
                "Radiator Installation/Repair/Flushing",
                "Radiator Installers",
                "Radiators",
                "Rated Tradespeople",
                "Shower Fitters",
                "Shower Installation/Repair",
                "Showers",
                "Solar Panels",
                "Sprinkler Systems",
                "Tap Replacement",
                "Taps",
                "Underfloor Heating",
                "Utilities Connection",
                "Washing Machines/Dishwashers",
                "Water Tanks",
                "Wet Rooms"
            ]
        },
        {
            title: "Removals",
            links: [
                "Delivery Drivers",
                "House Removals",
                "Office Removals",
                "Removers"
            ]
        },
        {
            title: "Renewable Energy",
            links: [
                "Geothermal Energy",
                "Hydro Energy",
                "Renewable Energy",
                "Solar Panels",
                "Solar Power",
                "Wind Turbines        "
            ]
        },
        {
            title: "Roofer",
            links: [
                "Builder Estimates",
                "Chimney Caps",
                "Chimney Construction/Repair",
                "Chimneys",
                "Fascias",
                "Flashing",
                "Flat Roof Construction/Repair",
                "Flat Roofs",
                "General Roofing Works",
                "Glass Roofing",
                "Guttering",
                "Insulators",
                "Loft Conversions",
                "Loft Insulating",
                "Metal Roofing",
                "Metal Roofs",
                "New Roof",
                "Rated Tradespeople",
                "Roof Beams",
                "Roof Insulating",
                "Roof Tilers",
                "Roofers",
                "Roofing Repairs/Leaks",
                "Skylight Windows",
                "Slate Roofs",
                "Slate Tilers",
                "Soffits",
                "Soffits and Fascias",
                "Thatched Roofs",
                "Tile/Slate Roofing",
                "Velux Windows"
            ]
        },
        {
            title: "Satellite Dishes | TVs | Aerials",
            links: [
                "Audio Visual Installation/Repair",
                "Satellite Dishes",
                "Satellite TV Installers",
                "TV Aerials"
            ]
        },
        {
            title: "Security | Alarms | CCTV",
            links: [
                "Alarm Fitters",
                "Alarm Installation",
                "Alarms",
                "Automatic Gate Fitters",
                "Burglar Alarms",
                "CCTV",
                "Door Entry Systems",
                "Fire Proofers",
                "Intercom and Entry Systems",
                "Intercoms",
                "Intruder Alarms",
                "Roller/Security Shutters",
                "Security",
                "Security Gate Fitters",
                "Security Gate Installation/Repair",
                "Security Gates",
                "Video Surveillance"
            ]
        },
        {
            title: "Septic Tanks",
            links: [
                "Septic Tank Cleaning/Maintenance",
                "Septic Tanks",
                "Soakaways"
            ]
        },
        {
            title: "Surveyor",
            links: [
                "Building Survey",
                "House Surveyors",
                "Land Survey",
                "Surveyors"
            ]
        },
        {
            title: "Swimming Pools",
            links: [
                "Builder Estimates",
                "Hot Tubs",
                "Swimming Pool Builders",
                "Swimming Pool Cleaners",
                "Swimming Pool Enclosures",
                "Swimming Pool Servicing/Maintenance"
            ]
        },
        {
            title: "Tiler",
            links: [
                "Bathroom Tilers",
                "Ceramic Tilers",
                "Floor Tilers",
                "General Tiling Works",
                "Kitchen Tilers",
                "Pavers",
                "Rated Tradespeople",
                "Roof Tilers",
                "Slate Tilers",
                "Terracotta Tilers",
                "Tilers",
                "Wall Tilers"
            ]
        },
        {
            title: "Welder | Metal Worker",
            links: [
                "Metal Gates",
                "Metal Roofing",
                "Metal Roofs",
                "Metal Shutters",
                "Metal Staircases",
                "Metal Windows",
                "Metal Workers",
                "Welders"
            ]
        }
    ],
    //After Entering all data through multi step form the data will be in jobDetails
    jobDetails: {},
    //After selecting job list.. it will temporarily store in currentJob

    quoteValidationStat: false,
    multiFormDisplayStat: false,
    nMultiFormDispStat: false
};

const mutations = {
    SET_QUOTES(state, value) {
        state.quote.business = value.business;
        state.quote.postCode = value.postCode;
        // alert(state.quote.business);
    },
    SET_BUSINESS(state, value) {
        state.quote.business = value;
    },
    SET_POSTCODE(state, value) {
        state.quote.postCode = value;
    },
    SET_JOB_DETAILS(state, value) {
        state.jobDetails = value;
    },
    SET_QUOTE_VALIDATION_STAT(state, value) {
        state.quoteValidationStat = value;
    },
    SET_MFORM_DISP_STAT(state, value) {
        state.multiFormDisplayStat = value;
    },
    SET_N_MULTI_FORM_DISP_STAT(state, value) {
        state.nMultiFormDispStat = value;
    },
    RESET_QUOTES(state) {
        state.quote.business = "";
        state.quote.postCode = "";
    }
};

const actions = {
    setQuotes(context, value) {
        context.commit("SET_QUOTES", value);
    },
    setQuoteBusiness(context, value) {
        context.commit("SET_BUSINESS", value);
    },
    setQuotePostCode(context, value) {
        context.commit("SET_POSTCODE", value);
    },
    setJobDetails(context, value) {
        context.commit("SET_JOB_DETAILS", value);
    },
    setCurrentJob(context, value) {
        context.commit("SET_CURRENT_JOB", value);
    },
    setQuoteValidationStat(context, value) {
        context.commit("SET_QUOTE_VALIDATION_STAT", value);
    },
    setMFormDispStat(context, value) {
        context.commit("SET_MFORM_DISP_STAT", value);
    },
    setNmultiStepFormDispStat(context, value) {
        context.commit("SET_N_MULTI_FORM_DISP_STAT", value);
    },
    resetQuotes(context) {
        context.commit("RESET_QUOTES");
    }
};

const getters = {
    getQuotes: state => {
        return state.quote;
    },
    getDropdown: state => {
        return state.dropdownMenu;
    },
    getDropdown2: state => {
        return state.dropdownMenu2;
    },
    getQuoteValidationStat: state => {
        return state.quoteValidationStat;
    },
    getMFormDispStat: state => {
        return state.multiFormDisplayStat;
    },
    getNmultiStepFormDispStat: state => {
        return state.nMultiFormDispStat;
    }
};

export default {
    state,
    mutations,
    actions,
    getters
};
