export type Project = {
  title: string;
  summary: string;
  description: string;
  tags: string[];
  repoUrl?: string;
  liveUrl?: string;
  publicationUrl?: string;
};

export const projects: Project[] = [
  {
    title: 'mate-wheel',
    summary: 'A yerba-mate sensory analysis tool that treats editorial content as structured data and renders it through a Sunburst visualization.',
    description:
      'I built the content pipeline around Astro Content Collections so taxonomy and narrative data are validated at build time. The visualization only works because the content model is strict.',
    tags: ['Astro', 'TypeScript', 'data modeling', 'visualization'],
    repoUrl: 'https://github.com/rodrgz/mate-wheel',
    liveUrl: 'https://rodrgz.github.io/mate-wheel'
  },
  {
    title: '2D3LayerCantileverBeam',
    summary: 'Research code for a three-layer cantilever beam problem, pairing analytical derivation with XFEM numerical verification.',
    description:
      'The project implements the solution in Julia and Fortran and supports parametric studies across material properties, layer geometry, and loading conditions. I like it because it makes the verification story explicit instead of burying it in the paper.',
    tags: ['Fortran', 'Julia', 'XFEM', 'computational mechanics'],
    repoUrl: 'https://github.com/rodrgz/2D3LayerCantileverBeam',
    publicationUrl: 'https://doi.org/10.1007/s40430-025-05779-4'
  },
  {
    title: 'histop',
    summary: 'A Rust CLI that turns shell history into something easier to inspect.',
    description:
      'Small project, but representative of how I like developer tooling: fast, direct, and built around actual command-line habits instead of extra ceremony.',
    tags: ['Rust', 'CLI', 'developer tooling'],
    repoUrl: 'https://github.com/rodrgz/histop'
  }
];
