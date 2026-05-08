// Add interactive features to the invitation

document.addEventListener('DOMContentLoaded', function() {
    // Add click event to character cards for fun reactions
    const characters = document.querySelectorAll('.character');
    characters.forEach(char => {
        char.addEventListener('click', function() {
            showReaction();
        });
    });

    // Add click event to message boxes
    const messageBoxes = document.querySelectorAll('.message-box');
    messageBoxes.forEach(box => {
        box.addEventListener('click', function() {
            this.style.transform = 'scale(1.1) rotate(2deg)';
            setTimeout(() => {
                this.style.transform = '';
            }, 300);
        });
    });

    // Add animation to meme slots when user hovers
    const memeSlots = document.querySelectorAll('.meme-slot');
    memeSlots.forEach(slot => {
        slot.addEventListener('mouseenter', function() {
            this.style.borderColor = '#ffd700';
            this.style.transform = 'scale(1.02)';
        });
        slot.addEventListener('mouseleave', function() {
            this.style.borderColor = '#fff';
            this.style.transform = 'scale(1)';
        });
    });

    // Fun alerts on specific interactions
    const rsvpSection = document.querySelector('.rsvp-section');
    rsvpSection.addEventListener('click', function() {
        const messages = [
            '"చెందాలో చేరమని వాచా!" 🎉',
            '"కాబట్టి తోడ్‌చేయి" 😆',
            '"లేకుండా చేసుకో పెళ్లి" 😂'
        ];
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        showFloatingMessage(randomMessage);
    });

    // Bachelor Party section - Toggle whisky display
    const bachelorSection = document.getElementById('bachelorParty');
    const whiskDisplay = document.getElementById('whiskDisplay');
    if (bachelorSection) {
        bachelorSection.addEventListener('click', function() {
            whiskDisplay.classList.toggle('active');
            if (whiskDisplay.classList.contains('active')) {
                showFloatingMessage('WHISKY TIME! 🥃🍻');
            }
        });
    }

    // Add to Cart button functionality
    const addAllBtn = document.querySelector('.add-all-btn');
    if (addAllBtn) {
        addAllBtn.addEventListener('click', function() {
            addCartItems();
        });
    }

    // Cart items checkbox toggle
    const cartItems = document.querySelectorAll('.cart-item');
    cartItems.forEach((item, index) => {
        item.addEventListener('click', function(e) {
            if (e.target !== addAllBtn) {
                this.classList.toggle('checked');
                const checkbox = this.querySelector('.item-checkbox');
                if (this.classList.contains('checked')) {
                    checkbox.textContent = '✅';
                    showFloatingMessage('Added to celebration! 🎉');
                } else {
                    checkbox.textContent = '☑️';
                }
            }
        });
    });

    // Confirmation section animations
    const confirmationSection = document.querySelector('.confirmation-section');
    if (confirmationSection) {
        confirmationSection.addEventListener('click', function() {
            showReaction();
        });
    }

    // Confetti effect on page load
    createConfetti();
});

// Function to add all cart items
function addCartItems() {
    const cartItems = document.querySelectorAll('.cart-item');
    let addedCount = 0;

    cartItems.forEach((item) => {
        if (!item.classList.contains('checked')) {
            item.classList.add('checked');
            const checkbox = item.querySelector('.item-checkbox');
            checkbox.textContent = '✅';
            addedCount++;
        }
    });

    const messages = [
        'అన్నీ కర్టలో జోడించారు! 🛒🎉',
        'Thank you for the support! 💖',
        'You are the BEST! 🙌🎊',
        'అద్భుతమైన స్నేహం! ❤️✨',
        'Nuvvu number 1! 😆🔥'
    ];
    
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    showFloatingMessage(randomMessage);
    
    // Pulse animation
    this.style.animation = 'pulse 0.5s';
    setTimeout(() => {
        this.style.animation = '';
    }, 500);
}

// Function to show random reaction
function showReaction() {
    const reactions = ['😂', '😆', '🤣', '😍', '🎉', '💕', '🙌', '😭'];
    const randomReaction = reactions[Math.floor(Math.random() * reactions.length)];
    
    const floatingText = document.createElement('div');
    floatingText.textContent = randomReaction;
    floatingText.style.position = 'fixed';
    floatingText.style.fontSize = '50px';
    floatingText.style.pointerEvents = 'none';
    floatingText.style.top = '50%';
    floatingText.style.left = '50%';
    floatingText.style.animation = 'floatUp 1.5s ease-out forwards';
    document.body.appendChild(floatingText);

    setTimeout(() => floatingText.remove(), 1500);
}

// Function to show floating messages
function showFloatingMessage(message) {
    const floatingMsg = document.createElement('div');
    floatingMsg.textContent = message;
    floatingMsg.style.position = 'fixed';
    floatingMsg.style.fontSize = '20px';
    floatingMsg.style.padding = '15px 25px';
    floatingMsg.style.background = 'linear-gradient(135deg, #ffd700, #ffa500)';
    floatingMsg.style.color = 'white';
    floatingMsg.style.borderRadius = '20px';
    floatingMsg.style.pointerEvents = 'none';
    floatingMsg.style.top = '30%';
    floatingMsg.style.left = '50%';
    floatingMsg.style.transform = 'translateX(-50%)';
    floatingMsg.style.fontWeight = 'bold';
    floatingMsg.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.3)';
    floatingMsg.style.animation = 'floatUp 2s ease-out forwards';
    floatingMsg.style.zIndex = '9999';
    
    document.body.appendChild(floatingMsg);
    setTimeout(() => floatingMsg.remove(), 2000);
}

// Create confetti effect
function createConfetti() {
    const confettiPieces = [
        '🎉', '🎊', '💕', '😂', '🎬', '🤣', '✨', '🌟'
    ];
    
    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.textContent = confettiPieces[Math.floor(Math.random() * confettiPieces.length)];
            confetti.style.position = 'fixed';
            confetti.style.fontSize = Math.random() * 20 + 20 + 'px';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.top = '-50px';
            confetti.style.pointerEvents = 'none';
            confetti.style.animation = `confettiFall ${Math.random() * 3 + 2}s linear forwards`;
            confetti.style.opacity = '0.8';
            document.body.appendChild(confetti);
            
            setTimeout(() => confetti.remove(), 5000);
        }, i * 150);
    }
}

// Add styles for animations dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes floatUp {
        from {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
        }
        to {
            opacity: 0;
            transform: translateX(-50%) translateY(-100px);
        }
    }
    
    @keyframes confettiFall {
        to {
            transform: translateY(window.innerHeight + 100px) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Make message boxes interactive
document.querySelectorAll('.message-box').forEach(box => {
    box.style.cursor = 'pointer';
    box.style.transition = 'all 0.3s ease';
});

// Log fun message to console
console.log('%c🎬 Welcome to the Most Awaited Wedding of the Year! 🎬', 'font-size: 20px; color: #8b4513; font-weight: bold;');
console.log('%c🍺 Click on Bachelor Party section to reveal WHISKY! 🍺', 'font-size: 16px; color: #d4af37;');
console.log('%cAdd your Telugu movie meme GIFs to make it even more hilarious!', 'font-size: 14px; color: #a0522d;');
