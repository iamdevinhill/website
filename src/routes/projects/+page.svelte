<script>
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
</script>



<svelte:head>
	<title>Projects | Devin Hill</title>
	<meta name="description" content="Lead AI/ML projects by Devin Hill" />
</svelte:head>

<section class="projects-header">
	<div class="container">
		<h1>My Projects</h1>
		<p>A collection of data science, AI, and creative projects I've worked on.</p>
	</div>
</section>

<section class="projects-grid section">
	<div class="container">
		<div class="grid">
			{#each projects as project}
				<div class="project-card">
					<div class="project-image">
						<img src={project.image} alt={project.title} />
					</div>
					<div class="project-content">
						<h2>{project.title}</h2>
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

<section class="music-section section bg-light">
	<div class="container">
		<h2 class="section-title">My Music</h2>
		<p class="section-description">Here's a playlist featuring some of my work, collaborations,
			and the work of my peers. Want to sound as good as these? Hit up the contact page and let's make it happen.</p>
		
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

<style>
	.projects-header {
		background-color: var(--color-bg-1);
		color: white;
		padding: 1rem 0;
		text-align: center;
	}

	.projects-header h1 {
		font-size: 3rem;
		margin-bottom: 1rem;
	}

	.projects-header p {
		font-size: 1.2rem;
		max-width: 800px;
		margin: 0 auto;
	}

	.projects-grid {
		padding: 5rem 0;
	}

	.spotify-embed-container {
		border-radius: 12px;
		padding: 10px;
	}
	
	.spotify-embed-container iframe {
		border-radius: 12px;
		width: 100%;
		
	}

	.grid {
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

	.project-content h2 {
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

	.bg-light {
		background-color: var(--color-bg-2);
	}

	.section {
		padding: 5rem 0;
	}

	.section-title {
		text-align: center;
		margin-bottom: 1rem;
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

	.container {
		width: 90%;
		max-width: 1200px;
		margin: 0 auto;
	}

	@media (max-width: 768px) {
		.grid {
			grid-template-columns: 1fr;
		}

		.music-embeds {
			grid-template-columns: 1fr;
		}
		
	}
</style>