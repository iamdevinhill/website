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
		background: linear-gradient(180deg, var(--color-bg-0) 0%, var(--color-bg-1) 100%);
		border-top: 1px solid rgba(255, 255, 255, 0.05);
		padding: var(--spacing-xl) 0;
		margin-top: var(--spacing-2xl);
		position: relative;
	}
	
	footer::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: 1px;
		background: linear-gradient(90deg, transparent, var(--color-theme-1), transparent);
	}

	.footer-content {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: var(--spacing-lg);
	}

	.copyright p {
		margin: 0;
		color: var(--color-text-light);
		font-size: 0.9375rem;
	}

	.social {
		display: flex;
		gap: var(--spacing-sm);
	}

	.social a {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 40px;
		height: 40px;
		font-size: 1.125rem;
		color: var(--color-text);
		background-color: rgba(255, 255, 255, 0.05);
		border-radius: var(--radius-sm);
		transition: all var(--transition-base);
	}

	.social a:hover {
		color: white;
		background: linear-gradient(135deg, var(--color-theme-1), var(--color-theme-2));
		transform: translateY(-2px);
		box-shadow: var(--shadow-sm), var(--shadow-glow);
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