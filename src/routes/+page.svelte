<script>
	import { onMount } from 'svelte';
	import headshot from '$lib/images/headshot.jpg';



	// Contact information
	const contactInfo = {
		email: 'devin.hill121192@gmail.com',
		location: 'Nashville Metro Area, TN',
		availability: 'Open to freelance projects and collaborations'
	};

	// Social media links
	const socialLinks = [
		{ name: 'LinkedIn', url: 'https://linkedin.com/in/iamdevinhill', icon: 'fa-linkedin' },
		{ name: 'GitHub', url: 'https://github.com/iamdevinhill', icon: 'fa-github' }
	];

	// Scroll to top functionality
	let showScrollButton = false;

	function scrollToTop() {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	}

	onMount(() => {
		function handleScroll() {
			showScrollButton = window.scrollY > 300;
		}

		window.addEventListener('scroll', handleScroll);
		
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});

</script>

<svelte:head>
	<title>Devin Hill | AI/ML Engineer | Leader</title>
	<meta name="description" content="Personal website of Devin Hill, AI/ML Engineer and Leader" />
</svelte:head>

<section class="hero">
	<div class="container">
		<div class="hero-content">
			<div class="hero-image">
				<img src={headshot} alt="headshot" />
			</div>
			<div class="hero-text">
				<h1>Devin Hill</h1>
				<h2>AI/ML Engineer | Leader</h2>
				<p>Transforming data into opportunities.</p>
				<p>I am an AI/ML Engineer with a Bachelor's in Data Science and a Master's in Management (concentration in Organizational Leadership). With over a decade of experience in the workforce, I blend technology and people-driven innovation. My work spans AI, data analytics, and creativity, focusing on large language models, data visualization, and real-time reporting. Leveraging a deep understanding of success metrics from defense, aerospace, and commercial industries, I help scale projects and optimize outcomes with a data-driven approach. Contact me for resume.</p>
				<div class="hero-buttons">
					<a href="#contact" class="btn">Get in Touch</a>
				</div>
			</div>
		</div>
	</div>
</section>





<section id="contact" class="contact section">
	<div class="container">
		<h2 class="section-title">Get in Touch</h2>
		<p class="section-description">Have a project in mind? Hit me up.</p>
		
		<div class="contact-grid">
			<div class="contact-info">
				<h3>Contact Information</h3>
				<div class="info-item">
					<i class="fas fa-envelope"></i>
					<div>
						<h4>Email</h4>
						<a href="mailto:{contactInfo.email}?subject=Exploring Collaboration&body=Hi Devin,%0D%0A%0D%0AI hope you're doing well. I came across your contact information and wanted to reach out about potential collaboration opportunities. If you're open to a conversation, I'd love to connect and explore possibilities.%0D%0A%0D%0ALooking forward to your thoughts!%0D%0A%0D%0ABest,%0D%0A[Your Name]%0D%0A[Your Contact Information]" class="btn">Send Email</a>
					</div>
				</div>
				<div class="info-item">
					<i class="fas fa-map-marker-alt"></i>
					<div>
						<h4>Location</h4>
						<p>{contactInfo.location}</p>
					</div>
				</div>
				<div class="info-item">
					<i class="fas fa-calendar-check"></i>
					<div>
						<h4>Availability</h4>
						<p>{contactInfo.availability}</p>
					</div>
				</div>
				<div class="social-links">
					<h4>Connect with me</h4>
					<div class="social-icons">
						{#each socialLinks as social}
							<a href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.name}>
								<i class="fab {social.icon}"></i>
							</a>
						{/each}
					</div>
				</div>
			</div>
			<div class="contact-message">
				<div class="message-card">
					<h3>Let's Work Together</h3>
					<p>
						Whether you're looking for a data solution, AI/ML expertise, or just want to connect, 
						I'm always open to new opportunities and conversations.
					</p>
					<p>
						Feel free to reach out via email. I typically respond within 24-48 hours.
					</p>
					<a href="mailto:{contactInfo.email}?subject=Exploring Collaboration&body=Hi Devin,%0D%0A%0D%0AI hope you're doing well. I came across your contact information and wanted to reach out about potential collaboration opportunities. If you're open to a conversation, I'd love to connect and explore possibilities.%0D%0A%0D%0ALooking forward to your thoughts!%0D%0A%0D%0ABest,%0D%0A[Your Name]%0D%0A[Your Contact Information]" class="btn btn-large">Send Me a Message</a>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Scroll to top button -->
<button 
	class="scroll-to-top" 
	on:click={scrollToTop}
	class:visible={showScrollButton}
	aria-label="Scroll to top"
>
	<i class="fas fa-chevron-up"></i>
</button>

<style>
	.hero {
		padding: 5rem 0;
		background-color: var(--color-bg-1);
	}

	.hero-content {
		display: flex;
		align-items: center;
		gap: 3rem;
	}

	.hero-image {
		flex: 0 0 300px;
	}

	.hero-image img {
		width: 100%;
		height: auto;
		border-radius: 50%;
		box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
	}

	.hero-text {
		flex: 1;
	}

	.hero-text h1 {
		font-size: 3rem;
		margin-bottom: 0.5rem;
		color: var(--color-text);
	}

	.hero-text h2 {
		font-size: 1.5rem;
		font-weight: 500;
		color: var(--color-theme-1);
		margin-bottom: 1rem;
	}

	.hero-text p {
		font-size: 1.2rem;
		margin-bottom: 2rem;
		color: var(--color-text-light);
	}

	.hero-buttons {
		display: flex;
		gap: 1rem;
	}

	.btn {
		display: inline-block;
		padding: 0.8rem 1.5rem;
		background-color: var(--color-theme-1);
		color: white;
		text-decoration: none;
		border-radius: 4px;
		font-weight: 500;
		transition: background-color 0.3s, transform 0.3s;
	}

	.btn:hover {
		background-color: var(--color-theme-2);
		transform: translateY(-3px);
	}

	.btn-secondary {
		background-color: transparent;
		color: var(--color-theme-1);
		border: 2px solid var(--color-theme-1);
	}

	.btn-secondary:hover {
		background-color: var(--color-theme-1);
		color: white;
	}

	.section {
		padding: 5rem 0;
	}

	.section-title {
		text-align: center;
		margin-bottom: 3rem;
		font-size: 2.5rem;
		color: var(--color-text);
	}

	.section-description {
		text-align: center;
		max-width: 800px;
		margin: 0 auto 3rem auto;
		font-size: 1.1rem;
		color: var(--color-text-light);
	}






	/* Contact Section */
	.contact-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 4rem;
	}

	.contact-info h3, .contact-message h3 {
		font-size: 2rem;
		margin-bottom: 2rem;
	}

	.info-item {
		display: flex;
		margin-bottom: 2.5rem;
	}

	.info-item i {
		font-size: 2rem;
		color: var(--color-theme-1);
		margin-right: 1.5rem;
		width: 2rem;
		text-align: center;
	}

	.info-item h4 {
		font-size: 1.3rem;
		margin-bottom: 0.5rem;
	}

	.info-item p {
		color: var(--color-text-light);
		margin-bottom: 1rem;
	}

	.social-links h4 {
		font-size: 1.3rem;
		margin-bottom: 1rem;
	}

	.social-icons {
		display: flex;
		gap: 1rem;
	}

	.social-icons a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 3rem;
		height: 3rem;
		background-color: var(--color-bg-2);
		border-radius: 50%;
		color: var(--color-text);
		transition: all 0.3s;
	}

	.social-icons a:hover {
		background-color: var(--color-theme-1);
		color: white;
		transform: translateY(-5px);
	}

	.social-icons i {
		font-size: 1.5rem;
	}

	.message-card {
		background-color: var(--color-bg-1);
		border-radius: 8px;
		padding: 3rem;
		box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
	}

	.message-card p {
		margin-bottom: 1.5rem;
		font-size: 1.1rem;
		line-height: 1.7;
	}

	.btn-large {
		padding: 1rem 2rem;
		font-size: 1.1rem;
		display: inline-block;
		margin-top: 1rem;
	}

	.container {
		width: 90%;
		max-width: 1200px;
		margin: 0 auto;
	}

	@media (max-width: 768px) {
		.hero-content {
			flex-direction: column;
			text-align: center;
		}

		.hero-image {
			flex: 0 0 250px;
			margin-bottom: 2rem;
		}

		.hero-buttons {
			justify-content: center;
		}




		.contact-grid {
			grid-template-columns: 1fr;
		}

		.contact-info {
			margin-bottom: 3rem;
		}
	}

	/* Scroll to top button */
	.scroll-to-top {
		position: fixed;
		bottom: 2rem;
		right: 2rem;
		width: 50px;
		height: 50px;
		background-color: var(--color-theme-1);
		color: white;
		border: none;
		border-radius: 50%;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 1.2rem;
		opacity: 0;
		visibility: hidden;
		transform: translateY(20px);
		transition: all 0.3s ease;
		z-index: 1000;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
	}

	.scroll-to-top.visible {
		opacity: 1;
		visibility: visible;
		transform: translateY(0);
	}

	.scroll-to-top:hover {
		background-color: var(--color-theme-2);
		transform: translateY(-3px);
		box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
	}

	.scroll-to-top:active {
		transform: translateY(-1px);
	}

	@media (max-width: 768px) {
		.scroll-to-top {
			bottom: 1.5rem;
			right: 1.5rem;
			width: 45px;
			height: 45px;
			font-size: 1rem;
		}
	}
</style>