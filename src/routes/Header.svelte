<script>
	import { page } from '$app/stores';
	import { browser } from '$app/environment'; // Import browser check
	import { onMount } from 'svelte';
	import { get } from 'svelte/store';

	let isMenuOpen = false;

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;

		if (browser) {
			// Prevent body scrolling when menu is open
			if (isMenuOpen) {
				document.body.style.overflow = 'hidden';
				document.body.style.position = 'fixed';
				document.body.style.width = '100%';
				document.body.style.height = '100%';
			} else {
				document.body.style.overflow = '';
				document.body.style.position = '';
				document.body.style.width = '';
				document.body.style.height = '';
			}
		}
	}

	// Close menu when changing pages
	$: if (browser && get(page)?.url?.pathname) {
		isMenuOpen = false;
		document.body.style.overflow = '';
		document.body.style.position = '';
		document.body.style.width = '';
		document.body.style.height = '';
	}

	// Clean up on component unmount
	onMount(() => {
		if (browser) {
			return () => {
				document.body.style.overflow = '';
				document.body.style.position = '';
				document.body.style.width = '';
				document.body.style.height = '';
			};
		}
	});

	/**
	 * @param {string} sectionId
	 */
	function scrollToSection(sectionId) {
		if (browser) {
			const element = document.getElementById(sectionId);
			if (element) {
				// Close mobile menu first if it's open
				if (isMenuOpen) {
					toggleMenu();
				}
				
				// Add a small delay to ensure menu is closed before scrolling
				setTimeout(() => {
					element.scrollIntoView({ 
						behavior: 'smooth',
						block: 'start'
					});
				}, 100);
			}
		}
	}
</script>

<header>
	<div class="container">
		<div class="header-content">
			<div class="logo">
				<a href="/">Devin Hill</a>
			</div>

			<!-- Desktop Navigation -->
			<nav class="desktop-nav">
				<ul>
					<li>
						<a href="/">Home</a>
					</li>
					<li>
						<button on:click={() => scrollToSection('skills')} class="nav-link">Skills</button>
					</li>
					<li>
						<button on:click={() => scrollToSection('experience')} class="nav-link">Experience</button>
					</li>
					<li>
						<button on:click={() => scrollToSection('education')} class="nav-link">Education</button>
					</li>
					<li>
						<button on:click={() => scrollToSection('contact')} class="nav-link">Contact</button>
					</li>
				</ul>
			</nav>

			<!-- Desktop Social Icons -->
			<div class="social desktop-social">
				<a href="https://linkedin.com/in/iamdevinhill" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
					<i class="fab fa-linkedin"></i>
				</a>
				<a href="https://github.com/iamdevinhill" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
					<i class="fab fa-github"></i>
				</a>
				<a href="https://www.youtube.com/@devinhill1211" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
					<i class="fab fa-youtube"></i>
				</a>
			</div>
			
			<!-- Hamburger Menu Button -->
			<button 
				class="hamburger" 
				aria-label="Toggle Menu" 
				aria-expanded={isMenuOpen} 
				on:click={toggleMenu}
			>
				<span class:open={isMenuOpen}></span>
				<span class:open={isMenuOpen}></span>
				<span class:open={isMenuOpen}></span>
			</button>
		</div>
	</div>
	
	<!-- Full Screen Mobile Menu - Always render but control visibility with CSS -->
	<div class="mobile-menu" class:open={isMenuOpen} aria-hidden={!isMenuOpen}>
		<div class="mobile-menu-content">
			<nav>
				<ul>
					<li>
						<a href="/" on:click={toggleMenu}>Home</a>
					</li>
					<li>
						<button on:click={() => scrollToSection('skills')} class="nav-link">Skills</button>
					</li>
					<li>
						<button on:click={() => scrollToSection('experience')} class="nav-link">Experience</button>
					</li>
					<li>
						<button on:click={() => scrollToSection('education')} class="nav-link">Education</button>
					</li>
					<li>
						<button on:click={() => scrollToSection('contact')} class="nav-link">Contact</button>
					</li>
				</ul>
			</nav>
			
			<div class="social mobile-social">
				<a href="https://linkedin.com/in/iamdevinhill" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
					<i class="fab fa-linkedin"></i>
				</a>
				<a href="https://github.com/iamdevinhill" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
					<i class="fab fa-github"></i>
				</a>
				<a href="https://www.youtube.com/@devinhill1211" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
					<i class="fab fa-youtube"></i>
				</a>
			</div>
		</div>
	</div>
</header>

<style>
	/* Global styles to prevent horizontal scrolling and enable smooth scrolling */
	:global(html) {
		scroll-behavior: smooth;
	}
	
	:global(html, body) {
		overflow-x: hidden;
		width: 100%;
		max-width: 100%;
		position: relative;
	}
	
	header {
		background: var(--color-bg);
		border-bottom: 1px solid var(--color-border);
		position: sticky;
		top: 0;
		z-index: 100;
		width: 100%;
	}

	.header-content {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 80px;
		position: relative;
		width: 100%;
	}

	.logo a {
		font-size: 1.125rem;
		font-weight: 600;
		color: var(--color-text);
		text-decoration: none;
		transition: color var(--transition-base);
	}
	
	.logo a:hover {
		color: var(--color-accent);
	}

	nav {
		display: flex;
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
	}

	li {
		position: relative;
		height: 100%;
		margin: 0 0.5rem;
	}

	nav a, .nav-link {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 1rem;
		color: var(--color-text);
		font-weight: 400;
		font-size: 0.9375rem;
		text-decoration: none;
		transition: color var(--transition-base);
		background: none;
		border: none;
		cursor: pointer;
		font-family: inherit;
	}
	
	nav a:hover, .nav-link:hover {
		color: var(--color-accent);
	}

	.social {
		display: flex;
		align-items: center;
		gap: var(--spacing-md);
	}

	.social a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 48px;
		height: 48px;
		font-size: 1.25rem;
		color: var(--color-text-secondary);
		border-radius: 50%;
		border: 1px solid var(--color-border);
		background: var(--color-bg);
		transition: all var(--transition-base);
		text-decoration: none;
	}

	.social a:hover {
		color: var(--color-accent);
		border-color: var(--color-accent);
		transform: translateY(-4px);
		box-shadow: 0 4px 12px rgba(59, 130, 246, 0.2);
	}
	
	/* Hamburger Menu with transition */
    .hamburger {
        display: none;
        background: none;
        border: none;
        cursor: pointer;
        padding: 10px;
        margin-right: 0;
        width: 50px;
        height: 44px;
        position: relative;
        z-index: 1000;
        transition: transform var(--transition-fast);
    }

    .hamburger:active {
        transform: scale(0.95);
    }

    .hamburger span {
        display: block;
        width: 30px;
        height: 3px;
        background-color: var(--color-text);
        margin: 5px 0;
        border-radius: 2px;
        transition: transform var(--transition-base), opacity var(--transition-fast);
    }

    .hamburger span.open:nth-child(1) {
        transform: rotate(45deg) translate(6px, 6px);
    }

    .hamburger span.open:nth-child(2) {
        opacity: 0;
    }

    .hamburger span.open:nth-child(3) {
        transform: rotate(-45deg) translate(6px, -6px);
    }
	
	/* Full Screen Mobile Menu - Updated with faster slide-in animation */
    .mobile-menu {
        position: fixed;
        top: 0;
        right: 0;
        width: 100%;
        height: 100vh;
        background-color: rgba(18, 18, 18, 0.98);
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
        z-index: 999;
        opacity: 0;
        visibility: hidden;
        transform: translateX(100%);
        transition: opacity var(--transition-base), visibility var(--transition-base), transform var(--transition-base);
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .mobile-menu.open {
        opacity: 1;
        visibility: visible;
        transform: translateX(0);
    }
	
	.mobile-menu-content {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
		max-height: 100vh;  /* Limit height to viewport */
		padding: 0 1rem;    /* Add horizontal padding */
		box-sizing: border-box;
		overflow: auto;     /* Change to auto to handle overflow properly */
	}
	
	.mobile-menu nav {
		display: block;
		width: 100%;
	}
	
	.mobile-menu ul {
		flex-direction: column;
		align-items: center;
		width: 100%;
		padding: 0 2rem;
		box-sizing: border-box;
	}
	
	.mobile-menu li {
		width: 100%;
		margin: 0.5rem 0;
		text-align: center;
	}
	
	.mobile-menu a, .mobile-menu .nav-link {
		padding: 0.75rem;
		width: 100%;
		font-size: 1.125rem;
		font-weight: 500;
		justify-content: center;
		transition: all var(--transition-base);
		color: var(--color-text);
	}
	
	.mobile-menu a:hover, .mobile-menu .nav-link:hover {
		color: var(--color-accent);
		transform: translateX(4px);
	}
	
	.mobile-social {
		justify-content: center;
		margin-top: 3rem;
		gap: 1rem;
	}
	
	.mobile-social a {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 48px;
		height: 48px;
		font-size: 1.25rem;
		border-radius: 50%;
		background: var(--color-bg);
		border: 1px solid var(--color-border);
		transition: all var(--transition-base);
	}
	
	.mobile-social a:hover {
		background: var(--color-bg);
		border-color: var(--color-accent);
		color: var(--color-accent);
		transform: translateY(-4px);
		box-shadow: 0 8px 20px rgba(59, 130, 246, 0.3);
	}

	.container {
		width: 100%;
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 1rem;
		box-sizing: border-box;
	}

	@media (max-width: 768px) {
		.desktop-nav,
		.desktop-social {
			display: none;
		}
		
		.hamburger {
			display: block;
		}
		
		.header-content {
			padding: 0 1rem;
		}
		
		/* Adjust mobile menu for smaller screens */
		.mobile-menu li {
			margin: 1rem 0;
		}
		
		.mobile-menu a, .mobile-menu .nav-link {
			font-size: 1.75rem;
		}
		
		.mobile-social {
			margin-top: 2rem;
		}
		
		.mobile-social a {
			font-size: 2rem;
			margin: 0 1rem;
		}
	}

	@media (min-width: 769px) {
		.mobile-menu {
			display: none !important;
		}
	}
</style>