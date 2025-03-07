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
					<li class:active={$page.url.pathname === '/'} aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
						<a href="/">Home</a>
					</li>
					<li class:active={$page.url.pathname === '/projects'} aria-current={$page.url.pathname === '/projects' ? 'page' : undefined}>
						<a href="/projects">Projects</a>
					</li>
					<li class:active={$page.url.pathname === '/contact'} aria-current={$page.url.pathname === '/contact' ? 'page' : undefined}>
						<a href="/contact">Contact</a>
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
					<li class:active={$page.url.pathname === '/'} aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
						<a href="/" on:click={toggleMenu}>Home</a>
					</li>
					<li class:active={$page.url.pathname === '/projects'} aria-current={$page.url.pathname === '/projects' ? 'page' : undefined}>
						<a href="/projects" on:click={toggleMenu}>Projects</a>
					</li>
					<li class:active={$page.url.pathname === '/contact'} aria-current={$page.url.pathname === '/contact' ? 'page' : undefined}>
						<a href="/contact" on:click={toggleMenu}>Contact</a>
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
			</div>
		</div>
	</div>
</header>

<style>
	/* Global styles to prevent horizontal scrolling */
	:global(html, body) {
		overflow-x: hidden;
		width: 100%;
		max-width: 100%;
		position: relative;
	}
	
	header {
		background-color: var(--color-bg-0);
		box-shadow: 0 2px 4px rgba(59, 130, 246, 1);
		position: sticky;
		top: 0;
		z-index: 100;
		width: 100%;
	}

	.header-content {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 70px;
		position: relative;
		width: 100%;
	}

	.logo a {
		font-size: 1.5rem;
		font-weight: 700;
		color: var(--color-text);
		text-decoration: none;
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

	li[aria-current='page'] a,
	li.active a {
		color: var(--color-theme-1);
		font-weight: 600;
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		color: var(--color-text);
		font-weight: 500;
		font-size: 1.2rem;
		text-decoration: none;
		transition: color 0.2s;
	}

	nav a:hover {
		color: var(--color-theme-1);
	}

	.social {
		display: flex;
		align-items: center;
	}

	.social a {
		font-size: 1.3rem;
		color: var(--color-text);
		margin-left: 1rem;
		transition: color 0.2s;
	}

	.social a:hover {
		color: var(--color-theme-1);
	}
	
	/* Hamburger Menu with transition */
    .hamburger {
        display: none;
        background: none;
        border: none;
        cursor: pointer;
        padding: 10px;
        margin-right: 10px;
        width: 50px;
        height: 44px;
        position: relative;
        z-index: 1000;
        transition: transform 0.2s ease; /* Add transition for the entire button */
    }

    /* Optional: Add a subtle transform when clicked */
    .hamburger:active {
        transform: scale(0.95);
    }

    .hamburger span {
        display: block;
        width: 30px;
        height: 3px;
        background-color: var(--color-text);
        margin: 5px 0;
        /* Make the span transitions a bit faster and more responsive */
        transition: transform 0.25s ease, opacity 0.2s ease;
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
        background-color: var(--color-bg-1);
        z-index: 999;
        opacity: 0;
        visibility: hidden;
        /* Position menu off-screen to the right by default */
        transform: translateX(100%);
        /* Faster animation: reduced from 0.4s to 0.25s for transform */
        transition: opacity 0.3s ease, visibility 0.3s ease, transform 0.25s ease;
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
		margin: 1.5rem 0;
		text-align: center;
	}
	
	.mobile-menu a {
		padding: 0.75rem;
		width: 100%;
		font-size: 2rem;
		justify-content: center;
	}
	
	.mobile-social {
		justify-content: center;
		margin-top: 3rem;
	}
	
	.mobile-social a {
		font-size: 2.5rem;
		margin: 0 1.5rem;
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
		
		.mobile-menu a {
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