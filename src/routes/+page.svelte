<script>
	import { onMount } from 'svelte';
	import headshot from '$lib/images/headshot.jpg';

	
	// Skills data
	const skills = [
		{ name: 'Data Engineering', icon: 'fa-database' },
		{ name: 'Python', icon: 'fa-python' },
		{ name: 'SQL', icon: 'fa-table' },
		{ name: 'Data Visualization', icon: 'fa-chart-line' },
		{ name: 'Data Analysis', icon: 'fa-chart-bar' },
		{ name: 'Web Development', icon: 'fa-code' },
		{ name: 'Artificial Intelligence', icon: 'fa-brain' },
		{ name: 'Leadership', icon: 'fa-users' },
		{ name: 'Project Management', icon: 'fa-tasks' },
		{ name: 'Music Production', icon: 'fa-music' }
	];
</script>

<svelte:head>
	<title>Devin Hill | Data & AI Engineer | Artist | Leader</title>
	<meta name="description" content="Personal website of Devin Hill, Data/AI Engineer and Musician" />
</svelte:head>

<section class="hero">
	<div class="container">
		<div class="hero-content">
			<div class="hero-image">
				<img src={headshot} alt="headshot" />
			</div>
			<div class="hero-text">
				<h1>Devin Hill</h1>
				<h2>Data & AI Engineer | Artist | Leader</h2>
				<p>Transforming data into opportunities.</p>
				<div class="hero-buttons">
					<a href="/projects" class="btn">View Projects</a>
					<a href="/contact" class="btn">Get in Touch</a>
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
					I am a Data and AI Engineer with a Bachelor's in Data Science and a Master's in Organizational Leadership, specializing in management. My passion for music blends with my expertise in technology, creating a unique perspective on innovation. I focus on the intersection of AI, data analytics, and creativity, working on projects involving large language models, data visualization, and real-time reporting. 
					With a strong understanding of the metrics that drive success in both tech and music, I help scale projects and improve outcomes. Whether producing music, advising artists, or analyzing data, I apply a data-driven approach to every challenge. 				
				</p>
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
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
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
		
		.spotify-embed-container {
			width: 100%;
		}
	}
</style>