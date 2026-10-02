---
layout: about
title: about
permalink: /
subtitle: Ph.D. Candidate, Electrical and Computer Engineering, <a href="https://www.ufl.edu/">University of Florida</a>

lede: Machine learning for materials in motion.

selected_papers: true # includes a list of papers marked as "selected={true}"
social: false # contact details live in the sidebar

announcements:
  enabled: true
  scrollable: false
  limit: 4

latest_posts:
  enabled: false
  scrollable: true
  limit: 3
---

I develop **physics-guided machine learning for faster, larger-scale materials simulation**. My work combines neural networks with physical constraints to predict how the internal grain structure of a material changes over time.

I am a Ph.D. candidate in Electrical and Computer Engineering at the University of Florida, advised by Prof. [Joel B. Harley](https://smartdata.ece.ufl.edu/index.php/people/) in the [SmartDATA Lab](https://smartdata.ece.ufl.edu/). I also collaborate with [Lawrence Livermore National Laboratory](https://www.llnl.gov/) on scalable surrogate models.

<div class="market"><span><strong>Open to research and ML opportunities.</strong> Seeking research scientist, machine learning engineer, and postdoctoral roles in scientific ML and materials informatics.</span></div>

<div class="home-actions">
  <a class="home-action primary" href="{{ '/assets/rendercv/rendercv_output/Zhihui_Tian_CV.pdf' | relative_url }}">CV <span aria-hidden="true">↗</span></a>
  <a class="home-action" href="mailto:zhihui.tian@ufl.edu">Get in touch</a>
  <a class="home-action" href="https://scholar.google.com/citations?user=Hcj4-PkAAAAJ">Google Scholar <span aria-hidden="true">↗</span></a>
</div>

<section class="research-highlights" aria-labelledby="research-heading">
  <h2 class="section-label" id="research-heading">Research highlights</h2>
  <div class="research-grid">
    <article class="research-card">
      <p class="research-kicker">Efficient simulation</p>
      <h3>Large 3D models, smaller computational cost.</h3>
      <p class="research-metric">115× <span>maximum speedup</span></p>
      <p>A hybrid CNN–GNN surrogate achieves up to 117× lower memory use and 115× faster runtime than a GNN-only baseline on meshes up to 160³.</p>
      <p class="research-contribution"><strong>My contribution:</strong> latent-space inference, scalability experiments, and statistical benchmarking against Monte Carlo simulations.</p>
      <a href="https://doi.org/10.1016/j.actamat.2026.122153">Read the paper <span aria-hidden="true">↗</span></a>
    </article>
    <article class="research-card">
      <p class="research-kicker">Physics-guided prediction</p>
      <h3>Learn locally. Predict at a larger scale.</h3>
      <p class="research-metric">1024³ <span>grid points</span></p>
      <p>3D-PRIMME transfers from a 100³ training domain to domains up to 1024³ without retraining, reproducing grain-growth kinetics and topological statistics.</p>
      <p class="research-contribution"><strong>My contribution:</strong> a scalable 3D architecture and validation of predictions across space and time.</p>
      <a href="https://arxiv.org/abs/2607.04680">Read the paper <span aria-hidden="true">↗</span></a>
    </article>
  </div>
</section>

<section class="home-demo" aria-labelledby="demo-heading">
  <h2 class="section-label" id="demo-heading">See the model in action</h2>
  <figure>
    <video controls muted playsinline preload="none" poster="{{ '/assets/img/demo_3dprimme_poster.png' | relative_url }}" aria-label="3D-PRIMME prediction of three-dimensional grain growth" aria-describedby="demo-caption">
      <source src="{{ '/assets/video/grain_growth_3dprimme.mp4' | relative_url }}" type="video/mp4">
      <a href="{{ '/assets/video/grain_growth_3dprimme.mp4' | relative_url }}">Download the grain-growth video</a>.
    </video>
    <figcaption id="demo-caption">A material’s internal grain structure evolves over time: small grains shrink, while others grow. Here, 3D-PRIMME predicts that evolution step by step.</figcaption>
  </figure>
  <a href="{{ '/demo/' | relative_url }}">Explore the research demo <span aria-hidden="true">→</span></a>
</section>
