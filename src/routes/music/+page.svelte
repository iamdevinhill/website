<script>
	// Music releases data
	const releases = [
		{
			title: 'Digital Dreams',
			type: 'Album',
			year: 2023,
			description: 'A fusion of electronic beats and ambient soundscapes, exploring the intersection of technology and human emotion.',
			image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
		},
		{
			title: 'Algorithm',
			type: 'EP',
			year: 2022,
			description: 'A collection of tracks inspired by the patterns and structures found in data and algorithms.',
			image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
		},
		{
			title: 'Neural Networks',
			type: 'Single',
			year: 2021,
			description: 'An experimental piece that translates neural network patterns into musical compositions.',
			image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80'
		}
	];

	// Streaming links
	const streamingLinks = [
		{ name: 'Spotify', url: 'https://open.spotify.com/', icon: 'fa-spotify' },
		{ name: 'Apple Music', url: 'https://music.apple.com/', icon: 'fa-apple' },
		{ name: 'SoundCloud', url: 'https://soundcloud.com/', icon: 'fa-soundcloud' },
		{ name: 'Bandcamp', url: 'https://bandcamp.com/', icon: 'fa-bandcamp' }
	];
</script>

<svelte:head>
	<title>Music | Devin Hill</title>
	<meta name="description" content="Music projects and releases by Devin Hill" />
</svelte:head>

<section class="music-header">
	<div class="container">
		<h1>My Music</h1>
		<p>Where data science meets sound design. Explore my musical journey and latest releases.</p>
	</div>
</section>

<section class="streaming-platforms section">
	<div class="container">
		<h2>Listen on Your Favorite Platform</h2>
		<div class="platforms-grid">
			{#each streamingLinks as platform}
				<a href={platform.url} target="_blank" rel="noopener noreferrer" class="platform-card">
					<i class="fab {platform.icon}"></i>
					<span>{platform.name}</span>
				</a>
			{/each}
			}
		</div>
	</div>
</section>

<section class="releases section bg-light">
	<div class="container">
		<h2>Releases</h2>
		<div class="releases-grid">
			{#each releases as release}
				<div class="release-card">
					<div class="release-image">
						<img src={release.image} alt={release.title} />
					</div>
					<div class="release-content">
						<div class="release-meta">
							<span class="release-type">{release.type}</span>
							<span class="release-year">{release.year}</span>
						</div>
						<h3>{release.title}</h3>
						<p>{release.description}</p>
					</div>
				</div>
			{/each}
			}
		</div>
	</div>
</section>

<section class="music-approach section">
	<div class="container">
		<div class="approach-content">
			<div class="approach-text">
				<h2>My Approach to Music</h2>
				<p>
					My musical journey is deeply intertwined with my background in data science and AI. I approach music creation as both an art and a science, using technology to explore new sonic possibilities while maintaining an emotional core.
				</p>
				<p>
					I'm fascinated by the patterns that emerge in both data and music - the rhythms, structures, and harmonies that create meaning from seemingly random elements. This intersection of analytical thinking and creative expression defines my unique sound.
				</p>
				<p>
					In my studio, I combine traditional instruments with digital tools, often writing custom algorithms to generate musical ideas or process sounds in novel ways. The result is a blend of electronic and organic elements that reflects both my technical expertise and artistic sensibilities.
				</p>
			</div>
			<div class="approach-image">
				<img src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Music Studio" />
			</div>
		</div>
	</div>
</section>

<style>
	.music-header {
		background-color: var(--color-theme-2);
		color: white;
		padding: 5rem 0;
		text-align: center;
	}

	.music-header h1 {
		font-size: 3rem;
		margin-bottom: 1rem;
	}

	.music-header p {
		font-size: 1.2rem;
		max-width: 800px;
		margin: 0 auto;
	}

	.section {
		padding: 5rem 0;
	}

	.section h2 {
		text-align: center;
		font-size: 2.5rem;
		margin-bottom: 3rem;
	}

	.platforms-grid {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		gap: 2rem;
		margin-top: 2rem;
	}

	.platform-card {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 2rem;
		background-color: white;
		border-radius: 8px;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
		transition: transform 0.3s, box-shadow 0.3s;
		width: 150px;
		text-decoration: none;
		color: var(--color-text);
	}

	.platform-card:hover {
		transform: translateY(-10px);
		box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
	}

	.platform-card i {
		font-size: 3rem;
		margin-bottom: 1rem;
		color: var(--color-theme-1);
	}

	.platform-card span {
		font-weight: 600;
	}

	.bg-light {
		background-color: var(--color-bg-2);
	}

	.releases-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
		gap: 2rem;
	}

	.release-card {
		background-color: white;
		border-radius: 8px;
		overflow: hidden;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
		transition: transform 0.3s, box-shadow 0.3s;
	}

	.release-card:hover {
		transform: translateY(-10px);
		box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
	}

	.release-image {
		height: 200px;
		overflow: hidden;
	}

	.release-image img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: transform 0.5s;
	}

	.release-card:hover .release-image img {
		transform: scale(1.1);
	}

	.release-content {
		padding: 1.5rem;
	}

	.release-meta {
		display: flex;
		justify-content: space-between;
		margin-bottom: 0.5rem;
	}

	.release-type {
		background-color: var(--color-theme-1);
		color: white;
		padding: 0.2rem 0.8rem;
		border-radius: 20px;
		font-size: 0.8rem;
		font-weight: 500;
	}

	.release-year {
		color: var(--color-text-light);
		font-weight: 500;
	}

	.release-content h3 {
		font-size: 1.5rem;
		margin-bottom: 0.8rem;
	}

	.release-content p {
		color: var(--color-text-light);
	}

	.approach-content {
		display: flex;
		align-items: center;
		gap: 4rem;
	}

	.approach-text {
		flex: 1;
	}

	.approach-text h2 {
		text-align: left;
		margin-bottom: 1.5rem;
	}

	.approach-text p {
		margin-bottom: 1.5rem;
		font-size: 1.1rem;
		line-height: 1.7;
	}

	.approach-image {
		flex: 1;
	}

	.approach-image img {
		width: 100%;
		height: auto;
		border-radius: 8px;
		box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
	}

	@media (max-width: 768px) {
		.releases-grid {
			grid-template-columns: 1fr;
		}

		.approach-content {
			flex-direction: column;
		}

		.approach-image {
			order: -1;
			margin-bottom: 2rem;
		}
	}
</style>