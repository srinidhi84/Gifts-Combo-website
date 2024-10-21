document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('product');

    // Products array (simulated data)
    const products = [
        {
            id: 'rrbid',
            name: 'Red Roses Bouquet With Chocolate Cake',
            price: 1129,
            rating: 4.6,
            image: 'https://assets.winni.in/product/primary/2023/10/89980.jpeg?dpr=1&w=4000',
            description: 'A delightful chocolate cake adorned with beautiful floral decorations.',
            qa: [
                {
                    question: 'Can you deliver the cake at 12 midnight?',
                    answer: 'Yes, midnight delivery is available but it depends on the area. Please share the Pincode so we can confirm the service.'
                },
                {
                    question: 'What are the available flavors?',
                    answer: 'Currently available in chocolate flavor only.'
                }
            ]
        },
        {
            id: 'Personalisedid',
            name: 'Personalised Comfy Cushion With Truffle Cake',
            price: 1199,
            rating: 4.6,
            image: 'https://assets.winni.in/product/primary/2024/5/95477.jpeg?dpr=1&w=400',
            description: 'A luscious butterscotch cake with floral accents, perfect for any celebration.',
            qa: [
                {
                    question: 'Can you customize the message on the cake?',
                    answer: 'Yes, you can enter your message during checkout.'
                }
            ]
        },
        {
            id: 'SweetBouquetid',
            name: 'Sweet Bouquet Of Chocolates Roses With Card',
            price: 1249,
            rating: 4.7,
            image: 'https://assets.winni.in/product/primary/2024/2/93753.jpeg?dpr=1&w=400',
            description: 'A classic black forest cake topped with vibrant red roses, a timeless choice for any occasion.',
            qa: [
                {
                    question: 'Are the roses edible?',
                    answer: 'No, the roses are for decoration only and should be removed before consuming the cake.'
                }
            ]
        },
        {
            id: 'heartshapeid',
            name: 'Heart Shape Red Velvet Cake With Floral Elegance',
            price: 1459,
            rating: 4.8,
            image: 'https://assets.winni.in/product/primary/2024/1/93453.jpeg?dpr=1&w=400',
            description: 'A heavenly vanilla cake adorned with delicate pink roses, perfect for a romantic gesture.',
            qa: [
                {
                    question: 'Is the cake suitable for vegetarians?',
                    answer: 'Yes, the cake is suitable for vegetarians.'
                }
            ]
        },
        {
            id: 'ferrero',
            name: 'Ferrero Royale Delight Bouquet With Greeting',
            price: 1999,
            rating: 5.0,
            image: 'https://assets.winni.in/product/primary/2024/2/93754.jpeg?dpr=1&w=400',
            description: 'Express your affection with this charming cake adorned with delightful decorations.',
            qa: [
                {
                    question: 'Can I get this cake delivered to multiple addresses?',
                    answer: 'Currently, we can only deliver to one address per order.'
                }
            ]
        },
        {
            id: 'Personalisedid',
            name: 'Personalised Mug With Black Forest Cake',
            price: 1099,
            rating: 4.3,
            image: 'https://assets.winni.in/product/primary/2024/5/95479.jpeg?dpr=1&w=400',
            description: 'A beautiful bouquet of red roses complemented by a delicious chocolate cake.',
            qa: [
                {
                    question: 'What is the shelf life of the cake?',
                    answer: 'We recommend consuming the cake within 24 hours for the best taste.'
                }
            ]
        },
        {
            id: 'reavishingd',
            name: 'Ravishing Red Roses With Truffle Cake',
            price: 1299,
            rating: 4.7,
            image: 'https://assets.winni.in/product/primary/2024/1/93488.jpeg?dpr=1&w=400',
            description: 'Indulge in the luxurious taste of red velvet cake paired with vibrant roses for a memorable celebration.',
            qa: [
                {
                    question: 'Can I specify the delivery time?',
                    answer: 'Yes, during checkout you can choose a preferred delivery time slot.'
                }
            ]
        },
        {
            id: 'delightfulid',
            name: 'Delightful Dairy Milk Bouquet With Greeting Card',
            price: 1179,
            rating: 4.7,
            image: 'https://assets.winni.in/product/primary/2024/2/93769.jpeg?dpr=1&w=400',
            description: 'A delightful combination of red roses and chocolate cake, perfect for expressing your love.',
            qa: [
                {
                    question: 'Do you provide eggless options?',
                    answer: 'Yes, we offer eggless versions of this cake.'
                }
            ]
        }
    ];

    // Find the product by ID from the products array
    const product = products.find(p => p.id === productId);

    // Display product details
    if (product) {
        document.getElementById('product-image').src = product.image;
        document.getElementById('zoomedImage').querySelector('img').src = product.image;
        document.getElementById('product-name').textContent = product.name;
        document.getElementById('product-price').textContent = `₹ ${product.price}`;
        document.getElementById('product-rating').textContent = `${product.rating} ★`;
        document.getElementById('product-description').textContent = product.description;
        const qaContainer = document.getElementById('qa-container');
        qaContainer.innerHTML = ''; // Clear previous QA items

        product.qa.forEach(qa => {
            const qaItem = document.createElement('div');
            qaItem.className = 'qa-item';
            qaItem.innerHTML = `
                <div class="question">${qa.question}</div>
                <div class="answer">${qa.answer}</div>
                <button class="helpful-btn">Helpful</button>
            `;
            qaContainer.appendChild(qaItem);

            const helpfulBtn = qaItem.querySelector('.helpful-btn');
            helpfulBtn.addEventListener('click', () => {
                // Handle helpful button click (if needed)
                alert('Thank you for your feedback!');
            });
        });
    } else {
        // Product not found by ID
        const productNotFound = document.createElement('div');
        productNotFound.textContent = 'Product not found.';
        document.getElementById('product-details').appendChild(productNotFound);
    }
});

// Magnifying image script
const mainImage = document.getElementById('product-image');
const zoomedImageContainer = document.getElementById('zoomedImage');
const zoomedImage = zoomedImageContainer.querySelector('img');

mainImage.addEventListener('mouseover', () => {
    zoomedImageContainer.style.display = 'block';
});

mainImage.addEventListener('mouseout', () => {
    zoomedImageContainer.style.display = 'none';
});

mainImage.addEventListener('mousemove', (e) => {
    const rect = mainImage.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const xPercent = (x / rect.width) * 100;
    const yPercent = (y / rect.height) * 100;

    zoomedImage.style.transformOrigin = `${xPercent}% ${yPercent}%`;
    zoomedImage.style.left = -`${xPercent}%`;
    zoomedImage.style.top = -`${yPercent}%`;
});

function showThankYou(button) {
    button.innerHTML = '<span class="thank-you">Thank you!</span>';
    button.disabled = true;
}

function addToCart(name, imgSrc) {
    const price = parseInt(document.getElementById('product-price').textContent.split('₹ ')[1]);
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ name, imgSrc, price });
    localStorage.setItem('cart', JSON.stringify(cart));
    window.location.href = 'cart.html';
}

function updatePrice() {
    const weightRadios = document.querySelectorAll('input[name="weight"]');
    let selectedPrice = 1129; // Default price for 500 gm

    weightRadios.forEach((radio) => {
        if (radio.checked) {
            selectedPrice = parseInt(radio.getAttribute('data-price'));
        }
    });

    const isEggless = document.getElementById('eggless').checked;
    if (isEggless) {
        selectedPrice += 100;
    }

    document.getElementById('product-price').textContent = `₹ ${selectedPrice}`;
}