---
layout: about
title: about
permalink: /
subtitle: Ph.D. Candidate, Electrical and Computer Engineering, <a href="https://www.ufl.edu/">University of Florida</a>

lede: Scalable, physics-guided machine learning for how polycrystalline materials evolve in three dimensions.

research:
  - title: Scalable surrogates
    text: A hybrid autoencoder–GNN surrogate for grain growth that cuts memory by up to 117× and runtime by 115× on 160³ meshes, relative to a GNN-only baseline.
    link: https://doi.org/10.1016/j.actamat.2026.122153
    link_text: Acta Materialia 2026
  - title: Physics-guided prediction
    text: 3D-PRIMME learns local grain-boundary evolution rules from Monte Carlo Potts simulations and transfers from a 100³ training domain to volumes up to 1024³ without retraining.
    link: https://arxiv.org/abs/2607.04680
    link_text: Materials & Design 2026
  - title: Vision for experiments
    text: U-Net and Segment Anything pipelines for segmenting grain structures in experimental TEM and Lab-DCT data.

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

I am a Ph.D. candidate in Electrical and Computer Engineering at the University of Florida, working in the [SmartDATA Lab](https://smartdata.ece.ufl.edu/) with Prof. [Joel B. Harley](https://smartdata.ece.ufl.edu/index.php/people/). Since 2025 I have also been collaborating with [Lawrence Livermore National Laboratory](https://www.llnl.gov/) on scalable surrogate models for materials simulation.

My research develops **scalable, physics-guided machine learning for 3D microstructure evolution**: graph neural network and hybrid CNN–GNN surrogates that emulate grain growth on large 3D meshes, and physics-regularized models that stay stable and interpretable over long time horizons. A short animation of 3D grain growth predicted by 3D-PRIMME is on the [demo page](/demo/).

More broadly, I am interested in scientific machine learning, surrogate modeling for simulation, and computer vision for experimental data. My work has been published in *Acta Materialia*, *Materials & Design*, *IEEE Transactions on Industrial Informatics*, *Structural Health Monitoring*, and IEEE IGARSS.

<p class="market"><span><strong>I am on the job market.</strong> I am seeking research scientist / machine learning engineer roles in industry and postdoctoral positions in scientific ML, materials informatics, or related areas. Please feel free to reach out by <a href="mailto:zhihui.tian@ufl.edu">email</a>.</span></p>
