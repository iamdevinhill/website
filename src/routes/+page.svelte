<script>
	import { onMount } from 'svelte';
	import headshot from '$lib/images/headshot.jpg';

	// Contact information
	const contactInfo = {
		email: 'devin.hill121192@yahoo.com',
		phone: '(615) 542-2538',
		location: 'Nashville Metro, TN',
		clearance: 'Secret',
		availability: "Let's talk Opportunities",
		willing_to_relocate: 'No',
		willing_to_travel: '10%'
	};

	// Social media links
	const socialLinks = [
		{ name: 'LinkedIn', url: 'https://linkedin.com/in/iamdevinhill', icon: 'fa-linkedin' },
		{ name: 'GitHub', url: 'https://github.com/iamdevinhill', icon: 'fa-github' },
		{ name: 'YouTube', url: 'https://www.youtube.com/@devinhill1211', icon: 'fa-youtube' }
	];

	// Professional summary
	const summary = "Senior Engineer with demonstrated proficiency in technical development and conveying intricate ideas to non-technical audiences. Emphasis in deploying full stack AI applications with large language models, knowledge graph and relational databases, API middleware, user friendly frontend, and containerization. Motivated to be a lifelong learner who continuously strives to improve and expand my skill set.";

	// Experience data from CV
	const experiences = [
		{
			company: "General Dynamics IT",
			role: "Senior AI/ML Engineer",
			period: "9/2025 – Present",
			location: "Nashville Metro, TN",
			projects: [
				{
					name: "Unified Claims Acceleration Platform (UCAP) Contract for Department of VA",
					period: "9/2025 – Present",
					highlights: [
						"Develop proof of concepts to extract typed and handwritten text with multimodal AI models and OCR tools for multipage applications on forms",
						"Architect an end-to-end AWS pipeline (S3, Lambda, Bedrock/Claude, DynamoDB) to convert PDFs to structured JSON, repopulate forms, and normalize data at scale",
						"Engineer a PII redaction proof of concept that extracts text data in PDFs, saves to structured JSON with text coordinates, and renders bounding boxes for visual verification",
						"Present proof of concepts to executives and leadership within the organization",
						"Showcase development concept to other account directors for additional potential client proposals and use cases"
					]
				}
			]
		},
		{
			company: "Booz Allen Hamilton",
			role: "Lead AI/ML Engineer",
			period: "9/2023 – 9/2025",
			location: "Nashville Metro, TN",
			projects: [
				{
					name: "Air Force Technology Development, Lead AI/ML Engineer",
					period: "4/25 - 9/25",
					highlights: [
						"Create innovative AI solutions proactively within deliverables that can be used by clients and optimize billable efforts within the Air Force account",
						"Leverage technical expertise to optimize KC-46/Knowledge Assistant billable project for enhanced chatbot optimization of document SQL table retrieval accuracy and speed",
						"Develop containerized knowledge graph RAG chatbot application with Python, Neo4J, FastAPI, Docker, Ollama/Llama 3.2 & nomic-embed-text, and HTML/CSS/JavaScript for enhanced retrieval quality and relational data",
						"Contribute technical architecture expertise for Requests for Proposals (RFPs) to shape solution strategies and technical approaches to meet client requirements"
					]
				},
				{
					name: "Space Domain Awareness (i2S2) IRAD, Technical Lead",
					period: "9/23 – 3/25",
					highlights: [
						'Technical lead for an IRAD project, a 10-person technical team, to develop the space situational awareness application, integrating LLMs via Python, Ollama, Docker, and FastAPI, and storing results in PostgreSQL with Svelte frontend development (<a href="https://www.boozallen.com/markets/space/i2s2-interactive-ai-for-space.html" target="_blank" rel="noopener noreferrer">Article</a>)',
						"Presented for client engagement and showcases at NASA JSC, AFA (Air & Space Forces Association), Space+AI Summit, United States Space Force I3E, and Booz Allen's CEO Demo",
						"Collaborated with other internal IRAD teams to integrate project components cohesively for optimal leadership ROI",
						"Managed JIRA/Confluence with defined project epics/stories and facilitated PI Planning & SCRUM meetings to align with leadership expectations",
						"Deployed applications on AWS EC2 and Booz Allen's BASE-C cloud platform",
						"Established deliverables, use cases, and timelines for accurate project budgets regarding personnel and cost control for overall computing resources"
					]
				},
				{
					name: "First LLM in Space (A2E2) IRAD, AI Engineer",
					period: "9/24 - 12/24",
					highlights: [
						"Designed a firm-branded frontend application showcasing LLM in Space within a 5-day turnaround for the NVIDIA AI Summit (10/24)",
						'Collaborated with engineers and leadership to ensure cohesive development and optimized the model for ISS deployment (10/31/24) and was named on a provisional patent for edge deployment (<a href="https://www.cnbc.com/2025/04/25/ai-space-meta-llama-iss-booz-allen.html" target="_blank" rel="noopener noreferrer">Article</a>)'
					]
				},
				{
					name: "Joint Planning Process (JPP) IRAD, Technical Lead",
					period: "3/24 – 12/24",
					highlights: [
						"Served as technical lead and built a Retrieval-Augmented Generation (RAG) app using Python, Streamlit, Mistral 7B LLM, and ChromaDB to generate planning perspectives from subject matter expert documentation",
						"Further research and development with research on Crew AI agent architecture to enhance LLM applications and improve system capabilities and implemented efforts",
						"Presented application demos to potential clients such as the US Army and US Cyber Command to foster collaboration and secure additional funding"
					]
				},
				{
					name: "AUVSI XPO IRAD, AI Engineer",
					period: "11/23 – 2/24",
					highlights: [
						"Collaborated with the team to implement Retrieval-Augmented Generation (RAG) for LLM",
						"Designed a Streamlit UI template to facilitate testing and evaluation"
					]
				}
			]
		},
		{
			company: "Rutherford County Government",
			role: "Software Specialist",
			period: "9/2022 – 9/2023",
			location: "Murfreesboro, TN",
			highlights: [
				"Updated multiple county archive web pages displaying data sourced from SQL Server database and employees' pay stub portal using ASP.NET/CSS/HTML",
				"Collaborated with the team to build a login reset app, leveraging SQL server queries to verify valid users"
			]
		},
		{
			company: "Thompson Caterpillar Machinery",
			role: "Sales Analyst",
			period: "7/2015 – 9/2022",
			location: "LaVergne, TN",
			highlights: [
				"Analyzed sales numbers and inventory for monthly quota, trends, and projection with Excel",
				"Led department project for organizing/selling discontinued inventory",
				"Managed the inventory forecast new machines and attachments",
				"Arranged shipping supply chain between stores and customers",
				"Presented weekly status of deals to upper management",
				"Coordinated new sales with salesmen and service department"
			]
		},
		{
			company: "Independent Projects",
			role: "AI/ML Engineer & Developer",
			period: "Ongoing",
			location: "Nashville Metro, TN",
			highlights: [
				"Built and deployed a quad RTX 3060 GPU cluster to host and serve local LLM models using Ollama supporting multi-GPU inference",
				"Engineered a multi-agent persona situational analysis graph RAG application with Ollama/Llama3.2, Neo4J, FastAPI, HTML/CSS/JavaScript, and Docker that will save chatbot conversation as PDF",
				"Built a client side hosted multimodal computer vision analysis app with HuggingFace Transformers, HTML/CSS/JavaScript to analyze what the video stream is, prompt a question about it, then describe",
				"Finetuned TinyLlama 1.1B model to a dedicated corpus of text data ETL with Mage data pipeline tool, LoRA training library with Nvidia RTX 3060",
				"Developed Svelte frontend website that prompts users to sign up for mailing list with custom form fills, inserts info into Postgres table, then an ETL Python script to extract into CSV and mass email",
				"Analyze, clean, and graph e-commerce digital marketing CSV data using Python data engineering to identify the most/least profitable ad campaigns to present to customers for cost vs revenue trends",
				"Edge deployment of LLMs and computer vision scripts on Nvidia Jetson Orin Nano",
				"Created freelance frontend websites for clients using Svelte, CSS, and HTML"
			]
		}
	];

	// Certifications and awards
	const certifications = [
		"Neo4j Certified Professional, Graph Data Science Certification",
		"CompTIA Security+",
		"Wrote graduate capstone literature review on artificial intelligence and its role in evolving leadership with a practical application guide for practicing management",
		'Guest speaker and panelist at MTSU\'s Data Science Alumni Event, showcasing notable contributions to the data field and offering valuable insights and inspiration (<a href="https://datascience.mtsu.edu/2025/06/23/2025-spring-end-of-year-spotlight-alumni-event/" target="_blank" rel="noopener noreferrer">Article</a>)',
		'Live TV interview regarding MTSU\'s programs (<a href="https://www.wkrn.com/video/mtsu-get-your-degree-excel-at-your-job/10019924/" target="_blank" rel="noopener noreferrer">Video</a>)'
	];

	// Education
	const education = [
		{
			degree: "MS Computer Science",
			institution: "Georgia Institute of Technology",
			status: "In progress"
		},
		{
			degree: "MS Management",
			institution: "Middle Tennessee State University"
		},
		{
			degree: "BS Data Science",
			institution: "Middle Tennessee State University"
		},
		{
			degree: "AS General Studies",
			institution: "Motlow State Community College"
		}
	];

	// Skills (derived from CV)
	const skills = {
		"AI / Machine Learning": ["LLMs", "Retrieval-Augmented Generation (RAG)", "Knowledge Graphs", "Multimodal AI", "Computer Vision", "Edge Deployment"],
		"Cloud & Infrastructure": ["AWS (S3, Lambda, Bedrock, DynamoDB, EC2, Textract)", "Docker", "GPU CUDA"],
		"Programming": ["Python", "FastAPI", "JavaScript", "HTML/CSS", "SQL", "ASP.NET"],
		"Frameworks & Tools": ["Ollama", "Neo4j", "PostgreSQL", "ChromaDB", "Streamlit", "Svelte"],
		"Data Engineering": ["ETL Pipelines", "Mage", "SQL Server", "Data Visualization"],
		"Project & Program Management": ["JIRA", "Confluence", "SCRUM", "PI Planning", "RFPs"]
	};

	// Scroll to top functionality
	let showScrollButton = false;
	
	// Track expanded experience items
	let expandedExperiences = {};
	
	function toggleExperience(index) {
		expandedExperiences[index] = !expandedExperiences[index];
	}

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

	// Download CV function
	function downloadCV() {
		window.open('/Devin_Hill_CV.pdf', '_blank');
	}


</script>

<svelte:head>
	<title>Devin Hill | AI/ML Engineer | Portfolio & Resume</title>
	<meta name="description" content="Senior AI/ML Engineer specializing in LLMs, RAG applications, knowledge graphs, and cloud architecture. Secret clearance. Based in Nashville, TN." />
</svelte:head>

<section class="hero">
	<div class="container">
		<div class="hero-content">
			<div class="hero-image">
				<img src={headshot} alt="Devin Hill - Senior AI/ML Engineer" />
			</div>
			<div class="hero-text">
				<h1>Devin Hill</h1>
				<h2>Senior AI/ML Engineer</h2>
				<p class="subtitle">{summary}</p>
				<div class="hero-stats">
					<div class="stat">
						<i class="fas fa-shield-alt"></i>
						<span>Secret Clearance</span>
					</div>
					<div class="stat">
						<i class="fas fa-map-marker-alt"></i>
						<span>Nashville Metro, TN</span>
					</div>
					<div class="stat">
						<i class="fas fa-briefcase"></i>
						<span>Let's talk Opportunities</span>
					</div>
				</div>
				<div class="hero-buttons">
					<a href="#contact" class="btn btn-primary">
						<i class="fas fa-envelope"></i>
						Get in Touch
					</a>
					<!-- <button on:click={downloadCV} class="btn btn-secondary">
						<i class="fas fa-download"></i>
						Download CV
					</button> -->
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Skills Section -->
<section id="skills" class="section skills-section">
	<div class="container">
		<h2 class="section-title">Technical Expertise</h2>
		<div class="skills-grid">
			{#each Object.entries(skills) as [category, skillList]}
				<div class="skill-card">
					<h3>{category}</h3>
					<p class="skill-list">{skillList.join(' • ')}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Experience Section -->
<section id="experience" class="section experience-section">
	<div class="container">
		<h2 class="section-title">Professional Experience</h2>
		<div class="timeline">
			{#each experiences as exp, i}
				<div class="timeline-item">
					<div class="timeline-marker"></div>
					<div class="timeline-content">
						<button 
							class="experience-header" 
							class:expanded={expandedExperiences[i]}
							on:click={() => toggleExperience(i)}
						>
							<div>
								<h3>{exp.role}</h3>
								<h4>{exp.company}</h4>
							</div>
							<div class="experience-meta">
								<span class="period">{exp.period}</span>
								<span class="location">{exp.location}</span>
								<i class="fas fa-chevron-down expand-icon" class:expanded={expandedExperiences[i]}></i>
							</div>
						</button>
						{#if expandedExperiences[i]}
							{#if exp.highlights}
								<ul class="highlights">
									{#each exp.highlights as highlight}
										<li>{highlight}</li>
									{/each}
								</ul>
							{/if}
							{#if exp.projects}
								<div class="sub-projects">
									{#each exp.projects as project}
										<div class="sub-project">
											<div class="sub-project-header">
												<h5>{project.name}</h5>
												<span class="sub-period">{project.period}</span>
											</div>
											<ul class="highlights">
												{#each project.highlights as highlight}
													<li>{@html highlight}</li>
												{/each}
											</ul>
										</div>
									{/each}
								</div>
							{/if}
						{/if}
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Education & Certifications Section -->
<section id="education" class="section education-section">
	<div class="container">
		<div class="edu-cert-grid">
			<div class="education-column">
				<h2 class="section-title">Education</h2>
				{#each education as edu}
					<div class="education-card">
						<h3>{edu.degree}</h3>
						<p class="institution">
							{edu.institution}{#if edu.status}&nbsp;({edu.status}){/if}
						</p>
					</div>
				{/each}
			</div>
			<div class="certifications-column">
				<h2 class="section-title">Certifications & Awards</h2>
				<ul class="certifications-list">
					{#each certifications as cert}
						<li>
							<i class="fas fa-certificate"></i>
							<span>{@html cert}</span>
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>
</section>

<section id="contact" class="contact section">
	<div class="container">
		<div class="contact-header">
			<h2 class="section-title">Get in Touch</h2>
			<p class="section-description">Have a project in mind? Hit me up.</p>
		</div>
		
		<div class="contact-grid">
			<div class="contact-info">
				<div class="info-items">
					<div class="info-item">
						<i class="fas fa-envelope"></i>
						<div class="info-content">
							<h4>Email</h4>
							<p>{contactInfo.email}</p>
						</div>
					</div>
					<div class="info-item">
						<i class="fas fa-map-marker-alt"></i>
						<div class="info-content">
							<h4>Location</h4>
							<p>{contactInfo.location}</p>
						</div>
					</div>
					<div class="info-item">
						<i class="fas fa-calendar-check"></i>
						<div class="info-content">
							<h4>Availability</h4>
							<p>{contactInfo.availability}</p>
						</div>
					</div>
				</div>
				<div class="social-section">
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
						I'm always open to new opportunities and conversations. Contact me for CV.
					</p>
					<p>
						Feel free to reach out via email. I typically respond within 24-48 hours.
					</p>
					<a href="mailto:{contactInfo.email}?subject=Website Inquiry" class="btn btn-primary">Send Me a Message</a>
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
	/* Hero Section */
	.hero {
		padding: var(--spacing-3xl) 0 var(--spacing-2xl) 0;
		border-bottom: 1px solid var(--color-border);
	}

	.hero-content {
		display: flex;
		align-items: center;
		gap: var(--spacing-2xl);
		max-width: 1000px;
		margin: 0 auto;
	}

	.hero-image {
		width: 250px;
		height: 250px;
		flex-shrink: 0;
	}

	.hero-text {
		flex: 1;
		text-align: left;
	}

	.hero-image img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 50%;
		border: 2px solid var(--color-border-dark);
	}

	.hero-text h1 {
		font-size: 2.75rem;
		margin-bottom: var(--spacing-sm);
		color: var(--color-text);
		font-weight: 700;
		letter-spacing: -0.02em;
		line-height: 1.1;
	}

	.hero-text h2 {
		font-size: 1.375rem;
		font-weight: 500;
		color: var(--color-accent);
		margin-bottom: var(--spacing-xl);
		line-height: 1.3;
	}

	.subtitle {
		font-size: 1.0625rem;
		margin-bottom: var(--spacing-2xl);
		color: var(--color-text-secondary);
		line-height: 1.7;
		max-width: 640px;
	}

	.hero-stats {
		display: flex;
		flex-wrap: wrap;
		justify-content: flex-start;
		gap: var(--spacing-lg) var(--spacing-xl);
		margin-bottom: var(--spacing-xl);
	}

	.stat {
		display: flex;
		align-items: center;
		gap: var(--spacing-sm);
		color: var(--color-text-secondary);
		font-size: 0.9375rem;
		font-weight: 500;
	}

	.stat i {
		color: var(--color-accent);
		font-size: 1.125rem;
	}

	.hero-buttons {
		display: flex;
		flex-wrap: wrap;
		justify-content: flex-start;
		gap: var(--spacing-sm);
	}

	/* Button Styles */
	.btn {
		display: inline-flex;
		align-items: center;
		gap: var(--spacing-xs);
		padding: 1rem 2rem;
		background-color: var(--color-accent);
		color: white;
		text-decoration: none;
		border: 2px solid var(--color-accent);
		border-radius: var(--radius-md);
		font-weight: 600;
		font-size: 1rem;
		transition: all var(--transition-base);
		cursor: pointer;
		position: relative;
		overflow: hidden;
	}

	.btn::before {
		content: '';
		position: absolute;
		top: 50%;
		left: 50%;
		width: 0;
		height: 0;
		border-radius: 50%;
		background: rgba(255, 255, 255, 0.1);
		transform: translate(-50%, -50%);
		transition: width 0.6s, height 0.6s;
	}

	.btn:hover::before {
		width: 300px;
		height: 300px;
	}

	.btn:hover {
		background-color: var(--color-accent-hover);
		border-color: var(--color-accent-hover);
		text-decoration: none;
		transform: translateY(-2px);
		box-shadow: 0 8px 20px rgba(59, 130, 246, 0.3);
	}

	.btn:active {
		transform: translateY(0);
		box-shadow: 0 4px 10px rgba(59, 130, 246, 0.2);
	}

	.btn-secondary {
		background-color: transparent;
		color: var(--color-text);
		border: 2px solid var(--color-border-dark);
	}

	.btn-secondary::before {
		background: rgba(59, 130, 246, 0.05);
	}

	.btn-secondary:hover {
		background-color: var(--color-bg-secondary);
		border-color: var(--color-accent);
		color: var(--color-accent);
		box-shadow: 0 8px 20px rgba(59, 130, 246, 0.15);
	}

	.btn-secondary:active {
		transform: translateY(0);
		box-shadow: 0 4px 10px rgba(59, 130, 246, 0.1);
	}

	/* Section Styles */
	.section {
		padding: var(--spacing-3xl) 0;
		border-bottom: 1px solid var(--color-border);
	}

	.section:last-of-type {
		border-bottom: none;
	}

	.section-title {
		font-size: 1.875rem;
		margin-bottom: var(--spacing-xl);
		color: var(--color-text);
		font-weight: 600;
		letter-spacing: -0.015em;
		text-align: left;
	}

	.section-description {
		max-width: 100%;
		margin: 0 0 var(--spacing-xl) 0;
		font-size: 1.0625rem;
		color: var(--color-text-secondary);
		line-height: 1.7;
		text-align: left;
	}

	/* Skills Section */
	.skills-grid {
		display: grid;
		grid-template-columns: 1fr;
		gap: var(--spacing-lg);
	}
	
	@media (min-width: 768px) {
		.skills-grid {
			grid-template-columns: repeat(2, 1fr);
			gap: var(--spacing-xl);
		}
	}

	.skill-card {
		padding: var(--spacing-lg);
		background: var(--color-bg-secondary);
		border: 1px solid var(--color-border);
		border-radius: var(--radius-md);
		transition: all var(--transition-base);
	}
	
	.skill-card:hover {
		border-color: var(--color-accent);
		box-shadow: 0 0 0 1px var(--color-accent);
	}

	.skill-card h3 {
		font-size: 0.875rem;
		margin-bottom: var(--spacing-sm);
		color: var(--color-accent);
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	.skill-list {
		color: var(--color-text-secondary);
		font-size: 0.9375rem;
		line-height: 1.8;
		margin: 0;
	}

	/* Experience Section */
	.timeline {
		position: relative;
	}

	.timeline-item {
		position: relative;
		padding-left: var(--spacing-lg);
		margin-bottom: var(--spacing-2xl);
		border-left: 2px solid var(--color-border);
	}
	
	.timeline-item:last-child {
		margin-bottom: 0;
	}

	.timeline-marker {
		position: absolute;
		left: -5px;
		top: 4px;
		width: 8px;
		height: 8px;
		border-radius: 50%;
		background-color: var(--color-accent);
		border: 2px solid var(--color-bg);
	}

	.timeline-content {
		padding: 0;
	}

	.experience-header {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		gap: var(--spacing-md);
		margin-bottom: 0;
		flex-wrap: wrap;
		width: 100%;
		background: none;
		border: none;
		padding: 0;
		text-align: left;
		cursor: pointer;
		transition: all var(--transition-base);
	}
	
	.experience-header:hover {
		opacity: 0.8;
	}

	.experience-header h3 {
		font-size: 1.125rem;
		margin-bottom: 0.25rem;
		color: var(--color-text);
		font-weight: 600;
	}

	.experience-header h4 {
		font-size: 1rem;
		color: var(--color-accent);
		font-weight: 500;
		margin-bottom: 0.25rem;
	}
	
	.experience-meta {
		display: flex;
		align-items: center;
		gap: var(--spacing-sm);
	}
	
	.expand-icon {
		font-size: 0.875rem;
		color: var(--color-text-tertiary);
		transition: transform var(--transition-base);
		margin-left: var(--spacing-xs);
	}
	
	.expand-icon.expanded {
		transform: rotate(180deg);
	}

	.project-name {
		font-size: 0.875rem;
		color: var(--color-text-tertiary);
		font-style: italic;
		margin-top: 0.25rem;
	}

	.experience-meta {
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		gap: 0.25rem;
		flex-shrink: 0;
	}

	.period {
		font-weight: 500;
		color: var(--color-text-secondary);
		font-size: 0.875rem;
	}

	.location {
		font-size: 0.8125rem;
		color: var(--color-text-tertiary);
	}

	.highlights {
		list-style: none;
		padding: 0;
		margin: var(--spacing-md) 0 0 0;
	}

	.highlights li {
		position: relative;
		padding-left: 1.25rem;
		margin-bottom: var(--spacing-sm);
		color: var(--color-text-secondary);
		line-height: 1.7;
		font-size: 0.9375rem;
	}

	.highlights li::before {
		content: '•';
		position: absolute;
		left: 0;
		color: var(--color-text-tertiary);
		font-weight: bold;
	}

	.sub-projects {
		margin-top: var(--spacing-lg);
		padding-top: var(--spacing-lg);
		border-top: 1px solid rgba(255, 255, 255, 0.1);
	}

	.sub-project {
		margin-bottom: var(--spacing-lg);
	}

	.sub-project:last-child {
		margin-bottom: 0;
	}

	.sub-project-header {
		display: flex;
		justify-content: space-between;
		align-items: baseline;
		gap: var(--spacing-md);
		margin-bottom: var(--spacing-sm);
		flex-wrap: wrap;
	}

	.sub-project-header h5 {
		font-size: 1.125rem;
		color: var(--color-text);
		font-weight: 600;
		margin: 0;
	}

	.sub-period {
		font-size: 0.875rem;
		color: var(--color-text-light);
		font-weight: 500;
	}

	/* Projects Section */
	.projects-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: var(--spacing-3xl);
	}

	/* Education & Certifications Grid */
	.edu-cert-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: var(--spacing-3xl);
	}

	.education-column,
	.certifications-column {
		min-width: 0;
	}

	.education-card {
		padding: 0 0 var(--spacing-lg) 0;
		border-bottom: 1px solid var(--color-border);
		margin-bottom: var(--spacing-lg);
	}
	
	.education-card:last-child {
		border-bottom: none;
		padding-bottom: 0;
		margin-bottom: 0;
	}

	.education-card h3 {
		font-size: 1.125rem;
		color: var(--color-text);
		margin-bottom: 0.5rem;
		font-weight: 600;
	}

	.concentration {
		font-size: 0.875rem;
		color: var(--color-text-tertiary);
		margin-bottom: 0.75rem;
		font-style: italic;
	}

	.institution {
		font-size: 0.9375rem;
		color: var(--color-text-secondary);
		margin: 0;
		font-weight: 400;
	}

	.certifications-list {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.certifications-list li {
		display: flex;
		align-items: flex-start;
		gap: var(--spacing-sm);
		padding: var(--spacing-sm) 0;
		margin-bottom: 0;
		border-bottom: 1px solid var(--color-border);
	}
	
	.certifications-list li:last-child {
		border-bottom: none;
	}

	.certifications-list i {
		color: var(--color-text-tertiary);
		font-size: 1rem;
		flex-shrink: 0;
		margin-top: 0.125rem;
	}

	.certifications-list span {
		color: var(--color-text-secondary);
		line-height: 1.7;
		font-size: 0.9375rem;
	}
	
	/* Contact Section */
	.contact-header {
		text-align: center;
		margin-bottom: var(--spacing-3xl);
	}

	.contact-header .section-title {
		font-size: 1.875rem;
		font-weight: 600;
		margin-bottom: var(--spacing-md);
		color: var(--color-text);
		letter-spacing: -0.015em;
		text-align: left;
	}

	.contact-header .section-description {
		font-size: 1.0625rem;
		color: var(--color-text-secondary);
		text-align: left;
	}

	.contact-grid {
		display: grid;
		grid-template-columns: 2fr 3fr;
		gap: var(--spacing-3xl);
		align-items: start;
	}

	.contact-info {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-xl);
	}

	.info-items {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-lg);
	}

	.info-item {
		display: flex;
		align-items: flex-start;
		gap: var(--spacing-md);
		padding: var(--spacing-md);
		border-radius: var(--radius-sm);
		background: var(--color-bg-secondary);
		border: 1px solid var(--color-border);
		transition: all var(--transition-base);
	}

	.info-item:hover {
		border-color: var(--color-accent);
		transform: translateY(-2px);
	}

	.info-item i {
		font-size: 1.25rem;
		color: var(--color-accent);
		flex-shrink: 0;
		margin-top: 0.125rem;
	}

	.info-content {
		flex: 1;
	}

	.info-item h4 {
		font-size: 0.75rem;
		margin-bottom: 0.25rem;
		font-weight: 600;
		color: var(--color-text-tertiary);
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	.info-item p {
		color: var(--color-text);
		margin: 0;
		line-height: 1.5;
		font-size: 0.9375rem;
	}

	.social-section {
		padding: var(--spacing-lg);
		border-radius: var(--radius-sm);
		background: var(--color-bg-secondary);
		border: 1px solid var(--color-border);
	}

	.social-section h4 {
		font-size: 0.75rem;
		margin-bottom: var(--spacing-md);
		font-weight: 600;
		color: var(--color-text-tertiary);
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	.social-icons {
		display: flex;
		gap: var(--spacing-md);
		flex-wrap: wrap;
	}

	.social-icons a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 48px;
		height: 48px;
		border: 1px solid var(--color-border);
		border-radius: 50%;
		color: var(--color-text-secondary);
		transition: all var(--transition-base);
		text-decoration: none;
		background: var(--color-bg);
	}

	.social-icons a:hover {
		border-color: var(--color-accent);
		color: var(--color-accent);
		transform: translateY(-4px);
		box-shadow: 0 4px 12px rgba(59, 130, 246, 0.2);
	}

	.social-icons i {
		font-size: 1.25rem;
	}

	.message-card {
		padding: var(--spacing-2xl);
		background: var(--color-bg-secondary);
		border: 1px solid var(--color-border);
		border-radius: var(--radius-md);
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.message-card h3 {
		font-size: 1.5rem;
		margin-bottom: var(--spacing-md);
		font-weight: 600;
		color: var(--color-text);
	}

	.message-card p {
		margin-bottom: var(--spacing-md);
		font-size: 1rem;
		line-height: 1.7;
		color: var(--color-text-secondary);
	}
	
	.message-card p:last-of-type {
		margin-bottom: var(--spacing-xl);
	}

	.message-card .btn-primary {
		padding: 1.125rem 2.5rem;
		font-size: 1.0625rem;
		font-weight: 600;
		width: 100%;
		justify-content: center;
		background: var(--color-accent);
		color: white;
		border: 2px solid var(--color-accent);
		border-radius: var(--radius-md);
		transition: all var(--transition-base);
		position: relative;
		overflow: hidden;
	}

	.message-card .btn-primary::before {
		content: '';
		position: absolute;
		top: 50%;
		left: 50%;
		width: 0;
		height: 0;
		border-radius: 50%;
		background: rgba(255, 255, 255, 0.1);
		transform: translate(-50%, -50%);
		transition: width 0.6s, height 0.6s;
	}

	.message-card .btn-primary:hover::before {
		width: 300px;
		height: 300px;
	}

	.message-card .btn-primary:hover {
		background: var(--color-accent-hover);
		border-color: var(--color-accent-hover);
		transform: translateY(-2px);
		box-shadow: 0 8px 20px rgba(59, 130, 246, 0.3);
		color: white;
		text-decoration: none;
	}

	.message-card .btn-primary:active {
		transform: translateY(0);
		box-shadow: 0 4px 10px rgba(59, 130, 246, 0.2);
	}

	.container {
		width: 90%;
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 var(--spacing-md);
	}

	/* Scroll to top button */
	.scroll-to-top {
		position: fixed;
		bottom: var(--spacing-lg);
		right: var(--spacing-lg);
		width: 60px;
		height: 60px;
		background: var(--color-accent);
		color: white;
		border: none;
		border-radius: var(--radius-md);
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 1.5rem;
		opacity: 0;
		visibility: hidden;
		transform: translateY(20px) scale(0.9);
		transition: all var(--transition-base);
		z-index: 1000;
		box-shadow: var(--shadow-md);
	}

	.scroll-to-top.visible {
		opacity: 1;
		visibility: visible;
		transform: translateY(0) scale(1);
	}

	.scroll-to-top:hover {
		background: var(--color-accent-hover);
		transform: translateY(-4px) scale(1.05);
	}

	.scroll-to-top:active {
		transform: translateY(-4px) scale(1.05);
	}

	/* Responsive Styles */
	@media (max-width: 968px) {
		.edu-cert-grid {
			grid-template-columns: 1fr;
		}

		.timeline::before {
			left: 8px;
		}

		.timeline-item {
			padding-left: var(--spacing-lg);
		}

		.experience-meta {
			align-items: flex-start;
			text-align: left;
		}
	}

	@media (max-width: 768px) {
		.hero-content {
			flex-direction: column;
			text-align: center;
			gap: var(--spacing-xl);
		}

		.hero-image {
			width: 180px;
			height: 180px;
			margin: 0 auto;
		}

		.hero-text {
			text-align: center;
		}

		.hero-text h1 {
			font-size: 2rem;
		}

		.hero-text h2 {
			font-size: 1.125rem;
		}

		.subtitle {
			font-size: 1rem;
			max-width: 100%;
		}

		.hero-stats {
			justify-content: center;
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

		.scroll-to-top {
			bottom: var(--spacing-md);
			right: var(--spacing-md);
			width: 48px;
			height: 48px;
			font-size: 1.125rem;
		}

		.experience-header {
			flex-direction: column;
		}

		.sub-project-header {
			flex-direction: column;
			align-items: flex-start;
		}
	}

	@media (max-width: 480px) {
		.hero-text h1 {
			font-size: 1.75rem;
		}

		.hero-text h2 {
			font-size: 1rem;
		}

		.hero-image {
			width: 160px;
			height: 160px;
		}

		.hero-buttons {
			flex-direction: column;
			width: 100%;
		}

		.hero-buttons .btn {
			width: 100%;
		}

		.skills-grid {
			grid-template-columns: 1fr;
		}

		.projects-grid {
			grid-template-columns: 1fr;
		}

		.edu-cert-grid {
			grid-template-columns: 1fr;
		}

		.stat {
			font-size: 0.875rem;
		}

		.message-card .btn-primary {
			padding: 1rem 1.5rem;
			font-size: 1rem;
		}

		.message-card {
			padding: var(--spacing-lg);
		}
	}
</style>