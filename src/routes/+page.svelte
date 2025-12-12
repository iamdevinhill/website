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
		padding: clamp(3rem, 8vh, 6rem) 0;
		background: linear-gradient(180deg, var(--color-bg-1) 0%, var(--color-bg-0) 100%);
		position: relative;
	}
	
	.hero::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: 1px;
		background: linear-gradient(90deg, transparent, var(--color-theme-1), transparent);
	}

	.hero-content {
		display: flex;
		align-items: center;
		gap: clamp(2rem, 5vw, 4rem);
		max-width: 1200px;
		margin: 0 auto;
	}

	.hero-image {
		flex: 0 0 300px;
		position: relative;
	}
	
	.hero-image::before {
		content: '';
		position: absolute;
		top: -8px;
		left: -8px;
		right: -8px;
		bottom: -8px;
		background: linear-gradient(135deg, var(--color-theme-1), var(--color-theme-2));
		border-radius: 50%;
		opacity: 0.3;
		filter: blur(20px);
		z-index: -1;
	}

	.hero-image img {
		width: 100%;
		height: auto;
		border-radius: 50%;
		border: 4px solid rgba(59, 130, 246, 0.2);
		box-shadow: var(--shadow-lg);
		transition: all var(--transition-slow);
	}
	
	.hero-image img:hover {
		transform: scale(1.02);
		border-color: var(--color-theme-1);
	}

	.hero-text {
		flex: 1;
	}

	.hero-text h1 {
		font-size: clamp(2.5rem, 5vw, 4rem);
		margin-bottom: var(--spacing-sm);
		color: var(--color-text);
		font-weight: 800;
		letter-spacing: -0.03em;
		line-height: 1.1;
	}

	.hero-text h2 {
		font-size: clamp(1.25rem, 3vw, 1.75rem);
		font-weight: 600;
		background: linear-gradient(135deg, var(--color-theme-1), var(--color-theme-2));
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
		margin-bottom: var(--spacing-md);
	}

	.hero-text p {
		font-size: clamp(1rem, 2vw, 1.125rem);
		margin-bottom: var(--spacing-md);
		color: var(--color-text-light);
		line-height: 1.75;
	}

	.hero-buttons {
		display: flex;
		flex-wrap: wrap;
		gap: var(--spacing-md);
		margin-top: var(--spacing-xl);
	}

	.btn {
		display: inline-flex;
		align-items: center;
		gap: var(--spacing-xs);
		padding: 1rem 2rem;
		background: linear-gradient(135deg, var(--color-theme-1) 0%, var(--color-theme-2) 100%);
		color: white;
		text-decoration: none;
		border-radius: var(--radius-md);
		font-weight: 600;
		font-size: 1.0625rem;
		transition: all var(--transition-base);
		box-shadow: var(--shadow-sm);
		position: relative;
		overflow: hidden;
	}
	
	.btn::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: linear-gradient(135deg, var(--color-theme-2) 0%, var(--color-theme-1) 100%);
		opacity: 0;
		transition: opacity var(--transition-base);
	}

	.btn:hover {
		background-color: var(--color-theme-2);
		transform: translateY(-2px);
		box-shadow: var(--shadow-md), var(--shadow-glow);
		text-decoration: none;
	}
	
	.btn:hover::before {
		opacity: 1;
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
		padding: clamp(3rem, 8vh, 6rem) 0;
	}

	.section-title {
		text-align: center;
		margin-bottom: var(--spacing-xl);
		font-size: clamp(2rem, 4vw, 3rem);
		color: var(--color-text);
		font-weight: 800;
		letter-spacing: -0.02em;
		position: relative;
		padding-bottom: var(--spacing-md);
	}
	
	.section-title::after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 50%;
		transform: translateX(-50%);
		width: 80px;
		height: 4px;
		background: linear-gradient(90deg, var(--color-theme-1), var(--color-theme-2));
		border-radius: 2px;
	}

	.section-description {
		text-align: center;
		max-width: 800px;
		margin: 0 auto var(--spacing-xl) auto;
		font-size: clamp(1rem, 2vw, 1.25rem);
		color: var(--color-text-light);
		line-height: 1.75;
	}






	/* Contact Section */
	.contact-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
		gap: clamp(2rem, 5vw, 4rem);
		max-width: 1200px;
		margin: 0 auto;
	}

	.contact-info h3, .contact-message h3 {
		font-size: clamp(1.5rem, 3vw, 2rem);
		margin-bottom: var(--spacing-lg);
		font-weight: 700;
	}

	.info-item {
		display: flex;
		align-items: flex-start;
		gap: var(--spacing-md);
		margin-bottom: var(--spacing-xl);
	}

	.info-item i {
		font-size: 1.5rem;
		color: var(--color-theme-1);
		width: 2.5rem;
		height: 2.5rem;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: rgba(59, 130, 246, 0.1);
		border-radius: var(--radius-sm);
		flex-shrink: 0;
	}

	.info-item h4 {
		font-size: 1.125rem;
		margin-bottom: var(--spacing-xs);
		font-weight: 600;
		color: var(--color-text);
	}

	.info-item p {
		color: var(--color-text-light);
		margin-bottom: var(--spacing-sm);
		line-height: 1.6;
	}

	.social-links h4 {
		font-size: 1.125rem;
		margin-bottom: var(--spacing-md);
		font-weight: 600;
	}

	.social-icons {
		display: flex;
		gap: var(--spacing-sm);
		flex-wrap: wrap;
	}

	.social-icons a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 3rem;
		height: 3rem;
		background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(64, 117, 166, 0.1));
		border: 1px solid rgba(59, 130, 246, 0.2);
		border-radius: var(--radius-md);
		color: var(--color-text);
		transition: all var(--transition-base);
	}

	.social-icons a:hover {
		background: linear-gradient(135deg, var(--color-theme-1), var(--color-theme-2));
		color: white;
		transform: translateY(-4px);
		box-shadow: var(--shadow-md), var(--shadow-glow);
		border-color: transparent;
	}

	.social-icons i {
		font-size: 1.25rem;
	}

	.message-card {
		background-color: var(--color-bg-1);
		border-radius: var(--radius-lg);
		border: 1px solid rgba(255, 255, 255, 0.05);
		padding: var(--spacing-xl);
		box-shadow: var(--shadow-lg);
		position: relative;
		overflow: hidden;
	}
	
	.message-card::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 3px;
		background: linear-gradient(90deg, var(--color-theme-1), var(--color-theme-2));
	}

	.message-card p {
		margin-bottom: var(--spacing-md);
		font-size: 1.0625rem;
		line-height: 1.75;
		color: var(--color-text-light);
	}
	
	.message-card h3 {
		background: linear-gradient(135deg, var(--color-theme-1), var(--color-theme-2));
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}

	.btn-large {
		padding: 1.25rem 2.5rem;
		font-size: 1.125rem;
		display: inline-flex;
		margin-top: var(--spacing-md);
	}

	.container {
		width: 90%;
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 var(--spacing-md);
	}

	@media (max-width: 768px) {
		.hero-content {
			flex-direction: column;
			text-align: center;
		}

		.hero-image {
			flex: 0 0 250px;
			margin-bottom: var(--spacing-lg);
		}

		.hero-buttons {
			justify-content: center;
		}

		.contact-grid {
			grid-template-columns: 1fr;
		}

		.contact-info {
			margin-bottom: var(--spacing-xl);
		}
		
		.container {
			width: 95%;
			padding: 0 var(--spacing-sm);
		}
	}

	/* Scroll to top button */
	.scroll-to-top {
		position: fixed;
		bottom: var(--spacing-lg);
		right: var(--spacing-lg);
		width: 56px;
		height: 56px;
		background: linear-gradient(135deg, var(--color-theme-1), var(--color-theme-2));
		color: white;
		border: none;
		border-radius: var(--radius-md);
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 1.25rem;
		opacity: 0;
		visibility: hidden;
		transform: translateY(20px) scale(0.9);
		transition: all var(--transition-base);
		z-index: 1000;
		box-shadow: var(--shadow-md), var(--shadow-glow);
	}

	.scroll-to-top.visible {
		opacity: 1;
		visibility: visible;
		transform: translateY(0) scale(1);
	}

	.scroll-to-top:hover {
		transform: translateY(-4px) scale(1.05);
		box-shadow: var(--shadow-lg), var(--shadow-glow);
	}

	.scroll-to-top:active {
		transform: translateY(-2px) scale(1);
	}

	@media (max-width: 768px) {
		.scroll-to-top {
			bottom: var(--spacing-md);
			right: var(--spacing-md);
			width: 48px;
			height: 48px;
			font-size: 1.125rem;
		}
	}
</style>