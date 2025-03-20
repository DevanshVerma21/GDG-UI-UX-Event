    // Feature data with cloud-based images (from Unsplash)
    const featuresData = [
        {
            image: 'https://source.unsplash.com/1600x900/?fitness', // Image for 24-hour fitness
            content: {
                title: '24 HOUR FITNESS',
                text: 'Our 24-hour fitness center is right at your doorstep! Get fit, stay healthy, and enjoy the convenience of working out whenever you want. Your dream apartment community just got even better!',
            }
        },
        {
            image: 'https://source.unsplash.com/1600x900/?dog-park', // Image for Dog Park
            content: {
                title: 'DOG PARK',
                text: 'Let your furry friends run and play in our spacious dog park. A perfect spot for your pets to socialize and exercise. We love our four-legged residents just as much as you do!',
            }
        },
        {
            image: 'https://source.unsplash.com/1600x900/?gated-community', // Image for Gated Community
            content: {
                title: 'GATED COMMUNITY',
                text: 'Enjoy the peace of mind that comes with living in our secure, gated community. With controlled access and enhanced security measures, you can rest easy knowing that your home is protected.',
            }
        },
        {
            image: 'https://source.unsplash.com/1600x900/?fire-pit', // Image for Fire Pit Lounges
            content: {
                title: 'FIRE PIT LOUNGES',
                text: 'Gather with friends and neighbors around our cozy fire pit lounges. Perfect for evening relaxation, social gatherings, or simply enjoying the beautiful Prineville nights under the stars.',
            }
        },
        {
            image: 'https://source.unsplash.com/1600x900/?package', // Image for Luxer One Package
            content: {
                title: 'LUXER ONE PACKAGE',
                text: 'Experience seamless convenience with our Luxer One package holder at our apartment community. Your packages are secure, and accessible, making modern living even more enjoyable!',
            }
        }
    ];

    let currentFeatureIndex = 0;

    // Get elements
    const featureImageElement = document.getElementById('feature-image');
    const featureItems = document.querySelectorAll('.feature-item');
    const prevFeatureButton = document.getElementById('prev-feature');
    const nextFeatureButton = document.getElementById('next-feature');

    // Function to update feature and image based on index
    function updateFeature(index) {
        // Hide all feature items
        featureItems.forEach(item => item.classList.remove('active'));
        
        // Show the feature item at the current index
        featureItems[index].classList.add('active');
        
        // Update background image
        featureImageElement.style.backgroundImage = `url(${featuresData[index].image})`;

        // Update the content (title and description)
        const featureContent = featuresData[index].content;
        featureItems[index].querySelector('h3').textContent = featureContent.title;
        featureItems[index].querySelector('p').textContent = featureContent.text;
    }

    // Event listener for previous feature button
    prevFeatureButton.addEventListener('click', () => {
        currentFeatureIndex = (currentFeatureIndex === 0) ? featuresData.length - 1 : currentFeatureIndex - 1;
        updateFeature(currentFeatureIndex);
    });

    // Event listener for next feature button
    nextFeatureButton.addEventListener('click', () => {
        currentFeatureIndex = (currentFeatureIndex === featuresData.length - 1) ? 0 : currentFeatureIndex + 1;
        updateFeature(currentFeatureIndex);
    });

    // Initialize the first feature
    updateFeature(currentFeatureIndex);
