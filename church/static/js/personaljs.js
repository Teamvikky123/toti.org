const images = [
    'url(https://scontent.flos5-3.fna.fbcdn.net/v/t39.30808-6/407305613_670977828556821_6123020965764299583_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFh0EqBP9xQgqOh6KjJ9pR4GDi1SBxxvaMYOLVIHHG9o5GW4UYhdTemnSX4-2dOlIPQeb2E3cAWUfgPVjq0Rqfh&_nc_ohc=0VHdFoV6FA4Q7kNvgFDr7Ky&_nc_zt=23&_nc_ht=scontent.flos5-3.fna&oh=00_AYDRUMCpGOzeX7d6Ah7zT3TbmXRFISnTewcF6e3vBy3GQg&oe=66D15F05)',
    'url(https://scontent.flos5-1.fna.fbcdn.net/v/t39.30808-6/406433529_670731048581499_4394258028596045040_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHsaLsuNmVhS-v5MkbzZV81TpV8PhyYO_VOlXw-HJg79cubDq0NYCxj-px0FSW4qH-2zJRzhJACeaBqJQv7nVko&_nc_ohc=qvK0LDLsjoEQ7kNvgHWvuVS&_nc_zt=23&_nc_ht=scontent.flos5-1.fna&oh=00_AYC0JQqY27H0LbIsUh-odton7IKEVep6WNL5AIZy9GF-qA&oe=66D13F5F)',
    'url(https://scontent.flos5-2.fna.fbcdn.net/v/t39.30808-6/405968195_668024775518793_5490903610224547846_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFvv4-cLY9LhxHrSEtJfk0Up2OcTkbGQWanY5xORsZBZi89dHA8AL2L2Nueums6mn8o9LBFPr7Xu2viuha_2hRZ&_nc_ohc=_TDfYD-kd4oQ7kNvgEWCb98&_nc_zt=23&_nc_ht=scontent.flos5-2.fna&oh=00_AYBgfUdWjc4tKRvdnkqpPQWzaDUGR-knCmGw-X6lmK4PzQ&oe=66D15D67)',
    'url(https://scontent.flos1-2.fna.fbcdn.net/v/t39.30808-6/455018236_821078350213434_3339504849126621032_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeE3qM_6x2O2AnLx0YWeNCzNDEvcemckrJkMS9x6ZySsmak5tyfOZzwZedM1vqEneI8_FJaVdysiTUqOfV6tYw6c&_nc_ohc=ciuiAGwhpOYQ7kNvgFs5aJB&_nc_zt=23&_nc_ht=scontent.flos1-2.fna&oh=00_AYCk61h0ztT6RNWeKbB5KcMMk9y9wEivYWPraf4jpadg8A&oe=66D10926)'
];

let currentIndex = 0;

function changeBackgroundImage() {
    const imageContainer = document.getElementById('imageContainer');
    imageContainer.style.backgroundImage = images[currentIndex];
    
    currentIndex = (currentIndex + 1) % images.length;
}

// Change background every 5 seconds (5000 milliseconds)
setInterval(changeBackgroundImage, 5000);

// Initial background image setup
changeBackgroundImage();
