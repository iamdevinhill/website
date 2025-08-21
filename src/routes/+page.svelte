<script>
	import { onMount } from 'svelte';
	import headshot from '$lib/images/headshot.jpg';

	// Skills data
	const skills = [
		{ name: 'Data Engineering', icon: 'fa-database' },
		{ name: 'Python', icon: 'fa-python' },
		{ name: 'SQL', icon: 'fa-table' },
		{ name: 'Data Visuals', icon: 'fa-chart-line' },
		{ name: 'Data Analysis', icon: 'fa-chart-bar' },
		{ name: 'Web Development', icon: 'fa-code' },
		{ name: 'Artificial Intelligence', icon: 'fa-brain' },
		{ name: 'Leadership', icon: 'fa-users' },
		{ name: 'Project Management', icon: 'fa-tasks' },
		{ name: 'Music Production', icon: 'fa-music' }
	];

	// Project data
	const projects = [
		{
			title: 'Artificial Intelligence',
			description: 'Create applications utilizing large language models (LLMs), data analysis, and speech-to-text, for cutting edge solutions.',
			tags: [],
			image: '/ai.jpg'
		},
		{
			title: 'Data Visualization',
			description: 'Complex data visualizations and engineering with real-time analytics and dynamic reporting for better decision making.',
			tags: [],
			image: '/data1.jpg'
		},
		{
			title: 'Frontend Development',
			description: 'Design dynamic, responsive user interfaces that ensure seamless navigation, smooth transitions, and optimal performance across devices.',
			tags: [],
			image: '/front.jpg'
		},
		{
			title: 'Music Production',
			description: 'Various projects that have had production, songwriting, and instrumentals incorporated.',
			tags: [],
			image: '/prod1.jpg'
		},
		{
			title: 'Listener Metrics',
			description: 'Evaluation of listener, video, and social media ad campaign metrics for needed artist affiliation.',
			tags: [],
			image: '/metrics.jpg'
		},
		{
			title: 'Artist Consulting',
			description: 'Gauge artist pain points to adhere to their needs to scale, whether that be tech or production.',
			tags: [],
			image: '/consult.jpg'
		}
	];

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
	<meta name="description" content="Personal website of Devin Hill, AI/ML Engineer and Musician" />
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
				<div class="hero-buttons">
					<a href="#projects" class="btn">View Projects</a>
					<a href="#contact" class="btn">Get in Touch</a>
				</div>
			</div>
		</div>
	</div>
</section>

<section class="about section">
	<div class="container">
		<h2 class="section-title">About Me</h2>
		<div class="about-content">
			<div class="about-text">
				<p>
					I am an AI/ML Engineer with a Bachelor's in Data Science and a Master's in Management (concentration in Organizational Leadership). With over a decade of experience in the workforce, I blend technology and people-driven innovation. My work spans AI, data analytics, and creativity, focusing on large language models, data visualization, and real-time reporting. Leveraging a deep understanding of success metrics from defense and aerospace to musical artists, I help scale projects and optimize outcomes with a data-driven approach. Contact me for resume.</p>
			</div>
		</div>
	</div>
</section>

<section class="skills section bg-light">
	<div class="container">
		<h2 class="section-title">Skills & Expertise</h2>
		<div class="skills-grid">
			{#each skills as skill}
				<div class="skill-card">
					<div class="skill-icon">
						<i class="fas {skill.icon}"></i>
					</div>
					<h3>{skill.name}</h3>
				</div>
			{/each}
		</div>
	</div>
</section>

<section id="projects" class="projects section">
	<div class="container">
		<h2 class="section-title">My Projects</h2>
		<p class="section-description">A collection of data science, AI, and creative projects I've worked on.</p>
		<div class="projects-grid">
			{#each projects as project}
				<div class="project-card">
					<div class="project-image">
						<img src={project.image} alt={project.title} />
					</div>
					<div class="project-content">
						<h3>{project.title}</h3>
						<p>{project.description}</p>
						<div class="project-tags">
							<!-- {#each project.tags as tag}
								<span class="tag">{tag}</span>
							{/each} -->
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<section class="music section bg-light">
	<div class="container">
		<h2 class="section-title">My Music</h2>
		<p class="section-description">Here's a playlist featuring some of my work, collaborations, and the work of my peers. Want to sound as good as these? Hit up the contact section and let's make it happen.</p>
		
		<div class="music-embeds">
			<div class="embed-container">
				<h3>Spotify Playlist</h3>
				<div class="embed-frame">
					<div class="spotify-embed-container">
						<iframe 
							title="Spotify Playlist"
							src="https://open.spotify.com/embed/playlist/2slrwyAxK3Pt02z9y9DGCO?utm_source=generator&theme=0" 
							height="400" 
							frameBorder="0" 
							allowFullScreen 
							allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
							loading="lazy">
						</iframe>
					</div>
				</div>
			</div>
		</div>


	</div>
</section>

<section id="contact" class="contact section">
	<div class="container">
		<h2 class="section-title">Get in Touch</h2>
		<p class="section-description">Have a project in mind or just want to say hello? Hit me up.</p>
		
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
						Whether you're looking for a data solution, interested in a music collaboration, or just want to connect, 
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

	.about-content {
		display: flex;
		flex-direction: column;
		align-items: center;
		max-width: 1000px;
		margin: 0 auto;
		gap: 2rem;
	}

	.about-text p {
		margin-bottom: 1.5rem;
		font-size: 1.1rem;
		line-height: 1.7;
	}

	.bg-light {
		background-color: var(--color-bg-2);
	}

	.skills-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
		gap: 2rem;
	}

	.skill-card {
		background-color: var(--color-bg-1);
		border-radius: 8px;
		padding: 2rem;
		text-align: center;
		box-shadow: 0 2px 4px rgba(59, 130, 246, 1);
		transition: transform 0.3s, box-shadow 0.3s;
	}

	.skill-card:hover {
		transform: translateY(-10px);
		box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);
	}

	.skill-icon {
		font-size: 2.5rem;
		color: var(--color-theme-1);
		margin-bottom: 1rem;
	}

	.skill-card h3 {
		font-size: 1.2rem;
		font-weight: 600;
	}

	/* Projects Section */
	.projects-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
		gap: 2rem;
	}

	.project-card {
		background-color: var(--color-bg-1);
		border-radius: 8px;
		overflow: hidden;
		box-shadow: 0 2px 4px rgba(59, 130, 246, 1);
		transition: transform 0.3s, box-shadow 0.3s;
	}

	.project-card:hover {
		transform: translateY(-10px);
		box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4);
	}

	.project-image {
		height: 200px;
		overflow: hidden;
	}

	.project-image img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: transform 0.5s;
	}

	.project-card:hover .project-image img {
		transform: scale(1.1);
	}

	.project-content {
		padding: 1.5rem;
	}

	.project-content h3 {
		font-size: 1.5rem;
		margin-bottom: 0.8rem;
	}

	.project-content p {
		color: var(--color-text-light);
		margin-bottom: 1.5rem;
	}

	.project-tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}

	/* Music Section */
	.music-embeds {
		display: grid;
		grid-template-columns: 1fr;
		gap: 2rem;
		margin-bottom: 3rem;
		max-width: 800px;
		margin-left: auto;
		margin-right: auto;
	}

	.embed-container {
		background-color: var(--color-bg-0);
		border-radius: 8px;
		padding: 1.5rem;
		box-shadow: 0 2px 4px rgba(59, 130, 246, 1);
	}

	.embed-container h3 {
		margin-bottom: 1rem;
		font-size: 1.3rem;
		color: var(--color-text);
		text-align: center;
	}

	.embed-frame {
		border-radius: 8px;
		overflow: hidden;
		background-color: #000;
	}

	.spotify-embed-container {
		border-radius: 12px;
		padding: 10px;
	}
	
	.spotify-embed-container iframe {
		border-radius: 12px;
		width: 100%;
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

		.skills-grid {
			grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
		}

		.skill-card h3 {
			font-size: 1rem;
			font-weight: 600;
		}
		
		.spotify-embed-container {
			width: 100%;
		}

		.projects-grid {
			grid-template-columns: 1fr;
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