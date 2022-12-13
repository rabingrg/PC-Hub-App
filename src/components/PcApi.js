const AllPCs = [{
    id:1,
    name:"Dell XPS 13",
    category:"Ultrabook",
    image:"images/xps13.jpeg",
    price:'Rs. 1,55,000',
    description:'Brand new factory-sealed Dell XPS 13 7390 2020 with 10th Gen Intel Core i7-10710U processor, 8GB LPDDR3 RAM, 256GB SSD storage, 13.3-inch InfinityEdge Non-touch display with Full-HD resolution.'
},{
    id:2,
    name:"Asus Vivobook X415",
    category:"Student",
    image:"images/vivo.jpeg",
    price:'Rs. 45,000',
    description:'ASUS VIVOBOOK X415MA Celeron Dual Core 4GB RAM, 256GB SSD, 14" HD display, Windows Genuine, 2 Years Warranty, Asus Orignal Bag and Mouse Non-touch display with Full-HD resolution, PLATINUM SILVER Color, Backlit Keyboard.'
},{
    id:3,
    name:"Lenovo Legion 5 Pro",
    category:"Gaming",
    image:"images/legion5pro.jpg",
    price:'Rs. 2,25,000',
    description:"Brand new factory-sealed Lenovo Legion 5 Pro 2021 powerful gaming laptop with Ryzen 7 5800H processor featuring Octa-core (8-core) CPU, NVIDIA GeForce RTX 3070 Graphics Card with 8GB of GDDR6 VRAM."
},{
    id:4,
    name:"Dell 3090 Desktop",
    category:"Desktop",
    image:"images/desktop1.jpg",
    price:'Rs. 68,000',
    description:'Intel® Core™ i3-10105 (6M Cache, up to 4.40 GHz), 8 GB DDR4 2666MHz powerful gaming laptop with intel 10th gen processor featuring quad-core CPU, Total storage capacity: 1TB NVIDIA MX350 GPU with 2GB of GDDR6 VRAM.'
},
{
    id:5,
    name:"Apple Macbook Air M1",
    category:"Ultrabook",
    image:"images/macbookair.jpg",
    price:'Rs. 1,60,000',
    description:'2020 Apple MacBook Air Laptop: Apple M1 chip, 13.3-inch/33.74 cm Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID. Works with iPhone/iPad; Space Grey.'
},{
    id:6,
    name:"Logitech Mouse",
    category:"Accessories",
    image:"images/logitechmouse.jpg",
    price:'Rs. 12,000',
    description:'15 programmable controls Include six thumb buttons; fully programmable with G HUB software. Dual connectivity, Toggle between convenient Bluetooth and ultra-fast 1 ms LIGHTSPEED advanced wireless technology.'
},{
    id:7,
    name:"Dell Inspiron 15",
    category:"Student",
    image:"images/inspiron15.jpg",
    price:'Rs. 79,900',
    description:'Processor: 11th Generation Intel® Core™ i5-1135G7 Processor (8MB Cache, up to 4.2 GHz), Memory: RAM8GB DDR4, 2666MHz, Storage: 512GB SSD, Graphic: NVIDIA GeForce MX350 with 2GB GDDR5 gpu, 15.6-inch FHD Display.'
},{
    id:8,
    name:'MSI Monitor 27"',
    category:"Accessories",
    image:"images/msimonitor.jpg",
    price:'Rs. 55,000',
    description:"Brand new factory-sealed Lenovo Legion 5 Pro 2021 powerful gaming laptop with Ryzen 7 5800H processor featuring Octa-core (8-core) CPU, NVIDIA GeForce RTX 3070 Graphics Card with 8GB of GDDR6 VRAM."
},{
    id:9,
    name:"Dell XPS 15(2020)",
    category:"Ultrabook",
    image:"images/xps15.jpg",
    price:'Rs. 1,95,000',
    description:'Brand new factory-sealed Dell XPS 13 7390 2020 with 10th Gen Intel Core i7-10710U processor, 8GB LPDDR3 RAM, 256GB SSD storage, 13.3-inch InfinityEdge Non-touch display with Full-HD resolution.'
},{
    id:10,
    name:"Lenovo Thinkpad X1",
    category:"Ultrabook",
    image:"images/thinkpadx1.jpg",
    price:'Rs. 1,95,000',
    description:'ASUS VIVOBOOK X415MA Celeron Dual Core 4GB RAM, 256GB SSD, 14" HD display, Windows Genuine, 2 Years Warranty, Asus Orignal Bag and Mouse Non-touch display with Full-HD resolution, PLATINUM SILVER Color, Backlit Keyboard.'
},{
    id:11,
    name:"Dell XPS 15(2022) ",
    category:"Ultrabook",
    image:"images/xps152.jpg",
    price:'Rs. 2,39,900',
    description:'Processor: 11th Generation Intel® Core™ i5-1135G7 Processor (8MB Cache, up to 4.2 GHz), Memory: RAM8GB DDR4, 2666MHz, Storage: 512GB SSD, Graphic: NVIDIA GeForce MX350 with 2GB GDDR5 gpu, 15.6-inch FHD Display.'
},{
    id:12,
    name:"Lenovo Thinkpad T14",
    category:"Ultrabook",
    image:"images/t14gen2.jpg",
    price:'Rs. 1,68,000',
    description:'Intel® Core™ i3-10105 (6M Cache, up to 4.40 GHz), 8 GB DDR4 2666MHz powerful gaming laptop with intel 10th gen processor featuring quad-core CPU, Total storage capacity: 1TB NVIDIA GeForce RTX 3070 GPU with 8GB of GDDR6 VRAM.'
},{
    id:13,
    name:"Acer Aspire E15",
    category:"Student",
    image:"images/aspiree15.jpg",
    price:'Rs. 70,000',
    description:'Intel® Core™ i3-10105 (6M Cache, up to 4.40 GHz), 8 GB DDR4 2666MHz powerful gaming laptop with intel 10th gen processor featuring quad-core CPU, Total storage capacity: 1TB NVIDIA GeForce RTX 3070 GPU with 8GB of GDDR6 VRAM.'
},{
    id:14,
    name:"Acer Nitro 5",
    category:"Gaming",
    image:"images/nitro5.jpg",
    price:'Rs. 1,70,000',
    description:'Intel® Core™ i3-10105 (6M Cache, up to 4.40 GHz), 8 GB DDR4 2666MHz powerful gaming laptop with intel 10th gen processor featuring quad-core CPU, Total storage capacity: 1TB NVIDIA GeForce RTX 3070 GPU with 8GB of GDDR6 VRAM.'
},{
    id:15,
    name:"Lenovo Thinkpad T490",
    category:"Ultrabook",
    image:"images/t490.jpg",
    price:'Rs. 1,50,000',
    description:'Intel® Core™ i3-10105 (6M Cache, up to 4.40 GHz), 8 GB DDR4 2666MHz powerful gaming laptop with intel 10th gen processor featuring quad-core CPU, Total storage capacity: 1TB NVIDIA GeForce RTX 3070 GPU with 8GB of GDDR6 VRAM.'
},{
    id:16,
    name:"Apple Mac Mini",
    category:"Desktop",
    image:"images/macmini.jpg",
    price:'Rs. 1,55,000',
    description:'Intel® Core™ i3-10105 (6M Cache, up to 4.40 GHz), 8 GB DDR4 2666MHz powerful gaming laptop with intel 10th gen processor featuring quad-core CPU, Total storage capacity: 1TB NVIDIA GeForce RTX 3070 GPU with 8GB of GDDR6 VRAM.'
},{
    id:17,
    name:"NVME SSD 512GB",
    category:"Accessories",
    image:"images/nvmessd.jpeg",
    price:'Rs. 12,000',
    description:'Intel® Core™ i3-10105 (6M Cache, up to 4.40 GHz), 8 GB DDR4 2666MHz powerful gaming laptop with intel 10th gen processor featuring quad-core CPU, Total storage capacity: 1TB NVIDIA GeForce RTX 3070 GPU with 8GB of GDDR6 VRAM.'
},{
    id:18,
    name:"Acer Aspire 5",
    category:"Student",
    image:"images/aspire5.jpg",
    price:'Rs. 60,000',
    description:'Intel® Core™ i3-10105 (6M Cache, up to 4.40 GHz), 8 GB DDR4 2666MHz powerful gaming laptop with intel 10th gen processor featuring quad-core CPU, Total storage capacity: 1TB NVIDIA GeForce RTX 3070 GPU with 8GB of GDDR6 VRAM.'
},{
    id:19,
    name:'Macbook Pro 13"',
    category:"Ultrabook",
    image:"images/macbookpro.png",
    price:'Rs. 68,000',
    description:'Intel® Core™ i3-10105 (6M Cache, up to 4.40 GHz), 8 GB DDR4 2666MHz powerful gaming laptop with intel 10th gen processor featuring quad-core CPU, Total storage capacity: 1TB NVIDIA GeForce RTX 3070 GPU with 8GB of GDDR6 VRAM.'
},{
    id:20,
    name:"Lenovo Ideapad 3",
    category:"Student",
    image:"images/ideapad3.jpg",
    price:'Rs. 65,000',
    description:'Intel® Core™ i3-10105 (6M Cache, up to 4.40 GHz), 8 GB DDR4 2666MHz powerful gaming laptop with intel 10th gen processor featuring quad-core CPU, Total storage capacity: 1TB NVIDIA GeForce RTX 3070 GPU with 8GB of GDDR6 VRAM.'
},{
    id:21,
    name:"Acer Predator Helios 300",
    category:"Gaming",
    image:"images/predator.jpg",
    price:'Rs. 1,80,000',
    description:'Intel® Core™ i3-10105 (6M Cache, up to 4.40 GHz), 8 GB DDR4 2666MHz powerful gaming laptop with intel 10th gen processor featuring quad-core CPU, Total storage capacity: 1TB NVIDIA GeForce RTX 3070 GPU with 8GB of GDDR6 VRAM.'
},{
    id:22,
    name:"HP Victus 16",
    category:"Gaming",
    image:"images/victus16.jpeg",
    price:'Rs. 1,15,000',
    description:'Intel® Core™ i3-10105 (6M Cache, up to 4.40 GHz), 8 GB DDR4 2666MHz powerful gaming laptop with intel 10th gen processor featuring quad-core CPU, Total storage capacity: 1TB NVIDIA GeForce RTX 3070 GPU with 8GB of GDDR6 VRAM.'
},{
    id:23,
    name:"Logitech G Pro X",
    category:"Accessories",
    image:"images/logitechgprox.jpg",
    price:'Rs. 10,000',
    description:'Intel® Core™ i3-10105 (6M Cache, up to 4.40 GHz), 8 GB DDR4 2666MHz powerful gaming laptop with intel 10th gen processor featuring quad-core CPU, Total storage capacity: 1TB NVIDIA GeForce RTX 3070 GPU with 8GB of GDDR6 VRAM.'
},{
    id:24,
    name:"HP Envy 13",
    category:"Ultrabook",
    image:"images/envy13.jpg",
    price:'Rs. 1,25,000',
    description:'Intel® Core™ i3-10105 (6M Cache, up to 4.40 GHz), 8 GB DDR4 2666MHz powerful gaming laptop with intel 10th gen processor featuring quad-core CPU, Total storage capacity: 1TB NVIDIA GeForce RTX 3070 GPU with 8GB of GDDR6 VRAM.'
},{
    id:25,
    name:"Lenovo Legion 5",
    category:"Gaming",
    image:"images/legion5.jpg",
    price:'Rs. 1,30,000',
    description:'Intel® Core™ i3-10105 (6M Cache, up to 4.40 GHz), 8 GB DDR4 2666MHz powerful gaming laptop with intel 10th gen processor featuring quad-core CPU, Total storage capacity: 1TB NVIDIA GeForce RTX 3070 GPU with 8GB of GDDR6 VRAM.'
},{
    id:26,
    name:"Razer Viper Mouse",
    category:"Accessories",
    image:"images/razerviper.jpg",
    price:'Rs. 11,000',
    description:'Intel® Core™ i3-10105 (6M Cache, up to 4.40 GHz), 8 GB DDR4 2666MHz powerful gaming laptop with intel 10th gen processor featuring quad-core CPU, Total storage capacity: 1TB NVIDIA GeForce RTX 3070 GPU with 8GB of GDDR6 VRAM.'
},{
    id:27,
    name:'Apple Macbook Pro 14"',
    category:"Ultrabook",
    image:"images/macbookpro14.jpg",
    price:'Rs. 2,70,000',
    description:'Intel® Core™ i3-10105 (6M Cache, up to 4.40 GHz), 8 GB DDR4 2666MHz powerful gaming laptop with intel 10th gen processor featuring quad-core CPU, Total storage capacity: 1TB NVIDIA GeForce RTX 3070 GPU with 8GB of GDDR6 VRAM.'
},{
    id:28,
    name:"Lenovo Thinkpad P14",
    category:"Ultrabook",
    image:"images/p14.jpg",
    price:'Rs. 1,80,000',
    description:'Intel® Core™ i3-10105 (6M Cache, up to 4.40 GHz), 8 GB DDR4 2666MHz powerful gaming laptop with intel 10th gen processor featuring quad-core CPU, Total storage capacity: 1TB NVIDIA GeForce RTX 3070 GPU with 8GB of GDDR6 VRAM.'
},{
    id:29,
    name:"Dell Gaming Desktop",
    category:"Desktop",
    image:"images/desktop4.jpg",
    price:'Rs. 1,60,000',
    description:'Intel® Core™ i3-10105 (6M Cache, up to 4.40 GHz), 8 GB DDR4 2666MHz powerful gaming laptop with intel 10th gen processor featuring quad-core CPU, Total storage capacity: 1TB NVIDIA GeForce RTX 3070 GPU with 8GB of GDDR6 VRAM.'
},{
    id:30,
    name:"LG Gram 15",
    category:"Ultrabook",
    image:"images/gram15.jpg",
    price:'Rs. 1,60,000',
    description:'Intel® Core™ i3-10105 (6M Cache, up to 4.40 GHz), 8 GB DDR4 2666MHz powerful gaming laptop with intel 10th gen processor featuring quad-core CPU, Total storage capacity: 1TB NVIDIA GeForce RTX 3070 GPU with 8GB of GDDR6 VRAM.'
}];

export default AllPCs;