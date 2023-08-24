export type Publication = {
  title: string;
  authors: string[];
  date: string;
  venue: string;
  volume?: string;
  issue?: string;
  pages?: string;
  publisher?: string;
  description: string;
  doi?: string;
  url?: string;
  file?: string;
  codeUrl?: string;
  tags: string[];
};

export const publications: Publication[] = [
  {
    title: 'Assessment of EqP in XFEM for weak discontinuities',
    authors: ['Erik da Rosa Rodriguez', 'Erik Rodriguez Rossi'],
    date: '2023-06-01',
    venue: 'Journal of the Brazilian Society of Mechanical Sciences and Engineering',
    volume: '45',
    issue: '6',
    pages: '312',
    publisher: 'Springer Berlin Heidelberg',
    description:
      'A paper on how Equivalent Polynomials behave in XFEM for weak discontinuities, especially around the cases that tend to break clean narratives: bi-material interfaces, blending elements, local enrichment, and numerical integration choices.',
    tags: ['XFEM', 'finite element method', 'numerical integration']
  },
  {
    title: 'Revisiting the bi-dimensional elastic three-layer beam analytical solution: a novel solution for various loads followed by an XFEM numerical verification',
    authors: ['Erik da Rosa Rodriguez', 'Erik Rodriguez Rossi'],
    date: '2025-10-01',
    venue: 'Journal of the Brazilian Society of Mechanical Sciences and Engineering',
    volume: '47',
    issue: '10',
    pages: '466',
    publisher: 'Springer Berlin Heidelberg',
    description:
      'A three-layer cantilever beam solution based on Airy stress functions, followed by XFEM verification and released with open-source code. The combination matters: derivation, numerical checking, and reproducibility in one place.',
    doi: '10.1007/s40430-025-05779-4',
    url: 'https://doi.org/10.1007/s40430-025-05779-4',
    codeUrl: 'https://github.com/rodrgz/2D3LayerCantileverBeam',
    tags: ['analytical solution', 'XFEM', 'Fortran', 'Julia']
  }
];
