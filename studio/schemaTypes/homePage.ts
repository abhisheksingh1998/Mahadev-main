import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  groups: [
    {name: 'hero', title: 'Hero'},
    {name: 'matches', title: 'Live Matches'},
    {name: 'casino', title: 'Casino'},
    {name: 'about', title: 'About'},
    {name: 'features', title: 'Why Us'},
    {name: 'betBig', title: 'Bet Big'},
    {name: 'blog', title: 'Blog Preview'},
    {name: 'faq', title: 'FAQ'},
  ],
  fields: [
    defineField({
      name: 'heroSlides',
      title: 'Hero Slides',
      type: 'array',
      group: 'hero',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'image', type: 'image', title: 'Background Image', options: {hotspot: true}},
            {name: 'subtitle', type: 'string', title: 'Subtitle'},
            {name: 'title', type: 'string', title: 'Title'},
            {
              name: 'titleHighlight',
              type: 'string',
              title: 'Title Highlight',
              description: 'Gold highlighted part of the title',
            },
            {name: 'description', type: 'text', title: 'Description', rows: 3},
            {name: 'primaryCtaLabel', type: 'string', title: 'Primary CTA Label'},
            {name: 'primaryCtaIcon', type: 'string', title: 'Primary CTA Icon (Font Awesome class, e.g. fa-user-plus)'},
            {name: 'secondaryCtaLabel', type: 'string', title: 'Secondary CTA Label'},
          ],
          preview: {
            select: {title: 'title', subtitle: 'subtitle', media: 'image'},
          },
        },
      ],
    }),
    defineField({
      name: 'matchesSection',
      title: 'Live Matches Section',
      type: 'object',
      group: 'matches',
      fields: [
        {name: 'title', type: 'string', title: 'Section Title'},
        {name: 'subtitle', type: 'text', title: 'Section Subtitle', rows: 2},
        {
          name: 'categories',
          title: 'Sport Categories',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {name: 'name', type: 'string', title: 'Category Name'},
                {
                  name: 'icon',
                  type: 'string',
                  title: 'Icon class',
                  description: 'Font Awesome solid class, e.g. fa-baseball-bat-ball',
                },
                {
                  name: 'matches',
                  title: 'Matches',
                  type: 'array',
                  of: [
                    {
                      type: 'object',
                      fields: [
                        {name: 'teams', type: 'string', title: 'Teams'},
                        {name: 'league', type: 'string', title: 'League'},
                        {name: 'time', type: 'string', title: 'Match Time'},
                        {
                          name: 'status',
                          type: 'string',
                          title: 'Status',
                          initialValue: 'LIVE',
                        },
                      ],
                      preview: {
                        select: {title: 'teams', subtitle: 'league'},
                      },
                    },
                  ],
                },
              ],
              preview: {
                select: {title: 'name'},
              },
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'casinoSection',
      title: 'Casino Section',
      type: 'object',
      group: 'casino',
      fields: [
        {name: 'title', type: 'string', title: 'Section Title'},
        {name: 'subtitle', type: 'text', title: 'Section Subtitle', rows: 2},
        {
          name: 'games',
          title: 'Games',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {name: 'image', type: 'image', title: 'Image', options: {hotspot: true}},
                {name: 'name', type: 'string', title: 'Name'},
                {name: 'provider', type: 'string', title: 'Provider Footer'},
                {name: 'badge', type: 'string', title: 'Badge Text'},
                {
                  name: 'badgeStyle',
                  type: 'string',
                  title: 'Badge Style',
                  options: {
                    list: [
                      {title: 'Default', value: 'default'},
                      {title: 'Gold', value: 'gold'},
                      {title: 'Cyan', value: 'cyan'},
                    ],
                  },
                  initialValue: 'default',
                },
              ],
              preview: {
                select: {title: 'name', subtitle: 'provider', media: 'image'},
              },
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'aboutSection',
      title: 'About Section',
      type: 'object',
      group: 'about',
      fields: [
        {name: 'title', type: 'string', title: 'Title'},
        {name: 'eyebrow', type: 'string', title: 'Eyebrow'},
        {name: 'paragraphs', type: 'array', of: [{type: 'text'}], title: 'Paragraphs'},
        {name: 'ctaLabel', type: 'string', title: 'CTA Label'},
      ],
    }),
    defineField({
      name: 'featuresSection',
      title: 'Why Consider Us',
      type: 'object',
      group: 'features',
      fields: [
        {name: 'title', type: 'string', title: 'Section Title'},
        {name: 'subtitle', type: 'text', title: 'Section Subtitle', rows: 2},
        {
          name: 'features',
          title: 'Features',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {name: 'image', type: 'image', title: 'Image', options: {hotspot: true}},
                {name: 'title', type: 'string', title: 'Title'},
                {name: 'description', type: 'text', title: 'Description', rows: 5},
              ],
              preview: {
                select: {title: 'title', media: 'image'},
              },
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'betBigSection',
      title: 'Bet Big Section',
      type: 'object',
      group: 'betBig',
      fields: [
        {name: 'image', type: 'image', title: 'Image', options: {hotspot: true}},
        {name: 'eyebrow', type: 'string', title: 'Eyebrow'},
        {name: 'title', type: 'string', title: 'Title'},
        {name: 'titleHighlight', type: 'string', title: 'Title Highlight'},
        {name: 'description', type: 'text', title: 'Description', rows: 4},
        {name: 'ctaLabel', type: 'string', title: 'CTA Label'},
      ],
    }),
    defineField({
      name: 'blogSection',
      title: 'Blog Preview Section',
      type: 'object',
      group: 'blog',
      fields: [
        {name: 'title', type: 'string', title: 'Section Title'},
        {name: 'subtitle', type: 'text', title: 'Section Subtitle', rows: 2},
        {
          name: 'featuredPosts',
          title: 'Featured Posts (home preview)',
          type: 'array',
          of: [{type: 'reference', to: [{type: 'post'}]}],
          validation: (Rule) => Rule.max(3),
        },
      ],
    }),
    defineField({
      name: 'faqSection',
      title: 'FAQ Section',
      type: 'object',
      group: 'faq',
      fields: [
        {name: 'title', type: 'string', title: 'Section Title'},
        {name: 'subtitle', type: 'text', title: 'Section Subtitle', rows: 2},
        {
          name: 'items',
          title: 'FAQ Items',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {name: 'question', type: 'string', title: 'Question'},
                {name: 'answer', type: 'text', title: 'Answer', rows: 4},
              ],
              preview: {
                select: {title: 'question'},
              },
            },
          ],
        },
      ],
    }),
  ],
  preview: {
    prepare: () => ({title: 'Home Page'}),
  },
})
