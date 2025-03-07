<script>
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
  </script>
  
  <svelte:head>
	<title>Contact | Devin Hill</title>
	<meta name="description" content="Get in touch with Devin Hill" />
  </svelte:head>
  
  <section class="contact-header">
	<div class="container">
	  <h1>Get in Touch</h1>
	  <p>Have a project in mind or just want to say hello? Hit me up.</p>
	</div>
  </section>
  
  <section class="contact-content section">
	<div class="container">
	  <div class="contact-grid">
		<div class="contact-info">
		  <h2>Contact Information</h2>
		  <div class="info-item">
			<i class="fas fa-envelope"></i>
			<div>
			  <h3>Email</h3>
			  <a href="mailto:{contactInfo.email}?subject=Inquiry%20about%20Collaboration%20or%20Project%20Opportunity&body=Hi%20Devin,%0A%0AI%20hope%20this%20email%20finds%20you%20well.%20I%20recently%20came%20across%20your%20contact%20information%20and%20am%20reaching%20out%20to%20inquire%20about%20potential%20collaboration%20or%20project%20opportunities.%0A%0AI%20am%20interested%20in%20discussing%20how%20we%20might%20work%20together,%20whether%20it's%20in%20the%20realm%20of%20data%20solutions,%20music,%20or%20another%20area.%20If%20you%20are%20open%20to%20new%20opportunities,%20I%20would%20love%20to%20explore%20ways%20we%20can%20collaborate.%0A%0APlease%20let%20me%20know%20your%20availability,%20and%20we%20can%20schedule%20a%20time%20to%20discuss%20further.%0A%0AI%20look%20forward%20to%20connecting%20with%20you!%0A%0ABest%20regards,%0A%5BYour%20Name%5D%0A%5BYour%20Contact%20Information%5D" class="btn">Send Email</a>
			</div>
		  </div>
		  <div class="info-item">
			<i class="fas fa-map-marker-alt"></i>
			<div>
			  <h3>Location</h3>
			  <p>{contactInfo.location}</p>
			</div>
		  </div>
		  <div class="info-item">
			<i class="fas fa-calendar-check"></i>
			<div>
			  <h3>Availability</h3>
			  <p>{contactInfo.availability}</p>
			</div>
		  </div>
		  <div class="social-links">
			<h3>Connect with me</h3>
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
			<h2>Let's Work Together</h2>
			<p>
			  Whether you're looking for a data solution, interested in a music collaboration, or just want to connect, 
			  I'm always open to new opportunities and conversations.
			</p>
			<p>
			  Feel free to reach out via email. I typically respond within 24-48 hours.
			</p>
			<a href="mailto:{contactInfo.email}?subject=Inquiry%20about%20Collaboration%20or%20Project%20Opportunity&body=Hi%20Devin,%0A%0AI%20hope%20this%20email%20finds%20you%20well.%20I%20recently%20came%20across%20your%20contact%20information%20and%20am%20reaching%20out%20to%20inquire%20about%20potential%20collaboration%20or%20project%20opportunities.%0A%0AI%20am%20interested%20in%20discussing%20how%20we%20might%20work%20together,%20whether%20it's%20in%20the%20realm%20of%20data%20solutions,%20music,%20or%20another%20area.%20If%20you%20are%20open%20to%20new%20opportunities,%20I%20would%20love%20to%20explore%20ways%20we%20can%20collaborate.%0A%0APlease%20let%20me%20know%20your%20availability,%20and%20we%20can%20schedule%20a%20time%20to%20discuss%20further.%0A%0AI%20look%20forward%20to%20connecting%20with%20you!%0A%0ABest%20regards,%0A%5BYour%20Name%5D%0A%5BYour%20Contact%20Information%5D" class="btn btn-large">Send Me a Message</a>
		  </div>
		</div>
	  </div>
	</div>
  </section>
  
  <style>
	.contact-header {
	  background-color: var(--color-bg-1);
	  color: white;
	  padding: 1rem 0;
	  text-align: center;
	}
  
	.contact-header h1 {
	  font-size: 3rem;
	  margin-bottom: 1rem;
	}
  
	.contact-header p {
	  font-size: 1.2rem;
	  max-width: 800px;
	  margin: 0 auto;
	}
  
	.contact-content {
	  padding: 5rem 0;
	}
  
	.contact-grid {
	  display: grid;
	  grid-template-columns: 1fr 1fr;
	  gap: 4rem;
	}
  
	.contact-info h2, .contact-message h2 {
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
  
	.info-item h3 {
	  font-size: 1.3rem;
	  margin-bottom: 0.5rem;
	}
  
	.info-item p {
	  color: var(--color-text-light);
	  margin-bottom: 1rem;
	}
  
	.social-links h3 {
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
  
	@media (max-width: 768px) {
	  .contact-grid {
		grid-template-columns: 1fr;
	  }
  
	  .contact-info {
		margin-bottom: 3rem;
	  }
	}
  </style>
  