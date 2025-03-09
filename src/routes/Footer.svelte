<script>
	const currentYear = new Date().getFullYear();
</script>

<footer>
	<div class="container">
		<div class="footer-content">
			<div class="copyright">
				<p>&copy; {currentYear} Devin Hill. All rights reserved.</p>
			</div>
			<div class="social">
				<a href="https://linkedin.com/in/iamdevinhill" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
					<i class="fab fa-linkedin"></i>
				</a>
				<a href="https://github.com/iamdevinhill" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
					<i class="fab fa-github"></i>
				</a>
				<!-- <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
					<i class="fab fa-twitter"></i>
				</a> -->
			</div>
		</div>
	</div>
</footer>

<style>
	footer {
		background-color: var(--color-bg-0);
		padding: 2rem 0;
		margin-top: 1rem;
	}

	.footer-content {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.copyright p {
		margin: 0;
		color: var(--color-text-light);
	}

	.social {
		display: flex;
	}

	.social a {
		font-size: 1.3rem;
		color: var(--color-text-light);
		margin-left: 1rem;
		transition: color 0.2s;
	}

	.social a:hover {
		color: var(--color-theme-1);
	}

	@media (max-width: 768px) {
		.footer-content {
			flex-direction: column;
			text-align: center;
		}

		.copyright {
			margin-bottom: 1rem;
		}

		.social a {
			margin: 0 0.5rem;
		}
	}
</style>