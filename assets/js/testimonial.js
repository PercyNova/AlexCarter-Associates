document.addEventListener("DOMContentLoaded", function() {
    const testimonials = [
        "Alex and his team were exceptional in handling my corporate merger. Their attention to detail and strategic approach saved us millions!",
        "The professionalism and dedication of this firm are unmatched. Thank you for everything!",
        "I felt supported and informed throughout my divorce proceedings. Truly grateful for their help.",
        "Best criminal defense team in the city. They fought tirelessly for my rights and won my case!",
        "Their real estate expertise made a complex transaction smooth and stress-free. Highly recommend!",
        "Outstanding service in intellectual property protection. They safeguarded my patents effectively.",
        "Responsive, knowledgeable, and compassionate. Exactly what you want in legal representation.",
        "They turned a potentially devastating employment dispute into a favorable resolution. Thank you!",
        "Clear communication and expert guidance through every step of our business acquisition.",
        "The family law team provided compassionate support during my custody battle. Forever grateful.",
        "Their proactive approach prevented costly litigation for our startup. Worth every penny!",
        "Exceptional results in my personal injury case. They truly care about their clients.",
        "Transparent billing and honest advice. Refreshing to find lawyers you can trust completely.",
        "Successfully navigated international business contracts with their expert guidance.",
        "24/7 availability during my crisis situation. Above and beyond service!"
    ];

    const names = ["John D.", "Sarah M.", "Michael T.", "Emily R.", "David L.", 
                  "Jessica W.", "Brian K.", "Olivia S.", "James P.", "Sophia M.",
                  "Daniel R.", "Emma B.", "Matthew Z.", "Grace H.", "Christopher N."];

    const grid = document.querySelector('.testimonials-grid');

    testimonials.forEach((text, index) => {
        const card = document.createElement('div');
        card.className = 'testimonial-card';
        card.innerHTML = `
            <img class="testimonial-image" src="https://picsum.photos/150?random=${index}" alt="Client">
            <div class="testimonial-content">
                <p>"${text}"</p>
                <div class="client-info">
                    <h3>${names[index]}</h3>
                    <span>${['CEO', 'Entrepreneur', 'Artist', 'Developer', 'Investor',
                            'Manager', 'Consultant', 'Engineer', 'Designer', 'Writer',
                            'Director', 'Producer', 'Analyst', 'Architect', 'Specialist'][index]}</span>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
});

// FOR INDEX
document.addEventListener("DOMContentLoaded", function() {
  const testimonials = [
      "Alex and his team were exceptional in handling my corporate merger. Their attention to detail and strategic approach saved us millions!",
      "The professionalism and dedication of this firm are unmatched. Thank you for everything!",
      "I felt supported and informed throughout my divorce proceedings. Truly grateful for their help."
  ];

  const names = ["John D.", "Sarah M.", "Michael T."];

  const grid = document.querySelector('.testimonialsi-grid');

  testimonials.forEach((text, index) => {
      const card = document.createElement('div');
      card.className = 'testimoniali-card';
      card.innerHTML = `
          <img class="testimoniali-image" src="https://picsum.photos/150?random=${index}" alt="Client">
          <div class="testimoniali-content">
              <p>"${text}"</p>
              <div class="client-info">
                  <h3>${names[index]}</h3>
                  <span>${['CEO', 'Entrepreneur', 'Artist'][index]}</span>
              </div>
          </div>
      `;
      grid.appendChild(card);
  });
});
