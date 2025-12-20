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
				<a href="https://www.youtube.com/@devinhill1211" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
					<i class="fab fa-youtube"></i>
				</a>
			</div>
		</div>
	</div>
</footer>

<style>
	footer {
		background: var(--color-bg);
		border-top: 1px solid var(--color-border);
		padding: var(--spacing-2xl) 0;
		margin-top: var(--spacing-3xl);
	}

	.footer-content {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: var(--spacing-lg);
	}

	.copyright p {
		margin: 0;
		color: var(--color-text-tertiary);
		font-size: 0.875rem;
	}

	.social {
		display: flex;
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
		border: 1px solid var(--color-border);
		border-radius: 50%;
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

	@media (max-width: 768px) {
		.footer-content {
			flex-direction: column;
			text-align: center;
			gap: var(--spacing-md);
		}

		.copyright {
			margin-bottom: 0;
		}

		.social {
			justify-content: center;
		}
	}
</style>